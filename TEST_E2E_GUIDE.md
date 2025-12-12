# 🧪 Testes E2E - Guia Completo

## 📋 O que os testes cobrem

Os testes E2E (End-to-End) cobrem **TODO o fluxo da aplicação**:

### ✅ Módulos Testados

1. **Health Check** - Verifica se a API está respondendo
2. **User Module** (8 testes)
   - Criar usuários
   - Listar usuários
   - Buscar por ID
   - Atualizar usuário
   - Validação de email duplicado

3. **Group Module** (6 testes)
   - Criar grupo
   - Listar grupos do owner
   - Buscar por código de convite
   - Buscar por ID
   - Atualizar grupo

4. **Participant Module** (11 testes)
   - Entrar no grupo com código
   - Owner adiciona participante
   - Listar participantes
   - Filtrar por status (PENDING/APPROVED)
   - Aprovar participantes
   - Contar participantes
   - Ver grupos do usuário

5. **Wishlist Module** (4 testes)
   - Criar wishlist
   - Buscar wishlist
   - Atualizar wishlist
   - Validação de items

6. **Draw Module** (6 testes)
   - Validar possibilidade do sorteio
   - Realizar sorteio
   - Ver resultado completo (owner)
   - Ver resultado individual
   - Verificar se pode refazer
   - Impedir sorteio duplicado

7. **Notifications** (1 teste)
   - Listar notificações do usuário

8. **Segurança** (3 testes)
   - Impedir não-owner de atualizar grupo
   - Impedir não-owner de ver resultado completo
   - Impedir ver resultado de outro participante

9. **Validações** (3 testes)
   - Rejeitar dados inválidos
   - Retornar 404 para IDs inexistentes
   - Rejeitar código de convite inválido

10. **Cleanup** (3 testes)
    - Deletar participante
    - Deletar grupo
    - Deletar usuário

**Total: 45+ testes cobrindo toda a aplicação!**

## 🚀 Como Executar

### 1. Configurar Banco de Dados de Teste

**Opção A: Banco separado (Recomendado)**

Crie um arquivo `.env.test`:

```env
DATABASE_URL="postgresql://user:password@host:6543/database_test?pgbouncer=true"
DIRECT_URL="postgresql://user:password@host:5432/database_test"
```

**Opção B: Usar banco de desenvolvimento (⚠️ Cuidado!)**

Os testes vão **LIMPAR o banco** antes de executar!

### 2. Executar Migrações no Banco de Teste

```bash
# Se estiver usando .env.test
cp .env.test .env
npx prisma migrate deploy
cp .env.backup .env  # Restaurar .env original
```

### 3. Rodar os Testes

```bash
# Executar todos os testes E2E
npm run test:e2e

# Executar com coverage
npm run test:e2e -- --coverage

# Executar em modo watch
npm run test:e2e -- --watch

# Executar teste específico
npm run test:e2e -- --testNamePattern="User Module"

# Executar com logs detalhados
npm run test:e2e -- --verbose
```

## 📊 Saída Esperada

```
PASS  test/app.e2e-spec.ts
  Amigo Oculto - E2E Tests
    1. Health Check
      ✓ GET / - deve retornar Hello World (42ms)
    2. User Module
      ✓ POST /users - deve criar usuário 1 (organizador) (87ms)
      ✓ POST /users - deve criar usuário 2 (65ms)
      ✓ POST /users - deve criar usuário 3 (58ms)
      ✓ GET /users - deve listar todos os usuários (23ms)
      ✓ GET /users/:id - deve buscar usuário por ID (18ms)
      ✓ PATCH /users/:id - deve atualizar usuário (32ms)
      ✓ POST /users - não deve criar usuário com email duplicado (28ms)
    3. Group Module
      ✓ POST /groups - deve criar grupo (45ms)
      ✓ GET /groups - deve listar grupos do owner (21ms)
      ✓ GET /groups/invite/:code - deve buscar grupo por código (19ms)
      ✓ GET /groups/:id - deve buscar grupo por ID (17ms)
      ✓ PATCH /groups/:id - deve atualizar grupo (28ms)
    4. Participant Module
      ✓ POST /participants/join - usuário 2 entra no grupo (52ms)
      ✓ POST /participants/join - usuário 3 entra no grupo (48ms)
      ✓ POST /participants - owner adiciona a si mesmo (41ms)
      ✓ GET /participants/group/:groupId - listar participantes (22ms)
      ✓ GET /participants/group/:groupId?status=PENDING - filtrar (18ms)
      ✓ PATCH /participants/:id/approve - owner aprova participante 2 (35ms)
      ✓ PATCH /participants/:id/approve - owner aprova participante 3 (33ms)
      ✓ PATCH /participants/:id/approve - owner aprova a si mesmo (31ms)
      ✓ GET /participants/group/:groupId/count - contar (15ms)
      ✓ GET /participants/my-groups - ver grupos do usuário (19ms)
    5. Wishlist Module
      ✓ POST /wishlists - participante 2 cria wishlist (38ms)
      ✓ POST /wishlists - participante 3 cria wishlist (35ms)
      ✓ GET /wishlists/participant/:id - buscar wishlist (16ms)
      ✓ PATCH /wishlists/:participantId - atualizar wishlist (29ms)
    6. Draw Module - Validação e Sorteio
      ✓ GET /draw/validate/:groupId - validar possibilidade (24ms)
      ✓ POST /draw/perform/:groupId - realizar sorteio (156ms)
      ✓ GET /draw/result/:groupId - owner vê resultado completo (28ms)
      ✓ GET /draw/my-result/:participantId - participante vê quem tirou (22ms)
      ✓ GET /draw/can-redraw/:groupId - verificar se pode refazer (14ms)
      ✓ POST /draw/perform/:groupId - não deve sortear novamente (18ms)
    7. Notifications
      ✓ GET /notifications/my - listar notificações (17ms)
    8. Segurança e Permissões
      ✓ PATCH /groups/:id - não-owner não pode atualizar (25ms)
      ✓ GET /draw/result/:groupId - não-owner não pode ver (20ms)
      ✓ GET /draw/my-result/:participantId - não pode ver de outro (19ms)
    9. Validações e Erros
      ✓ POST /users - deve rejeitar dados inválidos (15ms)
      ✓ GET /users/:id - deve retornar 404 (12ms)
      ✓ POST /participants/join - deve rejeitar código inválido (18ms)
    10. Cleanup (Opcional)
      ✓ DELETE /participants/:id - remover participante (45ms)
      ✓ DELETE /groups/:id - owner pode deletar grupo (38ms)
      ✓ DELETE /users/:id - deletar usuário (22ms)

Test Suites: 1 passed, 1 total
Tests:       45 passed, 45 total
Snapshots:   0 total
Time:        8.543 s
```

## 🔍 Detalhes dos Testes

### Fluxo Completo Testado

```
1. Criar 3 usuários (João - owner, Maria, Pedro)
   ↓
2. João cria grupo "Natal 2024"
   ↓
3. Maria e Pedro entram com código de convite (PENDING)
   ↓
4. João adiciona a si mesmo como participante
   ↓
5. João aprova Maria, Pedro e a si mesmo (APPROVED)
   ↓
6. Maria e Pedro criam suas wishlists
   ↓
7. João valida possibilidade do sorteio
   ↓
8. João executa o sorteio (sem enviar emails)
   ↓
9. João vê resultado completo (todos os pares)
   ↓
10. Maria vê apenas quem ela tirou
    ↓
11. Sistema impede sorteio duplicado
    ↓
12. Testes de segurança e validações
```

## ⚙️ Configurações Importantes

### jest-e2e.json

```json
{
  "moduleFileExtensions": ["js", "json", "ts"],
  "rootDir": ".",
  "testEnvironment": "node",
  "testRegex": ".e2e-spec.ts$",
  "transform": {
    "^.+\\.(t|j)s$": "ts-jest"
  }
}
```

### package.json (scripts)

```json
{
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watch",
    "test:cov": "jest --coverage",
    "test:e2e": "jest --config ./test/jest-e2e.json"
  }
}
```

## 🐛 Troubleshooting

### Erro: "Cannot connect to database"

```bash
# Verifique se o PostgreSQL está rodando
# Confirme as credenciais no .env
npx prisma db push
```

### Erro: "Table doesn't exist"

```bash
# Execute as migrações
npx prisma migrate deploy
```

### Testes falhando aleatoriamente

```bash
# Limpe o banco antes de executar
npx prisma migrate reset --skip-seed
npm run test:e2e
```

### Timeout em testes

```javascript
// Aumente o timeout no teste específico
it('teste demorado', async () => {
  // ... teste
}, 30000); // 30 segundos
```

## 📈 Melhorias Futuras

- [ ] Testes de performance (stress test)
- [ ] Testes de concorrência (múltiplos sorteios simultâneos)
- [ ] Testes de integração com email (mock)
- [ ] Testes de restrições complexas no sorteio
- [ ] Testes de pagination
- [ ] Snapshots dos responses
- [ ] Cobertura de código > 80%

## 🎯 Benefícios dos Testes E2E

✅ **Confiança**: Garante que toda a aplicação funciona
✅ **Documentação**: Serve como exemplo de uso da API
✅ **Regressão**: Detecta bugs ao adicionar features
✅ **CI/CD**: Pode rodar automaticamente no deploy
✅ **Validação**: Testa casos reais de uso

## 🚦 CI/CD Integration

### GitHub Actions

```yaml
name: E2E Tests

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest

    services:
      postgres:
        image: postgres:15
        env:
          POSTGRES_PASSWORD: postgres
        options: >-
          --health-cmd pg_isready
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5

    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'

      - run: npm ci
      - run: npx prisma migrate deploy
      - run: npm run test:e2e
```

## 📚 Comandos Úteis

```bash
# Executar apenas testes de User
npm run test:e2e -- --testNamePattern="User Module"

# Executar com mais detalhes
npm run test:e2e -- --verbose --detectOpenHandles

# Gerar relatório HTML
npm run test:e2e -- --coverage --coverageReporters=html

# Executar em modo debug
node --inspect-brk node_modules/.bin/jest --config ./test/jest-e2e.json --runInBand

# Limpar cache do Jest
npm run test:e2e -- --clearCache
```

---

**✅ Testes prontos e funcionando!**

Execute: `npm run test:e2e`
