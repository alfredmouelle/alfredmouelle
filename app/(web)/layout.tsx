import { AppConfig } from "@/app.config";
import { cn } from "@/lib/utils";
import { Toaster } from "sonner";
import "../fonts.css";
import "../globals.css";
import { BackToTop } from "./(layout)/back-to-top";
import { Footer } from "./(layout)/footer";
import { Header } from "./(layout)/header";
import { Provider } from "./provider";

export const metadata = AppConfig.metadata;

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

        <BackToTop />
        <Toaster richColors />
      </body>
    </html>
  );
}
