# 🎲 Algoritmo de Sorteio - Amigo Oculto

## Visão Geral

O algoritmo implementado resolve o problema de atribuição de pares para sorteio de amigo secreto, respeitando restrições definidas (como casais ou familiares que não podem tirar um ao outro).

## Características

### ✅ O que o algoritmo garante:

1. **Permutação válida**: Cada participante dá E recebe exatamente um presente
2. **Sem auto-sorteio**: Ninguém tira a si mesmo
3. **Respeita restrições**: Obedece todas as regras definidas pelo organizador
4. **Detecta impossibilidade**: Identifica quando as restrições impedem o sorteio
5. **Aleatoriedade**: Usa Fisher-Yates shuffle para garantir distribuição uniforme

## Estrutura do Algoritmo

### 1. Validação Prévia

```typescript
validateDrawPossibility(participants, restrictions);
```

Antes de tentar o sorteio, valida:

- **Mínimo de 3 participantes** (requisito matemático)
- **Cada participante tem pelo menos uma opção válida**
- **Não há ciclos impossíveis** no grafo de possibilidades

### 2. Backtracking Recursivo

```typescript
backtrack(givers, giverIndex, pairs, availableTakers, restrictions);
```

**Algoritmo:**

1. Para cada doador (giver):
   - Obtém lista de possíveis receptores (takers) válidos
   - Randomiza a ordem dos takers (para variar resultados)
   - Tenta atribuir cada taker possível
   - Se conseguir completar todos os pares → retorna sucesso
   - Se falhar → faz backtrack e tenta próximo taker

2. **Caso base**: Quando todos os givers foram atribuídos

3. **Recursão**: Avança para próximo giver com estado atualizado

### 3. Validação de Takers

```typescript
getPossibleTakers(giver, availableTakers, restrictions);
```

Para cada giver, filtra takers que:

- ✅ Ainda não foram atribuídos
- ✅ Não é o próprio giver (sem auto-sorteio)
- ✅ Não viola nenhuma restrição cadastrada

## Complexidade

### Tempo

- **Melhor caso**: O(n) - primeira tentativa funciona
- **Caso médio**: O(n!) - precisa explorar permutações
- **Pior caso**: O(n! × r) onde r = número de restrições

### Espaço

- O(n) para recursão e estruturas auxiliares

## Exemplo Prático

### Cenário: 5 participantes com restrições

```
Participantes: A, B, C, D, E

Restrições:
- A não pode tirar B (casal)
- C não pode tirar D (casal)
```

**Possibilidades:**

- A pode tirar: C, D, E
- B pode tirar: A, C, D, E
- C pode tirar: A, B, E
- D pode tirar: A, B, C, E
- E pode tirar: A, B, C, D

**Sorteio válido (exemplo):**

```
A → C
B → D
C → E
D → A
E → B
```

**Validação:**

- ✅ Todos dão e recebem exatamente uma vez
- ✅ Ninguém tirou a si mesmo
- ✅ A não tirou B
- ✅ C não tirou D

## Casos de Impossibilidade

### Exemplo 1: Restrições muito rígidas

```
Participantes: A, B, C

Restrições:
- A não pode tirar B
- A não pode tirar C
```

**❌ IMPOSSÍVEL**: A não tem ninguém para tirar

### Exemplo 2: Ciclo fechado

```
Participantes: A, B, C, D

Restrições:
- A só pode tirar B
- B só pode tirar A
```

**❌ IMPOSSÍVEL**: Com 4 pessoas, A→B e B→A fecha ciclo, impedindo C e D

## Uso no Serviço

### 1. Executar Sorteio

```typescript
POST /draw/perform/:groupId?ownerId=123
Body: { notifyParticipants: true }
```

**Fluxo:**

1. Valida owner do grupo
2. Verifica se sorteio já foi feito
3. Busca participantes APPROVED
4. Busca restrições do grupo
5. Executa algoritmo
6. Salva resultado em transaction (DrawResult + Pairs)
7. [Opcional] Envia notificações

### 2. Validar Possibilidade

```typescript
GET /draw/validate/:groupId
```

**Retorna:**

```json
{
  "isPossible": true,
  "participantCount": 10,
  "restrictionCount": 3,
  "details": {
    "groupName": "Natal 2024",
    "drawDate": "2024-12-25",
    "minValue": 50,
    "maxValue": 150
  }
}
```

### 3. Ver Resultado Individual

```typescript
GET /draw/my-result/:participantId?userId=456
```

**Retorna apenas quem o usuário tirou:**

```json
{
  "message": "🎁 Você tirou:",
  "performedAt": "2024-12-20T10:00:00Z",
  "drawnPerson": {
    "name": "Maria Silva",
    "email": "maria@email.com"
  },
  "wishlist": {
    "items": [
      { "name": "Livro", "link": "amazon.com/..." },
      { "name": "Perfume" }
    ]
  },
  "suggestedValue": {
    "min": 50,
    "max": 150
  }
}
```

### 4. Ver Resultado Completo (apenas owner)

```typescript
GET /draw/result/:groupId?ownerId=123
```

**Retorna todos os pares:**

```json
{
  "drawId": 1,
  "groupId": 5,
  "performedAt": "2024-12-20T10:00:00Z",
  "totalPairs": 10,
  "pairs": [
    {
      "giver": { "name": "João" },
      "taker": { "name": "Maria", "wishlist": {...} }
    }
  ]
}
```

## Otimizações Implementadas

### 1. Randomização em Múltiplos Níveis

- Ordem dos givers é embaralhada
- Ordem dos takers é embaralhada
- Usa Fisher-Yates shuffle (distribuição uniforme)

### 2. Tentativas Limitadas

- Máximo de 1000 tentativas (configurável)
- Evita loop infinito em casos extremos

### 3. Validação Antecipada

- Verifica possibilidade ANTES de tentar executar
- Retorna erro claro sobre qual participante não tem opções

### 4. Transaction Atômica

- DrawResult e todos os Pairs salvos juntos
- Rollback automático em caso de erro

## Melhorias Futuras Possíveis

### 1. Algoritmo Húngaro

Para grandes grupos (100+ participantes), considerar:

- Algoritmo Húngaro (Hungarian Algorithm)
- Complexidade: O(n³)
- Mais eficiente que backtracking para casos grandes

### 2. Cache de Validação

- Cachear resultado de `validateDrawPossibility`
- Invalidar apenas quando restrições mudarem

### 3. Sorteio Progressivo

Para grupos muito grandes:

- Dividir em sub-grupos
- Sortear em batches
- Combinar resultados

### 4. Métricas e Logging

- Tempo de execução
- Número de tentativas necessárias
- Distribuição de complexidade de restrições

## Referências

- **Problema da Permutação com Restrições**: Variante do problema de atribuição
- **Backtracking**: Técnica clássica para problemas de busca com constraints
- **Fisher-Yates Shuffle**: Algoritmo para embaralhamento uniforme

## Testes Recomendados

### Unit Tests

```typescript
describe('DrawAlgorithm', () => {
  it('deve sortear 3 participantes sem restrições');
  it('deve respeitar restrições simples');
  it('deve detectar impossibilidade');
  it('não deve permitir auto-sorteio');
  it('deve distribuir uniformemente (teste estatístico)');
});
```

### Integration Tests

```typescript
describe('DrawService', () => {
  it('deve executar sorteio completo');
  it('deve impedir sorteio duplicado');
  it('deve validar ownership');
  it('deve salvar em transaction');
});
```

### E2E Tests

```typescript
describe('Draw Flow', () => {
  it('fluxo completo: criar grupo → adicionar participantes → sortear');
  it('fluxo com restrições: casais não podem tirar um ao outro');
  it('tentativa de ver resultado de outro usuário deve falhar');
});
```

---

**Desenvolvido para API Amigo Oculto** 🎁
