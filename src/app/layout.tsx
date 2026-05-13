import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import MobileBottomNav from "@/components/MobileBottomNav";

const outfit = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mersin Severium Masaj Salonu | Profesyonel Masaj & Spa Hizmetleri - Mersin",
  description:
    "Mersin'in en profesyonel masaj salonu. Klasik masaj, medikal masaj, aromaterapi, sultan masaj, VIP masaj, cilt bakımı ve lazer epilasyon hizmetleri. Uzman terapistlerle rahatlama ve sağlıklı yaşam deneyimi.",
  keywords: [
    "mersin severium masaj",
    "mersin severium masaj salonu",
    "masaj mersin",
    "mersin spa",
    "mersin klasik masaj",
    "mersin medikal masaj",
    "mersin aromaterapi",
    "mersin sultan masaj",
    "mersin vip masaj",
    "mersin cilt bakımı",
    "mersin lazer epilasyon",
  ],
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Mersin Severium Masaj Salonu | Profesyonel Masaj & Spa Hizmetleri",
    description:
      "Mersin'in en profesyonel masaj salonu. Uzman terapistlerle klasik masaj, medikal masaj, aromaterapi, sultan masaj ve VIP masaj hizmetleri.",
    images: [{ url: "/logo.png" }],
    locale: "tr_TR",
    type: "website",
  },
  verification: {
    google: "rlwAXz1Uq4Q8Q7IqfcZq-YRExngx2C2DuhSaSw9EJic",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://mersinmasajsalonu.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${outfit.variable} ${inter.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HealthAndBeautyBusiness",
              "name": "Mersin Severium Masaj Salonu",
              "image": "https://mersinmasajsalonu.com/logo.png",
              "@id": "https://mersinmasajsalonu.com",
              "url": "https://mersinmasajsalonu.com",
              "telephone": "05407903333",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Yenişehir Mahallesi, Adnan Menderes Bulvarı",
                "addressLocality": "Mersin",
                "addressCountry": "TR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 36.8048682,
                "longitude": 34.549216
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday"
                ],
                "opens": "11:30",
                "closes": "02:00"
              }
            })
          }}
        />
      </head>
      <body className="antialiased pb-[70px] lg:pb-0">
        {children}
        <MobileBottomNav />
        {/* Floating WhatsApp Button - Desktop Only */}
        <a
          className="fixed bottom-6 right-6 z-50 hidden lg:flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 animate-pulse-glow"
          href="https://wa.me/905407903333?text=Merhaba,%20bilgi%20almak%20istiyorum"
          target="_blank"
          aria-label="WhatsApp ile iletişime geçin"
        >
          <svg
            fill="currentColor"
            height="30"
            viewBox="0 0 16 16"
            width="30"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"></path>
          </svg>
        </a>
      </body>
    </html>
  );
}
