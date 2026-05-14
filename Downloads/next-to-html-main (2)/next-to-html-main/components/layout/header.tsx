"use client";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

type AuthenticatedUser = {
  userType?: string;
  isAuthenticated?: boolean;
};

const AUTH_STORAGE_KEY = "user";
const AUTH_EVENT_NAME = "advocatekhoj-auth-change";

const menuItems = [
  { href: "/client-area", label: "Post a Case" },
  { href: "/advocate-area", label: "Join as Advocate" },
  { href: "/law-colleges", label: "Law College" },
  { href: "/sawal-jawab", label: "Sawal Jawab" },
  { href: "/law-library", label: "Law Library" },
];

const loginButtonClasses =
  "bg-gradient-to-r from-[#00377b] to-[#1453a3] hover:from-[#1453a3] hover:to-[#1f64c7] text-white shadow-md border border-[#001944]/80 transition-[background] duration-200";
const registerButtonClasses =
  "bg-[#d67c40] hover:bg-[#c26a36] text-white font-semibold shadow-md border border-[#d67c40]/70 transition-[background] duration-200";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userType, setUserType] = useState<string | null>(null);
  const pathname = usePathname();
  const router = useRouter();

  const dashboardHref = useMemo(() => {
    switch (userType) {
      case "advocate":
        return "/advocate/dashboard";
      case "advertiser":
        return "/advertiser/dashboard";
      default:
        return "/client/dashboard";
    }
  }, [userType]);

  useEffect(() => {
    const readStoredUser = () => {
      if (typeof window === "undefined") return;

      const stored = window.localStorage.getItem(AUTH_STORAGE_KEY);
      if (!stored) {
        setIsAuthenticated(false);
        setUserType(null);
        return;
      }

      try {
        const parsed = JSON.parse(stored) as AuthenticatedUser;
        setIsAuthenticated(Boolean(parsed?.isAuthenticated));
        setUserType(parsed?.userType ?? null);
      } catch {
        setIsAuthenticated(false);
        setUserType(null);
      }
    };

    readStoredUser();

    const handleStorage = (event: StorageEvent) => {
      if (event.key === AUTH_STORAGE_KEY) {
        readStoredUser();
      }
    };

    const handleAuthEvent = () => {
      readStoredUser();
    };

    window.addEventListener("storage", handleStorage);
    window.addEventListener(AUTH_EVENT_NAME, handleAuthEvent);

    return () => {
      window.removeEventListener("storage", handleStorage);
      window.removeEventListener(AUTH_EVENT_NAME, handleAuthEvent);
    };
  }, []);

  const showAuthActions = useMemo(() => {
    if (!pathname) return !isAuthenticated;
    const isDashboardRoute = pathname.includes("/dashboard");
    return !isDashboardRoute && !isAuthenticated;
  }, [isAuthenticated, pathname]);

  const activePath = pathname ?? "";

  const handleLogout = () => {
    if (typeof window === "undefined") return;

    try {
      window.localStorage.removeItem(AUTH_STORAGE_KEY);
      window.dispatchEvent(new Event(AUTH_EVENT_NAME));
    } catch {
      // no-op – if storage fails, just continue navigation
    }

    router.push("/");
  };

  const getNavLinkClasses = (href: string) => {
    const isActive =
      activePath === href ||
      (href !== "/" && activePath.startsWith(`${href}/`));

    return [
      "text-sm font-medium tracking-wide uppercase transition-colors pb-2 border-b-2",
      isActive
        ? "text-[#001944] border-[#f17313]"
        : "text-[#001944] hover:text-[#00377b] border-transparent hover:border-[#1453a3]/60",
    ].join(" ");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#001944]/20 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/90">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center flex-shrink-0">
          <Link
            href="/"
            className="flex items-center hover:opacity-85 transition-opacity"
          >
            <Image
              src="/logo.svg"
              alt="AdvocateKhoj Logo"
              width={140}
              height={80}
              className="h-14 w-auto sm:h-16"
              priority
            />
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-6 relative">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={getNavLinkClasses(item.href)}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {showAuthActions ? (
          <div className="hidden md:flex items-center space-x-3">
            <Button className={loginButtonClasses} asChild>
              <Link href="/login">Log In</Link>
            </Button>
            <Button className={registerButtonClasses} asChild>
              <Link href="/register">Register</Link>
            </Button>
          </div>
        ) : (
          <div className="hidden md:flex items-center space-x-3">
            <Button
              variant="ghost"
              className="text-[#00377b] hover:text-[#001944] hover:bg-[#00377b]/10"
              asChild
            >
              <Link href={dashboardHref}>Go to Dashboard</Link>
            </Button>
          </div>
        )}

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-[#001944]"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          {isMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </Button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t border-[#001944]/10 bg-white/95 backdrop-blur">
          <nav className="container mx-auto px-4 py-4 space-y-3">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-sm font-semibold uppercase tracking-wide text-[#001944] hover:text-[#00377b] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-[#001944]/10 space-y-2">
              {showAuthActions ? (
                <>
                  <Button className={`${loginButtonClasses} w-full`} asChild>
                    <Link href="/login">Log In</Link>
                  </Button>
                  <Button className={`${registerButtonClasses} w-full`} asChild>
                    <Link href="/register">Register</Link>
                  </Button>
                </>
              ) : (
                <Button
                  className="w-full bg-[#00377b] text-white hover:bg-[#1453a3]"
                  asChild
                >
                  <Link href={dashboardHref}>Go to Dashboard</Link>
                </Button>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
