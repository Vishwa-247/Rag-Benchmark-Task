"use client";

import { DashboardLayout } from "@/components/admin/dashboard-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const mockDirectories = [
  { name: "_cursor", type: "Directory" },
  { name: "qodo", type: "Directory" },
  { name: "505", type: "Directory" },
  { name: "advertise", type: "Directory" },
  { name: "aspnet_client", type: "Directory" },
  { name: "blogs", type: "Directory" },
  { name: "ci", type: "Directory" },
  { name: "contact", type: "Directory" },
  { name: "docs", type: "Directory" },
  { name: "images", type: "Directory" },
  { name: "lawschool", type: "Directory" },
  { name: "legacy-docker", type: "Directory" },
  { name: "library", type: "Directory" },
  { name: "mediacoverage", type: "Directory" },
  { name: "qa", type: "Directory" },
  { name: "rss", type: "Directory" },
  { name: "Site", type: "Directory" },
  { name: "sitemap", type: "Directory" },
  { name: "storage", type: "Directory" },
  { name: "styles", type: "Directory" },
  { name: "tools", type: "Directory" },
];

const mockFiles = [
  {
    name: ".gitignore",
    size: "265 B",
    type: "Gitignore File",
    date: "09/30/25 10:10:53 AM",
  },
  {
    name: "404.php",
    size: "21 KB",
    type: "PHP Script",
    date: "09/30/25 10:08:31 AM",
  },
  {
    name: "505.php",
    size: "3 KB",
    type: "PHP Script",
    date: "09/30/25 10:08:31 AM",
  },
  {
    name: "AGENTS.md",
    size: "732 B",
    type: "Md File",
    date: "12/02/25 14:33:42 PM",
  },
  {
    name: "agreement.php",
    size: "3 KB",
    type: "PHP Script",
    date: "10/03/25 14:41:17 PM",
  },
  {
    name: "akhome_advertise.php",
    size: "481 B",
    type: "PHP Script",
    date: "09/30/25 10:08:31 AM",
  },
  {
    name: "create_admin_table.sql",
    size: "1 KB",
    type: "Sql File",
    date: "10/06/25 15:06:47 PM",
  },
  {
    name: "create_manual_users.sql",
    size: "3 KB",
    type: "Sql File",
    date: "10/03/25 18:17:54 PM",
  },
  {
    name: "create_test_users.sql",
    size: "3 KB",
    type: "Sql File",
    date: "10/03/25 16:08:18 PM",
  },
  {
    name: "date.php",
    size: "687 B",
    type: "PHP Script",
    date: "09/30/25 10:08:31 AM",
  },
  {
    name: "db_advocatekhoj.sql",
    size: "858 MB",
    type: "Sql File",
    date: "03/16/21 08:52:52 AM",
  },
  {
    name: "favicon.ico",
    size: "15 KB",
    type: "Ico File",
    date: "09/30/25 10:08:31 AM",
  },
  {
    name: "generate_architecture_docs.ps1",
    size: "1 B",
    type: "Ps1 File",
    date: "10/04/25 11:30:47 AM",
  },
  {
    name: "glogin.php",
    size: "8 KB",
    type: "PHP Script",
    date: "09/30/25 10:08:31 AM",
  },
  {
    name: "index.htm",
    size: "241 B",
    type: "Webpage",
    date: "09/30/25 10:08:31 AM",
  },
  {
    name: "index.php",
    size: "4 KB",
    type: "PHP Script",
    date: "09/30/25 16:03:32 PM",
  },
];

export default function WebsitePage() {
  const [activeTab, setActiveTab] = useState("browser");
  const [newFolderName, setNewFolderName] = useState("");
  const [fileName, setFileName] = useState("");

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Web Site</h1>
          <p className="text-gray-600 mt-1">
            Manage website files and directories
          </p>
        </div>

        <div className="flex gap-2 flex-wrap">
          <Button
            variant={activeTab === "browser" ? "default" : "outline"}
            onClick={() => setActiveTab("browser")}
            className={activeTab === "browser" ? "bg-primary" : ""}
          >
            Directory Browser
          </Button>
          <Button
            variant={activeTab === "upload" ? "default" : "outline"}
            onClick={() => setActiveTab("upload")}
            className={activeTab === "upload" ? "bg-primary" : ""}
          >
            Upload Files
          </Button>
          <Button
            variant={activeTab === "create" ? "default" : "outline"}
            onClick={() => setActiveTab("create")}
            className={activeTab === "create" ? "bg-primary" : ""}
          >
            Create Web Page
          </Button>
        </div>

        {activeTab === "browser" && (
          <Card>
            <CardHeader className="bg-gray-50 border-b">
              <CardTitle>Web Directory : Browser</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">New Folder :</h3>
                  <div className="flex gap-2 max-w-md">
                    <Input
                      type="text"
                      placeholder="Folder Name"
                      value={newFolderName}
                      onChange={(e) => setNewFolderName(e.target.value)}
                    />
                    <Button className="bg-gray-700 hover:bg-gray-800">
                      Create
                    </Button>
                  </div>
                  <p className="text-xs text-red-600 mt-2">
                    New folders are created in the CURRENT WEB DIRECTORY shown
                    in Web Directory section below. If you want to save this new
                    folder in a specific directory, first navigate to that
                    directory in Web Directory section and then continue
                    creating new folder. Folder name cannot contain invalid
                    characters such as ~, -, [&#64;#$%^&*\,+-=` ?&gt;&lt;.,/=` )
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">
                    http://www.advocatekhoj.com
                  </h3>
                  <div className="border rounded-lg overflow-hidden">
                    <table className="w-full text-sm">
                      <thead className="bg-gray-50 border-b">
                        <tr>
                          <th className="text-left px-4 py-2 w-8"></th>
                          <th className="text-left px-4 py-2"></th>
                          <th className="text-left px-4 py-2"></th>
                          <th className="text-left px-4 py-2"></th>
                          <th className="text-left px-4 py-2"></th>
                          <th className="text-right px-4 py-2">
                            <Button
                              size="sm"
                              variant="outline"
                              className="text-xs"
                            >
                              Delete
                            </Button>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {mockDirectories.map((item, idx) => (
                          <tr key={idx} className="border-b hover:bg-gray-50">
                            <td className="px-4 py-2">
                              <input type="checkbox" />
                            </td>
                            <td className="px-4 py-2">📁</td>
                            <td className="px-4 py-2 font-medium">
                              {item.name}
                            </td>
                            <td className="px-4 py-2"></td>
                            <td className="px-4 py-2 text-gray-600">
                              {item.type}
                            </td>
                            <td className="px-4 py-2 text-right">
                              <Button
                                size="sm"
                                variant="link"
                                className="text-xs text-blue-600"
                              >
                                Delete
                              </Button>
                            </td>
                          </tr>
                        ))}
                        <tr className="border-b">
                          <td colSpan={6} className="px-4 py-2 bg-gray-100">
                            <span className="text-xs text-gray-500">
                              __pglkw
                            </span>
                          </td>
                        </tr>
                        {mockFiles.map((file, idx) => (
                          <tr key={idx} className="border-b hover:bg-gray-50">
                            <td className="px-4 py-2">
                              <input type="checkbox" />
                            </td>
                            <td className="px-4 py-2">📄</td>
                            <td className="px-4 py-2">{file.name}</td>
                            <td className="px-4 py-2 text-gray-600">
                              {file.size}
                            </td>
                            <td className="px-4 py-2 text-gray-600">
                              {file.type}
                            </td>
                            <td className="px-4 py-2 text-right">
                              <div className="flex gap-1 justify-end">
                                <span className="text-xs text-gray-500">
                                  {file.date}
                                </span>
                                <Button
                                  size="sm"
                                  variant="link"
                                  className="text-xs text-blue-600"
                                >
                                  Delete
                                </Button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {activeTab === "upload" && (
          <Card>
            <CardHeader className="bg-gray-50 border-b">
              <CardTitle>Web Directory : Upload Files</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-4">Upload File :</h3>
                  <div className="flex gap-2 max-w-2xl mb-4">
                    <input
                      type="file"
                      className="border rounded px-3 py-2 flex-1"
                    />
                    <Button className="bg-gray-700 hover:bg-gray-800">
                      Upload
                    </Button>
                    <Button variant="outline">Multiple Upload</Button>
                    <Button variant="outline">Refresh View</Button>
                  </div>
                  <p className="text-xs text-red-600">
                    Uploaded files are saved in the CURRENT WEB DIRECTORY shown
                    in Web Directory section below. If you want to save this
                    file in a specific directory, first navigate to that
                    directory in Web Directory section and then continue
                    uploading. Only certain file types are allowed to be
                    uploaded for security reasons. File names cannot contain
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">
                    http://www.advocatekhoj.com
                  </h3>
                  <div className="border rounded-lg overflow-hidden">
                    <table className="w-full text-sm">
                      <thead className="bg-gray-50 border-b">
                        <tr>
                          <th className="text-left px-4 py-2 w-8"></th>
                          <th className="text-left px-4 py-2"></th>
                          <th className="text-left px-4 py-2"></th>
                          <th className="text-left px-4 py-2"></th>
                          <th className="text-left px-4 py-2"></th>
                          <th className="text-left px-4 py-2"></th>
                        </tr>
                      </thead>
                      <tbody>
                        {mockDirectories.map((item, idx) => (
                          <tr key={idx} className="border-b hover:bg-gray-50">
                            <td className="px-4 py-2">
                              <input type="checkbox" />
                            </td>
                            <td className="px-4 py-2">📁</td>
                            <td className="px-4 py-2 font-medium">
                              {item.name}
                            </td>
                            <td className="px-4 py-2"></td>
                            <td className="px-4 py-2 text-gray-600">
                              {item.type}
                            </td>
                            <td className="px-4 py-2"></td>
                          </tr>
                        ))}
                        <tr className="border-b">
                          <td colSpan={6} className="px-4 py-2 bg-gray-100">
                            <span className="text-xs text-gray-500">
                              __pglkw
                            </span>
                          </td>
                        </tr>
                        {mockFiles.map((file, idx) => (
                          <tr key={idx} className="border-b hover:bg-gray-50">
                            <td className="px-4 py-2">
                              <input type="checkbox" />
                            </td>
                            <td className="px-4 py-2">📄</td>
                            <td className="px-4 py-2">{file.name}</td>
                            <td className="px-4 py-2 text-gray-600">
                              {file.size}
                            </td>
                            <td className="px-4 py-2 text-gray-600">
                              {file.type}
                            </td>
                            <td className="px-4 py-2 text-gray-500 text-xs">
                              {file.date}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {activeTab === "create" && (
          <Card>
            <CardHeader className="bg-gray-50 border-b">
              <CardTitle>Web Directory : Create Web Page</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-4">New Folder :</h3>
                  <div className="flex gap-2 max-w-2xl mb-4 items-center">
                    <label className="text-sm">File Name</label>
                    <Input
                      type="text"
                      value={fileName}
                      onChange={(e) => setFileName(e.target.value)}
                      className="flex-1"
                    />
                    <span className="text-sm">.php</span>
                    <select className="border rounded px-3 py-2">
                      <option>--- Select a Template ---</option>
                    </select>
                    <Button className="bg-gray-700 hover:bg-gray-800">
                      Create
                    </Button>
                  </div>
                  <p className="text-xs text-red-600">
                    New files are created in the CURRENT WEB DIRECTORY shown in
                    Web Directory section below. If you want to save this
                    template in a specific directory, first navigate to that
                    directory in Web Directory section and then continue
                    creating new web page. New files created are automatically
                    saved with .php extension to support scripting. Any edit
                    made to
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">
                    http://www.advocatekhoj.com
                  </h3>
                  <div className="border rounded-lg overflow-hidden">
                    <table className="w-full text-sm">
                      <thead className="bg-gray-50 border-b">
                        <tr>
                          <th className="text-left px-4 py-2 w-8"></th>
                          <th className="text-left px-4 py-2"></th>
                          <th className="text-left px-4 py-2"></th>
                          <th className="text-left px-4 py-2"></th>
                          <th className="text-left px-4 py-2"></th>
                          <th className="text-left px-4 py-2"></th>
                        </tr>
                      </thead>
                      <tbody>
                        {mockDirectories.map((item, idx) => (
                          <tr key={idx} className="border-b hover:bg-gray-50">
                            <td className="px-4 py-2">
                              <input type="checkbox" />
                            </td>
                            <td className="px-4 py-2">📁</td>
                            <td className="px-4 py-2 font-medium">
                              {item.name}
                            </td>
                            <td className="px-4 py-2"></td>
                            <td className="px-4 py-2 text-gray-600">
                              {item.type}
                            </td>
                            <td className="px-4 py-2"></td>
                          </tr>
                        ))}
                        <tr className="border-b">
                          <td colSpan={6} className="px-4 py-2 bg-gray-100">
                            <span className="text-xs text-gray-500">
                              __pglkw
                            </span>
                          </td>
                        </tr>
                        {mockFiles.map((file, idx) => (
                          <tr key={idx} className="border-b hover:bg-gray-50">
                            <td className="px-4 py-2">
                              <input type="checkbox" />
                            </td>
                            <td className="px-4 py-2">📄</td>
                            <td className="px-4 py-2">{file.name}</td>
                            <td className="px-4 py-2 text-gray-600">
                              {file.size}
                            </td>
                            <td className="px-4 py-2 text-gray-600">
                              {file.type}
                            </td>
                            <td className="px-4 py-2 text-gray-500 text-xs">
                              {file.date}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
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
