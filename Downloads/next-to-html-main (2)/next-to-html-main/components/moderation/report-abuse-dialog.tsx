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
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { submitAbuseReport } from "@/lib/moderation-api";

interface ReportData {
  contentId: string | number;
  contentType: string;
  reason: string;
  details?: string;
  anonymous?: boolean;
}

interface ReportAbuseDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  contentType: "question" | "answer" | "case" | "comment" | "blog";
  contentId: string | number;
  onSubmit?: (report: ReportData) => Promise<void>;
}

export function ReportAbuseDialog({
  open,
  onOpenChange,
  contentType,
  contentId,
  onSubmit,
}: ReportAbuseDialogProps) {
  const [reason, setReason] = useState("");
  const [details, setDetails] = useState("");
  const [anonymous, setAnonymous] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const reasonOptions = [
    { value: "spam", label: "Spam or misleading" },
    { value: "offensive", label: "Offensive or harassment" },
    { value: "misinformation", label: "Misinformation" },
    { value: "other", label: "Other" },
  ];

  const handleSubmit = async () => {
    if (!reason) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    const reportData: ReportData = {
      contentId,
      contentType,
      reason,
      details,
      anonymous,
    };

    try {
      if (onSubmit) {
        await onSubmit(reportData);
      } else {
        await submitAbuseReport({
          contentId,
          contentType: contentType as
            | "question"
            | "answer"
            | "case"
            | "comment",
          reason,
          details,
          reportedBy: anonymous ? undefined : "current-user-id", // Replace with actual user ID
        });
      }

      setSubmitStatus("success");

      // Reset form and close dialog after 1.5 seconds
      setTimeout(() => {
        setReason("");
        setDetails("");
        setAnonymous(false);
        setSubmitStatus("idle");
        onOpenChange(false);
      }, 1500);
    } catch (error) {
      console.error("Error submitting report:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Report Content</DialogTitle>
          <DialogDescription>
            Help us maintain a safe and respectful community. Your report will
            be reviewed by our moderation team.
          </DialogDescription>
        </DialogHeader>

        {submitStatus === "success" ? (
          <div className="py-8 text-center">
            <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
              <svg
                className="h-6 w-6 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Report Submitted
            </h3>
            <p className="text-sm text-gray-500">
              Thank you for helping us maintain our community standards.
            </p>
          </div>
        ) : (
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="reason">Reason for reporting *</Label>
              <Select value={reason} onValueChange={setReason}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a reason" />
                </SelectTrigger>
                <SelectContent>
                  {reasonOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="details">Additional details (optional)</Label>
              <Textarea
                id="details"
                placeholder="Provide any additional context that might help our moderation team..."
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                rows={4}
              />
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="anonymous"
                checked={anonymous}
                onCheckedChange={(checked) => setAnonymous(checked as boolean)}
              />
              <Label
                htmlFor="anonymous"
                className="text-sm font-normal cursor-pointer"
              >
                Submit anonymously
              </Label>
            </div>

            {submitStatus === "error" && (
              <div className="rounded-md bg-red-50 p-3">
                <p className="text-sm text-red-800">
                  Failed to submit report. Please try again.
                </p>
              </div>
            )}
          </div>
        )}

        {submitStatus !== "success" && (
          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button
              type="button"
              onClick={handleSubmit}
              disabled={!reason || isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Report"}
            </Button>
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  );
}
