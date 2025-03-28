import { A } from '@solidjs/router';
import clsx from 'clsx';
import { Component, ComponentProps } from 'solid-js';

export const Link: Component<ComponentProps<typeof A>> = (props) => (
  <A
    {...props}
    class={clsx(props.class, 'text-blue-500 hover:underline font-medium')}
  />
);
