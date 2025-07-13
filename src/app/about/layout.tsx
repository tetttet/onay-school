import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Система управления обучением | Onay School | О нас",
  description:
    "Onay School — это ведущая онлайн-платформа, созданная студентами для студентов. Мы предлагаем подготовку к экзаменам, языковые курсы, поддержку при поступлении за границу и реальные истории успеха.",
  keywords: [
    "Onay School",
    "Система управления обучением",
    "онлайн обучение",
    "подготовка к экзаменам",
    "SAT",
    "IELTS",
    "Work and Travel",
    "Türkiye Bursları",
    "учёба за границей",
    "языковые курсы",
    "образовательная платформа",
    "мотивация студентов",
    "студенты",
    "о нас",
  ],
  authors: [{ name: "Команда Onay School", url: "https://onayschool.kz" }],
  creator: "Onay School",
  publisher: "Onay School",
  metadataBase: new URL("https://onayschool.kz"),
  alternates: {
    canonical: "https://onayschool.kz/about",
    languages: {
      ru: "https://onayschool.kz/ru/about",
      en: "https://onayschool.kz/en/about",
    },
  },
  openGraph: {
    title: "О нас | Onay School — Система управления обучением",
    description:
      "Узнайте больше о платформе Onay School — кто мы, чего мы добиваемся и почему помогаем студентам по всему миру достигать своих целей.",
    url: "https://onayschool.kz/about",
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
    title: "О нас | Onay School — Система управления обучением",
    description:
      "Узнайте, кто стоит за Onay School — образовательной платформой от студентов для студентов.",
    site: "@onayschool",
    images: ["https://onayschool.kz/image/logo/icon.png"],
  },
};

const AboutLayout = ({ children }: { children: React.ReactNode }) => {
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

export default AboutLayout;
