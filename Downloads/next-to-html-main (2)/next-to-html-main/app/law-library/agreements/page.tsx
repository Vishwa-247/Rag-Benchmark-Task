import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Agreements } from "@/components/law-library/agreements";

export default function AgreementsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <Agreements />
      <Footer />
    </div>
  );
}
