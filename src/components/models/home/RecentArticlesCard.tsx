import { type Component, createResource, For, Show } from 'solid-js';
import { ArticleSubCard } from '~/components/ArticleSubCard';
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
          {(article) => <ArticleSubCard article={article} />}
        </For>
      </div>
      <Show when={(articles()?.length ?? 0) > 5}>
        <a
          class="flex justify-center items-center text-sm text-gray-400 hover:text-white transition-colors duration-200 border-dashed border px-4 py-2 border-gray-500 mt-4 rounded hover:bg-white/10 font-medium"
          href="/articles"
        >
          <span>残りの {(articles()?.length ?? 0) - 5} 件の記事を表示</span>
          <span class="i-mdi-chevron-right size-6 shrink-0" />
        </a>
      </Show>
    </Card>
  );
};
