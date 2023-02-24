import Layout from "@/components/layout";
import { getAllPostsSlug, getPost } from "@/lib/posts";
import Head from "next/head";
import Link from "next/link";

export default function Post({ title, date, htmlContent }) {
  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <article>
        <h1>{title}</h1>
        <h6>{date}</h6>
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
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

export async function getStaticProps({ params }) {
  const postData = await getPost(params.slug);

  return {
    props: {
      ...postData,
    },
  };
}
