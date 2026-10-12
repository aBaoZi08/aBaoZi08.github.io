// ============================================================
//  SCENE FILES: the one place that says which pictures are used.
//
//  Paths start with "/" and point into the `public/` folder.
//  "/scene/pond-day.svg"  means  public/scene/pond-day.svg
//
//  To use your own picture, EITHER:
//    1. put your file in public/scene/ with the SAME name (easiest), OR
//    2. put it there with a new name (e.g. pond-day.png) and change the path below.
//  PNG, WEBP and SVG work. Use PNG/WEBP/SVG with a transparent background
//  for the pond, sun, moon and clouds so they blend into the sky.
// ============================================================

export const theme = {
  // The ponds along the bottom of the page. Make them the SAME size.
  pondDay: "/scene/pond-day.svg",
  pondNight: "/scene/pond-night.svg",

  // The sun and moon. This is also the theme button: click it to switch.
  sun: "/scene/sun.svg",
  moon: "/scene/moon.svg",

  // Optional extras (sky colors live in src/styles/global.css).
  cloud: "/scene/cloud.svg", // the drifting day clouds
  stars: "/scene/stars.svg", // a tile of stars that repeats across the night sky
};
