import dayjs from "dayjs";
interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="container mx-auto mt-4">
      <header className="mb-4 flex">
        <h1>Blog Site</h1>
        <div className="text-gray-500">
          writing by <span className="text-sky-400">Raj Kumar Bharti</span>
        </div>
      </header>

      <section className="rounded-2xl border-4 border-sky-400 bg-white p-6 shadow-lg">
        {children}
      </section>

      <footer className="my-4 text-center text-sm text-slate-400">
        Copyright &copy; {dayjs().format("YYYY")} Blog Site. All Rights
        Reserved.
      </footer>
    </div>
  );
}
