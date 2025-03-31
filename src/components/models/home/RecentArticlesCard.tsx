import { type Component, For, Show } from "solid-js";
import { ArticleSubCard } from "~/components/ArticleSubCard";
import { Card, CardTitle } from "~/components/Card";
import { useArticles } from "~/features/articles/useArticles";
import { createIntersectionObserver } from "~/utils/useIntersectionObserver";

// Create a directive for intersection observer
const animateOnScroll = createIntersectionObserver({ threshold: 0.1 });

export const RecentArticlesCard: Component = () => {
  const articles = useArticles();
  return (
    <div ref={animateOnScroll}>
      <Card class="animate-pop-in-up animate-duration-300 animate-fill-forwards child-animate">
        <CardTitle>Recent Articles</CardTitle>
        <div class="flex flex-col gap-2">
          <For each={articles()?.slice(0, 5)}>
            {(article, index) => (
              <ArticleSubCard
                article={article}
                class="animate-pop-in-up animate-duration-300 child-animate animate-fill-forwards"
                style={{ "animation-delay": `${index() * 100 + 500}ms` }}
              />
            )}
          </For>
        </div>
        <Show when={(articles()?.length ?? 0) > 5}>
          <a
            class="flex justify-center items-center text-sm text-gray-400 hover:text-white transition-colors duration-200 border-dashed border px-4 py-2 border-gray-500 mt-4 rounded hover:bg-white/10 font-medium animate-pop-in-up animate-duration-300 animate-delay-1400 invisible animate-fill-forwards"
            href="/articles"
          >
            <span>残りの {(articles()?.length ?? 0) - 5} 件の記事を表示</span>
            <span class="i-mdi-chevron-right size-6 shrink-0" />
          </a>
        </Show>
      </Card>
    </div>
  );
};
