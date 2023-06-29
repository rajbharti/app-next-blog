import dayjs from "dayjs";
import Link from "next/link";

interface LayoutProps {
  children: React.ReactNode;
}

/* TODO: 
- based on slug change content background
*/
export default function Layout({ children }: LayoutProps) {
  return (
    <div className="mx-4 mt-4 md:mx-6 lg:mx-auto lg:max-w-4xl">
      <header className="mb-4 text-center sm:ml-6 sm:flex sm:text-left">
        <h1 className="drop-shadow-lg sm:flex-auto ">
          <Link href="/" className="">
            Blog Site
          </Link>
        </h1>
        <div className="text-pink-700 sm:mr-6 sm:flex-auto sm:self-end sm:text-right">
          writing by <span className="text-sky-500">Raj Kumar Bharti</span>
        </div>
      </header>

      <section className="overflow-x-auto rounded-2xl border-4 border-orange-800 bg-slate-100 bg-gradient-to-b from-white to-slate-100 p-4 shadow-lg sm:p-6">
        {children}
      </section>

      <footer className="my-4 text-center text-sm text-white/50">
        Copyright &copy; {dayjs().format("YYYY")} Blog Site. All Rights
        Reserved.
      </footer>
    </div>
  );
}
