"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function RecaptchaComponent() {
  return (
    <Card className="w-full max-w-md border-dashed">
      <CardContent className="p-6 text-center">
        <div className="bg-gray-100 border border-gray-300 rounded p-4">
          <CardTitle className="text-sm font-medium text-gray-600 mb-2">
            Google reCAPTCHA
          </CardTitle>
          <CardDescription className="text-xs text-gray-500">
            reCAPTCHA integration will be implemented here
          </CardDescription>
        </div>
      </CardContent>
    </Card>
  );
}
