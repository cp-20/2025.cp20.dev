import clsx from "clsx";
import { splitProps, type Component, type ComponentProps } from "solid-js";

type Props = Omit<
  ComponentProps<"img">,
  "src" | "width" | "height" | "srcSet" | "srcset"
> & {
  src: string;
  width?: number;
  height?: number;
};

const sizes = [96, 128, 256, 384, 512];

export const ArticleImage: Component<Props> = (props) => {
  const [_, rest] = splitProps(props, ["src", "class"]);

  const getImageUrl = ({
    width,
    height,
  }: { width?: number; height?: number }) => {
    const quality = 95;
    const fit = "scale-down";

    const params = new URLSearchParams();
    params.set("url", props.src);
    if (width) params.set("width", String(width));
    if (height) params.set("height", String(height));
    params.set("quality", String(quality));
    params.set("fit", fit);

    return `/api/images?${params.toString()}`;
  };

  const imageUrl = () =>
    getImageUrl({ width: props.width, height: props.height });

  const srcSet = () => {
    const srcSetUrls = sizes.map((size) => {
      const url = getImageUrl({ width: size });
      return `${url} ${size}w`;
    });
    return srcSetUrls.join(", ");
  };

  return (
    <img
      src={imageUrl()}
      srcSet={srcSet()}
      class={clsx("aspect-[1200/630] object-cover", props.class)}
      loading="lazy"
      {...rest}
      alt=""
    />
  );
};
