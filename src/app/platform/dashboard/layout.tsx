import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { SidebarMain } from "@/components/Sidebar/SidebarMain";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Onay School | Dashboard",
  description: "Onay School is a platform for learning and teaching.",
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
        <main className="flex-1 h-full overflow-y-auto">{children}</main>
      </div>
    </ThemeProvider>
  );
};

export default DashboardLayout;
