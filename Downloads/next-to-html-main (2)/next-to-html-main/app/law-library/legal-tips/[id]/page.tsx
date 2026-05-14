import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Link from "next/link";

interface LegalTipDetailPageProps {
  params: {
    id: string;
  };
}

export default function LegalTipDetailPage({
  params,
}: LegalTipDetailPageProps) {
  // Legal tips content data
  const legalTipsContent: {
    [key: string]: { title: string; content: string };
  } = {
    "1": {
      title: "Do you really need an advocate?",
      content: `Sometimes it's easy to know if you need an advocate. If you've been charged with a crime, been served with a lawsuit, or need a divorce - an advocate is exactly what you need. Advocates, however, aren't just for criminals or those in litigation.

A skilled advocate's advice can help you understand the complex rules associated with business negotiations and partnerships, estate planning, adoption, will and trust drafting, tax strategies and much more.

Advocates improve their clients' quality of life by protecting them from situations that might bring later plenty of emotional and financial hardship. We have enrolled a set of qualified advocates to help those in trouble and those who want to avoid trouble in the future. You can begin your search for legal help by presenting your case to AdvocateKhoj, wherein qualified advocates can review your situation and help you to resolve it. Finding an advocate at AdvocateKhoj is fast, free and confidential!`,
    },
    "2": {
      title: "What to consider before you look for an advocate?",
      content:
        "Before seeking legal representation, it's important to understand your specific needs and what type of legal expertise will best serve your situation. Consider the complexity of your case, the potential consequences, and your budget for legal services.",
    },
    "3": {
      title:
        "Ask yourself and others, if it is possible and prudent to solve your own problem?",
      content:
        "Not every legal issue requires professional representation. Learn when you can handle matters yourself and when it's essential to seek legal counsel. Simple matters like small claims or basic contracts might be manageable, while complex litigation requires professional help.",
    },
    "4": {
      title: "Determine the immediacy of your situation.",
      content:
        "Some legal matters have strict deadlines and require immediate attention. Understanding the urgency of your situation helps determine how quickly you need to secure legal representation and what type of advocate would be most appropriate.",
    },
    "5": {
      title: "Find an advocate that best suits your needs.",
      content:
        "Different advocates specialize in different areas of law. Research potential advocates' experience, specializations, and track record in cases similar to yours to find the best match for your specific legal needs.",
    },
    "6": {
      title:
        "Do a careful background check on the advocate before hiring him/her.",
      content:
        "Verify the advocate's credentials, bar association membership, disciplinary record, and client testimonials. A thorough background check helps ensure you're hiring a qualified and reputable professional.",
    },
    "7": {
      title: "Consider more than one advocate.",
      content:
        "Don't settle on the first advocate you meet. Interview multiple candidates to compare their experience, approach, fees, and communication style. This helps you make an informed decision about who will best represent your interests.",
    },
    "8": {
      title:
        "Ask yourself these 11 questions before agreeing to hire any advocate.",
      content:
        "Before making your final decision, ask important questions about fees, experience, strategy, timeline, and communication expectations. This ensures clarity and prevents misunderstandings later in the attorney-client relationship.",
    },
    "9": {
      title: "Things to remember while discussing fees.",
      content:
        "Be clear about fee structures, billing methods, additional costs, and payment schedules. Understand whether the advocate charges hourly rates, flat fees, or contingency fees, and get all fee arrangements in writing.",
    },
    "10": {
      title: "Establish ground rules.",
      content:
        "Set clear expectations about communication frequency, decision-making processes, and boundaries of the attorney-client relationship. This helps ensure smooth collaboration throughout your case.",
    },
    "11": {
      title: "Develop a strategic plan.",
      content:
        "Work with your advocate to develop a clear strategy for your case, including objectives, timeline, and potential outcomes. A well-defined plan helps keep your case on track and aligned with your goals.",
    },
    "12": {
      title: "Always evaluate your advocate.",
      content:
        "Regularly assess your advocate's performance, communication, and progress on your case. If you're not satisfied with the representation, don't hesitate to discuss concerns or consider finding new counsel if necessary.",
    },
  };

  const currentTip = legalTipsContent[params.id];

  if (!currentTip) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto p-6">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Legal Tip Not Found</h1>
            <Link
              href="/law-library/legal-tips"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              ← Back to Legal Tips
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Header Section */}
      <div className="bg-gradient-to-r from-primary via-primary to-secondary text-white py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">Law Library</h1>
          <div className="flex items-center gap-2">
            <Link href="/law-library" className="hover:underline">
              Law Library
            </Link>
            <span>&gt;</span>
            <Link href="/law-library/legal-tips" className="hover:underline">
              Legal Tips
            </Link>
            <span>&gt;</span>
            <span>{currentTip.title}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm border">
            <div className="p-6 border-b">
              <h2 className="text-xl font-bold text-gray-800">
                {params.id}. {currentTip.title}
              </h2>
            </div>

            <div className="p-8">
              <div className="prose max-w-none">
                {currentTip.content.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Navigation */}
              <div className="mt-8 pt-4 border-t">
                <Link
                  href="/law-library/legal-tips"
                  className="text-blue-600 hover:text-blue-800 underline inline-flex items-center gap-1"
                >
                  ← Back to Legal Tips
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
