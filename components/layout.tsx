import Link from "next/link";
import { useRouter } from "next/router";
import dayjs from "dayjs";
import clsx from "clsx";

interface LayoutProps {
  children: React.ReactNode;
}

/* TODO: 
- add theme icon
- Syntax highlight
  - https://www.npmjs.com/package/remark  
  - https://highlightjs.org/usage/
  - https://jfelix.info/blog/how-to-make-a-static-blog-with-next-js
*/
export default function Layout({ children }: LayoutProps) {
  const router = useRouter();
  return (
    <div className="mx-4 mt-4 md:mx-6 lg:mx-auto lg:max-w-4xl">
      <header className="mb-4 text-center sm:ml-6 sm:flex sm:text-left">
        <h1 className="sm:flex-auto">
          <Link
            href="/"
            className="bg-gradient-to-r from-rose-500 to-violet-500 bg-clip-text text-transparent drop-shadow"
          >
            Blog Site
          </Link>
        </h1>
        <div className="text-pink-700 sm:mr-6 sm:flex-auto sm:self-end sm:text-right">
          writing by <span className="text-sky-500">Raj Kumar Bharti</span>
        </div>
      </header>

      <section
        className={clsx(
          "overflow-x-auto rounded-2xl border-4 border-orange-800 bg-slate-100 p-4 shadow-lg sm:p-6",
          !router.query.slug && "bg-gradient-to-br from-blue-100 to-pink-100"
        )}
      >
        {children}
      </section>

      <footer className="my-4 text-center text-sm text-white/50">
        Copyright &copy; {dayjs().format("YYYY")} Blog Site. All Rights
        Reserved.
      </footer>
    </div>
  );
}
