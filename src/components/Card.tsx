import clsx from 'clsx';
import { Component, ComponentProps } from 'solid-js';

export const Card: Component<ComponentProps<'div'>> = (props) => {
  return (
    <div
      {...props}
      class={clsx(
        props.class,
        'bg-white/10 rounded p-4 text-white backdrop-blur-sm'
      )}
    ></div>
  );
};
