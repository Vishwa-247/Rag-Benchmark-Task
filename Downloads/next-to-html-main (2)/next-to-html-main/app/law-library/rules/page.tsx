import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Rules } from "@/components/law-library/rules";

export default function RulesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Rules />
      <Footer />
    </div>
  );
}
