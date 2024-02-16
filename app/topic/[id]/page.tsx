import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function Page({ params }: { params: { id: string } }) {
  const topic = await prisma.votingTopic.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });
  return (
    <div>
      {topic ? (
        <>
          <h1>{topic.title}</h1>
          <p>{topic.description}</p>
        </>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
}
