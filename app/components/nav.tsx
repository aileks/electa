import Link from 'next/link';
import ThemeChanger from './theme-changer';

export default function Nav() {
  return (
    <>
      <header className="navbar flex items-center justify-between bg-neutral text-neutral-content">
        <section className="flex-1">
          <Link href="/" className="btn btn-ghost text-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
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
    </>
  );
}
