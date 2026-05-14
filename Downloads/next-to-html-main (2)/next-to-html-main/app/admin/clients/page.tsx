"use client";

import { DashboardLayout } from "@/components/admin/dashboard-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const mockCases = [
  {
    id: "5626048b00b8646d792058493",
    title: "nEIGHBOUR",
    anonymous: false,
    description:
      "I am staying in 1st floor ( Property is in my mother name aged ) Year , neighbour of 2nd floor is not maintaining his floor due to which roof of my floor is getting damaged regularly and twice in a....",
    postDate: "2021-03-10 11:55:50",
    advocates: [
      { name: "Rakhi Banerjee", lastVisited: "2021-03-10" },
      { name: "Rakhi Banerjee", lastVisited: "2021-03-10" },
      { name: "Anik", lastVisited: "2021-03-10" },
      { name: "Anik", lastVisited: "2021-03-10" },
      { name: "M. P. Siddiqui", lastVisited: "2021-03-11" },
      { name: "Anik", lastVisited: "2021-03-13" },
    ],
    advocatesVisited: 6,
    offersReceived: 1,
    messagesReceived: 2,
  },
  {
    id: "129604770a5555f154305370",
    title: "Anticipatory bail without registration of FIR",
    anonymous: false,
    description:
      "Sir I want to apply for anticipatory bail under section 419, 420, 467, 468 and 471 FIR is not registered till now.please advise me.",
    postDate: "2021-03-09 14:08:45",
    advocates: [],
    advocatesVisited: 5,
    offersReceived: 1,
    messagesReceived: 1,
  },
  {
    id: "3836047385795c8073257086​2",
    title: "I WANT TO DIVORCE MY WIFE",
    anonymous: true,
    description:
      "My Present Address..Jawaharlal Das House no- 2372, Sri Sai Guru Tipperudra Krupa 17th Ward Basavesgwara Nagara, Beside Vijaylaxmi Theatre PO: Toranagallu , Taluka: Sandur, Dt: Ballary, Karnataka....",
    postDate: "2021-03-09 08:59:26",
    advocates: [],
    advocatesVisited: 5,
    offersReceived: 1,
    messagesReceived: 1,
  },
];

export default function ClientsPage() {
  const [activeTab, setActiveTab] = useState("cases");
  const [showEmailComposer, setShowEmailComposer] = useState(false);

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Client Admin</h1>
          <p className="text-gray-600 mt-1">Manage client cases and profiles</p>
        </div>

        <div className="flex gap-2 flex-wrap">
          <Button
            variant={activeTab === "cases" ? "default" : "outline"}
            onClick={() => setActiveTab("cases")}
            className={activeTab === "cases" ? "bg-primary" : ""}
          >
            Cases
          </Button>
          <Button
            variant={activeTab === "profiles" ? "default" : "outline"}
            onClick={() => setActiveTab("profiles")}
            className={activeTab === "profiles" ? "bg-primary" : ""}
          >
            Profiles
          </Button>
        </div>

        {activeTab === "cases" && (
          <div className="space-y-6">
            <Card>
              <CardHeader className="bg-gray-50 border-b">
                <div className="flex items-center justify-between">
                  <CardTitle>Client Cases : Live</CardTitle>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setActiveTab("search-cases")}
                    >
                      Search Cases
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="mb-6">
                  <div className="flex items-center gap-4 mb-4">
                    <p className="text-sm text-gray-600">
                      The following cases have been posted and are live as of
                      today :
                    </p>
                    <select className="border rounded px-3 py-1 text-sm">
                      <option>Page : 1</option>
                    </select>
                  </div>

                  <div className="space-y-6">
                    {mockCases.map((caseItem, idx) => (
                      <div key={idx} className="border-b pb-6 last:border-b-0">
                        <div className="flex gap-2 mb-3">
                          <Button size="sm" variant="outline">
                            email
                          </Button>
                          <Button size="sm" variant="outline">
                            archive
                          </Button>
                        </div>

                        <div className="space-y-2 text-sm">
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <span className="font-semibold">Case ID :</span>{" "}
                              {caseItem.id}
                            </div>
                          </div>

                          <div>
                            <span className="font-semibold">Case Title :</span>{" "}
                            {caseItem.title}
                          </div>

                          <div>
                            <span className="font-semibold">Annonymous :</span>{" "}
                            {caseItem.anonymous ? "Yes" : "No"}
                          </div>

                          <div>
                            <span className="font-semibold">Description :</span>{" "}
                            {caseItem.description}
                          </div>

                          <div>
                            <span className="font-semibold">Post Date :</span>{" "}
                            {caseItem.postDate}
                          </div>

                          <div className="flex gap-4 text-xs">
                            <Button
                              size="sm"
                              variant="link"
                              className="h-auto p-0"
                            >
                              ADVOCATES VISITED [{caseItem.advocatesVisited}]
                            </Button>
                            <Button
                              size="sm"
                              variant="link"
                              className="h-auto p-0"
                            >
                              OFFERS RECEIVED [{caseItem.offersReceived}]
                            </Button>
                            <Button
                              size="sm"
                              variant="link"
                              className="h-auto p-0"
                            >
                              MESSAGES RECEIVED [{caseItem.messagesReceived}]
                            </Button>
                            <Button
                              size="sm"
                              variant="link"
                              className="h-auto p-0"
                            >
                              HIDE/SHOW DIV
                            </Button>
                          </div>

                          {caseItem.advocates.length > 0 && (
                            <div className="mt-4">
                              <table className="w-full border text-sm">
                                <thead className="bg-gray-100">
                                  <tr>
                                    <th className="border px-3 py-2 text-left">
                                      ADVOCATE NAME
                                    </th>
                                    <th className="border px-3 py-2 text-left">
                                      LAST VISITED DATE
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {caseItem.advocates.map(
                                    (advocate, advIdx) => (
                                      <tr key={advIdx}>
                                        <td className="border px-3 py-2">
                                          {advocate.name}
                                        </td>
                                        <td className="border px-3 py-2">
                                          {advocate.lastVisited}
                                        </td>
                                      </tr>
                                    )
                                  )}
                                </tbody>
                              </table>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {showEmailComposer && (
              <Card>
                <CardHeader className="bg-red-50 border-b">
                  <CardTitle className="text-red-800">Email Composer</CardTitle>
                  <p className="text-xs text-red-600">
                    Add multiple email addresses separated by comma without any
                    space
                  </p>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="grid grid-cols-[100px_1fr] gap-4 items-center">
                      <label className="text-sm font-medium">From</label>
                      <Input
                        type="text"
                        value="customer_service@advocatekhoj.in"
                        readOnly
                      />
                    </div>

                    <div className="grid grid-cols-[100px_1fr] gap-4 items-center">
                      <label className="text-sm font-medium">To</label>
                      <Input
                        type="text"
                        defaultValue="mba.tarunkalra@gmail.com"
                      />
                    </div>

                    <div className="grid grid-cols-[100px_1fr] gap-4 items-center">
                      <label className="text-sm font-medium">CC</label>
                      <Input type="text" />
                    </div>

                    <div className="grid grid-cols-[100px_1fr] gap-4 items-center">
                      <label className="text-sm font-medium">BCC</label>
                      <Input type="text" />
                    </div>

                    <div className="grid grid-cols-[100px_1fr] gap-4 items-center">
                      <label className="text-sm font-medium">Subject</label>
                      <Input
                        type="text"
                        defaultValue="AdvocateKhoj : Case posting flagged as inappropriate"
                      />
                    </div>

                    <div className="grid grid-cols-[100px_1fr] gap-4 items-start">
                      <label className="text-sm font-medium pt-2">
                        Message
                      </label>
                      <Textarea rows={8} />
                    </div>

                    <div className="flex gap-2">
                      <Button className="bg-gray-700 hover:bg-gray-800">
                        Send
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => setShowEmailComposer(false)}
                      >
                        Cancel
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        )}

        {activeTab === "search-cases" && (
          <Card>
            <CardHeader className="bg-gray-50 border-b">
              <div className="flex items-center justify-between">
                <CardTitle>Client Cases : Live</CardTitle>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setActiveTab("cases")}
                  >
                    Live Cases
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="mb-6">
                <h3 className="text-sm font-semibold mb-2">Case List :</h3>
                <select
                  className="border rounded px-3 py-2 w-full mb-4"
                  size={10}
                >
                  <option></option>
                </select>
                <Button variant="outline" size="sm">
                  Preview Case
                </Button>
              </div>

              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold mb-4">Search</h3>
                <div className="space-y-4 max-w-2xl">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      CaseID
                    </label>
                    <Input type="text" />
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
                    <Button variant="outline">
                      Show Cases Flagged By Admin
                    </Button>
                    <Button variant="outline">
                      Show Cases Flagged By Advocate
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {activeTab === "profiles" && (
          <Card>
            <CardHeader className="bg-gray-50 border-b">
              <CardTitle>Client Profile</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="mb-6">
                <h3 className="text-sm font-semibold mb-2">Client List :</h3>
                <select
                  className="border rounded px-3 py-2 w-full mb-4"
                  size={10}
                >
                  <option></option>
                </select>
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
        )}
      </div>
    </DashboardLayout>
  );
}
