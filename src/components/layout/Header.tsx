"use client";

import { BookMarkedIcon, Info, Contact, HomeIcon, Menu, X, BookOpen } from "lucide-react";
import Link from "next/link";
import { SearchInput } from "../SearchInput";
import DarkModeToggle from "../DarkModeToggle";
import ShinyText from "../ui/ShinyText";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";

export default function Header() {
  const { theme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex h-18 items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="md:hidden text-foreground"
              >
                <Menu className="w-6 h-6" />
              </button>

              <Link
                href="/"
                prefetch={false}
                className="flex items-center space-x-2 hover:opacity-90 transition-opacity"
              >
                <Image
                  src={
                    theme === "light"
                      ? "/image/logo/logo-blue-removebg.png"
                      : "/image/logo/logo-removebg.png"
                  }
                  alt="Logo"
                  width={400}
                  height={400}
                  className="h-28 w-28 rounded-full"
                />
              </Link>

              <SearchInput />
            </div>

            <div className="flex items-center space-x-2 md:space-x-4">
              <nav className="hidden md:flex items-center space-x-2">
                <Link
                  href="/platform"
                  prefetch={false}
                  className="flex space-x-2 items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors md:border md:border-border md:rounded-md md:px-4 md:py-2"
                >
                  <BookMarkedIcon className="h-4 w-4" />
                  <span className="hidden md:block">
                    <ShinyText text="Платформа" disabled={false} speed={3.5} />
                  </span>
                </Link>
                <Link
                  href="/course/all"
                  prefetch={false}
                  className="flex space-x-2 items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors md:border md:border-border md:rounded-md md:px-4 md:py-2"
                >
                  <BookOpen className="h-4 w-4" />
                  <span className="hidden md:block">
                    <ShinyText text="Все курсы" disabled={false} speed={3.5} />
                  </span>
                </Link>
                <Link
                  href="/about"
                  prefetch={false}
                  className="flex space-x-2 items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors md:border md:border-border md:rounded-md md:px-4 md:py-2"
                >
                  <Info className="h-4 w-4" />
                  <span className="hidden md:block">
                    <ShinyText text="Про Нас" disabled={false} speed={3.5} />
                  </span>
                </Link>
                <Link
                  href="#card-demo"
                  prefetch={false}
                  className="flex space-x-2 items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors md:border md:border-border md:rounded-md md:px-4 md:py-2"
                >
                  <Contact className="h-4 w-4" />
                  <span className="hidden md:block">
                    <ShinyText text="Контакты" disabled={false} speed={3.5} />
                  </span>
                </Link>
              </nav>

              <Link href={"/"}>
                <Button variant="outline" size="icon">
                  <HomeIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <HomeIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                </Button>
              </Link>

              <DarkModeToggle />
            </div>
          </div>
        </div>
      </header>

      {/* затемнение фона при открытом меню */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* мобильное меню */}
      <aside
        className={`fixed top-0 left-0 z-50 h-full w-64 bg-background border-r border-border p-4 transition-transform duration-300 transform ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-6">
          <span className="text-lg font-bold">
            <span className="text-blue-500">Onay</span> School
          </span>
          <button onClick={() => setIsMobileMenuOpen(false)}>
            <X className="w-6 h-6" />
          </button>
        </div>
        <nav className="flex flex-col space-y-4">
          <Link
            href="/platform"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <BookMarkedIcon className="w-4 h-4" />
            Платформа
          </Link>
          <Link
            href="/course/all"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <BookOpen className="w-4 h-4" />
            Все Курсы
          </Link>
          <Link
            href="/about"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <Info className="w-4 h-4" />
            Про Нас
          </Link>
          <Link
            href="#card-demo"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <Contact className="w-4 h-4" />
            Контакты
          </Link>
        </nav>
      </aside>
    </>
  );
}
