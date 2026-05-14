"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  LayoutDashboard,
  User,
  Briefcase,
  MessageSquare,
  CreditCard,
  HelpCircle,
  Bell,
  LogOut,
  Menu,
  X,
  ChevronDown,
  BookOpen,
} from "lucide-react";
import Link from "next/link";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import GlobalTopBanner from "@/components/global/global-top-banner";
import AdBanner from "@/components/home/ad-banner";

interface AdvocateDashboardLayoutProps {
  children: React.ReactNode;
  activeSection: string;
  onSectionChange: (section: string) => void;
  userInfo?: {
    name: string;
    email: string;
    avatar?: string;
    membershipType?: string;
    advocateId?: string;
    status?: string;
  };
}

const navigationItems = [
  {
    id: "overview",
    label: "Dashboard",
    icon: LayoutDashboard,
    description: "Overview and quick actions",
  },
  {
    id: "profile",
    label: "My Profile",
    icon: User,
    description: "Manage your profile and account",
  },
  {
    id: "cases",
    label: "Browse Cases",
    icon: Briefcase,
    description: "Find new legal cases",
    badge: "3",
  },
  {
    id: "messages",
    label: "Messages",
    icon: MessageSquare,
    description: "Communication center",
    badge: "5",
  },
  {
    id: "blogs",
    label: "My Blogs",
    icon: BookOpen,
    description: "Write and manage blogs",
  },
  {
    id: "membership",
    label: "Membership",
    icon: CreditCard,
    description: "Manage subscription",
  },
];

export function AdvocateDashboardLayout({
  children,
  activeSection,
  onSectionChange,
  userInfo = {
    name: "Adv. Rajesh Kumar",
    email: "rajesh.kumar@example.com",
    membershipType: "Premium",
    advocateId: "A393472",
    status: "Live",
  },
}: AdvocateDashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const router = useRouter();

  const currentNavItem = navigationItems.find(
    (item) => item.id === activeSection
  );

  const AUTH_STORAGE_KEY = "user";
  const AUTH_EVENT_NAME = "advocatekhoj-auth-change";
  const handleLogout = () => {
    if (typeof window === "undefined") return;
    try {
      window.localStorage.removeItem(AUTH_STORAGE_KEY);
      window.dispatchEvent(new Event(AUTH_EVENT_NAME));
    } catch {
      // ignore storage errors
    }
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Global Navigation */}
      <Header />
      <GlobalTopBanner
        rotationInterval={8000}
        className="border-b border-[#001944]/20 bg-white"
        placement="top"
      />

      {/* Mobile Header */}
      <div className="lg:hidden flex items-center justify-between p-4 bg-white border-b">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setSidebarOpen(true)}
          className="lg:hidden"
        >
          <Menu className="h-5 w-5" />
        </Button>
        <h1 className="font-semibold text-lg">
          {currentNavItem?.label || "Dashboard"}
        </h1>
        <Button variant="ghost" size="sm">
          <Bell className="h-5 w-5" />
        </Button>
      </div>

      <div className="flex flex-1">
        {/* Sidebar */}
        <div
          className={cn(
            "fixed inset-y-0 left-0 z-50 w-72 bg-white border-r transform transition-transform duration-200 ease-in-out lg:translate-x-0 lg:static lg:inset-0 min-h-screen",
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          {/* Mobile Close Button */}
          <div className="lg:hidden flex items-center justify-end p-4 border-b">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSidebarOpen(false)}
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* User Profile Section */}
          <div className="p-6 border-b lg:pt-6">
            <div className="flex items-center gap-3 mb-4">
              <Avatar className="h-10 w-10">
                <AvatarImage src={userInfo.avatar} />
                <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
                  {userInfo.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .toUpperCase()
                    .slice(0, 2)}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">
                  {userInfo.name}
                </p>
                <p className="text-xs text-gray-500 truncate">
                  {userInfo.email}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {userInfo.membershipType && (
                <Badge variant="secondary" className="text-xs">
                  {userInfo.membershipType} Member
                </Badge>
              )}
              {userInfo.status && (
                <Badge
                  variant="outline"
                  className="text-xs bg-green-50 text-green-700 border-green-200"
                >
                  {userInfo.status}
                </Badge>
              )}
            </div>
          </div>

          {/* Navigation */}
          <nav className="p-4 space-y-2 pb-32">
            {navigationItems.map((item) => (
              <Button
                key={item.id}
                variant={activeSection === item.id ? "default" : "ghost"}
                className={cn(
                  "w-full justify-start h-auto p-4 text-left transition-all duration-200",
                  activeSection === item.id
                    ? "bg-primary text-primary-foreground"
                    : "text-gray-900 hover:translate-x-1 hover:opacity-80"
                )}
                onClick={() => {
                  onSectionChange(item.id);
                  setSidebarOpen(false);
                }}
              >
                <div className="flex items-center gap-3 w-full">
                  <item.icon className="h-5 w-5 shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{item.label}</span>
                      {item.badge && (
                        <Badge
                          variant={
                            activeSection === item.id ? "secondary" : "default"
                          }
                          className={cn(
                            "text-xs ml-2",
                            activeSection === item.id
                              ? "bg-white text-primary"
                              : ""
                          )}
                        >
                          {item.badge}
                        </Badge>
                      )}
                    </div>
                    <p
                      className={cn(
                        "text-xs mt-1",
                        activeSection === item.id
                          ? "text-primary-foreground/80"
                          : "text-gray-500"
                      )}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              </Button>
            ))}
          </nav>

          {/* Help & Support */}
          <div className="absolute bottom-0 left-0 right-0 p-4 border-t bg-gray-50 space-y-1">
            <Button
              variant="ghost"
              className="w-full justify-start text-gray-900 transition-all duration-200 hover:translate-x-1 hover:opacity-80"
              asChild
            >
              <Link href="/contact">
                <HelpCircle className="h-4 w-4 mr-3" />
                Help & Support
              </Link>
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start text-red-600 transition-all duration-200 hover:translate-x-1 hover:opacity-80"
              onClick={handleLogout}
            >
              <LogOut className="h-4 w-4 mr-3" />
              Sign Out
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 lg:ml-0">
          {/* Desktop Header */}
          <div className="hidden lg:flex items-center justify-between p-6 bg-white border-b">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                {currentNavItem?.label || "Dashboard"}
              </h1>
              <p className="text-sm text-gray-500 mt-1">
                {currentNavItem?.description || "Welcome to your dashboard"}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm">
                <Bell className="h-5 w-5" />
              </Button>
              <div className="relative">
                <Button
                  variant="ghost"
                  className="flex items-center gap-2"
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                >
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={userInfo.avatar} />
                    <AvatarFallback className="text-xs bg-primary text-primary-foreground">
                      {userInfo.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .toUpperCase()
                        .slice(0, 2)}
                    </AvatarFallback>
                  </Avatar>
                  <ChevronDown className="h-4 w-4" />
                </Button>
                {userMenuOpen && (
                  <Card className="absolute right-0 top-12 w-48 z-10">
                    <CardContent className="p-2">
                      <Button
                        variant="ghost"
                        className="w-full justify-start text-sm"
                        onClick={() => onSectionChange("profile")}
                      >
                        <User className="h-4 w-4 mr-2" />
                        Profile Settings
                      </Button>
                      <Button
                        variant="ghost"
                        className="w-full justify-start text-sm"
                        onClick={() => onSectionChange("membership")}
                      >
                        <CreditCard className="h-4 w-4 mr-2" />
                        Membership
                      </Button>
                      <Button
                        variant="ghost"
                        className="w-full justify-start text-sm text-red-600"
                        onClick={handleLogout}
                      >
                        <LogOut className="h-4 w-4 mr-2" />
                        Sign Out
                      </Button>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </div>

          {/* Page Content */}
          <div className="p-6">{children}</div>
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Footer Advertisement Banner */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-8">
        <AdBanner size="large" position="bottom" />
      </div>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
