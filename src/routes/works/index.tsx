import { For } from 'solid-js';
import { CardLink } from '~/components/Card';
import { MainLayout } from '~/layouts/main';
import { works } from '~/personal-data/works';

export default function Works() {
  return (
    <MainLayout>
      <CardLink href="/" class="inline-flex items-center gap-1 font-medium">
        <div class="i-mdi-chevron-left size-6 shrink-0" />
        ホームに戻る
      </CardLink>
      <h1 class="text-white text-4xl font-bold text-center mt-8">
        創ったものたち
      </h1>
      <div class="grid grid-cols-2 gap-4">
        <For each={works}>
          {(work) => (
            <a
              href={`/works/${work.id}`}
              class="bg-white/10 rounded text-white backdrop-blur-sm flex hover:bg-white/20 transition-colors duration-200 flex flex-col group"
            >
              <div class="flex-1 flex flex-col p-4">
                <h2 class="text-white text-lg font-bold">{work.title}</h2>
                <p class="text-gray-400">{work.description}</p>
              </div>
              <div class="aspect-[1200/630] bg-white rounded-b">
                <img
                  src={`/works/og/${work.id}.png`}
                  alt=""
                  class="aspect-[1200/630] object-cover group-hover:opacity-80 duration-200 rounded-b"
                  style={{ 'view-transition-name': `img-${work.id}` }}
                />
              </div>
            </a>
          )}
        </For>
      </div>
    </MainLayout>
  );
}
