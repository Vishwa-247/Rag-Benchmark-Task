import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Users,
  BookOpen,
  GraduationCap,
  MessageCircle,
  Scale,
  FileText,
} from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: Users,
      title: "Find Expert Advocates",
      description:
        "Connect with qualified and experienced advocates across India for your legal needs.",
      link: "/client-area",
      linkText: "Find Lawyers",
    },
    {
      icon: BookOpen,
      title: "Comprehensive Law Library",
      description:
        "Access Supreme Court judgments, bare acts, legal forms, and extensive legal resources.",
      link: "/law-library",
      linkText: "Explore Library",
    },
    {
      icon: GraduationCap,
      title: "Law Colleges Directory",
      description:
        "Discover law colleges, admissions, conferences, and career opportunities in legal field.",
      link: "/law-colleges",
      linkText: "View Colleges",
    },
    {
      icon: MessageCircle,
      title: "Sawal Jawab Forum",
      description:
        "Ask legal questions and get answers from legal experts and community members.",
      link: "/sawal-jawab",
      linkText: "Ask Questions",
    },
    {
      icon: Scale,
      title: "Case Management",
      description:
        "Efficiently manage your legal cases with our comprehensive case tracking system.",
      link: "/client-area",
      linkText: "Manage Cases",
    },
    {
      icon: FileText,
      title: "Legal Documentation",
      description:
        "Download legal forms, agreements, and templates for various legal requirements.",
      link: "/law-library",
      linkText: "Get Documents",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Your One-Stop Legal Provider
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Connect with qualified advocates, access comprehensive law library,
            and get expert legal consultation all in one platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <feature.icon className="w-12 h-12 text-primary mb-4" />
                <CardTitle className="text-xl">{feature.title}</CardTitle>
                <CardDescription className="text-gray-600">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href={feature.link}>
                  <Button variant="outline" className="w-full bg-transparent">
                    {feature.linkText}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
