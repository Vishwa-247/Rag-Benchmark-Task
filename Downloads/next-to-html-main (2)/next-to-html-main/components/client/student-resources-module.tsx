"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  GraduationCap,
  MessageCircleQuestion,
  BookOpen,
  TrendingUp,
  Users,
  Calendar,
  Award,
  HelpCircle,
  ExternalLink,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

interface StudentResourcesModuleProps {
  onNavigate?: (section: string) => void;
}

export function StudentResourcesModule({
  onNavigate,
}: StudentResourcesModuleProps) {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Student Resources
        </h2>
        <p className="text-gray-600">
          Access law college information, ask questions, and connect with the
          legal community to enhance your legal education journey.
        </p>
      </div>

      {/* Main Resource Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Law Colleges Card */}
        <Card className="hover:shadow-xl transition-shadow border-2 hover:border-primary">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="h-14 w-14 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <Badge variant="secondary">Featured</Badge>
            </div>
            <CardTitle className="text-2xl">Law Colleges</CardTitle>
            <CardDescription className="text-base">
              Explore comprehensive information about law colleges across India
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <BookOpen className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-900">College Directory</p>
                  <p className="text-sm text-gray-600">
                    Browse through 500+ law colleges with detailed profiles
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Calendar className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-900">Events & Updates</p>
                  <p className="text-sm text-gray-600">
                    Stay updated on admissions, seminars, and college events
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Award className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-900">
                    Course Information
                  </p>
                  <p className="text-sm text-gray-600">
                    Detailed info on LLB, LLM, integrated courses, and more
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <TrendingUp className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-900">
                    Rankings & Reviews
                  </p>
                  <p className="text-sm text-gray-600">
                    Compare colleges based on ratings and student reviews
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t">
              <Link href="/law-colleges">
                <Button className="w-full" size="lg">
                  Explore Law Colleges
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Sawaal Jawaab Card */}
        <Card className="hover:shadow-xl transition-shadow border-2 hover:border-primary">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="h-14 w-14 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                <MessageCircleQuestion className="h-8 w-8 text-primary" />
              </div>
              <Badge variant="secondary">Community</Badge>
            </div>
            <CardTitle className="text-2xl">Sawaal Jawaab</CardTitle>
            <CardDescription className="text-base">
              Ask questions and get answers from legal professionals and peers
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <HelpCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-900">Ask Questions</p>
                  <p className="text-sm text-gray-600">
                    Post your legal queries and career-related questions
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Users className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-900">Expert Answers</p>
                  <p className="text-sm text-gray-600">
                    Get responses from advocates, professors, and experienced
                    professionals
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <BookOpen className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-900">Knowledge Base</p>
                  <p className="text-sm text-gray-600">
                    Browse through thousands of answered questions
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <TrendingUp className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-900">Build Reputation</p>
                  <p className="text-sm text-gray-600">
                    Share your knowledge and help fellow students
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t">
              <Link href="/sawal-jawab">
                <Button className="w-full" size="lg">
                  Visit Sawaal Jawaab
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Stats */}
      <Card className="bg-gradient-to-br from-primary/5 to-primary/10">
        <CardHeader>
          <CardTitle>Student Community Overview</CardTitle>
          <CardDescription>
            Join thousands of law students using AdvocateKhoj
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <p className="text-sm text-gray-600">Law Colleges Listed</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">5K+</div>
              <p className="text-sm text-gray-600">Questions Answered</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">10K+</div>
              <p className="text-sm text-gray-600">Student Members</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">1K+</div>
              <p className="text-sm text-gray-600">Expert Contributors</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Popular Topics */}
      <Card>
        <CardHeader>
          <CardTitle>Popular Topics on Sawaal Jawaab</CardTitle>
          <CardDescription>
            Trending discussions in the student community
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                title: "Career Guidance",
                questions: 245,
                description: "Advice on legal career paths and opportunities",
              },
              {
                title: "Entrance Exams",
                questions: 189,
                description: "CLAT, AILET, and other law entrance preparation",
              },
              {
                title: "Case Studies",
                questions: 156,
                description:
                  "Discussion on landmark cases and legal precedents",
              },
              {
                title: "Internships",
                questions: 134,
                description: "Finding and securing legal internships",
              },
              {
                title: "Legal Research",
                questions: 98,
                description: "Tips and resources for legal research",
              },
              {
                title: "Bar Council",
                questions: 87,
                description: "Bar Council registration and requirements",
              },
            ].map((topic, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
              >
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MessageCircleQuestion className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-semibold text-gray-900">
                      {topic.title}
                    </h4>
                    <Badge variant="secondary" className="text-xs">
                      {topic.questions} Q&As
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600">{topic.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <Link href="/sawal-jawab">
              <Button variant="outline" size="lg">
                Browse All Topics
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* Quick Links */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="hover:shadow-lg transition-shadow cursor-pointer">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <BookOpen className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold text-gray-900">Law Library</h3>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Access free legal resources, acts, judgments, and more
            </p>
            <Link href="/law-library">
              <Button variant="outline" size="sm" className="w-full">
                Visit Library
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow cursor-pointer">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Users className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold text-gray-900">Find Advocates</h3>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Connect with experienced advocates for guidance
            </p>
            <Link href="/client-area">
              <Button variant="outline" size="sm" className="w-full">
                Search Advocates
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow cursor-pointer">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <HelpCircle className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold text-gray-900">Need Help?</h3>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Get support and guidance from our team
            </p>
            <Link href="/contact">
              <Button variant="outline" size="sm" className="w-full">
                Contact Support
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
