import { Component, createResource, For, Show } from 'solid-js';
import { Card, CardTitle } from '~/components/Card';
import { getArticlesAPI } from '~/features/articles';
import { formatDate } from '~/utils/date';

export const RecentArticlesCard: Component = () => {
  const [articles] = createResource(getArticlesAPI);
  return (
    <Card>
      <CardTitle>Recent Articles</CardTitle>
      <div class="flex flex-col gap-2">
        <For each={articles()?.slice(0, 5)}>
          {(article) => (
            <a
              class="bg-blue/5 rounded text-white backdrop-blur-sm flex hover:bg-blue/10 transition-colors duration-200 flex max-sm:flex-col"
              href={article.url}
            >
              <div class="px-4 py-2 flex-1 flex flex-col">
                <div class="flex-1">
                  <h2 class="font-bold line-clamp-1">{article.title}</h2>
                </div>
                <div class="text-sm text-gray-400 space-x-2">
                  <span>
                    {formatDate(new Date(article.postedAt), 'YYYY-MM-DD')}
                  </span>
                  <span>/</span>
                  <span>{article.source}</span>
                </div>
              </div>
              <img
                src={article.ogImageUrl}
                alt=""
                class="aspect-[1200/630] h-16 object-cover rounded-r"
              />
            </a>
          )}
        </For>
      </div>
      <Show when={(articles()?.length ?? 0) > 5}>
        <div class="flex justify-center mt-4">
          <a
            class="text-center text-sm text-gray-400 hover:text-white transition-colors duration-200"
            href="/articles"
          >
            残りの {(articles()?.length ?? 0) - 5} 件の記事を表示
          </a>
        </div>
      </Show>
    </Card>
  );
};
