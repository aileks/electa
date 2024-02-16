import VotingTopics from './components/voting-topics';

export default function Home() {
  return (
    <>
      <main className="w-screen-lg grid flex-grow grid-cols-3 place-items-center gap-4">
        <aside className="col-start-1 my-6 flex max-w-screen-sm flex-col divide-y self-start rounded-xl bg-base-300 p-4 text-center text-base-content shadow-lg">
          <h3 className="mb-3 text-xl font-semibold">Info</h3>

          <div className="w-80 self-center">
            <p className="my-4 text-lg">
              Vote on your favorite bullshit. Or don&apos;t. I don&apos;t really
              care.
            </p>
          </div>
        </aside>

        <section
          id="voting-cards"
          className="col-span-2 col-start-2 my-4 flex flex-col space-y-8"
        >
          <h1 className="text-3xl font-bold underline">Current Topics</h1>

          <VotingTopics />
        </section>
      </main>

      <footer className="footer footer-center bg-neutral p-3 text-neutral-content">
        <div>© 2024 Electa</div>
      </footer>
    </>
  );
}
