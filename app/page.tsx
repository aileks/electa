import VotingTopicCards from './components/voting-topic-cards';

export default function Home() {
  return (
    <>
      <main className="md:w-screen-lg grid w-full flex-grow grid-cols-1 place-items-center gap-4 md:grid-cols-3">
        <aside className="mb-4 mt-8 flex flex-col self-start rounded-xl bg-base-300 p-4 text-center text-base-content shadow-lg md:col-start-1">
          <h3 className="border-b border-neutral-400 text-xl font-semibold ">
            Info
          </h3>

          <div className="mt-2 w-80 self-center">
            <p className="text-lg">
              Vote on your favorite bullshit. Or don&apos;t. I don&apos;t really
              care.
            </p>
          </div>
        </aside>

        <section
          id="voting-cards"
          className="mx-2 mt-8 flex flex-col space-y-8 md:col-span-2 md:col-start-2"
        >
          <h1 className="text-center text-3xl font-bold underline md:text-left">
            Current Topics
          </h1>

          <VotingTopicCards />
        </section>
      </main>

      <footer className="footer footer-center bg-neutral p-3 text-neutral-content">
        <div>© 2024 Electa</div>
      </footer>
    </>
  );
}
