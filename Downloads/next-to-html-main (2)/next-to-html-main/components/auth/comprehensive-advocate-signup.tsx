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
import {
  Scale,
  CheckCircle,
  Clock,
  AlertCircle,
  Eye,
  EyeOff,
} from "lucide-react";
import ReCaptcha from "@/components/ui/recaptcha";

interface ComprehensiveAdvocateSignupProps {
  userType: "advocate";
}

export function ComprehensiveAdvocateSignup({
  userType,
}: ComprehensiveAdvocateSignupProps) {
  const [registrationStatus, setRegistrationStatus] = useState<
    "initial" | "submitted" | "under_review" | "approved" | "rejected"
  >("initial");
  const [currentStep, setCurrentStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    // Account Information
    username: "",
    password: "",
    confirmPassword: "",
    recoveryQuestion: "",
    recoveryAnswer: "",

    // Personal Information (Contact Me Form - Step 1)
    salutation: "",
    firstName: "",
    middleName: "",
    lastName: "",
    dateOfBirth: "",
    gender: "",
    address: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
    primaryPhone: "",
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
    practiceAreas: [] as string[],
    experience: "",
    highCourt: "",
    supremeCourt: false,
    currentChamber: "",
    chamberAddress: "",

    // Education
    lawDegree: "",
    graduationYear: "",
    lawCollege: "",
    additionalQualifications: "",

    // Languages
    languagesSpoken: [] as string[],

    // Fees
    fees: {
      consultation: "",
      courtAppearance: "",
      documentation: "",
    },

    // Additional Information
    bio: "",
    achievements: "",
    referralAdvocateId: "",
    additionalComments: "",

    // Document Uploads
    barCouncilCertificate: null as File | null,
    idProof: null as File | null,
    addressProof: null as File | null,
    photograph: null as File | null,

    // Terms and Privacy
    acceptTerms: false,
    acceptPrivacy: false,
    acceptDataProcessing: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Step 1: Submit for admin verification
    setRegistrationStatus("submitted");
    console.log(
      "Advocate registration submitted for admin verification:",
      formData
    );

    // In real implementation, this would:
    // 1. Send data to backend for BAR Council ID verification
    // 2. Admin reviews and approves/rejects
    // 3. If approved, system generates username/password
    // 4. Advocate receives credentials via email
    // 5. Advocate can then login and complete profile
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
              onClick={() => (window.location.href = "/login?userType=advocate")}
              className="mt-4"
            >
              Login to Your Account
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

  const practiceAreaOptions = [
    "Civil Law",
    "Criminal Law",
    "Corporate Law",
    "Family Law",
    "Labour Law",
    "Constitutional Law",
    "Intellectual Property",
    "Tax Law",
    "Banking Law",
    "Insurance Law",
    "Real Estate Law",
    "Immigration Law",
    "Environmental Law",
  ];

  const languageOptions = [
    "Hindi",
    "English",
    "Bengali",
    "Telugu",
    "Marathi",
    "Tamil",
    "Gujarati",
    "Urdu",
    "Kannada",
    "Odia",
    "Malayalam",
    "Punjabi",
    "Assamese",
  ];

  const recoveryQuestions = [
    "What was your first pet's name?",
    "What is your mother's maiden name?",
    "What was the name of your first school?",
    "What is your favorite book?",
    "What city were you born in?",
  ];

  const renderStep1 = () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold mb-4">Login Credentials</h3>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="username">Username *</Label>
          <Input
            id="username"
            value={formData.username}
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
            placeholder="Enter username"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email Address *</Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            placeholder="advocate@email.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="password">Password *</Label>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              placeholder="Create password"
            />
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="absolute right-0 top-0 h-full px-3"
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
          <Label htmlFor="confirmPassword">Confirm Password *</Label>
          <div className="relative">
            <Input
              id="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              value={formData.confirmPassword}
              onChange={(e) =>
                setFormData({ ...formData, confirmPassword: e.target.value })
              }
              placeholder="Confirm password"
            />
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="absolute right-0 top-0 h-full px-3"
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

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="recoveryQuestion">Recovery Question *</Label>
          <Select
            value={formData.recoveryQuestion}
            onValueChange={(value) =>
              setFormData({ ...formData, recoveryQuestion: value })
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Select a recovery question" />
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
          <Label htmlFor="recoveryAnswer">Recovery Answer *</Label>
          <Input
            id="recoveryAnswer"
            value={formData.recoveryAnswer}
            onChange={(e) =>
              setFormData({ ...formData, recoveryAnswer: e.target.value })
            }
            placeholder="Enter your answer"
          />
        </div>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold mb-4">Personal Information</h3>

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
              <SelectValue placeholder="Title" />
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
            placeholder="First name"
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
            placeholder="Middle name"
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
            placeholder="Last name"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="dateOfBirth">Date of Birth *</Label>
          <Input
            id="dateOfBirth"
            type="date"
            value={formData.dateOfBirth}
            onChange={(e) =>
              setFormData({ ...formData, dateOfBirth: e.target.value })
            }
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="gender">Gender</Label>
          <Select
            value={formData.gender}
            onValueChange={(value) =>
              setFormData({ ...formData, gender: value })
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Select gender" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="male">Male</SelectItem>
              <SelectItem value="female">Female</SelectItem>
              <SelectItem value="other">Other</SelectItem>
              <SelectItem value="prefer-not-to-say">
                Prefer not to say
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="font-medium">Contact Information</h4>
        <div className="space-y-2">
          <Label htmlFor="address1">Address Line 1 *</Label>
          <Input
            id="address1"
            value={formData.address1}
            onChange={(e) =>
              setFormData({ ...formData, address1: e.target.value })
            }
            placeholder="Street address"
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
            placeholder="Apartment, suite, etc."
          />
        </div>
        <div className="grid grid-cols-4 gap-4">
          <div className="space-y-2">
            <Label htmlFor="city">City *</Label>
            <Input
              id="city"
              value={formData.city}
              onChange={(e) =>
                setFormData({ ...formData, city: e.target.value })
              }
              placeholder="City"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="state">State *</Label>
            <Input
              id="state"
              value={formData.state}
              onChange={(e) =>
                setFormData({ ...formData, state: e.target.value })
              }
              placeholder="State"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="country">Country</Label>
            <Input
              id="country"
              value={formData.country}
              onChange={(e) =>
                setFormData({ ...formData, country: e.target.value })
              }
              placeholder="Country"
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
              placeholder="Pincode"
            />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="primaryPhone">Primary Phone *</Label>
            <Input
              id="primaryPhone"
              value={formData.primaryPhone}
              onChange={(e) =>
                setFormData({ ...formData, primaryPhone: e.target.value })
              }
              placeholder="+91 9876543210"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="secondaryPhone">Secondary Phone</Label>
            <Input
              id="secondaryPhone"
              value={formData.secondaryPhone}
              onChange={(e) =>
                setFormData({ ...formData, secondaryPhone: e.target.value })
              }
              placeholder="+91 9876543210"
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
              placeholder="alternate@email.com"
            />
          </div>
        </div>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold mb-4">Professional Information</h3>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="barCouncilRegistration">
            Bar Council Registration No. *
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
            placeholder="Enter registration number"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="enrollmentYear">Year of Enrollment *</Label>
          <Input
            id="enrollmentYear"
            type="number"
            value={formData.enrollmentYear}
            onChange={(e) =>
              setFormData({ ...formData, enrollmentYear: e.target.value })
            }
            placeholder="2020"
            min="1950"
            max="2025"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label>Practice Areas * (Select multiple)</Label>
        <div className="grid grid-cols-3 gap-2 max-h-32 overflow-y-auto border rounded p-2">
          {practiceAreaOptions.map((area) => (
            <div key={area} className="flex items-center space-x-2">
              <Checkbox
                id={area}
                checked={formData.practiceAreas.includes(area)}
                onCheckedChange={(checked) => {
                  if (checked) {
                    setFormData({
                      ...formData,
                      practiceAreas: [...formData.practiceAreas, area],
                    });
                  } else {
                    setFormData({
                      ...formData,
                      practiceAreas: formData.practiceAreas.filter(
                        (a) => a !== area
                      ),
                    });
                  }
                }}
              />
              <Label htmlFor={area} className="text-sm">
                {area}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="experience">Years of Experience *</Label>
          <Select
            value={formData.experience}
            onValueChange={(value) =>
              setFormData({ ...formData, experience: value })
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Select experience" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0-1">0-1 years</SelectItem>
              <SelectItem value="2-5">2-5 years</SelectItem>
              <SelectItem value="6-10">6-10 years</SelectItem>
              <SelectItem value="11-15">11-15 years</SelectItem>
              <SelectItem value="16-20">16-20 years</SelectItem>
              <SelectItem value="20+">20+ years</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="highCourt">High Court *</Label>
          <Input
            id="highCourt"
            value={formData.highCourt}
            onChange={(e) =>
              setFormData({ ...formData, highCourt: e.target.value })
            }
            placeholder="e.g., Delhi High Court"
          />
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox
          id="supremeCourt"
          checked={formData.supremeCourt}
          onCheckedChange={(checked) =>
            setFormData({ ...formData, supremeCourt: !!checked })
          }
        />
        <Label htmlFor="supremeCourt">
          Authorized to practice in Supreme Court of India
        </Label>
      </div>

      <div className="space-y-2">
        <Label htmlFor="currentChamber">Current Chamber/Office *</Label>
        <Input
          id="currentChamber"
          value={formData.currentChamber}
          onChange={(e) =>
            setFormData({ ...formData, currentChamber: e.target.value })
          }
          placeholder="Chamber name or law firm"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="chamberAddress">Chamber/Office Address *</Label>
        <Textarea
          id="chamberAddress"
          value={formData.chamberAddress}
          onChange={(e) =>
            setFormData({ ...formData, chamberAddress: e.target.value })
          }
          placeholder="Complete address of your practice location"
          rows={3}
        />
      </div>
    </div>
  );

  const renderStep4 = () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold mb-4">
        Education & Additional Details
      </h3>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="lawDegree">Law Degree *</Label>
          <Select
            value={formData.lawDegree}
            onValueChange={(value) =>
              setFormData({ ...formData, lawDegree: value })
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Select degree" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="LLB">LLB</SelectItem>
              <SelectItem value="BA LLB">BA LLB</SelectItem>
              <SelectItem value="LLM">LLM</SelectItem>
              <SelectItem value="PhD Law">PhD in Law</SelectItem>
              <SelectItem value="Other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="graduationYear">Graduation Year *</Label>
          <Input
            id="graduationYear"
            type="number"
            value={formData.graduationYear}
            onChange={(e) =>
              setFormData({ ...formData, graduationYear: e.target.value })
            }
            placeholder="2020"
            min="1950"
            max="2025"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="lawCollege">Law College/University *</Label>
        <Input
          id="lawCollege"
          value={formData.lawCollege}
          onChange={(e) =>
            setFormData({ ...formData, lawCollege: e.target.value })
          }
          placeholder="Name of your law college/university"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="additionalQualifications">
          Additional Qualifications
        </Label>
        <Textarea
          id="additionalQualifications"
          value={formData.additionalQualifications}
          onChange={(e) =>
            setFormData({
              ...formData,
              additionalQualifications: e.target.value,
            })
          }
          placeholder="Other degrees, certifications, diplomas"
          rows={2}
        />
      </div>

      <div className="space-y-2">
        <Label>Languages Spoken (Select multiple)</Label>
        <div className="grid grid-cols-4 gap-2 max-h-24 overflow-y-auto border rounded p-2">
          {languageOptions.map((language) => (
            <div key={language} className="flex items-center space-x-2">
              <Checkbox
                id={language}
                checked={formData.languagesSpoken.includes(language)}
                onCheckedChange={(checked) => {
                  if (checked) {
                    setFormData({
                      ...formData,
                      languagesSpoken: [...formData.languagesSpoken, language],
                    });
                  } else {
                    setFormData({
                      ...formData,
                      languagesSpoken: formData.languagesSpoken.filter(
                        (l) => l !== language
                      ),
                    });
                  }
                }}
              />
              <Label htmlFor={language} className="text-sm">
                {language}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="font-medium">Fee Structure (Optional)</h4>
        <div className="grid grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="consultationFee">Consultation Fee (₹)</Label>
            <Input
              id="consultationFee"
              type="number"
              value={formData.fees.consultation}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  fees: { ...formData.fees, consultation: e.target.value },
                })
              }
              placeholder="1000"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="courtAppearanceFee">Court Appearance (₹)</Label>
            <Input
              id="courtAppearanceFee"
              type="number"
              value={formData.fees.courtAppearance}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  fees: { ...formData.fees, courtAppearance: e.target.value },
                })
              }
              placeholder="5000"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="documentationFee">Documentation (₹)</Label>
            <Input
              id="documentationFee"
              type="number"
              value={formData.fees.documentation}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  fees: { ...formData.fees, documentation: e.target.value },
                })
              }
              placeholder="2000"
            />
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="bio">Professional Bio</Label>
        <Textarea
          id="bio"
          value={formData.bio}
          onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
          placeholder="Brief description of your practice and expertise"
          rows={3}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="achievements">Notable Achievements/Awards</Label>
        <Textarea
          id="achievements"
          value={formData.achievements}
          onChange={(e) =>
            setFormData({ ...formData, achievements: e.target.value })
          }
          placeholder="Any notable cases, awards, or recognition"
          rows={2}
        />
      </div>
    </div>
  );

  const renderStep5 = () => (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold mb-4">
        Document Upload & Verification
      </h3>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="barCouncilCertificate">
            Bar Council Certificate *
          </Label>
          <Input
            id="barCouncilCertificate"
            type="file"
            accept=".pdf,.jpg,.jpeg,.png"
            onChange={(e) =>
              setFormData({
                ...formData,
                barCouncilCertificate: e.target.files?.[0] || null,
              })
            }
          />
          <p className="text-xs text-gray-500">PDF, JPG, PNG (Max 2MB)</p>
        </div>
        <div className="space-y-2">
          <Label htmlFor="idProof">Government ID Proof *</Label>
          <Input
            id="idProof"
            type="file"
            accept=".pdf,.jpg,.jpeg,.png"
            onChange={(e) =>
              setFormData({ ...formData, idProof: e.target.files?.[0] || null })
            }
          />
          <p className="text-xs text-gray-500">Aadhar/PAN/Passport (Max 2MB)</p>
        </div>
        <div className="space-y-2">
          <Label htmlFor="addressProof">Address Proof *</Label>
          <Input
            id="addressProof"
            type="file"
            accept=".pdf,.jpg,.jpeg,.png"
            onChange={(e) =>
              setFormData({
                ...formData,
                addressProof: e.target.files?.[0] || null,
              })
            }
          />
          <p className="text-xs text-gray-500">
            Utility bill/Bank statement (Max 2MB)
          </p>
        </div>
        <div className="space-y-2">
          <Label htmlFor="photograph">Professional Photograph</Label>
          <Input
            id="photograph"
            type="file"
            accept=".jpg,.jpeg,.png"
            onChange={(e) =>
              setFormData({
                ...formData,
                photograph: e.target.files?.[0] || null,
              })
            }
          />
          <p className="text-xs text-gray-500">JPG, PNG (Max 1MB)</p>
        </div>
      </div>

      <ReCaptcha />

      <div className="space-y-3">
        <div className="flex items-center space-x-2">
          <Checkbox
            id="acceptTerms"
            checked={formData.acceptTerms}
            onCheckedChange={(checked) =>
              setFormData({ ...formData, acceptTerms: !!checked })
            }
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
          />
          <Label htmlFor="acceptPrivacy" className="text-sm">
            I accept the{" "}
            <a href="/privacy-policy" className="text-primary hover:underline">
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
              setFormData({ ...formData, acceptDataProcessing: !!checked })
            }
          />
          <Label htmlFor="acceptDataProcessing" className="text-sm">
            I consent to processing of my personal data for verification and
            platform services *
          </Label>
        </div>
      </div>
    </div>
  );

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
          Join our network of legal professionals - Complete registration in 5
          steps
        </CardDescription>

        {/* Progress Indicator */}
        <div className="flex justify-center mt-4">
          <div className="flex space-x-2">
            {[1, 2, 3, 4, 5].map((step) => (
              <div
                key={step}
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  step === currentStep
                    ? "bg-primary text-primary-foreground"
                    : step < currentStep
                    ? "bg-primary/20 text-primary"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                {step}
              </div>
            ))}
          </div>
        </div>
        <div className="text-sm text-gray-600 mt-2">
          Step {currentStep} of 5:{" "}
          {currentStep === 1
            ? "Login Credentials"
            : currentStep === 2
            ? "Personal Information"
            : currentStep === 3
            ? "Professional Details"
            : currentStep === 4
            ? "Education & Bio"
            : "Documents & Verification"}
        </div>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {currentStep === 1 && renderStep1()}
          {currentStep === 2 && renderStep2()}
          {currentStep === 3 && renderStep3()}
          {currentStep === 4 && renderStep4()}
          {currentStep === 5 && renderStep5()}

          <div className="flex justify-between pt-6">
            <Button
              type="button"
              variant="outline"
              onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
              disabled={currentStep === 1}
            >
              Previous
            </Button>

            {currentStep < 5 ? (
              <Button
                type="button"
                onClick={() => setCurrentStep(Math.min(5, currentStep + 1))}
              >
                Next
              </Button>
            ) : (
              <Button type="submit" className="px-8">
                Complete Registration
              </Button>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
