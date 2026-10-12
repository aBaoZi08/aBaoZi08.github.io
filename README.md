# My Portfolio

A single-page personal website built with [Astro](https://docs.astro.build). The whole page is one illustrated scene: a sky that switches between day and night, a clothesline of photos, a floating menu, and a pond along the bottom. There is no header and there are no boxed cards.

## Run it locally

You need [Node.js 22 or later](https://nodejs.org). Check with `node -v`.

```bash
npm install      # one time: downloads dependencies
npm run dev      # starts the site at http://localhost:4321
```

Press `Ctrl+C` to stop. Saving a file updates the browser automatically.

```bash
npm run check    # type-check
npm run build    # build the real site into ./dist
npm run preview  # look at the built site
```

## Where to edit things

| What | Exact file |
|---|---|
| Your name (intro heading and browser tab) | `src/pages/index.astro` (the `name` line) |
| **Home** intro | `src/pages/index.astro` |
| **About** section text | `src/components/About.astro` |
| **Photography** clothesline: which photos, and their order | `src/config/photos.ts` |
| How the clothesline looks | `src/components/Photography.astro` |
| **Projects** list | `src/components/Projects.astro` |
| How one project card looks | `src/components/ProjectCard.astro` |
| **Contact** section: email and links | `src/components/Contact.astro` |
| **Left menu** items | `src/components/SideNav.astro` |
| **Sun / moon button** (the theme toggle) | `src/components/ThemeToggle.astro` |
| Sky, clouds and stars | `src/components/Scene.astro` |
| Pond | `src/components/Pond.astro` |
| **Which picture files are used** (ponds, sun, moon, clouds, stars) | `src/config/theme.ts` |
| Sky colors, text colors (day and night) | `src/styles/global.css` (top of the file) |

Search the project for `TODO` to find placeholders. To change text, open the file, edit the words in quotes (or between tags), and save.

## Where to put your pictures

All pictures live in the `public/` folder. Paths in the config files start with `/` and leave out the word `public` (so `/scene/pond-day.svg` means `public/scene/pond-day.svg`).

### Ponds (you supply these)

| Picture | Put it here (replace the file) | Best format and size |
|---|---|---|
| Day pond | `public/scene/pond-day.svg` | transparent **PNG, WebP or SVG**, about **2400 × 600 px** (wide, 4:1) |
| Night pond | `public/scene/pond-night.svg` | same size as the day pond |

- The area above the water or bank should be **transparent** so the sky shows through. The picture stretches to the full page width and sits at the very bottom.
- Make the two ponds the **same size** so they line up when the page fades between them.
- Keep file size small (WebP under about 400 KB).
- **Using a different file type** (for example `pond-day.png`)? Put it in `public/scene/` and change `pondDay` / `pondNight` in `src/config/theme.ts`.

### Optional scene pictures

| Picture | File | Best format and size |
|---|---|---|
| Sun (also the theme button) | `public/scene/sun.svg` | square, transparent, about 512 × 512 px; keep the glow inside the square |
| Moon | `public/scene/moon.svg` | same as the sun |
| Cloud | `public/scene/cloud.svg` | transparent, about 600 × 240 px |
| Stars | `public/scene/stars.svg` | transparent tile about 600 × 400 px that repeats across the night sky |

The sky itself is a color gradient, no picture needed. Change its colors with `--sky-day-top`, `--sky-day-bottom`, `--sky-night-top` and `--sky-night-bottom` at the top of `src/styles/global.css`.

### Photography (the clothesline)

- **Folder:** `public/photos/`
- **Order and list:** `src/config/photos.ts`. Photos hang left to right in the same order as the list.
- **Add:** drop the file into `public/photos/`, then copy one `{ src: ..., alt: ... }` line in `photos.ts` and edit it.
- **Remove:** delete its line in `photos.ts` (and the file, if you like).
- **Replace:** drop your file into `public/photos/` with the same name, or change the `src` in `photos.ts`.
- **Sizes:** any shape works (wide, tall, square); photos keep their proportions. About 1600 px on the long side as JPG or WebP, under about 300 KB each, loads quickly.
- **`alt`:** a short description of each photo for screen readers.
- Your own photos are already in `public/photos/` and listed in `src/config/photos.ts`.

## Day and night

- The **sun in the corner is the theme button**. Click it: the sun sets, the moon rises, the sky turns dark blue with stars, clouds fade, and the night pond fades in. Click the moon to go back.
- Your choice is saved in the browser, so it stays after a refresh. The saved theme is applied by a small script at the top of `src/layouts/BaseLayout.astro`, so the page does not flash the wrong theme.
- On phones and small laptops the sun sits at the top of the page and scrolls away; on large screens it stays in the sky corner.

## The left menu

- File: `src/components/SideNav.astro`. Each item is one line in the `items` list.
- Clicking an item smoothly scrolls to that section. It works because each section has an `id` (`home`, `about`, `photography`, `projects-section`, `contact`).
- On phones, the menu hides behind a **Menu** button (top-left). Tap it, then tap an item, the dark area, or press Esc to close.
- **To add a section** (for example Skills): add it inside `<BaseLayout>` in `src/pages/index.astro`:

  ```astro
  <section id="skills">
    <h2>Skills</h2>
    <p>List your skills here.</p>
  </section>
  ```

  then add `{ label: "Skills", href: "#skills" },` to `items` in `SideNav.astro`.

## Folder map

```
src/pages/index.astro           the page: puts the sections inside the layout
src/layouts/BaseLayout.astro    <head>, saved theme, sky, menu, sun/moon, content, pond
src/components/                 Scene, Pond, ThemeToggle, SideNav, Photography,
                                About, Projects, ProjectCard, Contact
src/config/theme.ts             which scene picture files are used
src/config/photos.ts            which photos hang on the clothesline, in order
src/styles/global.css           colors, sky colors, fonts, layout
public/scene/                   pond, sun, moon, cloud and star pictures
public/photos/                  your photography
```

## Put it live on GitHub Pages

The Catalyst workshop slides cover this: name a public repo `<username>.github.io`, set `site` in `astro.config.mjs`, add the Astro deploy workflow at `.github/workflows/deploy.yml`, and turn on **Settings → Pages → Source → GitHub Actions**.
