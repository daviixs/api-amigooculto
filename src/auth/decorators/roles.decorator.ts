import { SetMetadata } from '@nestjs/common';

export const ROLES_KEY = 'roles';

/**
 * Decorator para especificar quais roles podem acessar uma rota
 *
 * Uso:
 * @Roles('ADMIN')
 * @Get('dashboard')
 * getDashboard() { ... }
 *
 * @Roles('ADMIN', 'USER')
 * @Get('profile')
 * getProfile() { ... }
 */
export const Roles = (...roles: string[]) => SetMetadata(ROLES_KEY, roles);
