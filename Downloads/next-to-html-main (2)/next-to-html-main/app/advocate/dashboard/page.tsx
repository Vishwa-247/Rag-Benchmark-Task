"use client";

import { useState, useEffect } from "react";
import { AdvocateDashboardLayout } from "@/components/advocate/dashboard-layout";
import { AdvocateDashboardOverview } from "@/components/advocate/dashboard-overview";
import { ProfileManagement } from "@/components/advocate/profile-management";
import { CaseBrowser } from "@/components/advocate/case-browser";
import { MembershipPayment } from "@/components/advocate/membership-payment";
import { FirstTimeLoginDialog } from "@/components/advocate/first-time-login-dialog";
import { AdvocateMessagesModule } from "@/components/advocate/messages-module";
import { BlogManagement } from "@/components/advocate/blog-management";

export default function AdvocateDashboard() {
  const [activeSection, setActiveSection] = useState("overview");
  const [showPasswordReset, setShowPasswordReset] = useState(false);

  useEffect(() => {
    // Check if this is the first time login
    const isFirstLogin = localStorage.getItem("advocate_first_login");
    const passwordChanged = localStorage.getItem("advocate_password_changed");

    // Show dialog if first login flag is set to "true" OR if it doesn't exist (new user)
    // and password hasn't been changed yet
    if (
      (isFirstLogin === "true" || isFirstLogin === null) &&
      passwordChanged !== "true"
    ) {
      setShowPasswordReset(true);
    }
  }, []);

  const renderSection = () => {
    switch (activeSection) {
      case "overview":
        return <AdvocateDashboardOverview onNavigate={setActiveSection} />;
      case "profile":
        return <ProfileManagement onNavigate={setActiveSection} />;
      case "cases":
        return <CaseBrowser />;
      case "messages":
        return <AdvocateMessagesModule onNavigate={setActiveSection} />;
      case "blogs":
        return <BlogManagement onNavigate={setActiveSection} />;
      case "membership":
        return <MembershipPayment />;
      default:
        return <AdvocateDashboardOverview onNavigate={setActiveSection} />;
    }
  };

  return (
    <>
      <FirstTimeLoginDialog
        isOpen={showPasswordReset}
        onClose={() => setShowPasswordReset(false)}
      />
      <AdvocateDashboardLayout
        activeSection={activeSection}
        onSectionChange={setActiveSection}
        userInfo={{
          name: "Adv. Rajesh Kumar",
          email: "rajesh.kumar@example.com",
          membershipType: "Premium",
          advocateId: "A393472",
          status: "Live",
        }}
      >
        {renderSection()}
      </AdvocateDashboardLayout>
    </>
  );
}
