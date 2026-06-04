import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Future Life Tabernacle | Transforming Lives Worldwide",
  description: "Future Life Tabernacle is a global Christian community in Karemo, Siaya, Kenya bringing hope, healing and transformation through worship, the Word, and service.",
  keywords: ["church", "Kenya", "Siaya", "Christian", "worship", "prayer", "ministry", "Future Life Tabernacle"],
  authors: [{ name: "Future Life Tabernacle" }],
  openGraph: {
    title: "Future Life Tabernacle",
    description: "Where Heaven touches Earth — Experience God's presence, power, and purpose.",
    type: "website",
    locale: "en_US",
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/logo.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
