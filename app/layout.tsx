import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://svethair.ru/"),
  alternates: {
    canonical: "https://svethair.ru/",
  },
  title: "Свет — парикмахерская у метро Курская и Чкаловская",
  description:
    "Парикмахерская «Свет» в Москве, рядом с метро Курская и Чкаловская. Стрижки, уход за бородой и лицом. Запись онлайн.",
  openGraph: {
    title: "Свет — парикмахерская у метро Курская и Чкаловская",
    description:
      "Парикмахерская «Свет» в Москве, рядом с метро Курская и Чкаловская. Стрижки, уход за бородой и лицом. Запись онлайн.",
    type: "website",
    url: "https://svethair.ru/",
    images: [
      {
        url: "https://svethair.ru/og-image.png",
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
    images: ["https://svethair.ru/og-image.png"],
  },
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
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
