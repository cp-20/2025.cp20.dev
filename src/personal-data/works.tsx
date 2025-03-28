import { Link } from '~/components/Link';
import { Component } from 'solid-js';

export type Tag = '個人開発' | 'チーム開発' | 'traP' | 'SecHack365';
export type TechStackType =
  | 'design'
  | 'language'
  | 'framework'
  | 'main'
  | 'tool'
  | 'ui'
  | 'styling'
  | 'library'
  | 'state'
  | 'testing'
  | 'validate'
  | 'ORM'
  | 'database'
  | 'object-storage'
  | 'runtime'
  | 'deploy';

export type Work = {
  id: string;
  title: string;
  description: string;
  url: string;
  repositories: (string | 'private')[];
  productionTime: string;
  techStack: { label: string; type: TechStackType; new: boolean }[];
  tags: Tag[];
  comments: Component[];
  relatedArticles: string[];
};

export const works = [
  {
    id: '2025-portfolio',
    title: 'cp20.dev (2025)',
    description: 'かっこいいいサイト',
    url: 'https://cp20.dev',
    repositories: ['https://github.com/cp-20/2025.cp20.dev'],
    productionTime: '2025/03/26 ～ 2025/03/31',
    techStack: [
      { label: 'TypeScript', type: 'language', new: false },
      { label: 'Solid Start', type: 'framework', new: true },
      { label: 'SolidJS', type: 'main', new: true },
      { label: 'UnoCSS', type: 'styling', new: false },
      { label: 'Cloudflare Pages', type: 'deploy', new: false },
    ],
    tags: ['個人開発'],
    comments: [
      () => <p>2025年も作りました</p>,
      () => (
        <p>
          毎年メインのフレームワークを変えてるんですが、2025年は SolidJS
          の年になりました。
        </p>
      ),
      () => (
        <p>
          既に色々揃っているのは感じつつ、恐ろしく流行っていないので情報が圧倒的に少ないというのを感じました。
        </p>
      ),
      () => (
        <p>
          あと書き方が (React ほど)
          柔軟ではないのも気になりました。ちょっと気を付けないといけない感じ。
        </p>
      ),
    ],
    relatedArticles: [],
  },
  {
    id: 'isuc',
    title: 'isuc',
    description: 'Auto-caching database driver for ISUCON',
    url: 'https://github.com/traP-jp/isuc',
    repositories: ['https://github.com/traP-jp/isuc'],
    productionTime: '2025/01/13 ～ 2025/01/19',
    techStack: [{ label: 'Go', type: 'language', new: false }],
    tags: ['チーム開発', 'traP'],
    comments: [
      () => (
        <p>
          ISUCON関連で何か面白いツール作ろうから始まり、良い感じにキャッシュしてくれるツールをつくったら面白いかなと思って、
          <Link href="https://twitter.com/pirosiki197">@pirosiki</Link>{' '}
          と作りました。
        </p>
      ),
      () => (
        <p>
          誰にも注目されてないですが、ISUCON15でこれを使って高得点を取ることで知名度を上げることを狙っています。
        </p>
      ),
    ],
    relatedArticles: [
      'https://trap.jp/post/2491/',
      'https://trap.jp/post/2486/',
    ],
  },
  {
    id: 'foodmoji',
    title: 'Foodmoji',
    description: 'あなたのコミットメッセージを絵文字で彩る',
    url: 'https://marketplace.visualstudio.com/items?itemName=seatonjiang.gitmoji-vscode',
    repositories: ['https://github.com/cp-20/foodmoji-vscode'],
    productionTime: '2024/11/19',
    techStack: [
      { label: 'TypeScript', type: 'language', new: false },
      { label: 'VSCode Extension', type: 'main', new: true },
    ],
    tags: ['個人開発'],
    comments: [
      () => (
        <p>
          思いついてから4時間ぐらいで実装&ブログ執筆までやりました。完全にネタ拡張機能です。
        </p>
      ),
      () => (
        <p>
          でも自分でも時々使うぐらいには気に入っています。皆さんも使ってみてください。
        </p>
      ),
    ],
    relatedArticles: ['https://trap.jp/post/2403/'],
  },
  {
    id: 'trap-conference',
    title: 'traP Conference イベントページ',
    description: '2024年10月に行われたイベントの公式ページ',
    url: 'https://trap-conference.trap.show/',
    repositories: ['private'],
    productionTime: '2024/09/29 ～ 2024/09/30',
    techStack: [
      { label: 'TypeScript', type: 'language', new: false },
      { label: 'Astro', type: 'framework', new: true },
      { label: 'Tailwind CSS', type: 'styling', new: false },
      { label: 'NeoShowcase', type: 'deploy', new: false },
    ],
    tags: ['個人開発', 'traP'],
    comments: [
      () => (
        <p>
          イベントページが欲しいよねという話を耳に挟んだので、ガッと作りました
        </p>
      ),
      () => (
        <p>
          CSSアニメーションを多用しつつも、あんまりうざくない感じにまとめるのを意識しました
          (<Link href="https://x.com/yui540">@yui540</Link>
          さんリスペクトです)
        </p>
      ),
      () => (
        <p>
          適当に付けた「泡を表示しない」オプションに言及してくれる人が思ったより多くてびっくりしました
        </p>
      ),
      () => (
        <p>
          イベントの様子なんかは
          <Link href="https://trap.jp/post/2394/">開催ブログ</Link>
          を見てもらえると良いと思います
        </p>
      ),
    ],
    relatedArticles: [],
  },
  {
    id: 'wsh-scoring-tool',
    title: 'Web Speed Hackathon スコアリングツール',
    description: 'Web Speed Hackathon の非公式スコアリングツール',
    url: 'https://wsh.trap.show',
    repositories: ['https://github.com/cp-20/wsh-scoring-tool'],
    productionTime: '2024/08/19 ～ 2024/09/22',
    techStack: [
      { label: 'TypeScript', type: 'language', new: false },
      { label: 'Vue', type: 'main', new: false },
      { label: 'Hono', type: 'main', new: false },
      { label: 'Vite', type: 'tool', new: false },
      { label: 'Mantine UI', type: 'ui', new: false },
      { label: 'Zod', type: 'validate', new: false },
      { label: 'Prisma', type: 'ORM', new: false },
      { label: 'NeoShowcase', type: 'deploy', new: false },
      { label: 'Puppeteer', type: 'library', new: true },
    ],
    tags: ['個人開発'],
    comments: [
      () => (
        <p>
          部内WSHをやりたいという気持ちがあり、そのために必要だったので作りました
        </p>
      ),
      () => (
        <p>
          作ったは作ったんですが、結構安定しなくて、E2Eテストの難しさを感じるなどしました
          (特に超超重いアプリなので、難しい)
        </p>
      ),
    ],
    relatedArticles: ['https://trap.jp/post/2388/'],
  },
  {
    id: 'c-compiler',
    title: '自作Cコンパイラ',
    description: 'セルフホストできるCコンパイラ',
    url: 'https://github.com/cp-20/c-compiler',
    repositories: ['https://github.com/cp-20/c-compiler'],
    productionTime: '2024/04/01 ～ 2024/08/22',
    techStack: [
      { label: 'C', type: 'language', new: true },
      { label: 'Make', type: 'tool', new: true },
    ],
    tags: ['個人開発'],
    comments: [
      () => <p>セルフホストは人類の夢だと思っているので、やりました</p>,
      () => (
        <p>
          Cとかいう言語、メモリ管理とか文字列操作とか辛すぎてもう触りたくないです
        </p>
      ),
      () => (
        <p>
          詳しいことは
          <Link href="https://trap.jp/post/2313/">ブログ</Link>
          に全部書いたので、それを読めば全て分かります
        </p>
      ),
    ],
    relatedArticles: ['https://trap.jp/post/2313/'],
  },
  {
    id: 'traq-ing',
    title: 'traQing',
    description: 'traQの各種統計を可視化するサービス',
    url: 'https://traqing.cp20.dev',
    repositories: ['https://github.com/cp-20/traQing'],
    productionTime: '2024/05 ～ now',
    techStack: [
      { label: 'TypeScript', type: 'language', new: false },
      { label: 'React Router', type: 'framework', new: true },
      { label: 'Vite', type: 'tool', new: false },
      { label: 'React', type: 'main', new: false },
      { label: 'Mantine UI', type: 'ui', new: false },
      { label: 'Tailwind CSS', type: 'styling', new: false },
      { label: 'Zod', type: 'validate', new: false },
      { label: 'Hono', type: 'main', new: false },
      { label: 'Drizzle ORM', type: 'ORM', new: false },
      { label: 'On-premises', type: 'deploy', new: false },
    ],
    tags: ['個人開発', 'traP'],
    comments: [
      () => <p>完全traP部内向けのサービスです (部外者は使えません)</p>,
      () => (
        <p>
          traP でめちゃめちゃ使われてる traQ
          のデータがそこに放置されていて、これ使ったらぜった面白いな、と思って作りはじめました
        </p>
      ),
      () => (
        <p>
          最初から色々大きなアップデートを重ねてかなり色々な統計が取れるようになりました。色んなところで噂されるぐらいには使われてて、開発者も嬉しがっています。
        </p>
      ),
    ],
    relatedArticles: [],
  },
  {
    id: '2024-portfolio',
    title: 'cp20.dev (2024)',
    description: 'しーぴーくんのお手製サイト',
    url: 'https://2024.cp20.dev',
    repositories: ['https://github.com/cp-20/2024.cp20.dev'],
    productionTime: '2024/03/11 ～ 2024/03/31 (実際は4日ぐらい)',
    techStack: [
      { label: 'TypeScript', type: 'language', new: false },
      { label: 'Qwik City', type: 'framework', new: true },
      { label: 'Qwik', type: 'main', new: true },
      { label: 'Vite', type: 'tool', new: false },
      { label: 'Tailwind CSS', type: 'styling', new: false },
      { label: 'Cloudflare Pages', type: 'deploy', new: false },
    ],
    tags: ['個人開発'],
    comments: [
      () => (
        <p>
          なぜか
          <Link href="/works/2023-portfolio">去年のポートフォリオ</Link>
          を4/1に出していたので今年も4/1に出したいなという気持ちで開発を始めました。
        </p>
      ),
      () => (
        <p>
          Qwikずっと気になりつつも触ってなかったので、いい機会だと思って触ってみました。コンセプトがかなり洗練されていて良いなと思った一方で、やはりエコシステムとかコミュニティはReactとかVueに比べると劣るなぁという印象
          (それはそう)
        </p>
      ),
      () => (
        <p>
          たぶん来年も作り直すので、お楽しみに。来年はどんなスタックで作るんだろうね。
        </p>
      ),
    ],
    relatedArticles: [],
  },
  {
    id: 'tokyo-tech-syllabus',
    title: '東工大シラバス',
    description: '東工大の講義を爆速で検索できるサイト',
    url: 'https://tokyo-tech-syllabus.cp20.dev',
    repositories: ['https://github.com/cp-20/tokyo-tech-syllabus'],
    productionTime: '2024/03/18 ～ 2024/03/31',
    techStack: [
      { label: 'TypeScript', type: 'language', new: false },
      { label: 'Nuxt', type: 'framework', new: false },
      { label: 'Vue', type: 'main', new: false },
      { label: 'Vite', type: 'tool', new: false },
      { label: 'PrimeVue', type: 'ui', new: false },
      { label: 'Tailwind CSS', type: 'styling', new: false },
      { label: 'Zod', type: 'validate', new: false },
      { label: 'Drizzle ORM', type: 'ORM', new: false },
      { label: 'Cloudflare D1', type: 'database', new: true },
      { label: 'Cloudflare Pages', type: 'deploy', new: true },
    ],
    tags: ['個人開発', 'traP'],
    comments: [
      () => (
        <p>
          2024年度版の東工大シラバスです。
          <Link href="/works/titech-lecture-list">去年も作った</Link>
          んですが、今年はもっとパワーアップして新登場です。
        </p>
      ),
      () => (
        <p>
          去年はRDBって何？みたいな状態だったのでまともな検索速度ではなかった
          (それをKVで無理やり補っていた)
          んですが、今年はRDBを完全に理解した()のでしっかりと検索速度が出ます。偉い。
        </p>
      ),
      () => (
        <p>
          色々裏話とかは traP Techbook (
          <Link href="https://techbookfest.org/event/tbf16">技術書典16</Link>
          で発売予定) に書いたので、気になる人はチェックしてね～
        </p>
      ),
    ],
    relatedArticles: [],
  },
  {
    id: 'read-stack',
    title: 'ReadStack',
    description: '技術記事の未読消化サポートアプリ',
    url: 'https://read-stack.cp20.dev',
    repositories: [
      'https://github.com/cp-20/read-stack',
      'https://github.com/cp-20/read-stack-extension',
      'https://github.com/cp-20/flutter-test',
    ],
    productionTime: '2023/06 ～ 2024/03',
    techStack: [
      { label: 'TypeScript', type: 'language', new: false },
      { label: 'Dart', type: 'language', new: true },
      { label: 'Next.js', type: 'framework', new: false },
      { label: 'Plasmo', type: 'main', new: true },
      { label: 'React', type: 'main', new: false },
      { label: 'Hono', type: 'main', new: true },
      { label: 'Flutter', type: 'main', new: true },
      { label: 'Turborepo', type: 'tool', new: true },
      { label: 'Biome', type: 'tool', new: true },
      { label: 'Mantine UI', type: 'ui', new: false },
      { label: 'Emotion', type: 'styling', new: false },
      { label: 'Zod', type: 'validate', new: false },
      { label: 'Jotai', type: 'state', new: false },
      { label: 'Drizzle ORM', type: 'ORM', new: true },
      { label: 'Supabase', type: 'database', new: false },
      { label: 'Bun', type: 'runtime', new: true },
      { label: 'On-premises', type: 'deploy', new: false },
    ],
    tags: ['個人開発', 'SecHack365'],
    comments: [
      () => (
        <p>
          開発前から半年ぐらいゆっくり温めていたアイデアを
          <Link href="https://sechack365.nict.go.jp/">SecHack365</Link>
          に出したら採択されてしまったので開発を始めました。
        </p>
      ),
      () => (
        <p>
          自分が欲しいものを作ろうという思いで1年間開発を続けて、(成果報告会には惜しくも間に合わなかったんですが)
          なんとかしっかりと完成させることができてホッとしています。
        </p>
      ),
      () => (
        <p>
          技術的なところで言えば、新しい技術にチャレンジしまくったプロダクトだと思います。普段はWebアプリを作っているんですが、今回はそれに加えてブラウザ拡張機能とモバイルアプリを開発しました。特にモバイルアプリでiOSデバイスを持っていない中でiOSアプリをリリースまでしたの、かなり頑張ったと思います。SecHackのおかげでもあるので、かなり感謝しています。そのうちブログも書こうかと思います。
        </p>
      ),
      () => <p>そのうち記事を書きます、、たぶん、、、</p>,
    ],
    relatedArticles: [],
  },
  {
    id: 'dice-spec-v2',
    title: 'ダイススペック v2',
    description: 'TRPGのちょっとしたツールを集めたサービス',
    url: 'https://dicespec.vercel.app',
    repositories: ['https://github.com/cp-20/dice-spec-v2'],
    productionTime: '2023/09/25 ～ 2023/10/13',
    techStack: [
      { label: 'Figma', type: 'design', new: true },
      { label: 'TypeScript', type: 'language', new: false },
      { label: 'Next.js (App Router)', type: 'framework', new: true },
      { label: 'React', type: 'main', new: false },
      { label: 'shadcn/ui', type: 'ui', new: true },
      { label: 'Tailwind CSS', type: 'styling', new: false },
      { label: 'Valibot', type: 'validate', new: true },
      { label: 'Jotai', type: 'state', new: false },
      { label: 'Vitest', type: 'testing', new: true },
      { label: 'Firebase', type: 'object-storage', new: false },
      { label: 'Vercel', type: 'deploy', new: false },
    ],
    tags: ['個人開発'],
    comments: [
      () => (
        <p>
          1年越しぐらいに
          <Link href="/works/dice-spec-v1">ダイススペック</Link>
          をリニューアルしました。
        </p>
      ),
      () => (
        <p>
          最初はFigmaの練習をしようと思ってダイススペックのUIをトレースしようというところから始まったんですが、デザインを作ったらアプリも改修したくなってきてしまって、結局全部をリニューアルしてしまいました。
        </p>
      ),
      () => (
        <p>
          Next.js App
          Routerとか、shadcn/uiとか、Valibotとか、結構新しい技術を触れて満足です。前と比べて機能面で良くなっているかと言われると微妙ですが、、
        </p>
      ),
      () => (
        <p>
          ちなみにボクの作ったアプリの中では一番多くの人に使っていただいていて、月3000人ぐらいのユーザーがいます。ありがたいです。今後もゆるりとメンテしていくのでよろしくお願いします。
        </p>
      ),
    ],
    relatedArticles: [],
  },
  {
    id: 'trap-mission',
    title: 'traP Mission',
    description: 'ミッション形式でtraPに慣れよう！',
    url: 'https://mission.trap.games',
    repositories: [
      'https://github.com/traP-jp/h23s_26',
      'https://github.com/traP-jp/h23s_26-UI',
    ],
    productionTime: '2023/06/17 ～ 2023/06/18 (+ 1週間の準備期間)',
    techStack: [
      { label: 'Go', type: 'language', new: false },
      { label: 'TypeScript', type: 'language', new: false },
      { label: 'Next.js', type: 'framework', new: false },
      { label: 'React', type: 'main', new: false },
      { label: 'Mantine UI', type: 'ui', new: false },
      { label: 'Emotion', type: 'styling', new: false },
      { label: 'Zod', type: 'validate', new: false },
      { label: 'Jotai', type: 'state', new: false },
      { label: 'NeoShowcase', type: 'deploy', new: true },
    ],
    tags: ['チーム開発', 'traP'],
    comments: [
      () => <p>traPの春ハッカソンで作った作品です。</p>,
      () => (
        <p>
          traPはフロントエンドをVueで書くことが多いんですが、ボクの一存でNext.jsで書くことにしました。別に強要したとかそういう感じじゃないよ、一応。
        </p>
      ),
      () => (
        <p>
          新入生なのに慣れてるからという理由でフロントエンドのリーダーをやりました。まぁ技術的には問題ないんですが、マネジメント力がうにょーんという感じなので、今年はもっと頑張りたいところです。
        </p>
      ),
    ],
    relatedArticles: ['https://trap.jp/post/1909/'],
  },
  {
    id: '2023-portfolio',
    title: 'cp20.dev (2023)',
    description: 'しーぴーくんの生態がわかるサイト',
    url: 'https://2023.cp20.dev',
    repositories: ['https://github.com/cp-20/2023.cp20.dev'],
    productionTime: '2023/03/19 ～ 2023/03/27',
    techStack: [
      { label: 'TypeScript', type: 'language', new: false },
      { label: 'Next.js', type: 'framework', new: false },
      { label: 'React', type: 'main', new: false },
      { label: 'Mantine UI', type: 'ui', new: false },
      { label: 'Emotion', type: 'styling', new: false },
      { label: 'Zod', type: 'validate', new: false },
      { label: 'Jotai', type: 'state', new: false },
      { label: 'Vercel', type: 'deploy', new: false },
    ],
    tags: ['個人開発'],
    comments: [
      () => <p>某所に応募するために作ったのがキッカケです。</p>,
      () => (
        <p>
          でもポートフォリオ作るとなんか楽しいし、人に見せるときにとりあえずこれ見せとけばいいやってなるので、便利でしたね。
        </p>
      ),
      () => (
        <p>
          <Link href="/works/2024-portfolio">2024年になってリニューアル</Link>
          したらしいですよ。
        </p>
      ),
    ],
    relatedArticles: [],
  },
  {
    id: 'titech-lecture-list',
    title: '東工大講義リスト',
    description: '東工大の講義を検索できるサービス',
    url: 'https://titech-lecture-list.vercel.app',
    repositories: ['https://github.com/cp-20/titech-lecture-list'],
    productionTime: '	2022/04/06 ～ 2022/04/15',
    techStack: [
      { label: 'TypeScript', type: 'language', new: false },
      { label: 'Next.js', type: 'framework', new: false },
      { label: 'React', type: 'main', new: false },
      { label: 'Mantine UI', type: 'ui', new: false },
      { label: 'Emotion', type: 'styling', new: false },
      { label: 'Zod', type: 'validate', new: false },
      { label: 'Jotai', type: 'state', new: false },
      { label: 'Prisma', type: 'ORM', new: true },
      { label: 'Supabase', type: 'database', new: true },
      { label: 'Vercel KV', type: 'database', new: true },
      { label: 'Vercel', type: 'deploy', new: false },
    ],
    tags: ['個人開発'],
    comments: [
      () => (
        <p>
          公式のOCWの検索能力が低すぎる & 遅い +
          まともにフィルターできる機能はポータルにログインしないと使えないという中々な仕様だったので、自分でOCWをスクレイピングして整形してデータベース(?)化しました
        </p>
      ),
      () => (
        <p>
          <Link href="/works/tokyo-tech-syllabus">
            1年後にリメイクしたバージョン
          </Link>
          があるらしいです。
        </p>
      ),
    ],
    relatedArticles: [],
  },
  {
    id: 'no-log-chat',
    title: 'のーろぐちゃっと',
    description: 'ログが残らないチャットでみんなと会話しよう！',
    url: 'https://no-log-chat.vercel.app',
    repositories: [
      'https://github.com/cp-20/no-log-chat',
      'https://github.com/cp-20/no-log-chat-server',
    ],
    productionTime: '2023/01/05～2023/01/11',
    techStack: [
      { label: 'TypeScript', type: 'language', new: false },
      { label: 'Next.js', type: 'framework', new: false },
      { label: 'React', type: 'main', new: false },
      { label: 'Mantine UI', type: 'ui', new: false },
      { label: 'Emotion', type: 'styling', new: false },
      { label: 'Jotai', type: 'state', new: false },
      { label: 'WebSocket', type: 'library', new: false },
      { label: 'Deno', type: 'runtime', new: false },
      { label: 'Vercel', type: 'deploy', new: false },
    ],
    tags: ['個人開発'],
    comments: [
      () => (
        <p>
          受験期真っ最中でプログラミングを封印していた時期に、耐えきれなくなって「ちょっとだけ、ちょっとだけならセーフ」という気持ちで作ったアプリです。
        </p>
      ),
      () => (
        <p>
          リリース直後にほんのちょっとバズったんですが、どうしてもリアルタイム性が求められるという都合上アクティブユーザーがそれなりの数いないと成り立たないので、アプリとしては全然機能してないです。
        </p>
      ),
      () => (
        <p>
          アイデア自体は悪くないと思うので、リアルタイム性と何かをマッチさせていい感じにしてみたいという思いがあったりなかったりする。
        </p>
      ),
    ],
    relatedArticles: ['https://zenn.dev/cp20/articles/no-log-chat-app'],
  },
  {
    id: 'dice-spec-v1',
    title: 'ダイススペック (v1)',
    description: 'TRPGのちょっとしたサービスを集めたツール',
    url: 'https://v1-dicespec.vercel.app/',
    repositories: ['https://github.com/cp-20/Dice-Spec'],
    productionTime: '2022/05/26 ～ 2022/06/04 + メンテ',
    techStack: [
      { label: 'TypeScript', type: 'language', new: false },
      { label: 'Next.js', type: 'framework', new: false },
      { label: 'React', type: 'main', new: false },
      { label: 'Chakra UI', type: 'ui', new: false },
      { label: 'Tailwind CSS', type: 'styling', new: false },
      { label: 'Chart.js', type: 'library', new: false },
      { label: 'Jotai', type: 'state', new: false },
      { label: 'Jest', type: 'testing', new: false },
      { label: 'Firebase', type: 'object-storage', new: false },
      { label: 'Vercel', type: 'deploy', new: false },
    ],
    tags: ['個人開発'],
    comments: [
      () => (
        <p>
          初めての個人開発アプリです。でもこれが一番使われているアプリです。
        </p>
      ),
      () => (
        <p>
          ダイスの期待値を求められたら便利で面白いなーという発想から、1週間で作りきろう！と決めて作り始めました。結局1週間ではギリ終わらなかったんですが、求めていたものをとりあえず作れたので満足です。
        </p>
      ),
      () => (
        <p>
          気が向いたときにリファクタやらアプデやらをやってるので、気になる人は#ダイススペックとかを観測してみるといいんじゃないでしょうか。と言っても今は開発は
          <Link href="/works/dice-spec-v2">v2</Link>
          の方にシフトしてますが。
        </p>
      ),
      () => (
        <p>
          ダイスの期待値を求めるアルゴリズムは
          <Link href="https://qiita.com/cp20/items/89aa69111d631e8ac00f">
            リリース記事のpart3
          </Link>
          で解説しているのでそちらもぜひ
        </p>
      ),
    ],
    relatedArticles: [
      'https://qiita.com/cp20/items/b475b6f6757be814846f',
      'https://qiita.com/cp20/items/577665b3cc0da857e961',
      'https://qiita.com/cp20/items/89aa69111d631e8ac00f',
    ],
  },
] satisfies Work[];
