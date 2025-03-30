import clsx from "clsx";
import type { Component, ComponentProps, JSX } from "solid-js";

type SocialCardProps = {
  mediaLabel?: string;
  idLabel?: string;
  icon: JSX.Element;
};

export const SocialCard: Component<ComponentProps<"a"> & SocialCardProps> = ({
  mediaLabel,
  idLabel,
  icon,
  ...props
}) => (
  <a
    {...props}
    class={clsx(props.class, "px-4 py-2 rounded font-bold @container block")}
  >
    <div class="flex @[5rem]:justify-between justify-center items-center gap-2">
      <div class="hidden flex-col @[5rem]:flex">
        {mediaLabel && <span class="text-sm">{mediaLabel}</span>}
        {idLabel && <span class="-mt-1">@{idLabel}</span>}
      </div>
      {icon}
    </div>
  </a>
);
