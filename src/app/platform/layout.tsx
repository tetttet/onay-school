import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Onay School | Вход в систему",
  description:
    "Войдите в систему Onay School, чтобы получить доступ к своей обучающей панели, курсам, прогрессу и персонализированному контенту.",
  keywords: [
    "Onay School",
    "вход Onay School",
    "вход в LMS",
    "система управления обучением",
    "учебная панель",
    "онлайн обучение",
    "вход в аккаунт",
    "вход для студентов",
    "LMS вход",
  ],
  authors: [{ name: "Команда Onay School", url: "https://onayschool.kz" }],
  creator: "Onay School",
  publisher: "Onay School",
  metadataBase: new URL("https://onayschool.kz"),
  alternates: {
    canonical: "https://onayschool.kz/login",
    languages: {
      ru: "https://onayschool.kz/ru/login",
      en: "https://onayschool.kz/en/login",
    },
  },
  openGraph: {
    title: "Вход | Onay School — Система управления обучением",
    description:
      "Авторизуйтесь в системе Onay School, чтобы получить доступ к обучающим материалам, курсам и прогрессу.",
    url: "https://onayschool.kz/login",
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
    title: "Вход | Onay School — Система управления обучением",
    description:
      "Вход в LMS Onay School для студентов. Получите доступ к курсам и персональному кабинету.",
    site: "@onayschool",
    images: ["https://onayschool.kz/image/logo/icon.png"],
  },
   robots: {
    index: false,
    follow: false,
  },
};

const LoginLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <main>{children}</main>
    </ThemeProvider>
  );
};

export default LoginLayout;
