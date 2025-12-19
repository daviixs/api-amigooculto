import { createParamDecorator, ExecutionContext } from '@nestjs/common';

/**
 * Decorator para extrair o usuário autenticado do request
 *
 * Uso:
 * @Get('profile')
 * getProfile(@CurrentUser() user: User) {
 *   return user;
 * }
 *
 * @param data - Campo específico do usuário para extrair (opcional)
 */
export const CurrentUser = createParamDecorator(
  (data: string | undefined, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const user = request['dbUser'];

    // Se data for fornecido, retornar campo específico
    return data ? user?.[data] : user;
  },
);
