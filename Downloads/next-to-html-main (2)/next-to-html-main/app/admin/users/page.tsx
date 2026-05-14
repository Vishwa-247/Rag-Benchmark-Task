"use client";

import { DashboardLayout } from "@/components/admin/dashboard-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

const mockUsers = [
  "Anoop, Elezebath",
  "Arjj, Jeevan",
  "Boora, Vasu",
  "John, Nitish",
  "Madem, Suresh",
];

export default function UsersPage() {
  const [activeTab, setActiveTab] = useState("user-list");
  const [selectedUser, setSelectedUser] = useState("master");

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Users</h1>
          <p className="text-gray-600 mt-1">Manage system users and access</p>
        </div>

        <div className="flex gap-2 flex-wrap">
          <Button
            variant={activeTab === "user-list" ? "default" : "outline"}
            onClick={() => setActiveTab("user-list")}
            className={activeTab === "user-list" ? "bg-primary" : ""}
          >
            User List
          </Button>
          <Button
            variant={activeTab === "permissions" ? "default" : "outline"}
            onClick={() => setActiveTab("permissions")}
            className={activeTab === "permissions" ? "bg-primary" : ""}
          >
            Permissions
          </Button>
          <Button
            variant={activeTab === "access-key" ? "default" : "outline"}
            onClick={() => setActiveTab("access-key")}
            className={activeTab === "access-key" ? "bg-primary" : ""}
          >
            Access Key
          </Button>
          <Button
            variant={activeTab === "user-groups" ? "default" : "outline"}
            onClick={() => setActiveTab("user-groups")}
            className={activeTab === "user-groups" ? "bg-primary" : ""}
          >
            User Groups
          </Button>
        </div>

        {activeTab === "user-list" && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Current User List</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="border rounded-lg overflow-hidden">
                  <select
                    className="border rounded px-3 py-2 w-full max-w-md"
                    size={6}
                  >
                    {mockUsers.map((user, idx) => (
                      <option key={idx}>{user}</option>
                    ))}
                  </select>
                </div>
                <div className="mt-4 space-x-2">
                  <Button variant="outline" size="sm">
                    New User
                  </Button>
                  <Button variant="outline" size="sm">
                    Delete User
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>User Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name
                      </label>
                      <Input type="text" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        MI
                      </label>
                      <Input type="text" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name
                      </label>
                      <Input type="text" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Username
                      </label>
                      <Input type="text" value={selectedUser} readOnly />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Password
                      </label>
                      <Input type="password" value="••••••••" />
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <Checkbox id="active" />
                      <label htmlFor="active" className="text-sm text-gray-700">
                        Account Active
                      </label>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <Input type="email" className="w-64" />
                    </div>
                  </div>

                  <Button className="bg-gray-700 hover:bg-gray-800">
                    Save
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === "permissions" && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Permission List</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="border rounded-lg overflow-hidden">
                  <select
                    className="border rounded px-3 py-2 w-full max-w-md"
                    size={6}
                  >
                    <option>[D] Delete</option>
                    <option>[A] Add</option>
                    <option>[V] View</option>
                    <option>[*] All</option>
                    <option>[E] Edit</option>
                  </select>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>New Permission</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Permission Code
                    </label>
                    <Input type="text" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Permission Name
                    </label>
                    <Input type="text" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Description
                    </label>
                    <textarea
                      className="border rounded-lg px-3 py-2 w-full"
                      rows={4}
                    />
                  </div>

                  <Button className="bg-gray-700 hover:bg-gray-800">
                    Save
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === "access-key" && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Access Key List</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="border rounded-lg overflow-hidden">
                  <select
                    className="border rounded px-3 py-2 w-full max-w-md"
                    size={8}
                  >
                    <option>ADD_REMOVE_SPECIALIZATION</option>
                    <option>ADENGINE</option>
                    <option>ADENGINE_ADS</option>
                    <option>ADENGINE_BUSINESSDIR</option>
                    <option>ADVOCATE</option>
                    <option>ADVOCATE_APPLICATION</option>
                    <option>ADVOCATE_FIRM_APPLICATION</option>
                    <option>ADVOCATE_REGISTERED</option>
                    <option>BLOGS</option>
                    <option>BLOGS_CATEGORIES</option>
                  </select>
                </div>
                <div className="mt-4">
                  <Button variant="outline" size="sm">
                    Delete Access Key
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>New Access Key</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Key
                    </label>
                    <Input type="text" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Description
                    </label>
                    <Input type="text" />
                  </div>

                  <Button className="bg-gray-700 hover:bg-gray-800">
                    Save
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === "user-groups" && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Group List</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="border rounded-lg overflow-hidden">
                  <select
                    className="border rounded px-3 py-2 w-full max-w-md"
                    size={4}
                  >
                    <option>Administrator</option>
                  </select>
                </div>
                <div className="mt-4 space-x-2">
                  <Button variant="outline" size="sm">
                    New Group
                  </Button>
                  <Button variant="outline" size="sm">
                    Delete Group
                  </Button>
                  <Button variant="outline" size="sm">
                    Group Permissions
                  </Button>
                  <Button variant="outline" size="sm">
                    Group Membership
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Group Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Group Name
                    </label>
                    <Input type="text" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Group Description
                    </label>
                    <Input type="text" />
                  </div>

                  <Button className="bg-gray-700 hover:bg-gray-800">
                    Save
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
