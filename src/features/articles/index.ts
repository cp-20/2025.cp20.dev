import { getRequestEvent } from "solid-js/web";
import { fetchNoteArticles } from "./providers/note";
import { fetchQiitaArticles } from "./providers/qiita";
import { fetchSizumeArticles } from "./providers/sizume";
import { fetchTrapArticles } from "./providers/trap";
import { fetchZennArticles } from "./providers/zenn";

export type Article = {
  source: "qiita.com" | "zenn.dev" | "trap.jp" | "note.com" | "sizu.me";
  url: string;
  title: string;
  postedAt: Date;
  ogImageUrl: string | undefined;
};

export const getArticlesAPI = async () => {
  "use server";

  const event = getRequestEvent();
  if (!event) {
    throw new Error("Invalid request");
  }

  const getEnv = (key: string): string => {
    const env = process.env[key] ??
      event.nativeEvent.context.cloudflare.env[key];
    if (!env) {
      throw new Error(`Environment variable ${key} is not set`);
    }
    return env;
  };
  const ghostApiKey = getEnv("GHOST_ADMIN_API_KEY");
  const qiitaAccessToken = getEnv("QIITA_ACCESS_TOKEN");

  return getArticles({ qiitaAccessToken, ghostApiKey });
};

type Params = {
  qiitaAccessToken: string;
  ghostApiKey: string;
};

const getArticles = async ({ qiitaAccessToken, ghostApiKey }: Params) => {
  const articles = await Promise.all([
    fetchQiitaArticles(qiitaAccessToken),
    fetchZennArticles(),
    fetchNoteArticles(),
    fetchSizumeArticles(),
    fetchTrapArticles(ghostApiKey),
  ]).then((articles) => articles.flat());

  articles.sort((a, b) => b.postedAt.getTime() - a.postedAt.getTime());

  return articles;
};
