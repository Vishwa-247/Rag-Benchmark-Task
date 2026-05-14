"use client";

import { DashboardLayout } from "@/components/admin/dashboard-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const mockDrafts = [
  "Weekly Legal Updates - Draft 1",
  "Case Law Digest - November",
  "Important Amendments Notice",
];

const mockCategories = [
  "Corporate Law",
  "Criminal Law",
  "Family Law",
  "Tax Law",
  "Labour Law",
];

const mockSubscriptions = [
  "advocate@example.com",
  "lawyer@example.com",
  "legal@example.com",
];

const mockSentItems = [
  "Monthly Newsletter - November 2025",
  "Breaking Legal News - Supreme Court",
  "Weekly Digest - Oct 2025",
];

export default function NewsletterPage() {
  const [activeTab, setActiveTab] = useState("drafts");
  const [selectedDraft, setSelectedDraft] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSentItem, setSelectedSentItem] = useState("");

  // Draft form state
  const [fromAddress, setFromAddress] = useState("");
  const [toAddresses, setToAddresses] = useState("");
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");

  // Category form state
  const [categoryName, setCategoryName] = useState("");
  const [categoryDescription, setCategoryDescription] = useState("");
  const [webOrder, setWebOrder] = useState("0");
  const [hideDescription, setHideDescription] = useState(false);
  const [categoryActive, setCategoryActive] = useState(false);

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Newsletter</h1>
          <p className="text-gray-600 mt-1">
            Manage newsletter categories, drafts and sent items
          </p>
        </div>

        <div className="flex gap-2 flex-wrap">
          <Button
            variant={activeTab === "category" ? "default" : "outline"}
            onClick={() => setActiveTab("category")}
            className={activeTab === "category" ? "bg-primary" : ""}
          >
            Category
          </Button>
          <Button
            variant={activeTab === "drafts" ? "default" : "outline"}
            onClick={() => setActiveTab("drafts")}
            className={activeTab === "drafts" ? "bg-primary" : ""}
          >
            Drafts
          </Button>
          <Button
            variant={activeTab === "sent" ? "default" : "outline"}
            onClick={() => setActiveTab("sent")}
            className={activeTab === "sent" ? "bg-primary" : ""}
          >
            Sent Items
          </Button>
        </div>

        {activeTab === "drafts" && (
          <Card>
            <CardHeader className="bg-gray-50 border-b">
              <CardTitle className="text-orange-700">
                Newsletter : Draft
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">
                    Saved Newsletters (Drafts):
                  </h3>
                  <p className="text-xs text-red-600 mb-2">
                    Select a newsletter to edit or create new
                  </p>
                  <select
                    className="w-full border rounded px-3 py-2 mb-4"
                    size={5}
                    value={selectedDraft}
                    onChange={(e) => setSelectedDraft(e.target.value)}
                  >
                    {mockDrafts.map((draft, idx) => (
                      <option key={idx} value={draft}>
                        {draft}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-[200px,1fr] gap-4 items-start">
                  <label className="font-semibold">Status</label>
                  <div className="text-red-600 text-sm">-Not Available-</div>

                  <label className="font-semibold">From</label>
                  <select
                    className="border rounded px-3 py-2"
                    value={fromAddress}
                    onChange={(e) => setFromAddress(e.target.value)}
                  >
                    <option>--Select From Address--</option>
                    <option>noreply@advocatekhoj.com</option>
                    <option>info@advocatekhoj.com</option>
                  </select>

                  <label className="font-semibold">To</label>
                  <div>
                    <Textarea
                      value={toAddresses}
                      onChange={(e) => setToAddresses(e.target.value)}
                      rows={3}
                      className="mb-2"
                    />
                    <Button variant="link" className="text-blue-600 p-0 h-auto">
                      view address group
                    </Button>
                  </div>

                  <label className="font-semibold">Subject</label>
                  <Input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />

                  <label className="font-semibold">Content</label>
                  <Textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    rows={8}
                  />
                </div>

                <div className="flex gap-2">
                  <Button className="bg-gray-700 hover:bg-gray-800">
                    Save
                  </Button>
                  <Button className="bg-gray-700 hover:bg-gray-800">
                    Send
                  </Button>
                  <Button variant="outline">Delete</Button>
                  <Button variant="outline" className="ml-auto">
                    New
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {activeTab === "category" && (
          <Card>
            <CardHeader className="bg-gray-50 border-b">
              <CardTitle className="text-orange-700">
                Newsletter : Category
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div className="flex gap-2 mb-4">
                  <Button
                    variant="default"
                    className="bg-blue-700 hover:bg-blue-800"
                  >
                    Category
                  </Button>
                  <Button variant="outline">Subscriptions</Button>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">
                    Current Newsletter Categories :
                  </h3>
                  <p className="text-xs text-red-600 mb-2">
                    The categories are ordered based on WEB ORDER. They will
                    appear in this order on web site.
                  </p>
                  <p className="text-xs text-red-600 mb-4">
                    To change the order in which they appear, edit the Web Order
                    field.
                  </p>
                  <select
                    className="w-full border rounded px-3 py-2 mb-4"
                    size={8}
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    {mockCategories.map((category, idx) => (
                      <option key={idx} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                  <div className="flex gap-2">
                    <Button className="bg-blue-700 hover:bg-blue-800">
                      New Category
                    </Button>
                    <Button variant="outline">Delete Category</Button>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h3 className="font-semibold mb-4">Category :</h3>
                  <div className="grid grid-cols-[200px,1fr] gap-4 items-start max-w-3xl">
                    <label className="font-semibold">Category Name</label>
                    <Input
                      type="text"
                      value={categoryName}
                      onChange={(e) => setCategoryName(e.target.value)}
                    />

                    <label className="font-semibold">Short Description</label>
                    <Textarea
                      value={categoryDescription}
                      onChange={(e) => setCategoryDescription(e.target.value)}
                      rows={4}
                    />

                    <label className="font-semibold">Web Order</label>
                    <Input
                      type="text"
                      value={webOrder}
                      onChange={(e) => setWebOrder(e.target.value)}
                      className="w-32"
                    />

                    <label></label>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={hideDescription}
                          onChange={(e) => setHideDescription(e.target.checked)}
                        />
                        <label className="text-sm">
                          Hide description on web site
                        </label>
                      </div>
                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={categoryActive}
                          onChange={(e) => setCategoryActive(e.target.checked)}
                        />
                        <label className="text-sm">Category Active</label>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Button className="bg-gray-700 hover:bg-gray-800">
                      Create
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {activeTab === "sent" && (
          <Card>
            <CardHeader className="bg-gray-50 border-b">
              <CardTitle className="text-orange-700">
                Newsletter : Sent Items
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">
                    Newsletters (Sent Items):
                  </h3>
                  <select
                    className="w-full border rounded px-3 py-2 mb-4"
                    size={8}
                    value={selectedSentItem}
                    onChange={(e) => setSelectedSentItem(e.target.value)}
                  >
                    {mockSentItems.map((item, idx) => (
                      <option key={idx} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-[200px,1fr] gap-4 items-start">
                  <label className="font-semibold">Status</label>
                  <div className="text-red-600 text-sm">-Not Available-</div>

                  <label className="font-semibold">From</label>
                  <div className="text-sm text-gray-700">
                    noreply@advocatekhoj.com
                  </div>

                  <label className="font-semibold">To</label>
                  <Textarea
                    readOnly
                    value="all-subscribers@advocatekhoj.com"
                    rows={3}
                    className="bg-gray-50"
                  />

                  <label className="font-semibold">Subject</label>
                  <Input
                    type="text"
                    readOnly
                    value="Monthly Legal Updates - November 2025"
                    className="bg-gray-50"
                  />

                  <label className="font-semibold">Content</label>
                  <Textarea
                    readOnly
                    value="Dear Subscriber,

Here are the important legal updates for November 2025..."
                    rows={8}
                    className="bg-gray-50"
                  />
                </div>

                <div>
                  <Button variant="outline">Delete</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </DashboardLayout>
  );
}
