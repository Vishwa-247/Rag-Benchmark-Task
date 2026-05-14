import Link from "next/link";

export function Rules() {
  const rules = [
    {
      id: "1",
      title:
        "Aadhaar Authentication for Good Governance (Social Welfare, Innovation, Knowledge) Rules, 2020",
      link: "/law-library/rules/aadhaar-authentication-good-governance-2020",
    },
    {
      id: "2",
      title: "Air (Prevention and Control of Pollution) Rules, 1982",
      link: "/law-library/rules/air-prevention-control-pollution-1982",
    },
    {
      id: "3",
      title: "All India Institute of Medical Sciences Rules, 1958",
      link: "/law-library/rules/all-india-institute-medical-sciences-1958",
    },
    {
      id: "4",
      title: "Anti-Hijacking Rules, 2017",
      link: "/law-library/rules/anti-hijacking-rules-2017",
    },
    {
      id: "5",
      title: "Application of Sections 108 to Foreign Companies Rules, 1975",
      link: "/law-library/rules/application-sections-108-foreign-companies-1975",
    },
    {
      id: "6",
      title: "Army and Air Force (Disposal of Private Property) Rules, 1963",
      link: "/law-library/rules/army-air-force-disposal-private-property-1963",
    },
    {
      id: "7",
      title: "Auroville Foundation Rules, 1997",
      link: "/law-library/rules/auroville-foundation-rules-1997",
    },
    {
      id: "8",
      title: "Banking Regulation (Companies) Rules, 1949",
      link: "/law-library/rules/banking-regulation-companies-1949",
    },
    {
      id: "9",
      title: "Banning of Unregulated Deposit Schemes Rules, 2020",
      link: "/law-library/rules/banning-unregulated-deposit-schemes-2020",
    },
    {
      id: "10",
      title: "Betwa River Board Rules, 1977",
      link: "/law-library/rules/betwa-river-board-1977",
    },
    {
      id: "11",
      title: "Census Rule, 1990",
      link: "/law-library/rules/census-rule-1990",
    },
    {
      id: "12",
      title: "Central Apprenticeship Council Rules, 1962",
      link: "/law-library/rules/central-apprenticeship-council-1962",
    },
    {
      id: "13",
      title: "Certifying Authorities Rules, 2000",
      link: "/law-library/rules/certifying-authorities-rules-2000",
    },
    {
      id: "14",
      title:
        "Cine Workers and Cinema Theatre Workers (Regulation of Employment) Rules, 1984",
      link: "/law-library/rules/cine-workers-cinema-theatre-1984",
    },
    {
      id: "15",
      title: "Cinematograph (Certification) Rules, 1983",
      link: "/law-library/rules/cinematograph-certification-1983",
    },
    {
      id: "16",
      title: "Cinematograph Film Rules, 1948",
      link: "/law-library/rules/cinematograph-film-rules-1948",
    },
    {
      id: "17",
      title: "Civil Defence Rules, 1968",
      link: "/law-library/rules/civil-defence-rules-1968",
    },
    {
      id: "18",
      title: "Coal Bearing Areas (Acquisition and Development) Rules, 1957",
      link: "/law-library/rules/coal-bearing-areas-acquisition-1957",
    },
    {
      id: "19",
      title: "Coastal Aquaculture Authority Rules, 2005",
      link: "/law-library/rules/coastal-aquaculture-authority-2005",
    },
    {
      id: "20",
      title: "Coconut Development Board Rules, 1981",
      link: "/law-library/rules/coconut-development-board-1981",
    },
    {
      id: "21",
      title: "Commission of Sati (Prevention) Rules, 1988",
      link: "/law-library/rules/commission-sati-prevention-1988",
    },
    {
      id: "22",
      title: "Commissions of Inquiry (Central) Rules, 1972",
      link: "/law-library/rules/commissions-inquiry-central-1972",
    },
    {
      id: "23",
      title: "Companies (Acceptance of Deposits) Rules, 1975",
      link: "/law-library/rules/companies-acceptance-deposits-1975",
    },
    {
      id: "24",
      title:
        "Companies (Application for Extension of Time or Exemption under Sub-Section (8) of Section 58A) Rules, 1975",
      link: "/law-library/rules/companies-application-extension-time-1975",
    },
    {
      id: "25",
      title:
        "Companies (Appointment and Qualifications of Secretary) Rules, 1988",
      link: "/law-library/rules/companies-appointment-qualifications-secretary-1988",
    },
    {
      id: "26",
      title:
        "Companies (Appointment of Small Shareholders Director) Rules, 2001",
      link: "/law-library/rules/companies-appointment-small-shareholders-2001",
    },
    {
      id: "27",
      title: "Companies (Appointment of Sole Agents) Rules, 1975",
      link: "/law-library/rules/companies-appointment-sole-agents-1975",
    },
    {
      id: "28",
      title: "Companies (Branch Audit Exemption) Rules, 1961",
      link: "/law-library/rules/companies-branch-audit-exemption-1961",
    },
    {
      id: "29",
      title: "Companies (Central Government's) General Rules and Forms, 1956",
      link: "/law-library/rules/companies-central-government-general-1956",
    },
    {
      id: "30",
      title: "Companies (Court) Rules, 1959",
      link: "/law-library/rules/companies-court-rules-1959",
    },
    {
      id: "31",
      title:
        "Companies (Declaration of Exemption under Sub-Section (1) of Section 25) Rules, 1978",
      link: "/law-library/rules/companies-declaration-exemption-section-25-1978",
    },
    {
      id: "32",
      title: "Companies (Donation to National Funds) Rules, 1992",
      link: "/law-library/rules/companies-donation-national-funds-1992",
    },
    {
      id: "33",
      title: "Companies (Inspection, Investigation and Inquiry) Rules, 2014",
      link: "/law-library/rules/companies-inspection-investigation-inquiry-2014",
    },
    {
      id: "34",
      title: "Companies (Management and Administration) Rules, 2014",
      link: "/law-library/rules/companies-management-administration-2014",
    },
    {
      id: "35",
      title: "Companies (Meetings of Board and its Powers) Rules, 2014",
      link: "/law-library/rules/companies-meetings-board-powers-2014",
    },
    {
      id: "36",
      title: "Companies (Removal of Difficulties) Fifth Order, 2015",
      link: "/law-library/rules/companies-removal-difficulties-fifth-2015",
    },
    {
      id: "37",
      title: "Companies (Specification of definitions details) Rules, 2014",
      link: "/law-library/rules/companies-specification-definitions-2014",
    },
    {
      id: "38",
      title: "Competition Commission of India (General) Regulations, 2009",
      link: "/law-library/rules/competition-commission-general-2009",
    },
    {
      id: "39",
      title: "Consumer Protection (Direct Selling) Rules, 2021",
      link: "/law-library/rules/consumer-protection-direct-selling-2021",
    },
    {
      id: "40",
      title: "Consumer Protection Rules, 2020",
      link: "/law-library/rules/consumer-protection-rules-2020",
    },
    {
      id: "41",
      title: "Copyright Rules, 2013",
      link: "/law-library/rules/copyright-rules-2013",
    },
    {
      id: "42",
      title:
        "Customs Tariff (Identification, Assessment and Collection of Countervailing Duty on Subsidised Articles and for Determination of Injury) Rules, 1995",
      link: "/law-library/rules/customs-tariff-identification-assessment-1995",
    },
    {
      id: "43",
      title: "Delhi Special Police Establishment (Conduct) Rules, 1977",
      link: "/law-library/rules/delhi-special-police-establishment-1977",
    },
    {
      id: "44",
      title: "Drug (Control) Rules, 1988",
      link: "/law-library/rules/drug-control-rules-1988",
    },
    {
      id: "45",
      title: "Drugs and Cosmetics Rules, 1945",
      link: "/law-library/rules/drugs-cosmetics-rules-1945",
    },
    {
      id: "46",
      title:
        "Election Commission (Conditions of Service of Election Commissioners and Transaction of Business) Rules, 1992",
      link: "/law-library/rules/election-commission-conditions-service-1992",
    },
    {
      id: "47",
      title: "Employees' Compensation (Central) Rules, 1965",
      link: "/law-library/rules/employees-compensation-central-1965",
    },
    {
      id: "48",
      title:
        "Employment Exchange (Compulsory Notification of Vacancies) Rules, 1959",
      link: "/law-library/rules/employment-exchange-compulsory-notification-1959",
    },
    {
      id: "49",
      title: "Environment Protection Rules, 1986",
      link: "/law-library/rules/environment-protection-rules-1986",
    },
    {
      id: "50",
      title:
        "Foreign Exchange Management (Current Account Transactions) Rules, 2000",
      link: "/law-library/rules/foreign-exchange-management-current-account-2000",
    },
  ];

  return (
    <div className="container mx-auto p-6 max-w-6xl">
      {/* Header */}
      <div className="mb-8">
        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-4 rounded-lg mb-6">
          <h1 className="text-2xl font-bold text-white">Law Library</h1>
        </div>

        <div className="bg-gray-100 p-4 rounded border">
          <h2 className="text-xl font-semibold text-center mb-4">Rules</h2>
        </div>
      </div>

      {/* Content Layout */}
      <div className="flex gap-6">
        {/* Main Content */}
        <div className="flex-1 bg-white rounded shadow-sm">
          <div className="border border-gray-300">
            <table className="w-full">
              <tbody>
                {rules.map((rule) => (
                  <tr
                    key={rule.id}
                    className="border-b border-gray-200 hover:bg-gray-50"
                  >
                    <td className="p-3 w-12 border-r border-gray-200 text-center font-bold text-sm">
                      {rule.id}.
                    </td>
                    <td className="p-3">
                      <Link
                        href={rule.link}
                        className="text-blue-600 hover:text-blue-800 hover:underline text-sm"
                      >
                        {rule.title}
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-6 mb-6">
            <div className="flex gap-2">
              <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded hover:bg-gray-300 transition-colors text-sm">
                Previous
              </button>
              <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm">
                1
              </button>
              <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded hover:bg-gray-300 transition-colors text-sm">
                2
              </button>
              <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded hover:bg-gray-300 transition-colors text-sm">
                3
              </button>
              <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded hover:bg-gray-300 transition-colors text-sm">
                Next
              </button>
            </div>
          </div>

          {/* Back Link */}
          <div className="p-6 pt-4 border-t">
            <Link
              href="/law-library"
              className="text-blue-600 hover:text-blue-800 underline inline-flex items-center gap-1"
            >
              ← Back to Law Library
            </Link>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-80 flex-shrink-0 space-y-4">
          {/* Your opportunities section */}
          <div className="bg-blue-500 text-white p-4 rounded text-center">
            <h3 className="text-sm mb-2">Your opportunities will</h3>
            <div className="text-2xl font-script mb-2 italic">Broaden</div>
            <div className="text-sm mb-3">Your knowledge will</div>
            <div className="text-2xl font-script mb-3 italic">Expand</div>
            <div className="text-sm mb-3">The question now is:</div>
            <div className="text-lg font-bold mb-3">
              How to choose the right College?
            </div>
            <button className="bg-blue-600 text-white px-3 py-2 rounded text-sm font-bold">
              search law college
            </button>
          </div>

          {/* Students promotional image */}
          <div className="bg-white rounded overflow-hidden shadow-sm">
            <div className="h-48 bg-gradient-to-b from-blue-200 to-blue-300 flex items-center justify-center">
              <div className="text-center">
                <div className="text-sm text-gray-700 mb-2">
                  Students studying together
                </div>
                <div className="w-32 h-20 bg-blue-400 rounded mx-auto"></div>
              </div>
            </div>
          </div>

          {/* LEGAL Tips */}
          <div className="relative">
            <div className="absolute top-0 right-0 bg-orange-500 text-white p-2 rounded-l text-xs font-bold">
              LEGAL
            </div>
            <div className="bg-gray-800 text-white p-4 rounded">
              <h3 className="text-2xl font-bold mb-2">Tips</h3>
              <div className="text-xs text-gray-300">
                (Updated on on 1.4.2025)
              </div>
            </div>
          </div>

          {/* LAW College */}
          <div className="bg-blue-600 text-white p-4 rounded text-center">
            <h3 className="text-2xl font-bold mb-2">LAW</h3>
            <h4 className="text-xl font-bold mb-3">College</h4>
            <div className="h-16 bg-white rounded mx-auto mb-2 flex items-center justify-center">
              <div className="w-12 h-8 bg-blue-200 rounded"></div>
            </div>
          </div>

          {/* SEARCH Judgements */}
          <div className="bg-red-900 text-white p-4 rounded text-center">
            <h3 className="text-lg font-bold mb-2">SEARCH</h3>
            <h4 className="text-xl font-bold mb-3">Judgements</h4>
            <div className="h-16 bg-white rounded mx-auto mb-2 flex items-center justify-center">
              <div className="w-12 h-8 bg-red-200 rounded"></div>
            </div>
          </div>

          {/* LAW Dictionary */}
          <div className="bg-blue-700 text-white p-4 rounded text-center">
            <h3 className="text-lg font-bold mb-2">LAW</h3>
            <h4 className="text-xl font-bold mb-3">Dictionary</h4>
            <div className="h-16 bg-white rounded mx-auto mb-2 flex items-center justify-center">
              <div className="w-12 h-8 bg-blue-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
