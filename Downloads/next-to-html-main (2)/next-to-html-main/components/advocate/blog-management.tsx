"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  BookOpen,
  Plus,
  Edit,
  Eye,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
  Youtube,
  FileText,
  ArrowLeft,
  Heart,
  MessageCircle,
  TrendingUp,
  Calendar,
} from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface BlogManagementProps {
  onNavigate?: (section: string) => void;
}

export function BlogManagement({ onNavigate }: BlogManagementProps) {
  const [showCreateBlog, setShowCreateBlog] = useState(false);
  const [blogData, setBlogData] = useState({
    title: "",
    category: "",
    contentType: "text",
    textContent: "",
    youtubeLink: "",
    excerpt: "",
    tags: "",
  });

  // Mock data - replace with actual data from backend
  const blogs = [
    {
      id: "1",
      title: "Understanding Property Disputes in India",
      category: "Property Law",
      type: "text",
      status: "published",
      views: 1245,
      likes: 89,
      comments: 24,
      publishedDate: "2024-10-15",
      excerpt:
        "A comprehensive guide to handling property boundary disputes...",
    },
    {
      id: "2",
      title: "Employment Law: Know Your Rights",
      category: "Employment Law",
      type: "video",
      status: "pending_review",
      views: 0,
      likes: 0,
      comments: 0,
      submittedDate: "2024-11-01",
      excerpt: "Video explaining employee rights during termination...",
    },
    {
      id: "3",
      title: "Consumer Protection Act 2019",
      category: "Consumer Law",
      type: "text",
      status: "draft",
      views: 0,
      likes: 0,
      comments: 0,
      lastEdited: "2024-10-28",
      excerpt: "Overview of the new consumer protection regulations...",
    },
    {
      id: "4",
      title: "Guide to Divorce Proceedings in India",
      category: "Family Law",
      type: "text",
      status: "published",
      views: 2156,
      likes: 178,
      comments: 45,
      publishedDate: "2024-09-20",
      excerpt: "Step-by-step guide to filing for divorce in India...",
    },
  ];

  const categories = [
    "Property Law",
    "Employment Law",
    "Criminal Law",
    "Family Law",
    "Corporate Law",
    "Consumer Law",
    "Tax Law",
    "Constitutional Law",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Blog submitted for review:", blogData);
    alert("Blog submitted for admin review! You'll be notified once approved.");
    setShowCreateBlog(false);
    setBlogData({
      title: "",
      category: "",
      contentType: "text",
      textContent: "",
      youtubeLink: "",
      excerpt: "",
      tags: "",
    });
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "published":
        return (
          <Badge className="bg-green-100 text-green-700">
            <CheckCircle className="w-3 h-3 mr-1" />
            Published
          </Badge>
        );
      case "pending_review":
        return (
          <Badge className="bg-amber-100 text-amber-700">
            <Clock className="w-3 h-3 mr-1" />
            Pending Review
          </Badge>
        );
      case "draft":
        return (
          <Badge variant="outline" className="text-gray-600">
            <FileText className="w-3 h-3 mr-1" />
            Draft
          </Badge>
        );
      case "rejected":
        return (
          <Badge variant="destructive">
            <XCircle className="w-3 h-3 mr-1" />
            Rejected
          </Badge>
        );
      default:
        return null;
    }
  };

  if (showCreateBlog) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowCreateBlog(false)}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blogs
            </Button>
            <h2 className="text-2xl font-bold">Create New Blog</h2>
          </div>
        </div>

        <Alert>
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            All blog posts are reviewed by our admin team before publication.
            You'll receive an email notification once your blog is approved or
            if any changes are requested.
          </AlertDescription>
        </Alert>

        <Card>
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Blog Title *</Label>
                <Input
                  id="title"
                  placeholder="Enter an engaging title for your blog"
                  value={blogData.title}
                  onChange={(e) =>
                    setBlogData({ ...blogData, title: e.target.value })
                  }
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="category">Category *</Label>
                  <Select
                    value={blogData.category}
                    onValueChange={(value) =>
                      setBlogData({ ...blogData, category: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contentType">Content Type *</Label>
                  <Select
                    value={blogData.contentType}
                    onValueChange={(value) =>
                      setBlogData({ ...blogData, contentType: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="text">
                        <div className="flex items-center">
                          <FileText className="w-4 h-4 mr-2" />
                          Text Article
                        </div>
                      </SelectItem>
                      <SelectItem value="video">
                        <div className="flex items-center">
                          <Youtube className="w-4 h-4 mr-2" />
                          YouTube Video
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {blogData.contentType === "text" ? (
                <div className="space-y-2">
                  <Label htmlFor="textContent">Blog Content *</Label>
                  <Textarea
                    id="textContent"
                    placeholder="Write your blog content here... Use clear paragraphs and proper formatting."
                    className="min-h-[300px]"
                    value={blogData.textContent}
                    onChange={(e) =>
                      setBlogData({ ...blogData, textContent: e.target.value })
                    }
                    required
                  />
                  <p className="text-xs text-gray-500">
                    Write informative content that provides value to readers.
                    Include proper formatting and citations where applicable.
                  </p>
                </div>
              ) : (
                <div className="space-y-2">
                  <Label htmlFor="youtubeLink">YouTube Video Link *</Label>
                  <div className="flex gap-2">
                    <Youtube className="w-5 h-5 text-red-600 mt-2" />
                    <div className="flex-1">
                      <Input
                        id="youtubeLink"
                        type="url"
                        placeholder="https://www.youtube.com/watch?v=..."
                        value={blogData.youtubeLink}
                        onChange={(e) =>
                          setBlogData({
                            ...blogData,
                            youtubeLink: e.target.value,
                          })
                        }
                        required
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        Paste the YouTube video URL. The video will be embedded
                        in your blog post.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="excerpt">Excerpt / Summary *</Label>
                <Textarea
                  id="excerpt"
                  placeholder="Write a brief summary (2-3 sentences) that will appear in blog listings"
                  rows={3}
                  value={blogData.excerpt}
                  onChange={(e) =>
                    setBlogData({ ...blogData, excerpt: e.target.value })
                  }
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="tags">Tags (Optional)</Label>
                <Input
                  id="tags"
                  placeholder="e.g., property, disputes, legal advice (comma separated)"
                  value={blogData.tags}
                  onChange={(e) =>
                    setBlogData({ ...blogData, tags: e.target.value })
                  }
                />
              </div>

              <div className="flex gap-3 pt-4">
                <Button type="submit" className="flex-1">
                  Submit for Review
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="flex-1"
                  onClick={() => {
                    console.log("Saved as draft:", blogData);
                    alert("Blog saved as draft!");
                  }}
                >
                  Save as Draft
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">My Blogs</h2>
          <p className="text-gray-600">Write and share your legal expertise</p>
        </div>
        <Button onClick={() => setShowCreateBlog(true)}>
          <Plus className="w-4 h-4 mr-2" />
          Create New Blog
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Published</p>
                <p className="text-3xl font-bold">
                  {blogs.filter((b) => b.status === "published").length}
                </p>
              </div>
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Views</p>
                <p className="text-3xl font-bold">
                  {blogs.reduce((acc, b) => acc + b.views, 0).toLocaleString()}
                </p>
              </div>
              <Eye className="w-8 h-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Likes</p>
                <p className="text-3xl font-bold">
                  {blogs.reduce((acc, b) => acc + b.likes, 0)}
                </p>
              </div>
              <Heart className="w-8 h-8 text-red-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Engagement</p>
                <p className="text-3xl font-bold">
                  {blogs.reduce((acc, b) => acc + b.comments, 0)}
                </p>
              </div>
              <MessageCircle className="w-8 h-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Blogs</TabsTrigger>
          <TabsTrigger value="published">Published</TabsTrigger>
          <TabsTrigger value="pending">Pending Review</TabsTrigger>
          <TabsTrigger value="draft">Drafts</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          {blogs.map((blog) => (
            <Card key={blog.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-lg font-semibold">{blog.title}</h3>
                      {getStatusBadge(blog.status)}
                      <Badge variant="outline" className="text-xs">
                        {blog.type === "video" ? (
                          <Youtube className="w-3 h-3 mr-1" />
                        ) : (
                          <FileText className="w-3 h-3 mr-1" />
                        )}
                        {blog.type}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{blog.excerpt}</p>
                    <div className="flex items-center gap-4 text-xs text-gray-500 flex-wrap">
                      <span className="flex items-center gap-1">
                        <BookOpen className="w-3 h-3" />
                        {blog.category}
                      </span>
                      {blog.status === "published" && (
                        <>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <Eye className="w-3 h-3" />
                            {blog.views.toLocaleString()} views
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <Heart className="w-3 h-3" />
                            {blog.likes} likes
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <MessageCircle className="w-3 h-3" />
                            {blog.comments} comments
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {blog.publishedDate}
                          </span>
                        </>
                      )}
                      {blog.status === "pending_review" && (
                        <>
                          <span>•</span>
                          <span>Submitted: {blog.submittedDate}</span>
                        </>
                      )}
                      {blog.status === "draft" && (
                        <>
                          <span>•</span>
                          <span>Last edited: {blog.lastEdited}</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Eye className="w-4 h-4 mr-1" />
                    View
                  </Button>
                  {blog.status === "draft" && (
                    <Button variant="outline" size="sm">
                      <Edit className="w-4 h-4 mr-1" />
                      Edit
                    </Button>
                  )}
                  {blog.status === "published" && (
                    <Alert className="flex-1 py-2 px-3">
                      <AlertDescription className="text-xs">
                        Published blogs can only be deleted by admin
                      </AlertDescription>
                    </Alert>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="published">
          <p className="text-center text-gray-500 py-8">
            Published blogs will appear here
          </p>
        </TabsContent>

        <TabsContent value="pending">
          <p className="text-center text-gray-500 py-8">
            Blogs pending admin review will appear here
          </p>
        </TabsContent>

        <TabsContent value="draft">
          <p className="text-center text-gray-500 py-8">
            Your draft blogs will appear here
          </p>
        </TabsContent>
      </Tabs>
    </div>
  );
}
