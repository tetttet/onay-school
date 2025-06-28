import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "Onay School | Course",
  keywords: ["Onay School", "Course", "Learning Management System"],
  description: "Onay School Course Page",
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
