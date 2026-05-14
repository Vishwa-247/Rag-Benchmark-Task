"use client";

import { DashboardLayout } from "@/components/admin/dashboard-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function AdvocatesPage() {
  const [activeTab, setActiveTab] = useState("advocate-new");
  const [selectedApplication, setSelectedApplication] = useState("");

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Advocate Admin</h1>
          <p className="text-gray-600 mt-1">
            Manage advocate and law firm applications
          </p>
        </div>

        <div className="flex gap-2 flex-wrap">
          <Button
            variant={activeTab === "advocate-new" ? "default" : "outline"}
            onClick={() => setActiveTab("advocate-new")}
            className={activeTab === "advocate-new" ? "bg-primary" : ""}
          >
            Advocate Application
          </Button>
          <Button
            variant={activeTab === "firm-new" ? "default" : "outline"}
            onClick={() => setActiveTab("firm-new")}
            className={activeTab === "firm-new" ? "bg-primary" : ""}
          >
            Firm Application
          </Button>
          <Button
            variant={activeTab === "registered" ? "default" : "outline"}
            onClick={() => setActiveTab("registered")}
            className={activeTab === "registered" ? "bg-primary" : ""}
          >
            Registered Advocates
          </Button>
        </div>

        {activeTab === "advocate-new" && (
          <div className="space-y-6">
            <Card>
              <CardHeader className="bg-gray-50 border-b">
                <div className="flex items-center justify-between">
                  <CardTitle>Advocate Application : New</CardTitle>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setActiveTab("advocate-modify")}
                    >
                      Modify Application
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="mb-6">
                  <p className="text-sm text-gray-600">
                    A new advocate application begins by registering the
                    advocate&apos;s name in the system.
                  </p>
                  <p className="text-sm text-gray-600">
                    Once an application is started, the name cannot be changed
                    or updated.
                  </p>
                </div>

                <div className="space-y-4 max-w-2xl">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name <span className="text-red-600">*</span>
                      </label>
                      <Input type="text" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Middle Name
                      </label>
                      <Input type="text" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name / Surname{" "}
                      <span className="text-red-600">*</span>
                    </label>
                    <Input type="text" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Office Phone
                    </label>
                    <div className="flex gap-2">
                      <div className="w-32">
                        <Input type="text" placeholder="STD Code" />
                      </div>
                      <div className="flex-1">
                        <Input type="text" placeholder="Number" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <Input type="email" />
                  </div>

                  <div className="border-t pt-4">
                    <p className="text-sm text-gray-600 mb-3">
                      The following advocate profile have been possible
                      duplicates:
                    </p>
                    <select
                      className="border rounded px-3 py-2 w-full"
                      size={3}
                    >
                      <option></option>
                    </select>
                  </div>

                  <Button className="bg-gray-700 hover:bg-gray-800">
                    Register
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === "advocate-modify" && (
          <div className="space-y-6">
            <Card>
              <CardHeader className="bg-gray-50 border-b">
                <div className="flex items-center justify-between">
                  <CardTitle>Advocate Application : Modify</CardTitle>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setActiveTab("advocate-new")}
                    >
                      New Application
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="mb-6">
                  <p className="text-sm text-gray-600 mb-4">
                    Select an advocate to modify application
                  </p>

                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-green-500 rounded"></div>
                      <span className="text-sm">Live Advocate</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-red-500 rounded"></div>
                      <span className="text-sm">Registered Advocate</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-black rounded"></div>
                      <span className="text-sm">UnRegistered Advocate</span>
                    </div>
                  </div>

                  <select
                    className="border rounded px-3 py-2 w-full mb-4"
                    size={8}
                    value={selectedApplication}
                    onChange={(e) => setSelectedApplication(e.target.value)}
                  >
                    <option></option>
                  </select>

                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      Edit Application
                    </Button>
                    <Button variant="outline" size="sm">
                      Show All
                    </Button>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold mb-4">Search</h3>
                  <div className="space-y-4 max-w-2xl">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          First Name
                        </label>
                        <Input type="text" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Surname
                        </label>
                        <Input type="text" />
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          City
                        </label>
                        <Input type="text" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          State
                        </label>
                        <Input type="text" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Pincode
                        </label>
                        <Input type="text" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Office Phone
                      </label>
                      <div className="flex gap-2">
                        <div className="w-32">
                          <Input type="text" placeholder="STD Code" />
                        </div>
                        <div className="flex-1">
                          <Input type="text" placeholder="Number" />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <Input type="email" />
                    </div>

                    <Button className="bg-gray-700 hover:bg-gray-800">
                      Search
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === "firm-new" && (
          <div className="space-y-6">
            <Card>
              <CardHeader className="bg-gray-50 border-b">
                <div className="flex items-center justify-between">
                  <CardTitle>Law Firm Application : New</CardTitle>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setActiveTab("firm-modify")}
                    >
                      Modify Application
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-sm text-gray-600 mb-6">
                  A new firm application begins by registering the firm&apos;s
                  name in the system.
                </p>

                <div className="space-y-4 max-w-2xl">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Firm Name <span className="text-red-600">*</span>
                    </label>
                    <Input type="text" />
                  </div>

                  <Button className="bg-gray-700 hover:bg-gray-800">
                    Register
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === "firm-modify" && (
          <div className="space-y-6">
            <Card>
              <CardHeader className="bg-gray-50 border-b">
                <div className="flex items-center justify-between">
                  <CardTitle>Law Firm Application : Modify</CardTitle>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setActiveTab("firm-new")}
                    >
                      New Application
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="mb-6">
                  <p className="text-sm text-gray-600 mb-4">
                    Select a firm to modify application
                  </p>

                  <select
                    className="border rounded px-3 py-2 w-full mb-4"
                    size={8}
                  >
                    <option></option>
                  </select>

                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      Edit Application
                    </Button>
                    <Button variant="outline" size="sm">
                      Show All
                    </Button>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold mb-4">Search</h3>
                  <div className="space-y-4 max-w-2xl">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Firmname
                      </label>
                      <Input type="text" />
                    </div>

                    <Button className="bg-gray-700 hover:bg-gray-800">
                      Search
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === "registered" && (
          <div className="space-y-6">
            <Card>
              <CardHeader className="bg-gray-50 border-b">
                <CardTitle>Registered Advocates</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="mb-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-green-500 rounded"></div>
                      <span className="text-sm">Live Advocate</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-red-500 rounded"></div>
                      <span className="text-sm">Registered Advocate</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-black rounded"></div>
                      <span className="text-sm">UnRegistered Advocate</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h3 className="text-sm font-semibold mb-2">
                      Advocate List :
                    </h3>
                    <select
                      className="border rounded px-3 py-2 w-full"
                      size={10}
                    >
                      <option></option>
                    </select>
                  </div>

                  <Button variant="outline" size="sm">
                    Modify Registration
                  </Button>
                </div>

                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold mb-4">Search</h3>
                  <div className="space-y-4 max-w-2xl">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          First Name
                        </label>
                        <Input type="text" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Surname
                        </label>
                        <Input type="text" />
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          City
                        </label>
                        <Input type="text" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          State
                        </label>
                        <Input type="text" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Pincode
                        </label>
                        <Input type="text" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Office Phone
                      </label>
                      <div className="flex gap-2">
                        <div className="w-32">
                          <Input type="text" placeholder="STD Code" />
                        </div>
                        <div className="flex-1">
                          <Input type="text" placeholder="Number" />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <Input type="email" />
                    </div>

                    <div className="flex gap-2">
                      <Button className="bg-gray-700 hover:bg-gray-800">
                        Search
                      </Button>
                      <Button variant="outline">Show All</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
