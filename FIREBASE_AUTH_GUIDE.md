# 🔐 Guia de Autenticação Firebase

## ✅ Integração Completa Implementada

A autenticação Firebase foi integrada com sucesso à API NestJS.

---

## 📋 Arquivos Criados/Modificados

### **Criados:**

- `src/auth/firebase-admin.provider.ts` - Provider do Firebase Admin SDK
- `src/auth/firebase-auth.guard.ts` - Guard para validação de tokens JWT
- `src/auth/auth.module.ts` - Módulo de autenticação
- `src/auth/decorators/public.decorator.ts` - Marca rotas como públicas
- `src/auth/decorators/current-user.decorator.ts` - Extrai usuário do banco
- `src/auth/decorators/firebase-user.decorator.ts` - Extrai token do Firebase

### **Modificados:**

- `prisma/schema.prisma` - Adicionado campo `firebaseUid`
- `src/user/user.controller.ts` - Exemplos de rotas protegidas
- `src/app.module.ts` - Importado AuthModule

---

## 🚀 Como Usar

### **1. Rotas Protegidas (Padrão)**

Todas as rotas em controllers com `@UseGuards(FirebaseAuthGuard)` exigem autenticação:

```typescript
@Controller('users')
@UseGuards(FirebaseAuthGuard) // Protege TODAS as rotas
export class UserController {
  @Get('me')
  async getMe(@CurrentUser() user: any) {
    // user = registro do banco de dados
    return user;
  }
}
```

### **2. Rotas Públicas**

Use o decorator `@Public()` para rotas que não precisam de autenticação:

```typescript
@Post('login')
@Public() // Não requer token
async login() {
  // Lógica de login
}
```

### **3. Acessar Usuário Autenticado**

Use os decoradores customizados:

```typescript
// Usuário do banco de dados (Prisma)
@Get('profile')
async getProfile(@CurrentUser() user: User) {
  return { id: user.id, email: user.email };
}

// Token decodificado do Firebase
@Get('firebase-info')
async getFirebaseInfo(@FirebaseUser() firebaseUser: admin.auth.DecodedIdToken) {
  return { uid: firebaseUser.uid, email: firebaseUser.email };
}
```

---

## 🌐 Fluxo de Autenticação

### **Frontend → Backend**

1. **Frontend faz login no Firebase:**

```javascript
// Frontend (React, Vue, etc.)
import { signInWithEmailAndPassword } from 'firebase/auth';

const userCredential = await signInWithEmailAndPassword(auth, email, password);
const idToken = await userCredential.user.getIdToken();
```

2. **Frontend envia token no header:**

```javascript
fetch('http://localhost:3000/users/me', {
  headers: {
    Authorization: `Bearer ${idToken}`,
  },
});
```

3. **Backend valida e retorna dados:**

- Guard intercepta a requisição
- Valida token com Firebase Admin SDK
- Busca ou cria usuário no banco
- Anexa usuário ao request
- Controller acessa com `@CurrentUser()`

---

## 🔐 Segurança e Boas Práticas

### **✅ Variáveis de Ambiente**

Seu `.env` já está configurado corretamente:

```env
FIREBASE_ADMIN_CREDENTIALS={
  "type": "service_account",
  "project_id": "api-amigooculto",
  "private_key": "...",
  ...
}
```

### **✅ NUNCA comite credenciais**

- `.env` está no `.gitignore`
- Em produção, use variáveis de ambiente do servidor
- Considere usar serviços de secrets (AWS Secrets Manager, Google Secret Manager)

### **✅ HTTPS em Produção**

- Tokens devem ser transmitidos apenas via HTTPS
- Configure SSL/TLS no servidor de produção
- Use serviços como Vercel, Railway, Render que fornecem HTTPS automaticamente

### **✅ Validação de Token**

O Guard valida:

- Presença do header `Authorization`
- Formato `Bearer <token>`
- Validade do token (assinatura, expiração)
- Cria usuário automaticamente se não existir

### **✅ Rate Limiting (Recomendado)**

Adicione proteção contra ataques de força bruta:

```bash
npm install @nestjs/throttler
```

```typescript
// app.module.ts
import { ThrottlerModule } from '@nestjs/throttler';

@Module({
  imports: [
    ThrottlerModule.forRoot({
      ttl: 60,
      limit: 10,
    }),
  ],
})
```

---

## 📝 Exemplos de Uso

### **Endpoint 1: GET /users/me**

Retorna dados do usuário autenticado do banco de dados.

**Request:**

```http
GET http://localhost:3000/users/me
Authorization: Bearer <firebase_id_token>
```

**Response:**

```json
{
  "id": 1,
  "firebaseUid": "abc123xyz",
  "name": "João Silva",
  "email": "joao.silva@email.com",
  "phone": "11999999999",
  "createdAt": "2025-12-19T13:00:00.000Z",
  "updatedAt": "2025-12-19T13:00:00.000Z"
}
```

### **Endpoint 2: GET /users/me/firebase**

Retorna dados do token Firebase decodificado.

**Request:**

```http
GET http://localhost:3000/users/me/firebase
Authorization: Bearer <firebase_id_token>
```

**Response:**

```json
{
  "uid": "abc123xyz",
  "email": "joao.silva@email.com",
  "email_verified": true,
  "name": "João Silva",
  "picture": "https://...",
  "phone_number": "+5511999999999"
}
```

---

## 🛠️ Testando a Integração

### **1. Obter Token do Firebase (Frontend)**

```javascript
// Instalar: npm install firebase
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSy...',
  authDomain: 'api-amigooculto.firebaseapp.com',
  projectId: 'api-amigooculto',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Login
const userCredential = await signInWithEmailAndPassword(
  auth,
  'usuario@example.com',
  'senha123',
);

const idToken = await userCredential.user.getIdToken();
console.log('Token:', idToken);
```

### **2. Testar com cURL**

```bash
# Substituir <TOKEN> pelo token obtido no passo 1
curl -X GET http://localhost:3000/users/me \
  -H "Authorization: Bearer <TOKEN>"
```

### **3. Testar com Thunder Client / Postman**

```
GET http://localhost:3000/users/me
Headers:
  Authorization: Bearer <token_aqui>
```

---

## ⚠️ Tratamento de Erros

O Guard retorna erros específicos:

### **401 - Token não fornecido**

```json
{
  "statusCode": 401,
  "message": "Token de autenticação não fornecido. Use o header Authorization: Bearer <token>"
}
```

### **401 - Token inválido**

```json
{
  "statusCode": 401,
  "message": "Formato de token inválido. Use: Authorization: Bearer <token>"
}
```

### **401 - Token expirado**

```json
{
  "statusCode": 401,
  "message": "Token expirado. Por favor, faça login novamente."
}
```

### **401 - Email não encontrado**

```json
{
  "statusCode": 401,
  "message": "Email não encontrado no token do Firebase. Configure o email no Firebase Authentication."
}
```

---

## 🔄 Sincronização Automática de Usuários

### **Primeira autenticação:**

1. Usuário faz login no Firebase (frontend)
2. Backend recebe token válido
3. Guard busca `firebaseUid` no banco
4. **Se não existir:** Cria automaticamente com dados do token
5. Retorna usuário para o controller

### **Dados criados automaticamente:**

- `firebaseUid` - UID do Firebase (único)
- `email` - Email do usuário
- `name` - Nome (ou parte do email se não fornecido)
- `phone` - Telefone (se disponível no token)

---

## 📚 Próximos Passos

### **1. Aplicar Guard em outros controllers**

```typescript
@Controller('groups')
@UseGuards(FirebaseAuthGuard)
export class GroupController {
  // Todas as rotas agora protegidas
}
```

### **2. Validar permissões**

```typescript
@Get(':id')
async getGroup(@Param('id') id: number, @CurrentUser() user: User) {
  // Verificar se usuário tem permissão para acessar este grupo
  const group = await this.groupService.findOne(id);

  if (group.ownerId !== user.id) {
    throw new ForbiddenException('Você não tem permissão');
  }

  return group;
}
```

### **3. Configurar Swagger**

O Swagger já está configurado com `@ApiBearerAuth()`. Acesse:

- http://localhost:3000/api

Clique em "Authorize" e cole o token Firebase para testar as rotas protegidas.

---

## ✨ Recursos Implementados

✅ Validação de tokens JWT do Firebase  
✅ Criação automática de usuários  
✅ Decoradores customizados (`@CurrentUser`, `@Public`, `@FirebaseUser`)  
✅ Tratamento de erros específicos  
✅ Documentação Swagger  
✅ Sincronização Firebase ↔ PostgreSQL  
✅ Proteção de rotas por padrão  
✅ Suporte a rotas públicas

---

## 📞 Suporte

Em caso de dúvidas sobre a implementação, verifique:

- [firebase-auth.guard.ts](src/auth/firebase-auth.guard.ts) - Lógica de validação
- [user.controller.ts](src/user/user.controller.ts) - Exemplos de uso
- [Firebase Admin SDK Docs](https://firebase.google.com/docs/admin/setup)
