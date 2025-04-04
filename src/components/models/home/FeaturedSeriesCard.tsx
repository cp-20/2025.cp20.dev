import { For, type Component } from "solid-js";
import { Card, CardTitle } from "~/components/Card";
import { createIntersectionObserver } from "~/utils/useIntersectionObserver";

const animateOnScroll = createIntersectionObserver({ threshold: 0.1 });

const featuredSeries = [
  {
    id: "houkago-kitaku-biyori",
    title: "放課後帰宅びより",
    author: "松田舞",
    link: "https://comic-action.com/episode/4856001361584756651",
  },
  {
    id: "kage-no-jitsuryokusha-ni-naritakute",
    title: "陰の実力者になりたくて！",
    author: "逢沢大介",
    link: "https://comic-walker.com/detail/KC_003912_S",
  },
  {
    id: "j-m",
    title: "Ｊ⇔Ｍジェイエム",
    author: "大武政夫",
    link: "https://comic-walker.com/detail/KC_000789_S",
  },
  {
    id: "koi-bumi-to-13sai-no-actress",
    title: "恋文と13歳の女優（アクトレス）",
    author: "じゃが",
    link: "https://comic-fuz.com/manga/3149",
  },
  {
    id: "bad-girl",
    title: "ばっどがーる",
    author: "肉丸",
    link: "https://comic-fuz.com/manga/2664",
  },
  {
    id: "mattaku-saikin-no-tantei-to-kitara",
    title: "まったく最近の探偵ときたら",
    author: "五十嵐正邦",
    link: "https://comic-walker.com/detail/KC_001464_S",
  },
];

export const FeaturedSeriesCard: Component = () => {
  return (
    <div ref={animateOnScroll}>
      <Card class="motion-safe:animate-pop-in-up animate-duration-300 animate-fill-forwards child-animate">
        <CardTitle>Featured Series</CardTitle>

        <div class="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          <For each={featuredSeries}>
            {(series) => (
              <a class="relative group" href={series.link}>
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
