import Link from "next/link";

export function BareActs() {
  const bareActs = [
    {
      id: "1",
      title:
        "Aadhaar (Targeted Delivery of Financial and other Subsidies, Benefits and Services) Act, 2016",
    },
    {
      id: "2",
      title:
        "Abducted Persons (Recovery and Restoration) Continuance Act, 1955",
    },
    {
      id: "3",
      title: "Absorbed Areas (Laws) Act, 1954",
    },
    {
      id: "4",
      title: "Academy of Scientific and Innovative Research, 2011",
    },
    {
      id: "5",
      title: "Acquired Territories (Merger) Act, 1960",
    },
    {
      id: "6",
      title: "Acquisition of Certain Area at Ayodhya Act, 1993",
    },
    {
      id: "7",
      title: "Actuaries Act, 2006",
    },
    {
      id: "8",
      title:
        "Additional Duties of Excise (Textiles and Textile Articles) Act, 1978",
    },
    {
      id: "9",
      title: "Administrative Tribunals (Amendment) Act, 1986",
    },
    {
      id: "10",
      title: "Advocates Act, 1961",
    },
    {
      id: "11",
      title: "Airports Authority of India Act, 1994",
    },
    {
      id: "12",
      title: "All India Institute of Medical Sciences Act, 1956",
    },
    {
      id: "13",
      title: "Ancient Monuments and Archaeological Sites and Remains Act, 1958",
    },
    {
      id: "14",
      title: "Andhra Pradesh Reorganisation Act, 2014",
    },
    {
      id: "15",
      title: "Anti-Hijacking Act, 2016",
    },
    {
      id: "16",
      title: "Apprentices Act, 1961",
    },
    {
      id: "17",
      title: "Arbitration and Conciliation Act, 1996",
    },
    {
      id: "18",
      title: "Armed Forces (Special Powers) Act, 1958",
    },
    {
      id: "19",
      title: "Banking Regulation Act, 1949",
    },
    {
      id: "20",
      title: "Benami Transactions (Prohibition) Act, 1988",
    },
    {
      id: "21",
      title: "Central Goods and Services Tax Act, 2017",
    },
    {
      id: "22",
      title: "Central Universities Act, 2009",
    },
    {
      id: "23",
      title: "Cinematograph Act, 1952",
    },
    {
      id: "24",
      title: "Civil Defence Act, 1968",
    },
    {
      id: "25",
      title: "Coal Mines (Special Provisions) Act, 2015",
    },
    {
      id: "26",
      title: "Code of Civil Procedure, 1908",
    },
    {
      id: "27",
      title: "Code of Criminal Procedure, 1973",
    },
    {
      id: "28",
      title: "Companies Act, 2013",
    },
    {
      id: "29",
      title: "Competition Act, 2002",
    },
    {
      id: "30",
      title: "Consumer Protection Act, 2019",
    },
    {
      id: "31",
      title: "Contract Labour (Regulation and Abolition) Act, 1970",
    },
    {
      id: "32",
      title: "Copyright Act, 1957",
    },
    {
      id: "33",
      title: "Criminal Law Amendment Act, 2013",
    },
    {
      id: "34",
      title: "Customs Act, 1962",
    },
    {
      id: "35",
      title: "Delhi Land Reforms Act, 1954",
    },
    {
      id: "36",
      title: "Disaster Management Act, 2005",
    },
    {
      id: "37",
      title: "Dowry Prohibition Act, 1961",
    },
    {
      id: "38",
      title: "Electricity Act, 2003",
    },
    {
      id: "39",
      title: "Environment (Protection) Act, 1986",
    },
    {
      id: "40",
      title: "Essential Commodities Act, 1955",
    },
    {
      id: "41",
      title: "Evidence Act, 1872",
    },
    {
      id: "42",
      title: "Factories Act, 1948",
    },
    {
      id: "43",
      title: "Family Courts Act, 1984",
    },
    {
      id: "44",
      title: "Food Safety and Standards Act, 2006",
    },
    {
      id: "45",
      title: "Foreign Exchange Management Act, 1999",
    },
    {
      id: "46",
      title: "Goods and Services Tax Act, 2017",
    },
    {
      id: "47",
      title: "Hindu Marriage Act, 1955",
    },
    {
      id: "48",
      title: "Hindu Succession Act, 1956",
    },
    {
      id: "49",
      title: "Income Tax Act, 1961",
    },
    {
      id: "50",
      title: "Indian Contract Act, 1872",
    },
    {
      id: "51",
      title: "Indian Penal Code, 1860",
    },
    {
      id: "52",
      title: "Information Technology Act, 2000",
    },
    {
      id: "53",
      title: "Insolvency and Bankruptcy Code, 2016",
    },
    {
      id: "54",
      title: "Insurance Act, 1938",
    },
    {
      id: "55",
      title: "Intellectual Property Rights Act",
    },
    {
      id: "56",
      title: "Juvenile Justice (Care and Protection of Children) Act, 2015",
    },
    {
      id: "57",
      title: "Land Acquisition Act, 2013",
    },
    {
      id: "58",
      title: "Legal Services Authorities Act, 1987",
    },
    {
      id: "59",
      title: "Limitation Act, 1963",
    },
    {
      id: "60",
      title: "Maternity Benefit Act, 1961",
    },
    {
      id: "61",
      title: "Medical Termination of Pregnancy Act, 1971",
    },
    {
      id: "62",
      title: "Minimum Wages Act, 1948",
    },
    {
      id: "63",
      title: "Motor Vehicles Act, 1988",
    },
    {
      id: "64",
      title: "National Green Tribunal Act, 2010",
    },
    {
      id: "65",
      title: "Negotiable Instruments Act, 1881",
    },
    {
      id: "66",
      title: "Organic Farming Act",
    },
    {
      id: "67",
      title: "Patents Act, 1970",
    },
    {
      id: "68",
      title: "Payment of Wages Act, 1936",
    },
    {
      id: "69",
      title: "Prevention of Corruption Act, 1988",
    },
    {
      id: "70",
      title: "Protection of Women from Domestic Violence Act, 2005",
    },
    {
      id: "71",
      title: "Public Interest Disclosure and Protection of Informers Act, 2010",
    },
    {
      id: "72",
      title: "Right to Information Act, 2005",
    },
    {
      id: "73",
      title: "Sale of Goods Act, 1930",
    },
    {
      id: "74",
      title: "Securities and Exchange Board of India Act, 1992",
    },
    {
      id: "75",
      title: "Transfer of Property Act, 1882",
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
            <span>Bare Acts</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm border">
            <div className="p-6 border-b">
              <h2 className="text-xl font-bold text-gray-800">Bare Acts</h2>
            </div>

            <div className="p-8">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <tbody>
                    {bareActs.map((act, index) => (
                      <tr key={act.id} className="border-b border-gray-200">
                        <td className="py-3 px-4 text-sm font-medium text-gray-900 w-12">
                          {index + 1}.
                        </td>
                        <td className="py-3 px-4">
                          <Link
                            href={`/law-library/bare-acts/${act.id}`}
                            className="text-blue-600 hover:underline text-sm"
                          >
                            {act.title}
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
