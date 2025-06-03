import { Playfair_Display } from "next/font/google"; // ✅ Import it
import localFont from "next/font/local";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Choose the weights you need
  display: "swap",
});

// Local font: Wilkysta
const wilkysta = localFont({
  src: [
    {
      path: "./fonts/wilkysta.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-wilkysta",
  display: "swap",
});

export const metadata = {
  title: "Sehlvet – Elegant Essentials for the Modern Woman",
  description:
    "Discover Sehlvet: a refined collection of timeless, high-quality essentials for women. Designed for elegance, crafted for confidence. Shop our curated eCommerce experience today.",
  keywords: [
    "Sehlvet",
    "luxury women's essentials",
    "sophisticated fashion for women",
    "elegant female products",
    "modern women's lifestyle",
    "high-end women's ecommerce",
    "refined fashion online",
    "minimalist beauty products",
    "premium skincare and apparel",
    "Sehlvet store",
  ],
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_URL}`),
  openGraph: {
    title: "Sehlvet – Timeless Style & Refined Essentials for Women",
    description:
      "Explore Sehlvet’s premium collection of fashion, beauty, and lifestyle essentials. Curated for women who value elegance, simplicity, and quality.",
    url: `${process.env.NEXT_PUBLIC_URL}`,
    siteName: "Sehlvet",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_URL}/assets/images/hero_image_2.png`, // Replace with actual OG image
        width: 1200,
        height: 630,
        alt: "Sehlvet – Elegant Essentials for Women",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sehlvet – Elegant Essentials for the Modern Woman",
    description:
      "Shop Sehlvet's exclusive line of refined essentials—from fashion to beauty. Where elegance meets everyday luxury.",
    images: [`${process.env.NEXT_PUBLIC_URL}/assets/images/hero_image_2.png`],
  },
  icons: {
    icon: "/assets/images/hero_image_2.png",
    shortcut: "/assets/images/hero_image_2.png",
    apple: "/assets/images/hero_image_2.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${wilkysta.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
