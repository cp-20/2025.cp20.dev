import clsx from 'clsx';
import { Component, ComponentProps, JSX } from 'solid-js';

type SocialCardProps = {
  mediaLabel: string;
  idLabel: string;
  icon: JSX.Element;
};

export const SocialCard: Component<ComponentProps<'a'> & SocialCardProps> = ({
  mediaLabel,
  idLabel,
  icon,
  ...props
}) => (
  <a
    {...props}
    class={clsx(
      props.class,
      'flex justify-between items-center px-4 py-2 rounded font-bold'
    )}
  >
    <div class="flex flex-col">
      <span class="text-sm">{mediaLabel}</span>
      <span class="-mt-1">@{idLabel}</span>
    </div>
    {icon}
  </a>
);
