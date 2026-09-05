import tile01 from "@/assets/tile-01.jpg";
import tile02 from "@/assets/tile-02.jpg";
import tile03 from "@/assets/tile-03.jpg";
import tile04 from "@/assets/tile-04.jpg";
import tile05 from "@/assets/tile-05.jpg";
import tile06 from "@/assets/tile-06.jpg";
import tile07 from "@/assets/tile-07.jpg";
import tile08 from "@/assets/tile-08.jpg";
import tile09 from "@/assets/tile-09.jpg";
import tile10 from "@/assets/tile-10.jpg";
import tile11 from "@/assets/tile-11.jpg";
import tile12 from "@/assets/tile-12.jpg";
import tile13 from "@/assets/tile-13.jpg";
import tile14 from "@/assets/tile-14.jpg";
import tile15 from "@/assets/tile-15.jpg";
import tile16 from "@/assets/tile-16.jpg";
import tile17 from "@/assets/tile-17.jpg";
export type Project = {
  slug: string;
  title: string;
  client: string;
  discipline: string;
  year: string;
  summary: string;
  image: string;
  credits: string[];
};

export const projects: Project[] = [
  {
    slug: "quiet-gold",
    title: "Quiet Gold",
    client: "Aurea Jewellery",
    discipline: "Beauty campaign — photography",
    year: "2026",
    summary:
      "A pared-back beauty story built around a single light source. Shot in a day, cut for paid social and out-of-home in the same week.",
    image: tile01,
    credits: ["Creative direction: Koa Studio", "Photography: L. Marchetti", "Styling: Ida Sørensen"],
  },
  {
    slug: "terrace-hours",
    title: "Terrace Hours",
    client: "Casa Verde",
    discipline: "Brand film + stills",
    year: "2026",
    summary:
      "Hospitality brand launch shot across one long afternoon. Menu, space and people captured as one continuous story.",
    image: tile02,
    credits: ["Creative direction: Koa Studio", "DOP: R. Abioye", "Production: Koa Studio"],
  },
  {
    slug: "retire-rich",
    title: "Retire Rich",
    client: "Kappa",
    discipline: "Campaign — photography & video",
    year: "2026",
    summary:
      "Kit drop campaign built on wave prints and sunburnt landscapes. Cast, location and product styling handled end to end.",
    image: tile03,
    credits: ["Creative direction: Koa Studio", "Photography: J. Feld", "Casting: Studio Koa"],
  },
  {
    slug: "matchday",
    title: "Matchday",
    client: "Trade Republic",
    discipline: "Sponsorship campaign",
    year: "2025",
    summary:
      "Sponsorship rollout shot rooftop-side in Berlin. Athlete portraits designed to work cropped hard on mobile.",
    image: tile04,
    credits: ["Creative direction: Koa Studio", "Photography: M. Kohl", "Retouch: Halo"],
  },
  {
    slug: "second-season",
    title: "Second Season",
    client: "Vinterior",
    discipline: "Lookbook",
    year: "2025",
    summary:
      "Resale fashion lookbook shot in a stripped Georgian flat, using daylight only and a two-person crew.",
    image: tile05,
    credits: ["Creative direction: Koa Studio", "Photography: A. Nunes", "Styling: Kit Bell"],
  },
  {
    slug: "hold-form",
    title: "Hold Form",
    client: "Nuo Active",
    discipline: "Studio portraiture",
    year: "2025",
    summary:
      "Performance-wear brand identity anchored by a set of high-contrast studio portraits shot against seamless grey.",
    image: tile06,
    credits: ["Creative direction: Koa Studio", "Photography: L. Marchetti", "Hair & make-up: Suri"],
  },
  {
    slug: "first-touch",
    title: "First Touch",
    client: "Adidas Junior",
    discipline: "Product campaign",
    year: "2025",
    summary:
      "Youth kit launch shot in-studio with a rotating cast of young players. Playful direction, tight turnaround.",
    image: tile07,
    credits: ["Creative direction: Koa Studio", "Photography: J. Feld", "Production: Koa Studio"],
  },
  {
    slug: "night-tailoring",
    title: "Night Tailoring",
    client: "Belvet",
    discipline: "Fashion editorial",
    year: "2025",
    summary:
      "Tailoring editorial shot on cobbled backstreets at first light, keeping the palette to black, stone and cloud.",
    image: tile08,
    credits: ["Creative direction: Koa Studio", "Photography: A. Nunes", "Styling: Ida Sørensen"],
  },
  {
    slug: "wave-print",
    title: "Wave Print",
    client: "Kappa",
    discipline: "Casting + portraiture",
    year: "2026",
    summary:
      "Street-cast portrait series supporting the main kit campaign. Shot fast, on location, in available light.",
    image: tile09,
    credits: ["Creative direction: Koa Studio", "Photography: J. Feld", "Casting: Studio Koa"],
  },
  {
    slug: "kit-still-life",
    title: "Kit Still Life",
    client: "Kappa",
    discipline: "Product still life",
    year: "2026",
    summary:
      "E-commerce and social still life set built around saturated textile backdrops and top-down composition.",
    image: tile10,
    credits: ["Art direction: Koa Studio", "Photography: M. Kohl", "Set: Rowe & Fern"],
  },
  {
    slug: "chocolate-capital",
    title: "Chocolate Capital",
    client: "Maison Cacao",
    discipline: "Title sequence + stills",
    year: "2025",
    summary:
      "Documentary title treatment and hero still life for a short film about the craft chocolate trade.",
    image: tile16,
    credits: ["Creative direction: Koa Studio", "Photography: R. Abioye", "Food styling: Nell Park"],
  },
  {
    slug: "table-for-one",
    title: "Table For One",
    client: "Kaffe Union",
    discipline: "Lifestyle photography",
    year: "2025",
    summary:
      "Warm, unhurried lifestyle library for a coffee house group — shot across four venues in two days.",
    image: tile11,
    credits: ["Creative direction: Koa Studio", "Photography: A. Nunes", "Production: Koa Studio"],
  },
  {
    slug: "delivered-by-magic",
    title: "Delivered By Magic",
    client: "Gorillas",
    discipline: "Advertising campaign",
    year: "2025",
    summary:
      "Doorstep-led advertising campaign with a light comic register, shot on location with real families.",
    image: tile12,
    credits: ["Creative direction: Koa Studio", "Photography: M. Kohl", "Production: Koa Studio"],
  },
  {
    slug: "second-glass",
    title: "Second Glass",
    client: "Vinca",
    discipline: "Brand film",
    year: "2026",
    summary:
      "Low-light brand film about the last hour of service, shot handheld with a two-person crew.",
    image: tile13,
    credits: ["Direction: Koa Studio", "DOP: R. Abioye", "Grade: Halo"],
  },
  {
    slug: "faster-than-you",
    title: "Faster Than You",
    client: "Gorillas",
    discipline: "Merch + apparel",
    year: "2025",
    summary:
      "Apparel capsule and campaign imagery built around a racing graphic and deadpan product staging.",
    image: tile14,
    credits: ["Creative direction: Koa Studio", "Photography: J. Feld", "Graphics: Koa Studio"],
  },
  {
    slug: "own-blend",
    title: "Own Blend",
    client: "Hey Coffee",
    discipline: "Packaging + product",
    year: "2026",
    summary:
      "Packaging design and product photography for a small-batch roaster, from label illustration to final cut.",
    image: tile15,
    credits: ["Design: Koa Studio", "Photography: M. Kohl", "Illustration: Nell Park"],
  },
    {
    slug: "rider-in-style",
    title: "Rider In Style",
    client: "Your Client",
    discipline: "Your discipline",
    year: "2026",
    summary:
      "Add your project summary here.",
    image: tile17,
    credits: ["Credit 1", "Credit 2", "Credit 3"],
  },
];

export const projectBySlug = (slug: string) => projects.find((p) => p.slug === slug);
