# The Thursday Ledger — 26 November 2026

[![make.fun · news-image-20261126](https://make.fun/badge/news-image-20261126.svg)](https://make.fun/bounty/news-image-20261126?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)
[![rank](https://make.fun/badge/news-image-20261126/Auttzy/news-image-20261126-va/rank.svg)](https://make.fun/bounty/news-image-20261126/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)
[![reward](https://make.fun/badge/news-image-20261126/Auttzy/news-image-20261126-va/reward.svg)](https://make.fun/bounty/news-image-20261126?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)

A newspaper front page, drawn as a single image, summing up the world's news
of Thursday 26 November 2026.

## The image

`entry.png` is a 1024×1024 front page of a cream broadsheet called "The
Thursday Ledger", dated Thursday 26 November 2026. Thirty-four stories
from that day share the page, across seven regions:

- **Lead** — Asia rebounds after Wednesday's rout: KOSPI +0.29% to
  4,711.21, Nikkei +0.86% to 57,499.16, Taiex +2.9%, Hang Seng +1.19%;
  Europe joins in (STOXX 600 +1.8%) as the new US tariffs look milder
  than feared. Wall Street is closed for Thanksgiving.
- **Lead** — Kim Jong Un vows to deploy tactical nuclear weapons "across
  multiple domains" and expand production, calling denial of the North's
  nuclear status "an open declaration of war"; he ignores Trump's
  overture and expels a Swiss diplomat in a sanctions row.
- **Lead** — The EU summit ends early with no budget deal: frugal states
  boycott Costa's small-group talks, so no agreement on the €2 trillion
  2028–34 budget (Costa's cut: −€204bn → €1.78T). Talks move to 17
  December. One decision: Pablo Hernández de Cos is routed as the next
  ECB chief.
- **Americas** — A Thanksgiving nor'easter slams New York: gusts to
  60 mph, more than 800,000 without power, a state of emergency, and
  the 100th Macy's parade moved to Saturday. King tides return to the
  California coast. Brazil's mid-month inflation cools to +0.22%,
  below forecast, though food jumps 1.51% (tomatoes +38.9%).
- **Africa** — Nigeria's Court of Appeal convicts Jide Omokore in an
  $823m oil-fraud case; Sudan rejects Ethiopia's offer to host peace
  talks; free healthcare opens in 14 Ituri health zones amid the DRC
  Ebola outbreak.
- **Middle East** — Israeli strikes kill eight in Gaza overnight despite
  the ceasefire; the Saudi-led coalition intercepts three Houthi
  missiles aimed at Riyadh; Iraq delivers verdicts for 20 French
  nationals accused of joining IS.
- **Europe** — Ukraine hits five Russian jets at the Savasleika airbase;
  Spain votes on Sunday with the Popular Party ahead in the polls; the
  ECB's October accounts show policymakers leaning toward a hike;
  Imperial Brands jumps 13.3% on Altria's possible offer.
- **Oceania** — Liberal senator Leah Blyth defects to Pauline Hanson's
  One Nation on the final sitting day, taking its Senate bloc to five;
  a new study maps where New Zealand's next big Alpine Fault quake may
  start.
- **Sport** — Chess Game 3 is a 60-move draw, 1.5–1.5: Gukesh's rare Rio
  de Janeiro Variation leaves Sindarov with six seconds on the clock
  at move 40. India v New Zealand's 2nd Test starts Friday.

The page also carries a UTC timeline strip, a "day in numbers" strip
(Taiex +2.9%, Bank of Korea 3.25%, €2T budget with no deal, 800,000+
without power, 60 mph gusts, chess 1.5–1.5, Brazil IPCA-15 +0.22%), a
region bar, a dotted world map ("Where it happened") with numbered pins,
an "Also today" list of 21 more stories, and a red DATE CHECK box naming
what was deliberately left out because it happened on another day (the
Netanyahu judges' recommendation of 25 November, the Venezuela–Siemens
accords of 25 November, the king-tide records of 25 November, the
US "leave Iran now" alert of 24 November, the record Canary Islands
arrivals of 24 November, and more). Every story is sourced; the sources
are listed at the foot of the page. Press time 23:00 UTC.

## The bounty

Built for [make.fun](https://make.fun)'s
[`news-image-20261126`](https://make.fun/bounty/news-image-20261126) bounty:
sum up 26 November 2026's world news in one image. The prize pool is $100,
shared by the top 50 entries.

## How to run it

Node 22, standard library only — nothing to install. The program copies the
artwork into the output directory:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` reads `entry.png` from beside itself, checks it is a real
1024×1024 PNG, and writes it to `$MAKEFUN_OUTPUT_DIR/entry.png` (or
`/output/entry.png` when the variable is not set). It refuses to run if the
artwork is missing, the wrong size, or not a PNG, and checks the copied
file's size and byte checksum match before reporting success.
