import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notre histoire",
  description:
    "Allycore est née d'un constat simple : les artisans du bâtiment sont les métiers d'avenir, mais ils restent les grands oubliés du numérique. Découvrez notre mission.",
  alternates: { canonical: "https://allycore-portfolio.vercel.app/about" },
  openGraph: {
    title: "Notre histoire | Allycore",
    description:
      "Donner aux artisans du bâtiment la visibilité qu'ils méritent, sans complexité et sans jargon.",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
