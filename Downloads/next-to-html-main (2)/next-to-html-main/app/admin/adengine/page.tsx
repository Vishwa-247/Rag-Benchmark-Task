"use client";

import { DashboardLayout } from "@/components/admin/dashboard-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

export default function AdEnginePage() {
  const [activeTab, setActiveTab] = useState("campaigns-business");
  const [activeSubTab, setActiveSubTab] = useState("targets");

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">AdEngine</h1>
          <p className="text-gray-600 mt-1">
            Manage advertising campaigns and targets
          </p>
        </div>

        <div className="flex gap-2 flex-wrap">
          <Button
            variant={activeTab === "campaigns-business" ? "default" : "outline"}
            onClick={() => setActiveTab("campaigns-business")}
            className={activeTab === "campaigns-business" ? "bg-primary" : ""}
          >
            Campaigns By Business
          </Button>
          <Button
            variant={activeTab === "campaigns-name" ? "default" : "outline"}
            onClick={() => setActiveTab("campaigns-name")}
            className={activeTab === "campaigns-name" ? "bg-primary" : ""}
          >
            Campaigns By Name
          </Button>
          <Button
            variant={activeTab === "business-dir" ? "default" : "outline"}
            onClick={() => setActiveTab("business-dir")}
            className={activeTab === "business-dir" ? "bg-primary" : ""}
          >
            Business Dir
          </Button>
        </div>

        {activeTab === "campaigns-business" && (
          <Card>
            <CardHeader className="bg-gray-50 border-b">
              <CardTitle>Ad Campaigns By Business</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div className="bg-green-100 border border-green-300 rounded p-4">
                  <h3 className="font-semibold mb-2">
                    Business List (select a business to view it&apos;s campaign)
                  </h3>
                  <select className="border rounded px-3 py-2 w-full" size={10}>
                    <option></option>
                  </select>
                </div>

                <div className="bg-green-100 border border-green-300 rounded p-4">
                  <h3 className="font-semibold mb-2">
                    Campaign List For Selected Business
                  </h3>
                  <select
                    className="border rounded px-3 py-2 w-full mb-4"
                    size={10}
                  >
                    <option></option>
                  </select>
                  <Button variant="outline" size="sm">
                    Edit / View
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {activeTab === "campaigns-name" && (
          <Card>
            <CardHeader className="bg-gray-50 border-b">
              <div className="flex items-center justify-between">
                <CardTitle>Ad Campaigns By Name</CardTitle>
                <div className="flex gap-2 flex-wrap">
                  <Button
                    variant={activeSubTab === "targets" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActiveSubTab("targets")}
                    className={
                      activeSubTab === "targets"
                        ? "bg-primary text-xs"
                        : "text-xs"
                    }
                  >
                    Targets
                  </Button>
                  <Button
                    variant={
                      activeSubTab === "campaigns-business-sub"
                        ? "default"
                        : "outline"
                    }
                    size="sm"
                    onClick={() => setActiveSubTab("campaigns-business-sub")}
                    className={
                      activeSubTab === "campaigns-business-sub"
                        ? "bg-primary text-xs"
                        : "text-xs"
                    }
                  >
                    Campaigns By Business
                  </Button>
                  <Button
                    variant={
                      activeSubTab === "campaigns-name-sub"
                        ? "default"
                        : "outline"
                    }
                    size="sm"
                    onClick={() => setActiveSubTab("campaigns-name-sub")}
                    className={
                      activeSubTab === "campaigns-name-sub"
                        ? "bg-primary text-xs"
                        : "text-xs"
                    }
                  >
                    Campaigns By Name
                  </Button>
                  <Button
                    variant={
                      activeSubTab === "pending-campaigns"
                        ? "default"
                        : "outline"
                    }
                    size="sm"
                    onClick={() => setActiveSubTab("pending-campaigns")}
                    className={
                      activeSubTab === "pending-campaigns"
                        ? "bg-primary text-xs"
                        : "text-xs"
                    }
                  >
                    Pending Campaigns
                  </Button>
                  <Button
                    variant={
                      activeSubTab === "new-campaign" ? "default" : "outline"
                    }
                    size="sm"
                    onClick={() => setActiveSubTab("new-campaign")}
                    className={
                      activeSubTab === "new-campaign"
                        ? "bg-primary text-xs"
                        : "text-xs"
                    }
                  >
                    New Campaign
                  </Button>
                  <Button
                    variant={
                      activeSubTab === "target-groups" ? "default" : "outline"
                    }
                    size="sm"
                    onClick={() => setActiveSubTab("target-groups")}
                    className={
                      activeSubTab === "target-groups"
                        ? "bg-primary text-xs"
                        : "text-xs"
                    }
                  >
                    Target Groups
                  </Button>
                  <Button
                    variant={
                      activeSubTab === "new-target-group"
                        ? "default"
                        : "outline"
                    }
                    size="sm"
                    onClick={() => setActiveSubTab("new-target-group")}
                    className={
                      activeSubTab === "new-target-group"
                        ? "bg-primary text-xs"
                        : "text-xs"
                    }
                  >
                    New Target Group
                  </Button>
                  <Button
                    variant={
                      activeSubTab === "targets-by-group"
                        ? "default"
                        : "outline"
                    }
                    size="sm"
                    onClick={() => setActiveSubTab("targets-by-group")}
                    className={
                      activeSubTab === "targets-by-group"
                        ? "bg-primary text-xs"
                        : "text-xs"
                    }
                  >
                    Targets By Group
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              {activeSubTab === "targets" && (
                <div className="space-y-6">
                  <div className="bg-green-100 border border-green-300 rounded p-4">
                    <h3 className="font-semibold mb-2">Target List</h3>
                    <select
                      className="border rounded px-3 py-2 w-full"
                      size={8}
                    >
                      <option></option>
                    </select>
                  </div>

                  <div className="bg-green-100 border border-green-300 rounded p-4">
                    <h3 className="font-semibold mb-4">Target Details</h3>
                    <p className="text-sm text-red-600 mb-4">
                      Target names must be unique.
                    </p>

                    <div className="space-y-4 max-w-3xl">
                      <div className="grid grid-cols-[200px_1fr] gap-4 items-center">
                        <label className="text-sm">Name</label>
                        <Input type="text" />
                      </div>

                      <div className="grid grid-cols-[200px_1fr] gap-4 items-start">
                        <label className="text-sm pt-2">Target Group</label>
                        <Textarea rows={5} />
                      </div>

                      <div className="grid grid-cols-[200px_1fr] gap-4 items-center">
                        <label className="text-sm">Is Vertical</label>
                        <div>
                          <Checkbox />
                          <p className="text-xs text-red-600 mt-1">
                            check this option if campaigns are displayed
                            vertically
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-[200px_1fr] gap-4 items-center">
                        <label className="text-sm">Num. Of Children</label>
                        <div>
                          <Input
                            type="text"
                            defaultValue="0"
                            className="max-w-xs"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-[200px_1fr] gap-4 items-center">
                        <label className="text-sm">Height</label>
                        <div>
                          <Input
                            type="text"
                            defaultValue="0"
                            className="max-w-xs"
                          />
                          <p className="text-xs text-red-600 mt-1">
                            Enter 0 if this target is in horizontal with fixed
                            height campaigns
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-[200px_1fr] gap-4 items-center">
                        <label className="text-sm">Width</label>
                        <div>
                          <Input
                            type="text"
                            defaultValue="0"
                            className="max-w-xs"
                          />
                          <p className="text-xs text-red-600 mt-1">
                            Enter 0 if this target is vertical with fixed width
                            campaigns
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-[200px_1fr] gap-4 items-center">
                        <label className="text-sm">Ad Maximum Height</label>
                        <Input
                          type="text"
                          defaultValue="0"
                          className="max-w-xs"
                        />
                      </div>

                      <div className="grid grid-cols-[200px_1fr] gap-4 items-center">
                        <label className="text-sm">Ad Maximum width</label>
                        <Input
                          type="text"
                          defaultValue="0"
                          className="max-w-xs"
                        />
                      </div>

                      <div className="grid grid-cols-[200px_1fr] gap-4 items-center">
                        <label className="text-sm">Valid Banner Types</label>
                        <div>
                          <p className="text-xs text-red-600">
                            Enter valid image extensions as comma separated
                            without empty, gif.swf,jpg
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-[200px_1fr] gap-4 items-center">
                        <label className="text-sm">Is Private Inventory</label>
                        <div>
                          <Checkbox />
                          <p className="text-xs text-red-600 mt-1">
                            Check this if this target is private for this site
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-[200px_1fr] gap-4 items-start">
                        <label className="text-sm pt-2">
                          Target Price Click Mode
                        </label>
                        <div className="space-y-2">
                          <Textarea rows={3} />
                          <div className="flex gap-2">
                            <Input
                              type="text"
                              placeholder="Quantity"
                              className="w-32"
                            />
                            <Input
                              type="text"
                              placeholder="Price"
                              className="w-32"
                            />
                            <Button size="sm" variant="outline">
                              New
                            </Button>
                            <Button size="sm" variant="outline">
                              Edit
                            </Button>
                            <Button size="sm" variant="outline">
                              Delete
                            </Button>
                          </div>
                          <p className="text-xs text-red-600">
                            Enter Price for this Target regarding Click Mode/De
                            (Qty)
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-[200px_1fr] gap-4 items-start">
                        <label className="text-sm pt-2">
                          Target Price View Mode
                        </label>
                        <div className="space-y-2">
                          <Textarea rows={3} />
                          <div className="flex gap-2">
                            <Input
                              type="text"
                              placeholder="Quantity"
                              className="w-32"
                            />
                            <Input
                              type="text"
                              placeholder="Price"
                              className="w-32"
                            />
                            <Button size="sm" variant="outline">
                              New
                            </Button>
                            <Button size="sm" variant="outline">
                              Edit
                            </Button>
                            <Button size="sm" variant="outline">
                              Delete
                            </Button>
                          </div>
                          <p className="text-xs text-red-600">
                            Enter Price for this Target regarding View Mode/De
                            (Qty)
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-[200px_1fr] gap-4 items-center">
                        <label className="text-sm">Style (CSS)</label>
                        <Input type="text" />
                      </div>

                      <div className="grid grid-cols-[200px_1fr] gap-4 items-start">
                        <label className="text-sm pt-2">Campaigns</label>
                        <div>
                          <p className="text-xs mb-2">
                            (Select Campaign List Active Only)
                          </p>
                          <div className="grid grid-cols-2 gap-4">
                            <Textarea rows={10} />
                            <Textarea
                              rows={10}
                              placeholder="Assigned Campaigns..."
                            />
                          </div>
                          <p className="text-xs text-red-600 mt-2">
                            * = added by adsGoogleApt
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-[200px_1fr] gap-4 items-center">
                        <label className="text-sm">Active</label>
                        <div>
                          <Checkbox />
                          <p className="text-xs text-red-600 mt-1">
                            Check this to activate this target
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-[200px_1fr] gap-4 items-center">
                        <label className="text-sm">Code In Website</label>
                        <Textarea rows={2} readOnly />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeSubTab === "new-campaign" && (
                <div className="space-y-6">
                  <div className="bg-green-100 border border-green-300 rounded p-4">
                    <h3 className="font-semibold mb-4">Campaign Details</h3>
                    <p className="text-sm text-red-600 mb-4">
                      Every campaign must belong to one and only one business.
                    </p>

                    <div className="space-y-4 max-w-3xl">
                      <div className="grid grid-cols-[200px_1fr] gap-4 items-center">
                        <label className="text-sm">Campaign ID</label>
                        <Input type="text" />
                      </div>

                      <div className="grid grid-cols-[200px_1fr] gap-4 items-center">
                        <label className="text-sm">Name</label>
                        <Input type="text" />
                      </div>

                      <div className="grid grid-cols-[200px_1fr] gap-4 items-center">
                        <label className="text-sm">Business</label>
                        <select className="border rounded px-3 py-2">
                          <option>-----select one-----</option>
                        </select>
                      </div>

                      <div className="grid grid-cols-[200px_1fr] gap-4 items-start">
                        <label className="text-sm pt-2">Target</label>
                        <div>
                          <select
                            className="border rounded px-3 py-2 w-full"
                            size={5}
                          >
                            <option></option>
                          </select>
                          <p className="text-xs text-red-600 mt-1">
                            Hold select a Target from the above list of Targets.
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-[200px_1fr] gap-4 items-start">
                        <label className="text-sm pt-2">Banner</label>
                        <div>
                          <p className="text-sm text-red-600 mb-2">
                            Please select a Target from the above list of
                            targets.
                          </p>
                          <input type="file" />
                        </div>
                      </div>

                      <div className="grid grid-cols-[200px_1fr] gap-4 items-start">
                        <label className="text-sm pt-2">Preview</label>
                        <div className="border rounded p-4 bg-white min-h-32">
                          {/* Preview area */}
                        </div>
                      </div>

                      <div className="grid grid-cols-[200px_1fr] gap-4 items-center">
                        <label className="text-sm">Web URL</label>
                        <div>
                          <Input type="text" />
                          <p className="text-xs text-red-600 mt-1">
                            Enter the URL to go to when viewers click on this
                            banner.
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-[200px_1fr] gap-4 items-center">
                        <label className="text-sm">Do Not Track</label>
                        <div>
                          <Checkbox />
                          <p className="text-xs text-red-600 mt-1">
                            Check this to prevent tracking of this ad
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-[200px_1fr] gap-4 items-center">
                        <label className="text-sm">Mode</label>
                        <div>
                          <select className="border rounded px-3 py-2">
                            <option>-----select one-----</option>
                          </select>
                          <p className="text-xs text-red-600 mt-1">
                            View Mode : You must enter max views
                          </p>
                          <p className="text-xs text-red-600">
                            Click Mode : You must enter max clicks
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-[200px_1fr] gap-4 items-center">
                        <label className="text-sm">Current Clicks</label>
                        <div className="flex gap-2 items-center">
                          <Input
                            type="text"
                            defaultValue="0"
                            className="w-32"
                          />
                          <Button size="sm" variant="outline">
                            Reset
                          </Button>
                        </div>
                      </div>

                      <div className="grid grid-cols-[200px_1fr] gap-4 items-start">
                        <label className="text-sm pt-2">
                          Click Mode Pricing
                        </label>
                        <Textarea rows={3} />
                      </div>

                      <div className="grid grid-cols-[200px_1fr] gap-4 items-center">
                        <label className="text-sm">Current Views</label>
                        <div className="flex gap-2 items-center">
                          <Input
                            type="text"
                            defaultValue="0"
                            className="w-32"
                          />
                          <Button size="sm" variant="outline">
                            Reset
                          </Button>
                        </div>
                      </div>

                      <div className="grid grid-cols-[200px_1fr] gap-4 items-start">
                        <label className="text-sm pt-2">
                          View Mode Pricing
                        </label>
                        <Textarea rows={3} />
                      </div>

                      <div className="grid grid-cols-[200px_1fr] gap-4 items-center">
                        <label className="text-sm">Start Date</label>
                        <div className="flex gap-2">
                          <Input type="text" className="max-w-xs" />
                          <Button size="sm" variant="outline">
                            Calendar
                          </Button>
                          <span className="text-xs text-gray-500">
                            (YYYY-MM-DD)
                          </span>
                        </div>
                      </div>

                      <div className="grid grid-cols-[200px_1fr] gap-4 items-center">
                        <label className="text-sm">Campaign Status</label>
                        <select className="border rounded px-3 py-2 max-w-xs">
                          <option>----select one----</option>
                        </select>
                      </div>

                      <div className="grid grid-cols-[200px_1fr] gap-4 items-center">
                        <label className="text-sm">Active</label>
                        <div>
                          <Checkbox />
                          <p className="text-xs text-red-600 mt-1">
                            Check this to activate this campaign
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-[200px_1fr] gap-4 items-start">
                        <label className="text-sm pt-2">
                          Reviewers Comment
                        </label>
                        <Textarea rows={3} />
                      </div>

                      <div className="grid grid-cols-[200px_1fr] gap-4 items-start">
                        <label className="text-sm pt-2">
                          Send Email Updates
                        </label>
                        <div>
                          <Checkbox />
                          <p className="text-xs text-red-600 mt-1">
                            Check this to send email confirmation to customer
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Button className="bg-gray-700 hover:bg-gray-800">
                          Save
                        </Button>
                        <Button variant="outline">New</Button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeSubTab === "target-groups" && (
                <div className="space-y-6">
                  <div className="bg-green-100 border border-green-300 rounded p-4">
                    <h3 className="font-semibold mb-4">Target Groups</h3>

                    <div className="space-y-4 max-w-2xl">
                      <div className="grid grid-cols-[200px_1fr] gap-4 items-center">
                        <label className="text-sm">Target GroupName</label>
                        <Input type="text" />
                      </div>

                      <div className="grid grid-cols-[200px_1fr] gap-4 items-center">
                        <label className="text-sm">Parent</label>
                        <select className="border rounded px-3 py-2">
                          <option>---Select Parent---</option>
                        </select>
                      </div>

                      <div className="grid grid-cols-[200px_1fr] gap-4 items-center">
                        <label className="text-sm">Is Active</label>
                        <Checkbox />
                      </div>

                      <div className="flex gap-2">
                        <Button className="bg-gray-700 hover:bg-gray-800">
                          Save
                        </Button>
                        <Button variant="outline">New</Button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeSubTab === "targets-by-group" && (
                <div className="space-y-6">
                  <div className="bg-green-100 border border-green-300 rounded p-4">
                    <h3 className="font-semibold mb-2">
                      Parent TargetGroup List
                    </h3>
                    <select
                      className="border rounded px-3 py-2 w-full mb-4"
                      size={8}
                    >
                      <option></option>
                    </select>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Edit Parent Details
                      </Button>
                      <Button variant="outline" size="sm">
                        Show Child Groups
                      </Button>
                    </div>
                  </div>

                  <div className="bg-green-100 border border-green-300 rounded p-4">
                    <h3 className="font-semibold mb-2">
                      Child TargetGroup List
                    </h3>
                    <select
                      className="border rounded px-3 py-2 w-full mb-4"
                      size={8}
                    >
                      <option></option>
                    </select>
                    <Button variant="outline" size="sm">
                      Edit Child Details
                    </Button>
                  </div>
                </div>
              )}

              {activeSubTab === "campaigns-name-sub" && (
                <div className="bg-red-50 border border-red-200 rounded p-4">
                  <p className="text-sm text-red-600 mb-4">
                    * Please select one of the Campaigns Status type.
                  </p>
                  <div className="space-y-4">
                    <div className="grid grid-cols-[200px_1fr] gap-4 items-center">
                      <label className="text-sm">Campaign Status</label>
                      <select className="border rounded px-3 py-2 max-w-xs">
                        <option>---Select One---</option>
                      </select>
                    </div>

                    <div className="bg-green-100 border border-green-300 rounded p-4">
                      <h3 className="font-semibold mb-2">Campaign List</h3>
                      <select
                        className="border rounded px-3 py-2 w-full mb-4"
                        size={8}
                      >
                        <option></option>
                      </select>
                      <Button variant="outline" size="sm">
                        Edit / View
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {activeTab === "business-dir" && (
          <Card>
            <CardHeader className="bg-gray-50 border-b">
              <div className="flex items-center justify-between">
                <CardTitle>Business Directory</CardTitle>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setActiveTab("business-list")}
                  >
                    Categories
                  </Button>
                  <Button variant="outline" size="sm">
                    Listings
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div className="bg-green-100 border border-green-300 rounded p-4">
                  <h3 className="font-semibold mb-2">Business Category</h3>
                  <select className="border rounded px-3 py-2 w-full" size={10}>
                    <option></option>
                  </select>
                </div>

                <div className="bg-green-100 border border-green-300 rounded p-4">
                  <h3 className="font-semibold mb-4">Information</h3>
                  <p className="text-sm text-red-600 mb-4">
                    All business must fall under a category. For a category and
                    its business&apos; to appear on the website, you must check
                    &quot;Active&quot; field.
                  </p>

                  <div className="space-y-4 max-w-2xl">
                    <div className="grid grid-cols-[200px_1fr] gap-4 items-center">
                      <label className="text-sm">Name</label>
                      <Input type="text" />
                    </div>

                    <div className="grid grid-cols-[200px_1fr] gap-4 items-center">
                      <label className="text-sm">Is Active</label>
                      <Checkbox />
                    </div>

                    <div className="flex gap-2">
                      <Button className="bg-gray-700 hover:bg-gray-800">
                        Save
                      </Button>
                      <Button variant="outline">Delete</Button>
                      <Button variant="outline">New</Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {activeTab === "business-list" && (
          <Card>
            <CardHeader className="bg-gray-50 border-b">
              <div className="flex items-center justify-between">
                <CardTitle>Business Directory List</CardTitle>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    Categories
                  </Button>
                  <Button variant="outline" size="sm">
                    Listings
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div className="bg-green-100 border border-green-300 rounded p-4">
                  <h3 className="font-semibold mb-2">Business List</h3>
                  <select className="border rounded px-3 py-2 w-full" size={10}>
                    <option></option>
                  </select>
                </div>

                <div className="bg-green-100 border border-green-300 rounded p-4">
                  <h3 className="font-semibold mb-4">Information</h3>
                  <p className="text-sm text-red-600 mb-4">
                    All business must fall under a category
                  </p>

                  <div className="space-y-4 max-w-3xl">
                    <div className="grid grid-cols-[200px_1fr] gap-4 items-center">
                      <label className="text-sm">Official Business Name</label>
                      <Input type="text" />
                    </div>

                    <div className="grid grid-cols-[200px_1fr] gap-4 items-center">
                      <label className="text-sm">Business Category</label>
                      <select className="border rounded px-3 py-2">
                        <option>---Select One---</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-[200px_1fr] gap-4 items-start">
                      <label className="text-sm pt-2">Tagline / Profile</label>
                      <div>
                        <Input
                          type="text"
                          className="mb-2"
                          placeholder="Limit 150 characters"
                        />
                        <p className="text-xs text-red-600">
                          Limit 150 characters
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-[200px_1fr] gap-4 items-start">
                      <label className="text-sm pt-2">
                        Business Description
                      </label>
                      <div>
                        <Textarea rows={6} />
                        <p className="text-xs text-red-600">
                          Limit 500 characters
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-[200px_1fr] gap-4 items-center">
                      <label className="text-sm">Street1</label>
                      <Input type="text" />
                    </div>

                    <div className="grid grid-cols-[200px_1fr] gap-4 items-center">
                      <label className="text-sm">Street2</label>
                      <Input type="text" />
                    </div>

                    <div className="grid grid-cols-[200px_1fr] gap-4 items-center">
                      <label className="text-sm">District</label>
                      <Input type="text" />
                    </div>

                    <div className="grid grid-cols-[200px_1fr] gap-4 items-center">
                      <label className="text-sm">City</label>
                      <Input type="text" />
                    </div>

                    <div className="grid grid-cols-[200px_1fr] gap-4 items-center">
                      <label className="text-sm">Country</label>
                      <select className="border rounded px-3 py-2">
                        <option>India</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-[200px_1fr] gap-4 items-center">
                      <label className="text-sm">State</label>
                      <select className="border rounded px-3 py-2">
                        <option>---Select from list---</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-[200px_1fr] gap-4 items-center">
                      <label className="text-sm">Pin Code</label>
                      <Input type="text" />
                    </div>

                    <div className="grid grid-cols-[200px_1fr] gap-4 items-center">
                      <label className="text-sm">Show Map</label>
                      <div>
                        <Checkbox />
                        <p className="text-xs text-red-600 mt-1">
                          Check this box if you want to display Google Maps for
                          this location. For a Google Map to display online the
                          address entered above is correct
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-[200px_1fr] gap-4 items-center">
                      <label className="text-sm">Mobile Phone Number</label>
                      <div>
                        <Input
                          type="text"
                          placeholder="If in Canada, enter format (xxx) xxxx-xxxxxx"
                        />
                        <p className="text-xs text-red-600 mt-1">
                          If in Canada, enter format (xxx) xxxx-xxxxxx
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-[200px_1fr] gap-4 items-center">
                      <label className="text-sm">Land Line Phone Number</label>
                      <div>
                        <Input
                          type="text"
                          placeholder="If in Canada, enter format (xxx) xxxx-xxxxxx"
                        />
                        <p className="text-xs text-red-600 mt-1">
                          If in Canada, enter format (xxx) xxxx-xxxxxx
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-[200px_1fr] gap-4 items-center">
                      <label className="text-sm">Fax</label>
                      <div>
                        <Input
                          type="text"
                          placeholder="If in Canada, enter format (xxx) xxxx-xxxxxx"
                        />
                        <p className="text-xs text-red-600 mt-1">
                          If in Canada, enter format (xxx) xxxx-xxxxxx
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-[200px_1fr] gap-4 items-center">
                      <label className="text-sm">Website</label>
                      <div>
                        <Input type="text" />
                        <p className="text-xs text-red-600 mt-1">
                          Leave it is field ONLY if you do not want to for the
                          website
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-[200px_1fr] gap-4 items-center">
                      <label className="text-sm">Email</label>
                      <div>
                        <Input type="email" />
                        <p className="text-xs text-red-600 mt-1">
                          Leave it is field ONLY if you do not want to for the
                          website
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-[200px_1fr] gap-4 items-center">
                      <label className="text-sm">Listing Start Date</label>
                      <div className="flex gap-2">
                        <Input type="text" className="max-w-xs" />
                        <Button size="sm" variant="outline">
                          Calendar
                        </Button>
                        <span className="text-xs text-gray-500">
                          (YYYY-MM-DD)
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-[200px_1fr] gap-4 items-center">
                      <label className="text-sm">Listing End Date</label>
                      <div className="flex gap-2">
                        <Input type="text" className="max-w-xs" />
                        <Button size="sm" variant="outline">
                          Calendar
                        </Button>
                        <span className="text-xs text-gray-500">
                          (YYYY-MM-DD)
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-[200px_1fr] gap-4 items-start">
                      <label className="text-sm pt-2">Remark Key</label>
                      <div>
                        <Textarea rows={4} />
                        <p className="text-xs text-red-600 mt-1">
                          Limit 300 characters. Enter various new separated
                          comma
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-[200px_1fr] gap-4 items-center">
                      <label className="text-sm">Enable Listing</label>
                      <div>
                        <Checkbox />
                        <p className="text-xs text-red-600 mt-1">
                          Check this box if you want to display the business in
                          the online directory
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button className="bg-gray-700 hover:bg-gray-800">
                        Save
                      </Button>
                      <Button variant="outline">Delete</Button>
                      <Button variant="outline">New</Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </DashboardLayout>
  );
}
