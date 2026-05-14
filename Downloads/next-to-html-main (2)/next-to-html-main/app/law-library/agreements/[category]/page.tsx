import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Link from "next/link";

interface AgreementCategoryPageProps {
  params: {
    category: string;
  };
}

export default function AgreementCategoryPage({
  params,
}: AgreementCategoryPageProps) {
  // Define agreement categories and their content
  const agreementData: {
    [key: string]: {
      title: string;
      agreements: { id: string; title: string }[];
    };
  } = {
    "1": {
      title: "Arbitration",
      agreements: [
        { id: "1", title: "Agreement of reference to two arbitrators" },
        { id: "2", title: "Agreement of reference to a common arbitrator" },
        { id: "3", title: "Arbitration agreement between three partners" },
        { id: "4", title: "Agreement for reference to three arbitrators" },
        {
          id: "5",
          title: "Appointment of sole arbitrator on default of other party",
        },
        { id: "6", title: "Notice of revocation of agreement to arbitrate" },
        { id: "7", title: "Notice of revocation to an arbitrator" },
        { id: "8", title: "Award by an arbitral tribunal" },
        { id: "9", title: "Award (made on reference by court)" },
        {
          id: "10",
          title: "Form of agreement for reference to two arbitrators",
        },
        { id: "11", title: "Arbitration agreement among members of HUF" },
        {
          id: "12",
          title: "Form of agreement for reference to three arbitrators",
        },
        {
          id: "13",
          title: "Form of agreement to refer the dispute to one arbitrator",
        },
        { id: "14", title: "Agreement of reference between members of HUF" },
        { id: "15", title: "Notice by arbitrator" },
        { id: "16", title: "Agreement to refer dispute to one arbitrator" },
        { id: "17", title: "Agreement for reference to two arbitrators" },
        {
          id: "18",
          title: "Agreement for reference to arbitration between partners",
        },
        { id: "19", title: "Form of arbitration clause in an agreement" },
        { id: "20", title: "Notice to arbitrator" },
      ],
    },
    "2": {
      title: "Banking",
      agreements: [
        { id: "1", title: "Bank loan agreement" },
        { id: "2", title: "Mortgage agreement with bank" },
        { id: "3", title: "Letter of credit agreement" },
        { id: "4", title: "Bank guarantee agreement" },
        { id: "5", title: "Overdraft facility agreement" },
      ],
    },
    // Add more categories as needed...
  };

  const categoryData = agreementData[params.category];

  if (!categoryData) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto p-6">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Category Not Found</h1>
            <Link
              href="/law-library/agreements"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              ← Back to Agreements
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Header Section */}
      <div className="bg-gradient-to-r from-primary via-primary to-secondary text-white py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">Law Library</h1>
          <div className="flex items-center gap-2">
            <Link href="/law-library" className="hover:underline">
              Law Library
            </Link>
            <span>&gt;</span>
            <Link href="/law-library/agreements" className="hover:underline">
              Agreements
            </Link>
            <span>&gt;</span>
            <span>{categoryData.title}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm border">
            <div className="p-6 border-b">
              <h2 className="text-xl font-bold text-gray-800">
                {params.category}. {categoryData.title}
              </h2>
            </div>

            <div className="p-8">
              <div className="space-y-2">
                {categoryData.agreements.map((agreement, index) => (
                  <div key={agreement.id} className="flex gap-4 py-2">
                    <span className="text-blue-600 font-medium w-8">
                      {index + 1}.
                    </span>
                    <Link
                      href={`/law-library/agreements/${params.category}/${agreement.id}`}
                      className="text-blue-600 hover:text-blue-800 hover:underline flex-1 text-sm"
                    >
                      {agreement.title}
                    </Link>
                  </div>
                ))}
              </div>

              {/* Navigation */}
              <div className="mt-8 pt-4 border-t">
                <Link
                  href="/law-library/agreements"
                  className="text-blue-600 hover:text-blue-800 underline inline-flex items-center gap-1"
                >
                  ← Back to Agreements
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
