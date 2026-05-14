import Link from "next/link";

export function Rules() {
  const rules = [
    {
      id: "1",
      title:
        "Aadhaar Authentication for Good Governance (Social Welfare, Innovation, Knowledge) Rules, 2020",
    },
    {
      id: "2",
      title: "Air (Prevention and Control of Pollution) Rules, 1982",
    },
    {
      id: "3",
      title: "All India Institute of Medical Sciences Rules, 1958",
    },
    {
      id: "4",
      title: "Anti-Hijacking Rules, 2017",
    },
    {
      id: "5",
      title: "Application of Sections 108 to Foreign Companies Rules, 1975",
    },
    {
      id: "6",
      title: "Army and Air Force (Disposal of Private Property) Rules, 1963",
    },
    {
      id: "7",
      title: "Auroville Foundation Rules, 1997",
    },
    {
      id: "8",
      title: "Banking Regulation (Companies) Rules, 1949",
    },
    {
      id: "9",
      title: "Banning of Unregulated Deposit Schemes Rules, 2020",
    },
    {
      id: "10",
      title:
        "Central Civil Services (Classification, Control and Appeal) Rules, 1965",
    },
    {
      id: "11",
      title: "Central Civil Services (Conduct) Rules, 1964",
    },
    {
      id: "12",
      title: "Central Civil Services (Leave) Rules, 1972",
    },
    {
      id: "13",
      title: "Central Civil Services (Pension) Rules, 2021",
    },
    {
      id: "14",
      title: "Central Government Civil Pensioners' Welfare Fund Rules, 1990",
    },
    {
      id: "15",
      title: "Central Goods and Services Tax Rules, 2017",
    },
    {
      id: "16",
      title: "Central Motor Vehicles Rules, 1989",
    },
    {
      id: "17",
      title:
        "Chemical Accidents (Emergency Planning, Preparedness and Response) Rules, 1996",
    },
    {
      id: "18",
      title: "Child Labour (Prohibition and Regulation) Rules, 1988",
    },
    {
      id: "19",
      title: "Cinematograph Rules, 1983",
    },
    {
      id: "20",
      title: "Companies (Incorporation) Rules, 2014",
    },
    {
      id: "21",
      title: "Companies (Management and Administration) Rules, 2014",
    },
    {
      id: "22",
      title: "Companies (Meetings of Board and its Powers) Rules, 2014",
    },
    {
      id: "23",
      title: "Companies (Share Capital and Debentures) Rules, 2014",
    },
    {
      id: "24",
      title: "Consumer Protection Rules, 2020",
    },
    {
      id: "25",
      title: "Copyright Rules, 2013",
    },
    {
      id: "26",
      title: "Criminal Rules of Practice, 2019",
    },
    {
      id: "27",
      title:
        "Customs (Import of Goods at Concessional Rate of Duty) Rules, 2017",
    },
    {
      id: "28",
      title: "Delimitation Rules, 2002",
    },
    {
      id: "29",
      title: "Disaster Management Rules, 2008",
    },
    {
      id: "30",
      title: "Drugs and Cosmetics Rules, 1945",
    },
    {
      id: "31",
      title: "Election Symbols (Reservation and Allotment) Rules, 1968",
    },
    {
      id: "32",
      title: "Electricity Rules, 2005",
    },
    {
      id: "33",
      title: "Environment Impact Assessment Rules, 2006",
    },
    {
      id: "34",
      title: "Factories Rules, 1950",
    },
    {
      id: "35",
      title: "Family Courts Rules, 1987",
    },
    {
      id: "36",
      title: "Foreign Exchange Management (Non-debt Instruments) Rules, 2019",
    },
    {
      id: "37",
      title: "Forest (Conservation) Rules, 2003",
    },
    {
      id: "38",
      title: "Goods and Services Tax (Compensation to States) Rules, 2017",
    },
    {
      id: "39",
      title: "Income Tax Rules, 1962",
    },
    {
      id: "40",
      title:
        "Indian Medical Council (Professional Conduct, Etiquette and Ethics) Rules, 2002",
    },
    {
      id: "41",
      title:
        "Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021",
    },
    {
      id: "42",
      title:
        "Insolvency and Bankruptcy (Application to Adjudicating Authority) Rules, 2016",
    },
    {
      id: "43",
      title: "Insurance Rules, 1939",
    },
    {
      id: "44",
      title: "Legal Services Authorities Rules, 1995",
    },
    {
      id: "45",
      title: "Maternity Benefit Rules, 1963",
    },
    {
      id: "46",
      title: "Medical Termination of Pregnancy Rules, 2003",
    },
    {
      id: "47",
      title: "Minimum Wages Rules, 1950",
    },
    {
      id: "48",
      title: "National Green Tribunal Rules, 2011",
    },
    {
      id: "49",
      title: "Patents Rules, 2003",
    },
    {
      id: "50",
      title: "Prevention of Corruption Rules, 1988",
    },
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
            <span>Rules</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm border">
            <div className="p-6 border-b">
              <h2 className="text-xl font-bold text-gray-800">Rules</h2>
            </div>

            <div className="p-8">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <tbody>
                    {rules.map((rule, index) => (
                      <tr key={rule.id} className="border-b border-gray-200">
                        <td className="py-3 px-4 text-sm font-medium text-gray-900 w-12">
                          {index + 1}.
                        </td>
                        <td className="py-3 px-4">
                          <Link
                            href={`/law-library/rules/${rule.id}`}
                            className="text-blue-600 hover:underline text-sm"
                          >
                            {rule.title}
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
