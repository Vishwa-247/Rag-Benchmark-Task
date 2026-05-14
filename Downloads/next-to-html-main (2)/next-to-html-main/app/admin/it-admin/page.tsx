"use client";

import { DashboardLayout } from "@/components/admin/dashboard-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const mockSessionData = `Array ( [!tmp_ra!tid] => [sessionid] => 70c055965da32bc528ca2dc7f4526247 [operatorid] => 93441282fd60740124945531 [username] => MASTER [!meout] => 3 [permissions] => Array ( [ACCESS_KEY] => X [WEBSITE_TEMPLATE] => * [WEBSITE_USERS] => * [WEBSITE_DIRECTORY_CREATEMEDIA] => * [WEBSITE_TEMPLATE_REGISTERED] => X [WEBSITE_TEMPLATE] => * [WEBSITE_CONTENTS_TEMPLATES] => * [WEBSITE_CONTENTS_PUBLISH] => * [WEBSITE_CONTENTS_LIVEPAGE] => * [WEBSITE_CONTENTS_PREVIEW] => * [WEBSITE_CONTENTS] => * [WEBSITE_CATEGORY_CONTENTS] => * [WEBSITE_CATEGORY_MANAGEFILES] => * [SOCIETY_OPERATIONS] => * [SAWAALJAWAB] => * [OPERATIONS_WIDGETS] => * [OPERATIONS_STATISTICS] => * [OPERATIONS_STATE] => * [OPERATIONS_PRACTICECATEGORY] => * [OPERATIONS_PRACTICEAREA] => * [OPERATIONS_LANGUAGE] => * [OPERATIONS_HELPDESK] => * [OPERATIONS_GLOSSARY] => * [OPERATIONS_ECOMMERCE] => * [OPERATIONS_CITY] => * [OPERATIONS] => * [NEWSLETTER_SENTITEMS] => * [NEWSLETTER_DRAFTS] => * [NEWSLETTER_CATEGORY] => * [NEWSLETTER] => * [MARKETING_CAMPAIGNS] => * [MARKETING] => * [LAWCOLLEGEINFO] => * [LAWCOLLEGE] => * [ITADMINAREA_REGISTERED] => * [CLIENT_PROFILES] => * [CLIENT_CASES] => * [CLIENT] => * [BLOGS_MANAGEPOSTINGS] => * [BLOGS_CATEGORIES] => * [BLOGS] => * [ADVOCATE_REGISTERED] => * [ADVOCATE_FIRM_APPLICATION] => * [ADVOCATE_APPLICATION] => * [ADENGINE_BUSINESSDIR] => * [ADENGINE_ADS] => * [ADENGINE] => * [ADD_REMOVE_SPECIALIZATION] )`;

export default function ITAdminSettingsPage() {
  const [activeTab, setActiveTab] = useState("current-session");

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
          <p className="text-gray-600 mt-1">
            System configuration and information
          </p>
        </div>

        <div className="flex gap-2 flex-wrap">
          <Button
            variant={activeTab === "current-session" ? "default" : "outline"}
            onClick={() => setActiveTab("current-session")}
            className={activeTab === "current-session" ? "bg-primary" : ""}
          >
            Current Session
          </Button>
          <Button
            variant={activeTab === "system-info" ? "default" : "outline"}
            onClick={() => setActiveTab("system-info")}
            className={activeTab === "system-info" ? "bg-primary" : ""}
          >
            System Information
          </Button>
          <Button
            variant={activeTab === "system-variables" ? "default" : "outline"}
            onClick={() => setActiveTab("system-variables")}
            className={activeTab === "system-variables" ? "bg-primary" : ""}
          >
            System Variables
          </Button>
          <Button
            variant={activeTab === "user-variables" ? "default" : "outline"}
            onClick={() => setActiveTab("user-variables")}
            className={activeTab === "user-variables" ? "bg-primary" : ""}
          >
            User Variables
          </Button>
        </div>

        {activeTab === "current-session" && (
          <Card>
            <CardHeader>
              <CardTitle>Current Session</CardTitle>
            </CardHeader>
            <CardContent>
              <Textarea
                value={mockSessionData}
                readOnly
                className="font-mono text-xs h-96 resize-none"
              />
            </CardContent>
          </Card>
        )}

        {activeTab === "system-info" && (
          <Card>
            <CardHeader>
              <CardTitle>System Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Cache Status
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="border rounded-lg p-4">
                    <div className="text-sm text-gray-600">
                      Total files cached
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mt-1">
                      1
                    </div>
                    <Button size="sm" variant="outline" className="mt-3 w-full">
                      Flush Cache
                    </Button>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Disk Space Status
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="border rounded-lg p-4">
                    <div className="text-sm text-gray-600">Maximum Allowed</div>
                    <div className="text-xl font-semibold text-gray-900 mt-1">
                      1
                    </div>
                  </div>
                  <div className="border rounded-lg p-4">
                    <div className="text-sm text-gray-600">Available Space</div>
                    <div className="text-xl font-semibold text-gray-900 mt-1">
                      1
                    </div>
                  </div>
                  <div className="border rounded-lg p-4">
                    <div className="text-sm text-gray-600">Used Space</div>
                    <div className="text-xl font-semibold text-gray-900 mt-1">
                      1
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Database Status
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="border rounded-lg p-4">
                    <div className="text-sm text-gray-600">Maximum Allowed</div>
                    <div className="text-xl font-semibold text-gray-900 mt-1">
                      1
                    </div>
                  </div>
                  <div className="border rounded-lg p-4">
                    <div className="text-sm text-gray-600">Available Space</div>
                    <div className="text-xl font-semibold text-gray-900 mt-1">
                      1
                    </div>
                  </div>
                  <div className="border rounded-lg p-4">
                    <div className="text-sm text-gray-600">Used Space</div>
                    <div className="text-xl font-semibold text-gray-900 mt-1">
                      1
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {activeTab === "system-variables" && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>System Variables List</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="border rounded-lg overflow-hidden">
                  <div className="bg-gray-50 border-b p-3">
                    <select
                      className="border rounded px-3 py-2 w-full max-w-md"
                      size={6}
                    >
                      <option>SYSTEM_DIRECTORY_DELETE_BANNED</option>
                      <option>SYSTEM_DIRECTORY_EDIT_ALLOWED</option>
                      <option>SYSTEM_DIRECTORY_EDIT_BANNED</option>
                      <option>SYSTEM_DIRECTORY_ROOT_ABSOLUTE</option>
                      <option>SYSTEM_DIRECTORY_SEPARATOR</option>
                      <option>SYSTEM_DIRECTORY_TEMPLATE_RELATIVE</option>
                      <option>SYSTEM_DIRECTORY_VIEW_BANNED</option>
                    </select>
                  </div>
                  <div className="p-4 space-y-2">
                    <Button variant="outline" size="sm">
                      New System Variable
                    </Button>
                    <Button variant="outline" size="sm">
                      Delete System Variable
                    </Button>
                    <Button variant="outline" size="sm">
                      List All
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>System Variable Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Variable Name
                    </label>
                    <input
                      type="text"
                      className="border rounded-lg px-3 py-2 w-full"
                      placeholder="variable name should not contain space"
                    />
                    <p className="text-xs text-red-600 mt-1">
                      variable name should not contain space or special
                      characters
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Variable Value
                    </label>
                    <Textarea
                      className="border rounded-lg px-3 py-2 w-full"
                      rows={5}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Variable Description
                    </label>
                    <Textarea
                      className="border rounded-lg px-3 py-2 w-full"
                      rows={5}
                    />
                  </div>

                  <div className="text-sm text-gray-600">
                    <p>Input Date : -NA-</p>
                    <p>Last Modified : -NA- By : -NA-</p>
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
