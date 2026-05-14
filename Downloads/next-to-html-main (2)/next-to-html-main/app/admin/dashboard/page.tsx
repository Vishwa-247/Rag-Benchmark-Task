"use client";

import { DashboardLayout } from "@/components/admin/dashboard-layout";

export default function AdminDashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600 mt-1">
            Welcome to AdvocateKhoj Admin Portal
          </p>
        </div>

        <div className="bg-white rounded-lg border p-8 text-center">
          <p className="text-gray-500">
            Select a section from the sidebar to get started
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
}
