import ThemeChanger from './components/theme-changer';

export default function Home() {
  return (
    <div>
      <header className="flex justify-between items-start">
        <section className="p-1 m-1 flex space-x-2">
          <h3 className="text-lg">Electa</h3>
        </section>

        <section className="mr-1.5 mt-1">
          <ThemeChanger />
        </section>
      </header>
    </div>
  );
}
