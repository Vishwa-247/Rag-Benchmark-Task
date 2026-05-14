"use client";

import type React from "react";
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
import { Textarea } from "@/components/ui/textarea";
import { Scale, CheckCircle, Clock, AlertCircle } from "lucide-react";
import ReCaptcha from "@/components/ui/recaptcha";

interface AdvocateRegistrationWorkflowProps {
  userType: "advocate";
}

export function AdvocateRegistrationWorkflow({
  userType,
}: AdvocateRegistrationWorkflowProps) {
  const [registrationStatus, setRegistrationStatus] = useState<
    "initial" | "submitted" | "under_review" | "approved" | "rejected"
  >("initial");
  const [currentStep, setCurrentStep] = useState(0);
  const [stepProgress, setStepProgress] = useState(0);

  const [formData, setFormData] = useState({
    // Contact Information (Based on the existing form you showed)
    salutation: "",
    firstName: "",
    lastName: "",
    address: "",
    pincode: "",
    secondaryPhone: "",
    mobile: "",
    fax: "",
    email: "",
    alternateEmail: "",
    website: "",

    // Professional Information (BAR Council Details)
    stateBarCouncil: "",
    barCouncilRegistration: "",
    enrollmentYear: "",
    isLocalBarMember: false,
    localBarAssociation: "",

    // Additional Information
    referralAdvocateId: "",
    additionalComments: "",

    // Terms and Privacy
    acceptTerms: false,
    acceptPrivacy: false,
    acceptDataProcessing: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Step 1: Submit for admin verification
    setRegistrationStatus("submitted");
    setCurrentStep(1);
    console.log(
      "Advocate registration submitted for admin verification:",
      formData
    );

    // Simulate the registration process progression
    simulateRegistrationProcess();

    // In real implementation, this would:
    // 1. Send data to backend for BAR Council ID verification
    // 2. Admin reviews and approves/rejects
    // 3. If approved, system generates username/password
    // 4. Advocate receives credentials via email
    // 5. Advocate can then login and complete profile
  };

  const simulateRegistrationProcess = () => {
    // Step 1: Application submitted (already done)
    setTimeout(() => {
      setCurrentStep(2);
      setStepProgress(25);
    }, 2000); // 2 seconds

    // Step 2: Admin verifies BAR Council ID
    setTimeout(() => {
      setCurrentStep(3);
      setStepProgress(50);
    }, 5000); // 5 seconds

    // Step 3: Username/Password generated
    setTimeout(() => {
      setCurrentStep(4);
      setStepProgress(75);
    }, 8000); // 8 seconds

    // Step 4: Complete profile setup
    setTimeout(() => {
      setCurrentStep(5);
      setStepProgress(90);
    }, 11000); // 11 seconds

    // Step 5: Get 15-day free trial
    setTimeout(() => {
      setRegistrationStatus("approved");
      setCurrentStep(6);
      setStepProgress(100);
    }, 14000); // 14 seconds
  };

  // Show status screen if registration is submitted
  if (registrationStatus !== "initial") {
    return (
      <Card className="w-full max-w-2xl">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            {registrationStatus === "submitted" && (
              <Clock className="h-12 w-12 text-orange-500" />
            )}
            {registrationStatus === "under_review" && (
              <Clock className="h-12 w-12 text-blue-500" />
            )}
            {registrationStatus === "approved" && (
              <CheckCircle className="h-12 w-12 text-green-500" />
            )}
            {registrationStatus === "rejected" && (
              <AlertCircle className="h-12 w-12 text-red-500" />
            )}
          </div>
          <CardTitle className="text-2xl font-bold">
            {registrationStatus === "submitted" && "Registration Submitted"}
            {registrationStatus === "under_review" && "Under Admin Review"}
            {registrationStatus === "approved" && "Registration Approved"}
            {registrationStatus === "rejected" && "Registration Rejected"}
          </CardTitle>
          <CardDescription>
            {registrationStatus === "submitted" && (
              <div className="space-y-2">
                <p>Thank you for submitting your registration application.</p>
                <p>
                  Our admin team will verify your BAR Council ID and other
                  details.
                </p>
                <p className="font-medium">
                  You will receive an email with your login credentials once
                  approved.
                </p>
              </div>
            )}
            {registrationStatus === "under_review" && (
              <div className="space-y-2">
                <p>
                  Your application is currently under review by our admin team.
                </p>
                <p>
                  We are verifying your BAR Council registration and other
                  professional details.
                </p>
                <p>This process typically takes 1-2 business days.</p>
              </div>
            )}
            {registrationStatus === "approved" && (
              <div className="space-y-2">
                <p>Congratulations! Your registration has been approved.</p>
                <p>
                  Your username and password have been sent to your email
                  address.
                </p>
                <p>You can now login and complete your professional profile.</p>
                <p className="font-medium text-green-600">
                  15-day free trial has been activated!
                </p>
              </div>
            )}
            {registrationStatus === "rejected" && (
              <div className="space-y-2">
                <p>Your registration application has been rejected.</p>
                <p>Please contact our support team for more information.</p>
                <p>You may resubmit with correct information.</p>
              </div>
            )}
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          {registrationStatus === "approved" && (
            <Button
              onClick={() =>
                (window.location.href = "/login?userType=advocate")
              }
              className="mt-4"
            >
              Log In to Your Account
            </Button>
          )}
          {registrationStatus === "rejected" && (
            <Button
              onClick={() => setRegistrationStatus("initial")}
              className="mt-4"
            >
              Try Again
            </Button>
          )}
          {(registrationStatus === "submitted" ||
            registrationStatus === "under_review") && (
            <div className="mt-4 p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold mb-2">What happens next?</h4>
              <div className="text-sm space-y-1 text-left">
                <div className="flex items-center">
                  ✓ Step 1: Application submitted
                </div>
                <div className="flex items-center">
                  ⏳ Step 2: Admin verifies BAR Council ID
                </div>
                <div className="flex items-center text-gray-500">
                  ○ Step 3: Username/Password generated
                </div>
                <div className="flex items-center text-gray-500">
                  ○ Step 4: Complete your profile
                </div>
                <div className="flex items-center text-gray-500">
                  ○ Step 5: Get 15-day free trial
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    );
  }

  // Main registration form (Step 1)
  return (
    <Card className="w-full max-w-4xl">
      <CardHeader className="text-center">
        <div className="flex justify-center mb-4">
          <Scale className="h-8 w-8 text-primary" />
        </div>
        <CardTitle className="text-2xl font-bold">
          Advocate Registration
        </CardTitle>
        <CardDescription>
          Complete this form to join our network of legal professionals.
          <br />
          Admin will verify your details before granting access.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Information</h3>

            <div className="grid grid-cols-4 gap-4">
              <div className="space-y-2">
                <Label htmlFor="salutation">Title</Label>
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
                    <SelectItem value="Mr.">Mr.</SelectItem>
                    <SelectItem value="Ms.">Ms.</SelectItem>
                    <SelectItem value="Mrs.">Mrs.</SelectItem>
                    <SelectItem value="Dr.">Dr.</SelectItem>
                    <SelectItem value="Adv.">Adv.</SelectItem>
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
                <Label htmlFor="lastName">Last Name / Surname *</Label>
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
              <Label htmlFor="address">
                Address *{" "}
                <span className="text-xs text-red-500">
                  (please include city, state, country)
                </span>
              </Label>
              <Textarea
                id="address"
                value={formData.address}
                onChange={(e) =>
                  setFormData({ ...formData, address: e.target.value })
                }
                rows={3}
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
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

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="mobile">
                  Mobile Number *
                </Label>
                <Input
                  id="mobile"
                  value={formData.mobile}
                  onChange={(e) =>
                    setFormData({ ...formData, mobile: e.target.value })
                  }
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="secondaryPhone">Alternate Phone</Label>
                <Input
                  id="secondaryPhone"
                  value={formData.secondaryPhone}
                  onChange={(e) =>
                    setFormData({ ...formData, secondaryPhone: e.target.value })
                  }
                  placeholder="Optional"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="fax">Fax</Label>
                <Input
                  id="fax"
                  value={formData.fax}
                  onChange={(e) =>
                    setFormData({ ...formData, fax: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
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
                <Label htmlFor="alternateEmail">Alternate Email</Label>
                <Input
                  id="alternateEmail"
                  type="email"
                  value={formData.alternateEmail}
                  onChange={(e) =>
                    setFormData({ ...formData, alternateEmail: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="website">Website</Label>
              <Input
                id="website"
                value={formData.website}
                onChange={(e) =>
                  setFormData({ ...formData, website: e.target.value })
                }
              />
            </div>
          </div>

          {/* Professional Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Membership / Affiliations</h3>

            <div className="space-y-2">
              <Label htmlFor="stateBarCouncil">State BAR Council *</Label>
              <Input
                id="stateBarCouncil"
                value={formData.stateBarCouncil}
                onChange={(e) =>
                  setFormData({ ...formData, stateBarCouncil: e.target.value })
                }
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="barCouncilRegistration">
                  BAR Council ID Number *{" "}
                  <span className="text-xs text-red-500">
                    (Must be in /___/ format)
                  </span>
                </Label>
                <Input
                  id="barCouncilRegistration"
                  value={formData.barCouncilRegistration}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      barCouncilRegistration: e.target.value,
                    })
                  }
                  placeholder="/ABC123/"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="enrollmentYear">
                  Year of enrollment with BAR Council *
                </Label>
                <Input
                  id="enrollmentYear"
                  type="number"
                  value={formData.enrollmentYear}
                  onChange={(e) =>
                    setFormData({ ...formData, enrollmentYear: e.target.value })
                  }
                  min="1950"
                  max="2025"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Are you a member of local BAR Association?</Label>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="isLocalBarMember"
                    checked={formData.isLocalBarMember}
                    onCheckedChange={(checked) =>
                      setFormData({
                        ...formData,
                        isLocalBarMember: !!checked,
                      })
                    }
                  />
                  <Label htmlFor="isLocalBarMember">Yes</Label>
                </div>
              </div>
            </div>

            {formData.isLocalBarMember && (
              <div className="space-y-2">
                <Label htmlFor="localBarAssociation">
                  If yes then please specify
                </Label>
                <Input
                  id="localBarAssociation"
                  value={formData.localBarAssociation}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      localBarAssociation: e.target.value,
                    })
                  }
                />
              </div>
            )}
          </div>

          {/* Additional Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Miscellaneous</h3>

            <div className="space-y-2">
              <Label htmlFor="referralAdvocateId">
                Referral Advocate's AdvocateKhoj ID
              </Label>
              <Input
                id="referralAdvocateId"
                value={formData.referralAdvocateId}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    referralAdvocateId: e.target.value,
                  })
                }
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="additionalComments">Additional Comments</Label>
              <Textarea
                id="additionalComments"
                value={formData.additionalComments}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    additionalComments: e.target.value,
                  })
                }
                rows={3}
              />
            </div>
          </div>

          {/* reCAPTCHA */}
          <ReCaptcha />

          {/* Terms and Conditions */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="acceptTerms"
                checked={formData.acceptTerms}
                onCheckedChange={(checked) =>
                  setFormData({ ...formData, acceptTerms: !!checked })
                }
                required
              />
              <Label htmlFor="acceptTerms" className="text-sm">
                I accept the{" "}
                <a href="/terms" className="text-primary hover:underline">
                  Terms of Service
                </a>{" "}
                *
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="acceptPrivacy"
                checked={formData.acceptPrivacy}
                onCheckedChange={(checked) =>
                  setFormData({ ...formData, acceptPrivacy: !!checked })
                }
                required
              />
              <Label htmlFor="acceptPrivacy" className="text-sm">
                I accept the{" "}
                <a
                  href="/privacy-policy"
                  className="text-primary hover:underline"
                >
                  Privacy Policy
                </a>{" "}
                *
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="acceptDataProcessing"
                checked={formData.acceptDataProcessing}
                onCheckedChange={(checked) =>
                  setFormData({
                    ...formData,
                    acceptDataProcessing: !!checked,
                  })
                }
                required
              />
              <Label htmlFor="acceptDataProcessing" className="text-sm">
                I consent to processing of my personal data for verification and
                platform services *
              </Label>
            </div>
          </div>

          <Button type="submit" className="w-full" size="lg">
            Contact Me
          </Button>
        </form>

        <div className="text-center text-sm mt-6">
          <span className="text-muted-foreground">
            Already have an account?{" "}
          </span>
          <a
            href="/login?userType=advocate"
            className="text-primary hover:underline"
          >
            Log in here
          </a>
        </div>
      </CardContent>
    </Card>
  );
}
