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
    <div className="container mx-auto p-6 max-w-6xl">
      {/* Header Section */}
      <div className="mb-8">
        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-4 rounded-lg mb-6">
          <h1 className="text-2xl font-bold text-white">Law Library</h1>
        </div>

        <div className="bg-gray-100 p-4 rounded border">
          <h2 className="text-xl font-semibold text-center mb-4">Forms</h2>
        </div>
      </div>

      {/* Content Layout */}
      <div className="flex gap-6">
        {/* Left Sidebar */}
        <div className="w-64 flex-shrink-0 space-y-4">
          {/* Central & State Forms */}
          <div className="bg-gray-700 text-white p-3 rounded">
            <h3 className="font-bold text-sm mb-2">📋 Central & State Forms</h3>
            <div className="space-y-1 text-xs">
              <div>Central Forms</div>
              <div>State Forms</div>
            </div>
          </div>

          {/* How Do I Obtain */}
          <div className="bg-gray-700 text-white p-3 rounded">
            <h3 className="font-bold text-sm mb-2">📋 How Do I Obtain</h3>
            <div className="space-y-1 text-xs">
              <div>Birth Certificate</div>
              <div>Death Certificate</div>
              <div>Scheduled Tribes Certificate</div>
              <div>Domicile Certificate</div>
              <div>Driving Licence</div>
              <div>Marriage Certificate</div>
              <div>Death Certificate</div>
            </div>
          </div>

          {/* Apply For */}
          <div className="bg-gray-700 text-white p-3 rounded">
            <h3 className="font-bold text-sm mb-2">📋 Apply For</h3>
            <div className="space-y-1 text-xs">
              <div>Permanent Account Number</div>
              <div>Tax Deduction Account Number</div>
              <div>Ration Card</div>
              <div>Enrolment in Electoral Roll</div>
            </div>
          </div>

          {/* Registration Forms for */}
          <div className="bg-gray-700 text-white p-3 rounded">
            <h3 className="font-bold text-sm mb-2">
              📋 Registration Forms for
            </h3>
            <div className="space-y-1 text-xs">
              <div>Land</div>
              <div>Vehicle</div>
              <div>Company</div>
              <div>Partnership Firm</div>
              <div>Club</div>
              <div>Trust</div>
              <div>Employer</div>
            </div>
          </div>

          {/* I.P Forms */}
          <div className="bg-gray-700 text-white p-3 rounded">
            <h3 className="font-bold text-sm mb-2">📋 I.P Forms</h3>
            <div className="space-y-1 text-xs">
              <div>Trademark</div>
              <div>Copyright</div>
              <div>Patent</div>
              <div>Design</div>
            </div>
          </div>

          {/* Passport & Visa Forms */}
          <div className="bg-gray-700 text-white p-3 rounded">
            <h3 className="font-bold text-sm mb-2">📋 Passport & Visa Forms</h3>
            <div className="space-y-1 text-xs">
              <div>Passport</div>
              <div>Visa</div>
            </div>
          </div>

          {/* Tax Forms */}
          <div className="bg-gray-700 text-white p-3 rounded">
            <h3 className="font-bold text-sm mb-2">📋 Tax Forms</h3>
            <div className="space-y-1 text-xs">
              <div>Income Tax</div>
              <div>Service Tax</div>
              <div>Wealth Tax</div>
            </div>
          </div>

          {/* Forms for */}
          <div className="bg-gray-700 text-white p-3 rounded">
            <h3 className="font-bold text-sm mb-2">📋 Forms for</h3>
            <div className="space-y-1 text-xs">
              <div>Company Law</div>
              <div>Labour Law</div>
              <div>Property Law</div>
              <div>Export & Import</div>
              <div>Industrial Policy and Promotion</div>
              <div>RBI</div>
              <div>SEBI</div>
              <div>IRDA</div>
              <div>NEPZ</div>
              <div>NBFC</div>
              <div>Notary</div>
              <div>Delhi High Court</div>
              <div>Delhi Rent Control</div>
            </div>
          </div>

          {/* Rules */}
          <div className="bg-gray-700 text-white p-3 rounded">
            <h3 className="font-bold text-sm mb-2">📋 Rules</h3>
            <div className="space-y-1 text-xs">
              <div>Apprenticeship</div>
              <div>Contract Labour</div>
              <div>Child Labour</div>
              <div>Dangerous Machines</div>
              <div>Employee State Insurance(Central)</div>
              <div>Employee State Insurance(General)</div>
              <div>Employees Insurance Scheme</div>
              <div>Employees Provident Fund</div>
              <div>Employment Exchanges</div>
              <div>Environment (Protection)</div>
              <div>Equal Remuneration</div>
              <div>Industrial Employment</div>
              <div>Minimum Wages</div>
              <div>Payment of Gratuity</div>
              <div>The Industrial Disputes</div>
              <div>Workmen's Compensation</div>
            </div>
          </div>

          {/* Affidavits & Notices */}
          <div className="bg-gray-700 text-white p-3 rounded">
            <h3 className="font-bold text-sm mb-2">📋 Affidavits & Notices</h3>
            <div className="space-y-1 text-xs">
              <div>Affidavits</div>
              <div>Notices</div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-white">
          <div className="border border-gray-300 rounded">
            <div className="bg-gray-600 text-white p-2 text-center font-bold">
              Central Forms
            </div>
            <div className="p-4">
              <div className="space-y-2">
                {centralForms.map((form, index) => (
                  <div key={form.id} className="flex gap-4">
                    <span className="text-blue-600 font-medium">
                      {index + 1}.
                    </span>
                    <Link
                      href={`/law-library/forms/central/${form.id}`}
                      className="text-blue-600 hover:text-blue-800 underline flex-1"
                    >
                      {form.title}
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
          {/* Your opportunities will Broaden */}
          <div className="bg-blue-500 text-white p-4 rounded text-center">
            <h3 className="font-bold text-sm mb-2">Your opportunities will</h3>
            <div className="text-2xl font-script mb-2">Broaden</div>
            <div className="text-xs mb-3">Your knowledge will</div>
            <div className="text-2xl font-script mb-3">Expand</div>
            <div className="text-xs mb-3">The question now is:</div>
            <div className="text-lg font-bold mb-3">
              How to choose the right College?
            </div>
            <button className="bg-white text-blue-500 px-3 py-1 rounded text-xs font-bold">
              search law college
            </button>
          </div>

          {/* Do It Yourself Legal Documents */}
          <div className="bg-red-800 text-white p-4 rounded">
            <div className="text-right mb-2">
              <span className="bg-red-600 px-2 py-1 rounded text-xs">🔧</span>
            </div>
            <h3 className="font-bold text-lg mb-3">Do It Yourself</h3>
            <div className="text-sm mb-3">Legal Documents</div>

            <div className="space-y-1 text-xs">
              <div>• Sale Deed</div>
              <div>• Joint Ventures</div>
              <div>• Create a Will</div>
              <div>• Adoption Deed</div>
              <div>• Hire Agreement</div>
              <div>• Mortgage Deed</div>
              <div>• Franchise Agreement</div>
              <div>• Loan Agreement</div>
              <div>• Partnership Deed</div>
              <div>• Employment Contract</div>
              <div>• Family Settlement</div>
            </div>

            <div className="mt-3 text-center">
              <button className="bg-yellow-500 text-black px-3 py-1 rounded text-xs font-bold">
                View all sample documents
              </button>
            </div>
          </div>

          {/* Power of Attorney Image */}
          <div className="bg-yellow-600 rounded p-2">
            <div className="bg-white rounded p-4 text-center">
              <div className="text-xs text-gray-600 mb-2">EXPLORE A WORLD</div>
              <div className="text-xs text-gray-600 mb-2">
                OF POSSIBILITIES!
              </div>
              <div className="w-full h-20 bg-yellow-100 rounded mb-2 flex items-center justify-center">
                <span className="text-xs">⚖️ Power of Attorney</span>
              </div>
              <div className="text-xs text-gray-600 mb-2">
                Finding a Lawyer can be very strenuous. We will help you find a
                qualified advocate.
              </div>
              <div className="bg-yellow-600 text-white text-xs p-2 rounded">
                <div className="font-bold mb-1">3 Easy Steps</div>
                <div className="text-xs">
                  <div>1️⃣ Present your Case</div>
                  <div>2️⃣ View Advocate responses to your case</div>
                  <div>3️⃣ Select your Advocate</div>
                </div>
                <div className="mt-2 text-xs">Easy, Confidential & Free!</div>
                <div className="mt-2 bg-white text-black px-2 py-1 rounded text-xs">
                  AdvocateKhoj
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
