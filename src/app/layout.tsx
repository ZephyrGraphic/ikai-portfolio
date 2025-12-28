

import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { MusicPlayer } from "@/components/MusicPlayer";
import { Providers } from "@/components/providers";
import { cn } from "@/lib/utils";
import { Toaster } from "sonner";


const jakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"], 
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "M. Z. Haikal Hamdani | Creative Technologist",
  description: "Portofolio M. Z. Haikal Hamdani - Web Developer & Teknolog Kreatif. Spesialis Next.js, UI/UX, dan Solusi Digital.",
  openGraph: {
    title: "M. Z. Haikal Hamdani | Creative Technologist",
    description: "Portofolio M. Z. Haikal Hamdani - Web Developer & Teknolog Kreatif.",
    url: "https://ikai-portfolio.vercel.app/",
    siteName: "Haikal Portfolio",
    images: [
      {
        url: "/thumbnail-link.png",
        width: 1200,
        height: 630,
        alt: "Haikal Portfolio Preview",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={cn(
          "bg-background font-sans antialiased text-primary selection:bg-accent selection:text-white overflow-x-hidden",
          jakarta.variable
        )}
      >
        <Providers>
           <MusicPlayer />
           <Navigation />
            <main className="w-full min-h-screen px-6 md:px-12 py-24 mx-auto max-w-[1920px]">
              {children}
            </main>
            <Toaster position="top-center" />
        </Providers>
      </body>
    </html>
  );
}
