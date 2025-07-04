import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Onay School | LMS Login Page",
  description:
    "Onay School is a platform for learning and teaching. Login to access your dashboard.",
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
