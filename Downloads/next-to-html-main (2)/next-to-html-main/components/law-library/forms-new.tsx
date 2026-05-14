import Link from "next/link";

export function Forms() {
  const centralForms = [
    { id: "1", title: "Department of Animal Husbandry, Dairying & Fisheries" },
    { id: "2", title: "Department of Bio-Technology" },
    { id: "3", title: "Department of Scientific and Industrial Research" },
    { id: "4", title: "Ministry of Agriculture" },
    { id: "5", title: "Ministry of Commerce and Industry" },
    { id: "6", title: "Ministry of Communications and Information Technology" },
    {
      id: "7",
      title: "Ministry of Consumer Affairs, Food and Public Distribution",
    },
    { id: "8", title: "Ministry of Corporate Affairs" },
    { id: "9", title: "Ministry of Defence" },
    { id: "10", title: "Ministry of Environment and Forests" },
    { id: "11", title: "Ministry of External Affairs" },
    { id: "12", title: "Ministry of Finance" },
    { id: "13", title: "Ministry of Health and Family welfare" },
    { id: "14", title: "Ministry of Home Affairs" },
    { id: "15", title: "Ministry of Human Resource Development" },
    { id: "16", title: "Ministry of Information and Broadcasting" },
    { id: "17", title: "Ministry of Law and Justice" },
    { id: "18", title: "Ministry of Labour and Employment" },
    { id: "19", title: "Ministry of New & Renewable Energy" },
    { id: "20", title: "Ministry of Personnel, PG and Pensions" },
    { id: "21", title: "Ministry of Science and Technology" },
    { id: "22", title: "Ministry of Social Justice and Empowerment" },
    { id: "23", title: "Ministry of Statistics and Programme Implementation" },
    { id: "24", title: "Ministry of Tribal Affairs" },
    { id: "25", title: "Ministry of Youth Affairs and Sports" },
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
            <span>Forms</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm border">
            <div className="p-6 border-b">
              <h2 className="text-xl font-bold text-gray-800">Central Forms</h2>
            </div>

            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {centralForms.map((form, index) => (
                  <div key={form.id} className="flex gap-4 py-2">
                    <span className="text-blue-600 font-medium w-8">
                      {index + 1}.
                    </span>
                    <div className="flex-1">
                      <Link
                        href={`/law-library/forms/central/${form.id}`}
                        className="text-blue-600 hover:text-blue-800 hover:underline text-sm"
                      >
                        {form.title}
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Quick Access Categories
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-medium text-blue-800 mb-2">
                      📋 Certificates
                    </h4>
                    <ul className="space-y-1 text-blue-600">
                      <li>Birth Certificate</li>
                      <li>Death Certificate</li>
                      <li>Marriage Certificate</li>
                      <li>Domicile Certificate</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-medium text-green-800 mb-2">
                      📋 Applications
                    </h4>
                    <ul className="space-y-1 text-green-600">
                      <li>PAN Card</li>
                      <li>TAN Number</li>
                      <li>Ration Card</li>
                      <li>Voter ID</li>
                    </ul>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-medium text-purple-800 mb-2">
                      📋 Registrations
                    </h4>
                    <ul className="space-y-1 text-purple-600">
                      <li>Land Registration</li>
                      <li>Vehicle Registration</li>
                      <li>Company Registration</li>
                      <li>Partnership Firm</li>
                    </ul>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h4 className="font-medium text-orange-800 mb-2">
                      📋 Legal Forms
                    </h4>
                    <ul className="space-y-1 text-orange-600">
                      <li>Affidavit Forms</li>
                      <li>Court Forms</li>
                      <li>Notice Forms</li>
                      <li>Petition Forms</li>
                    </ul>
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
