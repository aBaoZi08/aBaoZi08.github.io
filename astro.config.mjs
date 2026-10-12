// @ts-check
import { defineConfig } from "astro/config";

// GitHub Pages settings.
// Name your GitHub repo exactly "abaozi08.github.io" (your username + .github.io)
// and the site is served from the root, so no "base" is needed.
//
// Using a different repo name (for example "my-portfolio")? Add a base line:
//   base: "/my-portfolio",
// and your URL becomes https://abaozi08.github.io/my-portfolio
export default defineConfig({
  site: "https://abaozi08.github.io",
});
