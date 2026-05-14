"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Star, User, Calendar, Eye, PlusCircle } from "lucide-react";

const categories = [
  { id: "arbitration", name: "Arbitration", count: 1 },
  { id: "arrest-and-bail", name: "Arrest and Bail", count: 1 },
  { id: "banking-law", name: "Banking Law", count: 1 },
  { id: "business", name: "Business", count: 1 },
  { id: "civil-law", name: "Civil Law", count: 2 },
  { id: "clat", name: "CLAT", count: 3 },
  { id: "company-law", name: "Company Law", count: 1 },
  { id: "constitutional-law", name: "Constitutional Law", count: 4 },
  { id: "criminal-law", name: "Criminal Law", count: 3 },
  { id: "environmental-law", name: "Environmental Law", count: 1 },
  { id: "family-law", name: "Family Law", count: 4 },
];

const topViewedBlogs = [
  { title: "Stages in a che", views: 263049 },
  { title: "What is Supreme", views: 234904 },
  { title: "Pardoning Power", views: 171461 },
  { title: "Procedure for S", views: 79824 },
  { title: "Live-in Relatio", views: 76955 },
];

const topContributors = [
  { name: "Law Student", blogs: 18 },
  { name: "Mento Issac", blogs: 11 },
  { name: "Sandip Bhosale", blogs: 4 },
  { name: "Anik", blogs: 2 },
  { name: "Kapil Chandna", blogs: 2 },
];

const sampleBlogs = [
  {
    id: 1,
    title: "Bouncing of Cheque (Section 138 NI Act): How to Take Legal Action?",
    introduction:
      "Cheque bounce cases are common financial disputes in India. When a cheque is dishonored due to insufficient funds or other reasons, it can lead to legal consequences under Section 138 of the Negotiable Instruments Act, 1881. This article explains the legal remedies available, the process to file a cheque bounce case, penalties for the drawer, and how businesses and individuals can safeguard themselves from such issues.",
    rating: 5,
    ratedBy: 6,
    author: "Ayush Jain",
  },
  {
    id: 2,
    title: "Legal remedies for loan recovery harassment",
    introduction:
      "INTRODUCTION - The loan recovery harassment can take various forms. It can be frequent calls at multiple times in a day and at odd hours. T...more",
    rating: 4,
    ratedBy: 7,
    author: "Anik",
  },
  {
    id: 3,
    title: "Registration of Marriage",
    introduction:
      "Introduction One of the very significant legal processes that uphold marriage is marriage registration. Marriage in India has been generally gove...more",
    rating: 4,
    ratedBy: 3,
    author: "Anik",
  },
  {
    id: 4,
    title: "Directors should lead from the front amidst uncertainty",
    introduction:
      "Indian economy is going down in an unprecedented manner, creating absolute uncertainty for the future. Similarly, several corporates are facing a pi...more",
    rating: 5,
    ratedBy: 9,
    author: "Gautam Khaitan",
  },
  {
    id: 5,
    title: "Why Anticipatory Bail",
    introduction:
      "The necessity to grant anticipatory bail arises mainly because sometimes influential persons try to implicate their rivals in false case. The demand to grant anticipatory bail under Order XXXVII of CPC for quicker disposal.",
    rating: 5,
    ratedBy: 11,
    author: "Kapil Chandna",
  },
];

export default function BlogsPage() {
  const router = useRouter();
  const [showPublishForm, setShowPublishForm] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    content: "",
  });

  const handlePublish = () => {
    console.log("Publishing blog:", formData);
    // Handle blog publication logic here
    setShowPublishForm(false);
    setFormData({ title: "", category: "", content: "" });
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-blue-100 to-blue-50 rounded-lg p-8 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="w-10 h-10 text-primary" />
              <h1 className="text-4xl font-bold text-primary">Blogs</h1>
            </div>
            <p className="text-gray-700 mb-6 max-w-3xl">
              Explore insightful articles on various areas of law written by
              legal professionals, students, and experts. Share your knowledge
              by publishing your own blog.
            </p>
            <Button
              onClick={() => setShowPublishForm(!showPublishForm)}
              className="bg-secondary hover:bg-secondary/90"
            >
              <PlusCircle className="w-4 h-4 mr-2" />
              {showPublishForm ? "Cancel" : "Create Your Blog in 3 Steps"}
            </Button>
          </div>

          {/* Publish Form */}
          {showPublishForm && (
            <Card className="mb-8 bg-blue-50 border-2 border-primary">
              <CardHeader>
                <CardTitle className="text-primary">
                  Create Blogs in 3 Steps
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      1
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-700 mb-2">Create an Account</p>
                      <p className="text-sm text-gray-600">
                        Register as a user to access blog publishing features
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      2
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-700 mb-2">Select the Category</p>
                      <Select
                        value={formData.category}
                        onValueChange={(value) =>
                          setFormData({ ...formData, category: value })
                        }
                      >
                        <SelectTrigger className="bg-white">
                          <SelectValue placeholder="Choose a category" />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.map((cat) => (
                            <SelectItem key={cat.id} value={cat.id}>
                              {cat.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      3
                    </div>
                    <div className="flex-1 space-y-3">
                      <p className="text-gray-700 mb-2">Publish your Blog</p>

                      <div>
                        <Label htmlFor="blog-title">Blog Title</Label>
                        <Input
                          id="blog-title"
                          placeholder="Enter your blog title"
                          value={formData.title}
                          onChange={(e) =>
                            setFormData({ ...formData, title: e.target.value })
                          }
                          className="bg-white"
                        />
                      </div>

                      <div>
                        <Label htmlFor="blog-content">Blog Content</Label>
                        <Textarea
                          id="blog-content"
                          placeholder="Write your blog content here..."
                          rows={8}
                          value={formData.content}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              content: e.target.value,
                            })
                          }
                          className="bg-white"
                        />
                      </div>

                      <Button
                        onClick={handlePublish}
                        disabled={
                          !formData.title ||
                          !formData.category ||
                          !formData.content
                        }
                        className="bg-secondary hover:bg-secondary/90"
                      >
                        Publish Blog
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Categories */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-primary">Categories</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {categories.map((category) => (
                      <li key={category.id}>
                        <button className="w-full text-left flex items-center justify-between hover:text-secondary transition-colors">
                          <span className="text-sm">{category.name}</span>
                          <Badge variant="secondary" className="ml-2">
                            {category.count}
                          </Badge>
                        </button>
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="link"
                    className="mt-4 p-0 text-secondary hover:underline"
                  >
                    more
                  </Button>
                </CardContent>
              </Card>

              {/* Top Viewed Blogs */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-primary flex items-center gap-2">
                    <Eye className="w-5 h-5" />
                    Top Viewed Blogs
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {topViewedBlogs.map((blog, index) => (
                      <li key={index}>
                        <button className="w-full text-left hover:text-secondary transition-colors">
                          <div className="flex items-start gap-2">
                            <span className="text-secondary font-semibold">
                              •
                            </span>
                            <div className="flex-1">
                              <p className="text-sm mb-1">{blog.title}</p>
                              <p className="text-xs text-gray-500">
                                [{blog.views.toLocaleString()}]
                              </p>
                            </div>
                          </div>
                        </button>
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="link"
                    className="mt-4 p-0 text-secondary hover:underline"
                  >
                    more
                  </Button>
                </CardContent>
              </Card>

              {/* Top Contributors */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-primary flex items-center gap-2">
                    <User className="w-5 h-5" />
                    Top Contributors
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {topContributors.map((contributor, index) => (
                      <li key={index}>
                        <button className="w-full text-left hover:text-secondary transition-colors">
                          <div className="flex items-center justify-between">
                            <span className="text-sm flex items-center gap-2">
                              <span className="text-secondary font-semibold">
                                •
                              </span>
                              {contributor.name}
                            </span>
                            <Badge variant="secondary">
                              {contributor.blogs}
                            </Badge>
                          </div>
                        </button>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3 space-y-6">
              {sampleBlogs.map((blog) => (
                <Card
                  key={blog.id}
                  className="transition-all duration-200 hover:translate-x-1 hover:opacity-90"
                >
                  <CardHeader>
                    <CardTitle className="text-xl text-primary hover:text-secondary cursor-pointer">
                      {blog.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                      {blog.introduction}
                    </p>

                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold">{blog.rating}</span>
                        <span>by {blog.ratedBy} users</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <User className="w-4 h-4" />
                        <span>
                          Published by{" "}
                          <span className="text-secondary font-medium">
                            {blog.author}
                          </span>
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          Read More
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Star className="w-4 h-4 mr-1" />
                          Rate It
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Pagination or Load More */}
              <div className="flex justify-center pt-6">
                <Button variant="outline">Load More Blogs</Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
