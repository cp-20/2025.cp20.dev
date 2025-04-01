import avatarImage from "~/assets/avatar.avif";
import { useParams } from "@solidjs/router";
import { For, Show } from "solid-js";
import { Card, CardLink } from "~/components/Card";
import { MainLayout } from "~/layouts/main";
import { HttpStatusCode } from "@solidjs/start";
import { works } from "~/personal-data/works";
import { Link } from "~/components/Link";
import { ArticleSubCard } from "~/components/ArticleSubCard";
import { WorkCard } from "~/components/models/works/WorkCard";
import { useArticles } from "~/features/articles/useArticles";
import { Title } from "@solidjs/meta";

const getRepoNameFromUrl = (url: string) => {
  const match = url.match(/github\.com\/([^/]+\/[^/]+)/);
  if (match) {
    return match[1];
  }
  return null;
};

export default function Work() {
  const params = useParams();
  const workId = () => params.id;
  const workIndex = () => works.findIndex((work) => work.id === workId());
  const work = () => works[workIndex()];
  const prevWork = () =>
    workIndex() > 0 ? works[workIndex() - 1] : works[works.length - 1];
  const nextWork = () =>
    workIndex() < works.length - 1 ? works[workIndex() + 1] : works[0];
  const articles = useArticles();

  return (
    <>
      <MainLayout>
        <Title>
          {work()
            ? `${work()!.title} | cp20.dev`
            : "作品が見つかりません | cp20.dev"}
        </Title>
        <Show when={!work()}>
          <HttpStatusCode code={404} />
          <div class="text-center flex flex-col gap-4 justify-center items-center">
            <div class="i-mdi-search text-9xl text-white shrink-0" />
            <h1 class="text-4xl font-bold text-white">Not Found</h1>
            <p class="text-gray-400">
              申し訳ありませんが、その作品は見つかりませんでした。
            </p>
            <CardLink href="/works">作品一覧に戻る</CardLink>
          </div>
        </Show>
        <Show when={work()}>
          <CardLink
            href="/works"
            class="inline-flex items-center gap-1 font-medium"
          >
            <div class="i-mdi-chevron-left size-6 shrink-0" />
            一覧に戻る
          </CardLink>
          <div class="space-y-4">
            <h1 class="text-white text-4xl font-bold text-center">
              {work()!.title}
            </h1>
            <div class="text-gray-400 text-center">{work()!.description}</div>
          </div>
          <div class="flex justify-center">
            <img
              src={`/works/og/${workId()}.avif`}
              alt=""
              class="aspect-[1200/630] object-cover max-w-xl rounded w-full"
              style={{ "view-transition-name": `img-${workId()}` }}
              loading="lazy"
            />
          </div>
          <Card class="md:grid md:grid-cols-2 max-md:flex max-md:flex-col gap-4">
            <div class="flex gap-2">
              <div
                class="i-mdi-link-variant text-white size-6 shrink-0"
                title="作品リンク"
              />
              <Link href={work()!.url}>{work()!.url}</Link>
            </div>
            <div class="flex gap-2">
              <div
                class="i-mdi-tag-text size-6 text-white shrink-0"
                title="作品タグ"
              />
              <div class="flex gap-2 flex-wrap">
                <For each={work()!.tags}>
                  {(tag) => (
                    <span class="h-fit bg-white/10 text-white rounded-lg px-2 py-1 text-sm font-medium">
                      {tag}
                    </span>
                  )}
                </For>
              </div>
            </div>
            <div class="flex gap-2">
              <div
                class="i-mdi-calendar text-white size-6 shrink-0"
                title="開発期間"
              />
              <div class="text-gray-200 font-medium">
                {work()!.productionTime}
              </div>
            </div>
            <div class="flex gap-2">
              <div
                class="i-mdi-github text-white size-6 shrink-0"
                title="リポジトリ"
              />
              <div class="flex gap-2 flex-wrap">
                <For each={work()!.repositories}>
                  {(repo) => (
                    <>
                      <Show when={repo !== "private"}>
                        <a
                          href={repo}
                          class="bg-white/10 text-white rounded-lg px-2 py-1 text-sm font-medium hover:bg-white/20 transition-colors duration-200 h-fit"
                        >
                          {getRepoNameFromUrl(repo)}
                        </a>
                      </Show>
                      <Show when={repo === "private"}>
                        <span class="text-white text-sm font-medium">
                          非公開
                        </span>
                      </Show>
                    </>
                  )}
                </For>
              </div>
            </div>
            <div class="flex gap-2 col-span-2">
              <div
                class="i-mdi-tools text-white size-6 shrink-0"
                title="技術スタック"
              />
              <div class="flex gap-2 flex-wrap">
                <For each={work()!.techStack}>
                  {(tech) => (
                    <span class="bg-white/10 text-white rounded-lg px-2 py-1 text-sm font-medium relative">
                      {tech.label}
                      <Show when={tech.new}>
                        <span class="absolute -top-1 -right-1 size-2 bg-blue-500 rounded-full" />
                      </Show>
                    </span>
                  )}
                </For>
              </div>
            </div>
          </Card>
          <Card class="space-y-4">
            <For each={work()!.comments}>
              {(Comment) => (
                <div class="flex gap-5">
                  <img
                    class="size-8 rounded-full mt-2"
                    src={avatarImage}
                    alt="cp20"
                    width={32}
                    height={32}
                    loading="lazy"
                  />
                  <div class="bg-blue/10 px-4 py-2 rounded-lg relative">
                    <div
                      class="absolute top-4 left-0 -translate-x-full size-4 bg-blue/10"
                      style={{
                        "clip-path": "polygon(33% 50%,100% 0,100% 100%)",
                      }}
                    />
                    <Comment />
                  </div>
                </div>
              )}
            </For>
          </Card>
          <Show when={work()!.relatedArticles.length > 0}>
            <Card>
              <h2 class="mb-4 flex gap-2 items-center">
                <div class="i-mdi-paper-search size-6 text-white" />
                <span>関連記事</span>
              </h2>
              <Show when={articles()}>
                <div class="flex gap-2 flex-col">
                  <For each={work()!.relatedArticles}>
                    {(articleUrl) => {
                      const article = articles()?.find(
                        (article) => article.url === articleUrl,
                      );
                      return (
                        <Show when={article}>
                          <ArticleSubCard article={article!} />
                        </Show>
                      );
                    }}
                  </For>
                </div>
              </Show>
            </Card>
          </Show>
          <div class="grid grid-cols-2 gap-4">
            <div class="flex gap-2 items-center text-white font-bold mb-4">
              <div class="i-mdi-chevron-left size-6" />
              <span>前の作品</span>
            </div>
            <div class="flex gap-2 items-center text-white font-bold mb-4 justify-end">
              <span>次の作品</span>
              <div class="i-mdi-chevron-right size-6" />
            </div>
            <WorkCard work={prevWork()} />
            <WorkCard work={nextWork()} />
          </div>
        </Show>
      </MainLayout>
    </>
  );
}
