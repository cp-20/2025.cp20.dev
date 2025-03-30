import { createAsync, query } from "@solidjs/router";
import { type Article, getArticlesAPI } from "~/features/articles";

const getArticles: () => Promise<Article[]> = query(getArticlesAPI, "articles");

export const useArticles = () => {
  const articles = createAsync(getArticles);
  return articles;
};
