"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Flag, MapPin, Clock, DollarSign } from "lucide-react";
import { ReportAbuseDialog } from "@/components/moderation/report-abuse-dialog";

interface CaseCardProps {
  caseItem: {
    id: string | number;
    title: string;
    description: string;
    category: string;
    location: string;
    postedDate: string;
    budget?: string;
    urgency?: string;
    clientName?: string;
  };
  showReportButton?: boolean;
  onViewDetails?: (id: string | number) => void;
}

export function CaseCardWithReporting({
  caseItem,
  showReportButton = true,
  onViewDetails,
}: CaseCardProps) {
  const [reportDialogOpen, setReportDialogOpen] = useState(false);

  return (
    <>
      <Card className="transition-all duration-200 hover:translate-x-1 hover:opacity-90">
        <CardHeader>
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <CardTitle className="text-lg mb-2">{caseItem.title}</CardTitle>
              <Badge variant="secondary" className="mb-2">
                {caseItem.category}
              </Badge>
            </div>
            {showReportButton && (
              <Button
                variant="ghost"
                size="sm"
                className="text-red-500 transition-all duration-200 hover:opacity-80"
                onClick={() => setReportDialogOpen(true)}
              >
                <Flag className="w-4 h-4" />
              </Button>
            )}
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-gray-600 line-clamp-2">
            {caseItem.description}
          </p>

          <div className="flex flex-wrap gap-3 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>{caseItem.location}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{caseItem.postedDate}</span>
            </div>
            {caseItem.budget && (
              <div className="flex items-center gap-1">
                <DollarSign className="w-4 h-4" />
                <span>{caseItem.budget}</span>
              </div>
            )}
          </div>

          {caseItem.urgency && (
            <Badge
              variant="outline"
              className={
                caseItem.urgency === "high"
                  ? "border-red-300 text-red-700"
                  : caseItem.urgency === "medium"
                  ? "border-yellow-300 text-yellow-700"
                  : "border-green-300 text-green-700"
              }
            >
              {caseItem.urgency === "high"
                ? "Urgent"
                : caseItem.urgency === "medium"
                ? "Moderate"
                : "Not Urgent"}
            </Badge>
          )}

          <div className="flex gap-2 pt-2">
            <Button
              onClick={() => onViewDetails?.(caseItem.id)}
              className="flex-1"
            >
              View Details
            </Button>
            <Button variant="outline" className="flex-1">
              Express Interest
            </Button>
          </div>
        </CardContent>
      </Card>

      <ReportAbuseDialog
        open={reportDialogOpen}
        onOpenChange={setReportDialogOpen}
        contentType="case"
        contentId={caseItem.id}
        onSubmit={async (report) => {
          console.log("Case report submitted:", report);
          // Handle successful report
        }}
      />
    </>
  );
}
