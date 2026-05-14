"use client";

import type React from "react";
import { AdvocateRegistrationWorkflow } from "./advocate-registration-workflow";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Eye, EyeOff, Users, Scale } from "lucide-react";
import ReCaptcha from "@/components/ui/recaptcha";

interface SignupFormProps {
  userType: "client" | "advocate";
}

export function SignupForm({ userType }: SignupFormProps) {
  // If advocate, use the registration workflow
  if (userType === "advocate") {
    return <AdvocateRegistrationWorkflow userType={userType} />;
  }

  const primaryActionClasses =
    "bg-gradient-to-r from-[#00377b] to-[#1453a3] hover:from-[#1453a3] hover:to-[#1f64c7] text-white shadow-md border border-[#001944]/70 transition-[background] duration-200";
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    // Login Information
    email: "",
    password: "",
    confirmPassword: "",
    recoveryQuestion: "",
    recoveryAnswer: "",

    // Usage Information
    seekingLegalConsultation: false,
    advertisingPurpose: false,
    lawAspirantEducation: false,

    // Contact Information
    salutation: "",
    firstName: "",
    middleName: "",
    lastName: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    country: "India",
    pincode: "",
    primaryPhone: "",
    secondaryPhone: "",

    // Terms
    acceptTerms: false,
    acceptPrivacy: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle signup logic here - will connect to existing backend
    console.log("Signup attempt:", { userType, ...formData });
  };

  const handleOAuthSignup = (provider: "google" | "facebook") => {
    // Handle OAuth signup - will connect to existing backend
    console.log(`${provider} OAuth signup for ${userType}`);
  };

  const recoveryQuestions = [
    "What was your first pet's name?",
    "What is your mother's maiden name?",
    "What was the name of your first school?",
    "What is your favorite book?",
    "What city were you born in?",
  ];

  const salutations = ["Mr.", "Ms.", "Mrs.", "Dr.", "Prof."];

  const indianStates = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli and Daman and Diu",
    "Delhi",
    "Jammu and Kashmir",
    "Ladakh",
    "Lakshadweep",
    "Puducherry",
  ];

  const indianCities = [
    "Agra",
    "Ahmedabad",
    "Ajmer",
    "Aligarh",
    "Allahabad (Prayagraj)",
    "Amravati",
    "Amritsar",
    "Aurangabad",
    "Bengaluru",
    "Bhopal",
    "Bhubaneswar",
    "Chandigarh",
    "Chennai",
    "Coimbatore",
    "Cuttack",
    "Dehradun",
    "Delhi",
    "Dhanbad",
    "Durgapur",
    "Erode",
    "Faridabad",
    "Ghaziabad",
    "Guwahati",
    "Gwalior",
    "Haridwar",
    "Howrah",
    "Hyderabad",
    "Indore",
    "Jabalpur",
    "Jaipur",
    "Jalandhar",
    "Jamshedpur",
    "Jodhpur",
    "Kanpur",
    "Kochi",
    "Kolkata",
    "Kota",
    "Kozhikode",
    "Lucknow",
    "Ludhiana",
    "Madurai",
    "Mangalore",
    "Meerut",
    "Mumbai",
    "Mysore",
    "Nagpur",
    "Nashik",
    "Navi Mumbai",
    "Noida",
    "Patna",
    "Pune",
    "Raipur",
    "Rajkot",
    "Ranchi",
    "Salem",
    "Srinagar",
    "Surat",
    "Thane",
    "Thiruvananthapuram",
    "Tiruchirappalli",
    "Udaipur",
    "Vadodara",
    "Varanasi",
    "Vijayawada",
    "Visakhapatnam",
  ];

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader className="text-center">
        <div className="flex justify-center mb-4">
          {userType === "client" ? (
            <Users className="h-6 w-6" />
          ) : (
            <Scale className="h-6 w-6" />
          )}
        </div>
        <CardTitle className="text-2xl font-bold">
          {userType === "client"
            ? "Client Registration"
            : "Advocate Registration"}
        </CardTitle>
        <CardDescription>
          {userType === "client"
            ? "Create your account to access legal services"
            : "Join our network of legal professionals"}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {userType === "client" && (
          <>
            <div className="flex flex-col sm:grid sm:grid-cols-2 gap-3 sm:gap-4">
              <Button
                variant="outline"
                onClick={() => handleOAuthSignup("google")}
                className="w-full group relative overflow-hidden transition-all duration-200 hover:shadow-md"
              >
                <div className="relative flex items-center justify-center w-full">
                  <div className="mr-2 relative">
                    <div className="absolute inset-0 rounded-full bg-white scale-0 group-hover:scale-110 transition-transform duration-200 -m-1"></div>
                    <svg className="relative h-4 w-4 z-10" viewBox="0 0 24 24">
                      <path
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        fill="#4285F4"
                      />
                      <path
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        fill="#34A853"
                      />
                      <path
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        fill="#EA4335"
                      />
                    </svg>
                  </div>
                  <span className="text-sm sm:text-base">
                    Continue with Google
                  </span>
                </div>
              </Button>
              <Button
                variant="outline"
                onClick={() => handleOAuthSignup("facebook")}
                className="w-full group relative overflow-hidden transition-all duration-200 hover:shadow-md"
              >
                <div className="relative flex items-center justify-center w-full">
                  <div className="mr-2 relative">
                    <div className="absolute inset-0 rounded-full bg-white scale-0 group-hover:scale-110 transition-transform duration-200 -m-1"></div>
                    <svg
                      className="relative h-4 w-4 z-10"
                      fill="#1877F2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </div>
                  <span className="text-sm sm:text-base">
                    Continue with Facebook
                  </span>
                </div>
              </Button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator className="w-full" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or register with email
                </span>
              </div>
            </div>
          </>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Login Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Login Information</h3>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                placeholder="This will be your username"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="password">Password * (min 7 characters)</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter password"
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    minLength={7}
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Re-Type Password *</Label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm password"
                    value={formData.confirmPassword}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        confirmPassword: e.target.value,
                      })
                    }
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="recoveryQuestion">
                  Password Recovery Question *
                </Label>
                <Select
                  value={formData.recoveryQuestion}
                  onValueChange={(value) =>
                    setFormData({ ...formData, recoveryQuestion: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a question" />
                  </SelectTrigger>
                  <SelectContent>
                    {recoveryQuestions.map((question) => (
                      <SelectItem key={question} value={question}>
                        {question}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="recoveryAnswer">
                  Password Recovery Answer *
                </Label>
                <Input
                  id="recoveryAnswer"
                  placeholder="Enter your answer"
                  value={formData.recoveryAnswer}
                  onChange={(e) =>
                    setFormData({ ...formData, recoveryAnswer: e.target.value })
                  }
                  required
                />
              </div>
            </div>
          </div>

          {/* Usage Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">
              How Will You Use AdvocateKhoj?
            </h3>
            <p className="text-sm text-muted-foreground">
              Select all that apply (at least one required)
            </p>

            <div className="space-y-3">
              <div className="flex items-start space-x-3 p-4 border rounded-lg hover:bg-accent/50 transition-colors">
                <Checkbox
                  id="legalConsultation"
                  checked={formData.seekingLegalConsultation}
                  onCheckedChange={(checked) =>
                    setFormData({
                      ...formData,
                      seekingLegalConsultation: checked as boolean,
                    })
                  }
                  className="mt-1"
                />
                <div className="flex-1">
                  <Label
                    htmlFor="legalConsultation"
                    className="text-sm font-medium cursor-pointer"
                  >
                    As a normal person seeking legal consultation
                  </Label>
                  <p className="text-xs text-muted-foreground mt-1">
                    Find qualified advocates, post your legal cases, and get
                    professional legal assistance
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-4 border rounded-lg hover:bg-accent/50 transition-colors">
                <Checkbox
                  id="advertising"
                  checked={formData.advertisingPurpose}
                  onCheckedChange={(checked) =>
                    setFormData({
                      ...formData,
                      advertisingPurpose: checked as boolean,
                    })
                  }
                  className="mt-1"
                />
                <div className="flex-1">
                  <Label
                    htmlFor="advertising"
                    className="text-sm font-medium cursor-pointer"
                  >
                    To advertise
                  </Label>
                  <p className="text-xs text-muted-foreground mt-1">
                    Access our advertising module to promote your legal
                    services, law firm, or legal products
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-4 border rounded-lg hover:bg-accent/50 transition-colors">
                <Checkbox
                  id="lawAspirant"
                  checked={formData.lawAspirantEducation}
                  onCheckedChange={(checked) =>
                    setFormData({
                      ...formData,
                      lawAspirantEducation: checked as boolean,
                    })
                  }
                  className="mt-1"
                />
                <div className="flex-1">
                  <Label
                    htmlFor="lawAspirant"
                    className="text-sm font-medium cursor-pointer"
                  >
                    Law aspirant here for career guidance and educational
                    purpose
                  </Label>
                  <p className="text-xs text-muted-foreground mt-1">
                    Access educational resources, career guidance, law college
                    information, and student-focused content
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Information</h3>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <Label htmlFor="salutation">Salutation</Label>
                <Select
                  value={formData.salutation}
                  onValueChange={(value) =>
                    setFormData({ ...formData, salutation: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    {salutations.map((sal) => (
                      <SelectItem key={sal} value={sal}>
                        {sal}
                      </SelectItem>
                    ))}
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
                <Label htmlFor="middleName">Middle Name</Label>
                <Input
                  id="middleName"
                  value={formData.middleName}
                  onChange={(e) =>
                    setFormData({ ...formData, middleName: e.target.value })
                  }
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="address1">Address Line 1</Label>
                <Input
                  id="address1"
                  value={formData.address1}
                  onChange={(e) =>
                    setFormData({ ...formData, address1: e.target.value })
                  }
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="address2">Address Line 2</Label>
                <Input
                  id="address2"
                  value={formData.address2}
                  onChange={(e) =>
                    setFormData({ ...formData, address2: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <Label htmlFor="city">City *</Label>
                <Select
                  value={formData.city}
                  onValueChange={(value) =>
                    setFormData({ ...formData, city: value })
                  }
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select city" />
                  </SelectTrigger>
                  <SelectContent className="max-h-[300px]">
                    {indianCities.map((city) => (
                      <SelectItem key={city} value={city}>
                        {city}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="state">State *</Label>
                <Select
                  value={formData.state}
                  onValueChange={(value) =>
                    setFormData({ ...formData, state: value })
                  }
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select state" />
                  </SelectTrigger>
                  <SelectContent className="max-h-[300px]">
                    {indianStates.map((state) => (
                      <SelectItem key={state} value={state}>
                        {state}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="country">Country *</Label>
                <Input
                  id="country"
                  value={formData.country}
                  onChange={(e) =>
                    setFormData({ ...formData, country: e.target.value })
                  }
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="pincode">Pincode *</Label>
                <Input
                  id="pincode"
                  value={formData.pincode}
                  onChange={(e) =>
                    setFormData({ ...formData, pincode: e.target.value })
                  }
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="primaryPhone">Primary Phone *</Label>
                <Input
                  id="primaryPhone"
                  placeholder="Area/STD code - Number"
                  value={formData.primaryPhone}
                  onChange={(e) =>
                    setFormData({ ...formData, primaryPhone: e.target.value })
                  }
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="secondaryPhone">Secondary Phone</Label>
                <Input
                  id="secondaryPhone"
                  placeholder="Area/STD code - Number"
                  value={formData.secondaryPhone}
                  onChange={(e) =>
                    setFormData({ ...formData, secondaryPhone: e.target.value })
                  }
                />
              </div>
            </div>
          </div>

          {/* Terms and Conditions */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="terms"
                checked={formData.acceptTerms}
                onCheckedChange={(checked) =>
                  setFormData({ ...formData, acceptTerms: checked as boolean })
                }
                required
              />
              <Label htmlFor="terms" className="text-sm">
                I accept the{" "}
                <a href="#" className="text-primary hover:underline">
                  Terms & Conditions
                </a>{" "}
                *
              </Label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="privacy"
                checked={formData.acceptPrivacy}
                onCheckedChange={(checked) =>
                  setFormData({
                    ...formData,
                    acceptPrivacy: checked as boolean,
                  })
                }
                required
              />
              <Label htmlFor="privacy" className="text-sm">
                I accept the{" "}
                <a href="#" className="text-primary hover:underline">
                  Privacy Policy
                </a>{" "}
                *
              </Label>
            </div>
          </div>

          {/* Google reCAPTCHA */}
          <ReCaptcha />

          <Button
            type="submit"
            className={`w-full ${primaryActionClasses}`}
            size="lg"
          >
            Create {userType === "client" ? "Client" : "Advocate"} Account
          </Button>

          <div className="text-center text-sm pt-2">
            <span className="text-muted-foreground">
              Already have an account?{" "}
            </span>
            <a href="/login" className="text-primary hover:underline">
              Log in here
            </a>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
