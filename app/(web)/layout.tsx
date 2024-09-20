import { BackToTop } from "@/components/back-to-top";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Toaster } from "sonner";
import "../fonts.css";
import "../globals.css";
import { Footer } from "./(layout)/footer";
import Header from "./(layout)/header";
import { Provider } from "./provider";

export const metadata: Metadata = {
  metadataBase: new URL("https://alfredmouelle.vercel.app"),
  creator: "Alfred Mouelle",
  category: "Portfolio",
  title: "Alfred Mouelle | Portfolio - Développeur Web et Mobile",
  authors: {
    name: "Alfred Mouelle",
    url: "https://alfredmouelle.vercel.app",
  },
  icons: ["/assets/logo.svg"],
  description:
    "Découvrez le portfolio d'Alfred Mouelle, développeur web et mobile. Explorez ses projets, compétences et expériences professionnelles.",
  keywords: [
    "Alfred Mouelle",
    "portfolio",
    "développeur fullstack",
    "développeur web",
    "développeur mobile",
    "freelance",
  ],
  openGraph: {
    title: "Alfred Mouelle | Portfolio - Développeur Web et Mobile",
    description:
      "Découvrez le portfolio d'Alfred Mouelle, développeur web et mobile. Explorez ses projets, compétences et expériences professionnelles.",
    url: "https://alfredmouelle.vercel.app",
    type: "website",
    images: [
      {
        width: 800,
        height: 800,
        alt: "Logo Alfred Mouelle",
        url: "/assets/logo.svg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@alfredmouelle",
    title: "Alfred Mouelle | Portfolio - Développeur Web et Mobile",
    description:
      "Découvrez le portfolio d'Alfred Mouelle, développeur web et mobile. Explorez ses projets, compétences et expériences professionnelles.",
    images: ["/assets/images/og-main.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className="h-full scroll-smooth antialiased"
      suppressHydrationWarning
    >
      <body
        className={cn(
          "grainy-background flex h-full min-h-screen flex-col bg-background font-global",
        )}
      >
        <Provider>
          <Header />
          <main className="grow">{children}</main>
          <Footer />
        </Provider>

        <BackToTop />
        <Toaster richColors />
      </body>
    </html>
  );
}
