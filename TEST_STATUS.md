# 📊 Status dos Testes E2E

## ✅ Problema Principal RESOLVIDO!

**Erro P2011 (Null constraint violation)** foi causado por:

- ❌ Banco de dados com IDs tipo `TEXT` (UUID)
- ✅ Schema Prisma com IDs tipo `Int`

**Solução aplicada:**

```bash
npx prisma migrate dev --name convert_ids_to_int
```

## 📈 Resultados Atuais

**28 testes passando ✓** (65% de sucesso!)
**15 testes falhando ×**

### ✅ Testes que PASSARAM (28)

#### 1. Health Check

- ✓ GET / - Hello World

#### 2. User Module

- ✓ POST /users - criar usuário 1
- ✓ POST /users - criar usuário 2
- ✓ POST /users - criar usuário 3
- ✓ GET /users - listar usuários
- ✓ GET /users/:id - buscar por ID
- ✓ POST /users - email duplicado retorna 409

#### 3. Group Module

- ✓ POST /groups - criar grupo
- ✓ GET /groups - listar grupos do owner
- ✓ GET /groups/invite/:code - buscar por código
- ✓ GET /groups/:id - buscar por ID
- ✓ PATCH /groups/:id - atualizar grupo

#### 4. Participant Module

- ✓ POST /participants/join - usuário 3 entra
- ✓ POST /participants - owner se adiciona
- ✓ GET /participants/group/:groupId - listar
- ✓ GET /participants?status=PENDING - filtrar
- ✓ PATCH /participants/:id/approve - aprovar owner
- ✓ GET /participants/my-groups - meus grupos

#### 5. Draw Module

- ✓ GET /draw/can-redraw - verificar redraw
- ✓ POST /draw/perform - não sortear 2x

#### 6. Notifications

- ✓ GET /notifications/my - listar notificações

#### 7. Segurança

- ✓ GET /draw/result - não-owner não vê resultado

#### 8. Validações

- ✓ POST /users - rejeitar dados inválidos
- ✓ GET /users/:id - 404 para ID inexistente
- ✓ POST /participants/join - código inválido

#### 9. Cleanup

- ✓ DELETE /users/:id - deletar usuário

### ❌ Testes que FALHARAM (15)

#### User Module (1)

- × PATCH /users/:id - atualizar usuário (16ms)
  - **Erro**: 400 Bad Request
  - **Possível causa**: Validação ou campo faltando

#### Participant Module (5)

- × POST /participants/join - usuário 2 entra (5002ms - TIMEOUT)
  - **Erro**: Timeout de 5 segundos
  - **Causa**: Provavelmente query lenta ou bloqueio

- × PATCH /participants/:id/approve - aprovar participante 2 (12ms)
- × PATCH /participants/:id/approve - aprovar participante 3 (9ms)
  - **Erro**: 400 Bad Request
  - **Causa**: ID ou ownerId inválido

- × GET /participants/group/:groupId/count - contar (1292ms - TIMEOUT)
  - **Erro**: Timeout

#### Wishlist Module (4)

- × POST /wishlists - participante 2 cria (18ms)
- × POST /wishlists - participante 3 cria (12ms)
- × GET /wishlists/participant/:id - buscar (11ms)
- × PATCH /wishlists/:participantId - atualizar (8ms)
  - **Erro**: 400 Bad Request
  - **Causa**: Participant não aprovado ou não existe

#### Draw Module (3)

- × GET /draw/validate/:groupId - validar (2468ms - TIMEOUT)
- × POST /draw/perform/:groupId - sortear (1068ms)
- × GET /draw/result/:groupId - ver resultado (554ms)
  - **Erro**: 404 Not Found / Timeout
  - **Causa**: Sorteio não foi executado

- × GET /draw/my-result/:participantId - ver quem tirou (7ms)
  - **Erro**: 400 Bad Request

#### Segurança (1)

- × PATCH /groups/:id - não-owner não pode atualizar (5014ms - TIMEOUT)

- × GET /draw/my-result/:participantId - não pode ver de outro (34ms)
  - **Erro**: 400 em vez de 403

#### Cleanup (2)

- × DELETE /participants/:id - remover (5005ms - TIMEOUT)
- × DELETE /groups/:id - deletar (5012ms - TIMEOUT)

## 🔍 Análise dos Problemas

### 1. Timeouts (5 segundos)

**Afetam 6 testes:**

- POST /participants/join - usuário 2
- GET /participants/count
- GET /draw/validate
- PATCH /groups - security test
- DELETE /participants
- DELETE /groups

**Possíveis causas:**

- Queries N+1 (múltiplas queries ao banco)
- Falta de índices no banco
- Validações lentas
- Locks no banco de dados

### 2. Erros 400 Bad Request

**Afetam 8 testes:**

- Campos obrigatórios faltando
- Validação de DTOs muito restritiva
- IDs undefined (cascata de falhas)

### 3. Erros 404 Not Found

**Afetam 1 teste:**

- Draw result não existe (sorteio falhou antes)

## 🛠️ Próximos Passos para 100% de Sucesso

### Prioridade ALTA

1. **Investigar timeouts**
   - Adicionar logs para identificar queries lentas
   - Verificar índices no banco
   - Otimizar queries com muitos JOINs

2. **Corrigir validações 400**
   - Ver logs detalhados dos erros
   - Ajustar DTOs se necessário
   - Garantir que IDs estão sendo passados corretamente

3. **Corrigir falha do sorteio**
   - Draw não está sendo executado
   - Checar se há participantes aprovados suficientes

### Prioridade MÉDIA

4. **Melhorar testes de segurança**
   - Retornar 403 em vez de 400

5. **Adicionar tratamento de erros**
   - Mensagens mais claras
   - Status codes corretos

## 📝 Comandos Úteis

```bash
# Rodar todos os testes
npm run test:e2e

# Rodar com mais detalhes
npm run test:e2e -- --verbose

# Rodar apenas User Module
npm run test:e2e -- --testNamePattern="User Module"

# Ver detalhes de conexões abertas
npm run test:e2e -- --detectOpenHandles

# Limpar e rodar
npx prisma migrate reset --skip-seed && npm run test:e2e
```

## 🎯 Meta

**Objetivo**: 43/43 testes passando ✅

**Progresso atual**: 28/43 (65%)

**Faltam**: 15 testes para corrigir

---

**Última atualização**: 11/12/2025 22:30
**Status**: 🟡 Em progresso - Grande melhoria após correção do schema!
