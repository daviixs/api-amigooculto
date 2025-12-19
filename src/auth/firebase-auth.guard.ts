import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
  Inject,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import * as admin from 'firebase-admin';
import { PrismaService } from '../database/prisma.service';
import { FIREBASE_ADMIN } from './firebase-admin.provider';
import { IS_PUBLIC_KEY } from './decorators/public.decorator';

@Injectable()
export class FirebaseAuthGuard implements CanActivate {
  constructor(
    @Inject(FIREBASE_ADMIN) private readonly firebaseAdmin: typeof admin,
    private readonly prisma: PrismaService,
    private readonly reflector: Reflector,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    // Verificar se a rota é pública
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (isPublic) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers.authorization;

    // Verificar se o header Authorization existe
    if (!authHeader) {
      throw new UnauthorizedException(
        'Token de autenticação não fornecido. Use o header Authorization: Bearer <token>',
      );
    }

    // Extrair o token do header "Bearer <token>"
    const token = this.extractTokenFromHeader(authHeader);

    if (!token) {
      throw new UnauthorizedException(
        'Formato de token inválido. Use: Authorization: Bearer <token>',
      );
    }

    try {
      // Validar o token com Firebase Admin SDK
      const decodedToken = await this.firebaseAdmin.auth().verifyIdToken(token);

      // Anexar informações do Firebase ao request
      request['firebaseUser'] = decodedToken;

      // Buscar ou criar usuário no banco de dados
      const user = await this.findOrCreateUser(decodedToken);

      // Anexar usuário do banco de dados ao request
      request['dbUser'] = user;

      return true;
    } catch (error) {
      // Tratar erros específicos do Firebase
      if (error.code === 'auth/id-token-expired') {
        throw new UnauthorizedException(
          'Token expirado. Por favor, faça login novamente.',
        );
      }

      if (error.code === 'auth/argument-error') {
        throw new UnauthorizedException('Token inválido ou mal formatado.');
      }

      // Erro genérico de autenticação
      throw new UnauthorizedException(
        'Falha na autenticação. Verifique seu token.',
      );
    }
  }

  /**
   * Extrai o token do header Authorization
   * @param authHeader - Header no formato "Bearer <token>"
   * @returns Token JWT ou null
   */
  private extractTokenFromHeader(authHeader: string): string | null {
    const [type, token] = authHeader.split(' ');

    if (type !== 'Bearer' || !token) {
      return null;
    }

    return token;
  }

  /**
   * Busca um usuário existente ou cria um novo com base no token do Firebase
   * @param decodedToken - Token decodificado do Firebase
   * @returns Usuário do banco de dados
   */
  private async findOrCreateUser(
    decodedToken: admin.auth.DecodedIdToken,
  ): Promise<any> {
    const { uid, email, name, phone_number } = decodedToken;

    // Buscar usuário pelo Firebase UID
    let user = await this.prisma.user.findUnique({
      where: { firebaseUid: uid },
    });

    // Se o usuário não existir, criar um novo
    if (!user) {
      // Validações para campos obrigatórios
      if (!email) {
        throw new UnauthorizedException(
          'Email não encontrado no token do Firebase. Configure o email no Firebase Authentication.',
        );
      }

      // Criar novo usuário com dados do Firebase
      user = await this.prisma.user.create({
        data: {
          firebaseUid: uid,
          email: email,
          name: name || email.split('@')[0], // Usar parte do email como nome padrão
          phone: phone_number || null,
        },
      });
    }

    return user;
  }
}
