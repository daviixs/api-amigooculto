import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import * as admin from 'firebase-admin';

/**
 * Decorator para extrair o token decodificado do Firebase
 *
 * Uso:
 * @Get('firebase-info')
 * getFirebaseInfo(@FirebaseUser() firebaseUser: admin.auth.DecodedIdToken) {
 *   return { uid: firebaseUser.uid, email: firebaseUser.email };
 * }
 */
export const FirebaseUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): admin.auth.DecodedIdToken => {
    const request = ctx.switchToHttp().getRequest();
    return request['firebaseUser'];
  },
);
