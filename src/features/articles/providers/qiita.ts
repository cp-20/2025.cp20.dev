import type { Article } from "..";
import * as v from "valibot";

const qiitaArticleSchema = v.array(
  v.object({
    title: v.string(),
    created_at: v.string(),
    url: v.string(),
  }),
);

export const ogImageFetcher = async (url: string) => {
  const response = await fetch(url);
  const text = await response.text();
  const ogImageUrl = text.match(
    /<meta property="og:image" content="(.+?)">/,
  )?.[1];
  return ogImageUrl && ogImageUrl.replaceAll("&amp;", "&");
};

const qiitaApiEndpoint =
  "https://qiita.com/api/v2/users/cp20/items?per_page=100";

// FIXME: 100件までしか取得できない
export const fetchQiitaArticles = async (
  accessToken: string | undefined,
): Promise<Article[]> => {
  const requestUrl = qiitaApiEndpoint;

  try {
    const response = await fetch(requestUrl, {
      headers: accessToken ? { Authorization: `Bearer ${accessToken}` } : {},
    });
    const jsonResponse = await response.json();
    const qiitaArticles = v.parse(qiitaArticleSchema, jsonResponse);

    const ogImageUrls = await Promise.all(
      qiitaArticles.map((a) => ogImageFetcher(a.url)),
    );

    const articles: Article[] = qiitaArticles.map((article, i) => ({
      source: "qiita.com",
      url: article.url,
      title: article.title,
      postedAt: new Date(article.created_at),
      ogImageUrl: ogImageUrls[i],
    }));

    return articles;
  } catch (err) {
    console.error(err);
    return [];
  }
};
