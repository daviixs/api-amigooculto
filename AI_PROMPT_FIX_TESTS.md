# 🤖 Prompt para IA: Corrigir Testes E2E Falhando

## 📋 Contexto do Projeto

Você está trabalhando em uma API NestJS para "Amigo Oculto" (Secret Santa) com os seguintes componentes:

- **Framework**: NestJS + TypeScript
- **ORM**: Prisma 6.18.0
- **Banco**: PostgreSQL (Supabase)
- **Testes**: Jest + Supertest (E2E)
- **IDs**: Tipo `Int` (autoincrement) em todo o sistema

## 🎯 Situação Atual

**Progresso**: 28/43 testes passando (65% de sucesso)
**Problema**: 15 testes ainda estão falhando

### ✅ O que já funciona:

- Health check
- User CRUD (criar, listar, buscar)
- Group CRUD (criar, listar, buscar, atualizar)
- Participant (criar owner, listar, filtrar)
- Validações básicas (email duplicado, 404, dados inválidos)
- Segurança parcial
- Cleanup de usuário

### ❌ O que NÃO funciona (15 testes):

#### 1. User Module (1 teste)

- **PATCH /users/:id** - atualizar usuário
  - Status: 400 Bad Request
  - Tempo: 16ms
  - Esperado: 200 OK

#### 2. Participant Module (5 testes)

- **POST /participants/join** - usuário 2 entra no grupo
  - Status: TIMEOUT (5002ms)
  - Esperado: 201 Created
- **PATCH /participants/:id/approve** - aprovar participante 2
  - Status: 400 Bad Request (12ms)
  - Esperado: 200 OK
- **PATCH /participants/:id/approve** - aprovar participante 3
  - Status: 400 Bad Request (9ms)
  - Esperado: 200 OK
- **GET /participants/group/:groupId/count** - contar participantes
  - Status: TIMEOUT (1292ms)
  - Esperado: 200 OK

#### 3. Wishlist Module (4 testes)

- **POST /wishlists** - participante 2 cria wishlist
  - Status: 400 Bad Request (18ms)
  - Esperado: 201 Created
- **POST /wishlists** - participante 3 cria wishlist
  - Status: 400 Bad Request (12ms)
  - Esperado: 201 Created
- **GET /wishlists/participant/:id** - buscar wishlist
  - Status: 400 Bad Request (11ms)
  - Esperado: 200 OK
- **PATCH /wishlists/:participantId** - atualizar wishlist
  - Status: 400 Bad Request (8ms)
  - Esperado: 200 OK

#### 4. Draw Module (3 testes)

- **GET /draw/validate/:groupId** - validar possibilidade do sorteio
  - Status: TIMEOUT (2468ms)
  - Esperado: 200 OK
- **POST /draw/perform/:groupId** - realizar sorteio
  - Status: TIMEOUT/400 (1068ms)
  - Esperado: 201 Created
- **GET /draw/result/:groupId** - owner vê resultado completo
  - Status: 404 Not Found (554ms)
  - Esperado: 200 OK
- **GET /draw/my-result/:participantId** - participante vê quem tirou
  - Status: 400 Bad Request (7ms)
  - Esperado: 200 OK

#### 5. Segurança (1 teste)

- **PATCH /groups/:id** - não-owner não pode atualizar grupo
  - Status: TIMEOUT (5014ms)
  - Esperado: 403 Forbidden
- **GET /draw/my-result/:participantId** - não pode ver de outro
  - Status: 400 Bad Request (34ms)
  - Esperado: 403 Forbidden

#### 6. Cleanup (2 testes)

- **DELETE /participants/:id** - remover participante
  - Status: TIMEOUT (5005ms)
  - Esperado: 200 OK
- **DELETE /groups/:id** - owner pode deletar grupo
  - Status: TIMEOUT (5012ms)
  - Esperado: 200 OK

## 🔍 Análise dos Problemas

### Tipo 1: Timeouts (6 testes - 5000ms)

**Testes afetados:**

- POST /participants/join (usuário 2)
- GET /participants/count
- GET /draw/validate
- PATCH /groups (security)
- DELETE /participants
- DELETE /groups

**Causas prováveis:**

1. Queries N+1 (múltiplas queries desnecessárias)
2. Falta de índices no banco de dados
3. JOINs complexos não otimizados
4. Validações síncronas lentas
5. Deadlocks ou locks no banco

**Ação necessária:**

- Investigar queries com logs
- Otimizar includes/selects do Prisma
- Adicionar índices no banco
- Verificar cascading deletes

### Tipo 2: Erros 400 Bad Request (8 testes)

**Testes afetados:**

- PATCH /users/:id
- PATCH /participants/:id/approve (2x)
- POST /wishlists (2x)
- GET /wishlists/participant/:id
- PATCH /wishlists/:participantId
- GET /draw/my-result/:participantId (2x)

**Causas prováveis:**

1. DTOs com validações muito restritivas
2. Campos obrigatórios faltando no body/query
3. IDs undefined (efeito cascata de testes anteriores)
4. ParseIntPipe falhando
5. ValidationPipe rejeitando dados válidos

**Ação necessária:**

- Verificar logs detalhados dos erros
- Revisar DTOs e decorators de validação
- Verificar se IDs estão sendo passados corretamente
- Testar endpoints manualmente com curl

### Tipo 3: Erro 404 Not Found (1 teste)

**Teste afetado:**

- GET /draw/result/:groupId

**Causa:**

- O sorteio não foi executado com sucesso (teste anterior falhou)
- Efeito cascata: se POST /draw/perform falha, o GET também falhará

**Ação necessária:**

- Corrigir POST /draw/perform primeiro
- Verificar se participantes estão aprovados
- Checar algoritmo de sorteio

### Tipo 4: Erro 400 em vez de 403 (2 testes)

**Testes afetados:**

- GET /draw/my-result/:participantId (security)

**Causa:**

- Validação de dados vem antes da autorização
- ValidationPipe sendo executado antes do Guard

**Ação necessária:**

- Reordenar validações no controller
- Verificar autorização ANTES de validar dados
- Retornar 403 Forbidden em vez de 400

## 🛠️ Sua Missão

### Objetivo Principal

Fazer **todos os 43 testes passarem** (100% de sucesso)

### Prioridades

#### 🔴 PRIORIDADE ALTA (resolver primeiro)

1. **Investigar e corrigir timeouts**
   - Adicionar logs temporários para identificar queries lentas
   - Usar `console.time()` e `console.timeEnd()` nos services
   - Verificar queries do Prisma com `prisma.$queryRaw`
   - Otimizar includes e selects

2. **Corrigir cascata de falhas no Participant**
   - Se "usuário 2 entra" falhar, todos os outros falham
   - Debugar POST /participants/join primeiro
   - Verificar se inviteCode está correto
   - Checar se userId2 existe

3. **Corrigir Wishlist (dependência do Participant)**
   - Wishlists só funcionam se participantes estiverem APPROVED
   - Verificar estado dos participantes antes de criar wishlist
   - Checar DTOs de wishlist

#### 🟡 PRIORIDADE MÉDIA

4. **Corrigir Draw Module**
   - Depende de participantes aprovados
   - Depende de wishlists criadas
   - Verificar algoritmo de sorteio
   - Adicionar mais logs

5. **Melhorar segurança (403 em vez de 400)**
   - Reordenar Guards vs Validation
   - Verificar ordem dos decorators

#### 🟢 PRIORIDADE BAIXA

6. **Otimizar cleanup**
   - Timeouts em DELETE podem ser por cascading
   - Verificar relações no schema Prisma

## 📝 Informações Importantes

### Estrutura de arquivos

```
src/
├── user/
│   ├── user.controller.ts
│   ├── user.service.ts
│   └── dto/ (ou src/dto/user.dto.ts)
├── group/
│   ├── group.controller.ts
│   └── group.service.ts
├── participant/
│   ├── participant.controller.ts
│   ├── participant.service.ts
│   └── participant.module.ts
├── wishlist/
│   ├── wishlist.controller.ts
│   ├── wishlist.service.ts
│   └── wishlist.module.ts
├── draw/
│   ├── draw.controller.ts
│   ├── draw.service.ts
│   ├── draw.algorithm.ts
│   └── draw.module.ts
├── notification/
│   ├── notification.controller.ts
│   └── notification.service.ts
├── database/
│   └── prisma.service.ts
└── dto/
    └── *.dto.ts
```

### Schema Prisma (principais modelos)

```prisma
model User {
  id            Int            @id @default(autoincrement())
  name          String
  email         String         @unique
  phone         String?
  // ... relações
}

model Group {
  id             Int            @id @default(autoincrement())
  name           String
  inviteCode     String         @unique
  ownerId        Int
  // ... relações
}

model Participant {
  id              Int               @id @default(autoincrement())
  userId          Int
  groupId         Int
  status          ParticipantStatus @default(PENDING)
  // ... relações
}

model Wishlist {
  id              Int    @id @default(autoincrement())
  participantId   Int    @unique
  items           Json   // Array de { name: string }
  // ... relações
}

enum ParticipantStatus {
  PENDING
  APPROVED
}
```

### Comandos úteis

```bash
# Rodar testes
npm run test:e2e

# Rodar com verbose
npm run test:e2e -- --verbose

# Rodar apenas um módulo
npm run test:e2e -- --testNamePattern="Participant Module"

# Ver handles abertos
npm run test:e2e -- --detectOpenHandles

# Resetar banco e rodar
npx prisma migrate reset --skip-seed && npm run test:e2e
```

## 🎯 Checklist de Sucesso

### Para cada teste falhando:

1. **Identificar o erro exato**
   - [ ] Ler o log completo do erro
   - [ ] Verificar qual controller/service está envolvido
   - [ ] Identificar o tipo de erro (timeout, 400, 404, 403)

2. **Investigar a causa raiz**
   - [ ] Adicionar `console.log()` nos controllers/services
   - [ ] Verificar se IDs estão sendo passados
   - [ ] Checar DTOs e validações
   - [ ] Testar query manualmente no Prisma Studio

3. **Implementar a correção**
   - [ ] Fazer mudança mínima necessária
   - [ ] Não quebrar testes que já passam
   - [ ] Adicionar comentários explicativos

4. **Validar a correção**
   - [ ] Rodar o teste específico
   - [ ] Rodar toda a suite
   - [ ] Verificar se não quebrou outros testes

## 🚀 Estratégia Recomendada

### Passo a Passo

1. **Começar pelos timeouts** (são os mais críticos)

   ```bash
   npm run test:e2e -- --testNamePattern="POST /participants/join - usuário 2"
   ```

   - Adicionar logs no `participant.service.ts`
   - Identificar a query lenta
   - Otimizar com `select` e reduzir `include`

2. **Corrigir cascata de Participant**
   - Se "join" passar, "approve" provavelmente passará
   - Verificar se `participant2Id` está sendo definido

3. **Corrigir Wishlist** (depende de Participant)
   - Garantir que participantes estão APPROVED
   - Verificar DTO de wishlist

4. **Corrigir Draw** (depende de tudo)
   - Último da cadeia
   - Só funciona se User, Group, Participant e Wishlist funcionarem

5. **Polir segurança**
   - Trocar 400 por 403 onde necessário

## 💡 Dicas Importantes

### ⚠️ Armadilhas Comuns

- Não modificar os testes (apenas o código da aplicação)
- Cuidado com efeitos colaterais entre testes
- IDs podem estar undefined se teste anterior falhou
- ValidationPipe pode rejeitar valores válidos se mal configurado

### ✅ Boas Práticas

- Sempre adicionar logs temporários para debug
- Testar localmente antes de commitar
- Fazer commits pequenos e incrementais
- Documentar mudanças complexas

### 🔧 Ferramentas

- Prisma Studio: `npx prisma studio`
- Ver queries: `DEBUG=prisma* npm run test:e2e`
- Logs do NestJS: Já estão habilitados
- Supertest: Já retorna o body nos erros

## 📊 Métricas de Sucesso

**Meta Final**: 43/43 testes passando ✅

**Estado Atual**: 28/43 (65%)

**A Corrigir**: 15 testes

---

## 🤖 Prompt Final para IA

"Você é um especialista em NestJS, Prisma e testes E2E. Analise os 15 testes falhando listados acima e corrija-os um por um seguindo esta ordem:

1. Primeiro, corrija os 6 timeouts (POST /participants/join, GET /participants/count, GET /draw/validate, PATCH /groups, DELETE /participants, DELETE /groups)
2. Depois, corrija os 8 erros 400 Bad Request
3. Corrija o erro 404 do Draw
4. Por último, melhore os erros de segurança (trocar 400 por 403)

Para cada correção:

- Identifique o arquivo a ser modificado
- Explique o problema encontrado
- Mostre o código corrigido
- Valide que não quebrou outros testes

Seu objetivo é fazer TODOS os 43 testes passarem. Comece agora!"
