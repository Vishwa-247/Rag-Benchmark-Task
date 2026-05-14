"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import {
  Camera,
  Save,
  User,
  Shield,
  Bell,
  Eye,
  EyeOff,
  Download,
  Edit,
  CheckCircle,
  Lock,
  FileText,
} from "lucide-react";

interface EnhancedProfileModuleProps {
  onNavigate?: (section: string) => void;
}

export function EnhancedProfileModule({
  onNavigate,
}: EnhancedProfileModuleProps) {
  const [activeTab, setActiveTab] = useState("profile");
  const [showPassword, setShowPassword] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  // Profile form data
  const [profileData, setProfileData] = useState({
    salutation: "Mr.",
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    primaryPhone: "+91-9876543210",
    address1: "123 Main Street",
    city: "Mumbai",
    state: "Maharashtra",
    country: "India",
    pincode: "400001",
    occupation: "Software Engineer",
    bio: "Experienced professional seeking legal assistance for various matters.",
    preferredLanguage: "English",
  });

  // Security settings
  const [securityData, setSecurityData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
    recoveryQuestion: "What was your first pet's name?",
    recoveryAnswer: "Buddy",
    twoFactorEnabled: false,
  });

  // Privacy settings - Email notifications enabled by default
  const [privacyData, setPrivacyData] = useState({
    profileVisibility: "advocates",
    showEmail: false,
    showPhone: false,
    allowMessages: true,
    emailNotifications: true, // Enabled by default
    smsNotifications: false,
  });

  const accountStats = {
    memberSince: "January 2024",
    totalCases: 8,
    completedCases: 5,
    profileCompletion: 85,
  };

  const salutations = ["Mr.", "Ms.", "Mrs.", "Dr.", "Prof."];
  const states = ["Maharashtra", "Delhi", "Karnataka", "Gujarat", "Tamil Nadu"];
  const languages = ["English", "Hindi", "Bengali", "Telugu", "Marathi"];

  const handleProfileSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Profile updated:", profileData);
    setIsEditing(false);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold">My Profile</h2>
          <p className="text-gray-600">Manage your account and preferences</p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="text-primary">
            {accountStats.profileCompletion}% Complete
          </Badge>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export Data
          </Button>
        </div>
      </div>

      {/* Profile Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-6 text-center">
            <Avatar className="h-20 w-20 mx-auto mb-4">
              <AvatarImage src="/placeholder.svg?height=80&width=80" />
              <AvatarFallback className="text-lg">
                {profileData.firstName.charAt(0)}
                {profileData.lastName.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <h3 className="font-semibold text-lg mb-1">
              {profileData.salutation} {profileData.firstName}{" "}
              {profileData.lastName}
            </h3>
            <p className="text-gray-600 text-sm mb-2">
              {profileData.occupation}
            </p>
            <p className="text-gray-500 text-xs">
              Member since {accountStats.memberSince}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4 text-primary" />
                <span className="text-sm">
                  Total Cases: {accountStats.totalCases}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span className="text-sm">
                  Completed: {accountStats.completedCases}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Profile Completion</span>
                <span className="text-sm text-gray-600">
                  {accountStats.profileCompletion}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-primary h-2 rounded-full"
                  style={{ width: `${accountStats.profileCompletion}%` }}
                ></div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Profile Tabs */}
      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className="space-y-6"
      >
        <TabsList className="grid w-full grid-cols-3 lg:w-auto lg:grid-cols-3">
          <TabsTrigger value="profile" className="flex items-center gap-2">
            <User className="h-4 w-4" />
            Profile
          </TabsTrigger>
          <TabsTrigger value="security" className="flex items-center gap-2">
            <Shield className="h-4 w-4" />
            Security
          </TabsTrigger>
          <TabsTrigger value="privacy" className="flex items-center gap-2">
            <Lock className="h-4 w-4" />
            Privacy
          </TabsTrigger>
        </TabsList>

        {/* Profile Information Tab */}
        <TabsContent value="profile">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Personal Information</CardTitle>
                <Button
                  variant="outline"
                  onClick={() => setIsEditing(!isEditing)}
                >
                  <Edit className="h-4 w-4 mr-2" />
                  {isEditing ? "Cancel" : "Edit Profile"}
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleProfileSubmit} className="space-y-6">
                {/* Profile Picture */}
                <div className="flex items-center gap-6">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src="/placeholder.svg?height=96&width=96" />
                    <AvatarFallback className="text-lg">
                      {profileData.firstName.charAt(0)}
                      {profileData.lastName.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <Button variant="outline" size="sm" disabled={!isEditing}>
                      <Camera className="h-4 w-4 mr-2" />
                      Change Photo
                    </Button>
                    <p className="text-sm text-gray-500 mt-2">
                      JPG, PNG or GIF. Max size 2MB.
                    </p>
                  </div>
                </div>

                {/* Basic Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Basic Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label>Salutation</Label>
                      <Select
                        value={profileData.salutation}
                        onValueChange={(value) =>
                          setProfileData({ ...profileData, salutation: value })
                        }
                        disabled={!isEditing}
                      >
                        <SelectTrigger>
                          <SelectValue />
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
                      <Label>First Name *</Label>
                      <Input
                        value={profileData.firstName}
                        onChange={(e) =>
                          setProfileData({
                            ...profileData,
                            firstName: e.target.value,
                          })
                        }
                        disabled={!isEditing}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Last Name *</Label>
                      <Input
                        value={profileData.lastName}
                        onChange={(e) =>
                          setProfileData({
                            ...profileData,
                            lastName: e.target.value,
                          })
                        }
                        disabled={!isEditing}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Email Address *</Label>
                      <Input
                        type="email"
                        value={profileData.email}
                        onChange={(e) =>
                          setProfileData({
                            ...profileData,
                            email: e.target.value,
                          })
                        }
                        disabled={!isEditing}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Primary Phone *</Label>
                      <Input
                        value={profileData.primaryPhone}
                        onChange={(e) =>
                          setProfileData({
                            ...profileData,
                            primaryPhone: e.target.value,
                          })
                        }
                        disabled={!isEditing}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Occupation</Label>
                    <Input
                      value={profileData.occupation}
                      onChange={(e) =>
                        setProfileData({
                          ...profileData,
                          occupation: e.target.value,
                        })
                      }
                      disabled={!isEditing}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Bio</Label>
                    <Textarea
                      value={profileData.bio}
                      onChange={(e) =>
                        setProfileData({ ...profileData, bio: e.target.value })
                      }
                      disabled={!isEditing}
                      placeholder="Tell us about yourself..."
                      className="min-h-[80px]"
                    />
                  </div>
                </div>

                {isEditing && (
                  <div className="flex items-center gap-4 pt-6 border-t">
                    <Button type="submit">
                      <Save className="h-4 w-4 mr-2" />
                      Save Changes
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setIsEditing(false)}
                    >
                      Cancel
                    </Button>
                  </div>
                )}
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Security Tab */}
        <TabsContent value="security">
          <Card>
            <CardHeader>
              <CardTitle>Security Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Password Change */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Change Password</h3>
                <div className="space-y-2">
                  <Label>Current Password</Label>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      value={securityData.currentPassword}
                      onChange={(e) =>
                        setSecurityData({
                          ...securityData,
                          currentPassword: e.target.value,
                        })
                      }
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
                  <Label>New Password</Label>
                  <Input
                    type="password"
                    value={securityData.newPassword}
                    onChange={(e) =>
                      setSecurityData({
                        ...securityData,
                        newPassword: e.target.value,
                      })
                    }
                  />
                </div>
                <Button>Update Password</Button>
              </div>

              {/* Two-Factor Authentication */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">
                  Two-Factor Authentication
                </h3>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Enable 2FA</p>
                    <p className="text-sm text-gray-600">
                      Add an extra layer of security
                    </p>
                  </div>
                  <Switch
                    checked={securityData.twoFactorEnabled}
                    onCheckedChange={(checked) =>
                      setSecurityData({
                        ...securityData,
                        twoFactorEnabled: checked,
                      })
                    }
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Privacy Tab */}
        <TabsContent value="privacy">
          <Card>
            <CardHeader>
              <CardTitle>Privacy Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Profile Visibility - Masked for now */}
              {/* <div className="space-y-4">
                <h3 className="text-lg font-semibold">Profile Visibility</h3>
                <div className="space-y-2">
                  <Label>Who can see your profile?</Label>
                  <Select
                    value={privacyData.profileVisibility}
                    onValueChange={(value) =>
                      setPrivacyData({
                        ...privacyData,
                        profileVisibility: value,
                      })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="advocates">Advocates Only</SelectItem>
                      <SelectItem value="public">Public</SelectItem>
                      <SelectItem value="private">Private</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div> */}

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Notifications</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Email Notifications</p>
                      <p className="text-sm text-gray-500">
                        Receive updates about your cases and messages
                      </p>
                    </div>
                    <Switch
                      checked={privacyData.emailNotifications}
                      onCheckedChange={(checked) =>
                        setPrivacyData({
                          ...privacyData,
                          emailNotifications: checked,
                        })
                      }
                    />
                  </div>
                  {/* SMS Notifications - Masked for now */}
                  {/* <div className="flex items-center justify-between">
                    <span>SMS Notifications</span>
                    <Switch
                      checked={privacyData.smsNotifications}
                      onCheckedChange={(checked) =>
                        setPrivacyData({
                          ...privacyData,
                          smsNotifications: checked,
                        })
                      }
                    />
                  </div> */}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
