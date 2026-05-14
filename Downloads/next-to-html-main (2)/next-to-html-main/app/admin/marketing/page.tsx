"use client";

import { DashboardLayout } from "@/components/admin/dashboard-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function MarketingPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Marketing</h1>
          <p className="text-gray-600 mt-1">
            Campaign management and email exports
          </p>
        </div>

        <Card>
          <CardHeader className="bg-gray-50 border-b">
            <CardTitle>Campaign</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-6 max-w-2xl">
              <div className="flex items-center gap-4">
                <label className="text-sm font-medium text-gray-700 whitespace-nowrap">
                  Enter Campaign ID to export :
                </label>
                <Input type="text" className="max-w-xs" />
                <Button className="bg-gray-700 hover:bg-gray-800">
                  Export
                </Button>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t">
                <label className="text-sm font-medium text-gray-700 whitespace-nowrap">
                  Export un-subscribed email ids
                </label>
                <Button className="bg-gray-700 hover:bg-gray-800">
                  Export
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
