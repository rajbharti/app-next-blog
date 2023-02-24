import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDir = path.join(process.cwd(), "posts");

export function getAllSortedPosts() {
  return fs
    .readdirSync(postsDir)
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const fullPath = path.join(postsDir, file);
      const fileContent = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContent);

      return {
        slug: file.replace(".md", ""),
        ...data,
      };
    })
    .sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    });
}

export function getAllPostsSlug() {
  return fs
    .readdirSync(postsDir)
    .filter((file) => file.endsWith(".md"))
    .map((file) => ({
      params: {
        slug: file.replace(".md", ""),
      },
    }));
}

export async function getPost(slug) {
  const fullPath = path.join(postsDir, `${slug}.md`);
  const fileContent = fs.readFileSync(fullPath, "utf-8");
  const { data, content } = matter(fileContent);
  const processedContent = await remark().use(html).process(content);
  const htmlContent = processedContent.toString();

  return {
    ...data,
    htmlContent,
  };
}
