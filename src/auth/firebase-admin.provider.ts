import { Provider, Logger } from '@nestjs/common';
import * as admin from 'firebase-admin';

export const FIREBASE_ADMIN = 'FIREBASE_ADMIN';
const logger = new Logger('FirebaseAdminProvider');

export const FirebaseAdminProvider: Provider = {
  provide: FIREBASE_ADMIN,
  useFactory: () => {
    try {
      // Verificar se o Firebase Admin já foi inicializado
      if (admin.apps.length > 0) {
        logger.log('Firebase Admin SDK já está inicializado, reutilizando instância');
        return admin;
      }

      // Carregar credenciais do Service Account a partir das variáveis de ambiente
      const credentialsString = process.env.FIREBASE_ADMIN_CREDENTIALS;

      if (!credentialsString) {
        const error = new Error(
          'FIREBASE_ADMIN_CREDENTIALS não está definida nas variáveis de ambiente',
        );
        logger.error(error.message);
        throw error;
      }

      // Parse das credenciais (remover espaços e quebras de linha extras)
      let serviceAccount;
      try {
        serviceAccount = JSON.parse(credentialsString.trim());
      } catch (parseError) {
        const error = new Error(
          'FIREBASE_ADMIN_CREDENTIALS contém JSON inválido',
        );
        logger.error(error.message, parseError);
        throw error;
      }

      // Validar campos obrigatórios
      if (!serviceAccount.project_id || !serviceAccount.private_key || !serviceAccount.client_email) {
        const error = new Error(
          'FIREBASE_ADMIN_CREDENTIALS está incompleta. Campos obrigatórios: project_id, private_key, client_email',
        );
        logger.error(error.message);
        throw error;
      }

      // Inicializar Firebase Admin
      admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
      });
      
      logger.log('✅ Firebase Admin SDK inicializado com sucesso');
      return admin;
    } catch (error) {
      logger.error(
        '❌ Erro ao inicializar o Firebase Admin SDK:',
        error instanceof Error ? error.message : String(error),
        error instanceof Error ? error.stack : undefined,
      );
      throw error;
    }
  },
};
