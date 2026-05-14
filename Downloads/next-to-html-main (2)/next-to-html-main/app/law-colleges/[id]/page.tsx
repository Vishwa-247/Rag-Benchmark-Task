"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import PageLayout from "@/components/layout/page-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  MapPin,
  Calendar,
  Phone,
  Mail,
  Globe,
  Star,
  BookOpen,
  Users,
  Award,
  Building,
  Clock,
  DollarSign,
  CheckCircle,
  ArrowLeft,
  Download,
  Bookmark,
  Share2,
  ExternalLink,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function CollegeDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("about");

  // Mock college data - in production, fetch based on params.id
  const college = {
    id: params.id,
    name: "National Law School of India University",
    shortName: "NLSIU",
    location: "Bangalore, Karnataka",
    fullAddress: "Nagarbhavi, Bangalore, Karnataka - 560242",
    nirfRanking: 1,
    established: 1987,
    type: "Public/Government",
    accreditation: "A++ by NAAC",
    logo: "/logos/nlsiu-logo.png",
    bannerImage: "/banners/nlsiu-banner.jpg",
    website: "https://www.nls.ac.in",
    email: "admissions@nls.ac.in",
    phone: "+91-80-2316-0532",

    // About Section
    about: {
      description: `The National Law School of India University (NLSIU) is a premier law school and a National Law University located in Bangalore, Karnataka. Established in 1987, NLSIU pioneered legal education in India by offering the innovative five-year integrated B.A. LL.B. (Hons.) course. NLSIU has consistently ranked as the top law school in India and has set the benchmark for legal education in the country.

The University has been a trendsetter in legal education, producing some of the finest legal minds who have gone on to excel in various fields including judiciary, legal practice, academia, public policy, and corporate leadership. The campus is spread across 23 acres with state-of-the-art facilities including a well-stocked library, moot court halls, computer labs, and sports facilities.

NLSIU is committed to academic excellence, research, and social justice. The university encourages students to engage with real-world legal issues through various clinical programs, internships, and research projects.`,

      highlights: [
        "Consistently ranked #1 Law School in India by NIRF",
        "Pioneered the 5-year integrated B.A. LL.B. program in India",
        "23-acre campus with state-of-the-art facilities",
        "Strong alumni network including Supreme Court judges, leading advocates, and policymakers",
        "Excellent placement record with top law firms and organizations",
        "Active moot court program with national and international victories",
        "Comprehensive library with over 80,000 volumes",
        "Student exchange programs with prestigious universities worldwide",
      ],

      facilities: [
        {
          name: "Library",
          description:
            "Well-stocked with 80,000+ volumes and digital resources",
        },
        {
          name: "Moot Court Halls",
          description: "2 state-of-the-art moot court halls",
        },
        {
          name: "Computer Labs",
          description: "High-speed internet and latest software",
        },
        {
          name: "Sports Complex",
          description: "Indoor and outdoor sports facilities",
        },
        {
          name: "Hostels",
          description:
            "Separate hostels for boys and girls with modern amenities",
        },
        {
          name: "Cafeteria",
          description: "Hygienic food court with multiple cuisines",
        },
        {
          name: "Medical Facility",
          description: "24/7 medical services available",
        },
        {
          name: "Auditorium",
          description: "500-seater air-conditioned auditorium",
        },
      ],

      statistics: [
        { label: "Student Faculty Ratio", value: "10:1" },
        { label: "Total Students", value: "600+" },
        { label: "Faculty Members", value: "60+" },
        { label: "Average Package", value: "₹12 LPA" },
        { label: "Highest Package", value: "₹25 LPA" },
        { label: "Placement Rate", value: "100%" },
      ],
    },

    // Courses Section
    courses: [
      {
        name: "B.A. LL.B. (Hons.)",
        duration: "5 Years",
        eligibility: "10+2 with 50% marks",
        seats: 80,
        fees: "₹2,10,000 per annum",
        exam: "CLAT",
        description:
          "Five-year integrated undergraduate law program combining liberal arts with legal education",
        highlights: [
          "Comprehensive curriculum covering all aspects of law",
          "Emphasis on legal research and writing",
          "Clinical legal education programs",
          "Internship opportunities with top law firms",
          "International exchange programs",
        ],
      },
      {
        name: "LL.M.",
        duration: "1 Year",
        eligibility: "LL.B. degree with 55% marks",
        seats: 30,
        fees: "₹1,50,000 per annum",
        exam: "NLSIU LL.M. Entrance Test",
        description:
          "One-year postgraduate program with specialization options",
        specializations: [
          "Constitutional and Administrative Law",
          "Corporate and Commercial Law",
          "Criminal and Security Law",
          "Intellectual Property Rights",
          "International Trade and Investment Law",
          "Environmental Law and Policy",
        ],
      },
      {
        name: "Ph.D. in Law",
        duration: "3-5 Years",
        eligibility: "LL.M. degree with 55% marks",
        seats: 15,
        fees: "₹50,000 per annum",
        exam: "Research Aptitude Test + Interview",
        description: "Doctoral program for advanced legal research",
        highlights: [
          "Research supervision by renowned faculty",
          "Access to extensive research resources",
          "Opportunities for publication and conferences",
          "Fellowship available for eligible candidates",
        ],
      },
    ],

    admissions: {
      process:
        "Admissions are based on CLAT (Common Law Admission Test) for B.A. LL.B. and separate entrance tests for LL.M. and Ph.D. programs.",
      importantDates: [
        { event: "CLAT Application Start", date: "January 2025" },
        { event: "CLAT Exam Date", date: "May 2025" },
        { event: "Counseling Process", date: "June-July 2025" },
        { event: "Academic Session Begins", date: "August 2025" },
      ],
    },

    // Contact Section
    contact: {
      address:
        "National Law School of India University, Nagarbhavi, Bangalore - 560242, Karnataka, India",
      phone: ["+91-80-2316-0532", "+91-80-2316-0533"],
      email: ["admissions@nls.ac.in", "info@nls.ac.in"],
      website: "https://www.nls.ac.in",
      socialMedia: {
        facebook: "https://facebook.com/nlsiu",
        twitter: "https://twitter.com/nlsiu",
        linkedin: "https://linkedin.com/school/nlsiu",
        instagram: "https://instagram.com/nlsiu_official",
      },
      officeHours: "Monday to Friday: 9:00 AM - 5:30 PM",
      departments: [
        {
          name: "Admissions Office",
          phone: "+91-80-2316-0532",
          email: "admissions@nls.ac.in",
        },
        {
          name: "Academic Affairs",
          phone: "+91-80-2316-0533",
          email: "academics@nls.ac.in",
        },
        {
          name: "Student Affairs",
          phone: "+91-80-2316-0534",
          email: "student.affairs@nls.ac.in",
        },
        {
          name: "Placement Cell",
          phone: "+91-80-2316-0535",
          email: "placements@nls.ac.in",
        },
      ],
    },
  };

  return (
    <PageLayout>
      {/* Hero Banner Section */}
      <div className="relative bg-gradient-to-r from-primary to-primary/80 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${college.bannerImage})` }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Button
            variant="ghost"
            className="text-white hover:bg-white/10 mb-4"
            onClick={() => router.back()}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Colleges
          </Button>

          <div className="flex flex-col md:flex-row items-start gap-6">
            {/* College Logo */}
            <div className="bg-white p-4 rounded-lg shadow-xl">
              <img
                src={college.logo || "/placeholder-logo.png"}
                alt={college.name}
                className="w-24 h-24 object-contain"
              />
            </div>

            {/* College Info */}
            <div className="flex-1">
              <div className="flex items-start justify-between">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold mb-2">
                    {college.name}
                  </h1>
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <Badge className="bg-yellow-500 text-white text-sm">
                      <Star className="w-4 h-4 mr-1" />
                      NIRF Ranking #{college.nirfRanking}
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-white text-primary border-0"
                    >
                      {college.accreditation}
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-white/10 text-white border-white"
                    >
                      <Calendar className="w-3 h-3 mr-1" />
                      Est. {college.established}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2 text-white/90">
                    <MapPin className="w-5 h-5" />
                    <span className="text-lg">{college.location}</span>
                  </div>
                </div>

                <div className="hidden md:flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-white/10 border-white text-white hover:bg-white hover:text-primary"
                  >
                    <Bookmark className="w-4 h-4 mr-1" />
                    Save
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-white/10 border-white text-white hover:bg-white hover:text-primary"
                  >
                    <Share2 className="w-4 h-4 mr-1" />
                    Share
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            {college.about.statistics.map((stat, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4"
              >
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-sm text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="space-y-6"
        >
          <TabsList className="grid w-full grid-cols-3 h-12">
            <TabsTrigger value="about" className="text-base">
              <Building className="w-4 h-4 mr-2" />
              About
            </TabsTrigger>
            <TabsTrigger value="courses" className="text-base">
              <BookOpen className="w-4 h-4 mr-2" />
              Courses
            </TabsTrigger>
            <TabsTrigger value="contact" className="text-base">
              <Phone className="w-4 h-4 mr-2" />
              Contact
            </TabsTrigger>
          </TabsList>

          {/* About Tab */}
          <TabsContent value="about" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">
                  About {college.shortName}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="prose max-w-none">
                  {college.about.description
                    .split("\n\n")
                    .map((paragraph, index) => (
                      <p
                        key={index}
                        className="text-gray-700 leading-relaxed mb-4"
                      >
                        {paragraph}
                      </p>
                    ))}
                </div>

                <Separator />

                {/* Key Highlights */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Award className="w-5 h-5 mr-2 text-primary" />
                    Key Highlights
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {college.about.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator />

                {/* Facilities */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Building className="w-5 h-5 mr-2 text-primary" />
                    Campus Facilities
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {college.about.facilities.map((facility, index) => (
                      <Card
                        key={index}
                        className="border-2 hover:border-primary/50 transition-colors"
                      >
                        <CardContent className="p-4">
                          <h4 className="font-semibold text-gray-900 mb-1">
                            {facility.name}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {facility.description}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Courses Tab */}
          <TabsContent value="courses" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Academic Programs</CardTitle>
                <p className="text-gray-600">
                  Explore the various programs offered by {college.shortName}
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                {college.courses.map((course, index) => (
                  <div key={index}>
                    <Card className="border-2 border-primary/20">
                      <CardHeader className="bg-primary/5">
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle className="text-xl mb-2">
                              {course.name}
                            </CardTitle>
                            <p className="text-gray-600">
                              {course.description}
                            </p>
                          </div>
                          <Badge className="bg-primary text-white">
                            {course.duration}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                          <div className="flex items-center gap-2">
                            <Users className="w-5 h-5 text-primary" />
                            <div>
                              <div className="text-sm text-gray-600">
                                Total Seats
                              </div>
                              <div className="font-semibold">
                                {course.seats}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <DollarSign className="w-5 h-5 text-primary" />
                            <div>
                              <div className="text-sm text-gray-600">
                                Annual Fees
                              </div>
                              <div className="font-semibold">{course.fees}</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <BookOpen className="w-5 h-5 text-primary" />
                            <div>
                              <div className="text-sm text-gray-600">
                                Entrance Exam
                              </div>
                              <div className="font-semibold">{course.exam}</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-primary" />
                            <div>
                              <div className="text-sm text-gray-600">
                                Eligibility
                              </div>
                              <div className="font-semibold text-sm">
                                {course.eligibility}
                              </div>
                            </div>
                          </div>
                        </div>

                        {course.highlights && (
                          <div>
                            <h4 className="font-semibold mb-3">
                              Course Highlights:
                            </h4>
                            <ul className="space-y-2">
                              {course.highlights.map((highlight, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-start gap-2"
                                >
                                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                                  <span className="text-gray-700">
                                    {highlight}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {course.specializations && (
                          <div className="mt-4">
                            <h4 className="font-semibold mb-3">
                              Specializations:
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {course.specializations.map((spec, idx) => (
                                <Badge
                                  key={idx}
                                  variant="outline"
                                  className="border-primary/30"
                                >
                                  {spec}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                    {index < college.courses.length - 1 && (
                      <Separator className="my-6" />
                    )}
                  </div>
                ))}

                {/* Admissions Process */}
                <Card className="bg-blue-50 border-blue-200">
                  <CardHeader>
                    <CardTitle className="text-xl">
                      Admissions Process
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">
                      {college.admissions.process}
                    </p>
                    <div className="space-y-3">
                      <h4 className="font-semibold">Important Dates:</h4>
                      {college.admissions.importantDates.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-3 bg-white rounded-lg"
                        >
                          <span className="font-medium">{item.event}</span>
                          <Badge variant="outline">{item.date}</Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Contact Tab */}
          <TabsContent value="contact" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Contact Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Address */}
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold mb-1">Address</div>
                      <div className="text-gray-700">
                        {college.contact.address}
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* Phone */}
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold mb-2">Phone Numbers</div>
                      <div className="space-y-1">
                        {college.contact.phone.map((phone, index) => (
                          <a
                            key={index}
                            href={`tel:${phone}`}
                            className="block text-primary hover:underline"
                          >
                            {phone}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* Email */}
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold mb-2">Email</div>
                      <div className="space-y-1">
                        {college.contact.email.map((email, index) => (
                          <a
                            key={index}
                            href={`mailto:${email}`}
                            className="block text-primary hover:underline"
                          >
                            {email}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* Website */}
                  <div className="flex items-start gap-3">
                    <Globe className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold mb-1">Website</div>
                      <a
                        href={college.contact.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline flex items-center gap-1"
                      >
                        {college.contact.website}
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>

                  <Separator />

                  {/* Office Hours */}
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold mb-1">Office Hours</div>
                      <div className="text-gray-700">
                        {college.contact.officeHours}
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-3 pt-4">
                    <Button className="flex-1" asChild>
                      <a
                        href={college.contact.website}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Globe className="w-4 h-4 mr-2" />
                        Visit Website
                      </a>
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <Download className="w-4 h-4 mr-2" />
                      Download Brochure
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Department Contacts */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">
                    Department Contacts
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {college.contact.departments.map((dept, index) => (
                    <Card key={index} className="border-2">
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-lg mb-3">
                          {dept.name}
                        </h4>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-sm">
                            <Phone className="w-4 h-4 text-primary" />
                            <a
                              href={`tel:${dept.phone}`}
                              className="text-primary hover:underline"
                            >
                              {dept.phone}
                            </a>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <Mail className="w-4 h-4 text-primary" />
                            <a
                              href={`mailto:${dept.email}`}
                              className="text-primary hover:underline"
                            >
                              {dept.email}
                            </a>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Map Section */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Location Map</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-600">
                      Map integration will be added here
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                      {college.contact.address}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </PageLayout>
  );
}
