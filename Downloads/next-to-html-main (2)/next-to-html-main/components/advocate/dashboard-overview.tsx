"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Briefcase,
  MessageSquare,
  Star,
  Eye,
  TrendingUp,
  DollarSign,
  Calendar,
  ArrowUpRight,
  Plus,
  CheckCircle,
  Clock,
  AlertCircle,
  Users,
  Activity,
  FileText,
} from "lucide-react";

interface AdvocateDashboardOverviewProps {
  onNavigate: (section: string) => void;
}

export function AdvocateDashboardOverview({
  onNavigate,
}: AdvocateDashboardOverviewProps) {
  // Mock data - replace with actual data from backend
  const stats = {
    totalCases: 24,
    activeCases: 8,
    completedCases: 16,
    rating: 4.8,
    reviews: 32,
    totalEarnings: 125000,
    profileViews: 156,
    responseRate: 95,
    newMessages: 5,
    avgResponseTime: "3.2 hours",
  };

  const recentCases = [
    {
      id: "1",
      title: "Property Dispute in Mumbai",
      client: "Rajesh S.",
      category: "Property Law",
      budget: "₹15,000",
      status: "active",
      responses: 3,
      postedTime: "2 hours ago",
    },
    {
      id: "2",
      title: "Employment Termination Case",
      client: "Priya M.",
      category: "Employment Law",
      budget: "₹12,000",
      status: "new",
      responses: 1,
      postedTime: "5 hours ago",
    },
    {
      id: "3",
      title: "Contract Review Required",
      client: "Amit K.",
      category: "Business Law",
      budget: "₹8,000",
      status: "active",
      responses: 2,
      postedTime: "1 day ago",
    },
  ];

  const quickActions = [
    {
      title: "Browse Cases",
      description: "Find new legal opportunities",
      icon: Briefcase,
      color: "bg-primary",
      action: () => onNavigate("cases"),
    },
    {
      title: "View All Cases",
      description: "Manage your active cases",
      icon: FileText,
      color: "bg-primary",
      action: () => onNavigate("cases"),
    },
    {
      title: "Messages",
      description: "Chat with clients",
      icon: MessageSquare,
      color: "bg-primary",
      action: () => onNavigate("messages"),
      badge: stats.newMessages > 0 ? stats.newMessages.toString() : undefined,
    },
    {
      title: "Update Profile",
      description: "Keep your information current",
      icon: Users,
      color: "bg-primary",
      action: () => onNavigate("profile"),
    },
  ];

  const recentActivity = [
    {
      id: "1",
      type: "case_response",
      title: "New response from client",
      description: "Rajesh S. replied to your consultation offer",
      time: "1 hour ago",
      avatar: null,
    },
    {
      id: "2",
      type: "new_case",
      title: "New case matches your expertise",
      description: "Property dispute case in your preferred location",
      time: "3 hours ago",
      avatar: null,
    },
    {
      id: "3",
      type: "review",
      title: "New review received",
      description: "Priya M. gave you 5 stars for excellent service",
      time: "1 day ago",
      avatar: null,
    },
    {
      id: "4",
      type: "profile_view",
      title: "Profile views increased",
      description: "Your profile was viewed 12 times today",
      time: "2 days ago",
      avatar: null,
    },
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "text-destructive bg-destructive/5";
      case "medium":
        return "text-accent bg-accent/5";
      case "low":
        return "text-primary bg-primary/5";
      default:
        return "text-gray-600 bg-gray-50";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "text-primary bg-primary/5";
      case "new":
        return "text-secondary bg-secondary/5";
      case "pending":
        return "text-accent bg-accent/5";
      default:
        return "text-gray-600 bg-gray-50";
    }
  };

  return (
    <div className="space-y-6">
      {/* Admin Notification Banner */}
      <Card className="bg-gradient-to-r from-amber-500 to-amber-600 text-white border-0">
        <CardContent className="p-4">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-white/20 rounded-lg">
              <AlertCircle className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold mb-1">
                Special Offer - Limited Time!
              </h3>
              <p className="text-sm opacity-90">
                Upgrade to Premium Membership and get 20% off using promo code:{" "}
                <span className="font-bold bg-white/20 px-2 py-0.5 rounded">
                  PREMIUM20
                </span>
                . Offer valid till 30th November 2025.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-primary to-primary/90 rounded-lg p-6 text-white">
        <h2 className="text-2xl font-bold mb-2">Welcome back, Advocate!</h2>
        <p className="text-primary-foreground/80 mb-4">
          You have {stats.activeCases} active cases and {recentCases.length} new
          opportunities waiting for you.
        </p>
        <div className="flex flex-wrap gap-4 text-sm">
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4" />
            <span>{stats.activeCases} active cases</span>
          </div>
          <div className="flex items-center gap-2">
            <MessageSquare className="h-4 w-4" />
            <span>{stats.newMessages} new messages</span>
          </div>
          {/* Rating masked for now */}
          {/* <div className="flex items-center gap-2">
            <Star className="h-4 w-4" />
            <span>{stats.rating} rating</span>
          </div> */}
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Cases</p>
                <p className="text-3xl font-bold text-gray-900">
                  {stats.totalCases}
                </p>
                <p className="text-sm text-primary flex items-center mt-1">
                  <ArrowUpRight className="h-4 w-4 mr-1" />
                  +3 this month
                </p>
              </div>
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Active Cases
                </p>
                <p className="text-3xl font-bold text-gray-900">
                  {stats.activeCases}
                </p>
                <p className="text-sm text-gray-500 flex items-center mt-1">
                  <Clock className="h-4 w-4 mr-1" />
                  {stats.avgResponseTime} avg response
                </p>
              </div>
              <div className="h-12 w-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                <Activity className="h-6 w-6 text-secondary" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Profile Views
                </p>
                <p className="text-3xl font-bold text-gray-900">
                  {stats.profileViews}
                </p>
                <p className="text-sm text-secondary flex items-center mt-1">
                  <Eye className="h-4 w-4 mr-1" />
                  Last 30 days
                </p>
              </div>
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Eye className="h-6 w-6 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Completed</p>
                <p className="text-3xl font-bold text-gray-900">
                  {stats.completedCases}
                </p>
                <p className="text-sm text-primary flex items-center mt-1">
                  <CheckCircle className="h-4 w-4 mr-1" />
                  Successfully resolved
                </p>
              </div>
              <div className="h-12 w-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                <CheckCircle className="h-6 w-6 text-secondary" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {quickActions.map((action, index) => (
              <Button
                key={index}
                variant="outline"
                className="w-full justify-start h-auto p-4"
                onClick={action.action}
              >
                <div className="flex items-center gap-4 w-full">
                  <div className="h-10 w-10 rounded-lg flex items-center justify-center bg-primary">
                    <action.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div className="flex-1 text-left">
                    <div className="flex items-center justify-between">
                      <p className="font-medium">{action.title}</p>
                      {action.badge && (
                        <Badge variant="destructive" className="text-xs">
                          {action.badge}
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-gray-500">
                      {action.description}
                    </p>
                  </div>
                </div>
              </Button>
            ))}
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-start gap-3">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={activity.avatar || undefined} />
                  <AvatarFallback>
                    {activity.type === "case_response" && (
                      <Briefcase className="h-4 w-4" />
                    )}
                    {activity.type === "new_case" && (
                      <MessageSquare className="h-4 w-4" />
                    )}
                    {activity.type === "review" && <Star className="h-4 w-4" />}
                    {activity.type === "profile_view" && (
                      <Eye className="h-4 w-4" />
                    )}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900">
                    {activity.title}
                  </p>
                  <p className="text-sm text-gray-500">
                    {activity.description}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
            <Button
              variant="ghost"
              className="w-full"
              onClick={() => onNavigate("cases")}
            >
              View All Activity
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Available Cases Summary */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Available Cases</CardTitle>
            <Button variant="outline" onClick={() => onNavigate("cases")}>
              View All Cases
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentCases.map((caseItem) => (
              <div
                key={caseItem.id}
                className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-medium">{caseItem.title}</h3>
                    <Badge className={getStatusColor(caseItem.status)}>
                      {caseItem.status}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>{caseItem.category}</span>
                    <span>•</span>
                    <span className="font-semibold text-primary">
                      {caseItem.budget}
                    </span>
                    <span>•</span>
                    <span>Posted {caseItem.postedTime}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4 mr-1" />
                    View
                  </Button>
                  <Button variant="outline" size="sm">
                    <MessageSquare className="h-4 w-4 mr-1" />
                    Respond
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
