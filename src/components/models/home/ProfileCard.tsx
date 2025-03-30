import type { Component } from "solid-js";
import avatar from "~/assets/avatar.png";
import { Card } from "~/components/Card";
import { DiscordIcon } from "~/components/icons/discord";
import { Mixi2Icon } from "~/components/icons/mixi2";
import { QiitaIcon } from "~/components/icons/qiita";
import { ZennIcon } from "~/components/icons/zenn";
import { Link } from "~/components/Link";
import { SocialCard } from "~/components/SocialCard";

export const ProfileCard: Component = () => (
  <Card class="grid p-8 grid-cols-1 md:grid-cols-2 gap-8">
    <div class="space-y-4">
      <div class="space-y-2">
        <div class="text-4xl font-bold max-md:text-center">しーぴー</div>
        <div class="text-gray-4 font-semibold max-md:text-center">
          ゆるふわプログラマー志望
        </div>
      </div>
      <div class="space-y-2">
        <SocialCard
          href="https://twitter.com/__cp20__"
          mediaLabel="Twitter"
          idLabel="__cp20__"
          icon={<div class="i-mdi-twitter text-[#1da1f2] size-8 shrink-0" />}
          class="bg-[#1da1f2]/20 hover:bg-[#1da1f2]/30 text-gray-2 transition-colors duration-100"
        />
        <SocialCard
          href="https://mixi.social/@cp20"
          mediaLabel="mixi2"
          idLabel="cp20"
          icon={<Mixi2Icon width={32} height={32} />}
          class="bg-[#ffae33]/20 hover:bg-[#ffae33]/30 text-gray-2 transition-colors duration-100"
        />
        <SocialCard
          href="https://github.com/cp-20"
          mediaLabel="GitHub"
          idLabel="cp-20"
          icon={<div class="i-mdi-github text-white size-8 shrink-0" />}
          class="bg-black/30 hover:bg-black/50 text-gray-2 transition-colors duration-100"
        />
        <div class="flex gap-2">
          <SocialCard
            href="https://discord.gg/YQ7negGTUK"
            mediaLabel="Discord"
            icon={<DiscordIcon width={24} height={24} class="text-white" />}
            class="bg-[#5865f2]/30 hover:bg-[#5865f2]/40 text-gray-2 flex-1 transition-colors duration-100"
          />
          <SocialCard
            href="https://zenn.dev/cp20"
            mediaLabel="Zenn"
            icon={<ZennIcon width={24} height={24} class="text-[#3ea8ff]" />}
            class="bg-[#3ea8ff]/20 hover:bg-[#3ea8ff]/30 text-gray-2 flex-1 transition-colors duration-100"
          />
          <SocialCard
            href="https://qiita.com/cp20"
            mediaLabel="Qiita"
            icon={<QiitaIcon width={24} height={24} class="text-[#55c500]" />}
            class="bg-[#55c500]/20 hover:bg-[#55c500]/30 text-gray-2 flex-1 transition-colors duration-100"
          />
        </div>
      </div>
    </div>
    <div class="flex flex-col gap-2 justify-center items-center">
      <img src={avatar} alt="" class="rounded-full" width={256} height={256} />
      <div class="text-xs">
        icon by <Link href="https://twitter.com/sora_douhu">@sora_douhu</Link>
      </div>
    </div>
  </Card>
);
