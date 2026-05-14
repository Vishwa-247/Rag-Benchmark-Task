"use client";

import type React from "react";

import { useState } from "react";
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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { INDIAN_STATES, getCitiesByState } from "@/lib/indian-locations";

export function PostCaseForm() {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    legalIssue: "",
    description: "",
    state: "",
    city: "",
    urgency: "",
    budget: "",
    isAnonymous: false,
    language: "English",
    experienceLevel: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission - connect to existing backend
    console.log("Case posted:", formData);
  };

  const legalCategories = [
    "Administrative Law",
    "Arbitration",
    "Banking",
    "Capital Market",
    "Commercial",
    "Constitutional",
    "Consumer Rights",
    "Corporate Law",
    "Criminal",
    "Cyber Law",
    "Direct Taxation",
    "Environmental Law",
    "Export and Import Laws",
    "Family",
    "Heritage and National Importance",
    "Indirect Taxation",
    "Insurance and Infrastructure Law",
  ];

  const legalIssues = [
    "Central Sales Tax",
    "Excise",
    "Others",
    "Service Tax",
    "Value Added Tax",
  ];

  const selectedCities = formData.state
    ? getCitiesByState(formData.state)
    : [];

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl">Post Your Legal Case</CardTitle>
        <p className="text-muted-foreground">
          Describe your legal matter and connect with qualified advocates
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Case Details</h3>

            <div className="space-y-2">
              <Label htmlFor="title">Case Title *</Label>
              <Input
                id="title"
                placeholder="Brief title for your legal case"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="category">Legal Category *</Label>
                <Select
                  value={formData.category}
                  onValueChange={(value) =>
                    setFormData({ ...formData, category: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {legalCategories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="legalIssue">Specific Legal Issue *</Label>
                <Select
                  value={formData.legalIssue}
                  onValueChange={(value) =>
                    setFormData({ ...formData, legalIssue: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select issue" />
                  </SelectTrigger>
                  <SelectContent>
                    {legalIssues.map((issue) => (
                      <SelectItem key={issue} value={issue}>
                        {issue}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Case Description *</Label>
              <Textarea
                id="description"
                placeholder="Describe your legal case in detail. Include relevant facts, timeline, and what kind of help you need."
                className="min-h-32"
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                required
              />
              <p className="text-sm text-muted-foreground">
                Be specific but avoid sharing confidential information publicly
              </p>
            </div>
          </div>

          {/* Location and Preferences */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Location & Preferences</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="state">State *</Label>
                <Select
                  value={formData.state}
                  onValueChange={(value) =>
                    setFormData({ ...formData, state: value, city: "" })
                  }
                >
                  <SelectTrigger id="state">
                    <SelectValue placeholder="Select state" />
                  </SelectTrigger>
                  <SelectContent>
                    {INDIAN_STATES.map((state) => (
                      <SelectItem key={state} value={state}>
                        {state}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="city">City / Town *</Label>
                <Select
                  value={formData.city}
                  onValueChange={(value) =>
                    setFormData({ ...formData, city: value })
                  }
                  disabled={!formData.state}
                >
                  <SelectTrigger id="city">
                    <SelectValue
                      placeholder={
                        formData.state
                          ? "Select city or town"
                          : "Select state first"
                      }
                    />
                  </SelectTrigger>
                  <SelectContent>
                    {selectedCities.map((city) => (
                      <SelectItem key={city} value={city}>
                        {city}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="language">Preferred Language</Label>
                <Select
                  value={formData.language}
                  onValueChange={(value) =>
                    setFormData({ ...formData, language: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="English">English</SelectItem>
                    <SelectItem value="Hindi">Hindi</SelectItem>
                    <SelectItem value="Bengali">Bengali</SelectItem>
                    <SelectItem value="Tamil">Tamil</SelectItem>
                    <SelectItem value="Telugu">Telugu</SelectItem>
                    <SelectItem value="Marathi">Marathi</SelectItem>
                  </SelectContent>
                </Select>
            </div>

            <div className="space-y-3">
              <Label>Advocate Experience Preference</Label>
              <RadioGroup
                value={formData.experienceLevel}
                onValueChange={(value) =>
                  setFormData({ ...formData, experienceLevel: value })
                }
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="0-4" id="exp1" />
                  <Label htmlFor="exp1">0-4 years experience</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="5-10" id="exp2" />
                  <Label htmlFor="exp2">5-10 years experience</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="10+" id="exp3" />
                  <Label htmlFor="exp3">Over 10 years experience</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-3">
              <Label>Case Urgency</Label>
              <RadioGroup
                value={formData.urgency}
                onValueChange={(value) =>
                  setFormData({ ...formData, urgency: value })
                }
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="low" id="urgent1" />
                  <Label htmlFor="urgent1">Not urgent - within a month</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="medium" id="urgent2" />
                  <Label htmlFor="urgent2">
                    Moderately urgent - within a week
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="high" id="urgent3" />
                  <Label htmlFor="urgent3">Very urgent - within 2-3 days</Label>
                </div>
              </RadioGroup>
            </div>
          </div>

          {/* Privacy Options */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Privacy Settings</h3>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="anonymous"
                checked={formData.isAnonymous}
                onCheckedChange={(checked) =>
                  setFormData({ ...formData, isAnonymous: checked as boolean })
                }
              />
              <Label htmlFor="anonymous" className="text-sm">
                Post anonymously - Your name and contact details will not be
                displayed publicly
              </Label>
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <Button type="submit" className="flex-1">
              Post Case
            </Button>
            <Button
              type="button"
              variant="outline"
              className="flex-1 bg-transparent"
            >
              Save as Draft
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
