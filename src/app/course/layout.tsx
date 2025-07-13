import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "Onay School | Курсы",
  description:
    "Добро пожаловать на страницу курсов Onay School. Здесь вы найдёте актуальные программы по подготовке к SAT, IELTS, языковым курсам и другим международным возможностям.",
  keywords: [
    "Onay School",
    "курсы Onay School",
    "онлайн курсы",
    "SAT",
    "IELTS",
    "языковые курсы",
    "учёба за границей",
    "подготовка к экзаменам",
    "образовательная платформа",
    "онлайн обучение",
  ],
  authors: [{ name: "Команда Onay School", url: "https://onayschool.kz" }],
  creator: "Onay School",
  publisher: "Onay School",
  metadataBase: new URL("https://onayschool.kz"),
  alternates: {
    canonical: "https://onayschool.kz/course",
    languages: {
      ru: "https://onayschool.kz/ru/course",
      en: "https://onayschool.kz/en/course",
    },
  },
  openGraph: {
    title: "Курсы | Onay School — Система управления обучением",
    description:
      "Откройте для себя лучшие онлайн-курсы от Onay School. Подготовка к экзаменам, языковая практика и реальные советы от студентов для студентов.",
    url: "https://onayschool.kz/course",
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
    title: "Курсы | Onay School — Система управления обучением",
    description:
      "Изучайте SAT, IELTS и другие направления вместе с Onay School — курсами, которые помогают поступить за границу и раскрыть потенциал.",
    site: "@onayschool",
    images: ["https://onayschool.kz/image/logo/icon.png"],
  },
};

const AllCoursesLayout = ({ children }: { children: React.ReactNode }) => {
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
      </div>
    </ThemeProvider>
  );
};

export default AllCoursesLayout;
