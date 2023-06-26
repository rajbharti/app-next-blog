import Head from "next/head";
import Link from "next/link";
import dayjs from "dayjs";
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
      <article className="mb-4">
        <div className="text-sm text-gray-400">
          {dayjs(date).format("MMM DD, YYYY").toUpperCase()}
        </div>
        <h2 className="mb-4">{title}</h2>
        <div
          dangerouslySetInnerHTML={{ __html: htmlContent }}
          className="text-lg"
        />
      </article>
      <Link href="/">Back</Link>
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
