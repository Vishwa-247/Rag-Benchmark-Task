import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { SCJudgements } from "@/components/law-library/sc-judgements";

export default function JudgementsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <SCJudgements />
      <Footer />
    </div>
  );
}
