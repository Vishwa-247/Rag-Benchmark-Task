"use client";

import Link from "next/link";

// Sample glossary terms based on the screenshot
const glossaryTerms = [
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
];

export default function Glossary() {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

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
            <span>Glossary</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm border">
            <div className="p-6 border-b">
              <h2 className="text-xl font-bold text-gray-800">Glossary</h2>
            </div>

            <div className="p-8">
              {/* Alphabet Navigation */}
              <div className="mb-8">
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {alphabet.map((letter) => (
                    <Link
                      key={letter}
                      href={`/law-library/glossary/${letter.toLowerCase()}`}
                      className="text-blue-600 hover:underline px-2 py-1 text-sm font-medium"
                    >
                      {letter}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Terms List */}
              <div className="space-y-6">
                {glossaryTerms.map((item, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4">
                    <h3 className="font-bold text-gray-800 mb-2">
                      {item.term}
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {item.definition}
                    </p>
                  </div>
                ))}
              </div>

              {/* Load More / Pagination */}
              <div className="mt-8 text-center">
                <p className="text-gray-600 text-sm">
                  Showing terms starting with "A" - Use the alphabet navigation
                  above to browse other letters
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
