import Link from "next/link";

export function LegalTips() {
  const legalTips = [
    {
      id: "1",
      title: "Do you really need an advocate?",
      content:
        "Sometimes it's easy to know if you need an advocate. If you've been charged with a crime, been served with a lawsuit, or need a divorce - an advocate is exactly what you need. Advocates, however, aren't just for criminals or those in litigation. A skilled advocate's advice can help you understand the complex rules associated with business negotiations and partnerships, estate planning, adoption, will and trust drafting, tax strategies and much more. Advocates improve their clients' quality of life by protecting them from situations that might bring later plenty of emotional and financial hardship. We have enrolled a set of qualified advocates to help those in trouble and those who want to avoid trouble in the future. You can begin your search for legal help by presenting your case to AdvocateKhoj, wherein qualified advocates can review your situation and help you to resolve it. Finding an advocate at AdvocateKhoj is fast, free and confidential!",
    },
    {
      id: "2",
      title: "What to consider before you look for an advocate?",
    },
    {
      id: "3",
      title:
        "Ask yourself and others, if it is possible and prudent to solve your own problem?",
    },
    {
      id: "4",
      title: "Determine the immediacy of your situation.",
    },
    {
      id: "5",
      title: "Find an advocate that best suits your needs.",
    },
    {
      id: "6",
      title:
        "Do a careful background check on the advocate before hiring him/her.",
    },
    {
      id: "7",
      title: "Consider more than one advocate.",
    },
    {
      id: "8",
      title:
        "Ask yourself these 11 questions before agreeing to hire any advocate.",
    },
    {
      id: "9",
      title: "Things to remember while discussing fees.",
    },
    {
      id: "10",
      title: "Establish ground rules.",
    },
    {
      id: "11",
      title: "Develop a strategic plan.",
    },
    {
      id: "12",
      title: "Always evaluate your advocate.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-primary via-primary to-secondary text-white py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">Law Library</h1>
          <div className="flex items-center gap-2">
            <Link href="/law-library" className="hover:underline">
              Law Library
            </Link>
            <span>&gt;</span>
            <span>Legal Tips</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm border">
            <div className="p-6 border-b">
              <h2 className="text-xl font-bold text-gray-800">Legal Tips</h2>
            </div>

            <div className="p-8">
              <div className="space-y-4">
                {legalTips.map((tip, index) => (
                  <div key={tip.id} className="flex gap-4 py-2">
                    <span className="text-blue-600 font-medium w-8">
                      {index + 1}.
                    </span>
                    <Link
                      href={`/law-library/legal-tips/${tip.id}`}
                      className="text-blue-600 hover:text-blue-800 hover:underline flex-1 text-sm"
                    >
                      {tip.title}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
