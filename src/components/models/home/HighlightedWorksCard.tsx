import { Card, CardTitle } from '~/components/Card';
import dicespecOgImage from '~/assets/works/og/dice-spec-v2.png';

export const HighlightedWorksCard = () => (
  <Card>
    <CardTitle>Highlighted Works</CardTitle>

    <div class="space-y-16">
      <div class="grid md:grid-cols-2 gap-2 grid-cols-1">
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
            <p>TRPG周りのツール集みたいなアプリです</p>
            <p>
              自作アプリの中で一番ユーザーが多いです
              <br />
              (月6000人ぐらいが使ってくれてる)
            </p>
            <p>
              実は Dynamic OG Image
              を頑張ってたり、裏の設計を頑張っていたりします
            </p>
            <p>Vercel に載せてコスト0で運用できてるので放置運用です</p>
          </div>
        </div>
        <div>
          <img src={dicespecOgImage} alt="ダイススペック" class="rounded" />
        </div>
      </div>
    </div>
  </Card>
);
