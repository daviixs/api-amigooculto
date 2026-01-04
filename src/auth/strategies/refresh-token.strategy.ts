import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Request } from 'express';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class RefreshTokenStrategy extends PassportStrategy(
  Strategy,
  'jwt-refresh',
) {
  constructor(private prisma: PrismaService) {
    const secret = process.env.JWT_REFRESH_SECRET;
    if (!secret) {
      throw new Error(
        'JWT_REFRESH_SECRET must be defined in environment variables',
      );
    }

    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        // Primeiro tenta extrair do cookie (preferencial)
        (request: Request) => {
          return request?.cookies?.refresh_token || null;
        },
        // Fallback para Authorization header (compatibilidade)
        ExtractJwt.fromAuthHeaderAsBearerToken(),
      ]),
      secretOrKey: secret,
      passReqToCallback: true,
    });
  }

  async validate(req: Request, payload: any) {
    // Tentar obter refresh token do cookie primeiro
    let refreshToken = req?.cookies?.refresh_token;

    // Fallback para Authorization header se não estiver no cookie
    if (!refreshToken) {
      refreshToken = req
        .get('Authorization')
        ?.replace('Bearer ', '')
        .trim();
    }

    if (!refreshToken) {
      throw new UnauthorizedException('Refresh token não encontrado');
    }

    return {
      ...payload,
      refreshToken,
    };
  }
}
