import Head from "next/head";
import Link from "next/link";
import dayjs from "dayjs";
import Layout from "@/components/layout";
import { getAllSortedPosts } from "@/lib/posts";
import type { PostMetaData, PostSlug } from "@/types";
interface HomeProps {
  posts: (PostMetaData & PostSlug)[];
}

export default function Home({ posts }: HomeProps) {
  return (
    <Layout>
      <Head>
        <title>Posts</title>
      </Head>

      {posts.map(({ slug, title, date }) => (
        <div
          key={slug}
          className="mb-4 border-b border-slate-300 pb-1 last:mb-0 last:border-0 last:pb-0 sm:mb-6 sm:pb-3"
        >
          <div className="text-sm text-gray-400">
            {dayjs(date).format("MMM DD, YYYY").toUpperCase()}
          </div>

          <Link
            href={`/posts/${slug}`}
            className="my-2 block text-xl text-slate-700 hover:text-pink-700 sm:text-3xl"
          >
            {title}
          </Link>
        </div>
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = getAllSortedPosts();
  return {
    props: {
      posts,
    },
  };
}
