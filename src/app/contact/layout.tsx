import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "Система управления обучением | Onay School | Контакты",
  description:
    "Свяжитесь с командой Onay School — мы готовы помочь вам с любыми вопросами об обучении, курсах, международных программах и поступлении за границу.",
  keywords: [
    "Onay School",
    "Контакты Onay School",
    "Связаться с Onay School",
    "Служба поддержки Onay School",
    "образовательная платформа",
    "поддержка студентов",
    "онлайн образование",
    "SAT",
    "IELTS",
    "Work and Travel",
    "Türkiye Bursları",
    "учёба за границей",
    "связаться",
    "контакты",
  ],
  authors: [{ name: "Команда Onay School", url: "https://onayschool.kz" }],
  creator: "Onay School",
  publisher: "Onay School",
  metadataBase: new URL("https://onayschool.kz"),
  alternates: {
    canonical: "https://onayschool.kz/contact",
    languages: {
      ru: "https://onayschool.kz/ru/contact",
      en: "https://onayschool.kz/en/contact",
    },
  },
  openGraph: {
    title: "Контакты | Onay School — Система управления обучением",
    description:
      "Нужна помощь или есть вопросы? Свяжитесь с нами — команда Onay School всегда рядом, чтобы поддержать вас на пути к образованию.",
    url: "https://onayschool.kz/contact",
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
    title: "Контакты | Onay School — Система управления обучением",
    description:
      "Свяжитесь с Onay School, чтобы получить помощь и ответы на вопросы об обучении и международных возможностях.",
    site: "@onayschool",
    images: ["https://onayschool.kz/image/logo/icon.png"],
  },
};

const ContactLayout = ({ children }: { children: React.ReactNode }) => {
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

export default ContactLayout;
