import Link from "next/link";

export function AreasOfLaw() {
  const legalCategories = [
    {
      id: "1",
      title: "Adoption",
      subcategories: [
        {
          id: "i",
          title: "Adoption in Hindus",
          link: "/law-library/areas-of-law/adoption/adoption-hindus",
        },
        {
          id: "ii",
          title: "Adoption in other religions",
          link: "/law-library/areas-of-law/adoption/adoption-other",
        },
      ],
    },
    {
      id: "2",
      title: "Appeals",
      subcategories: [
        {
          id: "i",
          title: "Introduction to Appeals",
          link: "/law-library/areas-of-law/appeals/introduction",
        },
        {
          id: "ii",
          title: "Supreme Court Appeals",
          link: "/law-library/areas-of-law/appeals/supreme-court",
        },
        {
          id: "iii",
          title: "High Court Appeals",
          link: "/law-library/areas-of-law/appeals/high-court",
        },
      ],
    },
    {
      id: "3",
      title: "Banking & Insurance",
      subcategories: [
        {
          id: "i",
          title: "Insurance",
          link: "/law-library/areas-of-law/banking/insurance",
        },
        {
          id: "ii",
          title: "Securitisation Act 2002",
          link: "/law-library/areas-of-law/banking/securitisation",
        },
      ],
    },
    {
      id: "4",
      title: "Business & Commercial Law",
      subcategories: [
        {
          id: "i",
          title: "Contract",
          link: "/law-library/areas-of-law/business/contract",
        },
        {
          id: "ii",
          title: "Dishonor of Cheque",
          link: "/law-library/areas-of-law/business/cheque-dishonor",
        },
        {
          id: "iii",
          title: "Partnership",
          link: "/law-library/areas-of-law/business/partnership",
        },
        {
          id: "iv",
          title: "Shares",
          link: "/law-library/areas-of-law/business/shares",
        },
        {
          id: "v",
          title: "Foreign Exchange Management Act (FEMA)",
          link: "/law-library/areas-of-law/business/fema",
        },
        {
          id: "vi",
          title: "Carriage of Goods",
          link: "/law-library/areas-of-law/business/carriage-goods",
        },
        {
          id: "vii",
          title: "Sale of Goods",
          link: "/law-library/areas-of-law/business/sale-goods",
        },
      ],
    },
    {
      id: "5",
      title: "Constitution & Law Procedure",
      subcategories: [
        {
          id: "i",
          title: "Suits",
          link: "/law-library/areas-of-law/constitution/suits",
        },
        {
          id: "ii",
          title: "Suit Procedure",
          link: "/law-library/areas-of-law/constitution/suit-procedure",
        },
        {
          id: "iii",
          title: "Civil Procedure Code Relief",
          link: "/law-library/areas-of-law/constitution/cpc-relief",
        },
        {
          id: "iv",
          title: "Civil Procedure Code Jurisdiction",
          link: "/law-library/areas-of-law/constitution/cpc-jurisdiction",
        },
        {
          id: "v",
          title: "Public Interest Litigation",
          link: "/law-library/areas-of-law/constitution/pil",
        },
      ],
    },
    {
      id: "6",
      title: "Consumer Rights",
      subcategories: [
        {
          id: "i",
          title: "Food Adulteration",
          link: "/law-library/areas-of-law/consumer/food-adulteration",
        },
        {
          id: "ii",
          title: "Monopolies and Restrictive Trade Practice (MRTP)",
          link: "/law-library/areas-of-law/consumer/mrtp",
        },
        {
          id: "iii",
          title: "Consumer Protection Act",
          link: "/law-library/areas-of-law/consumer/protection-act",
        },
        {
          id: "iv",
          title: "Medical Negligence",
          link: "/law-library/areas-of-law/consumer/medical-negligence",
        },
        {
          id: "v",
          title: "Standard Weight and Measures",
          link: "/law-library/areas-of-law/consumer/weight-measures",
        },
      ],
    },
    {
      id: "7",
      title: "Corporate Law",
      subcategories: [
        {
          id: "i",
          title: "Arbitration",
          link: "/law-library/areas-of-law/corporate/arbitration",
        },
        {
          id: "ii",
          title: "Society Act",
          link: "/law-library/areas-of-law/corporate/society-act",
        },
        {
          id: "iii",
          title: "Incorporation of a Private Company",
          link: "/law-library/areas-of-law/corporate/private-company",
        },
        {
          id: "iv",
          title: "Winding up of Company",
          link: "/law-library/areas-of-law/corporate/winding-up",
        },
        {
          id: "v",
          title: "Litigation against Company",
          link: "/law-library/areas-of-law/corporate/litigation",
        },
        {
          id: "vi",
          title: "Trust and Society",
          link: "/law-library/areas-of-law/corporate/trust-society",
        },
      ],
    },
    {
      id: "8",
      title: "Criminal Law",
      subcategories: [
        {
          id: "i",
          title: "Anticipatory Bail",
          link: "/law-library/areas-of-law/criminal/anticipatory-bail",
        },
        {
          id: "ii",
          title: "Arrest and Warrants",
          link: "/law-library/areas-of-law/criminal/arrest-warrants",
        },
        {
          id: "iii",
          title: "Bail and Anticipatory Bail",
          link: "/law-library/areas-of-law/criminal/bail",
        },
        {
          id: "iv",
          title: "Summons",
          link: "/law-library/areas-of-law/criminal/summons",
        },
        {
          id: "v",
          title: "FIR",
          link: "/law-library/areas-of-law/criminal/fir",
        },
        {
          id: "vi",
          title: "Investigation",
          link: "/law-library/areas-of-law/criminal/investigation",
        },
        {
          id: "vii",
          title: "Adultery",
          link: "/law-library/areas-of-law/criminal/adultery",
        },
        {
          id: "viii",
          title: "Adulteration of Drugs",
          link: "/law-library/areas-of-law/criminal/drug-adulteration",
        },
        {
          id: "ix",
          title: "Adulteration of food or drink intended for sale",
          link: "/law-library/areas-of-law/criminal/food-adulteration",
        },
        {
          id: "x",
          title: "Causing death by negligence",
          link: "/law-library/areas-of-law/criminal/death-negligence",
        },
        {
          id: "xi",
          title: "Cheating and dishonestly inducing delivery of property",
          link: "/law-library/areas-of-law/criminal/cheating",
        },
        {
          id: "xii",
          title: "Concealment of formal marriage",
          link: "/law-library/areas-of-law/criminal/marriage-concealment",
        },
        {
          id: "xiii",
          title: "Criminal Misappropriation of property",
          link: "/law-library/areas-of-law/criminal/misappropriation",
        },
        {
          id: "xiv",
          title: "Defamation",
          link: "/law-library/areas-of-law/criminal/defamation",
        },
      ],
    },
    {
      id: "9",
      title: "Cyber Crime",
      subcategories: [
        {
          id: "i",
          title: "Cyber Crime Laws",
          link: "/law-library/areas-of-law/cyber/cyber-laws",
        },
        {
          id: "ii",
          title: "Information Technology Act",
          link: "/law-library/areas-of-law/cyber/it-act",
        },
      ],
    },
    {
      id: "10",
      title: "Environmental Law",
      subcategories: [
        {
          id: "i",
          title: "Air Pollution",
          link: "/law-library/areas-of-law/environmental/air-pollution",
        },
        {
          id: "ii",
          title: "Wild Life Protection",
          link: "/law-library/areas-of-law/environmental/wildlife",
        },
        {
          id: "iii",
          title: "Environment Protection",
          link: "/law-library/areas-of-law/environmental/protection",
        },
      ],
    },
    {
      id: "11",
      title: "Government Policies",
      subcategories: [
        {
          id: "i",
          title: "Foreign Trade Policy 2009",
          link: "/law-library/areas-of-law/government/trade-policy",
        },
        {
          id: "ii",
          title: "Dual Citizenship",
          link: "/law-library/areas-of-law/government/dual-citizenship",
        },
      ],
    },
    {
      id: "12",
      title: "Inheritance",
      subcategories: [
        {
          id: "i",
          title: "Hindu Succession Act",
          link: "/law-library/areas-of-law/inheritance/hindu-succession",
        },
        {
          id: "ii",
          title: "Inheritance and I.S.A",
          link: "/law-library/areas-of-law/inheritance/isa",
        },
        {
          id: "iii",
          title: "Inheritance in Muslims",
          link: "/law-library/areas-of-law/inheritance/muslim",
        },
        {
          id: "iv",
          title: "Wills in Muslims",
          link: "/law-library/areas-of-law/inheritance/muslim-wills",
        },
        {
          id: "v",
          title: "Wills under Indian Succession Act",
          link: "/law-library/areas-of-law/inheritance/indian-succession",
        },
        {
          id: "vi",
          title: "Probate of Wills",
          link: "/law-library/areas-of-law/inheritance/probate",
        },
      ],
    },
    {
      id: "13",
      title: "Intellectual Property",
      subcategories: [
        {
          id: "i",
          title: "Intellectual Property Rights",
          link: "/law-library/areas-of-law/ip/rights",
        },
        {
          id: "ii",
          title: "Copyright Laws in India",
          link: "/law-library/areas-of-law/ip/copyright",
        },
        {
          id: "iii",
          title: "Patent Laws in India",
          link: "/law-library/areas-of-law/ip/patent",
        },
        {
          id: "iv",
          title: "Trademark Laws in India",
          link: "/law-library/areas-of-law/ip/trademark",
        },
        {
          id: "v",
          title: "Information Technology Act",
          link: "/law-library/areas-of-law/ip/it-act",
        },
        {
          id: "vi",
          title: "Service Marks",
          link: "/law-library/areas-of-law/ip/service-marks",
        },
      ],
    },
    {
      id: "14",
      title: "Labor Law",
      subcategories: [
        {
          id: "i",
          title: "Child Labor Laws",
          link: "/law-library/areas-of-law/labor/child-labor",
        },
        {
          id: "ii",
          title: "Employees State Insurance Act",
          link: "/law-library/areas-of-law/labor/esi",
        },
        {
          id: "iii",
          title: "Workmen's Compensation",
          link: "/law-library/areas-of-law/labor/compensation",
        },
        {
          id: "iv",
          title: "Provident Fund",
          link: "/law-library/areas-of-law/labor/pf",
        },
        {
          id: "v",
          title: "Maternity Benefits",
          link: "/law-library/areas-of-law/labor/maternity",
        },
        {
          id: "vi",
          title: "Payment of Bonus",
          link: "/law-library/areas-of-law/labor/bonus",
        },
        {
          id: "vii",
          title: "Sexual harassment at workplace",
          link: "/law-library/areas-of-law/labor/sexual-harassment",
        },
        {
          id: "viii",
          title: "Trade Unions",
          link: "/law-library/areas-of-law/labor/trade-unions",
        },
      ],
    },
    {
      id: "15",
      title: "Marriage Law",
      subcategories: [
        {
          id: "i",
          title: "Divorce under Hindu Marriage Act",
          link: "/law-library/areas-of-law/marriage/hindu-divorce",
        },
        {
          id: "ii",
          title: "Divorce in Muslims",
          link: "/law-library/areas-of-law/marriage/muslim-divorce",
        },
        {
          id: "iii",
          title: "Dowry",
          link: "/law-library/areas-of-law/marriage/dowry",
        },
        {
          id: "iv",
          title: "Family Courts",
          link: "/law-library/areas-of-law/marriage/family-courts",
        },
        {
          id: "v",
          title: "Muslim Women's right to maintenance",
          link: "/law-library/areas-of-law/marriage/muslim-maintenance",
        },
        {
          id: "vi",
          title: "Hindu Marriage Act",
          link: "/law-library/areas-of-law/marriage/hindu-marriage",
        },
        {
          id: "vii",
          title: "Maintenance U/S 125",
          link: "/law-library/areas-of-law/marriage/maintenance-125",
        },
        {
          id: "viii",
          title: "Maintenance in Hindus",
          link: "/law-library/areas-of-law/marriage/hindu-maintenance",
        },
        {
          id: "ix",
          title: "Registered Marriage",
          link: "/law-library/areas-of-law/marriage/registered",
        },
        {
          id: "x",
          title: "Marriage in Muslims",
          link: "/law-library/areas-of-law/marriage/muslim-marriage",
        },
      ],
    },
    {
      id: "16",
      title: "Personal Law",
      subcategories: [
        {
          id: "i",
          title: "Gifts under Hindu Law",
          link: "/law-library/areas-of-law/personal/hindu-gifts",
        },
      ],
    },
    {
      id: "17",
      title: "Property & Real Estate",
      subcategories: [
        {
          id: "i",
          title: "Sale of Property",
          link: "/law-library/areas-of-law/property/sale",
        },
        {
          id: "ii",
          title: "Lease",
          link: "/law-library/areas-of-law/property/lease",
        },
        {
          id: "iii",
          title: "Mortgage",
          link: "/law-library/areas-of-law/property/mortgage",
        },
        {
          id: "iv",
          title: "Hire Purchase",
          link: "/law-library/areas-of-law/property/hire-purchase",
        },
      ],
    },
    {
      id: "18",
      title: "Tax Laws",
      subcategories: [
        {
          id: "i",
          title: "Central Excise",
          link: "/law-library/areas-of-law/tax/central-excise",
        },
        {
          id: "ii",
          title: "Custom Duty",
          link: "/law-library/areas-of-law/tax/custom-duty",
        },
        {
          id: "iii",
          title: "Income Tax",
          link: "/law-library/areas-of-law/tax/income-tax",
        },
        {
          id: "iv",
          title: "Laws of anti dumping in India",
          link: "/law-library/areas-of-law/tax/anti-dumping",
        },
        {
          id: "v",
          title: "Service Tax",
          link: "/law-library/areas-of-law/tax/service-tax",
        },
        {
          id: "vi",
          title: "Indian Value Added Tax (VAT)",
          link: "/law-library/areas-of-law/tax/vat",
        },
      ],
    },
  ];

  return (
    <div className="container mx-auto p-6 max-w-6xl">
      {/* Header Section */}
      <div className="mb-8">
        <div className="bg-gradient-to-r from-primary via-primary to-secondary p-4 rounded-lg mb-6">
          <h1 className="text-2xl font-bold text-white">Law Library</h1>
        </div>

        <div className="bg-gray-100 p-4 rounded border">
          <h2 className="text-xl font-semibold text-center mb-4">
            Legal Categories
          </h2>
        </div>
      </div>

      {/* Content Layout */}
      <div className="flex gap-6">
        {/* Main Content */}
        <div className="flex-1">
          <div className="bg-white border border-gray-300 rounded">
            <table className="w-full">
              <tbody>
                {legalCategories.map((category) => (
                  <tr key={category.id} className="border-b border-gray-200">
                    <td className="p-3 w-12 border-r border-gray-200 text-center font-bold">
                      {category.id}.
                    </td>
                    <td className="p-3">
                      <div className="font-bold text-gray-800 mb-2">
                        {category.title}
                      </div>
                      <div className="space-y-1">
                        {category.subcategories.map((sub) => (
                          <div key={sub.id} className="flex gap-2">
                            <span className="text-sm">({sub.id})</span>
                            <Link
                              href={sub.link}
                              className="text-blue-600 hover:text-blue-800 underline text-sm"
                            >
                              {sub.title}
                            </Link>
                          </div>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Back Link */}
          <div className="mt-8 pt-4">
            <Link
              href="/law-library"
              className="text-blue-600 hover:text-blue-800 underline inline-flex items-center gap-1"
            >
              ← Back
            </Link>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-64 flex-shrink-0 space-y-4">
          {/* Your opportunities will Broaden */}
          <div className="bg-blue-500 text-white p-4 rounded text-center">
            <h3 className="font-bold text-sm mb-2">Your opportunities will</h3>
            <div className="text-2xl font-script mb-2">Broaden</div>
            <div className="text-xs mb-3">Your knowledge will</div>
            <div className="text-2xl font-script mb-3">Expand</div>
            <div className="text-xs mb-3">The question now is:</div>
            <div className="text-lg font-bold mb-3">
              How to choose the right College?
            </div>
            <button className="bg-white text-blue-500 px-3 py-1 rounded text-xs font-bold">
              search law college
            </button>
          </div>

          {/* Do It Yourself Legal Documents */}
          <div className="bg-red-800 text-white p-4 rounded">
            <div className="text-right mb-2">
              <span className="bg-red-600 px-2 py-1 rounded text-xs">🔧</span>
            </div>
            <h3 className="font-bold text-lg mb-3">Do It Yourself</h3>
            <div className="text-sm mb-3">Legal Documents</div>

            <div className="space-y-1 text-xs">
              <div>• Sale Deed</div>
              <div>• Joint Ventures</div>
              <div>• Create a Will</div>
              <div>• Adoption Deed</div>
              <div>• Hire Agreement</div>
              <div>• Mortgage Deed</div>
              <div>• Franchise Agreement</div>
              <div>• Loan Agreement</div>
              <div>• Partnership Deed</div>
              <div>• Employment Contract</div>
              <div>• Family Settlement</div>
            </div>

            <div className="mt-3 text-center">
              <button className="bg-yellow-500 text-black px-3 py-1 rounded text-xs font-bold">
                View all sample documents
              </button>
            </div>
          </div>

          {/* Right sidebar promotional images */}
          <div className="space-y-2">
            {/* Search Judgements */}
            <div className="bg-red-900 text-white p-3 rounded text-center">
              <h3 className="font-bold text-sm mb-1">SEARCH</h3>
              <div className="text-lg font-bold">Judgements</div>
              <div className="w-12 h-8 bg-white mx-auto rounded mb-2"></div>
            </div>

            {/* Law Dictionary */}
            <div className="bg-blue-600 text-white p-3 rounded text-center">
              <h3 className="font-bold text-sm mb-1">LAW</h3>
              <div className="text-lg font-bold">Dictionary</div>
              <div className="w-12 h-8 bg-white mx-auto rounded mb-2"></div>
            </div>

            {/* Bare Acts */}
            <div className="bg-gray-600 text-white p-3 rounded text-center">
              <h3 className="font-bold text-sm mb-1">BARE</h3>
              <div className="text-lg font-bold">Acts</div>
              <div className="w-12 h-8 bg-white mx-auto rounded mb-2"></div>
            </div>

            {/* Law College */}
            <div className="bg-blue-700 text-white p-3 rounded text-center">
              <h3 className="font-bold text-sm mb-1">LAW</h3>
              <div className="text-lg font-bold">College</div>
              <div className="w-12 h-8 bg-white mx-auto rounded mb-2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
