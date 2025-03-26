import type { Article } from "..";
import { sign } from "../utils/jwtGhost";
import * as v from "valibot";

const getPostsResponseSchema = v.object({
  posts: v.array(
    v.object({
      title: v.string(),
      url: v.string(),
      published_at: v.string(),
      feature_image: v.nullable(v.string()),
    }),
  ),
});

const searchParams = new URLSearchParams({
  includes: "authors",
  fields: "title,url,feature_image,published_at",
  filter: "authors.name:cp20+status:published+visibility:public",
  limit: "all",
  order: "published_at desc",
});
const apiUrl = new URL("https://blog-admin.trap.jp/ghost/api/admin/posts");
apiUrl.search = searchParams.toString();

const getPosts = async (apiKey: string) => {
  const token = await sign(apiKey);

  const headers = { Authorization: `Ghost ${token}` };
  const res = await fetch(apiUrl, { headers });
  if (!res.ok) {
    throw new Error(`Failed to fetch: ${res.statusText}`);
  }
  const json = await res.json();
  const data = v.parse(getPostsResponseSchema, json);

  return data.posts;
};

export const fetchTrapArticles = async (apiKey: string) => {
  const posts = await getPosts(apiKey);

  const articles: Article[] = posts.map((post) => ({
    source: "trap.jp",
    url: post.url,
    title: post.title,
    postedAt: new Date(post.published_at),
    ogImageUrl: post.feature_image ?? undefined,
  }));

  return articles;
};
