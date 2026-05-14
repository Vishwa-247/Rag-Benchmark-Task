import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import LawCommissionReports from "@/components/law-library/law-commission-reports";

export default function LawCommissionReportsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <LawCommissionReports />
      <Footer />
    </div>
  );
}
