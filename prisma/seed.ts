import { prisma } from '@/prisma';

async function seed() {
  await prisma.user.createMany({
    data: [
      {
        name: 'Thiago',
        email: 'teste@gmail.com',
      },
      {
        name: 'Maria',
        email: 'maria@gmail.com',
      },
      {
        name: 'João',
        email: 'joao@gmail.com',
      },
      {
        name: 'Ana',
        email: 'ana@gmail.com',
      },
    ],
  });
}

seed()
  .then(() => {
    console.log('Seed completed successfully.');
  })
  .catch((error) => {
    console.error('Error seeding data:', error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
