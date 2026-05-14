"use client";

import { DashboardLayout } from "@/components/admin/dashboard-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const mockColleges = [
  "A B M S P S. Yashwantrao Chavan Law College [Maharashtra]",
  "A E H's Anjuman Law College [Karnataka]",
  "A J R C. Law College and Evening College [Karnataka]",
  "A K. Chanda Law College [Assam]",
  "A M Law College [Himachal Pradesh]",
  "A M P. Law College [Gujarat]",
  "A M S. College of Law for Women [Telangana]",
];

const mockCourses = [
  "B.Tech LLB",
  "BA LLB",
  "BBA LLB",
  "BCom LLB",
  "BSc LLB",
  "BSL LLB",
  "BSW LLB",
];

const mockSpecializations = [
  "Alternative Dispute Resolution",
  "Arbitration, Conciliation and Alternative Dispute Resolution System",
  "Aviation Law and Air Transport Management",
  "Banking Law",
  "Bharatiya Nyaya Darshan and Raj Dharma and Commercial Law",
  "Business and Trade Law",
  "Business,International and Labour and Human Rights Laws",
];

const mockArchivedColleges = [
  "Akola Law College [Maharashtra]",
  "Almora Campus College [Uttarakhand]",
  "Andhra Christian College of Law [Andhra Pradesh]",
  "Anwarul Uloom College of Law [Andhra Pradesh]",
  "Aaqshas College [Kerala]",
];

export default function LawSchoolPage() {
  const [activeTab, setActiveTab] = useState("manage-schools");
  const [activeSubTab, setActiveSubTab] = useState("live-colleges");

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Law School</h1>
          <p className="text-gray-600 mt-1">
            Manage law colleges, courses, and specializations
          </p>
        </div>

        <div className="flex gap-2 flex-wrap">
          <Button
            variant={activeTab === "manage-schools" ? "default" : "outline"}
            onClick={() => setActiveTab("manage-schools")}
            className={activeTab === "manage-schools" ? "bg-primary" : ""}
          >
            Manage Schools
          </Button>
          <Button
            variant={activeTab === "sawaal" ? "default" : "outline"}
            onClick={() => setActiveTab("sawaal")}
            className={activeTab === "sawaal" ? "bg-primary" : ""}
          >
            Sawaal
          </Button>
          <Button
            variant={activeTab === "manage-courses" ? "default" : "outline"}
            onClick={() => setActiveTab("manage-courses")}
            className={activeTab === "manage-courses" ? "bg-primary" : ""}
          >
            Manage Courses
          </Button>
        </div>

        {activeTab === "manage-schools" && (
          <Card>
            <CardHeader className="bg-gray-50 border-b">
              <div className="flex items-center justify-between">
                <CardTitle>Manage Law Colleges</CardTitle>
                <div className="flex gap-2">
                  <Button
                    variant={
                      activeSubTab === "live-colleges" ? "default" : "outline"
                    }
                    size="sm"
                    onClick={() => setActiveSubTab("live-colleges")}
                    className={
                      activeSubTab === "live-colleges"
                        ? "bg-primary text-xs"
                        : "text-xs"
                    }
                  >
                    Manage Live Colleges
                  </Button>
                  <Button
                    variant={
                      activeSubTab === "search-college" ? "default" : "outline"
                    }
                    size="sm"
                    onClick={() => setActiveSubTab("search-college")}
                    className={
                      activeSubTab === "search-college"
                        ? "bg-primary text-xs"
                        : "text-xs"
                    }
                  >
                    Search College
                  </Button>
                  <Button
                    variant={
                      activeSubTab === "archived-colleges"
                        ? "default"
                        : "outline"
                    }
                    size="sm"
                    onClick={() => setActiveSubTab("archived-colleges")}
                    className={
                      activeSubTab === "archived-colleges"
                        ? "bg-primary text-xs"
                        : "text-xs"
                    }
                  >
                    Manage Archived Colleges
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              {activeSubTab === "live-colleges" && (
                <div className="space-y-6">
                  <div className="bg-green-100 border border-green-300 rounded p-4">
                    <h3 className="font-semibold mb-2">
                      Current List Of All Colleges
                    </h3>
                    <select
                      className="border rounded px-3 py-2 w-full mb-4"
                      size={15}
                    >
                      {mockColleges.map((college, idx) => (
                        <option key={idx}>{college}</option>
                      ))}
                    </select>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                      <Button variant="outline" size="sm">
                        New
                      </Button>
                      <Button variant="outline" size="sm">
                        Archieve
                      </Button>
                    </div>
                  </div>
                </div>
              )}

              {activeSubTab === "search-college" && (
                <div className="space-y-6">
                  <div className="bg-green-100 border border-green-300 rounded p-4">
                    <h3 className="font-semibold mb-4">
                      Search Based on the following Category/Categories
                    </h3>

                    <div className="space-y-4 max-w-2xl">
                      <div className="grid grid-cols-[200px_1fr] gap-4 items-center">
                        <label className="text-sm">Select Location:</label>
                        <select className="border rounded px-3 py-2">
                          <option>--Select Location--</option>
                        </select>
                      </div>

                      <div className="grid grid-cols-[200px_1fr] gap-4 items-center">
                        <label className="text-sm">Select Course:</label>
                        <select className="border rounded px-3 py-2">
                          <option>--select course--</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeSubTab === "archived-colleges" && (
                <div className="space-y-6">
                  <div className="bg-green-100 border border-green-300 rounded p-4">
                    <h3 className="font-semibold mb-2">
                      Archived List Of All Colleges
                    </h3>
                    <select
                      className="border rounded px-3 py-2 w-full mb-4"
                      size={15}
                    >
                      {mockArchivedColleges.map((college, idx) => (
                        <option key={idx}>{college}</option>
                      ))}
                    </select>
                    <Button variant="outline" size="sm">
                      Make Live?
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {activeTab === "sawaal" && (
          <Card>
            <CardHeader className="bg-gray-50 border-b">
              <CardTitle>Sawaal Jawab</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold text-blue-700 mb-4">
                    Search by Date
                  </h3>
                  <p className="text-sm text-red-600 mb-4">
                    Select Both Month and Year to Search
                  </p>

                  <div className="space-y-4 max-w-2xl">
                    <div className="grid grid-cols-[200px_1fr] gap-4 items-center">
                      <label className="text-sm">Posted Year</label>
                      <select className="border rounded px-3 py-2">
                        <option>--select--</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-[200px_1fr] gap-4 items-center">
                      <label className="text-sm">Month in above Year</label>
                      <select className="border rounded px-3 py-2">
                        <option>--select--</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-[200px_1fr] gap-4 items-center">
                      <label className="text-sm"></label>
                      <Button className="bg-gray-700 hover:bg-gray-800 w-32">
                        Search
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-8">
                  <h3 className="text-lg font-semibold text-blue-700 mb-4">
                    Search by KeyWords
                  </h3>
                  <p className="text-sm text-red-600 mb-4">
                    Enter Keyword to search which is Either in Sawaal or Jawab
                    or both
                  </p>

                  <div className="space-y-4 max-w-2xl">
                    <div className="grid grid-cols-[200px_1fr] gap-4 items-center">
                      <label className="text-sm">Enter Keyword</label>
                      <Input type="text" />
                    </div>

                    <div className="grid grid-cols-[200px_1fr] gap-4 items-center">
                      <label className="text-sm"></label>
                      <Button className="bg-gray-700 hover:bg-gray-800 w-32">
                        Search
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-8">
                  <h3 className="text-lg font-semibold text-blue-700 mb-4">
                    Search by Timeline
                  </h3>
                  <p className="text-sm text-red-600 mb-4">
                    Enter Date in Both Fileds to search Sawaals in Particular
                    Period. Date Format sholuld Be(dd-mm-yyyy)
                  </p>

                  <div className="space-y-4 max-w-2xl">
                    <div className="grid grid-cols-[200px_1fr] gap-4 items-center">
                      <label className="text-sm"></label>
                      <Input type="text" />
                    </div>

                    <div className="grid grid-cols-[200px_1fr] gap-4 items-center">
                      <label className="text-sm">From Date</label>
                      <div className="flex gap-2">
                        <Input type="text" />
                        <Button size="sm" variant="outline">
                          📅
                        </Button>
                      </div>
                    </div>

                    <div className="grid grid-cols-[200px_1fr] gap-4 items-center">
                      <label className="text-sm">To Date</label>
                      <div className="flex gap-2">
                        <Input type="text" />
                        <Button size="sm" variant="outline">
                          📅
                        </Button>
                      </div>
                    </div>

                    <div className="grid grid-cols-[200px_1fr] gap-4 items-center">
                      <label className="text-sm"></label>
                      <Button className="bg-gray-700 hover:bg-gray-800 w-32">
                        Search
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-8">
                  <h3 className="text-lg font-semibold text-blue-700 mb-4">
                    Search by Flags
                  </h3>
                  <p className="text-sm mb-4">
                    Click to search sawaals & jawaabs
                  </p>

                  <div className="space-y-4 max-w-2xl">
                    <div className="grid grid-cols-[200px_1fr] gap-4 items-center">
                      <label className="text-sm"></label>
                      <Button className="bg-gray-700 hover:bg-gray-800 w-32">
                        Search
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {activeTab === "manage-courses" && (
          <div className="space-y-6">
            <Card>
              <CardHeader className="bg-gray-50 border-b">
                <div className="flex items-center justify-between">
                  <CardTitle>List Of Courses</CardTitle>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      Manage Courses
                    </Button>
                    <Button variant="outline" size="sm">
                      Manage Specialization
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="bg-green-100 border border-green-300 rounded p-4">
                  <h3 className="font-semibold mb-2">
                    Current List Of All Courses
                  </h3>
                  <select className="border rounded px-3 py-2 w-full" size={8}>
                    {mockCourses.map((course, idx) => (
                      <option key={idx}>{course}</option>
                    ))}
                  </select>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="bg-gray-50 border-b">
                <div className="flex items-center justify-between">
                  <CardTitle>List Of Specialization</CardTitle>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      Manage Courses
                    </Button>
                    <Button variant="outline" size="sm">
                      Manage Specialization
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="bg-green-100 border border-green-300 rounded p-4">
                  <h3 className="font-semibold mb-2">
                    Current List Of All Specialization
                  </h3>
                  <select className="border rounded px-3 py-2 w-full" size={8}>
                    {mockSpecializations.map((spec, idx) => (
                      <option key={idx}>{spec}</option>
                    ))}
                  </select>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
