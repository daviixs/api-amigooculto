import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from './../src/app.module';
import { PrismaService } from '../src/database/prisma.service';

describe('Amigo Oculto - E2E Tests', () => {
  let app: INestApplication<App>;
  let prisma: PrismaService;

  // IDs que serão criados durante os testes
  let userId1: number;
  let userId2: number;
  let userId3: number;
  let groupId: number;
  let inviteCode: string;
  let participant1Id: number;
  let participant2Id: number;
  let participant3Id: number;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
    await app.init();

    prisma = app.get(PrismaService);

    // Limpar banco de dados antes dos testes
    await prisma.notification.deleteMany();
    await prisma.pair.deleteMany();
    await prisma.drawResult.deleteMany();
    await prisma.restriction.deleteMany();
    await prisma.wishlist.deleteMany();
    await prisma.participant.deleteMany();
    await prisma.group.deleteMany();
    await prisma.user.deleteMany();
  }, 30000); // 30 segundos de timeout para setup

  afterAll(async () => {
    await app.close();
  });

  describe('1. Health Check', () => {
    it('GET / - deve retornar Hello World', () => {
      return request(app.getHttpServer()).get('/').expect(200);
    });
  });

  describe('2. User Module', () => {
    it('POST /users - deve criar usuário 1 (organizador)', async () => {
      const response = await request(app.getHttpServer())
        .post('/users')
        .send({
          name: 'João Silva',
          email: 'joao@test.com',
          phone: '11999999999',
        })
        .expect(201);

      expect(response.body).toHaveProperty('id');
      expect(response.body.name).toBe('João Silva');
      expect(response.body.email).toBe('joao@test.com');
      userId1 = response.body.id;
    });

    it('POST /users - deve criar usuário 2', async () => {
      const response = await request(app.getHttpServer())
        .post('/users')
        .send({
          name: 'Maria Santos',
          email: 'maria@test.com',
          phone: '11988888888',
        })
        .expect(201);

      userId2 = response.body.id;
    });

    it('POST /users - deve criar usuário 3', async () => {
      const response = await request(app.getHttpServer())
        .post('/users')
        .send({
          name: 'Pedro Costa',
          email: 'pedro@test.com',
        })
        .expect(201);

      userId3 = response.body.id;
    });

    it('GET /users - deve listar todos os usuários', async () => {
      const response = await request(app.getHttpServer())
        .get('/users')
        .expect(200);

      expect(response.body).toHaveLength(3);
    });

    it('GET /users/:id - deve buscar usuário por ID', async () => {
      const response = await request(app.getHttpServer())
        .get(`/users/${userId1}`)
        .expect(200);

      expect(response.body.name).toBe('João Silva');
    });

    it('PATCH /users/:id - deve atualizar usuário', async () => {
      const response = await request(app.getHttpServer())
        .patch(`/users/${userId1}`)
        .send({ phone: '11977777777' })
        .expect(200);

      expect(response.body.phone).toBe('11977777777');
    });

    it('POST /users - não deve criar usuário com email duplicado', async () => {
      await request(app.getHttpServer())
        .post('/users')
        .send({
          name: 'Outro João',
          email: 'joao@test.com',
        })
        .expect(409);
    });
  });

  describe('3. Group Module', () => {
    it('POST /groups - deve criar grupo', async () => {
      const drawDate = new Date();
      drawDate.setDate(drawDate.getDate() + 30); // 30 dias no futuro

      const response = await request(app.getHttpServer())
        .post('/groups')
        .send({
          name: 'Natal 2024 - Teste E2E',
          description: 'Grupo de teste para E2E',
          drawDate: drawDate.toISOString(),
          minValue: 50,
          maxValue: 150,
          ownerId: userId1,
        })
        .expect(201);

      expect(response.body).toHaveProperty('id');
      expect(response.body).toHaveProperty('inviteCode');
      expect(response.body.name).toBe('Natal 2024 - Teste E2E');
      groupId = response.body.id;
      inviteCode = response.body.inviteCode;
    });

    it('GET /groups - deve listar grupos do owner', async () => {
      const response = await request(app.getHttpServer())
        .get(`/groups?ownerId=${userId1}`)
        .expect(200);

      expect(response.body).toHaveLength(1);
    });

    it('GET /groups/invite/:code - deve buscar grupo por código', async () => {
      const response = await request(app.getHttpServer())
        .get(`/groups/invite/${inviteCode}`)
        .expect(200);

      expect(response.body.id).toBe(groupId);
    });

    it('GET /groups/:id - deve buscar grupo por ID', async () => {
      const response = await request(app.getHttpServer())
        .get(`/groups/${groupId}`)
        .expect(200);

      expect(response.body.name).toBe('Natal 2024 - Teste E2E');
    });

    it('PATCH /groups/:id - deve atualizar grupo', async () => {
      const response = await request(app.getHttpServer())
        .patch(`/groups/${groupId}?userId=${userId1}`)
        .send({ description: 'Descrição atualizada' })
        .expect(200);

      expect(response.body.description).toBe('Descrição atualizada');
    });
  });

  describe('4. Participant Module', () => {
    it('POST /participants/join - usuário 2 entra no grupo', async () => {
      const response = await request(app.getHttpServer())
        .post('/participants/join')
        .send({
          name: 'Maria Santos',
          email: 'maria@test.com',
          inviteCode: inviteCode,
        })
        .expect(201);

      expect(response.body.status).toBe('PENDING');
      participant2Id = response.body.id;
    });

    it('POST /participants/join - usuário 3 entra no grupo', async () => {
      const response = await request(app.getHttpServer())
        .post('/participants/join')
        .send({
          name: 'Pedro Costa',
          email: 'pedro@test.com',
          inviteCode: inviteCode,
        })
        .expect(201);

      participant3Id = response.body.id;
    });

    it('POST /participants - owner adiciona a si mesmo', async () => {
      const response = await request(app.getHttpServer())
        .post(`/participants?ownerId=${userId1}`)
        .send({
          userId: userId1,
          groupId: groupId,
        })
        .expect(201);

      participant1Id = response.body.id;
    });

    it('GET /participants/group/:groupId - listar participantes', async () => {
      const response = await request(app.getHttpServer())
        .get(`/participants/group/${groupId}`)
        .expect(200);

      expect(response.body.length).toBeGreaterThanOrEqual(3);
    });

    it('GET /participants/group/:groupId?status=PENDING - filtrar por status', async () => {
      const response = await request(app.getHttpServer())
        .get(`/participants/group/${groupId}?status=PENDING`)
        .expect(200);

      expect(response.body.length).toBeGreaterThanOrEqual(2);
    });

    it('PATCH /participants/:id/approve - owner aprova participante 2', async () => {
      const response = await request(app.getHttpServer())
        .patch(`/participants/${participant2Id}/approve?ownerId=${userId1}`)
        .expect(200);

      expect(response.body.status).toBe('APPROVED');
    });

    it('PATCH /participants/:id/approve - owner aprova participante 3', async () => {
      await request(app.getHttpServer())
        .patch(`/participants/${participant3Id}/approve?ownerId=${userId1}`)
        .expect(200);
    });

    it('PATCH /participants/:id/approve - owner aprova a si mesmo', async () => {
      await request(app.getHttpServer())
        .patch(`/participants/${participant1Id}/approve?ownerId=${userId1}`)
        .expect(200);
    });

    it('GET /participants/group/:groupId/count - contar participantes', async () => {
      const response = await request(app.getHttpServer())
        .get(`/participants/group/${groupId}/count`)
        .expect(200);

      expect(response.body.total).toBe(3);
      expect(response.body.approved).toBe(3);
    });

    it('GET /participants/my-groups - ver grupos do usuário', async () => {
      const response = await request(app.getHttpServer())
        .get(`/participants/my-groups?userId=${userId2}`)
        .expect(200);

      expect(response.body.length).toBeGreaterThanOrEqual(1);
    });
  });

  describe('5. Wishlist Module', () => {
    it('POST /wishlists - participante 2 cria wishlist', async () => {
      const response = await request(app.getHttpServer())
        .post('/wishlists')
        .send({
          participantId: participant2Id,
          items: [
            {
              name: 'Livro: Clean Code',
              description: 'Robert C. Martin',
              link: 'https://amazon.com.br/...',
            },
            { name: 'Fone Bluetooth', description: 'Preferência JBL' },
            { name: 'Cafeteira' },
          ],
        })
        .expect(201);

      expect(response.body.items).toHaveLength(3);
    });

    it('POST /wishlists - participante 3 cria wishlist', async () => {
      await request(app.getHttpServer())
        .post('/wishlists')
        .send({
          participantId: participant3Id,
          items: [{ name: 'Tênis de corrida' }, { name: 'Mochila' }],
        })
        .expect(201);
    });

    it('GET /wishlists/participant/:id - buscar wishlist', async () => {
      const response = await request(app.getHttpServer())
        .get(`/wishlists/participant/${participant2Id}`)
        .expect(200);

      expect(response.body.items).toHaveLength(3);
    });

    it('PATCH /wishlists/:participantId - atualizar wishlist', async () => {
      const response = await request(app.getHttpServer())
        .patch(`/wishlists/${participant2Id}`)
        .send({
          items: [
            { name: 'Livro: Clean Code' },
            { name: 'Fone Bluetooth' },
            { name: 'Mouse gamer' },
            { name: 'Teclado mecânico' },
          ],
        })
        .expect(200);

      expect(response.body.items).toHaveLength(4);
    });
  });

  describe('6. Draw Module - Validação e Sorteio', () => {
    it('GET /draw/validate/:groupId - validar possibilidade do sorteio', async () => {
      const response = await request(app.getHttpServer())
        .get(`/draw/validate/${groupId}`)
        .expect(200);

      expect(response.body.isPossible).toBe(true);
      expect(response.body.participantCount).toBe(3);
    });

    it('POST /draw/perform/:groupId - realizar sorteio SEM notificações', async () => {
      const response = await request(app.getHttpServer())
        .post(`/draw/perform/${groupId}?ownerId=${userId1}`)
        .send({
          notifyParticipants: false, // Não enviar emails no teste
        })
        .expect(201);

      expect(response.body).toHaveProperty('drawId');
      expect(response.body.totalPairs).toBe(3);
      expect(response.body.message).toContain('sucesso');
    });

    it('GET /draw/result/:groupId - owner vê resultado completo', async () => {
      const response = await request(app.getHttpServer())
        .get(`/draw/result/${groupId}?ownerId=${userId1}`)
        .expect(200);

      expect(response.body.pairs).toHaveLength(3);
      expect(response.body.pairs[0]).toHaveProperty('giver');
      expect(response.body.pairs[0]).toHaveProperty('taker');
    });

    it('GET /draw/my-result/:participantId - participante vê quem tirou', async () => {
      const response = await request(app.getHttpServer())
        .get(`/draw/my-result/${participant2Id}?userId=${userId2}`)
        .expect(200);

      expect(response.body).toHaveProperty('drawnPerson');
      expect(response.body.message).toContain('tirou');
    });

    it('GET /draw/can-redraw/:groupId - verificar se pode refazer', async () => {
      const response = await request(app.getHttpServer())
        .get(`/draw/can-redraw/${groupId}?ownerId=${userId1}`)
        .expect(200);

      expect(response.body).toHaveProperty('canRedraw');
    });

    it('POST /draw/perform/:groupId - não deve sortear novamente', async () => {
      await request(app.getHttpServer())
        .post(`/draw/perform/${groupId}?ownerId=${userId1}`)
        .send({ notifyParticipants: false })
        .expect(400);
    });
  });

  describe('7. Notifications', () => {
    it('GET /notifications/my - listar notificações do usuário', async () => {
      const response = await request(app.getHttpServer())
        .get(`/notifications/my?userId=${userId2}`)
        .expect(200);

      expect(Array.isArray(response.body)).toBe(true);
    });
  });

  describe('8. Segurança e Permissões', () => {
    it('PATCH /groups/:id - usuário não-owner não pode atualizar grupo', async () => {
      await request(app.getHttpServer())
        .patch(`/groups/${groupId}?userId=${userId2}`)
        .send({ name: 'Tentativa de hack' })
        .expect(403);
    });

    it('GET /draw/result/:groupId - não-owner não pode ver resultado completo', async () => {
      await request(app.getHttpServer())
        .get(`/draw/result/${groupId}?ownerId=${userId2}`)
        .expect(403);
    });

    it('GET /draw/my-result/:participantId - não pode ver resultado de outro', async () => {
      await request(app.getHttpServer())
        .get(`/draw/my-result/${participant2Id}?userId=${userId3}`)
        .expect(403);
    });
  });

  describe('9. Validações e Erros', () => {
    it('POST /users - deve rejeitar dados inválidos', async () => {
      await request(app.getHttpServer())
        .post('/users')
        .send({ name: '' })
        .expect(400);
    });

    it('GET /users/:id - deve retornar 404 para ID inexistente', async () => {
      await request(app.getHttpServer()).get('/users/99999').expect(404);
    });

    it('POST /participants/join - deve rejeitar código inválido', async () => {
      await request(app.getHttpServer())
        .post('/participants/join')
        .send({
          name: 'Teste',
          email: 'teste@test.com',
          inviteCode: 'INVALIDO123',
        })
        .expect(404);
    });
  });

  describe('10. Cleanup (Opcional)', () => {
    it('DELETE /participants/:id - remover participante', async () => {
      // Criar novo participante para testar remoção
      const newUser = await request(app.getHttpServer())
        .post('/users')
        .send({
          name: 'Usuário Temp',
          email: 'temp@test.com',
        })
        .expect(201);

      const newParticipant = await request(app.getHttpServer())
        .post('/participants/join')
        .send({
          name: 'Usuário Temp',
          email: 'temp@test.com',
          inviteCode: inviteCode,
        })
        .expect(201);

      await request(app.getHttpServer())
        .delete(
          `/participants/${newParticipant.body.id}?userId=${newUser.body.id}`,
        )
        .expect(200);
    });

    it('DELETE /groups/:id - owner pode deletar grupo', async () => {
      // Criar novo grupo para testar deleção
      const newGroup = await request(app.getHttpServer())
        .post('/groups')
        .send({
          name: 'Grupo Temporário',
          drawDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
          ownerId: userId1,
        })
        .expect(201);

      await request(app.getHttpServer())
        .delete(`/groups/${newGroup.body.id}?userId=${userId1}`)
        .expect(200);
    });

    it('DELETE /users/:id - deletar usuário', async () => {
      const tempUser = await request(app.getHttpServer())
        .post('/users')
        .send({
          name: 'Delete Test',
          email: 'delete@test.com',
        })
        .expect(201);

      await request(app.getHttpServer())
        .delete(`/users/${tempUser.body.id}`)
        .expect(200);
    });
  });
});
