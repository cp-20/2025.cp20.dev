import { Icon } from '@iconify-icon/solid';
import { Component } from 'solid-js';
import avatar from '~/assets/avatar.png';
import { Card } from '~/components/Card';
import { Mixi2Icon } from '~/components/icons/mixi2';
import { SocialCard } from '~/components/SocialCard';

export const ProfileCard: Component = () => (
  <Card class="grid grid-cols-2 p-8">
    <div class="space-y-4">
      <div class="space-y-2">
        <div class="text-4xl font-bold">しーぴー</div>
        <div class="text-gray-4 font-semibold">ゆるふわプログラマー志望</div>
      </div>
      <div class="space-y-2">
        <SocialCard
          href="https://twitter.com/__cp20__"
          mediaLabel="Twitter"
          idLabel="__cp20__"
          icon={
            <Icon
              icon="mdi:twitter"
              width={32}
              height={32}
              class="text-[#1da1f2]"
            />
          }
          class="bg-[#1da1f2]/20 hover:bg-[#1da1f2]/30 text-gray-2"
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
          icon={<Icon icon="mdi:github" width={32} height={32} />}
          class="bg-black/30 hover:bg-black/50 text-gray-2 transition-colors duration-100"
        />
      </div>
    </div>
    <div class="grid place-content-center">
      <img src={avatar} alt="" class="rounded-full" />
    </div>
  </Card>
);
