import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function Page({ params }: { params: { id: string } }) {
  const topic = await prisma.votingTopic.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });
  return (
    <div className="w-1/2">
      <h3 className="mb-2 ml-2 text-2xl font-bold">{topic.title}</h3>
      <div className="card bg-base-300 text-base-content">
        <p className="card-body text-lg">{topic.description}</p>
      </div>
    </div>
  );
}
