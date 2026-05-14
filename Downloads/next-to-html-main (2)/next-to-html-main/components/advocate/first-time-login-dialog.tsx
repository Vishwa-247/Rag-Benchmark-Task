"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
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
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Lock, AlertCircle, CheckCircle } from "lucide-react";

interface FirstTimeLoginDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const recoveryQuestions = [
  "What is your mother's maiden name?",
  "What was the name of your first pet?",
  "What city were you born in?",
  "What is your favorite book?",
  "What was your childhood nickname?",
  "What is the name of your elementary school?",
  "What is your favorite food?",
  "What was the make of your first car?",
];

export function FirstTimeLoginDialog({
  isOpen,
  onClose,
}: FirstTimeLoginDialogProps) {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [recoveryQuestion, setRecoveryQuestion] = useState("");
  const [recoveryAnswer, setRecoveryAnswer] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState({
    score: 0,
    message: "",
    color: "gray",
  });

  const calculatePasswordStrength = (password: string) => {
    let score = 0;
    let message = "";
    let color = "gray";

    if (password.length >= 8) score++;
    if (password.length >= 12) score++;
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) score++;
    if (/\d/.test(password)) score++;
    if (/[^a-zA-Z0-9]/.test(password)) score++;

    if (score <= 1) {
      message = "Weak";
      color = "red";
    } else if (score <= 3) {
      message = "Medium";
      color = "orange";
    } else {
      message = "Strong";
      color = "green";
    }

    return { score, message, color };
  };

  const handlePasswordChange = (password: string) => {
    setNewPassword(password);
    setPasswordStrength(calculatePasswordStrength(password));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Validation
    if (
      !currentPassword ||
      !newPassword ||
      !confirmPassword ||
      !recoveryQuestion ||
      !recoveryAnswer
    ) {
      setError("All fields are required");
      return;
    }

    if (newPassword.length < 8) {
      setError("New password must be at least 8 characters long");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("New passwords do not match");
      return;
    }

    if (currentPassword === newPassword) {
      setError("New password must be different from current password");
      return;
    }

    if (passwordStrength.score < 2) {
      setError("Please choose a stronger password");
      return;
    }

    setIsLoading(true);

    try {
      // TODO: Replace with actual API call
      // const response = await fetch("/api/advocate/reset-password", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({
      //     currentPassword,
      //     newPassword,
      //     recoveryQuestion,
      //     recoveryAnswer,
      //   }),
      // });

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Mock success
      // if (response.ok) {
      localStorage.setItem("advocate_first_login", "false");
      localStorage.setItem("advocate_password_changed", "true");
      onClose();
      // Show success message
      alert(
        "Password reset successful! You can now use your new password to log in."
      );
      // }
    } catch (err) {
      setError("Failed to reset password. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent
        className="sm:max-w-[500px]"
        onInteractOutside={(e) => e.preventDefault()}
      >
        <DialogHeader>
          <div className="flex items-center gap-2">
            <Lock className="h-6 w-6 text-primary" />
            <DialogTitle>First Time Login - Password Reset</DialogTitle>
          </div>
          <DialogDescription>
            For security reasons, please change your temporary password and set
            up a recovery question.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <div className="space-y-2">
            <Label htmlFor="currentPassword">Current Password *</Label>
            <Input
              id="currentPassword"
              type="password"
              placeholder="Enter temporary password from admin"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="newPassword">New Password *</Label>
            <Input
              id="newPassword"
              type="password"
              placeholder="At least 8 characters"
              value={newPassword}
              onChange={(e) => handlePasswordChange(e.target.value)}
              required
            />
            {newPassword && (
              <div className="flex items-center gap-2 text-sm">
                <div
                  className={`h-2 flex-1 rounded-full bg-${passwordStrength.color}-200`}
                >
                  <div
                    className={`h-full rounded-full bg-${passwordStrength.color}-500 transition-all`}
                    style={{ width: `${(passwordStrength.score / 5) * 100}%` }}
                  />
                </div>
                <span
                  className={`text-${passwordStrength.color}-600 font-medium`}
                >
                  {passwordStrength.message}
                </span>
              </div>
            )}
            <p className="text-xs text-muted-foreground">
              Use a mix of uppercase, lowercase, numbers, and special characters
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirm New Password *</Label>
            <Input
              id="confirmPassword"
              type="password"
              placeholder="Re-enter new password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            {confirmPassword && (
              <div className="flex items-center gap-1 text-sm">
                {newPassword === confirmPassword ? (
                  <>
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-green-600">Passwords match</span>
                  </>
                ) : (
                  <>
                    <AlertCircle className="h-4 w-4 text-red-600" />
                    <span className="text-red-600">Passwords do not match</span>
                  </>
                )}
              </div>
            )}
          </div>

          <div className="border-t pt-4 space-y-4">
            <h4 className="font-semibold text-sm">Password Recovery Setup</h4>

            <div className="space-y-2">
              <Label htmlFor="recoveryQuestion">Security Question *</Label>
              <Select
                value={recoveryQuestion}
                onValueChange={setRecoveryQuestion}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Choose a security question" />
                </SelectTrigger>
                <SelectContent>
                  {recoveryQuestions.map((question, index) => (
                    <SelectItem key={index} value={question}>
                      {question}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="recoveryAnswer">Your Answer *</Label>
              <Input
                id="recoveryAnswer"
                type="text"
                placeholder="Enter your answer"
                value={recoveryAnswer}
                onChange={(e) => setRecoveryAnswer(e.target.value)}
                required
              />
              <p className="text-xs text-muted-foreground">
                Remember this answer - you'll need it to recover your account
              </p>
            </div>
          </div>

          <DialogFooter>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading
                ? "Resetting Password..."
                : "Reset Password & Continue"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
