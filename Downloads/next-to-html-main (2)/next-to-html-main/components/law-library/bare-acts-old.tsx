import Link from "next/link";

export function BareActs() {
  const bareActs = [
    {
      id: "1",
      title:
        "Aadhaar (Targeted Delivery of Financial and other Subsidies, Benefits and Services) Act, 2016",
      link: "/law-library/bare-acts/aadhaar-act-2016",
    },
    {
      id: "2",
      title:
        "Abducted Persons (Recovery and Restoration) Continuance Act, 1955",
      link: "/law-library/bare-acts/abducted-persons-act-1955",
    },
    {
      id: "3",
      title: "Absorbed Areas (Laws) Act, 1954",
      link: "/law-library/bare-acts/absorbed-areas-act-1954",
    },
    {
      id: "4",
      title: "Academy of Scientific and Innovative Research, 2011",
      link: "/law-library/bare-acts/academy-scientific-research-2011",
    },
    {
      id: "5",
      title: "Acquired Territories (Merger) Act, 1960",
      link: "/law-library/bare-acts/acquired-territories-act-1960",
    },
    {
      id: "6",
      title: "Acquisition of Certain Area at Ayodhya Act, 1993",
      link: "/law-library/bare-acts/acquisition-ayodhya-act-1993",
    },
    {
      id: "7",
      title: "Actuaries Act, 2006",
      link: "/law-library/bare-acts/actuaries-act-2006",
    },
    {
      id: "8",
      title:
        "Additional Duties of Excise (Textiles and Textile Articles) Act, 1978",
      link: "/law-library/bare-acts/additional-duties-excise-textiles-1978",
    },
    {
      id: "9",
      title: "Administrative Tribunals (Amendment) Act, 1986",
      link: "/law-library/bare-acts/administrative-tribunals-amendment-1986",
    },
    {
      id: "10",
      title: "Administrative Tribunals Act, 1985",
      link: "/law-library/bare-acts/administrative-tribunals-act-1985",
    },
    {
      id: "11",
      title: "Admiralty - Generals Act, 1513",
      link: "/law-library/bare-acts/admiralty-generals-act-1513",
    },
    {
      id: "12",
      title: "Administers General Act, 1963",
      link: "/law-library/bare-acts/administers-general-act-1963",
    },
    {
      id: "13",
      title:
        "Admiralty (Jurisdiction and Settlement of Maritime Claims) Act, 2017",
      link: "/law-library/bare-acts/admiralty-jurisdiction-act-2017",
    },
    {
      id: "14",
      title: "Advocates (Amendment) Act, 1973",
      link: "/law-library/bare-acts/advocates-amendment-act-1973",
    },
    {
      id: "15",
      title: "Advocates Act, 1961",
      link: "/law-library/bare-acts/advocates-act-1961",
    },
    {
      id: "16",
      title: "Advocates Welfare Fund Act, 2001",
      link: "/law-library/bare-acts/advocates-welfare-fund-act-2001",
    },
    {
      id: "17",
      title: "Affirmation and Oaths Act, 1873",
      link: "/law-library/bare-acts/affirmation-oaths-act-1873",
    },
    {
      id: "18",
      title: "African Development Fund Act, 1982",
      link: "/law-library/bare-acts/african-development-fund-1982",
    },
    {
      id: "19",
      title: "Agricultural and Processed Food Products Export Case Act, 1985",
      link: "/law-library/bare-acts/agricultural-processed-food-1985",
    },
    {
      id: "20",
      title:
        "Agricultural and Processed Food Products Export Development Authority Act, 1985",
      link: "/law-library/bare-acts/agricultural-processed-food-development-1985",
    },
    {
      id: "21",
      title: "Agricultural Produce (Grading and Making) Act, 1937",
      link: "/law-library/bare-acts/agricultural-produce-grading-1937",
    },
    {
      id: "22",
      title: "Air (Prevention and Control of Pollution) Act, 1981",
      link: "/law-library/bare-acts/air-pollution-act-1981",
    },
    {
      id: "23",
      title: "Air Corporations (Amendment) Act, 1982",
      link: "/law-library/bare-acts/air-corporations-amendment-1982",
    },
    {
      id: "24",
      title: "Air Corporations (Transfer of Undertakings and Repeal) Act, 1994",
      link: "/law-library/bare-acts/air-corporations-transfer-1994",
    },
    {
      id: "25",
      title: "Air Force Act, 1950",
      link: "/law-library/bare-acts/air-force-act-1950",
    },
    {
      id: "26",
      title: "Airports Authority of India Act, 1994",
      link: "/law-library/bare-acts/airports-authority-act-1994",
    },
    {
      id: "27",
      title: "Airports Economic Regulatory Authority of India Act, 2008",
      link: "/law-library/bare-acts/airports-economic-regulatory-2008",
    },
    {
      id: "28",
      title: "All India Council for Technical Education Act, 1987",
      link: "/law-library/bare-acts/all-india-council-technical-1987",
    },
    {
      id: "29",
      title: "All India Institute of Medical Sciences Act, 1956",
      link: "/law-library/bare-acts/all-india-institute-medical-1956",
    },
    {
      id: "30",
      title: "All India Services Act, 1951",
      link: "/law-library/bare-acts/all-india-services-act-1951",
    },
    {
      id: "31",
      title: "Aligarh Muslim University (Amendment) Act, 1972",
      link: "/law-library/bare-acts/aligarh-muslim-university-1972",
    },
    {
      id: "32",
      title: "Aligarh Muslim University Act, 1920",
      link: "/law-library/bare-acts/aligarh-muslim-university-1920",
    },
    {
      id: "33",
      title: "Aligarh Services Regulations (Indemnity) Act, 1978",
      link: "/law-library/bare-acts/aligarh-services-regulations-1978",
    },
    {
      id: "34",
      title: "Ancient Marriage Act, 1958",
      link: "/law-library/bare-acts/ancient-marriage-act-1958",
    },
    {
      id: "35",
      title: "Ancient Monuments and Archaeological Sites and Remains Act, 1958",
      link: "/law-library/bare-acts/ancient-monuments-archaeological-1958",
    },
    {
      id: "36",
      title: "Ancient Monuments Preservation Act, 1904",
      link: "/law-library/bare-acts/ancient-monuments-preservation-1904",
    },
    {
      id: "37",
      title: "Andhra Pradesh and Madras (Alteration of Boundaries) Act, 1959",
      link: "/law-library/bare-acts/andhra-pradesh-madras-boundaries-1959",
    },
    {
      id: "38",
      title: "Andhra Pradesh and Mysore (Transfer of Territory) Act, 1968",
      link: "/law-library/bare-acts/andhra-pradesh-mysore-territory-1968",
    },
    {
      id: "39",
      title: "Andhra Pradesh Legislative Council Act, 2005",
      link: "/law-library/bare-acts/andhra-pradesh-legislative-2005",
    },
    {
      id: "40",
      title: "Andhra Pradesh Reorganisation (Amendment) Act, 2014",
      link: "/law-library/bare-acts/andhra-pradesh-reorganisation-2014",
    },
    {
      id: "41",
      title: "Andhra Pradesh Reorganisation Act, 2014",
      link: "/law-library/bare-acts/andhra-pradesh-reorganisation-act-2014",
    },
    {
      id: "42",
      title:
        "Andhra Scientific Company Limited (Acquisition and Transfer of Undertakings) Act, 1982",
      link: "/law-library/bare-acts/andhra-scientific-company-1982",
    },
    {
      id: "43",
      title: "Andhra State Act, 1953",
      link: "/law-library/bare-acts/andhra-state-act-1953",
    },
    {
      id: "44",
      title: "Anti Apartheid (United Nations Convention) Act, 1981",
      link: "/law-library/bare-acts/anti-apartheid-united-nations-1981",
    },
    {
      id: "45",
      title: "Anti-Hijacking Act, 1982",
      link: "/law-library/bare-acts/anti-hijacking-act-1982",
    },
    {
      id: "46",
      title: "Anti-Hijacking Act, 2016",
      link: "/law-library/bare-acts/anti-hijacking-act-2016",
    },
    {
      id: "47",
      title: "Antiquities and Art Treasures Act, 1972",
      link: "/law-library/bare-acts/antiquities-art-treasures-1972",
    },
    {
      id: "48",
      title: "Anusandhan National Research Foundation Act, 2023",
      link: "/law-library/bare-acts/anusandhan-research-foundation-2023",
    },
    {
      id: "49",
      title: "Appearances (Amendment) Act, 2014",
      link: "/law-library/bare-acts/appearances-amendment-act-2014",
    },
    {
      id: "50",
      title: "Apprentices Act, 1961",
      link: "/law-library/bare-acts/apprentices-act-1961",
    },
    {
      id: "51",
      title: "Arbitration (Protocol and Convention) Act, 1937",
      link: "/law-library/bare-acts/arbitration-protocol-convention-1937",
    },
    {
      id: "52",
      title: "Arbitration Act, 1940",
      link: "/law-library/bare-acts/arbitration-act-1940",
    },
    {
      id: "53",
      title: "Arbitration and Conciliation Act, 1996",
      link: "/law-library/bare-acts/arbitration-conciliation-act-1996",
    },
    {
      id: "54",
      title: "Architects Act, 1972",
      link: "/law-library/bare-acts/architects-act-1972",
    },
    {
      id: "55",
      title: "Armed Forces (Emergency Duties) Act, 1947",
      link: "/law-library/bare-acts/armed-forces-emergency-duties-1947",
    },
    {
      id: "56",
      title: "Armed Forces (Jammu and Kashmir) Special Powers Act, 1990",
      link: "/law-library/bare-acts/armed-forces-jammu-kashmir-1990",
    },
    {
      id: "57",
      title: "Armed Forces (Punjab and Chandigarh) Special Powers Act, 1983",
      link: "/law-library/bare-acts/armed-forces-punjab-chandigarh-1983",
    },
    {
      id: "58",
      title: "Armed Forces (Special Powers) Act, 1958",
      link: "/law-library/bare-acts/armed-forces-special-powers-1958",
    },
    {
      id: "59",
      title: "Armed Forces Tribunal Act, 2007",
      link: "/law-library/bare-acts/armed-forces-tribunal-act-2007",
    },
    {
      id: "60",
      title: "Arms Act, 1959",
      link: "/law-library/bare-acts/arms-act-1959",
    },
    {
      id: "61",
      title: "Army Act, 1950",
      link: "/law-library/bare-acts/army-act-1950",
    },
    {
      id: "62",
      title: "Army and Air Force (Disposal of Private Property) Act, 1950",
      link: "/law-library/bare-acts/army-air-force-disposal-1950",
    },
    {
      id: "63",
      title: "Arya Marriage Validation Act, 1937",
      link: "/law-library/bare-acts/arya-marriage-validation-1937",
    },
    {
      id: "64",
      title: "Asian Development Bank Act, 1966",
      link: "/law-library/bare-acts/asian-development-bank-1966",
    },
    {
      id: "65",
      title: "Assam Society Act, 1984",
      link: "/law-library/bare-acts/assam-society-act-1984",
    },
    {
      id: "66",
      title: "Assam (Alteration of Boundaries) Act, 1951",
      link: "/law-library/bare-acts/assam-alteration-boundaries-1951",
    },
    {
      id: "67",
      title: "Assam Municipal (Nagarpal Amendment) Act, 1961",
      link: "/law-library/bare-acts/assam-municipal-nagarpal-1961",
    },
    {
      id: "68",
      title: "Assam Reorganisation (Meghalaya) Act, 1969",
      link: "/law-library/bare-acts/assam-reorganisation-meghalaya-1969",
    },
    {
      id: "69",
      title: "Assam Rifles Act, 2006",
      link: "/law-library/bare-acts/assam-rifles-act-2006",
    },
    {
      id: "70",
      title: "Assam University Act, 1989",
      link: "/law-library/bare-acts/assam-university-act-1989",
    },
    {
      id: "71",
      title: "Assisted Reproductive Technology (Regulation) Act, 2021",
      link: "/law-library/bare-acts/assisted-reproductive-technology-2021",
    },
    {
      id: "72",
      title: "Atomic Energy (Amendment) Act, 2015",
      link: "/law-library/bare-acts/atomic-energy-amendment-2015",
    },
    {
      id: "73",
      title: "Atomic Energy Act, 1962",
      link: "/law-library/bare-acts/atomic-energy-act-1962",
    },
    {
      id: "74",
      title: "Authoritative Texts (Central Laws) Act, 1973",
      link: "/law-library/bare-acts/authoritative-texts-central-1973",
    },
    {
      id: "75",
      title: "Babhaniaht Bhargava Audyogik University Act, 2004",
      link: "/law-library/bare-acts/babhanihat-bhargava-audyogik-2004",
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
          <h2 className="text-xl font-semibold text-center mb-4">Bare Acts</h2>
        </div>
      </div>

      {/* Content Layout */}
      <div className="flex gap-6">
        {/* Main Content */}
        <div className="flex-1 bg-white rounded shadow-sm">
          <div className="border border-gray-300">
            <table className="w-full">
              <tbody>
                {bareActs.map((act) => (
                  <tr
                    key={act.id}
                    className="border-b border-gray-200 hover:bg-gray-50"
                  >
                    <td className="p-3 w-12 border-r border-gray-200 text-center font-bold text-sm">
                      {act.id}.
                    </td>
                    <td className="p-3">
                      <Link
                        href={act.link}
                        className="text-blue-600 hover:text-blue-800 hover:underline text-sm"
                      >
                        {act.title}
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
          {/* Blog Section */}
          <div className="bg-white border rounded p-4">
            <div className="bg-blue-600 text-white p-3 rounded mb-4">
              <h3 className="text-2xl font-bold">BLOG</h3>
              <p className="text-sm mt-2">
                Express your views by joining AdvocateKhoj Blawg and let the
                world share your thoughts, opinions and insights about Indian
                law
              </p>
            </div>

            <div className="space-y-3">
              <div className="bg-orange-400 text-white p-2 rounded">
                <h4 className="font-bold text-sm">3 Easy Steps</h4>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <span className="bg-orange-400 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    1
                  </span>
                  <span>Create an Account</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="bg-orange-400 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    2
                  </span>
                  <span>Select the Category</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="bg-orange-400 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    3
                  </span>
                  <span>Publish your Blog</span>
                </div>
              </div>

              <button className="bg-orange-400 text-white px-4 py-2 rounded text-sm font-bold w-full">
                Get Started
              </button>
            </div>
          </div>

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

          {/* Advocate Khoj promotional */}
          <div className="bg-gradient-to-b from-orange-300 to-orange-400 p-4 rounded">
            <div className="text-center">
              <div className="bg-white p-2 rounded mb-3">
                <h3 className="text-lg font-bold text-orange-600">
                  AdvocateKhoj
                </h3>
              </div>
              <div className="text-sm text-gray-800 mb-3">
                EXPLORE A WORLD OF POSSIBILITIES!
              </div>
              <div className="text-xs text-gray-700 mb-3">
                Finding a Lawyer can be very intimidating. We are here to make
                the task of finding an Advocate easy, Confidential & Free!
              </div>

              <div className="bg-orange-600 text-white p-2 rounded mb-3">
                <h4 className="font-bold text-sm">3 Easy Steps</h4>
              </div>

              <div className="space-y-2 text-xs text-left">
                <div className="flex items-center gap-2">
                  <span className="bg-orange-600 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                    1
                  </span>
                  <span>Present your Case</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="bg-orange-600 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                    2
                  </span>
                  <span>View Advocate Responses to your case</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="bg-orange-600 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                    3
                  </span>
                  <span>Select your Advocate</span>
                </div>
              </div>

              <div className="text-sm font-bold mt-3 mb-3">
                Easy, Confidential & Free!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
