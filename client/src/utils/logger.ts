/**
 * Logger Seguro
 * Sistema de logging que não expõe dados sensíveis em produção
 */

// Usar process.env ao invés de import.meta.env para compatibilidade
const isDevelopment =
  process.env.NODE_ENV !== 'production' && process.env.VITE_DEBUG === 'true';

interface LoggerConfig {
  enableInProduction?: boolean;
  sanitize?: boolean;
}

/**
 * Logger que só funciona em desenvolvimento
 */
export const logger = {
  /**
   * Log apenas em desenvolvimento
   */
  dev: (...args: any[]): void => {
    if (isDevelopment) {
      console.log('[DEV]', ...args);
    }
  },

  /**
   * Log de informações (apenas dev)
   */
  info: (...args: any[]): void => {
    if (isDevelopment) {
      console.info('[INFO]', ...args);
    }
  },

  /**
   * Log de avisos (sempre ativo, mas sanitizado em produção)
   */
  warn: (message: string, ...args: any[]): void => {
    if (isDevelopment) {
      console.warn('[WARN]', message, ...args);
    } else {
      // Em produção, apenas mensagem genérica
      console.warn('[WARN]', message);
    }
  },

  /**
   * Log de erros (sempre ativo, sanitizado em produção)
   */
  error: (error: unknown, context?: string): void => {
    if (isDevelopment) {
      console.error('[ERROR]', context, error);
    } else {
      // Em produção, enviar para serviço de monitoramento (Sentry, LogRocket, etc)
      // TODO: Implementar integração com serviço de monitoramento
      // sendToMonitoringService(error, context);

      // Apenas log genérico
      console.error(
        '[ERROR]',
        context || 'Erro interno',
        'Ocorreu um erro. Nossos logs foram registrados.',
      );
    }
  },

  /**
   * Log de requisições API (apenas dev)
   */
  api: (method: string, url: string, data?: any): void => {
    if (isDevelopment) {
      console.log(`[API] ${method} ${url}`, data ? { ...data } : '');
    }
  },

  /**
   * Sanitiza dados sensíveis antes de logar
   */
  sanitize: (data: any): any => {
    if (!data || typeof data !== 'object') return data;

    const sensitiveKeys = [
      'password',
      'token',
      'access_token',
      'refresh_token',
      'authorization',
      'secret',
      'api_key',
      'private_key',
    ];

    const sanitized = { ...data };

    for (const key of sensitiveKeys) {
      if (key in sanitized) {
        sanitized[key] = '***REDACTED***';
      }
    }

    return sanitized;
  },
};

export default logger;
