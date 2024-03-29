import { Prisma, PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';
import bcript from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  for (let i = 0; i < 50; i++) {
    const hashedPassword = await bcript.hash('password', 10);

    const user = await prisma.user.create({
      data: {
        email: faker.internet.email(),
        username: faker.internet.userName(),
        password: hashedPassword,
      } as Prisma.UserCreateInput,
    });

    await prisma.votingTopic.create({
      data: {
        title: faker.lorem.sentence(),
        description: faker.lorem.paragraphs(3),
        userId: user.id,
      },
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
