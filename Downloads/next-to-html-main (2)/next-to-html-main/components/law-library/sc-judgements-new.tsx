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
      link: "/law-library/judgements/announcement/19424",
    },
    {
      id: "19423",
      date: "12/09/25",
      title: "Mansi Brar Farmandea Vs. Shubha Sharma",
      link: "/law-library/judgements/announcement/19423",
    },
    {
      id: "19422",
      date: "12/09/25",
      title: "Mansukh Sahu Vs. State of Chhattisgarh",
      link: "/law-library/judgements/announcement/19422",
    },
    {
      id: "19421",
      date: "12/09/25",
      title:
        "Confederation of Real Estate Developers Association of India (CREDAI) Vs. Union of India",
      link: "/law-library/judgements/announcement/19421",
    },
    {
      id: "19420",
      date: "12/09/25",
      title: "Anna Winman Bhiserao Vs. State of Maharashtra",
      link: "/law-library/judgements/announcement/19420",
    },
    {
      id: "19419",
      date: "12/09/25",
      title: "ITC Ltd. Vs. State of Karnataka",
      link: "/law-library/judgements/announcement/19419",
    },
    {
      id: "19418",
      date: "12/09/25",
      title: "Mammam Khan Vs. State of Haryana",
      link: "/law-library/judgements/announcement/19418",
    },
    {
      id: "19417",
      date: "12/08/25",
      title: "Shanti Devi since (D) through L.Rs. Goram Vs. Jagan Davi",
      link: "/law-library/judgements/announcement/19417",
    },
    {
      id: "19416",
      date: "12/09/25",
      title:
        "Raju Mema Shinuatraa Rajeshwar Ramdas Sheth Vs. Khramshai Shakarsitaa Patel",
      link: "/law-library/judgements/announcement/19416",
    },
    {
      id: "19415",
      date: "12/09/25",
      title: "Vandita Pathak Vs. Nirmal Kanti Chakraborti",
      link: "/law-library/judgements/announcement/19415",
    },
    {
      id: "19414",
      date: "12/09/25",
      title: "Reena Banerjee Vs. Government of NCT of Delhi",
      link: "/law-library/judgements/announcement/19414",
    },
    {
      id: "19413",
      date: "12/09/25",
      title: "Geeta @ Reeta Mishra Vs. Ajay Kumar Mishra",
      link: "/law-library/judgements/announcement/19413",
    },
    {
      id: "19412",
      date: "11/09/25",
      title: "Vandana Vs. State of Maharashtra",
      link: "/law-library/judgements/announcement/19412",
    },
    {
      id: "19411",
      date: "11/09/25",
      title: "Mohammad Afzal Mohammad Sharif Vs. State of Maharashtra",
      link: "/law-library/judgements/announcement/19411",
    },
    {
      id: "19410",
      date: "11/09/25",
      title: "Jyoti Sharma Vs. Vishnu Goyal",
      link: "/law-library/judgements/announcement/19410",
    },
  ];

  return (
    <div className="container mx-auto p-6 max-w-6xl">
      {/* Header Section */}
      <div className="mb-8">
        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-4 rounded-lg mb-6">
          <h1 className="text-2xl font-bold text-white">Law Library</h1>
        </div>

        <div className="bg-gray-100 p-4 rounded border">
          <h2 className="text-xl font-semibold text-center mb-4">
            Supreme Court Judgements
          </h2>
        </div>
      </div>

      {/* Content Layout */}
      <div className="flex gap-6">
        {/* Left Sidebar - Year Ranges */}
        <div className="w-64 flex-shrink-0 space-y-2">
          {yearRanges.map((range) => (
            <div key={range.id} className="bg-green-600 text-white rounded">
              <div className="bg-green-700 p-2 text-center font-bold text-sm rounded-t">
                📅 {range.label}
              </div>
              <div className="p-2 space-y-1">
                {range.years.map((year) => (
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
          ))}

          {/* Latest Supreme Court Judgements */}
          <div className="bg-red-700 text-white rounded mt-4">
            <div className="bg-red-800 p-2 text-center font-bold text-sm rounded-t">
              LATEST SUPREME COURT JUDGEMENTS
            </div>
            <div className="bg-red-600 p-2 text-center font-bold text-sm">
              SEPTEMBER - 2025
            </div>
            <div className="p-2 text-center">
              <button className="bg-yellow-500 text-black px-3 py-1 rounded text-xs font-bold">
                Click here »
              </button>
            </div>
          </div>

          {/* Subscribe */}
          <div className="text-center mt-4">
            <div className="text-orange-600 text-sm font-bold">Subscribe</div>
            <div className="text-orange-600 text-xs">📧</div>
          </div>

          {/* CITIS Advertisement */}
          <div className="bg-blue-600 text-white rounded p-4 text-center mt-4">
            <div className="mb-2">⚖️</div>
            <div className="text-xs mb-2">CITIS</div>
            <div className="text-xs mb-2">中国知识产权司法保护网</div>
            <div className="text-xs mb-2">Chief China</div>
            <div className="text-xs mb-2">Intellectual Property &</div>
            <div className="text-xs mb-2">Information Summit</div>
            <button className="bg-teal-400 text-white px-2 py-1 rounded text-xs">
              CLICK HERE »
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <div className="bg-white border border-gray-300 rounded">
            {/* Header */}
            <div className="bg-blue-500 text-white p-3 rounded-t flex items-center justify-between">
              <span className="font-bold">Latest Judgements</span>
              <div className="flex gap-2">
                <button className="bg-blue-600 text-white px-3 py-1 rounded text-xs">
                  📊 Share
                </button>
                <button className="bg-black text-white px-3 py-1 rounded text-xs">
                  ✗ Post
                </button>
              </div>
            </div>

            {/* Search */}
            <div className="p-4 border-b">
              <div className="flex gap-2">
                <span className="text-sm">enhanced by</span>
                <span className="text-sm font-bold text-blue-600">Google</span>
                <input
                  type="text"
                  className="flex-1 border border-gray-300 rounded px-2 py-1 text-sm"
                  placeholder="Search judgements..."
                />
                <button className="bg-gray-600 text-white px-3 py-1 rounded text-sm">
                  🔍
                </button>
              </div>
            </div>

            {/* Judgements List */}
            <div className="p-4">
              <div className="space-y-3">
                {latestJudgements.map((judgement, index) => (
                  <div key={judgement.id} className="flex gap-3 text-sm">
                    <span className="text-blue-600 font-medium">
                      {judgement.date}
                    </span>
                    <Link
                      href={judgement.link}
                      className="text-blue-600 hover:text-blue-800 underline flex-1"
                    >
                      {judgement.title}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
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
          {/* Law Dictionary */}
          <div className="bg-blue-600 text-white p-3 rounded text-center">
            <h3 className="font-bold text-sm mb-1">LAW Dictionary</h3>
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

          {/* Law College */}
          <div className="bg-blue-500 text-white p-3 rounded text-center">
            <h3 className="font-bold text-sm mb-1">LAW College</h3>
            <div className="w-12 h-8 bg-white mx-auto rounded mb-2"></div>
          </div>

          {/* Legal Tips */}
          <div className="bg-blue-600 text-white p-3 rounded text-center">
            <h3 className="font-bold text-sm mb-1">LEGAL Tips</h3>
            <div className="w-12 h-8 bg-white mx-auto rounded mb-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
