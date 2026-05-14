import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Link from "next/link";

interface RuleDetailPageProps {
  params: {
    ruleId: string;
  };
}

export default function RuleDetailPage({ params }: RuleDetailPageProps) {
  // Sample rule content based on the structure shown in screenshots
  const ruleData: {
    [key: string]: {
      title: string;
      year: string;
      content: string;
      sections: Array<{ id: string; title: string; content: string }>;
    };
  } = {
    "aadhaar-authentication-good-governance-2020": {
      title:
        "The Aadhaar Authentication for Good Governance (Social Welfare, Innovation, Knowledge) Rules",
      year: "2020",
      content: `In exercise of the powers conferred by sub-section (1) of section 53 read with clause (2) of section 53 of the Aadhaar (Targeted Delivery of Financial and Other Subsidies, Benefits and Services) Act, 2016 (18 of 2016), the Central Government, in consultation with Unique Identification Authority of India, hereby makes the following rules, namely:-

1. Published in the Gazette of India, Extraordinary, Part II, Section 4, vide Notification No. G.S.R.490(E), dated 6.8.2020 and amended vide Notification No. G.S.R. 86(E), dated 31.1.2025 (w.e.f. 31.1.2025).`,
      sections: [
        {
          id: "1",
          title: "Short title and commencement",
          content: `(1) These rules may be called the Aadhaar Authentication for Good Governance (Social Welfare, Innovation, Knowledge) Rules, 2020.

(2) They shall come into force on the date of their publication in the Official Gazette.`,
        },
        {
          id: "2",
          title: "Definitions",
          content: `In these rules, unless the context otherwise requires,-

(a) "Act" means the Aadhaar (Targeted Delivery of Financial and other Subsidies, Benefits and Services) Act, 2016;

(b) "Aadhaar authentication" means the process by which the Aadhaar number, along with demographic information or biometric information of an individual is submitted to the Central Identities Data Repository for its verification;

(c) "Authentication User Agency" means an entity that submits authentication queries to CIDR for the purpose of Aadhaar authentication of Aadhaar number holders;`,
        },
        {
          id: "3",
          title: "Purposes for Aadhaar authentication",
          content: `An Authentication User Agency may perform Aadhaar authentication for the following purposes:

(a) For the delivery of any subsidy, benefit or service or any combination thereof for which the expenditure is incurred from the Consolidated Fund of India or of a State;

(b) For purposes related to social welfare, innovation and knowledge as may be specified by the Central Government by notification in the Official Gazette.`,
        },
        {
          id: "4",
          title: "Preparation of the proposal",
          content: `(1) The proposal for conducting Aadhaar authentication shall be prepared by the requesting entity in consultation with the concerned Ministry or Department.

(2) The proposal shall contain detailed justification including:
- the necessity for conducting Aadhaar authentication;
- the benefits to be accrued;
- the safeguards proposed to be implemented.`,
        },
        {
          id: "5",
          title: "Examination of proposal",
          content: `The proposal received under rule 4 shall be examined by the Central Government taking into consideration the following factors:

(a) whether the proposed authentication serves the purpose of good governance;
(b) whether adequate safeguards are in place for protection of Aadhaar number and biometric information;
(c) whether the benefits substantially outweigh the harm that may be caused to the individual.`,
        },
      ],
    },
    "air-prevention-control-pollution-1982": {
      title: "Air (Prevention and Control of Pollution) Rules",
      year: "1982",
      content: `In exercise of the powers conferred by sections 53 and 54 of the Air (Prevention and Control of Pollution) Act, 1981 (14 of 1981), the Central Government hereby makes the following rules, namely:—`,
      sections: [
        {
          id: "1",
          title: "Short title and commencement",
          content: `(1) These rules may be called the Air (Prevention and Control of Pollution) Rules, 1982.

(2) They shall come into force on the date of their publication in the Official Gazette.`,
        },
        {
          id: "2",
          title: "Definitions",
          content: `In these rules, unless the context otherwise requires,—

(a) "Act" means the Air (Prevention and Control of Pollution) Act, 1981;

(b) "air pollutant" means any solid, liquid or gaseous substance present in the atmosphere in such concentration as may be or tend to be injurious to human beings or other living creatures or plants or property or environment;

(c) "emission" means any solid, liquid or gaseous substance discharged from any source into the atmosphere;`,
        },
        {
          id: "3",
          title: "Application for consent",
          content: `(1) Every application for consent under section 21 of the Act shall be made to the State Board in such form as may be specified by the State Board.

(2) Every such application shall be accompanied by such plans, specifications and such other particulars as the State Board may require.`,
        },
      ],
    },
  };

  const rule = ruleData[params.ruleId];

  if (!rule) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto p-6">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Rule Not Found</h1>
            <Link
              href="/law-library/rules"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              ← Back to Rules
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
                href="/law-library/rules"
                className="hover:underline text-white/90"
              >
                Rules
              </Link>
              <span className="text-white/90">&gt;</span>
              <span className="text-white">{rule.title}</span>
            </div>
          </div>
        </div>

        {/* Content Layout */}
        <div className="flex gap-6">
          {/* Main Content */}
          <div className="flex-1 bg-white p-6 rounded shadow-sm">
            <h1 className="text-xl font-bold mb-2">{rule.title}</h1>
            <div className="text-lg text-gray-600 mb-6">({rule.year})</div>
            <div className="text-sm text-gray-500 mb-6">
              (Updated on on 1.4.2025)
            </div>

            {/* Content */}
            <div className="prose max-w-none mb-8">
              {rule.content
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

            {/* Contents Table */}
            <div className="mb-8">
              <div className="border border-gray-300">
                <div className="bg-gray-100 p-2 border-b border-gray-300">
                  <strong>Contents</strong>
                </div>
                <div className="bg-gray-100 p-2 border-b border-gray-300">
                  <div className="flex">
                    <div className="w-20 font-bold">Sections</div>
                    <div className="flex-1 font-bold">Particulars</div>
                  </div>
                </div>
                {rule.sections.map((section) => (
                  <div
                    key={section.id}
                    className="p-2 border-b border-gray-300 hover:bg-gray-50"
                  >
                    <div className="flex">
                      <div className="w-20 text-center">{section.id}.</div>
                      <div className="flex-1">
                        <Link
                          href={`#section-${section.id}`}
                          className="text-blue-600 hover:text-blue-800 hover:underline"
                        >
                          {section.title}
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sections */}
            <div className="space-y-6">
              {rule.sections.map((section) => (
                <div
                  key={section.id}
                  id={`section-${section.id}`}
                  className="border-l-4 border-blue-500 pl-4"
                >
                  <h3 className="font-bold text-lg mb-2">
                    {section.id}. {section.title}
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

            {/* Navigation */}
            <div className="mt-8 pt-4 border-t">
              <div className="flex justify-between items-center">
                <Link
                  href="/law-library/rules"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  ← Back
                </Link>

                <div className="flex gap-4">
                  <Link
                    href="#"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    Index
                  </Link>
                  <Link
                    href="#"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    Next →
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="w-64 flex-shrink-0 space-y-4">
            {/* LEGAL Tips */}
            <div className="relative">
              <div className="absolute top-0 right-0 bg-orange-500 text-white p-2 rounded-l text-xs font-bold z-10">
                LEGAL
              </div>
              <div className="bg-gray-800 text-white p-4 rounded">
                <h3 className="text-2xl font-bold mb-2">Tips</h3>
                <div className="text-xs text-gray-300">
                  (Updated on on 1.4.2025)
                </div>
                <div className="h-16 bg-orange-500 rounded mt-3"></div>
              </div>
            </div>

            {/* LAW College */}
            <div className="bg-blue-600 text-white p-4 rounded text-center">
              <h3 className="text-lg font-bold mb-2">LAW</h3>
              <h4 className="text-xl font-bold mb-3">College</h4>
              <div className="h-16 bg-white rounded mx-auto mb-2 flex items-center justify-center">
                <div className="w-12 h-8 bg-blue-200 rounded"></div>
              </div>
            </div>

            {/* SEARCH Judgements */}
            <div className="bg-red-900 text-white p-4 rounded text-center">
              <h3 className="text-lg font-bold mb-2">SEARCH</h3>
              <h4 className="text-xl font-bold mb-3">Judgements</h4>
              <div className="h-16 bg-white rounded mx-auto mb-2 flex items-center justify-center">
                <div className="w-12 h-8 bg-red-200 rounded"></div>
              </div>
            </div>

            {/* LAW Dictionary */}
            <div className="bg-blue-700 text-white p-4 rounded text-center">
              <h3 className="text-lg font-bold mb-2">LAW</h3>
              <h4 className="text-xl font-bold mb-3">Dictionary</h4>
              <div className="h-16 bg-white rounded mx-auto mb-2 flex items-center justify-center">
                <div className="w-12 h-8 bg-blue-200 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
