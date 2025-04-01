import { defineConfig, presetIcons, presetWind } from "unocss";

export default defineConfig({
  presets: [presetWind(), presetIcons({})],
  rules: [
    // Add a rule for child animations when parent is in view
    [
      /^child-animate$/,
      () => [
        "@media (prefers-reduced-motion: no-preference) {.in-view .child-animate:not(.invisible) {animation-play-state: running;}.child-animate:not(.in-view) {animation-play-state:paused;visibility:hidden;}}",
      ],
    ],
    [
      /^animate-pop-in-up$/,
      () => [
        "@keyframes pop-in-up {from{opacity:0;visibility:hidden;transform:translateY(1rem);}to{opacity:1;visibility:visible;transform:translateY(0);}}",
        { "animation-name": "pop-in-up" },
      ],
    ],
    [
      /^animate-pop-in-right$/,
      () => [
        "@keyframes pop-in-right {from{opacity:0;visibility:hidden;transform:translateX(-1rem);}to{opacity:1;visibility:visible;transform:translateX(0);}}",
        { "animation-name": "pop-in-right" },
      ],
    ],
    [
      /^animate-pop-in-down$/,
      () => [
        "@keyframes pop-in-down {from{opacity:0;visibility:hidden;transform:translateY(-1rem);}to{opacity:1;visibility:visible;transform:translateY(-0);}}",
        { "animation-name": "pop-in-down" },
      ],
    ],
    [
      /^animate-pop-in-left$/,
      () => [
        "@keyframes pop-in-left {from{opacity:0;visibility:hidden;transform:translateX(1rem);}to{opacity:1;visibility:visible;transform:translateX(0);}}",
        { "animation-name": "pop-in-left" },
      ],
    ],
    [
      /^animate-duration-(\d+)$/,
      ([, d]) => {
        const duration = Number.parseInt(d);
        if (Number.isNaN(duration)) return;
        return { "animation-duration": `${duration}ms` };
      },
      { autocomplete: "animate-duration-<percent>" },
    ],
    [
      /^animate-delay-(\d+)$/,
      ([, d]) => {
        const delay = Number.parseInt(d);
        if (Number.isNaN(delay)) return;
        return { "animation-delay": `${delay}ms` };
      },
      { autocomplete: "animate-delay-<percent>" },
    ],
    [
      /^animate-fill-(none|forwards|backwards|both)$/,
      ([, d]) => ({ "animation-fill-mode": d }),
      { autocomplete: "animate-fill-(none|forwards|backwards|both)" },
    ],
  ],
  theme: {
    animation: {
      keyframes: {
        "pop-in": `{
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }`,
      },
    },
  },
});
