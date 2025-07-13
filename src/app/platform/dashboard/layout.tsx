import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { SidebarMain } from "@/components/Sidebar/SidebarMain";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  description: "Onay School — это платформа для обучения и преподавания.",
  keywords: [
    "Onay School",
    "Dashboard",
    "панель управления",
    "обучение",
    "онлайн образование",
    "LMS",
  ],
  metadataBase: new URL("https://onayschool.kz"),
  openGraph: {
    title: "Onay School — Панель управления",
    description:
      "Управляйте своим обучением и курсами на платформе Onay School.",
    url: "https://onayschool.kz/platform/dashboard",
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
    title: "Onay School — Панель управления",
    description: "Ваш личный кабинет для обучения и отслеживания прогресса.",
    site: "@onayschool",
    images: ["https://onayschool.kz/image/logo/icon.png"],
  },
  robots: {
    index: false,
    follow: false,
  },
};

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div
        className={cn(
          "flex h-screen w-full flex-col overflow-hidden rounded-md border border-neutral-200 bg-gray-100 md:flex-row dark:border-neutral-700 dark:bg-neutral-800"
        )}
      >
        <SidebarMain />
        <main className="flex-1 h-full overflow-y-auto bg-gradient-to-r from-[#f5f5f5] to-blue-100 dark:from-gray-900 dark:to-black ">
          {children}
        </main>
      </div>
    </ThemeProvider>
  );
};

export default DashboardLayout;
