import { faker } from "@faker-js/faker";
import { Prisma, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const main = () => {
  const users = [];

  for (let i = 0; i < 10; i++) {
    const user = {
      username: faker.internet.userName(),
      image: faker.image.avatar(),
      name: faker.person.firstName(),
      bio: faker.lorem.paragraph(),
      link: faker.internet.url(),
      email: faker.internet.email(),
    } satisfies Prisma.UserCreateInput;
    users.push(user);
  }
};
