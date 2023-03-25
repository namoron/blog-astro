import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import mdx from "@astrojs/mdx";

import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  integrations: [preact(), mdx(), image()],
  markdown: {
    shikiConfig: {
      syntaxHighlight: "prism",
      // Shikiの組み込みテーマから選択（または独自のテーマを追加）
      // https://github.com/shikijs/shiki/blob/main/docs/themes.md
      // theme: "vsc-dark-plus",
      // カスタム言語の追加
      // 注：Shikiには.astroを含む無数の言語が内蔵されています。
      // https://github.com/shikijs/shiki/blob/main/docs/languages.md
      langs: [],
      // 水平スクロールを防ぐために文字の折り返しを有効にする
      wrap: true,
    },
  },
});
