import "~/styles/globals.css";
import ThemeProvider from "~/providers/ThemeProvider";
import Particles from "~/components/Particles";
import { Analytics } from "@vercel/analytics/react";

import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Prince Singh | Portfolio",
  description: "Prince Singh is a full stack developer",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
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
