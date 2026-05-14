import Link from "next/link";

export function SCJudgements() {
  const yearRanges = [
    {
      id: "2020-2025",
      label: "2020 - 2025",
      years: ["2025", "2024", "2023", "2022", "2021", "2020"],
    },
    {
      id: "2010-2019",
      label: "2010 - 2019",
      years: [
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
      ],
    },
    {
      id: "2000-2009",
      label: "2000 - 2009",
      years: [
        "2009",
        "2008",
        "2007",
        "2006",
        "2005",
        "2004",
        "2003",
        "2002",
        "2001",
        "2000",
      ],
    },
    {
      id: "1990-1999",
      label: "1990 - 1999",
      years: [
        "1999",
        "1998",
        "1997",
        "1996",
        "1995",
        "1994",
        "1993",
        "1992",
        "1991",
        "1990",
      ],
    },
    {
      id: "1980-1989",
      label: "1980 - 1989",
      years: [
        "1989",
        "1988",
        "1987",
        "1986",
        "1985",
        "1984",
        "1983",
        "1982",
        "1981",
        "1980",
      ],
    },
    {
      id: "1970-1979",
      label: "1970 - 1979",
      years: [
        "1979",
        "1978",
        "1977",
        "1976",
        "1975",
        "1974",
        "1973",
        "1972",
        "1971",
        "1970",
      ],
    },
    {
      id: "1960-1969",
      label: "1960 - 1969",
      years: [
        "1969",
        "1968",
        "1967",
        "1966",
        "1965",
        "1964",
        "1963",
        "1962",
        "1961",
        "1960",
      ],
    },
    {
      id: "1950-1959",
      label: "1950 - 1959",
      years: [
        "1959",
        "1958",
        "1957",
        "1956",
        "1955",
        "1954",
        "1953",
        "1952",
        "1951",
        "1950",
      ],
    },
  ];

  const latestJudgements = [
    {
      id: "19424",
      date: "12/09/25",
      title:
        "Prakash Asphallings and Toll Highways (India) Ltd. Vs. Mandeepa Enterprises",
    },
    {
      id: "19423",
      date: "12/09/25",
      title: "Mansi Brar Farmandea Vs. Shubha Sharma",
    },
    {
      id: "19422",
      date: "12/09/25",
      title: "Mansukh Sahu Vs. State of Chhattisgarh",
    },
    {
      id: "19421",
      date: "12/09/25",
      title:
        "Confederation of Real Estate Developers Association of India (CREDAI) Vs. Union of India",
    },
    {
      id: "19420",
      date: "12/09/25",
      title: "Anna Winman Bhiserao Vs. State of Maharashtra",
    },
    {
      id: "19419",
      date: "12/09/25",
      title: "ITC Ltd. Vs. State of Karnataka",
    },
    {
      id: "19418",
      date: "12/09/25",
      title: "Mammam Khan Vs. State of Haryana",
    },
    {
      id: "19417",
      date: "12/08/25",
      title: "Shanti Devi since (D) through L.Rs. Goram Vs. Jagan Davi",
    },
    {
      id: "19416",
      date: "12/09/25",
      title:
        "Raju Mema Shinuatraa Rajeshwar Ramdas Sheth Vs. Khramshai Shakarsitaa Patel",
    },
    {
      id: "19415",
      date: "12/09/25",
      title: "Vandita Pathak Vs. Nirmal Kanti Chakraborti",
    },
    {
      id: "19414",
      date: "12/09/25",
      title: "Reena Banerjee Vs. Government of NCT of Delhi",
    },
    {
      id: "19413",
      date: "12/09/25",
      title: "Geeta @ Reeta Mishra Vs. Ajay Kumar Mishra",
    },
    {
      id: "19412",
      date: "11/09/25",
      title: "Vandana Vs. State of Maharashtra",
    },
    {
      id: "19411",
      date: "11/09/25",
      title: "Mohammad Afzal Mohammad Sharif Vs. State of Maharashtra",
    },
    {
      id: "19410",
      date: "11/09/25",
      title: "Sumitra Aggarwal Vs. Ravi Agarwal",
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
            <span>Supreme Court Judgements</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Left Sidebar - Years */}
          <div className="w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm border p-4">
              <h3 className="font-bold text-gray-800 mb-4">Browse by Year</h3>
              <div className="space-y-3">
                {yearRanges.map((range) => (
                  <div key={range.id}>
                    <h4 className="font-medium text-gray-700 mb-2">
                      {range.label}
                    </h4>
                    <div className="grid grid-cols-2 gap-1 mb-3">
                      {range.years.map((year) => (
                        <Link
                          key={year}
                          href={`/law-library/sc-judgements/${year}`}
                          className="text-blue-600 hover:text-blue-800 hover:underline text-sm py-1"
                        >
                          {year}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-white rounded-lg shadow-sm border">
              <div className="p-6 border-b">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-bold text-gray-800">
                    Supreme Court Judgements
                  </h2>

                  {/* Search Box */}
                  <div className="w-80">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Search judgements..."
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                      <button className="absolute right-2 top-2 text-gray-400 hover:text-gray-600">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Latest Judgements
                </h3>

                <div className="space-y-4">
                  {latestJudgements.map((judgement, index) => (
                    <div
                      key={judgement.id}
                      className="border-b border-gray-200 pb-4"
                    >
                      <div className="flex gap-4">
                        <span className="text-blue-600 font-medium w-8">
                          {index + 1}.
                        </span>
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-1">
                            <Link
                              href={`/law-library/sc-judgements/judgement/${judgement.id}`}
                              className="text-blue-600 hover:text-blue-800 hover:underline text-sm font-medium"
                            >
                              {judgement.title}
                            </Link>
                            <span className="text-gray-500 text-xs">
                              {judgement.date}
                            </span>
                          </div>
                          <div className="text-gray-600 text-xs">
                            Judgement ID: {judgement.id}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pagination */}
                <div className="mt-8 flex justify-center">
                  <div className="flex gap-2">
                    <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">
                      Previous
                    </button>
                    <button className="px-3 py-1 bg-blue-600 text-white rounded text-sm">
                      1
                    </button>
                    <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">
                      2
                    </button>
                    <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">
                      3
                    </button>
                    <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
