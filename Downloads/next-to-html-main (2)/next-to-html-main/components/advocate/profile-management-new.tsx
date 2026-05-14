"use client";

import { useState } from "react";
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
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Save, ArrowLeft, Plus, X, Edit, Trash2 } from "lucide-react";

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
    pincode: "",
    primaryPhone: "8916592497",
    secondaryPhone: "",
    emergencyPhone: "",
    mobile: "9849159490",
    fax: "",
    email: "anoop_vincent@yahoo.com",
    website: "",

    // Practice Areas
    practiceAreas: [
      "Administrative Law - Administration of Justice",
      "Transportation - Admiralty and Maritime",
      "Family - Adoption",
    ],

    // Languages
    languages: ["Assamese", "Bengali", "English", "Gujarati", "Hindi"],

    // BAR Council Details
    stateBarCouncil: "",
    barCouncilNumber: "",
    yearOfEnrollment: "",
    localBarAssociation: "No",
    localBarAssociationName: "",
  });

  const [education, setEducation] = useState([
    {
      institute: "",
      type: "",
      degree: "",
      graduationYear: "",
      city: "",
      state: "",
      country: "",
      shortDetail: "",
    },
  ]);

  const [clients, setClients] = useState([
    {
      clientName: "IBM",
      city: "Bangalore",
      state: "Karnataka",
      country: "India",
      year: "2001",
      shortDetail: "IBM",
    },
  ]);

  const [publications, setPublications] = useState([
    { title: "", url: "", year: "", shortDetail: "" },
  ]);

  const [awards, setAwards] = useState([
    { title: "", year: "", shortDetail: "" },
  ]);

  const [employment, setEmployment] = useState([
    {
      company: "",
      designation: "",
      yearFrom: "",
      yearTo: "",
      city: "",
      state: "",
      country: "",
    },
  ]);

  const [memberships, setMemberships] = useState([
    {
      instituteOrgCourt: "DELHI223523",
      designation: "",
      memberSince: "",
      city: "",
      state: "",
      country: "",
    },
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Profile updated:", {
      formData,
      education,
      clients,
      publications,
      awards,
      employment,
      memberships,
    });
    alert("Profile updated successfully! (Click POST UPDATES at the bottom)");
  };

  const updateFormData = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const addPracticeArea = (area: string) => {
    if (area && !formData.practiceAreas.includes(area)) {
      setFormData((prev) => ({
        ...prev,
        practiceAreas: [...prev.practiceAreas, area],
      }));
    }
  };

  const removePracticeArea = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      practiceAreas: prev.practiceAreas.filter((_, i) => i !== index),
    }));
  };

  const addLanguage = (lang: string) => {
    if (lang && !formData.languages.includes(lang)) {
      setFormData((prev) => ({
        ...prev,
        languages: [...prev.languages, lang],
      }));
    }
  };

  const removeLanguage = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      languages: prev.languages.filter((_, i) => i !== index),
    }));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          {onNavigate && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => onNavigate("overview")}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
          )}
          <div>
            <h2 className="text-2xl font-bold">Update Profile</h2>
            <p className="text-sm text-gray-500 mt-1">
              AdvocateKhoj follows a strict routine when it comes to profile
              update. All updates submitted are reviewed by AdvocateKhoj
              officers.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <p className="text-sm text-red-600 font-semibold">
          IMPORTANT: Make sure you click "POST UPDATES" button at the bottom of
          the page to send your profile updates
        </p>
      </div>

      <form id="profile-form" onSubmit={handleSubmit} className="space-y-6">
        {/* Contact Information */}
        <Card>
          <CardHeader className="bg-yellow-50">
            <CardTitle className="text-lg">Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <Label htmlFor="title">
                  Title <span className="text-red-500">*</span>
                </Label>
                <Select
                  value={formData.title}
                  onValueChange={(value) => updateFormData("title", value)}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Mr.">Mr.</SelectItem>
                    <SelectItem value="Ms.">Ms.</SelectItem>
                    <SelectItem value="Mrs.">Mrs.</SelectItem>
                    <SelectItem value="Adv.">Adv.</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="firstName">
                  First Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => updateFormData("firstName", e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="middleName">MI</Label>
                <Input
                  id="middleName"
                  value={formData.middleName}
                  onChange={(e) => updateFormData("middleName", e.target.value)}
                  placeholder="Middle Initial"
                />
              </div>
              <div>
                <Label htmlFor="lastName">
                  Last Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => updateFormData("lastName", e.target.value)}
                />
              </div>
            </div>

            <div>
              <Label htmlFor="address">
                Address <span className="text-red-500">*</span>
              </Label>
              <Textarea
                id="address"
                value={formData.address}
                onChange={(e) => updateFormData("address", e.target.value)}
                rows={3}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="primaryPhone">
                  Primary Phone <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="primaryPhone"
                  value={formData.primaryPhone}
                  onChange={(e) =>
                    updateFormData("primaryPhone", e.target.value)
                  }
                />
              </div>
              <div>
                <Label htmlFor="secondaryPhone">Secondary Phone</Label>
                <Input
                  id="secondaryPhone"
                  value={formData.secondaryPhone}
                  onChange={(e) =>
                    updateFormData("secondaryPhone", e.target.value)
                  }
                />
              </div>
              <div>
                <Label htmlFor="emergencyPhone">Emergency Phone</Label>
                <Input
                  id="emergencyPhone"
                  value={formData.emergencyPhone}
                  onChange={(e) =>
                    updateFormData("emergencyPhone", e.target.value)
                  }
                />
              </div>
              <div>
                <Label htmlFor="mobile">
                  Mobile <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="mobile"
                  value={formData.mobile}
                  onChange={(e) => updateFormData("mobile", e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="fax">Fax</Label>
                <Input
                  id="fax"
                  value={formData.fax}
                  onChange={(e) => updateFormData("fax", e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="email">
                  Email <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateFormData("email", e.target.value)}
                />
              </div>
              <div className="md:col-span-2">
                <Label htmlFor="website">Web</Label>
                <Input
                  id="website"
                  value={formData.website}
                  onChange={(e) => updateFormData("website", e.target.value)}
                  placeholder="https://"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Practice Areas */}
        <Card>
          <CardHeader className="bg-yellow-50">
            <CardTitle className="text-lg">Practice Area</CardTitle>
            <p className="text-sm text-gray-600">
              Select all areas of expertise. To select multiple areas, hold
              "Ctrl" key as you click.
            </p>
          </CardHeader>
          <CardContent className="p-6 space-y-4">
            <div className="flex flex-wrap gap-2 mb-4">
              {formData.practiceAreas.map((area, index) => (
                <Badge key={index} variant="secondary" className="px-3 py-1">
                  {area}
                  <button
                    type="button"
                    onClick={() => removePracticeArea(index)}
                    className="ml-2 text-red-500"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </Badge>
              ))}
            </div>
            <Select onValueChange={addPracticeArea}>
              <SelectTrigger>
                <SelectValue placeholder="Select practice areas..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Administrative Law - Administration of Justice">
                  Administrative Law - Administration of Justice
                </SelectItem>
                <SelectItem value="Transportation - Admiralty and Maritime">
                  Transportation - Admiralty and Maritime
                </SelectItem>
                <SelectItem value="Family - Adoption">
                  Family - Adoption
                </SelectItem>
                <SelectItem value="Criminal - Adulteration of Drugs">
                  Criminal - Adulteration of Drugs
                </SelectItem>
                <SelectItem value="Criminal - Adultery">
                  Criminal - Adultery
                </SelectItem>
                <SelectItem value="Corporate Law">Corporate Law</SelectItem>
                <SelectItem value="Civil Litigation">
                  Civil Litigation
                </SelectItem>
                <SelectItem value="Property Law">Property Law</SelectItem>
              </SelectContent>
            </Select>
          </CardContent>
        </Card>

        {/* Languages */}
        <Card>
          <CardHeader className="bg-yellow-50">
            <CardTitle className="text-lg">Languages</CardTitle>
            <p className="text-sm text-gray-600">
              Select all languages you are comfortable with. To select multiple
              languages, hold "Ctrl" key as you click.
            </p>
          </CardHeader>
          <CardContent className="p-6 space-y-4">
            <div className="flex flex-wrap gap-2 mb-4">
              {formData.languages.map((lang, index) => (
                <Badge key={index} variant="secondary" className="px-3 py-1">
                  {lang}
                  <button
                    type="button"
                    onClick={() => removeLanguage(index)}
                    className="ml-2 text-red-500"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </Badge>
              ))}
            </div>
            <Select onValueChange={addLanguage}>
              <SelectTrigger>
                <SelectValue placeholder="Select languages..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Assamese">Assamese</SelectItem>
                <SelectItem value="Bengali">Bengali</SelectItem>
                <SelectItem value="English">English</SelectItem>
                <SelectItem value="Gujarati">Gujarati</SelectItem>
                <SelectItem value="Hindi">Hindi</SelectItem>
                <SelectItem value="Kannada">Kannada</SelectItem>
                <SelectItem value="Malayalam">Malayalam</SelectItem>
                <SelectItem value="Marathi">Marathi</SelectItem>
                <SelectItem value="Tamil">Tamil</SelectItem>
                <SelectItem value="Telugu">Telugu</SelectItem>
              </SelectContent>
            </Select>
          </CardContent>
        </Card>

        {/* Education */}
        <Card>
          <CardHeader className="bg-yellow-50">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-lg">Education</CardTitle>
              </div>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() =>
                  setEducation([
                    ...education,
                    {
                      institute: "",
                      type: "",
                      degree: "",
                      graduationYear: "",
                      city: "",
                      state: "",
                      country: "",
                      shortDetail: "",
                    },
                  ])
                }
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Education
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="space-y-4 p-4 border rounded-lg">
                <div className="flex justify-between items-center">
                  <h4 className="font-semibold text-sm">
                    Education {index + 1}
                  </h4>
                  {education.length > 1 && (
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() =>
                        setEducation(education.filter((_, i) => i !== index))
                      }
                    >
                      <Trash2 className="w-4 h-4 text-red-500" />
                    </Button>
                  )}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label>Institute</Label>
                    <Input
                      value={edu.institute}
                      onChange={(e) => {
                        const newEdu = [...education];
                        newEdu[index].institute = e.target.value;
                        setEducation(newEdu);
                      }}
                    />
                  </div>
                  <div>
                    <Label>Type</Label>
                    <Select
                      value={edu.type}
                      onValueChange={(value) => {
                        const newEdu = [...education];
                        newEdu[index].type = value;
                        setEducation(newEdu);
                      }}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="-- Select One --" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="undergraduate">
                          Undergraduate
                        </SelectItem>
                        <SelectItem value="graduate">Graduate</SelectItem>
                        <SelectItem value="postgraduate">
                          Postgraduate
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Degree</Label>
                    <Input
                      value={edu.degree}
                      onChange={(e) => {
                        const newEdu = [...education];
                        newEdu[index].degree = e.target.value;
                        setEducation(newEdu);
                      }}
                    />
                  </div>
                  <div>
                    <Label>Graduation Year(YYYY)</Label>
                    <Input
                      value={edu.graduationYear}
                      placeholder="YYYY"
                      onChange={(e) => {
                        const newEdu = [...education];
                        newEdu[index].graduationYear = e.target.value;
                        setEducation(newEdu);
                      }}
                    />
                  </div>
                  <div>
                    <Label>City</Label>
                    <Input
                      value={edu.city}
                      onChange={(e) => {
                        const newEdu = [...education];
                        newEdu[index].city = e.target.value;
                        setEducation(newEdu);
                      }}
                    />
                  </div>
                  <div>
                    <Label>State</Label>
                    <Input
                      value={edu.state}
                      onChange={(e) => {
                        const newEdu = [...education];
                        newEdu[index].state = e.target.value;
                        setEducation(newEdu);
                      }}
                    />
                  </div>
                  <div>
                    <Label>Country</Label>
                    <Input
                      value={edu.country}
                      onChange={(e) => {
                        const newEdu = [...education];
                        newEdu[index].country = e.target.value;
                        setEducation(newEdu);
                      }}
                    />
                  </div>
                </div>
                <div>
                  <Label>Short Detail</Label>
                  <Textarea
                    value={edu.shortDetail}
                    onChange={(e) => {
                      const newEdu = [...education];
                      newEdu[index].shortDetail = e.target.value;
                      setEducation(newEdu);
                    }}
                    rows={2}
                  />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Membership & Affiliations */}
        <Card>
          <CardHeader className="bg-yellow-50">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">
                Memberships & Affiliations
              </CardTitle>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() =>
                  setMemberships([
                    ...memberships,
                    {
                      instituteOrgCourt: "",
                      designation: "",
                      memberSince: "",
                      city: "",
                      state: "",
                      country: "",
                    },
                  ])
                }
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Membership
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            {memberships.map((mem, index) => (
              <div key={index} className="space-y-4 p-4 border rounded-lg">
                <div className="flex justify-between items-center">
                  <h4 className="font-semibold text-sm">
                    {mem.instituteOrgCourt || `Membership ${index + 1}`}
                  </h4>
                  {memberships.length > 1 && (
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() =>
                        setMemberships(
                          memberships.filter((_, i) => i !== index)
                        )
                      }
                    >
                      <Trash2 className="w-4 h-4 text-red-500" />
                    </Button>
                  )}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label>Institute/Org/Court</Label>
                    <Input
                      value={mem.instituteOrgCourt}
                      onChange={(e) => {
                        const newMem = [...memberships];
                        newMem[index].instituteOrgCourt = e.target.value;
                        setMemberships(newMem);
                      }}
                    />
                  </div>
                  <div>
                    <Label>Designation(eg Member)</Label>
                    <Input
                      value={mem.designation}
                      onChange={(e) => {
                        const newMem = [...memberships];
                        newMem[index].designation = e.target.value;
                        setMemberships(newMem);
                      }}
                    />
                  </div>
                  <div>
                    <Label>Member Since</Label>
                    <Input
                      value={mem.memberSince}
                      onChange={(e) => {
                        const newMem = [...memberships];
                        newMem[index].memberSince = e.target.value;
                        setMemberships(newMem);
                      }}
                    />
                  </div>
                  <div>
                    <Label>City</Label>
                    <Input
                      value={mem.city}
                      onChange={(e) => {
                        const newMem = [...memberships];
                        newMem[index].city = e.target.value;
                        setMemberships(newMem);
                      }}
                    />
                  </div>
                  <div>
                    <Label>State</Label>
                    <Input
                      value={mem.state}
                      onChange={(e) => {
                        const newMem = [...memberships];
                        newMem[index].state = e.target.value;
                        setMemberships(newMem);
                      }}
                    />
                  </div>
                  <div>
                    <Label>Country</Label>
                    <Input
                      value={mem.country}
                      onChange={(e) => {
                        const newMem = [...memberships];
                        newMem[index].country = e.target.value;
                        setMemberships(newMem);
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Submit Section */}
        <div className="bg-gray-100 p-6 rounded-lg">
          <p className="text-sm text-gray-700 mb-4">
            On updating the profile, Customer Support is notified. Also the
            Advocate receives a copy of the same email.
          </p>
          <div className="flex gap-4">
            <Button type="submit" className="bg-primary hover:bg-primary/90">
              <Save className="w-4 h-4 mr-2" />
              POST UPDATES
            </Button>
            <Button type="button" variant="outline">
              Main Menu
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
