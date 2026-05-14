"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  FileText,
  MessageSquare,
  TrendingUp,
  Clock,
  CheckCircle,
  AlertCircle,
  Plus,
  Eye,
  Calendar,
  Users,
  Activity,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";
import Link from "next/link";

interface DashboardOverviewProps {
  onNavigate: (section: string) => void;
}

export function DashboardOverview({ onNavigate }: DashboardOverviewProps) {
  // Mock data - replace with actual data from backend
  const stats = {
    totalCases: 8,
    activeCases: 3,
    completedCases: 5,
    totalMessages: 24,
    unreadMessages: 5,
    responseRate: 85,
    avgResponseTime: "2.5 hours",
  };

  const recentActivity = [
    {
      id: "1",
      type: "case_response",
      title: "New response on Property Dispute",
      description: "Adv. Rajesh Kumar responded to your case",
      time: "2 hours ago",
      avatar: "/avatars/advocate1.jpg",
      caseId: "case-1",
    },
    {
      id: "2",
      type: "message",
      title: "New message from Adv. Priya Sharma",
      description: "Document requirements for divorce case",
      time: "4 hours ago",
      avatar: "/avatars/advocate2.jpg",
      caseId: "case-2",
    },
    {
      id: "3",
      type: "case_update",
      title: "Case status updated",
      description: "Employment dispute case marked as resolved",
      time: "1 day ago",
      avatar: null,
      caseId: "case-3",
    },
    {
      id: "4",
      type: "case_posted",
      title: "Case posted successfully",
      description: "Contract review case is now live",
      time: "2 days ago",
      avatar: null,
      caseId: "case-4",
    },
  ];

  const quickActions = [
    {
      title: "Post New Case",
      description: "Get help with a new legal matter",
      icon: Plus,
      color: "bg-primary",
      action: () => onNavigate("cases"),
      highlighted: true,
    },
    {
      title: "View All Cases",
      description: "Manage your legal cases",
      icon: FileText,
      color: "bg-primary",
      action: () => onNavigate("cases"),
    },
    {
      title: "Browse Messages",
      description: "Check your conversations",
      icon: MessageSquare,
      color: "bg-primary",
      action: () => onNavigate("messages"),
      badge:
        stats.unreadMessages > 0 ? stats.unreadMessages.toString() : undefined,
    },
    {
      title: "Update Profile",
      description: "Keep your information current",
      icon: Users,
      color: "bg-primary",
      action: () => onNavigate("profile"),
    },
  ];

  const activeCases = [
    {
      id: "1",
      title: "Property Boundary Dispute",
      category: "Property Law",
      status: "active",
      responses: 5,
      lastUpdate: "2 hours ago",
      priority: "high",
    },
    {
      id: "2",
      title: "Divorce Proceedings",
      category: "Family Law",
      status: "in_progress",
      responses: 8,
      lastUpdate: "1 day ago",
      priority: "medium",
    },
    {
      id: "3",
      title: "Employment Contract Review",
      category: "Employment Law",
      status: "pending",
      responses: 2,
      lastUpdate: "3 days ago",
      priority: "low",
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
      case "in_progress":
        return "text-secondary bg-secondary/5";
      case "pending":
        return "text-accent bg-accent/5";
      default:
        return "text-gray-600 bg-gray-50";
    }
  };

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-primary to-primary/90 rounded-lg p-6 text-white">
        <h2 className="text-2xl font-bold mb-2">Welcome back, John!</h2>
        <p className="text-primary-foreground/80 mb-4">
          Here's what's happening with your legal cases today.
        </p>
        <div className="flex flex-wrap gap-4 text-sm">
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4" />
            <span>{stats.activeCases} active cases</span>
          </div>
          <div className="flex items-center gap-2">
            <MessageSquare className="h-4 w-4" />
            <span>{stats.unreadMessages} new messages</span>
          </div>
          {/* Response Rate Masked - Free for all clients */}
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
                  +2 this month
                </p>
              </div>
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <FileText className="h-6 w-6 text-primary" />
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
                <p className="text-sm font-medium text-gray-600">Messages</p>
                <p className="text-3xl font-bold text-gray-900">
                  {stats.totalMessages}
                </p>
                <p className="text-sm text-secondary flex items-center mt-1">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  {stats.unreadMessages} unread
                </p>
              </div>
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <MessageSquare className="h-6 w-6 text-primary" />
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
                  {stats.responseRate}% success rate
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
                      <FileText className="h-4 w-4" />
                    )}
                    {activity.type === "message" && (
                      <MessageSquare className="h-4 w-4" />
                    )}
                    {activity.type === "case_update" && (
                      <CheckCircle className="h-4 w-4" />
                    )}
                    {activity.type === "case_posted" && (
                      <Plus className="h-4 w-4" />
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

      {/* Active Cases Summary */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Active Cases</CardTitle>
            <Button variant="outline" onClick={() => onNavigate("cases")}>
              View All Cases
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {activeCases.map((caseItem) => (
              <div
                key={caseItem.id}
                className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-medium">{caseItem.title}</h3>
                    <Badge className={getPriorityColor(caseItem.priority)}>
                      {caseItem.priority}
                    </Badge>
                    <Badge
                      variant="outline"
                      className={getStatusColor(caseItem.status)}
                    >
                      {caseItem.status.replace("_", " ")}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>{caseItem.category}</span>
                    <span>•</span>
                    <span>{caseItem.responses} responses</span>
                    <span>•</span>
                    <span>Updated {caseItem.lastUpdate}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4 mr-1" />
                    View
                  </Button>
                  <Button variant="outline" size="sm">
                    <MessageSquare className="h-4 w-4 mr-1" />
                    Message
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
