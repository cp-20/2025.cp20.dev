import { For } from "solid-js";
import { CardLink } from "~/components/Card";
import type { Article } from "~/features/articles";
import { useArticles } from "~/features/articles/useArticles";
import { MainLayout } from "~/layouts/main";
import { formatDate } from "~/utils/date";

const groupArticlesByYear = (articles: Article[]) => {
  const grouped = new Map<number, Article[]>();

  for (const article of articles) {
    const year = new Date(article.postedAt).getFullYear();
    const group = grouped.get(year) ?? [];

    grouped.set(year, [...group, article]);
  }

  return [...grouped];
};

export default function Articles() {
  const articles = useArticles();
  const grouped = () => {
    const data = articles();
    return data ? groupArticlesByYear(data) : [];
  };

  return (
    <MainLayout>
      <CardLink href="/" class="inline-flex items-center gap-1 font-medium">
        <div class="i-mdi-chevron-left size-6 shrink-0" />
        ホームに戻る
      </CardLink>
      <h1 class="text-white text-4xl font-bold text-center mt-8">
        投稿した記事
      </h1>
      <div class="flex flex-col gap-4">
        <For each={grouped()}>
          {([year, articles], groupIndex) => (
            <>
              <div class="text-white flex items-center gap-4 font-bold text-xl text-center mt-12 mb-4">
                <hr class="flex-1" />
                <span>{year}</span>
                <hr class="flex-1" />
              </div>
              <div class="flex flex-col gap-4">
                <For each={articles}>
                  {(article, index) => (
                    <a
                      class="bg-white/10 rounded text-white backdrop-blur-sm flex hover:bg-white/20 transition-colors duration-200 flex max-sm:flex-col animate-pop-in-right animate-duration-300 animate-fill-forwards invisible"
                      href={article.url}
                      style={{
                        "animation-delay": `${
                          index() * 100 +
                          grouped()
                            .slice(0, groupIndex())
                            .reduce((acc, cur) => acc + cur[1].length, 0) *
                            100
                        }ms`,
                      }}
                    >
                      <div class="p-4 flex-1 flex flex-col gap-2">
                        <div class="flex-1">
                          <h2 class="text-lg font-bold line-clamp-2">
                            {article.title}
                          </h2>
                        </div>
                        <div class="text-sm text-gray-400 space-x-2">
                          <span>
                            {formatDate(
                              new Date(article.postedAt),
                              "YYYY-MM-DD",
                            )}
                          </span>
                          <span>/</span>
                          <span>{article.source}</span>
                        </div>
                      </div>
                      <img
                        class="max-sm:rounded-b sm:rounded-r sm:h-32 aspect-[1200/630] object-cover"
                        src={article.ogImageUrl}
                        alt=""
                      />
                    </a>
                  )}
                </For>
              </div>
            </>
          )}
        </For>
      </div>
    </MainLayout>
  );
}
