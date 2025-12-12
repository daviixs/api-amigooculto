import {
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';

interface Participant {
  id: number;
  userId: number;
  groupId: number;
}

interface Restriction {
  id: number;
  blockedGiverId: number;
  blockedTakerId: number;
}

interface DrawPair {
  giverId: number;
  takerId: number;
}

export class DrawAlgorithm {
  /**
   * Algoritmo de sorteio com restrições
   * Usa backtracking para garantir solução válida
   */
  static shuffle(
    participants: Participant[],
    restrictions: Restriction[],
    maxAttempts: number = 1000,
  ): DrawPair[] {
    // Validação inicial
    if (participants.length < 3) {
      throw new BadRequestException(
        'Mínimo de 3 participantes necessários para o sorteio',
      );
    }

    // Verificar se o sorteio é possível
    this.validateDrawPossibility(participants, restrictions);

    // Tentar múltiplas vezes com randomização
    for (let attempt = 0; attempt < maxAttempts; attempt++) {
      try {
        const result = this.attemptDraw(participants, restrictions);
        if (result) {
          return result;
        }
      } catch (error) {
        // Tentar novamente
        continue;
      }
    }

    throw new InternalServerErrorException(
      'Não foi possível realizar o sorteio. As restrições podem estar muito rígidas.',
    );
  }

  /**
   * Validar se o sorteio é matematicamente possível
   */
  private static validateDrawPossibility(
    participants: Participant[],
    restrictions: Restriction[],
  ): void {
    // Para cada participante, verificar se tem pelo menos uma opção válida
    for (const giver of participants) {
      const validOptions = participants.filter((taker) => {
        // Não pode tirar a si mesmo
        if (taker.id === giver.id) return false;

        // Verificar se há restrição
        const hasRestriction = restrictions.some(
          (r) => r.blockedGiverId === giver.id && r.blockedTakerId === taker.id,
        );

        return !hasRestriction;
      });

      if (validOptions.length === 0) {
        throw new BadRequestException(
          `O participante ID ${giver.id} não tem nenhuma opção válida de sorteio. Revise as restrições.`,
        );
      }
    }

    // Verificar se não há ciclos impossíveis
    // Ex: A só pode tirar B, B só pode tirar A (com 3+ pessoas)
    this.detectImpossibleCycles(participants, restrictions);
  }

  /**
   * Detectar ciclos que tornam o sorteio impossível
   */
  private static detectImpossibleCycles(
    participants: Participant[],
    restrictions: Restriction[],
  ): void {
    const graph = new Map<number, Set<number>>();

    for (const giver of participants) {
      const validTakers = new Set<number>();

      for (const taker of participants) {
        if (taker.id === giver.id) continue;

        const hasRestriction = restrictions.some(
          (r) => r.blockedGiverId === giver.id && r.blockedTakerId === taker.id,
        );

        if (!hasRestriction) {
          validTakers.add(taker.id);
        }
      }

      graph.set(giver.id, validTakers);
    }
    for (const [giverId, takers] of graph.entries()) {
      if (takers.size === 0) {
        throw new BadRequestException(
          `Sorteio impossível: participante ${giverId} não tem opções válidas`,
        );
      }
    }
  }

  /**
   * Tentativa de realizar o sorteio usando backtracking
   */
  private static attemptDraw(
    participants: Participant[],
    restrictions: Restriction[],
  ): DrawPair[] | null {
    const pairs: DrawPair[] = [];
    const availableTakers = new Set(participants.map((p) => p.id));
    const givers = this.shuffleArray([...participants]);

    return this.backtrack(givers, 0, pairs, availableTakers, restrictions);
  }

  /**
   * Backtracking recursivo para encontrar combinação válida
   */
  private static backtrack(
    givers: Participant[],
    giverIndex: number,
    pairs: DrawPair[],
    availableTakers: Set<number>,
    restrictions: Restriction[],
  ): DrawPair[] | null {
    // Caso base: todos os givers foram atribuídos
    if (giverIndex === givers.length) {
      return [...pairs];
    }

    const giver = givers[giverIndex];

    // Obter possíveis takers para este giver
    const possibleTakers = this.getPossibleTakers(
      giver,
      availableTakers,
      restrictions,
    );

    // Randomizar ordem para variar resultados
    const shuffledTakers = this.shuffleArray(possibleTakers);

    // Tentar cada taker possível
    for (const takerId of shuffledTakers) {
      // Adicionar par
      pairs.push({ giverId: giver.id, takerId });
      availableTakers.delete(takerId);

      // Recursão
      const result = this.backtrack(
        givers,
        giverIndex + 1,
        pairs,
        availableTakers,
        restrictions,
      );

      if (result) {
        return result;
      }

      // Backtrack: remover par e restaurar taker
      pairs.pop();
      availableTakers.add(takerId);
    }

    return null;
  }

  /**
   * Obter takers possíveis para um giver
   */
  private static getPossibleTakers(
    giver: Participant,
    availableTakers: Set<number>,
    restrictions: Restriction[],
  ): number[] {
    const possible: number[] = [];

    for (const takerId of availableTakers) {
      // Não pode tirar a si mesmo
      if (takerId === giver.id) continue;

      // Verificar restrições
      const hasRestriction = restrictions.some(
        (r) => r.blockedGiverId === giver.id && r.blockedTakerId === takerId,
      );

      if (!hasRestriction) {
        possible.push(takerId);
      }
    }

    return possible;
  }

  /**
   * Embaralhar array (Fisher-Yates)
   */
  private static shuffleArray<T>(array: T[]): T[] {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  /**
   * Validar se um sorteio já realizado é válido
   */
  static validateDrawResult(
    pairs: DrawPair[],
    participants: Participant[],
    restrictions: Restriction[],
  ): { isValid: boolean; errors: string[] } {
    const errors: string[] = [];

    // Verificar se todos participantes estão incluídos
    const giverIds = new Set(pairs.map((p) => p.giverId));
    const takerIds = new Set(pairs.map((p) => p.takerId));

    for (const participant of participants) {
      if (!giverIds.has(participant.id)) {
        errors.push(`Participante ${participant.id} não está como giver`);
      }
      if (!takerIds.has(participant.id)) {
        errors.push(`Participante ${participant.id} não está como taker`);
      }
    }

    // Verificar auto-sorteio
    for (const pair of pairs) {
      if (pair.giverId === pair.takerId) {
        errors.push(`Participante ${pair.giverId} tirou a si mesmo (inválido)`);
      }
    }

    // Verificar restrições
    for (const pair of pairs) {
      const violation = restrictions.find(
        (r) =>
          r.blockedGiverId === pair.giverId &&
          r.blockedTakerId === pair.takerId,
      );

      if (violation) {
        errors.push(
          `Par ${pair.giverId} -> ${pair.takerId} viola restrição ${violation.id}`,
        );
      }
    }

    // Verificar duplicatas de takers
    const takerCounts = new Map<number, number>();
    for (const pair of pairs) {
      takerCounts.set(pair.takerId, (takerCounts.get(pair.takerId) || 0) + 1);
    }

    for (const [takerId, count] of takerCounts) {
      if (count > 1) {
        errors.push(`Participante ${takerId} foi sorteado ${count} vezes`);
      }
    }

    return {
      isValid: errors.length === 0,
      errors,
    };
  }
}
