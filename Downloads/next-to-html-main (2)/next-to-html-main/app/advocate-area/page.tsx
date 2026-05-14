"use client";

import { useState, useEffect } from "react";
import PageLayout from "@/components/layout/page-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  UserPlus,
  FileSearch,
  MessageSquare,
  Briefcase,
  Award,
  TrendingUp,
  Shield,
  Users,
  ArrowRight,
  CreditCard,
  Search,
  ArrowUp,
  X,
} from "lucide-react";

export default function AdvocateAreaPage() {
  const [faqSearch, setFaqSearch] = useState("");
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Back to top button visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const howItWorksDescription = `AdvocateKhoj is a "communication platform" that helps consumers find advocates to represent their legal need. By becoming a member of AdvocateKhoj, you can get steady case flow, selective clients and in turn increase your revenues.`;

  const howItWorksSteps = [
    {
      step: "1",
      title: "User Posts a Case",
      description:
        "A user (client) visits AdvocateKhoj and posts their legal case by filling out a simple questionnaire about their legal situation.",
      icon: UserPlus,
    },
    {
      step: "2",
      title: "Authentication & Database",
      description:
        "The case is authenticated and stored securely in our database. Member advocates can then view the case details.",
      icon: Shield,
    },
    {
      step: "3",
      title: "Advocates View Cases",
      description:
        "Member advocates log in and browse available cases. They can view case details, client requirements, and decide which cases match their expertise.",
      icon: FileSearch,
    },
    {
      step: "4",
      title: "Advocate Replies to Case",
      description:
        "Interested advocates send responses to the user's case, explaining their approach, experience, and how they can help.",
      icon: MessageSquare,
    },
    {
      step: "5",
      title: "User Views Advocate Profile",
      description:
        "The user receives responses and can view detailed profiles of advocates including their qualifications, experience, case history, and expertise.",
      icon: Users,
    },
    {
      step: "6",
      title: "User Selects Best Advocate",
      description:
        "After reviewing advocate profiles and responses, the user selects the advocate they feel is best suited for their case and engages them directly.",
      icon: Award,
    },
  ];

  const benefits = [
    {
      icon: Users,
      title: "Access to Clients",
      description:
        "Connect with clients actively seeking legal representation across various practice areas.",
    },
    {
      icon: Award,
      title: "Professional Profile",
      description:
        "Showcase your credentials, experience, and expertise with a comprehensive verified profile.",
    },
    {
      icon: TrendingUp,
      title: "Grow Your Practice",
      description:
        "Expand your client base and build your reputation through client reviews and successful cases.",
    },
    {
      icon: Shield,
      title: "Verified Platform",
      description:
        "Join a trusted network where all advocates are BAR Council verified and clients are serious about hiring.",
    },
  ];

  const membershipPlans = [
    {
      name: "Basic",
      price: "₹2,999",
      duration: "6 months",
      features: [
        "Profile listing on platform",
        "Up to 10 case responses per month",
        "Basic messaging with clients",
        "Email support",
        "Profile visibility in search",
      ],
      recommended: false,
    },
    {
      name: "Professional",
      price: "₹4,999",
      duration: "12 months",
      features: [
        "Enhanced profile with priority listing",
        "Unlimited case responses",
        "Priority messaging with clients",
        "Phone and email support",
        "Featured in search results",
        "Monthly performance analytics",
      ],
      recommended: true,
    },
    {
      name: "Premium",
      price: "₹9,999",
      duration: "12 months",
      features: [
        "All Professional features",
        "Top placement in search results",
        "Dedicated account manager",
        "Marketing and promotion support",
        "Premium badge on profile",
        "Priority case notifications",
        "Advanced analytics dashboard",
      ],
      recommended: false,
    },
  ];

  const faqSections = [
    {
      title: "Using AdvocateKhoj",
      faqs: [
        {
          question: "What is the purpose of AdvocateKhoj?",
          answer:
            'AdvocateKhoj helps people find the right advocate. Anyone who needs legal assistance can present a case (answer some simple questions about their legal situation) "free of cost" on the AdvocateKhoj website without revealing his or her identity. Then, subscribing advocates of AdvocateKhoj review your case and then decide whether to respond. Once you get a reply from an advocate, we provide you with the advocate\'s background information so that you can make a smart decision.',
        },
        {
          question:
            "What are the benefits of becoming a member of AdvocateKhoj?",
          answer:
            "Generating new clientele can be difficult and costly. Every day there are clients in need of legal services and some may be right around the corner or down the street from you! Wouldn't it be great to find new clients without ever leaving your office or home - potentially generating new clients every day? With AdvocateKhoj, an advocate can just log on to our website to connect with clients with whom they would really want to work with and not just with any stranger who has a legal problem! Also by becoming a member of AdvocateKhoj, you can get steady case flow, selective clients and in turn increased revenues and hence build a successful practice.",
        },
        {
          question: "How do I become a Member?",
          answer:
            "Advocates are admitted to the AdvocateKhoj program only after they meet strict professional standards and in accordance with consumer demands in a given market. To become a subscribing member of AdvocateKhoj, you need to be foremost, an advocate with a good standing with the local BAR Council. Apart from this you need to qualify our screening process and pay your membership fees. For a detailed process flow of our intake process, please visit our registration page.",
        },
        {
          question: "Is AdvocateKhoj a law firm?",
          answer:
            'No. AdvocateKhoj is not a law firm and does not practice law. AdvocateKhoj does not offer any legal advice, recommendations, mediation, or counseling under any circumstance. AdvocateKhoj is only a "communication platform" to bring clients and advocates together; a nationwide system using the latest technologies.',
        },
        {
          question: "Is AdvocateKhoj a referral service?",
          answer:
            "No. AdvocateKhoj is not a referral service. To the contrary, AdvocateKhoj does not refer its subscribing members to its consumers; rather, the consumers present their case to AdvocateKhoj using the on-line questionnaires, and the subscribing advocates respond directly to those prospective clients with whom they are sincerely interested to work with.",
        },
        {
          question:
            'Is AdvocateKhoj a directory or "Yellow Pages" listing service?',
          answer:
            "No. AdvocateKhoj does not place any subscribing advocates' name or contact information into the public view. No client has the ability to view or otherwise obtain the name or contact information of any subscribing advocate of AdvocateKhoj. Such information is confidential and not provided to clients. However, once a prospective client has agreed to our User Agreement, and has completed the on-line case questionnaires, the subscribing advocate can respond to the client's submission, and only then does that client receive the name and contact information of that advocate who had responded to his case.",
        },
        {
          question: "Can a Law firm register with AdvocateKhoj?",
          answer:
            "No. We do not register Law Firms but the individual advocates working in the firm are welcome to register with us.",
        },
        {
          question:
            "Is it mandatory to fill the State Bar Council enrollment number in the application form?",
          answer:
            "Yes. The State Bar Council enrollment number is mandatory. This information is not displayed to the public but is needed for our internal verification process.",
        },
        {
          question: "Does AdvocateKhoj release the cases outside the system?",
          answer:
            "No. As per our privacy policy, we do not release any of the cases outside our system.",
        },
        {
          question:
            "Is it mandatory for providing the complete profile for membership activation?",
          answer:
            "The purpose of the advocates' complete profile being made mandatory is that we want the clients to make an informed decision on whom they are engaging for their case.",
        },
        {
          question:
            "How do I get to know, how many advocates stand in competition with me to get the work and how do I stand best in them?",
          answer:
            "Unfortunately, AdvocateKhoj does not allow communication among the subscribing advocates. The only way you can know about this is, when you are contacted by a prospective client. The reason why AdvocateKhoj does not collect such information is because AdvocateKhoj is only a communication platform between advocates and consumers and we do not dictate or govern the fees charged by an advocate for his/her service.",
        },
        {
          question: "How can I know that I have got the work?",
          answer:
            "When the client contacts you personally either over the phone or email and seeks your representation for his/her case then it implies that you have got the work.",
        },
        {
          question:
            "When a client hires an advocate from AdvocateKhoj for his case, will the case be immediately deleted from the website?",
          answer:
            "When a case is posted at AdvocateKhoj, by default the system allots 6 months for the client to get the right advocates after which the case is archived. If during these 6 months, a client is able to find an advocate, we expect the client to delete his/her case otherwise the system archives it as stated above.",
        },
        {
          question:
            "Does AdvocateKhoj interfere with the fees charged by an advocate?",
          answer:
            "No. AdvocateKhoj does not interfere with the fees charged by an advocate for his/her work. An advocate is responsible for collection of fees as per his/her discretion and AdvocateKhoj does not take part in it.",
        },
        {
          question: "What are the subscription charges for advocates?",
          answer:
            "We offer the following subscription plans:\n\n1. Silver Plan - 3 months validity - 400 INR + GST (18%)\n2. Gold Plan - 6 months validity (12.5% discount) - 700 INR + GST (18%)\n3. Platinum Plan - 12 months validity (25% discount) - 1200 INR + GST (18%)",
        },
        {
          question: "What modes of payment does AdvocateKhoj accept?",
          answer:
            "Payments can be made through Credit Cards/Net Banking/UPI and these details can be accessed from the advocates' account.",
        },
        {
          question: "Refund and Cancellation Policy?",
          answer:
            "At advocatekhoj.com we take great pride in delivering high-quality services and are committed to ensuring your satisfaction. We continually strive to provide the best services through our platform. If you are not satisfied with our services, please contact us immediately, and we will make every effort to resolve the issue, provide a refund, or offer credit for future orders.",
        },
      ],
    },
    {
      title: "Using Blogs",
      faqs: [
        {
          question: "What is a blog?",
          answer:
            "A blog is a short form for weblog and is an online journal with periodic postings by members. A blog can be anything, such as opinions, news or useful resources.",
        },
        {
          question: "What is the purpose of AdvocateKhoj Blog?",
          answer:
            "The aim is to provide the online viewers with a constantly renewing source of news and insight about laws. The advocate members can voice their thoughts, ideas and opinions on laws.",
        },
        {
          question: "How can I post my blog?",
          answer:
            "Posting a blog is FREE for all the registered advocates. If you are an advocate and in case you are not registered, then you may please submit an application by visiting our registration page.",
        },
        {
          question: "Will the blog postings be reviewed before it's published?",
          answer:
            "Yes, the blog postings would be reviewed before they are posted on to the public page. The blog should focus on niche area of the law or jurisdiction and should meet the guidelines set by AdvocateKhoj panel as per the User Agreement. Also the blog shouldn't promote any business or entity.",
        },
        {
          question:
            "Is there a limit on the number of blogs an advocate can publish?",
          answer: "No, an advocate can publish any number of blogs.",
        },
        {
          question: "Can the advocate delete a published blog?",
          answer:
            "Yes, the advocate can delete any of the blogs published by him/her.",
        },
        {
          question: "How to rate a blog?",
          answer: "Any user can rate a blog after logging in to AdvocateKhoj.",
        },
      ],
    },
    {
      title: "Using Sawaal Jawaab",
      faqs: [
        {
          question: "What is a Sawaal-Jawaab?",
          answer:
            "Sawaal-Jawaab (Question and Answer) is a unique method by which a user can ask questions on topics related to law colleges in India and others can share their knowledge. All you need to do is create an account and post your Sawaal or Jawaab.",
        },
      ],
    },
    {
      title: "Technical / Customer Support",
      faqs: [
        {
          question: "What is the minimum requirements to use AdvocateKhoj?",
          answer:
            "You need a modern web browser with JavaScript enabled and cookies enabled. We recommend using the latest versions of Chrome, Firefox, Safari, or Edge for the best experience.",
        },
        {
          question: "Why am I getting a Security Certificate Warning?",
          answer:
            "AdvocateKhoj uses SSL (Secure Sockets Layer) to protect selected private information you may input on our site. Our security certificate is valid for the domain name http://www.advocatekhoj.com/. It is also possible to access AdvocateKhoj without using the prefix WWW, however when you do so, the accessed Internet address will not match the address the certificate is valid for and your browser will alert you with a warning. If you do not click Yes (or Continue or OK) to proceed, you will NOT be able to login.",
        },
        {
          question: "Why do I need to enable cookies to use AdvocateKhoj?",
          answer:
            "Cookies allow websites such as AdvocateKhoj to track a user's progress through the site. While cookies may store personal non-sensitive information that you enter into a webpage for any website, they cannot access and read your hard drive, and most expire when a session is over. For you to use AdvocateKhoj properly, cookies need to be enabled on your computer. Any information you enter while using AdvocateKhoj is stored on our servers and not in cookies. If security and/or privacy settings for your web browser are set to the medium-high or highest levels, cookies will be disallowed and other web browser functions disabled and you will not be able to use AdvocateKhoj. You need to reset your web browser's security and/or privacy levels and use AdvocateKhoj with confidence. Use the default settings as recommended by Microsoft and Netscape.",
        },
        {
          question: "What if I forget my AdvocateKhoj Username and Password?",
          answer:
            "If you forget your AdvocateKhoj Username or Password, you can use the password recovery option on the login page. Click on 'Forgot Password' and follow the instructions to reset your credentials.",
        },
        {
          question: "How do I contact Customer Support /Technical Support?",
          answer:
            "Click on the Contact Us page to send a message to our customer/technical support staff. You can also reach us through the contact information provided in the footer of our website.",
        },
      ],
    },
  ];

  return (
    <PageLayout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Badge className="mb-4" variant="secondary">
                Advocate Area
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Grow Your Legal Practice Online
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Join AdvocateKhoj to connect with clients seeking legal
                representation. Showcase your expertise, respond to cases, and
                build your professional reputation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/advocate/register">
                  <Button size="lg">Register Now</Button>
                </Link>
                <Link href="/login?userType=advocate">
                  <Button size="lg" variant="secondary">
                    Advocate Log In
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                How It Works
              </h2>
              <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
                {howItWorksDescription}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {howItWorksSteps.map((step, index) => (
                <div key={index} className="relative">
                  <Card className="h-full hover:shadow-lg transition-shadow border-2 hover:border-primary/20">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-4">
                        <div className="h-14 w-14 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold">
                          {step.step}
                        </div>
                        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <step.icon className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <CardTitle className="text-lg font-bold text-gray-900">
                        {step.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600 text-sm leading-relaxed">
                        {step.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                  {index < howItWorksSteps.length - 1 && (
                    <div className="hidden lg:block absolute -bottom-4 left-1/2 transform -translate-x-1/2 lg:bottom-auto lg:top-1/2 lg:-right-4 lg:left-auto lg:-translate-y-1/2 lg:translate-x-0">
                      <ArrowRight className="h-6 w-6 text-primary rotate-90 lg:rotate-0" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Join AdvocateKhoj
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Benefits of being part of India's trusted legal platform
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <benefit.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">
                      {benefit.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Membership Plans Section */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Membership Plans
              </h2>
              <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
                Join India's leading legal platform and expand your practice.
                Choose a membership plan that suits your professional goals and
                start connecting with clients actively seeking legal
                representation.
              </p>
            </div>

            {/* Eligibility Section */}
            <Card className="mb-12 border-2 border-primary/20">
              <CardHeader className="bg-primary/5">
                <CardTitle className="text-2xl text-center">
                  Who Can Join AdvocateKhoj?
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-center text-xl font-bold text-primary mb-6">
                  Any advocate in good standing with their State BAR Council is
                  eligible to join AdvocateKhoj.
                </p>
                <div className="max-w-2xl mx-auto space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Simple Process:</strong> Register online, verify
                    your credentials, select a membership plan, and start
                    connecting with clients looking for legal representation.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>What You Get:</strong> Complete profile control,
                    access to verified client cases, secure messaging system,
                    and the ability to showcase your expertise to potential
                    clients across India.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Quality Assurance:</strong> All advocates are
                    verified through our stringent screening process to maintain
                    the highest standards of professionalism on our platform.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Subscription Plans Table */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Subscription Plans
              </h3>
              <p className="text-center text-gray-600 mb-8">
                We offer the following subscription plans:
              </p>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse border-2 border-gray-300 bg-white">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-6 py-3 text-left font-semibold text-gray-900">
                        Serial No.
                      </th>
                      <th className="border border-gray-300 px-6 py-3 text-left font-semibold text-gray-900">
                        Subscription Plans
                      </th>
                      <th className="border border-gray-300 px-6 py-3 text-left font-semibold text-gray-900">
                        Validity
                      </th>
                      <th className="border border-gray-300 px-6 py-3 text-left font-semibold text-gray-900">
                        Discount
                      </th>
                      <th className="border border-gray-300 px-6 py-3 text-left font-semibold text-gray-900">
                        Net Price
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-6 py-4 text-center">
                        1.
                      </td>
                      <td className="border border-gray-300 px-6 py-4 font-medium">
                        Silver Plan
                      </td>
                      <td className="border border-gray-300 px-6 py-4">
                        3 months
                      </td>
                      <td className="border border-gray-300 px-6 py-4">-</td>
                      <td className="border border-gray-300 px-6 py-4 font-semibold">
                        400 INR + GST*
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-6 py-4 text-center">
                        2.
                      </td>
                      <td className="border border-gray-300 px-6 py-4 font-medium">
                        Gold Plan
                      </td>
                      <td className="border border-gray-300 px-6 py-4">
                        6 months
                      </td>
                      <td className="border border-gray-300 px-6 py-4">
                        12.5%
                      </td>
                      <td className="border border-gray-300 px-6 py-4 font-semibold">
                        700 INR + GST*
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-6 py-4 text-center">
                        3.
                      </td>
                      <td className="border border-gray-300 px-6 py-4 font-medium">
                        Platinum Plan
                      </td>
                      <td className="border border-gray-300 px-6 py-4">
                        12 months
                      </td>
                      <td className="border border-gray-300 px-6 py-4">25%</td>
                      <td className="border border-gray-300 px-6 py-4 font-semibold">
                        1200 INR + GST*
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p className="text-sm text-gray-600 mt-3">*18% GST</p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <Link href="/advocate/register">
                <Button size="lg" className="px-8">
                  Register Now as Advocate
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Policy Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Policy
              </h2>
            </div>

            <div className="space-y-8">
              {/* We Secure Your Personal Information */}
              <Card className="border-l-4 border-l-primary">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900">
                    We Secure Your Personal Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    AdvocateKhoj considers all information submitted to this
                    site as{" "}
                    <span className="font-semibold italic">
                      "sensitive & confidential"
                    </span>
                    . Hence, we take immense measure to secure all information
                    submitted and viewed on our site. All login and
                    authenticated areas on our site use SSL-High Grade
                    Encryption for the transfer of your data.
                  </p>
                </CardContent>
              </Card>

              {/* Using Internal Messaging System (IMS) */}
              <Card className="border-l-4 border-l-primary">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900">
                    Using Internal Messaging System (IMS)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    AdvocateKhoj provides you with an Internal Messaging System
                    that works just like your regular email. The IMS has an
                    inbox, sent items and deleted folder. AdvocateKhoj highly
                    recommends that you use IMS to communicate with potential
                    clients.
                  </p>
                </CardContent>
              </Card>

              {/* We Will Not Sell Your Personal Information */}
              <Card className="border-l-4 border-l-primary">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900">
                    We Will Not Sell Your Personal Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    AdvocateKhoj will not sell or distribute your personal
                    information to any company or any individual.
                  </p>
                </CardContent>
              </Card>

              {/* Privacy & Security Notice */}
              <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6">
                <div className="flex items-start gap-3">
                  <Shield className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-2">
                      Privacy & Security Commitment
                    </h3>
                    <p className="text-blue-800 text-sm leading-relaxed">
                      We are committed to protecting your privacy and
                      maintaining the security of your personal information. All
                      data transmission is encrypted using industry-standard SSL
                      protocols. Your trust is our priority.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Find answers to common questions about joining AdvocateKhoj as
                an advocate
              </p>

              {/* FAQ Search */}
              <div className="max-w-2xl mx-auto relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search FAQs..."
                  value={faqSearch}
                  onChange={(e) => setFaqSearch(e.target.value)}
                  className="pl-12 pr-10 py-6 text-base"
                />
                {faqSearch && (
                  <button
                    onClick={() => setFaqSearch("")}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <X className="h-5 w-5" />
                  </button>
                )}
              </div>
            </div>

            <div className="space-y-12">
              {faqSections.map((section, sectionIndex) => {
                // Filter FAQs based on search
                const filteredFaqs = section.faqs.filter(
                  (faq) =>
                    faq.question
                      .toLowerCase()
                      .includes(faqSearch.toLowerCase()) ||
                    faq.answer.toLowerCase().includes(faqSearch.toLowerCase())
                );

                // Don't render section if no matching FAQs
                if (filteredFaqs.length === 0 && faqSearch) return null;

                return (
                  <div key={sectionIndex}>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-primary">
                      {section.title}
                    </h3>
                    <Accordion type="single" collapsible className="space-y-4">
                      {(faqSearch ? filteredFaqs : section.faqs).map(
                        (faq, faqIndex) => (
                          <AccordionItem
                            key={faqIndex}
                            value={`section-${sectionIndex}-item-${faqIndex}`}
                            className="border rounded-lg px-6"
                          >
                            <AccordionTrigger className="text-left hover:no-underline">
                              <span className="font-semibold text-gray-900">
                                {faq.question}
                              </span>
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-600 pt-2 whitespace-pre-line">
                              {faq.answer}
                            </AccordionContent>
                          </AccordionItem>
                        )
                      )}
                    </Accordion>
                  </div>
                );
              })}

              {/* No results message */}
              {faqSearch &&
                faqSections.every((section) =>
                  section.faqs.every(
                    (faq) =>
                      !faq.question
                        .toLowerCase()
                        .includes(faqSearch.toLowerCase()) &&
                      !faq.answer
                        .toLowerCase()
                        .includes(faqSearch.toLowerCase())
                  )
                ) && (
                  <div className="text-center py-12">
                    <p className="text-gray-600 mb-4">
                      No FAQs found matching "{faqSearch}"
                    </p>
                    <Button variant="outline" onClick={() => setFaqSearch("")}>
                      Clear Search
                    </Button>
                  </div>
                )}
            </div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary to-primary/90">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Expand Your Practice?
              </h2>
              <p className="text-xl text-white/90 mb-2">
                Join thousands of advocates who are growing their practice
                through AdvocateKhoj
              </p>
              <p className="text-lg text-white/80">
                Have questions? Our support team is here to help you every step
                of the way.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/register?userType=advocate">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-primary hover:bg-gray-100 px-8 py-6 text-lg font-semibold shadow-xl"
                >
                  <UserPlus className="mr-2 h-5 w-5" />
                  Register as Advocate
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-white/20 text-white border-2 border-white backdrop-blur-sm hover:bg-white hover:text-primary px-8 py-6 text-lg font-semibold transition-all shadow-xl"
                >
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Contact Support
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-4 bg-primary text-white rounded-full shadow-lg hover:bg-primary/90 transition-all duration-300 hover:scale-110"
          aria-label="Back to top"
        >
          <ArrowUp className="h-6 w-6" />
        </button>
      )}
    </PageLayout>
  );
}
