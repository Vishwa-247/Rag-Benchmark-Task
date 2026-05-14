import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Link from "next/link";

interface YearJudgementsPageProps {
  params: {
    year: string;
  };
}

export default function YearJudgementsPage({
  params,
}: YearJudgementsPageProps) {
  // Sample judgements data by year
  const judgementsByYear: {
    [key: string]: Array<{
      id: string;
      title: string;
      date: string;
      judges: string;
    }>;
  } = {
    "2025": [
      {
        id: "19424",
        title:
          "Prakash Asphallings and Toll Highways (India) Ltd. Vs. Mandeepa Enterprises and Ors.",
        date: "12/09/2025",
        judges: "Ujjal Bhuyan, J.",
      },
      {
        id: "19425",
        title: "Union of India Vs. ABC Pvt. Ltd.",
        date: "11/09/2025",
        judges: "Dr. Dhananjaya Y. Chandrachud, CJI",
      },
      {
        id: "19426",
        title: "State of Maharashtra Vs. Rajesh Kumar Singh",
        date: "10/09/2025",
        judges: "Sanjiv Khanna, J. & Dipankar Datta, J.",
      },
      {
        id: "19427",
        title: "Bharti Airtel Ltd. Vs. Telecom Regulatory Authority of India",
        date: "09/09/2025",
        judges: "B.R. Gavai, J. & Sandeep Mehta, J.",
      },
    ],
    "2024": [
      {
        id: "19400",
        title: "State Bank of India Vs. M/s ABC Corporation",
        date: "28/12/2024",
        judges: "Dr. Dhananjaya Y. Chandrachud, CJI & B.R. Gavai, J.",
      },
      {
        id: "19401",
        title: "Ministry of Environment Vs. Green Earth Foundation",
        date: "20/12/2024",
        judges: "Sanjiv Khanna, J.",
      },
    ],
    "2023": [
      {
        id: "19300",
        title: "Delhi Metro Rail Corporation Vs. Construction Workers Union",
        date: "15/11/2023",
        judges: "Ujjal Bhuyan, J. & Dipankar Datta, J.",
      },
    ],
  };

  const yearJudgements = judgementsByYear[params.year] || [];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto p-6 max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <div className="bg-gradient-to-r from-primary via-primary to-secondary p-4 rounded-lg mb-6">
            <h1 className="text-2xl font-bold text-white">Law Library</h1>
            <div className="flex items-center gap-2 text-sm mt-2">
              <Link
                href="/law-library"
                className="hover:underline text-white/90"
              >
                Law Library
              </Link>
              <span className="text-white/90">&gt;</span>
              <Link
                href="/law-library/judgements"
                className="hover:underline text-white/90"
              >
                Supreme Court Judgements
              </Link>
              <span className="text-white/90">&gt;</span>
              <span className="text-white">Year {params.year}</span>
            </div>
          </div>
        </div>

        {/* Content Layout */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Sidebar - Year Navigation */}
          <div className="w-full lg:w-64 flex-shrink-0 space-y-2 overflow-x-auto lg:overflow-visible mb-4 lg:mb-0">
            <div className="bg-green-600 text-white rounded">
              <div className="bg-green-700 p-2 text-center font-bold text-sm rounded-t">
                📅 2020 - 2025
              </div>
              <div className="p-2 space-y-1">
                {["2025", "2024", "2023", "2022", "2021", "2020"].map(
                  (year) => (
                    <Link
                      key={year}
                      href={`/law-library/judgements/${year}`}
                      className={`block text-xs hover:bg-green-500 p-1 rounded ${
                        year === params.year ? "bg-green-500 font-bold" : ""
                      }`}
                    >
                      {year}
                    </Link>
                  )
                )}
              </div>
            </div>

            <div className="bg-green-600 text-white rounded">
              <div className="bg-green-700 p-2 text-center font-bold text-sm rounded-t">
                📅 2010 - 2019
              </div>
              <div className="p-2 space-y-1">
                {[
                  "2019",
                  "2018",
                  "2017",
                  "2016",
                  "2015",
                  "2014",
                  "2013",
                  "2012",
                  "2011",
                  "2010",
                ].map((year) => (
                  <Link
                    key={year}
                    href={`/law-library/judgements/${year}`}
                    className="block text-xs hover:bg-green-500 p-1 rounded"
                  >
                    {year}
                  </Link>
                ))}
              </div>
            </div>

            <div className="bg-green-600 text-white rounded">
              <div className="bg-green-700 p-2 text-center font-bold text-sm rounded-t">
                📅 2000 - 2009
              </div>
            </div>

            <div className="bg-green-600 text-white rounded">
              <div className="bg-green-700 p-2 text-center font-bold text-sm rounded-t">
                📅 1990 - 1999
              </div>
            </div>

            <div className="bg-green-600 text-white rounded">
              <div className="bg-green-700 p-2 text-center font-bold text-sm rounded-t">
                📅 1980 - 1989
              </div>
            </div>

            <div className="bg-green-600 text-white rounded">
              <div className="bg-green-700 p-2 text-center font-bold text-sm rounded-t">
                📅 1970 - 1979
              </div>
            </div>

            <div className="bg-green-600 text-white rounded">
              <div className="bg-green-700 p-2 text-center font-bold text-sm rounded-t">
                📅 1960 - 1969
              </div>
            </div>

            <div className="bg-green-600 text-white rounded">
              <div className="bg-green-700 p-2 text-center font-bold text-sm rounded-t">
                📅 1950 - 1959
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 bg-white p-4 sm:p-6 rounded shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold">
                Supreme Court Judgements - {params.year}
              </h1>
              <span className="text-gray-600 text-sm">
                {yearJudgements.length} judgements found
              </span>
            </div>

            {yearJudgements.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-600 mb-4">
                  No judgements available for {params.year}
                </p>
                <Link
                  href="/law-library/judgements"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  ← Back to Latest Judgements
                </Link>
              </div>
            ) : (
              <>
                {/* Judgements List */}
                <div className="space-y-4">
                  {yearJudgements.map((judgement, index) => (
                    <div
                      key={judgement.id}
                      className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow text-sm sm:text-base"
                    >
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-2 gap-1">
                        <span className="text-sm text-gray-500">
                          #{index + 1}
                        </span>
                        <span className="text-sm text-gray-500">
                          {judgement.date}
                        </span>
                      </div>

                      <h3 className="font-semibold mb-2">
                        <Link
                          href={`/law-library/judgements/announcement/${judgement.id}`}
                          className="text-blue-600 hover:text-blue-800 hover:underline"
                        >
                          {judgement.title}
                        </Link>
                      </h3>

                      <p className="text-sm text-gray-600 mb-3">
                        <strong>Judge(s):</strong> {judgement.judges}
                      </p>

                      <div className="flex flex-col sm:flex-row gap-2 mt-2">
                        <Link
                          href={`/law-library/judgements/announcement/${judgement.id}`}
                          className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700 transition-colors"
                        >
                          Read Full Text
                        </Link>
                        <button className="bg-gray-600 text-white px-3 py-1 rounded text-sm hover:bg-gray-700 transition-colors w-full sm:w-auto">
                          Download PDF
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pagination */}
                <div className="flex flex-wrap justify-center mt-8 gap-2">
                  <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded hover:bg-gray-300 transition-colors w-full sm:w-auto">
                    Previous
                  </button>
                  <button className="bg-blue-600 text-white px-3 py-1 rounded w-full sm:w-auto">
                    1
                  </button>
                  <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded hover:bg-gray-300 transition-colors w-full sm:w-auto">
                    2
                  </button>
                  <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded hover:bg-gray-300 transition-colors w-full sm:w-auto">
                    Next
                  </button>
                </div>

                {/* Navigation */}
                <div className="mt-8 pt-4 border-t">
                  <Link
                    href="/law-library/judgements"
                    className="text-blue-600 hover:text-blue-800 underline inline-flex items-center gap-1"
                  >
                    ← Back to Latest Judgements
                  </Link>
                </div>
              </>
            )}
          </div>

          {/* Right Sidebar */}
          <div className="w-full lg:w-64 flex-shrink-0 space-y-4 mt-6 lg:mt-0">
            {/* Search */}
            <div className="bg-white p-4 rounded border">
              <h3 className="font-bold text-sm mb-2">Search Judgements</h3>
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-3 py-2 border rounded text-sm"
              />
              <button className="w-full bg-blue-600 text-white py-2 rounded mt-2 text-sm hover:bg-blue-700 transition-colors">
                Search
              </button>
            </div>

            {/* Law Dictionary */}
            <div className="bg-blue-600 text-white p-3 rounded text-center">
              <h3 className="font-bold text-sm mb-1">LAW Dictionary</h3>
              <div className="w-12 h-8 bg-white mx-auto rounded mb-2"></div>
            </div>

            {/* Law College */}
            <div className="bg-blue-500 text-white p-3 rounded text-center">
              <h3 className="font-bold text-sm mb-1">LAW College</h3>
              <div className="w-12 h-8 bg-white mx-auto rounded mb-2"></div>
            </div>

            {/* Areas of Law */}
            <div className="bg-yellow-600 text-white p-3 rounded text-center">
              <h3 className="font-bold text-sm mb-1">AREAS of Law</h3>
              <div className="w-12 h-8 bg-white mx-auto rounded mb-2"></div>
            </div>

            {/* Bare Acts */}
            <div className="bg-gray-600 text-white p-3 rounded text-center">
              <h3 className="font-bold text-sm mb-1">BARE Acts</h3>
              <div className="w-12 h-8 bg-white mx-auto rounded mb-2"></div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
