#!/usr/bin/env node
/**
 * Generates the featured image for a blog post, in the site's brand.
 *
 * Navy background, gold lightning bolt (the same shape the blog pages use),
 * gold category eyebrow, white title. Output is 1600x845 JPEG, which matches
 * every image already in public/blog.
 *
 * Usage:
 *   node scripts/make-blog-image.mjs --slug=my-post --title="My Post Title" --category="Personal Development"
 */

import { Jimp, loadFont, measureTextHeight, intToRGBA } from 'jimp'
import { SANS_16_WHITE, SANS_32_WHITE, SANS_64_WHITE, SANS_128_WHITE } from 'jimp/fonts'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')

const WIDTH = 1600
const HEIGHT = 845
const MARGIN = 110

const NAVY = { r: 0x00, g: 0x2b, b: 0x45 }
const NAVY_DEEP = { r: 0x00, g: 0x14, b: 0x24 }
const GOLD = { r: 0xff, g: 0xd7, b: 0x00 }

// The bolt from components' BLOT path: M13 0L3 16h6L4 30 16 13h-6z
const BOLT = [[13, 0], [3, 16], [9, 16], [4, 30], [16, 13], [10, 13]]

function args() {
  const out = {}
  for (const a of process.argv.slice(2)) {
    const m = a.match(/^--([^=]+)=([\s\S]*)$/)
    if (m) out[m[1]] = m[2]
  }
  return out
}

function rgba(r, g, b, a = 255) {
  return (r << 24 >>> 0) + (g << 16) + (b << 8) + a
}

function inPolygon(x, y, pts) {
  let inside = false
  for (let i = 0, j = pts.length - 1; i < pts.length; j = i++) {
    const [xi, yi] = pts[i]
    const [xj, yj] = pts[j]
    if ((yi > y) !== (yj > y) && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) inside = !inside
  }
  return inside
}

/** Vertical navy gradient with a soft gold glow in the top right. */
function paintBackground(img) {
  const glowX = WIDTH * 0.88
  const glowY = HEIGHT * 0.07
  const glowR = 620

  for (let y = 0; y < HEIGHT; y++) {
    const t = y / (HEIGHT - 1)
    const br = Math.round(NAVY.r + (NAVY_DEEP.r - NAVY.r) * t)
    const bg = Math.round(NAVY.g + (NAVY_DEEP.g - NAVY.g) * t)
    const bb = Math.round(NAVY.b + (NAVY_DEEP.b - NAVY.b) * t)

    for (let x = 0; x < WIDTH; x++) {
      const d = Math.hypot(x - glowX, y - glowY)
      const glow = d < glowR ? Math.pow(1 - d / glowR, 2.2) * 0.16 : 0
      const r = Math.min(255, Math.round(br + (GOLD.r - br) * glow))
      const g = Math.min(255, Math.round(bg + (GOLD.g - bg) * glow))
      const b = Math.min(255, Math.round(bb + (GOLD.b - bb) * glow))
      img.setPixelColor(rgba(r, g, b), x, y)
    }
  }
}

/** The gold bolt, drawn as a solid brand mark on the right. */
function paintBolt(img) {
  const scale = 11
  const pts = BOLT.map(([x, y]) => [x * scale, y * scale])
  const maxX = Math.max(...pts.map((p) => p[0]))
  const maxY = Math.max(...pts.map((p) => p[1]))
  const offX = WIDTH - MARGIN - maxX
  const offY = Math.round((HEIGHT - maxY) / 2)

  // Supersample so the diagonal edges are not jagged.
  const SS = 3
  for (let y = 0; y <= maxY; y++) {
    for (let x = 0; x <= maxX; x++) {
      let hits = 0
      for (let sy = 0; sy < SS; sy++) {
        for (let sx = 0; sx < SS; sx++) {
          if (inPolygon(x + (sx + 0.5) / SS, y + (sy + 0.5) / SS, pts)) hits++
        }
      }
      if (!hits) continue
      const px = offX + x
      const py = offY + y
      if (px < 0 || px >= WIDTH || py < 0 || py >= HEIGHT) continue
      const cur = intToRGBA(img.getPixelColor(px, py))
      const a = (hits / (SS * SS)) * 0.92
      img.setPixelColor(
        rgba(
          Math.round(cur.r + (GOLD.r - cur.r) * a),
          Math.round(cur.g + (GOLD.g - cur.g) * a),
          Math.round(cur.b + (GOLD.b - cur.b) * a),
        ),
        px,
        py,
      )
    }
  }
}

function fillRect(img, x, y, w, h, { r, g, b }, alpha = 1) {
  for (let yy = y; yy < y + h; yy++) {
    for (let xx = x; xx < x + w; xx++) {
      if (xx < 0 || xx >= WIDTH || yy < 0 || yy >= HEIGHT) continue
      const cur = intToRGBA(img.getPixelColor(xx, yy))
      img.setPixelColor(
        rgba(
          Math.round(cur.r + (r - cur.r) * alpha),
          Math.round(cur.g + (g - cur.g) * alpha),
          Math.round(cur.b + (b - cur.b) * alpha),
        ),
        xx,
        yy,
      )
    }
  }
}

/**
 * Jimp only ships white and black bitmap fonts, so coloured text is drawn
 * white onto a transparent layer, recoloured, then composited.
 */
async function printTinted(img, font, x, y, text, colour, maxWidth, alpha = 1) {
  const layer = new Jimp({ width: WIDTH, height: HEIGHT, color: 0x00000000 })
  layer.print({ font, x: 0, y: 0, text, ...(maxWidth ? { maxWidth } : {}) })

  for (let yy = 0; yy < HEIGHT; yy++) {
    for (let xx = 0; xx < WIDTH; xx++) {
      const c = intToRGBA(layer.getPixelColor(xx, yy))
      if (c.a === 0) continue
      const px = x + xx
      const py = y + yy
      if (px < 0 || px >= WIDTH || py < 0 || py >= HEIGHT) continue
      const a = (c.a / 255) * alpha
      const cur = intToRGBA(img.getPixelColor(px, py))
      img.setPixelColor(
        rgba(
          Math.round(cur.r + (colour.r - cur.r) * a),
          Math.round(cur.g + (colour.g - cur.g) * a),
          Math.round(cur.b + (colour.b - cur.b) * a),
        ),
        px,
        py,
      )
    }
  }
}

export async function makeBlogImage({ slug, title, category = 'Personal Development', outDir }) {
  if (!slug) throw new Error('makeBlogImage needs a slug')
  if (!title) throw new Error('makeBlogImage needs a title')

  const img = new Jimp({ width: WIDTH, height: HEIGHT, color: rgba(NAVY.r, NAVY.g, NAVY.b) })
  paintBackground(img)
  paintBolt(img)

  const eyebrowFont = await loadFont(SANS_32_WHITE)
  const smallFont = await loadFont(SANS_16_WHITE)
  const maxWidth = WIDTH - MARGIN * 2 - 300

  // Long titles need the smaller face or they overflow the canvas.
  const bigFont = await loadFont(SANS_128_WHITE)
  const midFont = await loadFont(SANS_64_WHITE)
  const titleFont = title.length <= 34 ? bigFont : midFont
  const titleHeight = measureTextHeight(titleFont, title, maxWidth)
  const eyebrowHeight = measureTextHeight(eyebrowFont, category.toUpperCase(), maxWidth)

  const RULE_H = 6
  const GAP_RULE = 30
  const GAP_EYEBROW = 26
  const groupHeight = RULE_H + GAP_RULE + eyebrowHeight + GAP_EYEBROW + titleHeight
  const top = Math.round((HEIGHT - groupHeight) / 2) - 20

  fillRect(img, MARGIN, top, 96, RULE_H, GOLD)
  await printTinted(img, eyebrowFont, MARGIN, top + RULE_H + GAP_RULE, category.toUpperCase(), GOLD, maxWidth)
  await printTinted(
    img,
    titleFont,
    MARGIN,
    top + RULE_H + GAP_RULE + eyebrowHeight + GAP_EYEBROW,
    title,
    { r: 255, g: 255, b: 255 },
    maxWidth,
  )

  // Footer domain, muted.
  await printTinted(
    img,
    smallFont,
    MARGIN,
    HEIGHT - MARGIN + 30,
    'thecatalystmethod.co.uk',
    { r: 255, g: 255, b: 255 },
    maxWidth,
    0.45,
  )

  const dir = outDir || path.join(ROOT, 'public', 'blog')
  const out = path.join(dir, `${slug}.jpg`)
  await img.write(out, { quality: 82 })
  return out
}

if (import.meta.url === `file://${process.argv[1]}` || process.argv[1]?.endsWith('make-blog-image.mjs')) {
  const a = args()
  makeBlogImage({ slug: a.slug, title: a.title, category: a.category })
    .then((p) => console.log(`Wrote ${p}`))
    .catch((e) => {
      console.error(e.message)
      process.exit(1)
    })
}
