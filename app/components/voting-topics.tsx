'use client';
import { useEffect, useState } from 'react';

type VotingTopic = {
  id: number;
  title: string;
  description: string;
  userId: number;
};

export default function VotingTopics() {
  const [votingTopics, setVotingTopics] = useState<VotingTopic[]>([]);

  useEffect(() => {
    async function fetchVotingTopics() {
      const res = await fetch('/api/votingTopics');

      if (!res.ok) {
        console.error('Server error', res.status, res.statusText);
        return;
      }

      const topics = await res.json();
      setVotingTopics(topics);
    }

    fetchVotingTopics();
  }, []);

  return (
    <>
      {votingTopics.map((topic) => (
        <div
          key={topic.id}
          className="card w-2/3 bg-base-300 text-base-content shadow-xl transition-all duration-200 hover:bg-base-200"
        >
          <div className="card-body">
            <h3 className="card-title">{topic.title}</h3>
            <p>{topic.description}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-accent btn-sm">View</button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
