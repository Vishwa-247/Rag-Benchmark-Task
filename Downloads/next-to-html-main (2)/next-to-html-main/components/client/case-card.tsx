import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, User, MessageCircle, Eye } from "lucide-react";

interface CaseCardProps {
  case: {
    id: string;
    title: string;
    category: string;
    status: "active" | "pending" | "closed";
    location: string;
    datePosted: string;
    description: string;
    responses: number;
  };
}

export function CaseCard({ case: caseData }: CaseCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "closed":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg font-semibold line-clamp-2">
            {caseData.title}
          </CardTitle>
          <Badge className={getStatusColor(caseData.status)}>
            {caseData.status}
          </Badge>
        </div>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            {caseData.datePosted}
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="h-4 w-4" />
            {caseData.location}
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="mb-4">
          <Badge variant="outline" className="mb-2">
            {caseData.category}
          </Badge>
          <p className="text-sm text-muted-foreground line-clamp-3">
            {caseData.description}
          </p>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <User className="h-4 w-4" />
            {caseData.responses} responses
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Eye className="h-4 w-4 mr-1" />
              View
            </Button>
            <Button variant="outline" size="sm">
              <MessageCircle className="h-4 w-4 mr-1" />
              Messages
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
