import { Icon } from '@iconify-icon/solid';
import { Component } from 'solid-js';
import { Card } from '~/components/Card';
import { Link } from '~/components/Link';

export const AboutCard: Component = () => (
  <Card>
    <h2 class="text-3xl font-bold mb-8">
      <div class="border-b border-b-dotted border-b-6 pb-2 w-fit">About Me</div>
    </h2>
    <div class="space-y-8">
      <div>
        <h3 class="flex items-center gap-2 font-bold text-lg mb-2">
          <Icon
            icon="mdi:account-group"
            width={24}
            height={24}
            class="text-teal"
          />
          <span>所属</span>
        </h3>
        <ul class="pl-2">
          <li class="list-disc-inside font-medium space-x-1">
            <span>東京科学大学 学士3年</span>
            <span class="text-xs text-gray-4">
              (理工学系 情報理工学院 情報工学系)
            </span>
          </li>
          <li class="list-disc-inside font-medium">
            <Link href="https://trap.jp">デジタル創作同好会traP</Link>
          </li>
          <li class="list-disc-inside font-medium">
            <Link href="https://www.cyberagent.co.jp/careers/special/students/tech_lounge/">
              CA Tech Lounge
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h3 class="flex items-center gap-2 font-bold text-lg mb-2">
          <Icon
            icon="mdi:lightbulb-alert"
            width={24}
            height={24}
            class="text-indigo"
          />
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
      <div>
        <h3 class="flex items-center gap-2 font-bold text-lg mb-2">
          <Icon icon="mdi:code" width={24} height={24} class="text-pink" />
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
      <div class="font-bold text-gray-4 text-sm">最終更新: 2024/04/01</div>
    </div>
  </Card>
);
