import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Link from "next/link";

// Sample report data - in a real app, this would come from a database or API
const reportData: { [key: string]: any } = {
  "1": {
    reportNo: "01",
    title: "Liability of the State in Tort",
    contents: [
      {
        chapter: "I",
        title: "Introductory",
        sections: [{ number: "", title: "References" }],
      },
      {
        chapter: "II",
        title: "Existing Law in India (1)",
        sections: [{ number: "", title: "Existing Law in India (2)" }],
      },
      {
        chapter: "III",
        title: "The Law in England",
        sections: [
          { number: "", title: "Crown Proceedings Act" },
          { number: "2(1)", title: "Section 2(1)" },
          { number: "", title: "Vicarious liability of the master" },
          { number: "", title: "Onardous governing master's liability" },
          { number: "", title: "Defence of common employment" },
          {
            number: "",
            title: "The Crown as master and its liability to servants",
          },
          { number: "", title: "Statutory duties and powers" },
          { number: "", title: "Statutory duties" },
          { number: "", title: "Statutory powers" },
          { number: "", title: "Public duties" },
          { number: "2(2)", title: "Section 2(2)" },
          { number: "2(1)", title: "Section 2(1)" },
          { number: "3", title: "Section 3" },
          { number: "4", title: "Section 4" },
          { number: "9 - Postal Packets", title: "Section 9 - Postal Packets" },
          { number: "10 - Armed Forces", title: "Section 10 - Armed Forces" },
        ],
      },
    ],
    content: `
      <h3>Report No. 01</h3>
      <h2>Liability of the State in Tort</h2>
      
      <h4>Chapter I</h4>
      <h3>Introductory</h3>
      
      <h4>1. Reference :</h4>
      <p>On the initiative of the President of India, the Law Ministry took up for consideration the question whether 
      legislation on the lines of the Crown Proceedings Act, 1947 of the United Kingdom in respect of claims against 
      the Union and the States based on tort is needed and, if so, to what extent. After the constitution of this Law 
      Commission, the Law Ministry referred the matter to the Commission for examination and report.</p>
      
      <p>2. The law regarding the liability of the Union and the States in respect of contracts, property etc., is not in 
      doubt. But the law relating to the liability of the Union and the States for tortious acts is in a state of 
      uncertainty. It becomes necessary therefore, to examine the existing law with a view to determine the extent 
      of the liability of the Union and the States for tortious acts.</p>
    `,
  },
};

export default function ReportDetailPage({
  params,
}: {
  params: { reportId: string };
}) {
  const report = reportData[params.reportId];

  if (!report) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold">Report not found</h1>
          <Link
            href="/law-library/law-commission-reports"
            className="text-blue-600 hover:underline"
          >
            ← Back to Law Commission Reports
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Header Section */}
      <div className="bg-gradient-to-r from-primary via-primary to-secondary text-white py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">Law Library</h1>
          <div className="flex items-center gap-2 text-sm">
            <Link href="/law-library" className="hover:underline">
              Law Library
            </Link>
            <span>&gt;</span>
            <Link
              href="/law-library/law-commission-reports"
              className="hover:underline"
            >
              Law Commission Reports
            </Link>
            <span>&gt;</span>
            <span>{report.title}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-white rounded-lg shadow-sm border">
              <div className="p-6">
                <div className="text-center mb-6">
                  <h2 className="text-xl font-bold text-gray-800 mb-2">
                    Report No. {report.reportNo}
                  </h2>
                  <h3 className="text-lg font-semibold text-gray-700">
                    {report.title}
                  </h3>
                </div>

                {/* Contents Table */}
                <div className="mb-8">
                  <table className="w-full border border-gray-300">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2 text-left font-bold">
                          Contents
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {report.contents.map((chapter: any, index: number) => (
                        <React.Fragment key={index}>
                          <tr>
                            <td className="border border-gray-300 px-4 py-2">
                              <strong>Chapter {chapter.chapter}</strong> -{" "}
                              {chapter.title}
                            </td>
                          </tr>
                          {chapter.sections.map(
                            (section: any, sIndex: number) => (
                              <tr key={sIndex}>
                                <td className="border border-gray-300 px-4 py-2 pl-8">
                                  {section.number && `${section.number} - `}
                                  {section.title}
                                </td>
                              </tr>
                            )
                          )}
                        </React.Fragment>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Report Content */}
                <div className="prose max-w-none">
                  <div dangerouslySetInnerHTML={{ __html: report.content }} />
                </div>

                {/* Navigation */}
                <div className="flex justify-between items-center mt-8 pt-6 border-t">
                  <Link
                    href="/law-library/law-commission-reports"
                    className="text-blue-600 hover:underline flex items-center gap-1"
                  >
                    ← Back
                  </Link>
                  <Link
                    href="/law-library/law-commission-reports"
                    className="text-blue-600 hover:underline"
                  >
                    Index
                  </Link>
                  <Link
                    href={`/law-library/law-commission-reports/${
                      parseInt(params.reportId) + 1
                    }`}
                    className="text-blue-600 hover:underline flex items-center gap-1"
                  >
                    Next →
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="w-64 flex-shrink-0">
            <div className="space-y-6">
              {/* Search Judgements */}
              <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
                <div className="bg-red-800 text-white p-3">
                  <h3 className="font-bold text-sm">SEARCH</h3>
                  <h3 className="font-bold text-sm">Judgements</h3>
                </div>
                <div className="p-3">
                  <img
                    src="/placeholder.jpg"
                    alt="Search Judgements"
                    className="w-full h-20 object-cover rounded mb-2"
                  />
                </div>
              </div>

              {/* Law College */}
              <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
                <div className="bg-blue-600 text-white p-3">
                  <h3 className="font-bold text-sm">LAW</h3>
                  <h3 className="font-bold text-sm">College</h3>
                </div>
                <div className="p-3">
                  <img
                    src="/law-university-campus.png"
                    alt="Law College"
                    className="w-full h-20 object-cover rounded mb-2"
                  />
                </div>
              </div>

              {/* Law Dictionary */}
              <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
                <div className="bg-blue-800 text-white p-3">
                  <h3 className="font-bold text-sm">LAW</h3>
                  <h3 className="font-bold text-sm">Dictionary</h3>
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

      <Footer />
    </div>
  );
}

// Add React import for Fragment
import React from "react";
