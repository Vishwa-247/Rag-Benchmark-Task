"use client";

import { useState } from "react";
import { DashboardLayout } from "@/components/client/dashboard-layout";
import { DashboardOverview } from "@/components/client/dashboard-overview";
import { EnhancedProfileModule } from "@/components/client/enhanced-profile-module";
import { EnhancedCasesModule } from "@/components/client/enhanced-cases-module";
import { EnhancedMessagesModule } from "@/components/client/enhanced-messages-module";
import { AdvertisementsModule } from "@/components/client/advertisements-module";
import { StudentResourcesModule } from "@/components/client/student-resources-module";

export default function ClientDashboard() {
  const [activeSection, setActiveSection] = useState("overview");

  const renderSection = () => {
    switch (activeSection) {
      case "overview":
        return <DashboardOverview onNavigate={setActiveSection} />;
      case "profile":
        return <EnhancedProfileModule onNavigate={setActiveSection} />;
      case "cases":
        return <EnhancedCasesModule onNavigate={setActiveSection} />;
      case "messages":
        return <EnhancedMessagesModule onNavigate={setActiveSection} />;
      case "advertising":
        return <AdvertisementsModule onNavigate={setActiveSection} />;
      case "education":
        return <StudentResourcesModule onNavigate={setActiveSection} />;
      default:
        return <DashboardOverview onNavigate={setActiveSection} />;
    }
  };

  return (
    <DashboardLayout
      activeSection={activeSection}
      onSectionChange={setActiveSection}
      userInfo={{
        name: "John Doe",
        email: "john.doe@example.com",
        membershipType: "Premium",
      }}
    >
      {renderSection()}
    </DashboardLayout>
  );
}
