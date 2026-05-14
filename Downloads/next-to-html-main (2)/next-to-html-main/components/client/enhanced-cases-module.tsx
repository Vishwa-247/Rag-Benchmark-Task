"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Search,
  Plus,
  Filter,
  MoreVertical,
  Eye,
  MessageSquare,
  Calendar,
  MapPin,
  User,
  FileText,
  Clock,
  CheckCircle,
  AlertCircle,
  Trash2,
  Archive,
  Download,
  Share,
  Star,
  TrendingUp,
  Activity,
} from "lucide-react";
import { CaseCard } from "./case-card";
import { PostCaseForm } from "./post-case-form";

interface EnhancedCasesModuleProps {
  onNavigate?: (section: string) => void;
}

export function EnhancedCasesModule({ onNavigate }: EnhancedCasesModuleProps) {
  const [activeTab, setActiveTab] = useState("active");
  const [searchQuery, setSearchQuery] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");
  const [filterPriority, setFilterPriority] = useState("all");
  const [showPostCase, setShowPostCase] = useState(false);

  useEffect(() => {
    const eventName = "client-dashboard:post-new-case";
    const handler = () => setShowPostCase(true);
    window.addEventListener(eventName, handler);
    return () => {
      window.removeEventListener(eventName, handler);
    };
  }, []);
  const [selectedCases, setSelectedCases] = useState<string[]>([]);

  // Mock data - replace with actual data from backend
  const caseStats = {
    total: 12,
    active: 5,
    inProgress: 3,
    completed: 8,
    draft: 2,
    thisMonth: 3,
    avgResponseTime: "4.2 hours",
    successRate: 87,
  };

  const activeCases = [
    {
      id: "1",
      title: "Property Boundary Dispute with Neighbor",
      category: "Property Law",
      status: "active" as const,
      priority: "high",
      location: "Mumbai, Maharashtra",
      datePosted: "2 days ago",
      lastUpdate: "2 hours ago",
      description:
        "Boundary dispute regarding a 2-foot strip of land with neighbor's encroachment.",
      responses: 8,
      advocates: [
        {
          name: "Adv. Rajesh Kumar",
          avatar: "/avatars/adv1.jpg",
          rating: 4.8,
          experience: "15 years",
        },
        {
          name: "Adv. Priya Sharma",
          avatar: "/avatars/adv2.jpg",
          rating: 4.6,
          experience: "12 years",
        },
      ],
      budget: { min: 50000, max: 100000 },
      documents: ["property_deed.pdf", "survey_report.pdf"],
      timeline: "2-3 months expected",
    },
    {
      id: "2",
      title: "Employment Contract Termination",
      category: "Employment Law",
      status: "active" as const,
      priority: "medium",
      location: "Bangalore, Karnataka",
      datePosted: "5 days ago",
      lastUpdate: "1 day ago",
      description:
        "Wrongful termination case with breach of employment contract terms.",
      responses: 12,
      advocates: [
        {
          name: "Adv. Amit Patel",
          avatar: "/avatars/adv3.jpg",
          rating: 4.9,
          experience: "18 years",
        },
      ],
      budget: { min: 30000, max: 75000 },
      documents: ["employment_contract.pdf", "termination_letter.pdf"],
      timeline: "1-2 months expected",
    },
    // Add more cases...
  ];

  const completedCases = [
    {
      id: "3",
      title: "Divorce Proceedings",
      category: "Family Law",
      status: "completed" as const,
      priority: "high",
      location: "Delhi, NCR",
      datePosted: "3 months ago",
      completedDate: "1 week ago",
      description: "Mutual consent divorce with child custody arrangements.",
      finalAdvocate: {
        name: "Adv. Meera Singh",
        avatar: "/avatars/adv4.jpg",
        rating: 4.7,
      },
      outcome: "Successfully resolved",
      satisfaction: 5,
      budget: { actual: 85000 },
    },
  ];

  const draftCases = [
    {
      id: "4",
      title: "Consumer Rights Violation",
      category: "Consumer Law",
      status: "draft" as const,
      dateCreated: "1 week ago",
      completionPercentage: 75,
      description: "Defective product case against electronics manufacturer...",
    },
  ];

  const categories = [
    "Property Law",
    "Family Law",
    "Employment Law",
    "Consumer Law",
    "Criminal Law",
    "Corporate Law",
    "Tax Law",
    "Immigration Law",
  ];

  const priorities = ["Low", "Medium", "High", "Urgent"];

  const filteredCases = (cases: any[]) => {
    return cases.filter((caseItem) => {
      const matchesSearch =
        caseItem.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        caseItem.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        filterCategory === "all" || caseItem.category === filterCategory;
      const matchesPriority =
        filterPriority === "all" || caseItem.priority === filterPriority;
      return matchesSearch && matchesCategory && matchesPriority;
    });
  };

  const getPriorityColor = (priority: string) => {
    switch (priority?.toLowerCase()) {
      case "urgent":
        return "bg-destructive/10 text-destructive";
      case "high":
        return "bg-secondary/10 text-secondary";
      case "medium":
        return "bg-accent/10 text-accent";
      case "low":
        return "bg-primary/10 text-primary";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-primary/10 text-primary";
      case "completed":
        return "bg-primary/10 text-primary";
      case "draft":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  if (showPostCase) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <Button variant="outline" onClick={() => setShowPostCase(false)}>
            ← Back to Cases
          </Button>
          <h2 className="text-2xl font-bold">Post New Case</h2>
          <div /> {/* Spacer */}
        </div>
        <PostCaseForm />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold">My Legal Cases</h2>
          <p className="text-gray-600">Manage and track your legal matters</p>
        </div>
        <Button
          onClick={() => setShowPostCase(true)}
          className="w-full sm:w-auto"
        >
          <Plus className="h-4 w-4 mr-2" />
          Post New Case
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Cases</p>
                <p className="text-2xl font-bold">{caseStats.total}</p>
              </div>
              <FileText className="h-8 w-8 text-primary" />
            </div>
            <p className="text-xs text-primary mt-2">
              +{caseStats.thisMonth} this month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Active Cases</p>
                <p className="text-2xl font-bold">{caseStats.active}</p>
              </div>
              <Activity className="h-8 w-8 text-secondary" />
            </div>
            <p className="text-xs text-gray-600 mt-2">
              {caseStats.avgResponseTime} avg response
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Completed</p>
                <p className="text-2xl font-bold">{caseStats.completed}</p>
              </div>
              <CheckCircle className="h-8 w-8 text-primary" />
            </div>
            <p className="text-xs text-primary mt-2">
              {caseStats.successRate}% success rate
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">In Progress</p>
                <p className="text-2xl font-bold">{caseStats.inProgress}</p>
              </div>
              <Clock className="h-8 w-8 text-secondary" />
            </div>
            <p className="text-xs text-gray-600 mt-2">Average timeline</p>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="h-4 w-4 absolute left-3 top-3 text-gray-400" />
                <Input
                  placeholder="Search cases by title, category, or description..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <Select value={filterCategory} onValueChange={setFilterCategory}>
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={filterPriority} onValueChange={setFilterPriority}>
                <SelectTrigger className="w-[120px]">
                  <SelectValue placeholder="Priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Priorities</SelectItem>
                  {priorities.map((priority) => (
                    <SelectItem key={priority} value={priority}>
                      {priority}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Cases Tabs */}
      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className="space-y-4"
      >
        <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:grid-cols-4">
          <TabsTrigger value="active" className="flex items-center gap-2">
            <FileText className="h-4 w-4" />
            Active ({caseStats.active})
          </TabsTrigger>
          <TabsTrigger value="completed" className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4" />
            Completed ({caseStats.completed})
          </TabsTrigger>
          <TabsTrigger value="draft" className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            Draft ({caseStats.draft})
          </TabsTrigger>
          <TabsTrigger value="analytics" className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4" />
            Analytics
          </TabsTrigger>
        </TabsList>

        <TabsContent value="active" className="space-y-4">
          {filteredCases(activeCases).length > 0 ? (
            <div className="space-y-4">
              {filteredCases(activeCases).map((caseItem) => (
                <Card
                  key={caseItem.id}
                  className="hover:shadow-md transition-shadow"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-lg font-semibold">
                            {caseItem.title}
                          </h3>
                          <Badge
                            className={getPriorityColor(caseItem.priority)}
                          >
                            {caseItem.priority}
                          </Badge>
                          <Badge
                            variant="outline"
                            className={getStatusColor(caseItem.status)}
                          >
                            {caseItem.status}
                          </Badge>
                        </div>
                        <p className="text-gray-600 mb-3">
                          {caseItem.description}
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            Posted {caseItem.datePosted}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {caseItem.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <User className="h-4 w-4" />
                            {caseItem.responses} responses
                          </div>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </div>

                    {/* Case Details */}
                    <div className="border-t pt-4 space-y-4">
                      {/* Advocates */}
                      {caseItem.advocates.length > 0 && (
                        <div>
                          <p className="text-sm font-medium text-gray-700 mb-2">
                            Interested Advocates
                          </p>
                          <div className="flex gap-2 flex-wrap">
                            {caseItem.advocates.map(
                              (advocate: any, index: number) => (
                                <div
                                  key={index}
                                  className="flex items-center gap-2 bg-gray-50 rounded-lg p-2"
                                >
                                  <Avatar className="h-6 w-6">
                                    <AvatarImage
                                      src={advocate.avatar || undefined}
                                    />
                                    <AvatarFallback>
                                      {advocate.name.split(" ")[1]?.[0]}
                                    </AvatarFallback>
                                  </Avatar>
                                  <div className="text-xs">
                                    <p className="font-medium">
                                      {advocate.name}
                                    </p>
                                    <p className="text-gray-500">
                                      ★ {advocate.rating} •{" "}
                                      {advocate.experience}
                                    </p>
                                  </div>
                                </div>
                              )
                            )}
                          </div>
                        </div>
                      )}

                      {/* Timeline Only - Budget Range Masked */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-gray-600">Expected Timeline</p>
                          <p className="font-medium">{caseItem.timeline}</p>
                        </div>
                      </div>

                      {/* Actions - Documents button removed */}
                      <div className="flex items-center justify-between pt-2 border-t">
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4 mr-1" />
                            View Details
                          </Button>
                          <Button variant="outline" size="sm">
                            <MessageSquare className="h-4 w-4 mr-1" />
                            Messages ({caseItem.responses})
                          </Button>
                        </div>
                        <p className="text-xs text-gray-500">
                          Updated {caseItem.lastUpdate}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="py-12 text-center">
                <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">
                  No active cases found
                </h3>
                <p className="text-gray-600 mb-4">
                  {searchQuery ||
                  filterCategory !== "all" ||
                  filterPriority !== "all"
                    ? "Try adjusting your search or filters"
                    : "Start by posting your first legal case"}
                </p>
                <Button onClick={() => setShowPostCase(true)}>
                  <Plus className="h-4 w-4 mr-2" />
                  Post New Case
                </Button>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="completed" className="space-y-4">
          {/* Similar structure for completed cases */}
          <div className="text-center py-8">
            <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Completed Cases</h3>
            <p className="text-gray-600">
              Your successfully resolved legal matters will appear here
            </p>
          </div>
        </TabsContent>

        <TabsContent value="draft" className="space-y-4">
          {/* Similar structure for draft cases */}
          <div className="text-center py-8">
            <Clock className="h-12 w-12 text-secondary mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Draft Cases</h3>
            <p className="text-gray-600">
              Cases you've started but haven't published yet
            </p>
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          {/* Analytics dashboard */}
          <div className="text-center py-8">
            <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Case Analytics</h3>
            <p className="text-gray-600">
              Detailed insights about your legal cases performance
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
