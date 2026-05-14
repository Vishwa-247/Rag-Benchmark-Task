"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import {
  Users,
  UserCheck,
  UserCircle,
  TrendingUp,
  Settings,
  FileText,
  GraduationCap,
  Globe,
  Mail,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const menuSections = [
  {
    title: "IT ADMIN AREA",
    items: [{ href: "/admin/it-admin", label: "IT Admin", icon: Settings }],
  },
  {
    title: "ADVOCATE ADMIN",
    items: [
      { href: "/admin/advocates", label: "Advocate Admin", icon: UserCheck },
    ],
  },
  {
    title: "CLIENT",
    items: [{ href: "/admin/clients", label: "Client", icon: UserCircle }],
  },
  {
    title: "MARKETING",
    items: [{ href: "/admin/marketing", label: "Marketing", icon: TrendingUp }],
  },
  {
    title: "OPERATIONS",
    items: [{ href: "/admin/operations", label: "Operations", icon: Settings }],
  },
  {
    title: "ADENGINE",
    items: [{ href: "/admin/adengine", label: "AdEngine", icon: FileText }],
  },
  {
    title: "BLOGS",
    items: [{ href: "/admin/blogs", label: "Blogs", icon: FileText }],
  },
  {
    title: "LAW SCHOOL",
    items: [
      { href: "/admin/law-school", label: "Law School", icon: GraduationCap },
    ],
  },
  {
    title: "WEB SITE",
    items: [{ href: "/admin/website", label: "Web Site", icon: Globe }],
  },
  {
    title: "NEWSLETTER",
    items: [{ href: "/admin/newsletter", label: "Newsletter", icon: Mail }],
  },
];

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("admin");
    localStorage.removeItem("admin_user");
    router.push("/admin");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Bar */}
      <div className="bg-white border-b shadow-sm fixed top-0 left-0 right-0 z-30">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="lg:hidden"
            >
              {isSidebarOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
            <Image
              src="/logo.png"
              alt="AdvocateKhoj"
              width={160}
              height={50}
              className="h-10 w-auto"
            />
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-600 hidden sm:block">
              Admin Portal
            </span>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed top-[57px] left-0 bottom-0 w-64 bg-white border-r shadow-sm transform transition-transform duration-300 z-20 overflow-y-auto ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <div className="p-4">
          <nav className="space-y-6">
            {menuSections.map((section, idx) => (
              <div key={idx}>
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 px-3">
                  {section.title}
                </h3>
                <div className="space-y-1">
                  {section.items.map((item) => {
                    const Icon = item.icon;
                    const isActive = pathname === item.href;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                          isActive
                            ? "bg-primary text-white"
                            : "text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                        {item.label}
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </nav>

          <div className="mt-6 pt-6 border-t">
            <Button
              onClick={handleLogout}
              variant="outline"
              className="w-full justify-start gap-3 text-red-600 hover:text-red-700 hover:bg-red-50 border-red-200"
            >
              <LogOut className="w-4 h-4" />
              LOG OUT
            </Button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main
        className={`pt-[57px] transition-all duration-300 ${
          isSidebarOpen ? "lg:pl-64" : "lg:pl-0"
        }`}
      >
        <div className="p-6">{children}</div>
      </main>

      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-10 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
}
