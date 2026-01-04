/**
 * Utilitários de Segurança
 * Funções para validação de tokens, sanitização e proteção de dados sensíveis
 */

export interface TokenPayload {
  sub: number;
  email: string;
  iat: number;
  exp: number;
  [key: string]: any;
}

/**
 * Verifica se um token JWT está expirado
 */
export function isTokenExpired(token: string): boolean {
  try {
    if (!token) return true;
    
    const parts = token.split('.');
    if (parts.length !== 3) return true;
    
    const payload = JSON.parse(atob(parts[1])) as TokenPayload;
    const currentTime = Math.floor(Date.now() / 1000);
    
    return payload.exp < currentTime;
  } catch {
    return true; // Em caso de erro, considerar expirado
  }
}

/**
 * Decodifica um token JWT (sem validação de assinatura)
 * Usado apenas para validação no client
 */
export function decodeToken(token: string): TokenPayload | null {
  try {
    if (!token) return null;
    
    const parts = token.split('.');
    if (parts.length !== 3) return null;
    
    return JSON.parse(atob(parts[1])) as TokenPayload;
  } catch {
    return null;
  }
}

/**
 * Valida a estrutura básica de um token JWT
 */
export function isValidTokenFormat(token: string): boolean {
  if (!token || typeof token !== 'string') return false;
  
  const parts = token.split('.');
  if (parts.length !== 3) return false;
  
  try {
    // Verificar se pode ser decodificado
    const payload = JSON.parse(atob(parts[1]));
    return payload && typeof payload === 'object' && payload.exp;
  } catch {
    return false;
  }
}

/**
 * Valida estrutura de um usuário
 */
export interface User {
  id: number;
  email: string;
  name: string;
  phone?: string;
  role: 'ADMIN' | 'USER';
}

export function isValidUser(user: any): user is User {
  return (
    user &&
    typeof user === 'object' &&
    typeof user.id === 'number' &&
    typeof user.email === 'string' &&
    typeof user.name === 'string' &&
    (user.role === 'ADMIN' || user.role === 'USER')
  );
}

/**
 * Armazena token com verificação de expiração
 */
export function setTokenWithValidation(key: string, token: string): boolean {
  if (!isValidTokenFormat(token)) {
    console.error(`[Security] Token inválido para ${key}`);
    return false;
  }
  
  if (isTokenExpired(token)) {
    console.warn(`[Security] Token expirado para ${key}`);
    return false;
  }
  
  try {
    sessionStorage.setItem(key, token);
    return true;
  } catch (error) {
    console.error(`[Security] Erro ao armazenar token ${key}:`, error);
    return false;
  }
}

/**
 * Obtém token validando expiração
 */
export function getValidToken(key: string): string | null {
  try {
    const token = sessionStorage.getItem(key);
    if (!token) return null;
    
    if (isTokenExpired(token)) {
      sessionStorage.removeItem(key);
      return null;
    }
    
    return token;
  } catch {
    return null;
  }
}

/**
 * Limpa todos os tokens e dados de autenticação
 */
export function clearAuthData(): void {
  try {
    sessionStorage.removeItem('access_token');
    sessionStorage.removeItem('refresh_token');
    sessionStorage.removeItem('user');
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('user');
  } catch (error) {
    console.error('[Security] Erro ao limpar dados de autenticação:', error);
  }
}

/**
 * Detecta se houve alteração não autorizada nos tokens
 */
export function setupTokenChangeDetection(callback: () => void): () => void {
  const handleStorageChange = (e: StorageEvent) => {
    if (
      (e.key === 'access_token' || e.key === 'refresh_token' || e.key === 'user') &&
      e.oldValue !== e.newValue &&
      e.newValue === null
    ) {
      // Token foi removido de outra aba/janela
      callback();
    }
  };
  
  window.addEventListener('storage', handleStorageChange);
  
  // Retorna função de cleanup
  return () => {
    window.removeEventListener('storage', handleStorageChange);
  };
}

