"use client";

import { useState } from "react";
import PageLayout from "@/components/layout/page-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Mail, MapPin, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import ReCaptcha from "@/components/ui/recaptcha";

export default function ContactPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    contactName: "",
    email: "",
    userType: "",
    category: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent Successfully!",
        description: "We'll get back to you as soon as possible.",
      });
      setIsSubmitting(false);
      // Reset form
      setForm({
        contactName: "",
        email: "",
        userType: "",
        category: "",
        subject: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <PageLayout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We Want To Hear From You... Our goal is to provide a successful
              avenue for talk. Your feedbacks are very important to us.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form - Takes 2 columns */}
            <div className="lg:col-span-2">
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl">Web Form</CardTitle>
                  <CardDescription>
                    Please use one of the following methods to submit feedback,
                    customer support or for business enquiry.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Contact Name */}
                    <div className="space-y-2">
                      <Label htmlFor="contactName">
                        Contact Name <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="contactName"
                        type="text"
                        placeholder="Enter your full name"
                        value={form.contactName}
                        onChange={(e) =>
                          setForm({ ...form, contactName: e.target.value })
                        }
                        required
                        className="border-gray-300"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <Label htmlFor="email">
                        Email <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email address"
                        value={form.email}
                        onChange={(e) =>
                          setForm({ ...form, email: e.target.value })
                        }
                        required
                        className="border-gray-300"
                      />
                    </div>

                    {/* You are a */}
                    <div className="space-y-2">
                      <Label htmlFor="userType">
                        You are a <span className="text-red-500">*</span>
                      </Label>
                      <Select
                        value={form.userType}
                        onValueChange={(value) =>
                          setForm({ ...form, userType: value })
                        }
                        required
                      >
                        <SelectTrigger className="border-gray-300">
                          <SelectValue placeholder="--select one--" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="client">Client</SelectItem>
                          <SelectItem value="advocate">Advocate</SelectItem>
                          <SelectItem value="law-student">
                            Law Student
                          </SelectItem>
                          <SelectItem value="law-college">
                            Law College
                          </SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* You are contacting us regarding */}
                    <div className="space-y-2">
                      <Label htmlFor="category">
                        You are contacting us regarding{" "}
                        <span className="text-red-500">*</span>
                      </Label>
                      <Select
                        value={form.category}
                        onValueChange={(value) =>
                          setForm({ ...form, category: value })
                        }
                        required
                      >
                        <SelectTrigger className="border-gray-300">
                          <SelectValue placeholder="--select one from the list--" />
                        </SelectTrigger>
                        <SelectContent className="max-h-[300px]">
                          <SelectItem value="feedback-suggestions">
                            Feedback - Suggestions / Comments
                          </SelectItem>
                          <SelectItem value="feedback-compliment">
                            Feedback - Compliment
                          </SelectItem>
                          <SelectItem value="feedback-complaint">
                            Feedback - Complaint
                          </SelectItem>
                          <SelectItem value="billing-queries">
                            Billing - Billing Related Queries
                          </SelectItem>
                          <SelectItem value="billing-membership">
                            Billing - Membership Packages
                          </SelectItem>
                          <SelectItem value="advocate-forgot-password">
                            Website: Advocate Area - Forgot Password
                          </SelectItem>
                          <SelectItem value="advocate-forgot-username">
                            Website: Advocate Area - Forgot Username
                          </SelectItem>
                          <SelectItem value="advocate-other-issues">
                            Website: Advocate Area - Other Issues
                          </SelectItem>
                          <SelectItem value="advocate-technical-issues">
                            Website: Advocate Area - Technical Issues - Errors
                            Encountered
                          </SelectItem>
                          <SelectItem value="client-forgot-password">
                            Website: Client Area - Forgot Password
                          </SelectItem>
                          <SelectItem value="client-forgot-username">
                            Website: Client Area - Forgot Username
                          </SelectItem>
                          <SelectItem value="client-other-issues">
                            Website: Client Area - Other Issues
                          </SelectItem>
                          <SelectItem value="client-technical-issues">
                            Website: Client Area - Technical Issues - Errors
                            Encountered
                          </SelectItem>
                          <SelectItem value="colleges-add-college">
                            Website: Law Colleges - Add College Details
                          </SelectItem>
                          <SelectItem value="colleges-add-event">
                            Website: Law Colleges - Add Event Details
                          </SelectItem>
                          <SelectItem value="colleges-add-course">
                            Website: Law Colleges - Add Course Details
                          </SelectItem>
                          <SelectItem value="colleges-report-changes">
                            Website: Law Colleges - Report Changes
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Subject */}
                    <div className="space-y-2">
                      <Label htmlFor="subject">
                        Subject <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="subject"
                        type="text"
                        placeholder="Brief description of your inquiry"
                        value={form.subject}
                        onChange={(e) =>
                          setForm({ ...form, subject: e.target.value })
                        }
                        required
                        className="border-gray-300"
                      />
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <Label htmlFor="message">
                        Message <span className="text-red-500">*</span>
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Please provide detailed information about your inquiry..."
                        value={form.message}
                        onChange={(e) =>
                          setForm({ ...form, message: e.target.value })
                        }
                        required
                        rows={6}
                        className="border-gray-300 resize-none"
                      />
                    </div>

                    <div className="flex justify-center">
                      <ReCaptcha />
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Details Sidebar - Takes 1 column */}
            <div className="space-y-6">
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="text-xl">Contact Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Address */}
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Address</h3>
                      <p className="text-sm text-gray-600">
                        AdvocateKhoj
                        <br />
                        #204, Crescent Towers,
                        <br />
                        Saethrammadhara,
                        <br />
                        Visakhapatnam - 530013
                        <br />
                        Andhra Pradesh, India
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <a
                        href="mailto:customer_service@advocatekhoj.in"
                        className="text-sm text-primary hover:underline"
                      >
                        customer_service@advocatekhoj.in
                      </a>
                    </div>
                  </div>

                  {/* Support Hours */}
                  <div className="flex items-start gap-3">
                    <MessageSquare className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Support Hours</h3>
                      <p className="text-sm text-gray-600">
                        Monday - Friday: 9:00 AM - 6:00 PM IST
                        <br />
                        Saturday: 10:00 AM - 2:00 PM IST
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Tips */}
              <Card className="shadow-xl bg-primary/5 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-lg">Quick Tips</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        Please provide as much detail as possible in your
                        message
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        We typically respond within 24-48 business hours
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
