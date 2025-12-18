import type { Metadata } from "next";
import { inter } from "@/fonts";

import "../styles/globals.scss";
import "@/utils/console.config";

export const metadata: Metadata = {
  title: {
    template: "%s | Portfólio",
    default: "Bruno Milano | Portfólio",
  },
  icons: {
    icon: "/assets/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
