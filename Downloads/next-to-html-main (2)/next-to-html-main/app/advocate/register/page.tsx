"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  Mail,
  Phone,
} from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type FormField =
  | "firstName"
  | "middleName"
  | "lastName"
  | "email"
  | "mobile"
  | "alternatePhone"
  | "stateBarCouncil"
  | "barCouncilNumber"
  | "yearOfEnrollment"
  | "localBarAssociation"
  | "localBarAssociationName"
  | "referralAdvocateId"
  | "additionalComments";

export default function AdvocateRegister() {
  const [currentStep, setCurrentStep] = useState<1 | 2>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [registrationComplete, setRegistrationComplete] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState<Record<FormField, string>>({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    mobile: "",
    alternatePhone: "",
    stateBarCouncil: "",
    barCouncilNumber: "",
    yearOfEnrollment: "",
    localBarAssociation: "No",
    localBarAssociationName: "",
    referralAdvocateId: "",
    additionalComments: "",
  });

  const updateFormData = (field: FormField, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const validateStep1 = () => {
    const nextErrors: Record<string, string> = {};
    if (!formData.firstName.trim()) nextErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) nextErrors.lastName = "Last name is required";
    if (!formData.email.trim()) {
      nextErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = "Enter a valid email address";
    }
    if (!formData.mobile.trim()) {
      nextErrors.mobile = "Mobile number is required";
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      nextErrors.mobile = "Mobile must be 10 digits";
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const validateStep2 = () => {
    const nextErrors: Record<string, string> = {};
    if (!formData.stateBarCouncil.trim()) {
      nextErrors.stateBarCouncil = "State BAR Council is required";
    }
    if (!formData.barCouncilNumber.trim()) {
      nextErrors.barCouncilNumber = "BAR Council Number is required";
    }
    if (!formData.yearOfEnrollment.trim()) {
      nextErrors.yearOfEnrollment = "Year of enrollment is required";
    } else if (!/^\d{4}$/.test(formData.yearOfEnrollment)) {
      nextErrors.yearOfEnrollment = "Enter a valid 4 digit year";
    }
    if (
      formData.localBarAssociation === "Yes" &&
      !formData.localBarAssociationName.trim()
    ) {
      nextErrors.localBarAssociationName = "Please mention the association name";
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleNext = (event: React.FormEvent) => {
    event.preventDefault();
    if (currentStep === 1 && validateStep1()) {
      setCurrentStep(2);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!validateStep2()) return;

    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setRegistrationComplete(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (registrationComplete) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5 flex items-center justify-center p-4">
        <Card className="max-w-2xl w-full shadow-xl">
          <CardHeader className="text-center space-y-4 pb-8">
            <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
            <CardTitle className="text-2xl font-bold text-gray-900">
              Registration Submitted Successfully!
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <Alert className="bg-blue-50 border-blue-200">
              <AlertDescription className="text-gray-700 text-sm space-y-3">
                <p>
                  <strong>Thank you for registering with AdvocateKhoj!</strong>
                </p>
                <p>
                  Your application has been submitted and is now under review by
                  our admin team.
                </p>
                <div className="space-y-2">
                  <p className="font-semibold">What happens next?</p>
                  <ol className="list-decimal list-inside space-y-2 ml-2">
                    <li>The admin team verifies your details and checks for duplicates.</li>
                    <li>You receive your username and temporary password via email.</li>
                    <li>
                      Complete your profile with contact, practice areas, languages, and BAR
                      affiliations.
                    </li>
                    <li>Your profile is approved within 15 days.</li>
                  </ol>
                </div>
                <div className="p-3 bg-yellow-50 border border-yellow-200 rounded">
                  <p className="text-sm">
                    <strong>Important:</strong> Watch for an email from{" "}
                    <span className="font-mono text-xs">customer_service@advocatekhoj.in</span>.
                    Check your spam folder if you do not see it in your inbox.
                  </p>
                </div>
              </AlertDescription>
            </Alert>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm font-semibold text-gray-700 mb-2">Registered Email</p>
              <p className="text-base text-gray-900">{formData.email}</p>
            </div>

            <div className="flex flex-col gap-3">
              <Button asChild className="w-full bg-primary hover:bg-primary/90">
                <Link href="/">Return to Home</Link>
              </Button>
              <Button asChild variant="outline" className="w-full">
                <Link href="/login?userType=advocate">
                  Login (After receiving credentials)
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5 flex items-center justify-center p-4">
      <Card className="max-w-2xl w-full shadow-xl">
        <CardHeader className="space-y-4">
          <div className="flex items-center justify-between">
            <Badge variant="secondary" className="text-sm">
              Step {currentStep} of 2
            </Badge>
            <Badge variant="outline" className="text-xs">New Application</Badge>
          </div>
          <CardTitle className="text-2xl font-bold text-gray-900">
            Advocate Registration
          </CardTitle>
          <p className="text-sm text-gray-600">
            Register basic details so we can verify your credentials. After approval you
            will receive login details to complete your profile.
          </p>
          <div className="flex items-center gap-2">
            <div className={`flex-1 h-2 rounded ${currentStep >= 1 ? "bg-primary" : "bg-gray-200"}`} />
            <div className={`flex-1 h-2 rounded ${currentStep === 2 ? "bg-primary" : "bg-gray-200"}`} />
          </div>
        </CardHeader>

        <CardContent>
          <form
            onSubmit={currentStep === 1 ? handleNext : handleSubmit}
            className="space-y-5"
          >
            {currentStep === 1 ? (
              <>
                <Alert className="bg-yellow-50 border-yellow-200">
                  <AlertDescription className="text-sm text-gray-700">
                    <strong>Note:</strong> Once your application is submitted, the displayed
                    advocate name cannot be changed. Please double-check spelling.
                  </AlertDescription>
                </Alert>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">
                      First Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => updateFormData("firstName", e.target.value)}
                      className={errors.firstName ? "border-red-500" : ""}
                      placeholder="Enter first name"
                    />
                    {errors.firstName && (
                      <p className="text-xs text-red-500">{errors.firstName}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="middleName">Middle Name</Label>
                    <Input
                      id="middleName"
                      value={formData.middleName}
                      onChange={(e) => updateFormData("middleName", e.target.value)}
                      placeholder="Optional"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">
                      Last Name / Surname <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => updateFormData("lastName", e.target.value)}
                      className={errors.lastName ? "border-red-500" : ""}
                      placeholder="Enter last name"
                    />
                    {errors.lastName && (
                      <p className="text-xs text-red-500">{errors.lastName}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">
                      Email <span className="text-red-500">*</span>
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => updateFormData("email", e.target.value)}
                        className={`pl-10 ${errors.email ? "border-red-500" : ""}`}
                        placeholder="your.email@example.com"
                      />
                    </div>
                    {errors.email && (
                      <p className="text-xs text-red-500">{errors.email}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="mobile">
                      Mobile Number <span className="text-red-500">*</span>
                    </Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <Input
                        id="mobile"
                        inputMode="numeric"
                        value={formData.mobile}
                        onChange={(e) =>
                          updateFormData(
                            "mobile",
                            e.target.value.replace(/\D/g, "").slice(0, 10)
                          )
                        }
                        className={`pl-10 ${errors.mobile ? "border-red-500" : ""}`}
                        placeholder="10 digit mobile number"
                      />
                    </div>
                    {errors.mobile && (
                      <p className="text-xs text-red-500">{errors.mobile}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="alternatePhone">Alternate Phone (optional)</Label>
                  <Input
                    id="alternatePhone"
                    inputMode="numeric"
                    value={formData.alternatePhone}
                    onChange={(e) =>
                      updateFormData(
                        "alternatePhone",
                        e.target.value.replace(/\D/g, "").slice(0, 10)
                      )
                    }
                    placeholder="Provide another reachable number"
                  />
                </div>
              </>
            ) : (
              <>
                <Alert className="bg-blue-50 border-blue-200">
                  <AlertDescription className="text-sm text-gray-700">
                    Provide BAR council information so we can verify your credentials.
                  </AlertDescription>
                </Alert>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="stateBarCouncil">
                      State BAR Council <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="stateBarCouncil"
                      value={formData.stateBarCouncil}
                      onChange={(e) =>
                        updateFormData("stateBarCouncil", e.target.value)
                      }
                      className={errors.stateBarCouncil ? "border-red-500" : ""}
                      placeholder="e.g., Bar Council of Delhi"
                    />
                    {errors.stateBarCouncil && (
                      <p className="text-xs text-red-500">{errors.stateBarCouncil}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="barCouncilNumber">
                      BAR Council Number <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="barCouncilNumber"
                      value={formData.barCouncilNumber}
                      onChange={(e) =>
                        updateFormData("barCouncilNumber", e.target.value)
                      }
                      className={errors.barCouncilNumber ? "border-red-500" : ""}
                      placeholder="Enter registration number"
                    />
                    {errors.barCouncilNumber && (
                      <p className="text-xs text-red-500">{errors.barCouncilNumber}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="yearOfEnrollment">
                      Year of Enrollment <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="yearOfEnrollment"
                      inputMode="numeric"
                      value={formData.yearOfEnrollment}
                      onChange={(e) =>
                        updateFormData(
                          "yearOfEnrollment",
                          e.target.value.replace(/\D/g, "").slice(0, 4)
                        )
                      }
                      className={errors.yearOfEnrollment ? "border-red-500" : ""}
                      placeholder="YYYY"
                    />
                    {errors.yearOfEnrollment && (
                      <p className="text-xs text-red-500">{errors.yearOfEnrollment}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="localBarAssociation">
                      Member of Local Bar Association?
                    </Label>
                    <Select
                      value={formData.localBarAssociation}
                      onValueChange={(value) =>
                        updateFormData("localBarAssociation", value)
                      }
                    >
                      <SelectTrigger id="localBarAssociation">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="No">No</SelectItem>
                        <SelectItem value="Yes">Yes</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {formData.localBarAssociation === "Yes" && (
                  <div className="space-y-2">
                    <Label htmlFor="localBarAssociationName">
                      Local Bar Association Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="localBarAssociationName"
                      value={formData.localBarAssociationName}
                      onChange={(e) =>
                        updateFormData("localBarAssociationName", e.target.value)
                      }
                      className={errors.localBarAssociationName ? "border-red-500" : ""}
                      placeholder="Enter association name"
                    />
                    {errors.localBarAssociationName && (
                      <p className="text-xs text-red-500">
                        {errors.localBarAssociationName}
                      </p>
                    )}
                  </div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="referralAdvocateId">Referral Advocate ID (optional)</Label>
                  <Input
                    id="referralAdvocateId"
                    value={formData.referralAdvocateId}
                    onChange={(e) =>
                      updateFormData("referralAdvocateId", e.target.value)
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="additionalComments">Additional Comments</Label>
                  <Textarea
                    id="additionalComments"
                    value={formData.additionalComments}
                    onChange={(e) =>
                      updateFormData("additionalComments", e.target.value)
                    }
                    placeholder="Share any extra details for the admin review"
                    rows={4}
                  />
                </div>
              </>
            )}

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              {currentStep === 1 ? (
                <Button
                  type="button"
                  variant="outline"
                  className="flex-1"
                  asChild
                >
                  <Link href="/login?userType=advocate">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Login
                  </Link>
                </Button>
              ) : (
                <Button
                  type="button"
                  variant="outline"
                  className="flex-1"
                  onClick={() => setCurrentStep(1)}
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back
                </Button>
              )}

              <Button
                type="submit"
                className="flex-1 bg-primary hover:bg-primary/90"
                disabled={isSubmitting}
              >
                {currentStep === 1
                  ? "Continue"
                  : isSubmitting
                  ? "Submitting..."
                  : (
                      <>
                        Submit Application
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </>
                    )}
              </Button>
            </div>

            <p className="text-xs text-center text-gray-500 pt-2">
              Already have an account?{" "}
              <Link
                href="/login?userType=advocate"
                className="text-primary font-semibold hover:underline"
              >
                Login here
              </Link>
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
