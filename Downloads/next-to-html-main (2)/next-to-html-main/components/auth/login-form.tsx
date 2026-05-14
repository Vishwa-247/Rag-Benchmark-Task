"use client";

import type React from "react";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Eye, EyeOff, Scale, Users, Shield } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface LoginFormProps {
  userType: "client" | "advocate" | "admin";
}

export function LoginForm({ userType }: LoginFormProps) {
  const router = useRouter();
  const { toast } = useToast();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });

  const primaryActionClasses =
    "bg-gradient-to-r from-[#00377b] to-[#1453a3] hover:from-[#1453a3] hover:to-[#1f64c7] text-white shadow-md border border-[#001944]/70 transition-[background] duration-200";
  const AUTH_EVENT_NAME = "advocatekhoj-auth-change";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Mock login - accepts any credentials
    setTimeout(() => {
      // Store mock user data in localStorage
      const mockUser = {
        userType,
        email: formData.email || "demo@example.com",
        username: formData.username || "demo_user",
        name: userType === "advocate" ? "Demo Advocate" : "Demo Client",
        isAuthenticated: true,
        loginTime: new Date().toISOString(),
      };

      localStorage.setItem("user", JSON.stringify(mockUser));
      window.dispatchEvent(new Event(AUTH_EVENT_NAME));

      toast({
        title: "Login Successful! 🎉",
        description: `Welcome back! Redirecting to your ${userType} dashboard...`,
      });

      // Redirect to appropriate dashboard
      setTimeout(() => {
        if (userType === "advocate") {
          router.push("/advocate/dashboard");
        } else if (userType === "client") {
          router.push("/client/dashboard");
        } else {
          router.push("/admin/dashboard");
        }
      }, 1000);
    }, 1000);
  };

  const handleOAuthLogin = (provider: "google" | "facebook") => {
    setIsLoading(true);

    // Mock OAuth login
    setTimeout(() => {
      const mockUser = {
        userType,
        email: `demo@${provider}.com`,
        username: `${provider}_user`,
        name: `${provider.charAt(0).toUpperCase() + provider.slice(1)} User`,
        isAuthenticated: true,
        loginTime: new Date().toISOString(),
        provider,
      };

      localStorage.setItem("user", JSON.stringify(mockUser));
      window.dispatchEvent(new Event(AUTH_EVENT_NAME));

      toast({
        title: "Login Successful! 🎉",
        description: `Logged in with ${provider}. Redirecting...`,
      });

      setTimeout(() => {
        router.push(
          userType === "advocate" ? "/advocate/dashboard" : "/client/dashboard"
        );
      }, 1000);
    }, 1000);
  };

  const getIcon = () => {
    switch (userType) {
      case "client":
        return <Users className="h-6 w-6" />;
      case "advocate":
        return <Scale className="h-6 w-6" />;
      case "admin":
        return <Shield className="h-6 w-6" />;
    }
  };

  const getTitle = () => {
    switch (userType) {
      case "client":
        return "Client Log In";
      case "advocate":
        return "Advocate Log In";
      case "admin":
        return "Admin Log In";
    }
  };

  const getDescription = () => {
    switch (userType) {
      case "client":
        return "Access your legal cases and connect with advocates";
      case "advocate":
        return "Manage your practice and client cases";
      case "admin":
        return "Administrative access to the platform";
    }
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="text-center">
        <div className="flex justify-center mb-4">{getIcon()}</div>
        <CardTitle className="text-2xl font-bold">{getTitle()}</CardTitle>
        <CardDescription>{getDescription()}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor={userType === "advocate" ? "username" : "email"}>
              {userType === "advocate" ? "Username" : "Email Address"}
            </Label>
            <Input
              id={userType === "advocate" ? "username" : "email"}
              type={userType === "advocate" ? "text" : "email"}
              placeholder={
                userType === "advocate"
                  ? "Enter your username"
                  : "Enter your email"
              }
              value={
                userType === "advocate" ? formData.username : formData.email
              }
              onChange={(e) =>
                userType === "advocate"
                  ? setFormData({ ...formData, username: e.target.value })
                  : setFormData({ ...formData, email: e.target.value })
              }
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                required
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>

          <Button
            type="submit"
            className={`w-full ${primaryActionClasses}`}
            disabled={isLoading}
          >
            {isLoading ? "Logging In..." : "Log In"}
          </Button>

          {/* Mock Login Helper */}
          <div className="text-center">
            <p className="text-xs text-muted-foreground bg-blue-50 p-2 rounded">
              💡 Demo Mode: Enter any credentials to log in
            </p>
          </div>
        </form>

        {userType === "client" && (
          <>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator className="w-full" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Button
                variant="outline"
                onClick={() => handleOAuthLogin("google")}
                className="w-full"
              >
                <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                Google
              </Button>
              <Button
                variant="outline"
                onClick={() => handleOAuthLogin("facebook")}
                className="w-full"
              >
                <svg
                  className="mr-2 h-4 w-4"
                  fill="#1877F2"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Facebook
              </Button>
            </div>
          </>
        )}

        <div className="space-y-3">
          <div className="text-center text-sm">
            {userType === "advocate" ? (
              <a href="#" className="text-primary hover:underline">
                Forgot username or password?
              </a>
            ) : (
              <a href="#" className="text-primary hover:underline">
                Forgot your password?
              </a>
            )}
          </div>

          {userType !== "admin" && (
            <div className="text-center text-sm">
              <span className="text-muted-foreground">
                Don't have an account?{" "}
              </span>
              <a href="/register" className="text-primary hover:underline">
                Register here
              </a>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
