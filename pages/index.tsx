import Head from "next/head";
import Link from "next/link";
import { getAllSortedPosts } from "@/lib/posts";
import { PostMetaData, PostSlug } from "@/types";

interface HomeProps {
  posts: (PostMetaData & PostSlug)[];
}

export default function Home({ posts }: HomeProps) {
  return (
    <>
      <Head>
        <title>Posts</title>
      </Head>
      {posts.map(({ slug, title, date }) => (
        <div key={slug}>
          <Link href={`/posts/${slug}`}>{title}</Link>
          <p>{date}</p>
        </div>
      ))}
    </>
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
