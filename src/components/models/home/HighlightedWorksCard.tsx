import { Card, CardTitle } from "~/components/Card";
import { createIntersectionObserver } from "~/utils/useIntersectionObserver";

// Create a directive for intersection observer
const animateOnScroll = createIntersectionObserver({ threshold: 0.1 });

export const HighlightedWorksCard = () => (
  <div ref={animateOnScroll}>
    <Card class="animate-pop-in-up animate-duration-300 child-animate animate-fill-forwards">
      <CardTitle>Highlighted Works</CardTitle>

      <div class="space-y-16 animate-pop-in-up animate-duration-300 animate-delay-500 animate-fill-forwards child-animate">
        <div class="grid md:grid-cols-2 gap-2 grid-cols-1 bg-blue/5 rounded backdrop-blur-sm p-4">
          <div>
            <h3 class="flex items-center font-bold text-lg mb-2 flex-wrap">
              <span class="mr-2">ダイススペック</span>
              <a
                class="text-blue-500 hover:underline"
                href="https://dicespec.vercel.app"
              >
                dicespec.vercel.app
              </a>
            </h3>
            <div class="space-y-2">
              <p>TRPG周りのツール集</p>
              <p>
                自作アプリの中で一番ユーザーが多いです
                <br />
                (月6000人ぐらい)
              </p>
              <p>
                Dynamic OG Image を頑張ってたり、裏の設計を頑張っていたりします
              </p>
              <p>コスト0で放置運用しているのもお気に入りです</p>
            </div>
          </div>
          <div>
            <img
              src="/works/og/dice-spec-v2.png"
              alt="ダイススペック"
              class="rounded"
            />
          </div>
        </div>
      </div>
      <a
        class="flex justify-center items-center text-sm text-gray-400 hover:text-white transition-colors duration-200 border-dashed border px-4 py-2 border-gray-500 mt-4 rounded hover:bg-white/10 font-medium animate-pop-in-up animate-duration-300 animate-delay-900 invisible animate-fill-forwards"
        href="/works"
      >
        <span>他の作品を見る</span>
        <span class="i-mdi-chevron-right size-6 shrink-0" />
      </a>
    </Card>
  </div>
);
