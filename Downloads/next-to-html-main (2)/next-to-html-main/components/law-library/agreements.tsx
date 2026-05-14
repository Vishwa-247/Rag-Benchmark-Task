import Link from "next/link";

export function Agreements() {
  const agreementCategories = [
    { id: "1", title: "Arbitration", count: 20 },
    { id: "2", title: "Banking", count: 15 },
    { id: "3", title: "Bonds", count: 12 },
    { id: "4", title: "Business", count: 25 },
    { id: "5", title: "Civil Procedure Code", count: 18 },
    { id: "6", title: "Company Law", count: 30 },
    { id: "7", title: "Compromise and family settlements", count: 14 },
    { id: "8", title: "Consumer Law", count: 16 },
    { id: "9", title: "Contract Law", count: 22 },
    { id: "10", title: "Criminal Law", count: 19 },
    {
      id: "11",
      title: "Double Taxation Agreements with Various Countries",
      count: 8,
    },
    { id: "12", title: "Employment Agreements", count: 17 },
    { id: "13", title: "Family Law", count: 21 },
    { id: "14", title: "Foreign collaboration", count: 11 },
    { id: "15", title: "Gift", count: 9 },
    { id: "16", title: "Hire Purchases", count: 13 },
    { id: "17", title: "Indemnity", count: 10 },
    { id: "18", title: "Intellectual Property Rights", count: 24 },
    { id: "19", title: "Labour Law", count: 26 },
    { id: "20", title: "Lease, license and lease financing", count: 28 },
    { id: "21", title: "Mortgage and pledge", count: 15 },
    { id: "22", title: "Partition", count: 12 },
    { id: "23", title: "Partnership", count: 18 },
    { id: "24", title: "Power of attorney", count: 16 },
    { id: "25", title: "Sale", count: 23 },
    { id: "26", title: "Shipping Agreements", count: 11 },
    { id: "27", title: "Trust Agreements", count: 14 },
    { id: "28", title: "Will", count: 19 },
    { id: "29", title: "Miscellaneous Agreements", count: 31 },
  ];

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
            <span>Agreements</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm border">
            <div className="p-6 border-b">
              <h2 className="text-xl font-bold text-gray-800">Agreements</h2>
            </div>

            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {agreementCategories.map((category, index) => (
                  <div key={category.id} className="flex gap-4 py-2">
                    <span className="text-blue-600 font-medium w-8">
                      {index + 1}.
                    </span>
                    <div className="flex-1">
                      <Link
                        href={`/law-library/agreements/${category.id}`}
                        className="text-blue-600 hover:text-blue-800 hover:underline text-sm"
                      >
                        {category.title}
                      </Link>
                      <span className="text-gray-500 text-xs ml-2">
                        ({category.count})
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
