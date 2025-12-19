import { Provider } from '@nestjs/common';
import * as admin from 'firebase-admin';

export const FIREBASE_ADMIN = 'FIREBASE_ADMIN';

export const FirebaseAdminProvider: Provider = {
  provide: FIREBASE_ADMIN,
  useFactory: () => {
    try {
      // Carregar credenciais do Service Account a partir das variáveis de ambiente
      const credentialsString = process.env.FIREBASE_ADMIN_CREDENTIALS;

      if (!credentialsString) {
        throw new Error(
          'FIREBASE_ADMIN_CREDENTIALS não está definida no arquivo .env',
        );
      }

      // Parse das credenciais (remover espaços e quebras de linha extras)
      const serviceAccount = JSON.parse(credentialsString.trim());

      // Verificar se o Firebase Admin já foi inicializado
      if (!admin.apps.length) {
        admin.initializeApp({
          credential: admin.credential.cert(serviceAccount),
        });
        console.log('✅ Firebase Admin SDK inicializado com sucesso');
      }

      return admin;
    } catch (error) {
      console.error(
        '❌ Erro ao inicializar o Firebase Admin SDK:',
        error.message,
      );
      throw error;
    }
  },
};
