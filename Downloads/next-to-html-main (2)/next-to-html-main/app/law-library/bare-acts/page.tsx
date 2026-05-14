import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { BareActs } from "@/components/law-library/bare-acts";

export default function BareActsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <BareActs />
      <Footer />
    </div>
  );
}
