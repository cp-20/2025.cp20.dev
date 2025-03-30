import { useBeforeLeave } from "@solidjs/router";
import type { Component, JSX } from "solid-js";

export const MainLayout: Component<{
  children?: JSX.Element;
}> = (props) => {
  // FIXME: 戻る/進むボタンを押したときに View Transition の挙動が不安定
  const startTransition = (update: () => void) => {
    // View Transition API をサポートしていない場合
    if (!document.startViewTransition) {
      return update();
    }
    document.startViewTransition(update);
    console.log("startViewTransition");
  };

  useBeforeLeave((e) => {
    e.preventDefault();
    startTransition(() => e.retry(true));
  });

  return (
    <main class="max-w-4xl mx-auto p-4 pb-40 space-y-8">{props.children}</main>
  );
};
