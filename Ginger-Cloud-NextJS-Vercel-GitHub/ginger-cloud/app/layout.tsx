import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000")),
  title: "Ginger Cloud | Marshmallow Vegan dengan Sentuhan Wedang Jahe",
  description:
    "Selembut awan, sehangat jahe. Ginger Cloud menghadirkan marshmallow vegan tanpa bahan hewani dalam dua rasa: Original Sweet dan Ginger.",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Ginger Cloud | Soft like a cloud, warm like ginger",
    description: "Marshmallow vegan dengan inspirasi wedang jahe. Kenalan dengan Original Sweet dan Ginger.",
    images: ["/images/ginger-cloud-hero.webp"],
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#dcfaf7",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
