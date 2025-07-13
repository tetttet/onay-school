import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Профиль | Onay School — Система управления обучением",
  description:
    "Добро пожаловать в ваш профиль Onay School. Здесь вы можете управлять курсами, отслеживать прогресс, настраивать аккаунт и получать персональные рекомендации.",
  keywords: [
    "Onay School",
    "профиль пользователя",
    "личный кабинет",
    "управление курсами",
    "прогресс обучения",
    "LMS Onay School",
    "система управления обучением",
    "онлайн обучение",
    "академический профиль",
  ],
  authors: [{ name: "Команда Onay School", url: "https://onayschool.kz" }],
  creator: "Onay School",
  publisher: "Onay School",
  metadataBase: new URL("https://onayschool.kz"),
  alternates: {
    canonical: "https://onayschool.kz/profile",
    languages: {
      ru: "https://onayschool.kz/ru/profile",
      en: "https://onayschool.kz/en/profile",
    },
  },
  openGraph: {
    title: "Профиль | Onay School — Система управления обучением",
    description:
      "Управляйте своими курсами, настройками и результатами обучения в профиле Onay School.",
    url: "https://onayschool.kz/profile",
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
    title: "Профиль | Onay School — Система управления обучением",
    description:
      "Просматривайте и настраивайте свой профиль на платформе Onay School. Доступ к курсам, прогрессу и личной информации.",
    site: "@onayschool",
    images: ["https://onayschool.kz/image/logo/icon.png"],
  },
  // Опционально: запретить индексацию страницы профиля
  robots: {
    index: false,
    follow: false,
  },
};

const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 mt-16">{children}</main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default ProfileLayout;
