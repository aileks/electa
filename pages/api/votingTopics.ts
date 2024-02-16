import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const votingTopics = await prisma.votingTopic.findMany();
  res.json(votingTopics);
}
