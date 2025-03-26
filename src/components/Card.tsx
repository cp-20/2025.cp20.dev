import clsx from 'clsx';
import { Component, ComponentProps } from 'solid-js';

export const Card: Component<ComponentProps<'div'>> = (props) => (
  <div
    {...props}
    class={clsx(
      props.class,
      'bg-white/10 rounded p-4 text-white backdrop-blur-sm'
    )}
  ></div>
);

export const CardTitle: Component<ComponentProps<'h2'>> = ({
  children,
  ...props
}) => (
  <h2 {...props} class={clsx(props.class, 'text-3xl font-bold mb-8')}>
    <div class="border-b border-b-dotted border-b-6 pb-2 w-fit">{children}</div>
  </h2>
);
