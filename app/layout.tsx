import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://artemwu.github.io/svet-barbershop/"),
  title: "Свет — парикмахерская у метро Курская и Чкаловская",
  description:
    "Парикмахерская «Свет» в Москве, рядом с метро Курская и Чкаловская. Стрижки, уход за бородой и лицом. Запись онлайн.",
  openGraph: {
    title: "Свет — парикмахерская у метро Курская и Чкаловская",
    description:
      "Парикмахерская «Свет» в Москве, рядом с метро Курская и Чкаловская. Стрижки, уход за бородой и лицом. Запись онлайн.",
    type: "website",
    url: "https://artemwu.github.io/svet-barbershop/",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Свет — парикмахерская у метро Курская и Чкаловская",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Свет — парикмахерская у метро Курская и Чкаловская",
    description:
      "Парикмахерская «Свет» в Москве, рядом с метро Курская и Чкаловская. Стрижки, уход за бородой и лицом. Запись онлайн.",
    images: ["/og-image.png"],
  },
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/svet-barbershop/favicon.png",
    shortcut: "/svet-barbershop/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="antialiased">{children}</body>
    </html>
  );
}
