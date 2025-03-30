import clsx from "clsx";
import { splitProps, type Component, type ComponentProps } from "solid-js";
import type { Work } from "~/personal-data/works";

type Props = {
  work: Work;
  transition?: boolean;
} & ComponentProps<"a">;

export const WorkCard: Component<Props> = (props) => {
  const [_, rest] = splitProps(props, ["work", "transition", "class"]);
  return (
    <a
      href={`/works/${props.work.id}`}
      class={clsx(
        "bg-white/10 rounded text-white backdrop-blur-sm flex hover:bg-white/20 transition-colors duration-200 flex flex-col group",
        props.class,
      )}
      {...rest}
    >
      <div class="flex-1 flex flex-col p-4">
        <h2 class="text-white text-lg font-bold">{props.work.title}</h2>
        <p class="text-gray-400">{props.work.description}</p>
      </div>
      <div class="aspect-[1200/630] bg-white rounded-b">
        <img
          src={`/works/og/${props.work.id}.png`}
          alt=""
          class="aspect-[1200/630] object-cover group-hover:opacity-80 duration-200 rounded-b"
          width={424}
          height={222.6}
          style={
            props.transition
              ? { "view-transition-name": `img-${props.work.id}` }
              : undefined
          }
        />
      </div>
    </a>
  );
};
