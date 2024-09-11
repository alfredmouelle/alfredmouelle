import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import "../fonts.css";
import "../globals.css";
import { Footer } from "./(layout)/footer";
import Header from "./(layout)/header";
import { Provider } from "./provider";

export const metadata: Metadata = {
  title: "Alfred Mouelle | Portfolio",
  authors: {
    name: "Alfred Mouelle",
    url: "https://alfred-mouelle.vercel.app",
  },
  description: "Mon portfolio personnel et professionnel.",
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
          "flex h-full min-h-screen flex-col bg-background font-global",
        )}
      >
        <Provider>
          <Header />
          <main className="grow">{children}</main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
