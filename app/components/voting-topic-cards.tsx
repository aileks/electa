import { PrismaClient } from '@prisma/client';
import Link from 'next/link';

const prisma = new PrismaClient();

export default async function VotingTopicCards() {
  const votingTopics = await prisma.votingTopic.findMany();

  return (
    <>
      {votingTopics.map((topic: any) => (
        <div
          key={topic.id}
          className="card w-full bg-base-300 text-base-content shadow-lg transition-all duration-200 hover:bg-base-200 md:w-2/3"
        >
          <div className="card-body space-y-2">
            <h3 className="card-title border-b border-neutral-400 pb-1">
              {topic.title}
            </h3>

            <p className="line-clamp-2">{topic.description}</p>

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
