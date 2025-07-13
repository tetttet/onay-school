import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Поиск | Onay School — Система управления обучением",
  description:
    "Найдите нужные курсы на платформе Onay School — от подготовки к SAT и IELTS до языковых программ и международных возможностей.",
  keywords: [
    "Onay School",
    "поиск курсов",
    "найти курс",
    "обучающие курсы",
    "SAT",
    "IELTS",
    "языковые курсы",
    "онлайн обучение",
    "обучающая платформа",
    "система управления обучением",
  ],
  authors: [{ name: "Команда Onay School", url: "https://onayschool.kz" }],
  creator: "Onay School",
  publisher: "Onay School",
  metadataBase: new URL("https://onayschool.kz"),
  alternates: {
    canonical: "https://onayschool.kz/search",
    languages: {
      ru: "https://onayschool.kz/ru/search",
      en: "https://onayschool.kz/en/search",
    },
  },
  openGraph: {
    title: "Поиск курсов | Onay School — Система управления обучением",
    description:
      "Ищите и фильтруйте курсы по категориям, экзаменам и направлениям. Найдите именно то, что нужно вам для роста и развития.",
    url: "https://onayschool.kz/search",
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
    title: "Поиск курсов | Onay School — Система управления обучением",
    description:
      "Находите подходящие курсы на платформе Onay School — быстро, удобно и эффективно.",
    site: "@onayschool",
    images: ["https://onayschool.kz/image/logo/icon.png"],
  },
  // По желанию: если поиск содержит динамические параметры и не должен индексироваться
  robots: {
    index: false,
    follow: true,
  },
};

const SearchLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default SearchLayout;
