"use client";

import Link from "next/link";

const lawCommissionReports = [
  {
    id: "1",
    title: "Liability of the State in Tort",
  },
  {
    id: "2",
    title: "Parliamentary Legislation relating to Sales Tax",
  },
  {
    id: "3",
    title: "Limitation Act, 1908",
  },
  {
    id: "4",
    title:
      "On the Proposal that High Courts should Sit in Benches at Different Places in a State",
  },
  {
    id: "5",
    title: "British Statutes Applicable to India",
  },
  {
    id: "6",
    title: "Registration Act, 1908",
  },
  {
    id: "7",
    title: "Partnership Act, 1932",
  },
  {
    id: "8",
    title: "Sale of Goods Act, 1930",
  },
  {
    id: "9",
    title: "Specific Relief Act, 1877",
  },
  {
    id: "10",
    title: "Law of Acquisition and Requisitioning of Land",
  },
  {
    id: "11",
    title: "Negotiable Instruments Act, 1881",
  },
  {
    id: "12",
    title: "Income-Tax Act, 1922",
  },
  {
    id: "13",
    title: "Indian Contract Act, 1872",
  },
  {
    id: "14",
    title: "Reform of Judicial Administration",
  },
  {
    id: "15",
    title: "Report on the Law of Christian Marriage and Divorce",
  },
  {
    id: "16",
    title: "Report on the Official Trustees Act, 1913",
  },
  {
    id: "17",
    title: "Contempt of Courts Act, 1971",
  },
  {
    id: "18",
    title: "Converts Marriage Dissolution Act, 1866",
  },
  {
    id: "19",
    title: "Administration-General Act, 1913",
  },
  {
    id: "20",
    title: "Law of Hire-Purchase",
  },
  {
    id: "21",
    title: "Marine Insurance",
  },
  {
    id: "22",
    title: "Christian Marriage and Matrimonial Causes Bill, 1961",
  },
  {
    id: "23",
    title: "Law of Foreign Marriages",
  },
  {
    id: "24",
    title: "Commissions of Inquiry Act, 1952",
  },
  {
    id: "25",
    title: "Evidence of Officers about Forged Stamps, Currency Notes, etc",
  },
  {
    id: "26",
    title: "Insolvency Laws",
  },
  {
    id: "27",
    title: "Code of Civil Procedure, 1908",
  },
  {
    id: "28",
    title: "Indian Oaths Act, 1873",
  },
];

export default function LawCommissionReports() {
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
            <span>Law Commission of India Reports</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Left Sidebar */}
          <div className="w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm border p-4 mb-6">
              <h3 className="font-bold text-gray-800 mb-3">Law Library</h3>
              <nav className="space-y-2">
                <Link
                  href="/law-library/legal-tips"
                  className="block text-blue-600 hover:underline text-sm"
                >
                  LEGAL Tips
                </Link>
                <Link
                  href="/law-library/agreements"
                  className="block text-blue-600 hover:underline text-sm"
                >
                  Agreements
                </Link>
                <Link
                  href="/law-library/forms"
                  className="block text-blue-600 hover:underline text-sm"
                >
                  Forms
                </Link>
                <Link
                  href="/law-library/areas-of-law"
                  className="block text-blue-600 hover:underline text-sm"
                >
                  Areas of Law
                </Link>
                <Link
                  href="/law-library/sc-judgements"
                  className="block text-blue-600 hover:underline text-sm"
                >
                  SC Judgements
                </Link>
                <Link
                  href="/law-library/bare-acts"
                  className="block text-blue-600 hover:underline text-sm"
                >
                  Bare Acts
                </Link>
                <Link
                  href="/law-library/rules"
                  className="block text-blue-600 hover:underline text-sm"
                >
                  Rules
                </Link>
                <Link
                  href="/law-library/law-commission-reports"
                  className="block text-blue-600 hover:underline text-sm font-medium"
                >
                  Law Commission Reports
                </Link>
                <Link
                  href="/law-library/glossary"
                  className="block text-blue-600 hover:underline text-sm"
                >
                  Glossary
                </Link>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-white rounded-lg shadow-sm border">
              <div className="p-6 border-b">
                <h2 className="text-xl font-bold text-gray-800">
                  Law Commission of India Reports
                </h2>
              </div>

              <div className="p-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <tbody>
                      {lawCommissionReports.map((report, index) => (
                        <tr
                          key={report.id}
                          className="border-b border-gray-200"
                        >
                          <td className="py-3 px-4 text-sm font-medium text-gray-900 w-12">
                            {index + 1}.
                          </td>
                          <td className="py-3 px-4">
                            <Link
                              href={`/law-library/law-commission-reports/${report.id}`}
                              className="text-blue-600 hover:underline text-sm"
                            >
                              {report.title}
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

          {/* Right Sidebar */}
          <div className="w-64 flex-shrink-0">
            <div className="space-y-6">
              {/* Opportunities */}
              <div className="bg-orange-100 rounded-lg p-4">
                <h3 className="font-bold text-orange-800 mb-2">
                  Your opportunities will Broaden
                </h3>
                <p className="text-orange-700 text-sm mb-3">
                  Finding a Lawyer can be very intimidating. We will help you
                  find a qualified advocate.
                </p>
                <div className="text-orange-700 text-sm space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 bg-orange-600 rounded-full flex items-center justify-center text-white text-xs">
                      1
                    </span>
                    <span>Present your Case</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 bg-orange-600 rounded-full flex items-center justify-center text-white text-xs">
                      2
                    </span>
                    <span>View Advocate Response to your Case</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 bg-orange-600 rounded-full flex items-center justify-center text-white text-xs">
                      3
                    </span>
                    <span>Select your Advocate</span>
                  </div>
                </div>
              </div>

              {/* Legal Tips */}
              <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
                <div className="bg-orange-600 text-white p-3">
                  <h3 className="font-bold text-sm">LEGAL Tips</h3>
                </div>
                <div className="p-3">
                  <p className="text-gray-600 text-xs">
                    Express your views by posting AdvocateKhoj blogs and also
                    share your thoughts, opinions and insight on various legal
                    matters.
                  </p>
                </div>
              </div>

              {/* Law College */}
              <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
                <div className="bg-blue-600 text-white p-3">
                  <h3 className="font-bold text-sm">LAW College</h3>
                </div>
                <div className="p-3">
                  <img
                    src="/law-university-campus.png"
                    alt="Law College"
                    className="w-full h-20 object-cover rounded mb-2"
                  />
                </div>
              </div>

              {/* Search Judgements */}
              <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
                <div className="bg-red-800 text-white p-3">
                  <h3 className="font-bold text-sm">SEARCH Judgements</h3>
                </div>
                <div className="p-3">
                  <img
                    src="/placeholder.jpg"
                    alt="Search Judgements"
                    className="w-full h-20 object-cover rounded mb-2"
                  />
                </div>
              </div>

              {/* Law Dictionary */}
              <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
                <div className="bg-blue-800 text-white p-3">
                  <h3 className="font-bold text-sm">LAW Dictionary</h3>
                </div>
                <div className="p-3">
                  <img
                    src="/placeholder.jpg"
                    alt="Law Dictionary"
                    className="w-full h-20 object-cover rounded mb-2"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
