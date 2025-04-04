import { For, type Component } from "solid-js";
import { Card, CardTitle } from "~/components/Card";
import { featuredSeries } from "~/personal-data/featured-series";
import { createIntersectionObserver } from "~/utils/useIntersectionObserver";

const animateOnScroll = createIntersectionObserver({ threshold: 0.1 });

export const FeaturedSeriesCard: Component = () => {
  return (
    <div ref={animateOnScroll}>
      <Card class="motion-safe:animate-pop-in-up animate-duration-300 animate-fill-forwards child-animate">
        <CardTitle>Featured Series</CardTitle>

        <div class="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          <For each={featuredSeries}>
            {(series, index) => (
              <a
                class="relative group animate-fill-forwards motion-safe:animate-pop-in-up animate-duration-300 child-animate"
                href={series.link}
                style={{ "animation-delay": `${index() * 100 + 500}ms` }}
              >
                <div class="px-4 py-2 absolute h-16 flex flex-col justify-end bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent rounded group-hover:h-32 group-hover:pb-4 transition-all duration-200">
                  <div class="font-medium">{series.title}</div>
                  <div class="text-xs">{series.author}</div>
                </div>
                <img
                  src={`/featured-series/${series.id}.avif`}
                  alt=""
                  loading="lazy"
                  class="aspect-[128/188] object-cover rounded"
                />
              </a>
            )}
          </For>
        </div>
      </Card>
    </div>
  );
};
