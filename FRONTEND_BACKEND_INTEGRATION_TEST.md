# 🔗 Checklist de Integração Frontend ↔ Backend

## 📋 Informações do Backend

**Base URL:** `http://localhost:3000`  
**Formato de Resposta:** JSON  
**Autenticação:** JWT Bearer Token  
**Tokens:**

- Access Token: Expira em **15 minutos**
- Refresh Token: Expira em **7 dias**

---

## ✅ CHECKLIST DE INTEGRAÇÃO

### 1️⃣ Teste Básico de Conexão

**Endpoint:** `GET http://localhost:3000`  
**Descrição:** Rota pública de teste (sem autenticação)  
**Resposta Esperada:** `"Hello World!"`

**Teste no navegador ou Postman:**

```bash
curl http://localhost:3000
```

**❌ Se falhar:**

- Verifique se o backend está rodando (`npm run start:dev`)
- Verifique a porta (3000)
- Verifique firewall/antivírus

---

### 2️⃣ Registro de Usuário

**Endpoint:** `POST http://localhost:3000/auth/register`

**Request Body:**

```json
{
  "name": "Teste Frontend",
  "email": "teste@frontend.com",
  "password": "Senha@123",
  "phone": "11999999999"
}
```

**Response 201 - Sucesso:**

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": 1,
    "name": "Teste Frontend",
    "email": "teste@frontend.com",
    "phone": "11999999999",
    "createdAt": "2025-12-19T..."
  }
}
```

**✅ Verificar no Frontend:**

- [ ] Está enviando `Content-Type: application/json` no header?
- [ ] Os campos estão com os nomes corretos? (`name`, `email`, `password`, `phone`)
- [ ] A senha tem no mínimo 8 caracteres, 1 maiúscula, 1 minúscula, 1 número, 1 especial?
- [ ] Está salvando `access_token` e `refresh_token` (com underscore, não camelCase)?
- [ ] Está salvando os dados do `user`?

**❌ Possíveis Erros:**

| Erro              | Causa            | Solução                                          |
| ----------------- | ---------------- | ------------------------------------------------ |
| `409 Conflict`    | Email já existe  | Usar outro email                                 |
| `400 Bad Request` | Validação falhou | Verificar campos obrigatórios e formato da senha |
| `CORS Error`      | Problema de CORS | Backend precisa habilitar CORS                   |

---

### 3️⃣ Login

**Endpoint:** `POST http://localhost:3000/auth/login`

**Request Body:**

```json
{
  "email": "teste@frontend.com",
  "password": "Senha@123"
}
```

**Response 200 - Sucesso:** (mesma estrutura do registro)

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": 1,
    "name": "Teste Frontend",
    "email": "teste@frontend.com",
    "phone": "11999999999",
    "role": "USER"
  }
}
```

**✅ Verificar no Frontend:**

- [ ] Está enviando `Content-Type: application/json`?
- [ ] Está salvando os tokens após login?
- [ ] Está salvando os dados do usuário?
- [ ] Campo `role` está presente? (USER ou ADMIN)

**❌ Possíveis Erros:**

| Erro                         | Causa                    | Solução                               |
| ---------------------------- | ------------------------ | ------------------------------------- |
| `401 Unauthorized`           | Email ou senha inválidos | Verificar credenciais                 |
| Token expira logo após login | Bug corrigido            | Usar `access_token` e `refresh_token` |

---

### 4️⃣ Acessar Rota Protegida

**Endpoint:** `GET http://localhost:3000/dashboard-admin`

**Headers:**

```http
Authorization: Bearer {SEU_ACCESS_TOKEN}
```

**Response 200 - Sucesso (se role = ADMIN):**

```json
{
  "message": "Bem-vindo ao Dashboard Admin, Teste Frontend!",
  "user": {
    "id": 1,
    "name": "Teste Frontend",
    "email": "teste@frontend.com",
    "role": "ADMIN"
  },
  "stats": {
    "totalUsers": 100,
    "totalGroups": 25,
    "activeDraws": 5
  }
}
```

**Response 403 - Sem Permissão (se role = USER):**

```json
{
  "statusCode": 403,
  "message": "Acesso negado. Requer uma das seguintes permissões: ADMIN",
  "error": "Forbidden"
}
```

**Response 401 - Token Inválido:**

```json
{
  "statusCode": 401,
  "message": "Unauthorized",
  "error": "Unauthorized"
}
```

**✅ Verificar no Frontend:**

- [ ] Está adicionando o header `Authorization: Bearer {token}`?
- [ ] O token não tem espaços extras ou caracteres inválidos?
- [ ] Está usando `access_token` (não `refresh_token`) para requisições?
- [ ] Está tratando erro 401 (token expirado → refresh)?
- [ ] Está tratando erro 403 (sem permissão → mostrar mensagem)?

**💡 Dica:** Por padrão, novos usuários têm `role: USER`. Para testar rota ADMIN, execute no banco:

```sql
UPDATE users SET role = 'ADMIN' WHERE email = 'teste@frontend.com';
```

---

### 5️⃣ Refresh Token

**Endpoint:** `POST http://localhost:3000/auth/refresh`

**Request Body:**

```json
{
  "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

**Response 200 - Sucesso:**

```json
{
  "access_token": "novo_access_token...",
  "refresh_token": "novo_refresh_token..."
}
```

**✅ Verificar no Frontend:**

- [ ] Está enviando `refresh_token` no body (não no header)?
- [ ] Está atualizando ambos os tokens após refresh?
- [ ] Está fazendo refresh automático quando access_token expira (erro 401)?
- [ ] Não está em loop infinito de refresh?

**🔄 Fluxo Recomendado:**

```
1. Fazer requisição com access_token
2. Se retornar 401 → Tentar refresh
3. Se refresh funcionar → Salvar novos tokens e retentar requisição original
4. Se refresh falhar (401) → Fazer logout (tokens expirados)
```

---

### 6️⃣ Logout

**Endpoint:** `POST http://localhost:3000/auth/logout`

**Headers:**

```http
Authorization: Bearer {SEU_ACCESS_TOKEN}
```

**Response 200:**

```json
{
  "message": "Logout realizado com sucesso"
}
```

**✅ Verificar no Frontend:**

- [ ] Está enviando o `access_token` no header?
- [ ] Está limpando `access_token` do storage após logout?
- [ ] Está limpando `refresh_token` do storage após logout?
- [ ] Está limpando dados do `user` após logout?
- [ ] Está redirecionando para `/login` após logout?

---

## 🧪 TESTE COMPLETO DO FLUXO

### Cenário 1: Usuário Novo (USER)

```javascript
// 1. REGISTRO
POST /auth/register
Body: { name: "João", email: "joao@test.com", password: "Senha@123" }
✅ Salvar: access_token, refresh_token, user

// 2. ACESSAR ROTA PROTEGIDA (qualquer usuário autenticado)
GET /groups
Header: Authorization: Bearer {access_token}
✅ Deve funcionar (200)

// 3. TENTAR ACESSAR DASHBOARD ADMIN
GET /dashboard-admin
Header: Authorization: Bearer {access_token}
❌ Deve retornar 403 (Forbidden) - Sem permissão

// 4. LOGOUT
POST /auth/logout
Header: Authorization: Bearer {access_token}
✅ Limpar tokens e user do storage
```

### Cenário 2: Usuário Admin

```javascript
// 1. REGISTRAR E TORNAR ADMIN (via SQL)
POST /auth/register
SQL: UPDATE users SET role = 'ADMIN' WHERE email = '...'

// 2. FAZER LOGIN
POST /auth/login
✅ Verificar que user.role = 'ADMIN'

// 3. ACESSAR DASHBOARD
GET /dashboard-admin
Header: Authorization: Bearer {access_token}
✅ Deve funcionar (200) com dados do dashboard

// 4. MOSTRAR ELEMENTOS ADMIN NA UI
✅ Botão "Dashboard Admin" deve aparecer
✅ Outras funcionalidades admin devem estar visíveis
```

### Cenário 3: Token Expirado (15 minutos)

```javascript
// 1. FAZER LOGIN
POST /auth/login
✅ Salvar tokens

// 2. ESPERAR 15 MINUTOS (ou simular alterando o token)

// 3. TENTAR ACESSAR ROTA PROTEGIDA
GET /groups
Header: Authorization: Bearer {access_token_expirado}
❌ Retorna 401 (Unauthorized)

// 4. REFRESH AUTOMÁTICO
POST /auth/refresh
Body: { refresh_token: "..." }
✅ Salvar novos tokens

// 5. RETENTAR REQUISIÇÃO ORIGINAL
GET /groups
Header: Authorization: Bearer {novo_access_token}
✅ Deve funcionar (200)
```

---

## 🐛 PROBLEMAS COMUNS

### 1. CORS Error

**Erro no Console:**

```
Access to fetch at 'http://localhost:3000/auth/login' from origin 'http://localhost:5173'
has been blocked by CORS policy
```

**Solução Backend:**

```typescript
// main.ts
app.enableCors({
  origin: 'http://localhost:5173', // ou true para aceitar qualquer origem
  credentials: true,
});
```

---

### 2. Token Expira Imediatamente

**Sintomas:** Após login, qualquer requisição retorna 401

**Causas:**

- ✅ RESOLVIDO: Estava usando `accessToken` em vez de `access_token`
- Relógio do sistema desincronizado
- Token não está sendo salvo corretamente

**Verificação:** Decodifique o token em https://jwt.io

- Campo `exp`: timestamp de expiração (deve ser +15min)
- Campo `iat`: timestamp de criação
- Campo `sub`: ID do usuário

---

### 3. Refresh Token Não Funciona

**Erro:** `401 - Refresh token inválido`

**Causas:**

- Enviando `refresh_token` no header em vez do body
- Token foi modificado (espaços, quebras de linha)
- Usuário foi deletado do banco
- Refresh token expirou (7 dias)

**Solução:**

```javascript
// ✅ CORRETO
fetch('http://localhost:3000/auth/refresh', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ refresh_token: refreshToken })
});

// ❌ ERRADO - não enviar no header
headers: { 'Authorization': `Bearer ${refreshToken}` } // ❌
```

---

### 4. 403 Forbidden (Sem Permissão)

**Sintomas:** Usuário autenticado mas não consegue acessar rota admin

**Causa:** `user.role = 'USER'` mas rota requer `ADMIN`

**Solução:**

1. Verificar role do usuário: `console.log(user.role)`
2. Se necessário, tornar admin via SQL:

```sql
UPDATE users SET role = 'ADMIN' WHERE email = 'seu-email@example.com';
```

3. Fazer logout e login novamente (para atualizar dados)

---

### 5. Token Não Está Sendo Enviado

**Sintomas:** Sempre retorna 401, mesmo com token salvo

**Verificação:**

```javascript
// Verificar se o token está sendo adicionado
console.log('Token:', localStorage.getItem('access_token'));

// Verificar headers da requisição (DevTools → Network → Headers)
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**Solução:** Garantir que o interceptor está configurado corretamente:

```javascript
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('access_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
```

---

## 📊 ESTRUTURA DE DADOS ESPERADA

### User Object

```typescript
{
  id: number;
  name: string;
  email: string;
  phone?: string;
  role: 'USER' | 'ADMIN';
  createdAt: string; // ISO date
  updatedAt: string; // ISO date
}
```

### Auth Response (Login/Register)

```typescript
{
  access_token: string; // ⚠️ underscore, não camelCase
  refresh_token: string; // ⚠️ underscore, não camelCase
  user: User;
}
```

### Refresh Response

```typescript
{
  access_token: string;
  refresh_token: string;
}
```

---

## ✅ CHECKLIST FINAL

### Armazenamento (localStorage/cookies)

- [ ] `access_token` está sendo salvo?
- [ ] `refresh_token` está sendo salvo?
- [ ] `user` (objeto JSON) está sendo salvo?
- [ ] Tokens são limpos no logout?

### Headers

- [ ] `Content-Type: application/json` em POST/PUT?
- [ ] `Authorization: Bearer {token}` em rotas protegidas?
- [ ] Não está enviando o token em rotas públicas (otimização)?

### Tratamento de Erros

- [ ] 400 → Mostrar mensagens de validação
- [ ] 401 → Tentar refresh → Logout se falhar
- [ ] 403 → Mostrar "Acesso negado"
- [ ] 409 → "Email já cadastrado"
- [ ] 500 → "Erro no servidor"
- [ ] Network Error → "Sem conexão"

### UX/UI

- [ ] Loading durante requisições?
- [ ] Mensagens de erro claras?
- [ ] Feedback de sucesso?
- [ ] Botões desabilitados durante loading?
- [ ] Elementos UI baseados no `user.role`?
- [ ] Logout funcional e redireciona para login?

### Segurança

- [ ] Tokens não aparecem em logs/console?
- [ ] Senha não é exibida no frontend?
- [ ] HTTPS em produção?
- [ ] Tokens expiram corretamente?

---

## 🎯 TESTE RÁPIDO (5 minutos)

Execute esses comandos no terminal ou use um arquivo `.http`:

```bash
# 1. Testar conexão
curl http://localhost:3000

# 2. Criar usuário
curl -X POST http://localhost:3000/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"Teste","email":"teste@test.com","password":"Senha@123"}'

# 3. Login (copie o access_token da resposta)
curl -X POST http://localhost:3000/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"teste@test.com","password":"Senha@123"}'

# 4. Acessar rota protegida (substitua TOKEN)
curl http://localhost:3000/dashboard-admin \
  -H "Authorization: Bearer TOKEN"

# 5. Logout
curl -X POST http://localhost:3000/auth/logout \
  -H "Authorization: Bearer TOKEN"
```

---

## 📞 SUPORTE

**Documentação Completa:**

- [FRONTEND_JWT_MIGRATION.md](FRONTEND_JWT_MIGRATION.md) - Guia de implementação JWT
- [AUTH_JWT_GUIDE.md](AUTH_JWT_GUIDE.md) - Documentação do sistema de autenticação
- [ROLES_GUIDE.md](ROLES_GUIDE.md) - Sistema de roles e permissões

**Endpoints de Teste:**

- [auth-tests.http](auth-tests.http) - Testes de autenticação
- [dashboard-tests.http](dashboard-tests.http) - Testes de autorização

---

## ✅ CONFIRMAÇÃO DE INTEGRAÇÃO

Marque quando cada item funcionar:

**Backend:**

- [ ] Servidor rodando na porta 3000
- [ ] Banco de dados conectado
- [ ] Migrations aplicadas
- [ ] Variáveis de ambiente configuradas (JWT_SECRET, JWT_REFRESH_SECRET)

**Frontend:**

- [ ] Registro de usuário funciona
- [ ] Login funciona e salva tokens
- [ ] Rotas protegidas acessíveis com token
- [ ] Dashboard admin acessível (com role ADMIN)
- [ ] Dashboard admin bloqueado (com role USER) - 403
- [ ] Refresh token automático funciona
- [ ] Logout limpa dados e redireciona
- [ ] Mensagens de erro claras

**🎉 Se todos os itens estiverem marcados, a integração está completa!**
