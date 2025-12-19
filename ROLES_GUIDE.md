# 🔐 Sistema de Autorização por Roles (RBAC)

## ✅ O Que Foi Implementado

### **Roles Disponíveis:**

- `USER` - Usuário comum (padrão)
- `ADMIN` - Administrador com acesso total

### **Componentes Criados:**

- **Enum `UserRole`** no Prisma schema
- **Campo `role`** no modelo User (padrão: USER)
- **Decorator `@Roles()`** - Define quais roles podem acessar uma rota
- **RolesGuard** - Guard que verifica as permissões
- **Rota `/dashboard`** - Exemplo de rota protegida (apenas ADMIN)

---

## 🚀 Como Usar

### **1. Proteger uma Rota para ADMIN**

```typescript
import { Roles } from './auth/decorators/roles.decorator';

@Controller('admin')
export class AdminController {
  @Roles('ADMIN')
  @Get('dashboard-admin')
  getDashboard() {
    return { message: 'Dashboard Admin' };
  }
}
```

### **2. Proteger com Múltiplas Roles**

```typescript
@Roles('ADMIN', 'MODERATOR')
@Get('reports')
getReports() {
  return { message: 'Relatórios' };
}
```

### **3. Rota Acessível por Todos Autenticados**

Se não usar `@Roles()`, qualquer usuário autenticado pode acessar:

```typescript
@Get('profile')
getProfile(@CurrentUser() user: User) {
  // Qualquer usuário autenticado pode acessar
  return user;
}
```

### **4. Rota Pública (Sem Autenticação)**

```typescript
@Public()
@Get('public')
getPublicData() {
  // Sem autenticação necessária
  return { data: 'público' };
}
```

---

## 📊 Hierarquia de Acesso

```
┌─────────────────────────────────────────────┐
│           Sem @Public() nem @Roles()        │
│         Requer autenticação (qualquer)      │
└─────────────────────────────────────────────┘
                      ▲
                      │
        ┌─────────────┴─────────────┐
        │                           │
┌───────▼───────┐          ┌────────▼────────┐
│  @Roles('USER')│          │ @Roles('ADMIN') │
│  Usuários      │          │ Administradores │
└────────────────┘          └─────────────────┘
```

---

## 🔧 Como Tornar um Usuário ADMIN

### **Opção 1: Via SQL (Recomendado para primeiro admin)**

```sql
-- Atualizar usuário existente
UPDATE users SET role = 'ADMIN' WHERE email = 'admin@example.com';

-- Verificar
SELECT id, name, email, role FROM users WHERE email = 'admin@example.com';
```

### **Opção 2: Via Código (Criar endpoint protegido)**

```typescript
@Roles('ADMIN')
@Patch('users/:id/role')
async updateUserRole(
  @Param('id', ParseIntPipe) userId: number,
  @Body() { role }: { role: string },
) {
  return this.userService.updateRole(userId, role);
}
```

### **Opção 3: No Registro (Apenas desenvolvimento)**

```typescript
// auth.service.ts - register()
const user = await this.prisma.user.create({
  data: {
    name,
    email,
    password: hashedPassword,
    phone,
    role: 'ADMIN', // ⚠️ Não use em produção!
  },
});
```

---

## 🧪 Testando o Sistema

### **1. Criar Usuário Normal**

```http
POST http://localhost:3000/auth/register
Content-Type: application/json

{
  "name": "João Silva",
  "email": "joao@example.com",
  "password": "Senha@123"
}
```

### **2. Tornar o Usuário Admin**

Execute no banco de dados:

```sql
UPDATE users SET role = 'ADMIN' WHERE email = 'joao@example.com';
```

### **3. Fazer Login**

```http
POST http://localhost:3000/auth/login
Content-Type: application/json

{
  "email": "joao@example.com",
  "password": "Senha@123"
}
```

### **4. Acessar Dashboard (Apenas ADMIN)**

```http
GET http://localhost:3000/dashboard-admin
Authorization: Bearer <SEU_ACCESS_TOKEN>
```

**Resposta com ADMIN:**

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

**Resposta com USER:**

```json
{
  "statusCode": 403,
  "message": "Acesso negado. Requer uma das seguintes permissões: ADMIN",
  "error": "Forbidden"
}
```

---

## 📝 Exemplos de Uso

### **Exemplo 1: Dashboard Admin**

```typescript
@Controller()
export class AppController {
  @Roles('ADMIN')
  @Get('dashboard-admin')
  @ApiBearerAuth()
  getDashboard(@CurrentUser() user: any) {
    return {
      message: `Bem-vindo, ${user.name}!`,
      role: user.role,
      stats: {
        totalUsers: 100,
        totalGroups: 25,
      },
    };
  }
}
```

### **Exemplo 2: Gerenciamento de Usuários (ADMIN)**

```typescript
@Controller('users')
export class UserController {
  // Qualquer usuário autenticado pode ver a lista
  @Get()
  findAll() {
    return this.userService.findAll();
  }

  // Apenas ADMIN pode deletar
  @Roles('ADMIN')
  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.userService.delete(id);
  }
}
```

### **Exemplo 3: Aprovação de Grupos (ADMIN)**

```typescript
@Controller('groups')
export class GroupController {
  // Usuários podem criar grupos
  @Post()
  create(@Body() dto: CreateGroupDto, @CurrentUser() user: User) {
    return this.groupService.create(dto, user.id);
  }

  // Apenas ADMIN pode aprovar
  @Roles('ADMIN')
  @Patch(':id/approve')
  approve(@Param('id') id: number) {
    return this.groupService.approve(id);
  }
}
```

---

## 🔒 Ordem de Execução dos Guards

```
1. JwtAuthGuard → Verifica token JWT
2. RolesGuard → Verifica permissões (role)
```

**IMPORTANTE:** O `RolesGuard` só é executado se o `JwtAuthGuard` passar. Por isso, sempre há um usuário autenticado quando o `RolesGuard` é executado.

---

## ⚠️ Tratamento de Erros

### **401 Unauthorized - Token Inválido**

```json
{
  "statusCode": 401,
  "message": "Unauthorized",
  "error": "Unauthorized"
}
```

### **403 Forbidden - Sem Permissão**

```json
{
  "statusCode": 403,
  "message": "Acesso negado. Requer uma das seguintes permissões: ADMIN",
  "error": "Forbidden"
}
```

---

## 🎯 Cenários de Uso

### **Cenário 1: Sistema de Aprovação**

- `USER` cria grupos
- `ADMIN` aprova/rejeita grupos

### **Cenário 2: Moderação**

- `USER` pode criar conteúdo
- `ADMIN` pode deletar qualquer conteúdo

### **Cenário 3: Relatórios**

- `USER` vê seus próprios dados
- `ADMIN` vê todos os dados + estatísticas

---

## 📚 Estrutura de Arquivos

```
src/
├── auth/
│   ├── decorators/
│   │   ├── roles.decorator.ts       # @Roles('ADMIN')
│   │   ├── public.decorator.ts      # @Public()
│   │   └── current-user.decorator.ts # @CurrentUser()
│   └── guards/
│       ├── jwt-auth.guard.ts        # Autenticação
│       └── roles.guard.ts           # Autorização
├── app.controller.ts                # /dashboard (exemplo)
└── app.module.ts                    # Guards globais
```

---

## ✅ Checklist de Implementação

- [x] Enum `UserRole` (USER, ADMIN)
- [x] Campo `role` no modelo User
- [x] Migration aplicada
- [x] Decorator `@Roles()`
- [x] RolesGuard implementado
- [x] Guard aplicado globalmente
- [x] Rota `/dashboard-admin` protegida
- [x] Testes HTTP prontos
- [x] Documentação Swagger

---

## 🚀 Próximos Passos (Opcional)

### **1. Adicionar Mais Roles**

```prisma
enum UserRole {
  USER
  MODERATOR
  ADMIN
  SUPER_ADMIN
}
```

### **2. Endpoint para Gerenciar Roles**

```typescript
@Roles('ADMIN')
@Patch('users/:id/role')
updateRole(
  @Param('id') id: number,
  @Body() { role }: { role: UserRole },
) {
  return this.userService.updateRole(id, role);
}
```

### **3. Middleware de Auditoria**

```typescript
@Roles('ADMIN')
@Delete('users/:id')
deleteUser(@Param('id') id: number, @CurrentUser() admin: User) {
  this.auditService.log({
    action: 'DELETE_USER',
    performedBy: admin.id,
    targetUserId: id,
  });
  return this.userService.delete(id);
}
```

---

## 📖 Resumo

✅ **Sistema de Roles implementado com sucesso!**

- `@Roles('ADMIN')` para proteger rotas
- `/dashboard` acessível apenas por administradores
- RolesGuard verifica permissões automaticamente
- Mensagens de erro claras (403 Forbidden)
- Compatível com JWT Authentication existente

🎉 **Seu sistema agora tem controle de acesso baseado em roles!**
