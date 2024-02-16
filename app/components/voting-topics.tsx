import { PrismaClient } from '@prisma/client';
import Link from 'next/link';

const prisma = new PrismaClient();

export default async function VotingTopics() {
  const votingTopics = await prisma.votingTopic.findMany();

  return (
    <>
      {votingTopics.map((topic: any) => (
        <div
          key={topic.id}
          className="card w-2/3 bg-base-300 text-base-content shadow-xl transition-all duration-200 hover:bg-base-200"
        >
          <div className="card-body">
            <h3 className="card-title">{topic.title}</h3>
            <p>{topic.description}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-accent btn-sm">
                <Link href={`/topic/${topic.id}`}>View</Link>
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
