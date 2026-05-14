"use client";

import { useState } from "react";
import PageLayout from "@/components/layout/page-layout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { MessageCircle, ThumbsUp, Clock, User, Plus, Eye } from "lucide-react";
import AdBanner from "@/components/home/ad-banner";

export default function SawalJawabPage() {
  const [showQuestionForm, setShowQuestionForm] = useState(false);

  const questions = [
    {
      id: 1,
      title:
        "What are the legal requirements for starting a business in India?",
      description:
        "I want to start a small business in Delhi. What are the legal formalities and registrations required?",
      author: "Rahul Sharma",
      category: "Business Law",
      answers: 5,
      likes: 12,
      views: 342,
      timeAgo: "2 hours ago",
    },
    {
      id: 2,
      title: "Property dispute with neighbor - Need legal advice",
      description:
        "My neighbor has encroached on my property boundary. What legal action can I take?",
      author: "Priya Patel",
      category: "Property Law",
      answers: 8,
      likes: 18,
      views: 567,
      timeAgo: "4 hours ago",
    },
    {
      id: 3,
      title: "Employment termination without notice period",
      description:
        "My employer terminated me without serving notice period. Is this legal? What compensation am I entitled to?",
      author: "Amit Kumar",
      category: "Employment Law",
      answers: 3,
      likes: 7,
      views: 189,
      timeAgo: "6 hours ago",
    },
  ];

  return (
    <PageLayout>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mt-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  Sawal Jawab
                </h1>
                <p className="text-gray-600">
                  Ask legal questions and get answers from experts and community
                </p>
              </div>
              <Button
                onClick={() => setShowQuestionForm(!showQuestionForm)}
                className="mt-4 md:mt-0"
              >
                <Plus className="w-4 h-4 mr-2" />
                Ask Question
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-6">
                {/* Question Form */}
                {showQuestionForm && (
                  <Card>
                    <CardHeader>
                      <CardTitle>Ask a Legal Question</CardTitle>
                      <CardDescription>
                        Get help from legal experts and community members
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <Input placeholder="Question title" />
                      <Textarea
                        placeholder="Describe your legal question in detail..."
                        rows={4}
                      />
                      <Input placeholder="Category (e.g., Property Law, Business Law)" />
                      <div className="flex gap-2">
                        <Button>Post Question</Button>
                        <Button
                          variant="outline"
                          onClick={() => setShowQuestionForm(false)}
                        >
                          Cancel
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Questions List */}
                {questions.map((question) => (
                  <Card
                    key={question.id}
                    className="transition-all duration-200 hover:translate-x-1 hover:opacity-90"
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-lg mb-2 hover:text-primary cursor-pointer">
                            {question.title}
                          </CardTitle>
                          <CardDescription className="mb-3">
                            {question.description}
                          </CardDescription>
                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            <div className="flex items-center gap-1">
                              <User className="w-4 h-4" />
                              <span>{question.author}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              <span>{question.timeAgo}</span>
                            </div>
                          </div>
                        </div>
                        <Badge variant="secondary">{question.category}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1 text-sm text-gray-600">
                            <MessageCircle className="w-4 h-4" />
                            <span>{question.answers} answers</span>
                          </div>
                          <div className="flex items-center gap-1 text-sm text-gray-600">
                            <ThumbsUp className="w-4 h-4" />
                            <span>{question.likes} likes</span>
                          </div>
                          <div className="flex items-center gap-1 text-sm text-gray-600">
                            <Eye className="w-4 h-4" />
                            <span>{question.views} views</span>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          View Answers
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <AdBanner size="medium" position="sidebar" />

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">
                      Popular Categories
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {[
                        "Property Law",
                        "Business Law",
                        "Family Law",
                        "Criminal Law",
                        "Employment Law",
                        "Tax Law",
                      ].map((category) => (
                        <div
                          key={category}
                          className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0"
                        >
                          <span className="text-sm">{category}</span>
                          <Badge variant="outline" className="text-xs">
                            {Math.floor(Math.random() * 50) + 10}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Top Contributors</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        { name: "Adv. Rajesh Kumar", answers: 245 },
                        { name: "Adv. Priya Singh", answers: 189 },
                        { name: "Adv. Amit Sharma", answers: 156 },
                      ].map((contributor, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <Avatar className="w-8 h-8">
                            <AvatarFallback>
                              {contributor.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="text-sm font-medium">
                              {contributor.name}
                            </div>
                            <div className="text-xs text-gray-500">
                              {contributor.answers} answers
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
