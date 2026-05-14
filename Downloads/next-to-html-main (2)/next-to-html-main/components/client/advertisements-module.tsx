"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Plus,
  Building2,
  FileText,
  History,
  Edit,
  Trash2,
  Eye,
  MousePointerClick,
  Calendar,
  Upload,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface AdvertisementsModuleProps {
  onNavigate?: (section: string) => void;
}

type ViewMode =
  | "landing"
  | "overview"
  | "register-business"
  | "new-campaign"
  | "campaign-history"
  | "edit-campaign";

export function AdvertisementsModule({
  onNavigate,
}: AdvertisementsModuleProps) {
  const { toast } = useToast();
  const [isAdvertiser, setIsAdvertiser] = useState(false);
  const [viewMode, setViewMode] = useState<ViewMode>("landing");
  const [businesses, setBusinesses] = useState<any[]>([
    { id: 1, name: "Armada" },
  ]);
  const [campaigns, setCampaigns] = useState<any[]>([
    {
      id: 1,
      name: "Armada C1",
      business: "Armada",
      status: "Active",
      views: 1250,
      clicks: 45,
    },
  ]);

  const [campaignForm, setCampaignForm] = useState({
    name: "",
    business: "",
    webUrl: "",
    description: "",
    targets: [] as string[],
    mode: "click" as "click" | "view",
    maxClicks: "",
    startDate: "",
    banner: null as File | null,
  });

  const targetOptions = [
    {
      value: "advocate-khoj-home",
      label: "1. AdvocateKhoj - Homepage [vertical ads]",
    },
    {
      value: "advocate-khoj-co-branding-1",
      label: "1. AdvocateKhoj - Co-branding Banner 1 [horizontal]",
    },
    {
      value: "advocate-khoj-co-branding-2",
      label: "1. AdvocateKhoj - Co-branding Banner 2 [horizontal]",
    },
    {
      value: "advocate-khoj-co-branding-3",
      label: "1. AdvocateKhoj - Co-branding Banner 3 [horizontal]",
    },
    {
      value: "advocate-khoj-premium-1",
      label: "1. AdvocateKhoj - Premium Banner1 [horizontal]",
    },
    {
      value: "advocate-khoj-premium-2",
      label: "1. AdvocateKhoj - Premium Banner2 [horizontal]",
    },
    {
      value: "law-colleges",
      label: "2. Law Colleges - Homepage [vertical ads]",
    },
    {
      value: "law-colleges-banner",
      label: "2. Law Colleges - Banner [horizontal ads]",
    },
    { value: "law-juwaab", label: "3. Law Juwaab - Homepage [vertical ads]" },
    { value: "law-library", label: "Law Library" },
    {
      value: "agreements-main",
      label: "3. Agreements - Main Index [vertical ads]",
    },
    {
      value: "agreements-content",
      label: "3. Agreements - Content Page [vertical ads]",
    },
    {
      value: "areas-of-law-main",
      label: "3. Areas of Law - Main [vertical ads]",
    },
    {
      value: "areas-of-law-sub",
      label: "3. Areas of Law - Sub Index [vertical ads]",
    },
    {
      value: "areas-of-law-content",
      label: "3. Areas of Law - Content Page [vertical ads]",
    },
    {
      value: "bare-acts-main",
      label: "2. Bare Acts - Main Index [vertical ads]",
    },
    {
      value: "bare-acts-sub",
      label: "3. Bare Acts - Sub Index [vertical ads]",
    },
    {
      value: "bare-acts-content",
      label: "4. Bare Acts - Content Page [vertical ads]",
    },
    { value: "forms-main", label: "3. Forms - Main Index [vertical ads]" },
    { value: "forms-sub", label: "4. Forms - Sub Index [vertical ads]" },
    { value: "forms-content", label: "5. Forms - Content Page [vertical ads]" },
    { value: "legal-tips", label: "Legal Tips" },
    {
      value: "legal-tips-content",
      label: "4. Legal Tips - Content Page [vertical ads]",
    },
    { value: "rules-main", label: "2. Rules - Main Index [vertical ads]" },
    { value: "rules-sub", label: "3. Rules - Sub Index [vertical ads]" },
    { value: "rules-content", label: "4. Rules - Content Page [vertical ads]" },
    { value: "supreme-court", label: "Supreme Court Judgments" },
    {
      value: "supreme-court-judgments",
      label: "2. Supreme Court Judgments [vertical ads]",
    },
  ];

  const clickPackages = [
    { clicks: 500, price: 2700 },
    { clicks: 1000, price: 5100 },
    { clicks: 2500, price: 10000 },
    { clicks: 5000, price: 22000 },
  ];

  const viewPackages = [
    { views: 50000, price: 2700 },
    { views: 100000, price: 5100 },
    { views: 250000, price: 10000 },
    { views: 500000, price: 22000 },
  ];

  useEffect(() => {
    const AUTH_STORAGE_KEY = "user";
    const AUTH_EVENT_NAME = "advocatekhoj-auth-change";

    const readStoredUser = () => {
      if (typeof window === "undefined") return;
      const stored = window.localStorage.getItem(AUTH_STORAGE_KEY);
      if (!stored) {
        setIsAdvertiser(false);
        return;
      }
      try {
        const parsed = JSON.parse(stored);
        setIsAdvertiser(parsed?.userType === "advertiser");
      } catch {
        setIsAdvertiser(false);
      }
    };

    readStoredUser();

    const handleStorage = (event: StorageEvent) => {
      if (event.key === AUTH_STORAGE_KEY) {
        readStoredUser();
      }
    };

    window.addEventListener("storage", handleStorage);
    window.addEventListener(AUTH_EVENT_NAME, readStoredUser);

    return () => {
      window.removeEventListener("storage", handleStorage);
      window.removeEventListener(AUTH_EVENT_NAME, readStoredUser);
    };
  }, []);

  if (!isAdvertiser) {
    return (
      <Card className="border-dashed border-2 border-primary/40 bg-primary/5">
        <CardHeader>
          <CardTitle className="text-2xl">Advertise with AdvocateKhoj</CardTitle>
          <CardDescription>
            Advertising tools are available only for approved advertiser accounts.
            Reach out to our team to activate advertising for your organisation.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-gray-700 leading-relaxed">
            To run campaigns, please contact our support desk or upgrade your account
            to an advertiser profile. We will guide you through available inventory,
            pricing, and approval requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button asChild className="sm:w-auto w-full bg-[#00377b] hover:bg-[#1453a3] text-white">
              <Link href="/contact?context=advertise">Contact Advertising Team</Link>
            </Button>
            <Button
              variant="outline"
              className="sm:w-auto w-full"
              onClick={() => onNavigate?.("overview")}
            >
              ← Back to Dashboard
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  const handleSubmitCampaign = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Campaign Submitted",
      description: "Your advertising campaign has been submitted for review.",
    });
    setViewMode("campaign-history");
  };

  const renderLanding = () => (
    <div className="space-y-6">
      {/* Hero Section */}
      <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-3">
                <div className="h-12 w-12 rounded-lg bg-primary flex items-center justify-center">
                  <Building2 className="h-6 w-6 text-white" />
                </div>
                <Badge className="bg-green-500">Advertise with us</Badge>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-3">
                Reach Legal Professionals Across India
              </h1>
              <p className="text-gray-600 text-lg mb-4">
                Thank you for considering us for your advertising needs. Click
                HERE to create a New Campaign.
              </p>
              <p className="text-gray-700 mb-4">
                The portal receives over{" "}
                <span className="font-semibold text-primary">
                  5 lakhs visitors
                </span>{" "}
                accessing more than{" "}
                <span className="font-semibold text-primary">
                  12 lakhs pages per month
                </span>
                . To discuss customized marketing campaigns including online
                display and promotion at AdvocateKhoj, please contact:
              </p>
              <div className="bg-white p-4 rounded-lg border space-y-2">
                <p className="font-semibold text-gray-900">
                  Ms. Eazedeath Kurvila
                </p>
                <p className="text-gray-700">
                  Phone:{" "}
                  <a
                    href="tel:+918494195400"
                    className="text-primary hover:underline"
                  >
                    +91-8494195400
                  </a>
                  ,{" "}
                  <a
                    href="tel:08612786490"
                    className="text-primary hover:underline"
                  >
                    0861-2786490
                  </a>
                </p>
                <p className="text-gray-700">
                  Email:{" "}
                  <a
                    href="mailto:eazedeathk@advocatekhoj.in"
                    className="text-primary hover:underline"
                  >
                    eazedeathk@advocatekhoj.in
                  </a>
                </p>
              </div>
              <div className="mt-4">
                <a
                  href="/media-kit.pdf"
                  target="_blank"
                  className="text-primary hover:underline font-medium flex items-center gap-2"
                >
                  <FileText className="h-4 w-4" />
                  Download Media Kit (PDF, size 470 KB)
                </a>
              </div>
            </div>
            <div className="w-full md:w-auto">
              <img
                src="/placeholder-ad-banner.png"
                alt="Advertising"
                className="w-full md:w-64 h-auto rounded-lg shadow-lg"
                onError={(e) => {
                  e.currentTarget.src =
                    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjU2IiBoZWlnaHQ9IjE5MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjU2IiBoZWlnaHQ9IjE5MiIgZmlsbD0iI2YzZjRmNiIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM5Y2EzYWYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5BZHZlcnRpc2luZzwvdGV4dD48L3N2Zz4=";
                }}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Benefits */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center mb-2">
              <Eye className="h-5 w-5 text-blue-600" />
            </div>
            <CardTitle className="text-lg">Massive Reach</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              5+ lakh monthly visitors accessing 12+ lakh pages per month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="h-10 w-10 rounded-lg bg-green-100 flex items-center justify-center mb-2">
              <Building2 className="h-5 w-5 text-green-600" />
            </div>
            <CardTitle className="text-lg">Targeted Audience</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Direct access to advocates, law students, and legal professionals
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="h-10 w-10 rounded-lg bg-purple-100 flex items-center justify-center mb-2">
              <MousePointerClick className="h-5 w-5 text-purple-600" />
            </div>
            <CardTitle className="text-lg">Flexible Campaigns</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Choose between click-based or view-based advertising models
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Call to Action */}
      <Card className="bg-primary text-white">
        <CardContent className="pt-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-3">Ready to Get Started?</h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Manage your campaigns, track performance, and reach your target
              audience effectively through our advertising platform.
            </p>
            <Button
              size="lg"
              variant="secondary"
              onClick={() => setViewMode("overview")}
              className="font-semibold"
            >
              Proceed to Ad Manager
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderOverview = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Ad Manager</h2>
          <p className="text-gray-600">
            Manage your advertising campaigns and track performance.
          </p>
        </div>
        <Button variant="outline" onClick={() => setViewMode("landing")}>
          Back to Info
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card
          className="hover:shadow-lg transition-shadow cursor-pointer border-2 hover:border-primary"
          onClick={() => setViewMode("register-business")}
        >
          <CardHeader>
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
              <Building2 className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>Business Registration</CardTitle>
            <CardDescription>
              Register your business details for advertising
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full">
              <Plus className="mr-2 h-4 w-4" />
              Register Business
            </Button>
          </CardContent>
        </Card>

        <Card
          className="hover:shadow-lg transition-shadow cursor-pointer border-2 hover:border-primary"
          onClick={() => setViewMode("new-campaign")}
        >
          <CardHeader>
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
              <FileText className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>Submit a Campaign</CardTitle>
            <CardDescription>Create a new advertising campaign</CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full">
              <Plus className="mr-2 h-4 w-4" />
              New Campaign
            </Button>
          </CardContent>
        </Card>

        <Card
          className="hover:shadow-lg transition-shadow cursor-pointer border-2 hover:border-primary"
          onClick={() => setViewMode("campaign-history")}
        >
          <CardHeader>
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
              <History className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>Campaign History</CardTitle>
            <CardDescription>View and manage your campaigns</CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full">
              <Eye className="mr-2 h-4 w-4" />
              View Campaigns
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Quick Stats */}
      <Card>
        <CardHeader>
          <CardTitle>Your Advertising Statistics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <p className="text-3xl font-bold text-primary">
                {campaigns.length}
              </p>
              <p className="text-sm text-gray-600 mt-1">Active Campaigns</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <p className="text-3xl font-bold text-primary">
                {campaigns.reduce((acc, c) => acc + c.views, 0)}
              </p>
              <p className="text-sm text-gray-600 mt-1">Total Views</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <p className="text-3xl font-bold text-primary">
                {campaigns.reduce((acc, c) => acc + c.clicks, 0)}
              </p>
              <p className="text-sm text-gray-600 mt-1">Total Clicks</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <p className="text-3xl font-bold text-primary">
                {businesses.length}
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Registered Businesses
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderBusinessRegistration = () => (
    <Card>
      <CardHeader>
        <CardTitle>Business Registration</CardTitle>
        <CardDescription>
          Register your business to start advertising on AdvocateKhoj
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="businessName">Business Name *</Label>
            <Input id="businessName" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="businessCategory">Business Category *</Label>
            <Select required>
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="e-commerce">E-Commerce</SelectItem>
                <SelectItem value="education">Education</SelectItem>
                <SelectItem value="legal-services">Legal Services</SelectItem>
                <SelectItem value="consulting">Consulting</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="businessDescription">Business Description</Label>
            <Textarea
              id="businessDescription"
              placeholder="Brief description of your business"
              rows={4}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="businessEmail">Email *</Label>
              <Input id="businessEmail" type="email" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="businessPhone">Phone *</Label>
              <Input id="businessPhone" type="tel" required />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="businessWebsite">Website</Label>
            <Input id="businessWebsite" type="url" placeholder="https://" />
          </div>

          <div className="flex gap-3">
            <Button type="submit">Register Business</Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => setViewMode("overview")}
            >
              Cancel
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );

  const renderNewCampaign = () => (
    <Card>
      <CardHeader>
        <CardTitle>New / Edit Campaign</CardTitle>
        <CardDescription>
          Create a new advertising campaign to promote your business
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmitCampaign} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="campaignName">Campaign Name *</Label>
            <Input
              id="campaignName"
              value={campaignForm.name}
              onChange={(e) =>
                setCampaignForm({ ...campaignForm, name: e.target.value })
              }
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="business">Business *</Label>
            <Select
              value={campaignForm.business}
              onValueChange={(value) =>
                setCampaignForm({ ...campaignForm, business: value })
              }
              required
            >
              <SelectTrigger>
                <SelectValue placeholder="Select business" />
              </SelectTrigger>
              <SelectContent>
                {businesses.map((business) => (
                  <SelectItem key={business.id} value={business.name}>
                    {business.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <p className="text-xs text-blue-600">
              Want to add another business?{" "}
              <button
                type="button"
                onClick={() => setViewMode("register-business")}
                className="underline"
              >
                Click here
              </button>
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="webUrl">Web URL *</Label>
            <Input
              id="webUrl"
              type="url"
              placeholder="https://www.example.com"
              value={campaignForm.webUrl}
              onChange={(e) =>
                setCampaignForm({ ...campaignForm, webUrl: e.target.value })
              }
              required
            />
            <p className="text-xs text-gray-500">
              (Format: www.advocatekhoj.com)
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="target">Target *</Label>
            <Select required>
              <SelectTrigger className="h-32">
                <SelectValue placeholder="Select target pages" />
              </SelectTrigger>
              <SelectContent className="max-h-96">
                {targetOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <p className="text-xs text-red-600">
              (The location where your campaign would be displayed)
            </p>
          </div>

          {/* Ad/Banner Requirements */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Ad / Banner Requirements</h4>
            <div className="text-sm space-y-1">
              <p>
                <strong>Dimensions:</strong>
              </p>
              <p>Width: ~728 px</p>
              <p>Height: ~90 px (Maximum)</p>
              <p>
                <strong>Type:</strong> .jpg, .jpeg, .gif
              </p>
            </div>
          </div>

          {/* Campaign Mode */}
          <div className="space-y-2">
            <Label>Campaign Mode *</Label>
            <div className="flex gap-4">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="mode"
                  value="click"
                  checked={campaignForm.mode === "click"}
                  onChange={(e) =>
                    setCampaignForm({ ...campaignForm, mode: "click" })
                  }
                  className="w-4 h-4"
                />
                <span className="flex items-center gap-2">
                  <MousePointerClick className="h-4 w-4" />
                  Click Mode
                </span>
              </label>
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="mode"
                  value="view"
                  checked={campaignForm.mode === "view"}
                  onChange={(e) =>
                    setCampaignForm({ ...campaignForm, mode: "view" })
                  }
                  className="w-4 h-4"
                />
                <span className="flex items-center gap-2">
                  <Eye className="h-4 w-4" />
                  View Mode
                </span>
              </label>
            </div>
          </div>

          {/* Maximum Clicks/Views */}
          <div className="space-y-2">
            <Label htmlFor="maxClicks">
              {campaignForm.mode === "click"
                ? "Maximum Clicks *"
                : "Maximum Views *"}
            </Label>
            <Select
              value={campaignForm.maxClicks}
              onValueChange={(value) =>
                setCampaignForm({ ...campaignForm, maxClicks: value })
              }
              required
            >
              <SelectTrigger>
                <SelectValue placeholder="--select a plan--" />
              </SelectTrigger>
              <SelectContent>
                {(campaignForm.mode === "click"
                  ? clickPackages
                  : viewPackages
                ).map((pkg) => {
                  const count =
                    campaignForm.mode === "click"
                      ? "clicks" in pkg
                        ? pkg.clicks
                        : 0
                      : "views" in pkg
                      ? pkg.views
                      : 0;
                  return (
                    <SelectItem key={count} value={String(count)}>
                      {count.toLocaleString()}{" "}
                      {campaignForm.mode === "click" ? "Clicks" : "Views"} for
                      Rs. {pkg.price.toLocaleString()}
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>
          </div>

          {/* Start Date */}
          <div className="space-y-2">
            <Label htmlFor="startDate">Preferred Start Date *</Label>
            <div className="flex gap-2">
              <Input
                id="startDate"
                type="text"
                placeholder="DD-MM-YYYY"
                value={campaignForm.startDate}
                onChange={(e) =>
                  setCampaignForm({
                    ...campaignForm,
                    startDate: e.target.value,
                  })
                }
                required
              />
              <Button type="button" variant="outline">
                <Calendar className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-xs text-gray-500">(DD-MM-YYYY)</p>
          </div>

          {/* Banner Upload */}
          <div className="space-y-2">
            <Label htmlFor="banner">Banner *</Label>
            <div className="flex gap-2">
              <Input
                id="banner"
                type="file"
                accept=".jpg,.jpeg,.gif"
                onChange={(e) =>
                  setCampaignForm({
                    ...campaignForm,
                    banner: e.target.files?.[0] || null,
                  })
                }
                required
              />
              <Button type="button" variant="outline">
                <Upload className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <Button type="submit">Save</Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => setViewMode("overview")}
            >
              Cancel
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );

  const renderCampaignHistory = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Campaign History</h2>
          <p className="text-gray-600">
            View and manage all your advertising campaigns
          </p>
        </div>
        <Button onClick={() => setViewMode("new-campaign")}>
          <Plus className="mr-2 h-4 w-4" />
          New Campaign
        </Button>
      </div>

      {campaigns.length === 0 ? (
        <Card>
          <CardContent className="text-center py-12">
            <p className="text-gray-600 mb-4">You Have No Approved Campaigns</p>
            <Button onClick={() => setViewMode("new-campaign")}>
              Create Your First Campaign
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {campaigns.map((campaign) => (
            <Card key={campaign.id}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {campaign.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      Business: {campaign.business}
                    </p>
                    <div className="flex gap-4 mt-2">
                      <span className="text-sm">
                        <Eye className="inline h-4 w-4 mr-1" />
                        {campaign.views} views
                      </span>
                      <span className="text-sm">
                        <MousePointerClick className="inline h-4 w-4 mr-1" />
                        {campaign.clicks} clicks
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Badge
                      variant={
                        campaign.status === "Active" ? "default" : "secondary"
                      }
                    >
                      {campaign.status}
                    </Badge>
                    <Button variant="ghost" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Breadcrumb */}
      {viewMode !== "landing" && viewMode !== "overview" && (
        <Button
          variant="ghost"
          onClick={() => setViewMode("overview")}
          className="mb-4"
        >
          ← Back to Overview
        </Button>
      )}

      {/* Render current view */}
      {viewMode === "landing" && renderLanding()}
      {viewMode === "overview" && renderOverview()}
      {viewMode === "register-business" && renderBusinessRegistration()}
      {viewMode === "new-campaign" && renderNewCampaign()}
      {viewMode === "campaign-history" && renderCampaignHistory()}
    </div>
  );
}
