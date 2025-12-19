# 🔥 Migração Frontend: Firebase → JWT Puro

## 📋 CONTEXTO

Tenho uma API NestJS com autenticação JWT completa implementada. Preciso **REMOVER** toda a integração do Firebase Authentication do meu frontend e substituir por autenticação JWT pura consumindo minha API.

---

## 🔌 BACKEND DISPONÍVEL

### Base URL

```
http://localhost:3000
```

### Endpoints Implementados

#### 1. 📝 Registro de Usuário

**POST** `/auth/register`

**Request Body:**

```json
{
  "name": "João Silva",
  "email": "joao@example.com",
  "password": "Senha@123",
  "phone": "11999999999"
}
```

**Response 201 - Success:**

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": 1,
    "name": "João Silva",
    "email": "joao@example.com",
    "phone": "11999999999",
    "role": "USER"
  }
}
```

**Response 400 - Erro de Validação:**

```json
{
  "statusCode": 400,
  "message": [
    "email must be an email",
    "password must be longer than or equal to 8 characters"
  ],
  "error": "Bad Request"
}
```

**Response 409 - Email já existe:**

```json
{
  "statusCode": 409,
  "message": "Email já está em uso",
  "error": "Conflict"
}
```

---

#### 2. 🔐 Login

**POST** `/auth/login`

**Request Body:**

```json
{
  "email": "joao@example.com",
  "password": "Senha@123"
}
```

**Response 200 - Success:**

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": 1,
    "name": "João Silva",
    "email": "joao@example.com",
    "phone": "11999999999",
    "role": "USER"
  }
}
```

**Response 401 - Credenciais Inválidas:**

```json
{
  "statusCode": 401,
  "message": "Credenciais inválidas",
  "error": "Unauthorized"
}
```

---

#### 3. 🚪 Logout

**POST** `/auth/logout`

**Headers:**

```http
Authorization: Bearer {access_token}
```

**Response 200:**

```json
{
  "message": "Logout realizado com sucesso"
}
```

---

#### 4. 🔄 Refresh Token

**POST** `/auth/refresh`

**Request Body:**

```json
{
  "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

**Response 200 - Success:**

```json
{
  "access_token": "novo_access_token_aqui...",
  "refresh_token": "novo_refresh_token_aqui..."
}
```

**Response 401 - Refresh Token Inválido:**

```json
{
  "statusCode": 401,
  "message": "Refresh token inválido ou expirado",
  "error": "Unauthorized"
}
```

---

#### 5. 🛡️ Rota Protegida (Exemplo: Dashboard Admin)

**GET** `/dashboard-admin`

**Headers:**

```http
Authorization: Bearer {access_token}
```

**Response 200 - Sucesso (role = ADMIN):**

```json
{
  "message": "Bem-vindo ao Dashboard Admin, João Silva!",
  "user": {
    "id": 1,
    "name": "João Silva",
    "email": "joao@example.com",
    "role": "ADMIN"
  },
  "stats": {
    "totalUsers": 100,
    "totalGroups": 25,
    "activeDraws": 5
  }
}
```

**Response 403 - Sem Permissão (role = USER):**

```json
{
  "statusCode": 403,
  "message": "Acesso negado. Requer uma das seguintes permissões: ADMIN",
  "error": "Forbidden"
}
```

**Response 401 - Token Inválido/Ausente:**

```json
{
  "statusCode": 401,
  "message": "Unauthorized",
  "error": "Unauthorized"
}
```

---

## 👥 Sistema de Roles

| Role      | Descrição              | Permissões                                        |
| --------- | ---------------------- | ------------------------------------------------- |
| **USER**  | Usuário comum (padrão) | Acesso às rotas básicas                           |
| **ADMIN** | Administrador          | Acesso total, incluindo dashboard e gerenciamento |

---

## ⏱️ Expiração dos Tokens

| Token             | Duração    |
| ----------------- | ---------- |
| **Access Token**  | 15 minutos |
| **Refresh Token** | 7 dias     |

---

## ❌ REMOVER DO FRONTEND

### Pacotes/Dependências

```bash
npm uninstall firebase
```

### Arquivos para Deletar ou Limpar

- [ ] `lib/firebase.ts` ou `config/firebase.ts`
- [ ] Variáveis Firebase no `.env` ou `.env.local`:
  - `NEXT_PUBLIC_FIREBASE_API_KEY`
  - `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
  - `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
  - `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
  - `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
  - `NEXT_PUBLIC_FIREBASE_APP_ID`

### Código para Remover

- [ ] `import { initializeApp } from 'firebase/app'`
- [ ] `import { getAuth, signInWithEmailAndPassword, ... } from 'firebase/auth'`
- [ ] Toda lógica de `firebaseConfig`
- [ ] Chamadas: `signInWithEmailAndPassword()`, `createUserWithEmailAndPassword()`, `signOut()`, etc.
- [ ] Listeners: `onAuthStateChanged()`

---

## ✅ IMPLEMENTAR NO FRONTEND

### 1. 📦 Instalar Dependências (se necessário)

```bash
npm install axios
# ou use fetch nativo

# Para validação de formulários (opcional)
npm install react-hook-form zod @hookform/resolvers
```

---

### 2. 🎯 Types TypeScript

**`types/auth.types.ts`**

```typescript
export type UserRole = 'USER' | 'ADMIN';

export interface User {
  id: number;
  name: string;
  email: string;
  phone?: string;
  role: UserRole;
}

export interface AuthResponse {
  access_token: string;
  refresh_token: string;
  user: User;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  name: string;
  email: string;
  password: string;
  phone?: string;
}

export interface RefreshTokenRequest {
  refresh_token: string;
}

export interface RefreshTokenResponse {
  access_token: string;
  refresh_token: string;
}
```

---

### 3. 🌐 API Client com Interceptors

**`lib/api.ts`**

```typescript
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor: Adicionar token em todas as requisições
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('access_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

// Interceptor: Refresh automático quando token expirar
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Se erro 401 e ainda não tentou refresh
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const refreshToken = localStorage.getItem('refresh_token');

      if (refreshToken) {
        try {
          // Tentar renovar o token
          const { data } = await axios.post(
            'http://localhost:3000/auth/refresh',
            {
              refresh_token: refreshToken,
            },
          );

          // Salvar novos tokens
          localStorage.setItem('access_token', data.access_token);
          localStorage.setItem('refresh_token', data.refresh_token);

          // Retentar requisição original com novo token
          originalRequest.headers.Authorization = `Bearer ${data.access_token}`;
          return api(originalRequest);
        } catch (refreshError) {
          // Refresh falhou → Fazer logout
          localStorage.removeItem('access_token');
          localStorage.removeItem('refresh_token');
          localStorage.removeItem('user');
          window.location.href = '/login';
          return Promise.reject(refreshError);
        }
      }
    }

    return Promise.reject(error);
  },
);

export default api;
```

---

### 4. 🔐 Auth Context

**`context/AuthContext.tsx`**

```typescript
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import api from '@/lib/api';
import { User, LoginCredentials, RegisterData, AuthResponse } from '@/types/auth.types';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  isAuthenticated: boolean;
  isAdmin: boolean;
  login: (credentials: LoginCredentials) => Promise<void>;
  register: (data: RegisterData) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Carregar usuário do localStorage na inicialização
  useEffect(() => {
    const loadUser = () => {
      const storedUser = localStorage.getItem('user');
      const token = localStorage.getItem('access_token');

      if (storedUser && token) {
        setUser(JSON.parse(storedUser));
      }
      setLoading(false);
    };

    loadUser();
  }, []);

  const login = async ({ email, password }: LoginCredentials) => {
    try {
      const { data } = await api.post<AuthResponse>('/auth/login', { email, password });

      // Salvar tokens e usuário
      localStorage.setItem('access_token', data.access_token);
      localStorage.setItem('refresh_token', data.refresh_token);
      localStorage.setItem('user', JSON.stringify(data.user));

      setUser(data.user);
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Erro ao fazer login');
    }
  };

  const register = async (registerData: RegisterData) => {
    try {
      const { data } = await api.post<AuthResponse>('/auth/register', registerData);

      // Salvar tokens e usuário
      localStorage.setItem('access_token', data.access_token);
      localStorage.setItem('refresh_token', data.refresh_token);
      localStorage.setItem('user', JSON.stringify(data.user));

      setUser(data.user);
    } catch (error: any) {
      const message = error.response?.data?.message;
      throw new Error(Array.isArray(message) ? message.join(', ') : message || 'Erro ao registrar');
    }
  };

  const logout = async () => {
    try {
      await api.post('/auth/logout');
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    } finally {
      // Limpar dados locais
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
      localStorage.removeItem('user');
      setUser(null);
    }
  };

  const value = {
    user,
    loading,
    isAuthenticated: !!user,
    isAdmin: user?.role === 'ADMIN',
    login,
    register,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de AuthProvider');
  }
  return context;
};
```

---

### 5. 🛡️ Proteção de Rotas

**`components/ProtectedRoute.tsx`**

```typescript
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
  adminOnly?: boolean;
}

export const ProtectedRoute = ({ children, adminOnly = false }: ProtectedRouteProps) => {
  const { user, isAuthenticated, isAdmin, loading } = useAuth();

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (adminOnly && !isAdmin) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-2">Acesso Negado</h1>
          <p className="text-gray-600">Você não tem permissão para acessar esta página.</p>
          <button onClick={() => window.history.back()} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
            Voltar
          </button>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};
```

---

### 6. 📄 Exemplo: Página de Login

**`pages/Login.tsx`**

```typescript
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await login({ email, password });
      navigate('/dashboard-admin'); // ou redirecionar baseado no role
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6">Login</h2>

        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Senha</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-400"
          >
            {loading ? 'Entrando...' : 'Entrar'}
          </button>
        </form>

        <p className="mt-4 text-center text-gray-600">
          Não tem conta?{' '}
          <a href="/register" className="text-blue-600 hover:underline">
            Registre-se
          </a>
        </p>
      </div>
    </div>
  );
};
```

---

### 7. 📝 Exemplo: Página de Registro

**`pages/Register.tsx`**

```typescript
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';

export const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await register(formData);
      navigate('/dashboard-admin');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6">Criar Conta</h2>

        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Nome</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Senha</label>
            <input
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="w-full px-3 py-2 border rounded"
              required
              minLength={8}
            />
            <p className="text-xs text-gray-500 mt-1">
              Mínimo 8 caracteres, 1 maiúscula, 1 minúscula, 1 número, 1 especial
            </p>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Telefone (opcional)</label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-3 py-2 border rounded"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-400"
          >
            {loading ? 'Criando conta...' : 'Registrar'}
          </button>
        </form>

        <p className="mt-4 text-center text-gray-600">
          Já tem conta?{' '}
          <a href="/login" className="text-blue-600 hover:underline">
            Faça login
          </a>
        </p>
      </div>
    </div>
  );
};
```

---

### 8. 🎨 Exemplo: Componente Navbar com Role

**`components/Navbar.tsx`**

```typescript
import { useAuth } from '@/context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

export const Navbar = () => {
  const { user, isAuthenticated, isAdmin, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          Amigo Oculto
        </Link>

        <div className="flex gap-4 items-center">
          {isAuthenticated ? (
            <>
              <span>Olá, {user?.name}</span>
              <span className="text-xs bg-blue-800 px-2 py-1 rounded">
                {user?.role}
              </span>

              {isAdmin && (
                <Link to="/dashboard-admin" className="hover:underline">
                  Dashboard Admin
                </Link>
              )}

              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded"
              >
                Sair
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="hover:underline">
                Login
              </Link>
              <Link to="/register" className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded">
                Registrar
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};
```

---

### 9. 🚀 Configurar Rotas (React Router)

**`App.tsx` ou `routes.tsx`**

```typescript
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from '@/context/AuthContext';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import { Navbar } from '@/components/Navbar';
import { LoginPage } from '@/pages/Login';
import { RegisterPage } from '@/pages/Register';
import { DashboardPage } from '@/pages/Dashboard';
import { HomePage } from '@/pages/Home';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          {/* Rota protegida - qualquer usuário autenticado */}
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            }
          />

          {/* Rota protegida - apenas ADMIN */}
          <Route
            path="/dashboard-admin"
            element={
              <ProtectedRoute adminOnly>
                <DashboardPage />
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
```

---

## ✅ CHECKLIST DE IMPLEMENTAÇÃO

### Remoção Firebase

- [ ] Desinstalar pacote `firebase`
- [ ] Remover arquivo de config do Firebase
- [ ] Remover variáveis de ambiente Firebase
- [ ] Remover imports e chamadas Firebase
- [ ] Testar que não há erros de import

### Implementação JWT

- [ ] Criar types (`auth.types.ts`)
- [ ] Criar API client com interceptors (`lib/api.ts`)
- [ ] Criar AuthContext e AuthProvider
- [ ] Criar hook `useAuth()`
- [ ] Implementar `login()`, `register()`, `logout()`
- [ ] Implementar refresh token automático
- [ ] Criar componente `ProtectedRoute`
- [ ] Criar página de Login
- [ ] Criar página de Registro
- [ ] Atualizar rotas para usar `ProtectedRoute`
- [ ] Adicionar proteção de rotas ADMIN

### Testes

- [ ] Registro de novo usuário
- [ ] Login com credenciais válidas
- [ ] Login com credenciais inválidas (erro 401)
- [ ] Acesso a rota protegida sem token (redirect para login)
- [ ] Acesso a rota ADMIN com USER (erro 403)
- [ ] Logout (limpeza de tokens)
- [ ] Refresh token automático (esperar 15 min)
- [ ] Expiração do refresh token (logout forçado após 7 dias)

### UX/UI

- [ ] Loading durante autenticação
- [ ] Mensagens de erro claras
- [ ] Feedback visual de sucesso
- [ ] Botões desabilitados durante loading
- [ ] Mostrar/ocultar elementos baseado no role
- [ ] Redirect automático após login

---

## 🎯 VALIDAÇÕES DE FORMULÁRIO

### Senha

- Mínimo 8 caracteres
- Pelo menos 1 letra maiúscula
- Pelo menos 1 letra minúscula
- Pelo menos 1 número
- Pelo menos 1 caractere especial

### Email

- Formato válido (`email@example.com`)

### Telefone

- Opcional
- Formato brasileiro aceito

---

## 🚨 TRATAMENTO DE ERROS

| Código      | Cenário                 | Ação                                      |
| ----------- | ----------------------- | ----------------------------------------- |
| **400**     | Dados inválidos         | Mostrar mensagens de validação            |
| **401**     | Token inválido/expirado | Tentar refresh → Logout se falhar         |
| **403**     | Sem permissão           | Mostrar "Acesso negado"                   |
| **409**     | Email já existe         | "Email já está em uso"                    |
| **500**     | Erro do servidor        | "Erro interno. Tente novamente"           |
| **Network** | Sem conexão             | "Erro de conexão. Verifique sua internet" |

---

## 📚 ESTRUTURA FINAL DE ARQUIVOS

```
src/
├── types/
│   └── auth.types.ts
├── lib/
│   └── api.ts
├── context/
│   └── AuthContext.tsx
├── components/
│   ├── ProtectedRoute.tsx
│   └── Navbar.tsx
├── pages/
│   ├── Login.tsx
│   ├── Register.tsx
│   ├── Dashboard.tsx (admin only)
│   └── Home.tsx
└── App.tsx
```

---

## 🎉 RESULTADO FINAL

Após implementar tudo:

- ✅ Sistema JWT 100% funcional
- ✅ Nenhuma dependência do Firebase
- ✅ Refresh token automático
- ✅ Proteção de rotas por role
- ✅ UI adaptada ao role do usuário
- ✅ Tratamento completo de erros
- ✅ Experiência fluida para o usuário

---

## 🆘 SUPORTE

Se tiver dúvidas sobre os endpoints do backend, veja:

- [AUTH_JWT_GUIDE.md](AUTH_JWT_GUIDE.md) - Guia completo do sistema JWT
- [ROLES_GUIDE.md](ROLES_GUIDE.md) - Sistema de autorização por roles
- [auth-tests.http](auth-tests.http) - Exemplos de requisições HTTP
