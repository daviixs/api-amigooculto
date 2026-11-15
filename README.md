<p align="center">
  <img src="docs/logo.svg" alt="Amigo Oculto" width="96">
</p>

<h1 align="center">Amigo Oculto</h1>

<p align="center"><b>Automatize sorteios de Amigo Oculto com convites por link, wishlists e restrições que o sorteio respeita.</b></p>

<p align="center">
  <a href="#o-que-o-projeto-faz--dor-que-resolve">Sobre</a> ·
  <a href="#tech-stack--arquitetura">Stack</a> ·
  <a href="#deep-dive-técnico-backend">Backend</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white" alt="Vite">
  <img src="https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black" alt="React">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/TailwindCSS-06B6D4?logo=tailwindcss&logoColor=white" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/NestJS-E0234E?logo=nestjs&logoColor=white" alt="NestJS">
  <img src="https://img.shields.io/badge/PostgreSQL-4169E1?logo=postgresql&logoColor=white" alt="PostgreSQL">
  <img src="https://img.shields.io/badge/Prisma-2D3748?logo=prisma&logoColor=white" alt="Prisma">
</p>

## O que o projeto faz & Dor que resolve

- O que faz: automatiza a organização de sorteios de "Amigo Oculto" — criação/gestão de grupos, convites por link, cadastro de participantes, definição de wishlists e restrições (quem não pode tirar quem), execução do sorteio respeitando regras, persistência auditável dos resultados e envio de notificações; fornece visões do organizador e do participante.
- Dor resolvida: elimina processos manuais (planilhas, mensagens individuais, conferência de restrições) que são caros em tempo e sujeitos a erros humanos; reduz conflitos por sorteios inválidos e fornece histórico auditável e reexecução segura.
- Benefícios práticos: economia de tempo para organizadores, redução de erros humanos, privacidade por visões role-based (organizador vs participante) e auditabilidade dos resultados.
- Público-alvo: organizadores de eventos sociais/empresariais (escolas, empresas, famílias, comunidades) que precisam gerir sorteios com regras específicas.

## Resumo

- Valor: simplifica a organização de eventos sociais com automação confiável (sorteio, convites, wishlists) e histórico auditável.
- Resultado esperado: menos tempo gasto em logística, menor taxa de erros e rastreabilidade das decisões.

## Tech Stack & Arquitetura

- Frontend: Vite + React + TypeScript + Tailwind.
- Backend: NestJS (modularidade, DI, DTOs/validators).
- DB: PostgreSQL + Prisma (migrations tipadas, constraints).
- Arquitetura: camadas (API → Application → Domain → Infrastructure), SOLID, DTOs e validação centralizada.

## Deep Dive Técnico: Backend

- Componentes chave: lógica do sorteio em [src/draw/draw.algorithm.ts](src/draw/draw.algorithm.ts#L1) e orquestração/persistência em [src/draw/draw.service.ts](src/draw/draw.service.ts#L1).
- Padrões de projeto:
  - `Dependency Injection` (NestJS providers e módulos).
  - Abstração de infraestrutura via `PrismaService` (padrão tipo Repository).
  - Separação do algoritmo (`DrawAlgorithm`) facilita trocar estratégia/implementação.
- Algoritmo de sorteio (técnico):
  - Modelado como grafo de restrições; aplica validações prévias para detectar impossibilidades.
  - Usa backtracking recursivo com embaralhamento (Fisher–Yates) e cap de tentativas (`maxAttempts`) para evitar loops.
  - Complexidade: pior caso exponencial (backtracking); espaço O(n) para pilha e estruturas auxiliares.
  - Validações pós-sorteio disponíveis via `validateDrawResult`.
- Consistência e transações:
  - Persistência do resultado (`DrawResult` + `Pair`) dentro de `prisma.$transaction` para garantir ACID.
  - Notificações são enviadas após commit; falhas de envio são logadas e retornadas como resultado sem desfazer o sorteio (auditabilidade).

## Modelagem de Dados e Relacionamentos

- Schema principal: [prisma/schema.prisma](prisma/schema.prisma#L1).
- Relacionamentos principais:
  - `User` 1:N `Participant` (um usuário pode participar em vários grupos).
  - `Group` 1:N `Participant` e 1:N `DrawResult`.
  - `Participant` 1:1 `Wishlist` e participa em `Pair` como `giver`/`taker` (relações nomeadas).
  - `Restriction` modela bloqueios direcionais entre `Participant` (blockedGiver -> blockedTaker) com `@@unique` para evitar duplicates.
  - `DrawResult` 1:N `Pair`; `Pair` tem unicidade por (`drawResultId`, `giverId`).
- Como suporta o produto:
  - Permite consultas eficientes por owner, participante e envio de notificações.
  - `onDelete: Cascade` e constraints mantêm integridade e limpeza automática.

## Estratégias de Resiliência

- Conexões e serverless: `PrismaService` adapta Prisma para ambientes serverless usando `PrismaPg` e `pg.Pool` ([src/database/prisma.service.ts](src/database/prisma.service.ts#L1)).
- Rate limiting: `ThrottlerModule` aplicado globalmente com `ThrottlerGuard`.
- Transações: uso de `$transaction` para operações críticas de persistência.
- Observabilidade mínima: `ActivityLog` e logs no `PrismaService`; falhas em notificações são capturadas e reportadas.
- Validação preflight: endpoint/serviço `validateDrawPossibility` para feedback antes de executar o sorteio.

Endpoints principais (resumo)

| Método |                                     Rota | Autorização        | O que faz                                                                         |
| ------ | ---------------------------------------: | ------------------ | --------------------------------------------------------------------------------- |
| POST   |                 `/draw/perform/:groupId` | Owner (JWT + role) | Executa o sorteio, persiste `DrawResult` + `Pair`, tenta notificar participantes. |
| GET    |                `/draw/validate/:groupId` | Autenticado        | Valida a possibilidade matemática do sorteio.                                     |
| GET    |         `/draw/result/:groupId?ownerId=` | Owner              | Retorna resultado completo com wishlists.                                         |
| GET    | `/draw/my-result/:participantId?userId=` | Participant        | Retorna a pessoa que o participante tirou (visão individual).                     |
| GET    |     `/draw/can-redraw/:groupId?ownerId=` | Owner              | Indica se pode refazer (notificações não enviadas).                               |
| DELETE |                `/draw/:groupId?ownerId=` | Owner              | Deleta sorteio antes do envio de notificações para permitir redraw.               |

Diferenciais técnicos (rápido)

- Atomicidade: `$transaction` para persistência crítica.
- Algoritmo robusto: validações, backtracking e cap de tentativas.
- Auth híbrida: Firebase token verification + criação de usuário no banco.
- Serverless-ready DB adapter: `PrismaPg` + `pg.Pool`.
- DX: Swagger decorators presentes nos controllers e migrations/seed (`prisma/seed.ts`).

Instalação & Configuração (dev)

1. Clonar repositório

```bash
git clone <repo>
cd api-amigooculto
```

2. Instalar dependências

```bash
cd client && npm install
cd ../ && npm install
```

3. Arquivos de ambiente (exemplo para o backend)

```ini
DATABASE_URL=postgresql://user:pass@localhost:5432/amigo_oculto
JWT_SECRET=your_jwt_secret
NODE_ENV=development
```

4. Rodar local

```bash
# frontend (Vite)
npm run dev:client
# backend (NestJS)
npm run dev
```

5. Migrações e seed

```bash
npx prisma migrate dev --name init
npx prisma db seed --preview-feature
```

Observações rápidas

- Seeds de desenvolvimento: `prisma/seed.ts`.
- Arquivos-chave para leitura: [prisma/schema.prisma](prisma/schema.prisma#L1), [src/draw/draw.service.ts](src/draw/draw.service.ts#L1), [src/draw/draw.algorithm.ts](src/draw/draw.algorithm.ts#L1), [src/database/prisma.service.ts](src/database/prisma.service.ts#L1), [src/auth/firebase-auth.guard.ts](src/auth/firebase-auth.guard.ts#L1), [src/draw/draw.controller.ts](src/draw/draw.controller.ts#L1).

Roadmap (próximos passos)

- Integrar provedores de email transacionais (SendGrid/Mailgun) e templates dinâmicos.
- Melhorar UX de conflito: UI para resolução manual de conflitos antes de reexecução.
- Export seguro de resultados e integrações com calendários.
- Aumentar cobertura E2E (Cypress) e fuzzing do algoritmo de sorteio.
- Multi-tenant e i18n.

Contato técnico

- Arquitetura e decisões técnicas encontram-se em `PRD.md` e `docs/architecture.md`.
- Dúvidas técnicas: abrir issue/PR no repositório.

Licença

- MIT
