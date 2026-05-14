import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Link from "next/link";

interface CentralFormsPageProps {
  params: {
    id: string;
  };
}

export default function CentralFormsPage({ params }: CentralFormsPageProps) {
  // Define central forms data
  const centralFormsData: {
    [key: string]: {
      title: string;
      description: string;
      forms: { id: string; title: string; description: string }[];
    };
  } = {
    "1": {
      title: "Department of Animal Husbandry, Dairying & Fisheries",
      description:
        "Forms related to animal husbandry, dairy farming, and fisheries regulations in India.",
      forms: [
        {
          id: "1",
          title: "Animal Registration Form",
          description: "Registration form for livestock and animal husbandry",
        },
        {
          id: "2",
          title: "Dairy License Application",
          description: "Application form for dairy business license",
        },
        {
          id: "3",
          title: "Fisheries Permit Form",
          description: "Permit application for fishing and aquaculture",
        },
        {
          id: "4",
          title: "Veterinary Practice Registration",
          description: "Registration form for veterinary practitioners",
        },
        {
          id: "5",
          title: "Animal Feed License",
          description: "License application for animal feed manufacturing",
        },
      ],
    },
    "2": {
      title: "Department of Bio-Technology",
      description:
        "Forms for biotechnology research, development, and commercial applications.",
      forms: [
        {
          id: "1",
          title: "Biotech Research Approval",
          description: "Approval form for biotechnology research projects",
        },
        {
          id: "2",
          title: "GMO Release Application",
          description: "Application for genetically modified organism release",
        },
        {
          id: "3",
          title: "Biosafety Committee Registration",
          description:
            "Registration form for institutional biosafety committees",
        },
        {
          id: "4",
          title: "Clinical Trial Approval",
          description: "Approval form for biotechnology clinical trials",
        },
      ],
    },
    // Add more departments as needed...
  };

  const departmentData = centralFormsData[params.id];

  if (!departmentData) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto p-6">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Department Not Found</h1>
            <Link
              href="/law-library/forms"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              ← Back to Forms
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto p-6 max-w-4xl">
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
                href="/law-library/forms"
                className="hover:underline text-white/90"
              >
                Forms
              </Link>
              <span className="text-white/90">&gt;</span>
              <span className="text-white">{departmentData.title}</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white p-6 rounded shadow-sm">
          <h1 className="text-xl font-bold mb-4">{departmentData.title}</h1>
          <p className="text-gray-600 mb-6">{departmentData.description}</p>

          <div className="space-y-4">
            {departmentData.forms.map((form, index) => (
              <div key={form.id} className="border border-gray-200 rounded p-4">
                <div className="flex gap-4">
                  <span className="text-blue-600 font-medium">
                    {index + 1}.
                  </span>
                  <div className="flex-1">
                    <Link
                      href={`/law-library/forms/central/${params.id}/${form.id}`}
                      className="text-blue-600 hover:text-blue-800 underline font-medium"
                    >
                      {form.title}
                    </Link>
                    <p className="text-gray-600 text-sm mt-1">
                      {form.description}
                    </p>
                    <div className="mt-2 flex gap-2">
                      <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700">
                        Download PDF
                      </button>
                      <button className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700">
                        Fill Online
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="mt-8 pt-4 border-t">
            <Link
              href="/law-library/forms"
              className="text-blue-600 hover:text-blue-800 underline inline-flex items-center gap-1"
            >
              ← Back to Forms
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
