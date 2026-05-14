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
  Search,
  FileText,
  MessageSquare,
  CheckCircle,
  Shield,
  Clock,
  Users,
  Star,
  ArrowRight,
  X,
  ArrowUp,
  UserPlus,
} from "lucide-react";

export default function ClientAreaPage() {
  const [faqSearch, setFaqSearch] = useState("");
  const [showBackToTop, setShowBackToTop] = useState(false);

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

  const howItWorksSteps = [
    {
      step: "1",
      title: "Post a Case",
      description:
        "User creates an account and posts their legal case with details. Describe your legal issue, location preferences, and urgency level in a secure environment.",
      icon: FileText,
    },
    {
      step: "2",
      title: "Authentication & Database",
      description:
        "Your case is securely stored in our database after authentication. All information is encrypted and protected with industry-standard security protocols.",
      icon: Shield,
    },
    {
      step: "3",
      title: "Advocates View Cases",
      description:
        "Member advocates receive notifications and can view your case details. Qualified advocates matching your requirements are automatically notified.",
      icon: Users,
    },
    {
      step: "4",
      title: "Advocates Reply",
      description:
        "Interested advocates send their responses and proposals to your case. Review their credentials, experience, and approach to your legal matter.",
      icon: MessageSquare,
    },
    {
      step: "5",
      title: "Review Advocate Profiles",
      description:
        "User can view detailed advocate profiles including qualifications, experience, case history, and client reviews to make an informed decision.",
      icon: Search,
    },
    {
      step: "6",
      title: "Select the Best Advocate",
      description:
        "Choose the advocate that best fits your requirements based on their experience, expertise, fees, and communication. Begin your legal journey with confidence.",
      icon: CheckCircle,
    },
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Verified Advocates",
      description:
        "All advocates are verified with their BAR Council registration and credentials.",
    },
    {
      icon: Clock,
      title: "Quick Response",
      description:
        "Receive responses from multiple advocates within 24-48 hours of posting your case.",
    },
    {
      icon: Users,
      title: "Wide Network",
      description:
        "Access to thousands of advocates across India specializing in various practice areas.",
    },
    {
      icon: Star,
      title: "Transparent Reviews",
      description:
        "Read genuine reviews and ratings from clients to make informed decisions.",
    },
  ];

  const faqSections = [
    {
      title: "Using AdvocateKhoj",
      faqs: [
        {
          question: "What is the purpose of AdvocateKhoj?",
          answer:
            "AdvocateKhoj helps people find the right advocate. Anyone who needs a legal assistance can present a case (answer some some simple questions about their legal situation) 'free of cost' on the AdvocateKhoj website without revealing his or her identity. Then, subscribing advocates of AdvocateKhoj review your case and then decide whether to respond. Once you get a reply from an advocate, we provide you with the advocate's background information so that you can make a smart decision.",
        },
        {
          question: "What does AdvocateKhoj cost?",
          answer:
            "NOTHING! AdvocateKhoj is FREE. Both consumers and businesses can use AdvocateKhoj for FREE to find the right advocate for their case. There are no hidden costs, fees, or any other charges.\n\nEven after you find an advocate using AdvocateKhoj, there is no obligation to engage that advocate. AdvocateKhoj provides you with a choice of knowledgeable, competent advocates for FREE. You can then decide whether to engage that advocate or not.",
        },
        {
          question:
            "Why should people use AdvocateKhoj to find the right advocate?",
          answer:
            "Traditionally, people have found advocates through acquaintance, friends, or the Bar Association. The AdvocateKhoj founders realized that each of these resources had severe limitations, and did not allow the consumer to make an informed decision when selecting a legal counsel. Though friends may try to help you find a good advocate, they may probably steer you towards a totally inappropriate advocate. Just because your friend knows a great tax advocate doesn't mean that this advocate can handle your divorce!\n\nSo, here's why using AdvocateKhoj is the best way to find the right advocate:\n\n1) We match you only with advocates specifically qualified to handle your case.\n2) You get to view advocate profiles – their background information, education and legal experiences. With AdvocateKhoj, you stay in control of the process - and in the end, you can make an informed decision about hiring an advocate.",
        },
        {
          question:
            "What makes AdvocateKhoj different from other legal service Web sites?",
          answer:
            "Several factors make AdvocateKhoj unique:\n\n1) We screen advocates before they join our program. If they don't measure up, we will reject them thereby providing consumers with reasonably competent advocates only - not an overwhelming list of indistinguishable names and links. That's what other online services are for!\n\n2) We require advocates to actively participate. This means an advocate won't be successful with AdvocateKhoj just by passing our screening process and paying their dues. We require advocates to regularly use our service and interact with clients. Otherwise, you won't choose them! First and foremost, AdvocateKhoj strives to serve the consumer. We challenge you to find other online services that do the same!",
        },
        {
          question:
            "Is AdvocateKhoj completely confidential? Do I have to reveal my identity?",
          answer:
            "Legal problems are often sensitive issues. Who really wants to call random advocates out of the phone book to discuss personal issues? Sometimes, even asking a friend about finding an advocate can be uncomfortable. With AdvocateKhoj, you don't have to show your face or talk to anyone until you have confidentially described your case on our secure Web site.\n\nAdvocates will review your case in writing - you don't have to say a thing! We won't release your contact information (name, address, telephone number) to anyone, including the advocates interested in helping you, until YOU decide to do so.\n\nAdvocates will only see your case summary and where you need legal help. You can read responses from advocates and also check out their professional backgrounds – and only then you need to make a phone call. By the time you connect with an advocate, both of you already know a good deal about each other! You can get started on solving your problem without the awkwardness or fear of the unknown.",
        },
        {
          question: "Can I use AdvocateKhoj without presenting a case?",
          answer:
            "No. The point is to gather information and make an intelligent match. So, we always need you to tell us about your legal matter first on our website. We do not accept any legal matters via telephone or e-mail. Presenting your case on our website takes only a few minutes and it's confidential and easy.",
        },
        {
          question: "How long does it take to present a case?",
          answer:
            "Presenting your case on AdvocateKhoj will take about 10 minutes or less depending on the nature of your case. Using easy-to-navigate forms, you can give a brief description of your legal problem which is put into our case database for advocates to view.",
        },
        {
          question: "How long will it take to get an advocate response?",
          answer:
            "Finding an advocate using AdvocateKhoj will most likely take 1-3 business days. You may begin to receive advocate responses immediately, but we recommend you to wait a day or two to allow the majority of advocates to review and make responses to your case.\n\nAdvocateKhoj actually saves you time in the end. The alternative to AdvocateKhoj is calling each advocate individually and scheduling a consultation, which may not always be fruitful. You may have to speak with 5-10 different advocates before you find someone who has the experience to handle your case and also provide value for your money. Plus, we provide more background information about the advocates, which you rarely get from a consultation.",
        },
        {
          question: "What should I do when I get an advocate response?",
          answer:
            "When an advocate responds to your case, you will receive an email in your AdvocateKhoj inbox wherein you can view the advocate's response to you, also the advocate's profile and background information. Contact the advocates whom you feel would be the best for your case. You may also begin to receive telephone calls from advocates if you agreed to release your contact information. Remember, unless you contact an advocate or agreed to release your contact information, the advocates interested in your case will not know your personal details.",
        },
        {
          question: "How do I edit my case if I want to make changes later?",
          answer:
            "You can modify your case at any time by following these steps:\n\n(1) Modify and/or review each step of the entire case presentation process for the case to be updated\n\n(2) Your case will then be presented again on AdvocateKhoj and a new e-mail notice will be sent to all the subscribing advocates of AdvocateKhoj.",
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
                Client Area
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Find the Right Legal Representation
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Connect with qualified and experienced advocates across India.
                Post your case, review profiles, and hire the advocate that best
                fits your legal needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/register?userType=client">
                  <Button size="lg">Get Started</Button>
                </Link>
                <Link href="/login?userType=client">
                  <Button size="lg" variant="outline">
                    Client Login
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
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Six simple steps to find and hire the right advocate for your
                legal matter
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {howItWorksSteps.map((step, index) => (
                <div key={index} className="relative">
                  <Card className="h-full hover:shadow-lg transition-shadow border-2 hover:border-primary/30">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-4">
                        <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center ring-2 ring-primary/20">
                          <step.icon className="h-7 w-7 text-primary" />
                        </div>
                        <span className="text-5xl font-bold text-primary/20">
                          {step.step}
                        </span>
                      </div>
                      <CardTitle className="text-xl">{step.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600 leading-relaxed">
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
                Why Choose AdvocateKhoj
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Benefits of using our platform to find legal representation
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

        {/* Policy Section */}
        <section className="py-16 bg-white">
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
                    advocates.
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
        <section className="py-16 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Find answers to common questions about using AdvocateKhoj as a
                client
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
                Ready to Find Your Advocate?
              </h2>
              <p className="text-xl text-white/90 mb-2">
                Join thousands of clients who have found the right legal
                representation through AdvocateKhoj
              </p>
              <p className="text-lg text-white/80">
                Have questions? Our support team is here to help you every step
                of the way.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/register?userType=client">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-primary hover:bg-gray-100 px-8 py-6 text-lg font-semibold shadow-xl"
                >
                  <UserPlus className="mr-2 h-5 w-5" />
                  Create Free Account
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
