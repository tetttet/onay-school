import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";

import "./globals.css";
import { Toaster } from "react-hot-toast";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Система управления обучением | Onay School",
  description:
    "Онлайн-платформа, созданная студентами для студентов. Подготовка к SAT, IELTS, языковые курсы, поддержка при поступлении за границу, реальные истории и пошаговое сопровождение.",
  keywords: [
    "Onay School",
    "Система управления обучением",
    "подготовка к экзаменам",
    "SAT",
    "IELTS",
    "образование за границей",
    "Work & Travel",
    "Türkiye Bursları",
    "языковые курсы",
    "мотивация студентов",
    "помощь студентам",
    "поступление за границу",
  ],
  authors: [{ name: "Onay School Team", url: "https://onayschool.kz" }],
  creator: "Onay School",
  publisher: "Onay School",
  metadataBase: new URL("https://onayschool.kz"),
  alternates: {
    canonical: "https://onayschool.kz",
    languages: {
      ru: "https://onayschool.kz/ru",
      en: "https://onayschool.kz/en",
    },
  },
  openGraph: {
    title: "Onay School — Система управления обучением",
    description:
      "Образовательная платформа от студентов: экзамены, курсы, международные программы и вдохновение для молодёжи.",
    url: "https://onayschool.kz",
    siteName: "Onay School",
    images: [
      {
        url: "https://onayschool.kz/image/logo/icon.png",
        width: 800,
        height: 600,
        alt: "Логотип Onay School",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Onay School — Система управления обучением",
    description:
      "Онлайн-платформа для подготовки к SAT, IELTS, языковым курсам и международным программам.",
    site: "@onayschool",
    images: ["https://onayschool.kz/image/logo/icon.png"],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster
            position="top-center" // ⬅️ Показывать уведомление сверху по центру
            toastOptions={{
              style: {
                padding: "12px 20px",
                fontSize: "14px",
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
