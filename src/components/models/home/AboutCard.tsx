import type { Component } from "solid-js";
import { Card, CardTitle } from "~/components/Card";
import { Link } from "~/components/Link";
import { createIntersectionObserver } from "~/utils/useIntersectionObserver";

// Create a directive for intersection observer
const animateOnScroll = createIntersectionObserver({ threshold: 0.1 });

export const AboutCard: Component = () => (
  <div ref={animateOnScroll}>
    <Card class="motion-safe:animate-pop-in-up animate-duration-300 child-animate animate-fill-forwards">
      <CardTitle>About Me</CardTitle>
      <div class="space-y-8">
        <div class="motion-safe:animate-pop-in-up animate-duration-300 animate-delay-500 animate-fill-forwards child-animate">
          <h3 class="flex items-center gap-2 font-bold text-lg mb-2">
            <div class="i-mdi-account-group text-teal size-6 shrink-0" />
            <span>所属</span>
          </h3>
          <ul class="pl-2">
            <li class="list-disc-inside font-medium space-x-1">
              <span>東京科学大学 学士3年</span>
              <span class="text-xs text-gray-4 text-nowrap">
                (理工学系 情報理工学院 情報工学系)
              </span>
            </li>
            <li class="list-disc-inside font-medium">
              <Link href="https://trap.jp">デジタル創作同好会traP</Link>
            </li>
            <li class="list-disc-inside font-medium">
              <Link href="https://flatt.tech/">GMO Flatt Security株式会社</Link>
            </li>
            <li class="list-disc-inside font-medium">
              <Link href="https://www.cyberagent.co.jp/careers/special/students/tech_lounge/">
                CA Tech Lounge
              </Link>
            </li>
          </ul>
        </div>
        <div class="motion-safe:animate-pop-in-up animate-duration-300 animate-delay-700 animate-fill-forwards child-animate">
          <h3 class="flex items-center gap-2 font-bold text-lg mb-2">
            <div class="i-mdi-lightbulb-alert text-indigo size-6 shrink-0" />
            <span>興味</span>
          </h3>
          <div class="space-y-2">
            <p>技術を活用して「面白い」モノを作ることが好きです</p>
            <p>ここでいう面白さは</p>
            <ul class="pl-2">
              <li class="list-disc-inside">技術的な面白さ (e.g. コンパイラ)</li>
              <li class="list-disc-inside">
                プロダクト的な面白さ (e.g. 確率計算機)
              </li>
            </ul>
            <p>の両方を含みます</p>
          </div>
        </div>
        <div class="motion-safe:animate-pop-in-up animate-duration-300 animate-delay-900 animate-fill-forwards child-animate">
          <h3 class="flex items-center gap-2 font-bold text-lg mb-2">
            <div class="i-mdi-code text-pink size-6 shrink-0" />
            <span>技術スタック</span>
          </h3>
          <div class="space-y-2">
            <p>プロダクトを表現する手段としてWebを選ぶことが多いです</p>
            <p>
              アプリなどに比べて自由度が高く、多くの人が簡単にアクセスできる環境なのが好きです
            </p>
            <p>
              特にWebフロントエンドが得意ですが、Webデザイン、Webバックエンド、インフラなども勉強中です
            </p>
          </div>
        </div>
        <div class="font-bold text-gray-4 text-sm motion-safe:animate-pop-in-up animate-duration-300 animate-delay-1100 animate-fill-forwards child-animate">
          最終更新: 2025/04/01
        </div>
      </div>
    </Card>
  </div>
);
