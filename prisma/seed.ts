import { PrismaClient, UserRole } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Iniciando seed do banco de dados...\n');

  // Criar usuário ADMIN
  const adminPassword = await bcrypt.hash('admin123', 10);

  const admin = await prisma.user.upsert({
    where: { email: 'admin@amigooculto.com' },
    update: {},
    create: {
      name: 'Admin Principal',
      email: 'admin@amigooculto.com',
      password: adminPassword,
      role: UserRole.ADMIN,
      phone: '11999999999',
    },
  });

  console.log('✅ Admin criado:', {
    id: admin.id,
    name: admin.name,
    email: admin.email,
    role: admin.role,
  });

  // Criar alguns usuários de teste
  const userPassword = await bcrypt.hash('user123', 10);

  const users = await Promise.all([
    prisma.user.upsert({
      where: { email: 'joao@email.com' },
      update: {},
      create: {
        name: 'João Silva',
        email: 'joao@email.com',
        password: userPassword,
        role: UserRole.USER,
        phone: '11988888888',
      },
    }),
    prisma.user.upsert({
      where: { email: 'maria@email.com' },
      update: {},
      create: {
        name: 'Maria Santos',
        email: 'maria@email.com',
        password: userPassword,
        role: UserRole.USER,
        phone: '11977777777',
      },
    }),
  ]);

  console.log(`✅ ${users.length} usuários de teste criados\n`);

  // Criar alguns grupos de exemplo
  const group1 = await prisma.group.upsert({
    where: { inviteCode: 'NATAL2024' },
    update: {},
    create: {
      name: 'Amigo Secreto Natal 2024',
      description: 'Confraternização de fim de ano da família',
      drawDate: new Date('2024-12-20'),
      minValue: 50,
      maxValue: 100,
      inviteCode: 'NATAL2024',
      ownerId: users[0].id,
    },
  });

  const group2 = await prisma.group.upsert({
    where: { inviteCode: 'TRABALHO2024' },
    update: {},
    create: {
      name: 'Amigo Secreto do Trabalho',
      description: 'Equipe de desenvolvimento',
      drawDate: new Date('2024-12-15'),
      minValue: 30,
      maxValue: 80,
      inviteCode: 'TRABALHO2024',
      ownerId: users[1].id,
    },
  });

  console.log('✅ 2 grupos de exemplo criados\n');

  // Criar participantes
  await prisma.participant.createMany({
    data: [
      {
        userId: users[0].id,
        groupId: group1.id,
        status: 'APPROVED',
        approvedAt: new Date(),
      },
      {
        userId: users[1].id,
        groupId: group1.id,
        status: 'APPROVED',
        approvedAt: new Date(),
      },
      {
        userId: users[0].id,
        groupId: group2.id,
        status: 'PENDING',
      },
    ],
    skipDuplicates: true,
  });

  console.log('✅ Participantes criados\n');

  // Criar alguns activity logs de exemplo
  await prisma.activityLog.createMany({
    data: [
      {
        type: 'user',
        message: `Novo usuário cadastrado: ${users[0].name}`,
        userId: users[0].id,
        createdAt: new Date(Date.now() - 1000 * 60 * 60), // 1 hora atrás
      },
      {
        type: 'user',
        message: `Novo usuário cadastrado: ${users[1].name}`,
        userId: users[1].id,
        createdAt: new Date(Date.now() - 1000 * 60 * 30), // 30 min atrás
      },
      {
        type: 'group',
        message: `Grupo "${group1.name}" criado`,
        userId: users[0].id,
        createdAt: new Date(Date.now() - 1000 * 60 * 15), // 15 min atrás
      },
      {
        type: 'group',
        message: `Grupo "${group2.name}" criado`,
        userId: users[1].id,
        createdAt: new Date(Date.now() - 1000 * 60 * 5), // 5 min atrás
      },
      {
        type: 'participant',
        message: `Novo participante aprovado no grupo "${group1.name}"`,
        userId: users[1].id,
        createdAt: new Date(Date.now() - 1000 * 60 * 2), // 2 min atrás
      },
    ],
  });

  console.log('✅ Activity logs de exemplo criados\n');

  console.log('🎉 Seed concluído com sucesso!\n');
  console.log('📝 Credenciais para login:');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('👨‍💼 ADMIN:');
  console.log('   Email: admin@amigooculto.com');
  console.log('   Senha: admin123');
  console.log('');
  console.log('👤 USUÁRIO:');
  console.log('   Email: joao@email.com');
  console.log('   Senha: user123');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
}

main()
  .catch((e) => {
    console.error('❌ Erro durante seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
