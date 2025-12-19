# 🔐 Sistema de Autenticação JWT - Guia Completo

## ✅ O Que Foi Implementado

### **1. Registro de Usuários**

- Endpoint: `POST /auth/register`
- Senha criptografada com **bcrypt** (10 rounds)
- Validação de email único
- Retorna `accessToken` e `refreshToken`

### **2. Login**

- Endpoint: `POST /auth/login`
- Verifica credenciais (email + senha)
- Retorna tokens JWT

### **3. Tokens JWT**

- **Access Token**: Expira em 15 minutos
- **Refresh Token**: Expira em 7 dias
- Refresh token armazenado com hash no banco de dados

### **4. Rotas Protegidas**

- Guard global aplicado em todas as rotas
- Use `@Public()` para rotas públicas
- Acesso ao usuário com `@CurrentUser()`

### **5. Renovação de Token**

- Endpoint: `POST /auth/refresh`
- Renova access token com refresh token válido

### **6. Logout**

- Endpoint: `POST /auth/logout`
- Remove refresh token do banco (invalida renovações)

### **7. Tratamento de Erros**

- Filtro global de exceções
- Respostas padronizadas
- Logs detalhados

---

## 📦 Arquivos Criados/Modificados

### **Criados:**

```
src/
├── auth/
│   ├── auth.service.ts              # Lógica de autenticação
│   ├── auth.controller.ts           # Endpoints de auth
│   ├── strategies/
│   │   ├── jwt.strategy.ts          # Estratégia JWT (access token)
│   │   └── refresh-token.strategy.ts # Estratégia refresh token
│   └── guards/
│       ├── jwt-auth.guard.ts        # Guard JWT
│       └── refresh-token.guard.ts   # Guard refresh token
├── dto/
│   └── auth.dto.ts                  # DTOs de autenticação
└── common/
    └── filters/
        └── all-exceptions.filter.ts  # Filtro de erros global
```

### **Modificados:**

- `prisma/schema.prisma` - Adicionado `password` e `refreshToken`
- `src/auth/auth.module.ts` - Configurado JWT e Passport
- `src/app.module.ts` - Guard JWT global
- `src/main.ts` - Filtro de exceções global
- `.env` - Adicionado `JWT_SECRET` e `JWT_REFRESH_SECRET`

---

## 🚀 Como Usar

### **1. Registrar Novo Usuário**

```http
POST http://localhost:3000/auth/register
Content-Type: application/json

{
  "name": "João Silva",
  "email": "joao.silva@email.com",
  "password": "Senha@123",
  "phone": "11999999999"
}
```

**Resposta:**

```json
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": 1,
    "name": "João Silva",
    "email": "joao.silva@email.com",
    "phone": "11999999999",
    "createdAt": "2025-12-19T13:00:00.000Z"
  }
}
```

---

### **2. Fazer Login**

```http
POST http://localhost:3000/auth/login
Content-Type: application/json

{
  "email": "joao.silva@email.com",
  "password": "Senha@123"
}
```

**Resposta:** Mesma estrutura do registro.

---

### **3. Acessar Rota Protegida**

```http
GET http://localhost:3000/auth/me
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**Resposta:**

```json
{
  "id": 1,
  "name": "João Silva",
  "email": "joao.silva@email.com",
  "phone": "11999999999",
  "createdAt": "2025-12-19T13:00:00.000Z",
  "updatedAt": "2025-12-19T13:00:00.000Z"
}
```

---

### **4. Renovar Access Token**

Quando o access token expirar (após 15 minutos):

```http
POST http://localhost:3000/auth/refresh
Authorization: Bearer <REFRESH_TOKEN>
```

**Resposta:**

```json
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

---

### **5. Fazer Logout**

```http
POST http://localhost:3000/auth/logout
Authorization: Bearer <ACCESS_TOKEN>
```

**Resposta:**

```json
{
  "message": "Logout realizado com sucesso"
}
```

---

## 🔒 Segurança Implementada

### **1. Senha Criptografada**

```typescript
// Bcrypt com 10 rounds de salt
const hashedPassword = await bcrypt.hash(password, 10);
```

### **2. Refresh Token com Hash**

```typescript
// Refresh token armazenado com hash no banco
const hashedRefreshToken = await bcrypt.hash(refreshToken, 10);
```

### **3. Validação Automática**

```typescript
// ValidationPipe global remove dados não permitidos
app.useGlobalPipes(
  new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  }),
);
```

### **4. Tokens Seguros**

- Access token expira rápido (15 min)
- Refresh token expira em 7 dias
- Secrets configuráveis via `.env`

---

## 🎯 Exemplos de Código

### **Proteger um Controller Inteiro**

```typescript
@Controller('users')
@UseGuards(JwtAuthGuard) // Todas as rotas protegidas
export class UserController {
  @Get('me')
  getMe(@CurrentUser() user: User) {
    return user;
  }
}
```

### **Rota Pública Específica**

```typescript
@Controller('auth')
export class AuthController {
  @Public() // Esta rota não precisa de token
  @Post('login')
  login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }
}
```

### **Acessar Usuário Autenticado**

```typescript
@Get('profile')
async getProfile(@CurrentUser() user: User) {
  // user contém os dados do usuário autenticado
  return {
    id: user.id,
    name: user.name,
    email: user.email
  };
}

// Ou acessar campo específico:
@Get('email')
async getEmail(@CurrentUser('email') email: string) {
  return { email };
}
```

---

## ⚠️ Tratamento de Erros

### **Erro 401 - Token Inválido**

```json
{
  "statusCode": 401,
  "timestamp": "2025-12-19T13:00:00.000Z",
  "path": "/auth/me",
  "method": "GET",
  "message": "Unauthorized",
  "error": "Unauthorized"
}
```

### **Erro 409 - Email Já Cadastrado**

```json
{
  "statusCode": 409,
  "timestamp": "2025-12-19T13:00:00.000Z",
  "path": "/auth/register",
  "method": "POST",
  "message": "Email já cadastrado",
  "error": "Conflict"
}
```

### **Erro 400 - Validação**

```json
{
  "statusCode": 400,
  "timestamp": "2025-12-19T13:00:00.000Z",
  "path": "/auth/register",
  "method": "POST",
  "message": ["Email inválido", "Senha deve ter no mínimo 6 caracteres"],
  "error": "Bad Request"
}
```

---

## 🛠️ Configuração do .env

```env
# JWT Secrets (MUDE PARA VALORES SEGUROS EM PRODUÇÃO!)
JWT_SECRET=sua-chave-secreta-super-segura-aqui-mude-em-producao
JWT_REFRESH_SECRET=sua-chave-refresh-super-segura-aqui-mude-em-producao
```

**⚠️ IMPORTANTE EM PRODUÇÃO:**

- Use secrets fortes e aleatórios (ex: 64 caracteres hexadecimais)
- Nunca comite o arquivo `.env` no Git
- Use serviços de gerenciamento de secrets (AWS Secrets Manager, etc.)

---

## 📚 Fluxo Completo

```
1. REGISTRO
   Frontend → POST /auth/register → Backend
   Backend → Cria usuário com senha hash → Retorna tokens

2. LOGIN
   Frontend → POST /auth/login → Backend
   Backend → Verifica senha → Retorna tokens

3. ACESSO PROTEGIDO
   Frontend → GET /qualquer-rota (com access token) → Backend
   Backend → Valida token → Retorna dados

4. TOKEN EXPIRA (após 15 min)
   Frontend → POST /auth/refresh (com refresh token) → Backend
   Backend → Valida refresh token → Retorna novos tokens

5. LOGOUT
   Frontend → POST /auth/logout (com access token) → Backend
   Backend → Remove refresh token do banco
```

---

## 🧪 Testes Automáticos

Use o arquivo [auth-tests.http](auth-tests.http) para testar todos os endpoints.

---

## 📱 Integração com Frontend

### **Axios Interceptor (Renovação Automática)**

```javascript
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000',
});

// Adicionar token automaticamente
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

// Renovar token automaticamente em caso de 401
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = localStorage.getItem('refreshToken');
        const response = await axios.post(
          'http://localhost:3000/auth/refresh',
          {},
          {
            headers: { Authorization: `Bearer ${refreshToken}` },
          },
        );

        const { accessToken, refreshToken: newRefreshToken } = response.data;

        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', newRefreshToken);

        originalRequest.headers.Authorization = `Bearer ${accessToken}`;
        return api(originalRequest);
      } catch (refreshError) {
        // Refresh falhou, fazer logout
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        window.location.href = '/login';
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  },
);

export default api;
```

---

## ✅ Checklist de Implementação

- [x] Bcrypt para criptografia de senhas
- [x] JWT access token (15 min)
- [x] JWT refresh token (7 dias)
- [x] Registro de usuários
- [x] Login com validação de senha
- [x] Logout (remove refresh token)
- [x] Renovação de tokens
- [x] Guards para rotas protegidas
- [x] Decorator `@Public()` para rotas públicas
- [x] Decorator `@CurrentUser()` para extrair usuário
- [x] Tratamento de erros centralizado
- [x] Validação de DTOs
- [x] Documentação Swagger
- [x] Testes HTTP prontos

---

## 🎉 Resumo

Seu backend agora possui um sistema completo de autenticação JWT com:

✅ **Registro seguro** com senha criptografada (bcrypt)  
✅ **Login** com validação de credenciais  
✅ **Tokens JWT** (access + refresh)  
✅ **Rotas protegidas** por padrão  
✅ **Renovação automática** de tokens  
✅ **Logout** seguro  
✅ **Tratamento de erros** padronizado  
✅ **Validação automática** de dados  
✅ **Documentação Swagger** completa

🚀 **Pronto para uso em produção!** (Após configurar secrets seguros)
