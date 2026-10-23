# Zinc Restaurant website

Static website for Zinc Restaurant, Unit 3, 1 Rodeing Foot, Ballymoney, BT53 6JJ.
Plain HTML, CSS and JavaScript — no build step. Same shape as the Scenic Inn site.

## Pages
- `index.html` — home page
- `menus.html` + `menus.js` — menus, one pill per menu, deep-linkable (`menus.html#weekend`)
- `book.html` — how to book (phone-first, which is how they actually take bookings)
- `404.html` — page not found

## The files worth knowing about
- `menu-data.js` — **every menu lives here.** Edit this one file to change a menu.
- `config.js` — phone, address, Facebook link and the **opening hours**.
  The hours table and the "today we're open…" line both read from it.
- `styles.css` — all styling. Brand colours are at the top.
- `nav.js` — the mobile menu button
- `hours.js` — fills the hours table, highlights today, sets the footer year

## Brand
Taken from the restaurant's own logo and signage:

| Token | Value | Where it came from |
| --- | --- | --- |
| `--green` | `#35DF32` | the neon green in the logo (`#00FD04`), toned down enough to use for UI |
| `--lime` | `#A3C844` | the lime panels on the shopfront sign |
| `--ink` | `#0A0B0A` | the black of the logo disc |

Fonts are Archivo (headings) and Inter (body), both from Google Fonts.

## Images
Pulled from the restaurant's own Facebook page and processed down for the web.
Originals are in `../../images/`.

| File | What it is |
| --- | --- |
| `logo.png` / `mark.png` | the Facebook profile logo, white corners made transparent |
| `exterior.jpg` | the shopfront, with the "DINE IN / CALL TO BOOK" promo text cropped off |
| `halibut.jpg` | pan fried halibut (hero) |
| `crab-croquettes.jpg` | crab and cauliflower croquettes |
| `scallops.jpg` | roasted scallops |
| `hake-mussels.jpg` | pan fried fish with mussels |
| `linguine.jpg` | linguine, two bowls |
| `sunday-lunch.jpg` | their own Sunday lunch poster |

Facebook only serves about ten photos to a logged-out visitor, so that is what
we have. **Ask the restaurant for their photo folder** — interior shots and a
few more plates would lift the home page a lot.

## Still to confirm with the restaurant
Nothing on the site is invented, but these came from posters or the written
brief rather than from a priced menu, and should be checked before launch.

1. **Opening hours** (`config.js`). The brief says Mon–Thu 5pm–9pm, Fri–Sat
   12pm–10pm, Sun 12pm–9pm. Google currently shows a **4:30pm** weekday
   opening, and the teatime menu runs Tue–Thu only, which hints Monday may be
   closed. Get this straight from them — wrong hours is the worst error a
   restaurant site can have.
2. **Teatime service times.** Their own poster reads "Served pm – pm??", so the
   site says "Tuesday, Wednesday and Thursday evenings" without a time.
3. **The à la carte and its prices.** We do not have it. The "All Week" menu
   currently describes what is on it rather than listing it.
4. **Sunday lunch prices** and the full choice of roasts.
5. **Weekend specials.** The three on the site are from a real poster. The
   second group ("Also seen on the board") came from the brief, not from a
   menu — confirm or drop it.
6. **Email address.** We only have the phone number, so there is no email
   anywhere on the site.
7. **Reviews.** The site shows the 4.6/441 Google rating but no quotes, because
   we do not have permission or attribution for any. Pull three real ones from
   Google or TripAdvisor if they want a testimonials section.

## Running it
Any static server will do:

```bash
npx serve .
```

Or with Cloudflare, the same way as the Scenic Inn site:

```bash
npm install
npm run dev
npm run deploy
```
