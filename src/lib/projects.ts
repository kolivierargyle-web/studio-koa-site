export interface Project {
  slug: string;
  title: string;
  client: string;
  image: string;
}

export const projects: Project[] = [
  {
    slug: "shyla-london",
    title: "Shyla London",
    client: "Fashion",
    image: "/src/assets/shyla-london.jpg",
  },
  {
    slug: "terrace-hours",
    title: "Terrace Hours",
    client: "Hospitality",
    image: "/src/assets/terrace-hours.jpg",
  },
  {
    slug: "retire-rich",
    title: "Retire Rich",
    client: "Finance",
    image: "/src/assets/retire-rich.jpg",
  },
  {
    slug: "second-season",
    title: "Second Season",
    client: "Fashion",
    image: "/src/assets/second-season.jpg",
  },
  {
    slug: "matchday",
    title: "Matchday",
    client: "Sports",
    image: "/src/assets/matchday.jpg",
  },
  {
    slug: "hold-form",
    title: "Hold Form",
    client: "Fitness",
    image: "/src/assets/hold-form.jpg",
  },
  {
    slug: "first-touch",
    title: "First Touch",
    client: "Sports",
    image: "/src/assets/first-touch.jpg",
  },
  {
    slug: "night-tailoring",
    title: "Night Tailoring",
    client: "Fashion",
    image: "/src/assets/night-tailoring.jpg",
  },
  {
    slug: "wave-print",
    title: "Wave Print",
    client: "Design",
    image: "/src/assets/wave-print.jpg",
  },
  {
    slug: "chocolate-capital",
    title: "Chocolate Capital",
    client: "Food & Beverage",
    image: "/src/assets/chocolate-capital.jpg",
  },
  {
    slug: "kit-still-life",
    title: "Kit Still Life",
    client: "Photography",
    image: "/src/assets/kit-still-life.jpg",
  },
  {
    slug: "table-for-one",
    title: "Table for One",
    client: "Hospitality",
    image: "/src/assets/table-for-one.jpg",
  },
  {
    slug: "delivered-by-magic",
    title: "Delivered by Magic",
    client: "Gorillas",
    image: "/src/assets/delivered-by-magic.jpg",
  },
  {
    slug: "second-glass",
    title: "Second Glass",
    client: "Beverage",
    image: "/src/assets/second-glass.jpg",
  },
  {
    slug: "faster-than-you",
    title: "Faster Than You",
    client: "Gorillas",
    image: "/src/assets/faster-than-you.jpg",
  },
  {
    slug: "own-blend",
    title: "Own Blend",
    client: "Coffee",
    image: "/src/assets/own-blend.jpg",
  },
  {
    slug: "rider-in-style",
    title: "Rider in Style",
    client: "Fashion",
    image: "/src/assets/rider-in-style.jpg",
  },
];

export function projectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
