"use client";

import { LoginForm } from "@/components/auth/login-form";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

function LoginPageContent() {
  const [userType, setUserType] = useState<"client" | "advocate">("client");
  const searchParams = useSearchParams();

  useEffect(() => {
    const urlUserType = searchParams.get("userType");
    if (urlUserType === "advocate" || urlUserType === "client") {
      setUserType(urlUserType);
    }
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20 flex items-center justify-center p-4">
      {/* Close button */}
      <div className="fixed top-4 right-4 z-50">
        <Button variant="ghost" size="sm" asChild>
          <Link href="/" className="flex items-center gap-2">
            <X className="w-4 h-4" />
          </Link>
        </Button>
      </div>

      <div className="w-full max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <Link
            href="/"
            className="inline-block mb-4 hover:opacity-80 transition-opacity"
          >
            <Image
              src="/logo.svg"
              alt="AdvocateKhoj"
              width={120}
              height={60}
              className="h-12 w-auto"
            />
          </Link>
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Welcome Back to AdvocateKhoj
          </h1>
          <p className="text-muted-foreground">Login to access your account</p>
        </div>

        {/* User Type Selection */}
        <div className="flex justify-center mb-8">
          <Tabs
            value={userType}
            onValueChange={(value) => setUserType(value as any)}
            className="w-full max-w-md"
          >
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger
                value="client"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground hover:bg-transparent cursor-pointer"
              >
                Client
              </TabsTrigger>
              <TabsTrigger
                value="advocate"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground hover:bg-transparent cursor-pointer"
              >
                Advocate
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Login Form */}
        <div className="flex justify-center">
          <LoginForm userType={userType} />
        </div>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gradient-to-br from-background to-muted/20 flex items-center justify-center p-4">Loading...</div>}>
      <LoginPageContent />
    </Suspense>
  );
}
