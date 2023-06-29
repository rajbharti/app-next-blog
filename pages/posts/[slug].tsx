import Head from "next/head";
import Link from "next/link";
import dayjs from "dayjs";
import clsx from "clsx";
import Layout from "@/components/layout";
import { getAllPostsSlug, getPost } from "@/lib/posts";
import type { PostMetaData, PostSlug } from "@/types";

interface PostProps extends PostMetaData {
  htmlContent: string;
}

export default function Post({ title, date, htmlContent }: PostProps) {
  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>

      <article className="mb-3 max-w-none border-b border-slate-300 pb-2 sm:mb-5 sm:pb-3">
        <div className="text-sm text-gray-400">
          {dayjs(date).format("MMM DD, YYYY").toUpperCase()}
        </div>
        <h2 className="my-2 text-2xl text-pink-700 sm:text-3xl">{title}</h2>
        <div
          dangerouslySetInnerHTML={{ __html: htmlContent }}
          className={clsx(
            "prose prose-base max-w-none prose-headings:mt-8 prose-headings:font-normal prose-headings:text-sky-700 prose-ul:my-2 prose-li:my-2",
            "md:prose-lg max-sm:prose-headings:mb-3 max-sm:prose-headings:mt-4 max-sm:prose-p:mb-4 max-sm:prose-pre:my-3 max-sm:prose-ul:my-0 max-sm:prose-li:my-0 sm:mt-8"
          )}
        />
      </article>
      <div className="text-right">
        <Link href="/" className="text-sky-600 hover:text-sky-400">
          Back
        </Link>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostsSlug();
  return {
    paths,
    fallback: false, // any paths not returned by getStaticPaths will result in a 404
  };
}

interface StaticProps {
  params: PostSlug;
}

export async function getStaticProps({ params }: StaticProps) {
  const postData = await getPost(params.slug);

  return {
    props: {
      ...postData,
    },
  };
}
