import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Link from "next/link";

// Sample glossary data for different letters
const glossaryData: {
  [key: string]: Array<{ term: string; definition: string }>;
} = {
  a: [
    {
      term: "a fortiori",
      definition:
        '(eh-for-she-or-ee) prep. (Latin) for "with even stronger reason," which applies to a situation in which if one thing is true then it can be inferred that a second thing is even more certainly true. If Abe is too young to serve as administrator, then his younger brother Carl certainly is too young.',
    },
    {
      term: "a posteriori",
      definition:
        "(eh-post-ee-ri-or-ee) n. from Latin, an assumption that a true without further proof or need to prove it. It is assumed the sun will come up tomorrow. However, it has a negative side: an a priori assumption made without question on the basis that no analysis or study is necessary, can be mental laziness when the reality is not so certain.",
    },
    {
      term: "a.k.a.",
      definition:
        'prep. abbreviation for "also known as" when someone uses different initials, a nickname, a maiden or married name. Example: Anil C. Dias, a.k.a. A. C. Dias, a.k.a. "Smithy the Snoop."',
    },
    {
      term: "ab initio",
      definition:
        'prep. lawyer Latin for "from the start," as "it was legal ab initio."',
    },
    {
      term: "abandon",
      definition:
        "v. to intentionally and permanently give up, surrender, leave, desert or relinquish all interest or ownership in property, a home or other premises, a right of way, and even a spouse, family, or children. The word is often used in situations to determine whether a tenant has left his/her apartment and the property inside and does not intend to return. Abandonment of children can mean loss of parental rights if the children are left without contact and support for a year or more.",
    },
    {
      term: "abandoned property",
      definition:
        "n. property left behind (often by a tenant) intentionally and permanently when it appears that the former owner (or tenant) does not intend to come back, pick it up, or use it. One may have abandoned the property of contract rights by not doing what is required by the contract. However, an easement and other land rights are not abandoned property just because of nonuse.",
    },
    {
      term: "abandonment",
      definition:
        "n. the act of intentionally and permanently giving up, surrendering, deserting or relinquishing property, premises, a right of way, a ship, contract rights, a spouse, family, or children. The word is often used in situations to determine whether a tenant has left his/her apartment and the property inside and does not intend to return. Abandonment of children can mean loss of parental rights if the children are left without contact and support for a year or more.",
    },
  ],
  b: [
    {
      term: "bail",
      definition:
        "n. money or property put up to assure the appearance in court of a defendant in a criminal case, the payment of a judgment in a civil case, or the performance of a contract.",
    },
    {
      term: "bailee",
      definition:
        "n. a person who receives property from another as a bailment.",
    },
    {
      term: "bailment",
      definition:
        "n. the delivery of personal property by one person (bailor) to another (bailee) who holds the property for a certain purpose.",
    },
  ],
  c: [
    {
      term: "caveat",
      definition:
        'n. (kah-vee-ott) from Latin meaning "let him beware." A warning or caution.',
    },
    {
      term: "certiorari",
      definition:
        "n. (sir-she-oh-rare-ee) a writ of review issued by a higher court to a lower court.",
    },
    {
      term: "contract",
      definition:
        "n. an agreement with specific terms between two or more persons or entities in which there is a promise to do something in return for a valuable benefit.",
    },
  ],
};

export default function GlossaryLetterPage({
  params,
}: {
  params: { letter: string };
}) {
  const letter = params.letter.toLowerCase();
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const terms = glossaryData[letter] || [];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Header Section */}
      <div className="bg-gradient-to-r from-primary via-primary to-secondary text-white py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">Law Library</h1>
          <div className="flex items-center gap-2 text-sm">
            <Link href="/law-library" className="hover:underline">
              Law Library
            </Link>
            <span>&gt;</span>
            <Link href="/law-library/glossary" className="hover:underline">
              Glossary
            </Link>
            <span>&gt;</span>
            <span>Letter {letter.toUpperCase()}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm border">
          <div className="p-6 border-b">
            <h2 className="text-xl font-bold text-gray-800 text-center">
              Glossary - Letter {letter.toUpperCase()}
            </h2>
          </div>

          <div className="p-6">
            {/* Alphabet Navigation */}
            <div className="mb-8">
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {alphabet.map((alphabetLetter) => (
                  <Link
                    key={alphabetLetter}
                    href={`/law-library/glossary/${alphabetLetter.toLowerCase()}`}
                    className={`px-2 py-1 text-sm font-medium ${
                      alphabetLetter.toLowerCase() === letter
                        ? "text-blue-800 font-bold underline"
                        : "text-blue-600 hover:underline"
                    }`}
                  >
                    {alphabetLetter}
                  </Link>
                ))}
              </div>
            </div>

            {/* Terms List */}
            <div className="space-y-6">
              {terms.length > 0 ? (
                terms.map((item, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4">
                    <h3 className="font-bold text-gray-800 mb-2">
                      {item.term}
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {item.definition}
                    </p>
                  </div>
                ))
              ) : (
                <div className="text-center text-gray-500 py-8">
                  <p>No terms found for letter "{letter.toUpperCase()}"</p>
                  <p className="text-sm mt-2">
                    Please select another letter from the alphabet above.
                  </p>
                </div>
              )}
            </div>

            {/* Navigation */}
            <div className="mt-8 text-center">
              <Link
                href="/law-library/glossary"
                className="text-blue-600 hover:underline"
              >
                ← Back to Glossary Home
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
