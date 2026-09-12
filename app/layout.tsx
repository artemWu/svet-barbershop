import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Barbershop — Москва",
  description: "Стрижки, бритьё и уход.",
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
