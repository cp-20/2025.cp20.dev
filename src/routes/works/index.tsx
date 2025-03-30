import { For } from "solid-js";
import { CardLink } from "~/components/Card";
import { WorkCard } from "~/components/models/works/WorkCard";
import { MainLayout } from "~/layouts/main";
import { works } from "~/personal-data/works";

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
        <For each={works}>{(work) => <WorkCard work={work} transition />}</For>
      </div>
    </MainLayout>
  );
}
