"use client";

import type React from "react";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Camera,
  Plus,
  X,
  Save,
  Phone,
  Award,
  BookOpen,
  Building,
  ArrowLeft,
} from "lucide-react";
import { INDIAN_STATES, getCitiesByState } from "@/lib/indian-locations";
import { PRACTICE_AREA_OPTIONS } from "@/lib/legal-data";

interface ProfileManagementProps {
  onNavigate?: (section: string) => void;
}

export function ProfileManagement({ onNavigate }: ProfileManagementProps = {}) {
  const [formData, setFormData] = useState({
    // Contact Information
    title: "Mr.",
    firstName: "Anoop",
    middleName: "",
    lastName: "Vincent",
    address: "#204, Crescent Towers, Seethammadhara, Vizag - 13",
    primaryPhone: "8916592497",
    secondaryPhone: "",
    emergencyPhone: "",
    mobile: "9849159490",
    fax: "",
    email: "anoop_vincent@yahoo.com",
    website: "",
    bio: "",
    phone: "",
    state: "",
    city: "",
    experience: "",
    professionalExperience: "",

    // Practice Areas
    practiceAreas: [
      "Administrative Law - Administration of Justice",
      "Transportation - Admiralty and Maritime",
      "Family - Adoption",
      "Criminal - Adulteration of Drugs",
      "Criminal - Adultery",
    ],

    // Languages
    languages: ["Assamese", "Bengali", "English", "Gujarati", "Hindi"],

    // Education
    education: [
      {
        institute: "",
        degree: "",
        graduationYear: "",
        city: "",
        state: "",
        country: "",
        shortDetail: "",
        specialization: "",
        type: "",
      },
    ],

    // Clients
    clients: [
      {
        clientName: "IBM",
        city: "Bangalore",
        state: "Karnataka",
        country: "India",
        year: "2001",
        shortDetail: "",
      },
    ],

    // Publications
    publications: [
      {
        title: "",
        url: "",
        year: "",
        shortDetail: "",
      },
    ],

    // Awards
    awards: [
      {
        title: "",
        organization: "",
        year: "",
        shortDetail: "",
      },
    ],

    // Employment
    employment: [
      {
        company: "",
        designation: "",
        yearFrom: "",
        yearTo: "",
        city: "",
        state: "",
        country: "",
      },
    ],

    // Memberships & Affiliations
    memberships: [
      {
        instituteOrgCourt: "DELHI223523",
        designation: "",
        memberSince: "",
        city: "",
        state: "",
        country: "",
      },
    ],

    // BAR Council Details
    stateBarCouncil: "",
    barCouncilNumber: "",
    yearOfEnrollment: "",
    localBarAssociation: false,
    localBarAssociationName: "",
  });

  const citiesForSelectedState = useMemo(
    () => (formData.state ? getCitiesByState(formData.state) : []),
    [formData.state]
  );

  // Predefined Languages List
  const languagesList = [
    "Assamese",
    "Bengali",
    "English",
    "Gujarati",
    "Hindi",
    "Kannada",
    "Malayalam",
    "Marathi",
    "Odia",
    "Punjabi",
    "Sanskrit",
    "Tamil",
    "Telugu",
    "Urdu",
  ];

  const [newItem, setNewItem] = useState({
    practiceArea: "",
    language: "",
    education: {
      institute: "",
      degree: "",
      graduationYear: "",
      city: "",
      state: "",
      country: "",
      shortDetail: "",
      specialization: "",
      type: "",
    },
    publication: { title: "", journal: "", year: "" },
    award: { title: "", organization: "", year: "", shortDetail: "" },
    affiliation: { organization: "", position: "", since: "" },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Profile updated:", formData);
  };

  const addItem = (type: string) => {
    switch (type) {
      case "practiceArea":
        if (
          newItem.practiceArea &&
          !formData.practiceAreas.includes(newItem.practiceArea)
        ) {
          setFormData({
            ...formData,
            practiceAreas: [...formData.practiceAreas, newItem.practiceArea],
          });
          setNewItem({ ...newItem, practiceArea: "" });
        }
        break;
      case "language":
        if (
          newItem.language &&
          !formData.languages.includes(newItem.language)
        ) {
          setFormData({
            ...formData,
            languages: [...formData.languages, newItem.language],
          });
          setNewItem({ ...newItem, language: "" });
        }
        break;
    case "education":
        if (
          newItem.education.type &&
          newItem.education.degree &&
          newItem.education.institute
        ) {
          setFormData({
            ...formData,
            education: [...formData.education, newItem.education],
          });
          setNewItem({
            ...newItem,
            education: {
              institute: "",
              degree: "",
              graduationYear: "",
              city: "",
              state: "",
              country: "",
              shortDetail: "",
              specialization: "",
              type: "",
            },
          });
        }
        break;
      // Add similar cases for other types
    }
  };

  const removeItem = (type: string, index: number) => {
    switch (type) {
      case "practiceArea":
        setFormData({
          ...formData,
          practiceAreas: formData.practiceAreas.filter((_, i) => i !== index),
        });
        break;
      case "language":
        setFormData({
          ...formData,
          languages: formData.languages.filter((_, i) => i !== index),
        });
        break;
      // Add similar cases for other types
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Profile Management</h2>
        <div className="flex items-center gap-2">
          {onNavigate && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onNavigate("overview")}
              className="border border-border"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
          )}
          <Button form="profile-form" type="submit">
            <Save className="h-4 w-4 mr-2" />
            Save Profile
          </Button>
        </div>
      </div>

      <form id="profile-form" onSubmit={handleSubmit} className="space-y-6">
        {/* Profile Header */}
        <Card>
          <CardHeader>
            <CardTitle>Profile Header</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center gap-6">
              <Avatar className="h-32 w-32">
                <AvatarImage src="/placeholder.svg?height=128&width=128" />
                <AvatarFallback className="text-2xl">
                  {formData.firstName.charAt(0)}
                  {formData.lastName.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div className="space-y-2">
                <Button variant="outline" size="sm">
                  <Camera className="h-4 w-4 mr-2" />
                  Change Photo
                </Button>
                <p className="text-sm text-muted-foreground">
                  Professional headshot recommended
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Select
                  value={formData.title}
                  onValueChange={(value) =>
                    setFormData({ ...formData, title: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Adv.">Adv.</SelectItem>
                    <SelectItem value="Sr. Adv.">Sr. Adv.</SelectItem>
                    <SelectItem value="Dr.">Dr.</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="firstName">First Name *</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name *</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  }
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="bio">Professional Summary</Label>
              <Textarea
                id="bio"
                placeholder="Brief professional summary highlighting your expertise and experience"
                value={formData.bio}
                onChange={(e) =>
                  setFormData({ ...formData, bio: e.target.value })
                }
                className="min-h-20"
              />
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              Contact Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  required
                />
              </div>
            </div>

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
                        formData.state ? "Select city / town" : "Select state first"
                      }
                    />
                  </SelectTrigger>
                  <SelectContent>
                    {citiesForSelectedState.map((city) => (
                      <SelectItem key={city} value={city}>
                        {city}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Practice Areas */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Practice Areas
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {formData.practiceAreas.map((area, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="flex items-center gap-1"
                >
                  {area}
                  <X
                    className="h-3 w-3 cursor-pointer"
                    onClick={() => removeItem("practiceArea", index)}
                  />
                </Badge>
              ))}
            </div>
            <div className="flex gap-2">
              <Select
                value={newItem.practiceArea}
                onValueChange={(value) =>
                  setNewItem({ ...newItem, practiceArea: value })
                }
              >
                <SelectTrigger className="flex-1">
                  <SelectValue placeholder="Select practice area" />
                </SelectTrigger>
                <SelectContent className="max-h-[320px]">
                  {PRACTICE_AREA_OPTIONS.filter(
                    (option) => !formData.practiceAreas.includes(option)
                  ).map((option) => (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button type="button" onClick={() => addItem("practiceArea")}>
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Languages */}
        <Card>
          <CardHeader>
            <CardTitle>Languages</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {formData.languages.map((language, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="flex items-center gap-1"
                >
                  {language}
                  <X
                    className="h-3 w-3 cursor-pointer"
                    onClick={() => removeItem("language", index)}
                  />
                </Badge>
              ))}
            </div>
            <div className="flex gap-2">
              <Select
                value={newItem.language}
                onValueChange={(value) =>
                  setNewItem({ ...newItem, language: value })
                }
              >
                <SelectTrigger className="flex-1">
                  <SelectValue placeholder="Select language" />
                </SelectTrigger>
                <SelectContent className="max-h-[300px]">
                  {languagesList
                    .filter((lang) => !formData.languages.includes(lang))
                    .map((lang) => (
                      <SelectItem key={lang} value={lang}>
                        {lang}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
              <Button type="button" onClick={() => addItem("language")}>
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Education */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Education
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {formData.education.map((edu, index) => (
              <div key={index} className="p-4 border rounded-lg">
                <div className="flex justify-between items-start">
                  <div>
                    {edu.type && (
                      <p className="text-xs uppercase tracking-wide text-muted-foreground mb-1">
                        {edu.type}
                      </p>
                    )}
                    <h4 className="font-semibold">{edu.degree}</h4>
                    <p className="text-muted-foreground">{edu.institute}</p>
                    <p className="text-sm text-muted-foreground">
                      {edu.graduationYear} • {edu.specialization}
                    </p>
                    {edu.shortDetail && (
                      <p className="text-sm mt-2 text-muted-foreground">
                        {edu.shortDetail}
                      </p>
                    )}
                  </div>
                  <Button variant="ghost" size="sm" type="button">
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
            <Separator />
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Select
                  value={newItem.education.type}
                  onValueChange={(value) =>
                    setNewItem({
                      ...newItem,
                      education: { ...newItem.education, type: value },
                    })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select education type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Law School">Law School</SelectItem>
                    <SelectItem value="College">College</SelectItem>
                    <SelectItem value="University">University</SelectItem>
                    <SelectItem value="High School">High School</SelectItem>
                    <SelectItem value="Other School">Other School</SelectItem>
                  </SelectContent>
                </Select>
                <Input
                  placeholder="Institute / School"
                  value={newItem.education.institute}
                  onChange={(e) =>
                    setNewItem({
                      ...newItem,
                      education: {
                        ...newItem.education,
                        institute: e.target.value,
                      },
                    })
                  }
                />
                <Input
                  placeholder="Degree / Qualification"
                  value={newItem.education.degree}
                  onChange={(e) =>
                    setNewItem({
                      ...newItem,
                      education: {
                        ...newItem.education,
                        degree: e.target.value,
                      },
                    })
                  }
                />
                <Input
                  placeholder="Graduation Year"
                  value={newItem.education.graduationYear}
                  onChange={(e) =>
                    setNewItem({
                      ...newItem,
                      education: {
                        ...newItem.education,
                        graduationYear: e.target.value,
                      },
                    })
                  }
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Input
                  placeholder="City"
                  value={newItem.education.city}
                  onChange={(e) =>
                    setNewItem({
                      ...newItem,
                      education: {
                        ...newItem.education,
                        city: e.target.value,
                      },
                    })
                  }
                />
                <Input
                  placeholder="State"
                  value={newItem.education.state}
                  onChange={(e) =>
                    setNewItem({
                      ...newItem,
                      education: {
                        ...newItem.education,
                        state: e.target.value,
                      },
                    })
                  }
                />
                <Input
                  placeholder="Country"
                  value={newItem.education.country}
                  onChange={(e) =>
                    setNewItem({
                      ...newItem,
                      education: {
                        ...newItem.education,
                        country: e.target.value,
                      },
                    })
                  }
                />
              </div>
              <Input
                placeholder="Specialization"
                value={newItem.education.specialization}
                onChange={(e) =>
                  setNewItem({
                    ...newItem,
                    education: {
                      ...newItem.education,
                      specialization: e.target.value,
                    },
                  })
                }
              />
              <Textarea
                placeholder="Short details (honours, key coursework, notable achievements)"
                value={newItem.education.shortDetail}
                onChange={(e) =>
                  setNewItem({
                    ...newItem,
                    education: {
                      ...newItem.education,
                      shortDetail: e.target.value,
                    },
                  })
                }
                rows={3}
              />
            </div>
            <Button type="button" onClick={() => addItem("education")}>
              <Plus className="h-4 w-4 mr-2" />
              Add Education
            </Button>
          </CardContent>
        </Card>

        {/* Professional Experience */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building className="h-5 w-5" />
              Professional Experience
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="experience">Years of Experience *</Label>
                <Input
                  id="experience"
                  type="number"
                  value={formData.experience}
                  onChange={(e) =>
                    setFormData({ ...formData, experience: e.target.value })
                  }
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="professionalExperience">
                Professional Experience Summary
              </Label>
              <Textarea
                id="professionalExperience"
                value={formData.professionalExperience}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    professionalExperience: e.target.value,
                  })
                }
                placeholder="Provide a short overview of practice history, notable work, or focus areas."
                rows={4}
              />
              <p className="text-xs text-muted-foreground">
                Optional: Helps clients understand your background. Leave blank if you
                prefer not to share this publicly.
              </p>
            </div>

            {formData.employment.map((emp, index) => (
              <div key={index} className="p-4 border rounded-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold">{emp.designation}</h4>
                    <p className="text-muted-foreground">{emp.company}</p>
                    <p className="text-sm text-muted-foreground">
                      {emp.yearFrom} - {emp.yearTo}
                    </p>
                    <p className="text-sm mt-2">
                      {emp.city}, {emp.state}, {emp.country}
                    </p>
                  </div>
                  <Button variant="ghost" size="sm">
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Awards & Recognition */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5" />
              Awards & Recognition
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {formData.awards.map((award, index) => (
              <div key={index} className="p-4 border rounded-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold">{award.title}</h4>
                    <p className="text-muted-foreground">
                      {award.organization}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {award.year}
                    </p>
                  </div>
                  <Button variant="ghost" size="sm">
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </form>
    </div>
  );
}
