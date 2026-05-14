"use client";

import { useMemo, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Search,
  MapPin,
  Calendar,
  User,
  MessageCircle,
  Eye,
  BookOpen,
} from "lucide-react";
import { INDIAN_STATES, getCitiesByState } from "@/lib/indian-locations";
import { PRACTICE_AREA_ENTRIES } from "@/lib/legal-data";

interface ClientCase {
  id: string;
  title: string;
  practiceCategory: string;
  practiceArea: string;
  description: string;
  state: string;
  city: string;
  datePosted: string;
  urgency: "low" | "medium" | "high";
  clientName: string;
  isAnonymous: boolean;
  responses: number;
  languages: string[];
  experienceRequired: string;
}

export function CaseBrowser() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPracticeCategory, setSelectedPracticeCategory] =
    useState("all");
  const [selectedPracticeArea, setSelectedPracticeArea] = useState("all");
  const [selectedState, setSelectedState] = useState("all");
  const [selectedCity, setSelectedCity] = useState("all");
  const [selectedUrgency, setSelectedUrgency] = useState("all");

  const practiceCategories = useMemo(
    () =>
      Array.from(
        new Set(PRACTICE_AREA_ENTRIES.map((entry) => entry.category))
      ).sort(),
    []
  );

  const practiceAreasForSelectedCategory = useMemo(() => {
    if (selectedPracticeCategory === "all") return [];
    return PRACTICE_AREA_ENTRIES.filter(
      (entry) => entry.category === selectedPracticeCategory
    ).map((entry) => entry.subCategory);
  }, [selectedPracticeCategory]);

  const citiesForSelectedState = useMemo(() => {
    if (selectedState === "all") return [];
    return getCitiesByState(selectedState);
  }, [selectedState]);

  // Mock data - replace with actual data from backend
  const cases: ClientCase[] = [
    {
      id: "1",
      title: "Property Boundary Dispute with Neighbor",
      practiceCategory: "Property Law",
      practiceArea: "Boundary Disputes",
      description:
        "I have a boundary dispute with my neighbor regarding a 2-foot strip of land. The neighbor has built a wall that encroaches on my property according to the survey documents I have. Need legal assistance to resolve this matter through proper legal channels.",
      state: "Maharashtra",
      city: "Mumbai",
      datePosted: "2 hours ago",
      urgency: "medium",
      clientName: "Rajesh S.",
      isAnonymous: false,
      responses: 3,
      languages: ["English", "Hindi"],
      experienceRequired: "5-10 years",
    },
    {
      id: "2",
      title: "Employment Contract Dispute",
      practiceCategory: "Employment Law",
      practiceArea: "Employment Contracts",
      description:
        "Facing issues with my employment contract terms and potential wrongful termination. The company is not following proper procedures and I need legal guidance on my rights and next steps.",
      state: "Karnataka",
      city: "Bengaluru",
      datePosted: "4 hours ago",
      urgency: "high",
      clientName: "Anonymous",
      isAnonymous: true,
      responses: 7,
      languages: ["English", "Kannada"],
      experienceRequired: "0-4 years",
    },
    {
      id: "3",
      title: "Divorce and Child Custody Case",
      practiceCategory: "Family Law",
      practiceArea: "Child Custody",
      description:
        "Seeking legal assistance for divorce proceedings and child custody arrangements. Looking for guidance on mutual consent divorce process and ensuring fair custody rights for both parents.",
      state: "Delhi",
      city: "New Delhi",
      datePosted: "1 day ago",
      urgency: "low",
      clientName: "Priya M.",
      isAnonymous: false,
      responses: 12,
      languages: ["English", "Hindi"],
      experienceRequired: "10+ years",
    },
  ];

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case "high":
        return "bg-red-100 text-red-800";
      case "medium":
        return "bg-yellow-100 text-yellow-800";
      case "low":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getUrgencyIcon = (urgency: string) => {
    switch (urgency) {
      case "high":
        return "🔴";
      case "medium":
        return "🟡";
      case "low":
        return "🟢";
      default:
        return "⚪";
    }
  };

  const filteredCases = cases.filter((caseItem) => {
    const matchesSearch =
      caseItem.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      caseItem.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedPracticeCategory === "all" ||
      caseItem.practiceCategory === selectedPracticeCategory;
    const matchesArea =
      selectedPracticeArea === "all" ||
      caseItem.practiceArea === selectedPracticeArea;
    const matchesState =
      selectedState === "all" || caseItem.state === selectedState;
    const matchesCity =
      selectedCity === "all" || caseItem.city === selectedCity;
    const matchesUrgency =
      selectedUrgency === "all" || caseItem.urgency === selectedUrgency;

    return (
      matchesSearch &&
      matchesCategory &&
      matchesArea &&
      matchesState &&
      matchesCity &&
      matchesUrgency
    );
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Available Cases</h2>
        <div className="flex items-center gap-2">
          <Badge variant="outline">
            {filteredCases.length} cases available
          </Badge>
        </div>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search cases by title or description..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
              <Select
                value={selectedPracticeCategory}
                onValueChange={(value) => {
                  setSelectedPracticeCategory(value);
                  setSelectedPracticeArea("all");
                }}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Practice category" />
                </SelectTrigger>
                <SelectContent className="max-h-[280px]">
                  <SelectItem value="all">All Categories</SelectItem>
                  {practiceCategories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select
                value={selectedPracticeArea}
                onValueChange={setSelectedPracticeArea}
                disabled={
                  selectedPracticeCategory === "all" ||
                  practiceAreasForSelectedCategory.length === 0
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Practice area" />
                </SelectTrigger>
                <SelectContent className="max-h-[280px]">
                  <SelectItem value="all">All Practice Areas</SelectItem>
                  {practiceAreasForSelectedCategory.map((area) => (
                    <SelectItem key={area} value={area}>
                      {area}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select
                value={selectedState}
                onValueChange={(value) => {
                  setSelectedState(value);
                  setSelectedCity("all");
                }}
              >
                <SelectTrigger>
                  <SelectValue placeholder="All States" />
                </SelectTrigger>
                <SelectContent className="max-h-[280px]">
                  <SelectItem value="all">All States</SelectItem>
                  {INDIAN_STATES.map((state) => (
                    <SelectItem key={state} value={state}>
                      {state}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select
                value={selectedCity}
                onValueChange={setSelectedCity}
                disabled={selectedState === "all"}
              >
                <SelectTrigger>
                  <SelectValue placeholder="All Cities" />
                </SelectTrigger>
                <SelectContent className="max-h-[280px]">
                  <SelectItem value="all">All Cities</SelectItem>
                  {citiesForSelectedState.map((city) => (
                    <SelectItem key={city} value={city}>
                      {city}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select
                value={selectedUrgency}
                onValueChange={setSelectedUrgency}
              >
                <SelectTrigger>
                  <SelectValue placeholder="All Urgencies" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Urgencies</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="low">Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Cases List */}
      <div className="space-y-4">
        {filteredCases.map((caseItem) => (
          <Card key={caseItem.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <CardTitle className="text-lg font-semibold mb-2">
                    {caseItem.title}
                  </CardTitle>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {caseItem.datePosted}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>
                        {caseItem.city}, {caseItem.state}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <BookOpen className="h-4 w-4" />
                      <span>
                        {caseItem.practiceCategory} • {caseItem.practiceArea}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {caseItem.responses} responses
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <Badge className={getUrgencyColor(caseItem.urgency)}>
                      {getUrgencyIcon(caseItem.urgency)} {caseItem.urgency} priority
                    </Badge>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-muted-foreground mb-4 line-clamp-3">
                {caseItem.description}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback>
                        {caseItem.isAnonymous
                          ? "A"
                          : caseItem.clientName.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">
                        {caseItem.clientName}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Prefers: {caseItem.languages.join(", ")} •{" "}
                        {caseItem.experienceRequired} exp.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4 mr-1" />
                    View Details
                  </Button>
                  <Button size="sm">
                    <MessageCircle className="h-4 w-4 mr-1" />
                    Respond
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredCases.length === 0 && (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12">
            <Search className="h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">No cases found</h3>
            <p className="text-muted-foreground text-center">
              Try adjusting your search criteria or check back later for new
              cases.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
