import dayjs from "dayjs";
import Link from "next/link";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="mx-auto mt-4 md:max-w-4xl">
      <header className="mb-4 flex">
        <h1 className="flex-auto drop-shadow-lg ">
          <Link href="/" className="">
            Blog Site
          </Link>
        </h1>
        <div className="mr-6 flex-auto self-end text-right text-pink-700">
          writing by <span className="text-sky-500">Raj Kumar Bharti</span>
        </div>
      </header>

      <section className="overflow-x-auto rounded-2xl border-4 border-orange-800 bg-slate-100 bg-gradient-to-b from-white to-slate-100 p-6 shadow-lg">
        {children}
      </section>

      <footer className="my-4 text-center text-sm text-white/50">
        Copyright &copy; {dayjs().format("YYYY")} Blog Site. All Rights
        Reserved.
      </footer>
    </div>
  );
}
