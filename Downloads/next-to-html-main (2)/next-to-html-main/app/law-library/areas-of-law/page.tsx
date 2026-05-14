import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { AreasOfLaw } from "@/components/law-library/areas-of-law-new";

export default function AreasOfLawPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <AreasOfLaw />
      <Footer />
    </div>
  );
}
