import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Link from "next/link";

interface AgreementDetailPageProps {
  params: {
    category: string;
    id: string;
  };
}

export default function AgreementDetailPage({
  params,
}: AgreementDetailPageProps) {
  // Sample agreement content - based on the screenshot showing arbitration agreement
  const agreementContent: {
    [key: string]: { [key: string]: { title: string; content: string } };
  } = {
    "1": {
      "1": {
        title: "Agreement of Reference to Two Arbitrators",
        content: `This Agreement made at _____ the ____ day of _____ between Mr. A of the one Part and Mrs. B of the other Part residing at _____

Whereas Mr. A and Mrs. B are full brother and sister.

and Whereas the father of both A & B died intestate, on or about the _____ day of _____, leaving some moveable property in the shape of ornaments, Bank accounts, Investment and one immoveable property.

and Whereas disputes have arisen between the parties regarding their rights to and shares in the said property and also regarding partition of the said property.

and Whereas parties have agreed to refer all the disputes regarding their claims to the said property including the question of partition thereof, according to their respective rights to two arbitrators viz. Mr. X and Mr. Y this former being appointed by Mr. A and the latter by Mrs. B.

Now It Is Agreed Between the Parties Hereto As Follows:

The parties hereto refer all their disputes and claims regarding the properties left by their father the late Mr. _____ including the question of their respective shares and including affecting partition of the said properties and all such claims to the two arbitrators in the manner following.

1. The said Arbitrators shall, before entering upon the reference appoint an Umpire.

2. The Arbitrators shall direct the parties to file their respective inventories of the properties left by the said deceased, as per their respective contentions.

3. The said Arbitrators shall allow the parties to their respective claims and contentions and to file documents relied upon by them within such reasonable time as the Arbitrators may direct.

4. The said Arbitrators shall give hearing to the parties either personally or through their respective Advocates but the Arbitrators will not be bound to take any oral evidence including cross examination of any party or person.

5. The said Arbitrators shall give hearing to the parties either personally or through their respective Advocates but the Arbitrators will not be bound to take any oral evidence including cross examination of any party or person.

6. The said Arbitrators shall make their Award within a period of four months from the date of service of a signed copy of this Agreement on them by any of the parties hereto provided that the Arbitrators will have...`,
      },
    },
  };

  const agreement = agreementContent[params.category]?.[params.id];

  if (!agreement) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto p-6">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Agreement Not Found</h1>
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
            <Link
              href={`/law-library/agreements/${params.category}`}
              className="hover:underline"
            >
              Category {params.category}
            </Link>
            <span>&gt;</span>
            <span>{agreement.title}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm border">
            <div className="p-6 border-b">
              <div className="flex justify-between items-start">
                <h2 className="text-xl font-bold text-gray-800">
                  {agreement.title}
                </h2>
                <button className="bg-red-600 text-white px-4 py-2 rounded text-sm hover:bg-red-700">
                  Download Agreement
                </button>
              </div>
            </div>

            <div className="p-8">
              <div className="prose max-w-none">
                {agreement.content
                  .split("\n\n")
                  .map((paragraph: string, index: number) => (
                    <p
                      key={index}
                      className="mb-4 text-gray-700 leading-relaxed"
                    >
                      {paragraph}
                    </p>
                  ))}
              </div>

              {/* Download Section */}
              <div className="mt-8 pt-4 border-t bg-gray-50 p-4 rounded">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-lg">
                      Download this Agreement
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Get the complete legal document in PDF format
                    </p>
                  </div>
                  <button className="bg-red-600 text-white px-6 py-3 rounded hover:bg-red-700 font-medium">
                    Download Agreement
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
