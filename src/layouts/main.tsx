import { Component, JSX } from 'solid-js';

export const MainLayout: Component<{
  children?: JSX.Element;
}> = (props) => (
  <main class="max-w-4xl mx-auto p-4 space-y-8">{props.children}</main>
);
