import {
  defineConfig,
  presetIcons,
  presetTypography,
  presetMini,
  presetWebFonts,
} from "unocss";

export default defineConfig({
  shortcuts: [
    {
      attention:
        "outline-color-teal-3 outline-solid outline-2 shadow-cyan-1 shadow-op-20 shadow-offset-30",
    },
    { active: "border-slate border-1" },
    {
      btn: "font-semibold rd-md cursor-pointer focus:attention focus-within:attention",
    },
    { "btn-primary": "bg-yellow-4 hover:bg-yellow-3" },
    { "btn-outline": "border-slate-4 hover:bg-slate-3 border-1" },
    { "btn-ghost": "hover:bg-slate-2" },
    [
      /^btn-(sm|md|lg)$/,
      ([, size]) =>
        `py-${size === "sm" ? 1 : size === "md" ? 2 : 3} px-${
          size === "sm" ? 2 : size === "md" ? 4 : 6
        }`,
    ],
  ],
  presets: [
    presetMini({
      dark: "media",
    }),
    presetIcons({
      extraProperties: {
        display: "inline-block",
        "vertical-align": "middle",
      },
    }),
    presetTypography(),
    presetWebFonts({
      provider: "bunny",
      fonts: {
        sans: "Roboto",
        mono: ["Fira Code", "Fira Mono:400,700"],
      },
    }),
  ],
});
