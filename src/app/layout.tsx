import "~/styles/globals.css";
import ThemeProvider from "~/providers/ThemeProvider";
import Particles from "~/components/Particles";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";

import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Prince Singh | Software Engineer",
  description: "Prince Singh is a full stack software engineer",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  openGraph: {
    title: "Prince Singh | Software Engineer",
    description: "Prince Singh is a full stack software engineer",
    images: [{ url: "/og-image.png" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${montserrat.variable}`}>
        <ThemeProvider>
          <Analytics />
          <Particles />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
