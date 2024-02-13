import Link from 'next/link';
import ThemeChanger from './components/theme-changer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="navbar flex items-center justify-between bg-neutral text-neutral-content">
        <section className="flex-1">
          <Link href="/" className="btn btn-ghost text-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
          </Link>
        </section>

        <h3 className="absolute left-1/2 text-2xl font-bold">Electa</h3>

        <section className="flex-none gap-2">
          <ThemeChanger />

          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
          </div>
        </section>
      </header>

      <main className="w-screen-lg grid flex-grow grid-cols-3 place-items-center gap-4">
        <aside className="col-start-1 flex max-w-screen-sm flex-col divide-y rounded-xl bg-base-300 p-4 text-center text-base-content">
          <h3 className="mb-3 text-xl font-semibold">Info</h3>
          <div className="w-80 self-center">
            <p className="my-4 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              euismod egestas consequat. Nullam eget lectus non purus cursus
              ullamcorper. Nulla facilisi. Donec interdum convallis accumsan.
              Sed id tempus tellus, et dignissim elit.
            </p>

            <p className="my-4 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              euismod egestas consequat. Nullam eget lectus non purus cursus
              ullamcorper. Nulla facilisi. Donec interdum convallis accumsan.
              Sed id tempus tellus, et dignissim elit.
            </p>

            <p className="my-4 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              euismod egestas consequat. Nullam eget lectus non purus cursus
              ullamcorper. Nulla facilisi. Donec interdum convallis accumsan.
              Sed id tempus tellus, et dignissim elit.
            </p>
          </div>
        </aside>

        <section
          id="voting-cards"
          className="col-span-2 col-start-2 my-4 flex flex-col space-y-8"
        >
          <div className="card w-2/3 bg-base-300 text-base-content shadow-xl transition-all duration-200 hover:bg-base-200">
            <div className="card-body">
              <h3 className="card-title">Voting Topic 1</h3>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                animi quia quaerat nisi, maxime laudantium eum vitae non aperiam
                harum maiores reprehenderit at labore eius? Expedita
                consequuntur recusandae dolores? Sit.
              </p>

              <div className="card-actions justify-end">
                <button className="btn btn-accent btn-sm">View</button>
              </div>
            </div>
          </div>

          <div className="card w-2/3 bg-base-300 text-base-content shadow-xl transition-all duration-200 hover:bg-base-200">
            <div className="card-body">
              <h3 className="card-title">Voting Topic 2</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                animi quia quaerat nisi, maxime laudantium eum vitae non aperiam
                harum maiores reprehenderit at labore eius? Expedita
                consequuntur recusandae dolores? Sit.
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-accent btn-sm">View</button>
              </div>
            </div>
          </div>

          <div className="card w-2/3 bg-base-300 text-base-content shadow-xl transition-all duration-200 hover:bg-base-200">
            <div className="card-body">
              <h3 className="card-title">Voting Topic 3</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                animi quia quaerat nisi, maxime laudantium eum vitae non aperiam
                harum maiores reprehenderit at labore eius? Expedita
                consequuntur recusandae dolores? Sit.
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-accent btn-sm">View</button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer footer-center bg-neutral p-3 text-neutral-content">
        <aside>
          <p>© 2024 Electa</p>
        </aside>
      </footer>
    </div>
  );
}
