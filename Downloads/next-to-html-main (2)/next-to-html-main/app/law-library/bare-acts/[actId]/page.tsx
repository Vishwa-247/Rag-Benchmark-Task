import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Link from "next/link";

interface BareActDetailPageProps {
  params: {
    actId: string;
  };
}

export default function BareActDetailPage({ params }: BareActDetailPageProps) {
  // Sample act content based on the structure
  const actData: {
    [key: string]: {
      title: string;
      year: string;
      content: string;
      sections: Array<{ id: string; title: string; content: string }>;
    };
  } = {
    "aadhaar-act-2016": {
      title:
        "Aadhaar (Targeted Delivery of Financial and other Subsidies, Benefits and Services) Act",
      year: "2016",
      content: `An Act to provide for, as of right, for targeted delivery of subsidies, benefits and services, supported by the Consolidated Fund of India, to individuals residing in India by assigning them unique identity numbers, called Aadhaar numbers, and for matters connected therewith or incidental thereto.

WHEREAS the Constitution of India guarantees equality before law and equal protection of law;

AND WHEREAS it is necessary to establish the identity of individuals, who are entitled to benefits and services from the Consolidated Fund of India or the State Governments, for which expenses are incurred from the Consolidated Fund of India, as beneficiaries under the targeted delivery system in a convenient and cost-effective manner;

AND WHEREAS it is expedient to create an authority to issue easily verifiable unique identity numbers linked to the demographic and biometric information of individuals;

NOW, THEREFORE, it is hereby enacted as follows:—`,
      sections: [
        {
          id: "1",
          title: "Short title, extent and commencement",
          content: `(1) This Act may be called the Aadhaar (Targeted Delivery of Financial and other Subsidies, Benefits and Services) Act, 2016.

(2) It extends to the whole of India.

(3) It shall come into force on such date as the Central Government may, by notification in the Official Gazette, appoint.`,
        },
        {
          id: "2",
          title: "Definitions",
          content: `In this Act, unless the context otherwise requires,—

(a) "Aadhaar" means a 12 digit individual identification number issued by the Authority to any individual pursuant to this Act;

(b) "Aadhaar number holder" means an individual who has been issued an Aadhaar number;

(c) "Authority" means the Unique Identification Authority of India established under sub-section (1) of section 11;

(d) "authentication" means the process by which the Aadhaar number along with demographic information or biometric information of an individual is submitted to the Central Identities Data Repository for its verification and such Repository verifies the correctness of the information submitted;`,
        },
        {
          id: "3",
          title: "Aadhaar as evidence of identity",
          content: `Subject to the provisions of this Act, the Authority may issue Aadhaar numbers to individuals and the Aadhaar number may serve as a proof of identity of an individual, subject to authentication, wherever required.

Provided that the Aadhaar number shall not confer any right of citizenship or domicile in respect of an Aadhaar number holder.`,
        },
      ],
    },
    "advocates-act-1961": {
      title: "The Advocates Act",
      year: "1961",
      content: `An Act to amend and consolidate the law relating to legal practitioners and to provide for the constitution of Bar Councils and an All-India Bar.

WHEREAS it is expedient to amend and consolidate the law relating to legal practitioners and to provide for the constitution of Bar Councils and an All-India Bar;

NOW, THEREFORE, it is hereby enacted as follows:—`,
      sections: [
        {
          id: "1",
          title: "Short title, extent and commencement",
          content: `(1) This Act may be called the Advocates Act, 1961.

(2) It extends to the whole of India except the State of Jammu and Kashmir.

(3) It shall come into force on such date as the Central Government may, by notification in the Official Gazette, appoint.`,
        },
        {
          id: "2",
          title: "Definitions",
          content: `In this Act, unless the context otherwise requires,—

(a) "advocate" means an advocate entered in any roll under the provisions of this Act;

(b) "Bar Council" means a Bar Council constituted under this Act;

(c) "High Court" means the High Court for the territories in relation to which the Bar Council of the State is constituted;

(d) "legal practitioner" means an advocate, vakil or an attorney of any High Court, and includes a pleader;`,
        },
        {
          id: "3",
          title: "Bar Councils",
          content: `(1) As from the appointed day, there shall be constituted a Bar Council for every State.

(2) The Bar Council for each State shall be known as the Bar Council of that State.

(3) Every Bar Council shall be a body corporate having perpetual succession and a common seal with power to acquire and hold property and to contract, and may by the said name sue and be sued.`,
        },
      ],
    },
  };

  const act = actData[params.actId];

  if (!act) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto p-6">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Act Not Found</h1>
            <Link
              href="/law-library/bare-acts"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              ← Back to Bare Acts
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
                href="/law-library/bare-acts"
                className="hover:underline text-white/90"
              >
                Bare Acts
              </Link>
              <span className="text-white/90">&gt;</span>
              <span className="text-white">{act.title}</span>
            </div>
          </div>
        </div>

        {/* Content Layout */}
        <div className="flex gap-6">
          {/* Main Content */}
          <div className="flex-1 bg-white p-6 rounded shadow-sm">
            <h1 className="text-2xl font-bold mb-2">{act.title}</h1>
            <div className="text-lg text-gray-600 mb-6">({act.year})</div>

            {/* Preamble */}
            <div className="prose max-w-none mb-8">
              {act.content
                .split("\n\n")
                .map((paragraph: string, index: number) => (
                  <p
                    key={index}
                    className="mb-4 text-gray-700 leading-relaxed text-justify"
                  >
                    {paragraph}
                  </p>
                ))}
            </div>

            {/* Sections */}
            <div className="space-y-6">
              <h2 className="text-xl font-bold border-b pb-2">Sections</h2>
              {act.sections.map((section) => (
                <div
                  key={section.id}
                  className="border-l-4 border-blue-500 pl-4"
                >
                  <h3 className="font-bold text-lg mb-2">
                    Section {section.id}. {section.title}
                  </h3>
                  <div className="text-gray-700 leading-relaxed">
                    {section.content
                      .split("\n\n")
                      .map((paragraph: string, index: number) => (
                        <p key={index} className="mb-3">
                          {paragraph}
                        </p>
                      ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Download Options */}
            <div className="mt-8 pt-4 border-t">
              <div className="flex gap-4 mb-4">
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                  Download PDF
                </button>
                <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors">
                  Print
                </button>
                <button className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors">
                  Share
                </button>
              </div>

              <Link
                href="/law-library/bare-acts"
                className="text-blue-600 hover:text-blue-800 underline inline-flex items-center gap-1"
              >
                ← Back to Bare Acts List
              </Link>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="w-64 flex-shrink-0 space-y-4">
            {/* Quick Navigation */}
            <div className="bg-white p-4 rounded border">
              <h3 className="font-bold text-sm mb-3">Quick Navigation</h3>
              <div className="space-y-2 text-sm">
                {act.sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#section-${section.id}`}
                    className="block text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    Section {section.id}
                  </a>
                ))}
              </div>
            </div>

            {/* Related Acts */}
            <div className="bg-blue-600 text-white p-3 rounded">
              <h3 className="font-bold text-sm mb-2">Related Acts</h3>
              <div className="space-y-2 text-xs">
                <Link
                  href="/law-library/bare-acts/advocates-act-1961"
                  className="block hover:underline"
                >
                  Advocates Act, 1961
                </Link>
                <Link
                  href="/law-library/bare-acts/aadhaar-act-2016"
                  className="block hover:underline"
                >
                  Aadhaar Act, 2016
                </Link>
                <Link
                  href="/law-library/bare-acts/air-pollution-act-1981"
                  className="block hover:underline"
                >
                  Air Pollution Act, 1981
                </Link>
              </div>
            </div>

            {/* Law Dictionary */}
            <div className="bg-blue-500 text-white p-3 rounded text-center">
              <h3 className="font-bold text-sm mb-1">LAW Dictionary</h3>
              <div className="w-12 h-8 bg-white mx-auto rounded mb-2"></div>
            </div>

            {/* Areas of Law */}
            <div className="bg-yellow-600 text-white p-3 rounded text-center">
              <h3 className="font-bold text-sm mb-1">AREAS of Law</h3>
              <div className="w-12 h-8 bg-white mx-auto rounded mb-2"></div>
            </div>

            {/* Supreme Court Judgements */}
            <div className="bg-red-600 text-white p-3 rounded text-center">
              <h3 className="font-bold text-sm mb-1">SC Judgements</h3>
              <div className="w-12 h-8 bg-white mx-auto rounded mb-2"></div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
