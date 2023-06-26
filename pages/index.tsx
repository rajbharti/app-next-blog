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
        <div key={slug} className="mb-6 border-b pb-3">
          <div className="text-sm text-gray-400">
            {dayjs(date).format("MMM DD, YYYY").toUpperCase()}
          </div>
          <Link href={`/posts/${slug}`}>
            <h2 className="">{title}</h2>
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
