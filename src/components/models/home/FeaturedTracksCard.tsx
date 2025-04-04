import { For, type Component } from "solid-js";
import { Card, CardTitle } from "~/components/Card";
import { featuredTracks } from "~/personal-data/featured-tracks";
import { createIntersectionObserver } from "~/utils/useIntersectionObserver";

const animateOnScroll = createIntersectionObserver({ threshold: 0.1 });

export const FeaturedTracksCard: Component = () => {
  return (
    <div ref={animateOnScroll}>
      <Card class="motion-safe:animate-pop-in-up animate-duration-300 animate-fill-forwards child-animate">
        <CardTitle>Featured Tracks</CardTitle>
        <div class="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2">
          <For each={featuredTracks}>
            {(track, index) => (
              <a
                href={track.link}
                class="relative group animate-fill-forwards motion-safe:animate-pop-in-up animate-duration-300 child-animate"
                style={{ "animation-delay": `${index() * 50 + 500}ms` }}
              >
                <div class="px-4 py-2 absolute h-16 flex flex-col justify-end bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent rounded group-hover:h-32 group-hover:pb-4 transition-all duration-200">
                  <div class="font-medium">{track.title}</div>
                  <div class="text-xs">{track.composer}</div>
                </div>
                <img
                  src={`/featured-tracks/${track.id}.avif`}
                  alt=""
                  loading="lazy"
                  class="aspect-[1280/720] object-cover rounded"
                />
              </a>
            )}
          </For>
        </div>
      </Card>
    </div>
  );
};
