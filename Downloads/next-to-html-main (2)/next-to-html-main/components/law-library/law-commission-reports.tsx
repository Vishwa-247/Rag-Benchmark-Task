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
      <div className="bg-gradient-to-r from-primary via-primary to-secondary text-white py-8">
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
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm border">
            <div className="p-6 border-b">
              <h2 className="text-xl font-bold text-gray-800">
                Law Commission of India Reports
              </h2>
            </div>

            <div className="p-8">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <tbody>
                    {lawCommissionReports.map((report, index) => (
                      <tr key={report.id} className="border-b border-gray-200">
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
      </div>
    </div>
  );
}
