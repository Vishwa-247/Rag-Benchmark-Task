import Link from "next/link";

export function AreasOfLaw() {
  const legalCategories = [
    {
      id: "1",
      title: "Adoption",
      subcategories: ["Adoption in Hindus", "Adoption in other religions"]
    },
    {
      id: "2",
      title: "Appeals",
      subcategories: ["Introduction to Appeals", "Supreme Court Appeals", "High Court Appeals"]
    },
    {
      id: "3",
      title: "Banking & Insurance",
      subcategories: ["Insurance", "Securitisation Act 2002"]
    },
    {
      id: "4",
      title: "Business & Commercial Law",
      subcategories: ["Contract", "Dishonor of Cheque", "Partnership", "Shares", "FEMA", "Carriage of Goods", "Sale of Goods"]
    },
    {
      id: "5",
      title: "Civil Procedure Code",
      subcategories: ["Introduction", "Suits", "Jurisdiction", "Appeals", "Execution"]
    },
    {
      id: "6",
      title: "Constitutional Law",
      subcategories: ["Fundamental Rights", "Directive Principles", "Parliament", "Judiciary"]
    },
    {
      id: "7",
      title: "Consumer Protection Act",
      subcategories: ["Consumer Rights", "Consumer Forums", "Redressal Mechanism"]
    },
    {
      id: "8",
      title: "Contracts",
      subcategories: ["Formation", "Performance", "Breach", "Remedies"]
    },
    {
      id: "9",
      title: "Criminal Law",
      subcategories: ["Indian Penal Code", "Criminal Procedure Code", "Evidence Act"]
    },
    {
      id: "10",
      title: "Cyber Law",
      subcategories: ["IT Act 2000", "Cyber Crimes", "Digital Signatures"]
    },
    {
      id: "11",
      title: "Environmental Law",
      subcategories: ["Pollution Control", "Environmental Impact", "Wildlife Protection"]
    },
    {
      id: "12",
      title: "Family Law",
      subcategories: ["Marriage", "Divorce", "Custody", "Maintenance"]
    },
    {
      id: "13",
      title: "Human Rights",
      subcategories: ["International Human Rights", "National Human Rights Commission"]
    },
    {
      id: "14",
      title: "Intellectual Property",
      subcategories: ["Patents", "Trademarks", "Copyrights", "Designs"]
    },
    {
      id: "15",
      title: "Labour Law",
      subcategories: ["Industrial Relations", "Workers' Rights", "Social Security"]
    },
    {
      id: "16",
      title: "Property Law",
      subcategories: ["Real Property", "Transfer of Property", "Registration"]
    },
    {
      id: "17",
      title: "Tax Law",
      subcategories: ["Income Tax", "GST", "Customs", "Excise"]
    },
    {
      id: "18",
      title: "Tort Law",
      subcategories: ["Negligence", "Defamation", "Nuisance", "Strict Liability"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">Law Library</h1>
          <div className="flex items-center gap-2">
            <Link href="/law-library" className="hover:underline">
              Law Library
            </Link>
            <span>&gt;</span>
            <span>Areas of Law</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm border">
            <div className="p-6 border-b">
              <h2 className="text-xl font-bold text-gray-800">Areas of Law</h2>
            </div>
            
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {legalCategories.map((category, index) => (
                  <div key={category.id} className="border-b border-gray-200 pb-6">
                    <div className="flex gap-4 mb-3">
                      <span className="text-blue-600 font-medium w-8">{index + 1}.</span>
                      <h3 className="text-blue-600 font-semibold text-lg">
                        {category.title}
                      </h3>
                    </div>
                    <div className="ml-12">
                      <ul className="space-y-2">
                        {category.subcategories.map((sub, subIndex) => (
                          <li key={subIndex} className="flex items-start gap-2">
                            <span className="text-gray-500 text-sm mt-1">
                              {String.fromCharCode(97 + subIndex)}.
                            </span>
                            <Link
                              href={`/law-library/areas-of-law/${category.id}/${subIndex + 1}`}
                              className="text-blue-600 hover:text-blue-800 hover:underline text-sm"
                            >
                              {sub}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
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
