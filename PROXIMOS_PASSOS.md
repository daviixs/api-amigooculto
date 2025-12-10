# 🎯 Próximos Passos - API Amigo Oculto

## ✅ Status Atual (Implementado)

### Módulos Completos:

- ✅ **User** - CRUD completo com validações
- ✅ **Group** - Criação de grupos com código de convite único
- ✅ **Participant** - Sistema de adesão e aprovação

### DTOs Criados:

- ✅ User, Group, Participant
- ✅ Wishlist, Restriction, Draw, Notification

### Infraestrutura:

- ✅ Prisma ORM configurado
- ✅ Validação global com `class-validator`
- ✅ Documentação Swagger configurada
- ✅ CORS habilitado

---

## 🔨 Próximos Passos (Ordem de Implementação)

### 1️⃣ **Wishlist Module** (Lista de Desejos)

**Prioridade:** ALTA  
**Dependência:** Participant

#### Service (`wishlist.service.ts`)

```typescript
Métodos necessários:
✓ create(participantId, items)
  - Validar se participante existe e está APPROVED
  - Salvar JSON com array de items

✓ update(participantId, items)
  - Atualizar lista existente
  - updatedAt é automático

✓ findByParticipant(participantId)
  - Buscar lista com parse do JSON

✓ delete(participantId)
  - Remover lista

✓ validateItems(items)
  - Validar estrutura dos items (name obrigatório)
```

#### Controller (`wishlist.controller.ts`)

```typescript
POST   /wishlists                    - Criar lista
GET    /wishlists/participant/:id    - Buscar lista do participante
PATCH  /wishlists/:participantId     - Atualizar lista
DELETE /wishlists/:participantId     - Remover lista
```

#### Comandos:

```bash
nest g module wishlist
nest g service wishlist
nest g controller wishlist
```

---

### 2️⃣ **Restriction Module** (Restrições)

**Prioridade:** ALTA  
**Dependência:** Participant

#### Service (`restriction.service.ts`)

```typescript
Métodos necessários:
✓ create(groupId, giverId, takerId, ownerId)
  - Validar se owner é dono do grupo
  - Validar se ambos participantes existem no grupo
  - Evitar duplicatas

✓ bulkCreate(groupId, restrictions[], ownerId)
  - Criar múltiplas restrições em transaction
  - Validar todos os participantes de uma vez

✓ findByGroup(groupId)
  - Listar com include de giver e taker
  - Formatar: "João não pode tirar Maria"

✓ remove(id, ownerId)
  - Validar owner
  - Não permitir após sorteio

✓ validateRestriction(giverId, takerId, groupId)
  - Verificar se restrição existe
```

#### Controller (`restriction.controller.ts`)

```typescript
POST   /restrictions              - Criar restrição (owner)
POST   /restrictions/bulk         - Criar múltiplas (owner)
GET    /restrictions/group/:id    - Listar do grupo
DELETE /restrictions/:id          - Remover (owner)
```

#### Comandos:

```bash
nest g module restriction
nest g service restriction
nest g controller restriction
```

---

### 3️⃣ **Draw Module** (Sorteio) ⭐ **CORE DO SISTEMA**

**Prioridade:** CRÍTICA  
**Dependência:** Participant, Wishlist, Restriction

#### Service (`draw.service.ts`)

```typescript
Métodos necessários:

✓ performDraw(groupId, ownerId, notifyParticipants)
  1. Validações:
     - Owner é dono do grupo
     - Não existe sorteio prévio
     - Mínimo 3 participantes APPROVED

  2. Buscar dados:
     - Participantes aprovados
     - Restrições do grupo

  3. Executar algoritmo:
     - shuffleWithRestrictions()
     - Retorna array de pairs

  4. Salvar resultado:
     - Transaction: DrawResult + Pairs

  5. Notificar (se enabled):
     - Para cada pair, enviar notificação

✓ shuffleWithRestrictions(participants, restrictions)
  - Algoritmo de randomização
  - Respeitar restrições
  - Garantir que ninguém tira a si mesmo
  - Throw error se impossível

✓ validateDrawPossibility(groupId)
  - Verificar mínimo de participantes
  - Verificar se restrições não impedem sorteio
  - Retornar { isPossible, message, details }

✓ getDrawResult(groupId, ownerId)
  - Apenas owner vê resultado completo
  - Retorna todos os pairs

✓ getMyDraw(participantId, userId)
  - Validar se userId é dono do participant
  - Buscar Pair onde giverId === participantId
  - Include: taker com user e wishlist

✓ canRedraw(groupId)
  - Verificar se notificações já foram enviadas
```

#### Algoritmo de Sorteio (Exemplo)

```typescript
// draw.algorithm.ts
export class DrawAlgorithm {
  static shuffle(
    participants: Participant[],
    restrictions: Restriction[],
  ): { giverId: number; takerId: number }[] {
    const takers = [...participants];
    const result = [];

    for (const giver of participants) {
      const validTakers = takers.filter((taker) => {
        // Não pode tirar a si mesmo
        if (taker.id === giver.id) return false;

        // Verificar restrições
        const hasRestriction = restrictions.some(
          (r) => r.blockedGiverId === giver.id && r.blockedTakerId === taker.id,
        );

        return !hasRestriction;
      });

      if (validTakers.length === 0) {
        throw new DrawImpossibleException(
          'Sorteio impossível com essas restrições',
        );
      }

      // Escolher aleatório
      const chosen =
        validTakers[Math.floor(Math.random() * validTakers.length)];

      result.push({
        giverId: giver.id,
        takerId: chosen.id,
      });

      // Remover da lista
      takers.splice(takers.indexOf(chosen), 1);
    }

    return result;
  }
}
```

#### Controller (`draw.controller.ts`)

```typescript
POST   /draw/perform/:groupId        - Executar sorteio (owner)
GET    /draw/result/:groupId         - Ver resultado completo (owner)
GET    /draw/my-result/:participantId - Ver quem tirei
GET    /draw/validate/:groupId       - Validar possibilidade
```

#### Comandos:

```bash
nest g module draw
nest g service draw
nest g controller draw
mkdir src/draw/algorithms
```

---

### 4️⃣ **Notification Module** (Notificações)

**Prioridade:** ALTA  
**Dependência:** Draw

#### Service (`notification.service.ts`)

```typescript
Métodos necessários:

✓ sendDrawNotification(participantId, drawnPerson, wishlist)
  - Criar registro na tabela Notification
  - Enviar email com:
    * Quem a pessoa tirou
    * Lista de desejos
    * Valor sugerido do grupo
  - Marcar delivered: true após envio

✓ sendInviteNotification(userId, groupName, inviteCode)
  - Notificar sobre convite recebido

✓ sendApprovalNotification(participantId)
  - Notificar aprovação

✓ getMyNotifications(userId)
  - Listar notificações do usuário
  - Filtrar por não lidas

✓ markAsDelivered(notificationId)
  - Marcar como entregue

✓ resendNotification(notificationId)
  - Reenviar email
```

#### Email Provider (`email.provider.ts`)

```typescript
// Usar NodeMailer ou serviço externo
export class EmailProvider {
  async sendEmail(to, subject, html) {
    // Implementar envio
  }

  async sendDrawResultEmail(participant, drawnPerson, wishlist) {
    const html = `
      <h2>🎁 Resultado do Amigo Secreto</h2>
      <p>Olá ${participant.name}!</p>
      <p>Você tirou: <strong>${drawnPerson.name}</strong></p>
      
      <h3>Lista de Desejos:</h3>
      <ul>
        ${wishlist.items.map((i) => `<li>${i.name}</li>`).join('')}
      </ul>
    `;

    return this.sendEmail(participant.email, 'Resultado Amigo Secreto', html);
  }
}
```

#### Controller (`notification.controller.ts`)

```typescript
GET    /notifications/my           - Minhas notificações
PATCH  /notifications/:id/read     - Marcar como lida
POST   /notifications/resend/:id   - Reenviar
```

#### Comandos:

```bash
nest g module notification
nest g service notification
nest g controller notification
npm install nodemailer
npm install -D @types/nodemailer
```

---

## 🔐 5️⃣ **Guards e Autenticação** (Opcional, mas Recomendado)

**Prioridade:** MÉDIA

### Implementar JWT Authentication

```bash
npm install @nestjs/jwt @nestjs/passport passport passport-jwt
npm install -D @types/passport-jwt
```

#### Guards:

```typescript
// auth.guard.ts
- Verificar token JWT

// owner.guard.ts
- Verificar se usuário é owner do grupo

// participant.guard.ts
- Verificar se usuário é participante do grupo
```

#### Atualizar Controllers:

```typescript
@UseGuards(JwtAuthGuard, OwnerGuard)
@Post('draw/perform/:groupId')
async performDraw(...) { }
```

---

## 🧪 6️⃣ **Testes** (Recomendado)

### Testes Unitários (Jest)

```bash
# Testar services isoladamente
npm run test

# Principais cenários:
- DrawService.shuffleWithRestrictions()
- ParticipantService.joinGroup()
- GroupService.create() - código único
```

### Testes E2E

```bash
npm run test:e2e

# Testar fluxo completo:
1. Criar grupo
2. Participantes entram
3. Owner aprova
4. Define restrições
5. Executa sorteio
6. Verifica resultados
```

---

## 📚 7️⃣ **Documentação e Melhorias**

### Swagger Completo

- [ ] Adicionar exemplos de responses
- [ ] Documentar erros possíveis
- [ ] Adicionar authentication no Swagger

### Logging

```typescript
// Adicionar Winston ou Logger do NestJS
this.logger.log('Sorteio realizado', { groupId, pairsCount });
```

### Error Handling

```typescript
// Criar exception filters customizados
@Catch(DrawImpossibleException)
export class DrawExceptionFilter {}
```

---

## 🚀 8️⃣ **Deploy**

### Preparar para Produção

```bash
# Variáveis de ambiente
DATABASE_URL=
DIRECT_URL=
JWT_SECRET=
EMAIL_HOST=
EMAIL_PORT=
EMAIL_USER=
EMAIL_PASS=

# Build
npm run build

# Start production
npm run start:prod
```

### Plataformas Sugeridas:

- **Backend:** Railway, Render, Fly.io
- **Database:** Supabase, Neon, Railway PostgreSQL
- **Email:** SendGrid, AWS SES, Mailgun

---

## 📋 Checklist Geral

### Prioridade Imediata:

- [ ] Implementar WishlistModule
- [ ] Implementar RestrictionModule
- [ ] Implementar DrawModule (algoritmo)
- [ ] Implementar NotificationModule (email)

### Prioridade Média:

- [ ] Adicionar Guards de autenticação
- [ ] Implementar testes unitários
- [ ] Melhorar documentação Swagger
- [ ] Adicionar logging

### Prioridade Baixa:

- [ ] Implementar SMS (Twilio)
- [ ] Adicionar rate limiting
- [ ] Implementar cache (Redis)
- [ ] Dashboard admin

---

## 🎓 Conceitos Importantes

### Algoritmo de Sorteio

O algoritmo precisa garantir:

1. **Permutação válida** - Cada pessoa dá E recebe presente
2. **Sem auto-sorteio** - Ninguém tira a si mesmo
3. **Respeitar restrições** - Casais, familiares, etc
4. **Detectar impossibilidade** - Quando restrições impedem sorteio

### Transações Prisma

Use `$transaction` para operações atômicas:

```typescript
await prisma.$transaction([
  prisma.drawResult.create(...),
  prisma.pair.createMany(...)
]);
```

### Segurança

- Sempre validar ownership (ownerId)
- Não expor resultado completo do sorteio
- Validar participantes antes de aprovar
- Prevenir sorteio após já realizado

---

## 📞 Comandos Úteis

```bash
# Criar módulos restantes
nest g module wishlist && nest g service wishlist && nest g controller wishlist
nest g module restriction && nest g service restriction && nest g controller restriction
nest g module draw && nest g service draw && nest g controller draw
nest g module notification && nest g service notification && nest g controller notification

# Prisma
npx prisma generate          # Gerar client
npx prisma migrate dev       # Criar migration
npx prisma studio            # Visualizar dados

# Desenvolvimento
npm run start:dev            # Dev server
npm run build                # Build
npm run start:prod           # Production

# Testes
npm run test                 # Unit tests
npm run test:e2e            # E2E tests
npm run test:cov            # Coverage
```

---

## 🎯 Meta Final

Quando tudo estiver implementado, o fluxo completo será:

1. ✅ Organizador cria grupo → Recebe código de convite
2. ✅ Participantes entram com código → Status PENDING
3. ✅ Participantes criam wishlist
4. ✅ Organizador aprova participantes → Status APPROVED
5. ✅ Organizador define restrições (casais, etc)
6. ✅ Organizador valida possibilidade de sorteio
7. ✅ Organizador executa sorteio
8. ✅ Sistema randomiza respeitando regras
9. ✅ Sistema envia notificações privadas
10. ✅ Cada participante vê quem tirou + wishlist

---

**Boa sorte com a implementação! 🎁🎄**
