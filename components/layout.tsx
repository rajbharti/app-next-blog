import dayjs from "dayjs";
import Link from "next/link";
interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="mx-auto mt-4 md:max-w-4xl">
      <header className="mb-4 flex">
        <h1 className="flex-auto">
          <Link href="/">Blog Site</Link>
        </h1>
        <div className="flex-auto self-end text-right text-gray-400">
          writing by <span className="text-blue-500">Raj Kumar Bharti</span>
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
