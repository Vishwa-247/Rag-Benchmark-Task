import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Link from "next/link";

interface JudgementDetailPageProps {
  params: {
    id: string;
  };
}

export default function JudgementDetailPage({
  params,
}: JudgementDetailPageProps) {
  // Extended judgement data based on the screenshot
  const judgementData: {
    [key: string]: {
      title: string;
      caseNumber: string;
      content: string;
      judges: string;
      date: string;
    };
  } = {
    "19424": {
      title:
        "Prakash Asphallings and Toll Highways (India) Ltd. Vs. Mandeepa Enterprises and Ors.",
      caseNumber:
        "[Civil Appeal No. 11418 of 2025 arising out of SLP (Civil) No. 12510 of 2024]",
      judges: "Ujjal Bhuyan, J.",
      date: "12/09/2025",
      content: `1. This civil appeal is directed against the judgment and order dated 02.02.2024 passed by a Division Bench of the High Court at Calcutta (High Court) in MAT No. 523 of 2023.

2. Be it stated that MAT No. 523 of 2024 was filed by the respondent No. 1 as an Intra-court appeal against the final order dated 23.01.2024 issued by a learned Single Judge of the High Court dismissing the writ petition, WP No. 2901 of 2023, filed by respondent No. 1.

3. Respondent No. 1 had filed the aforesaid writ petition assailing the action of respondent Nos. 2, 3 and 4 (State of West Bengal and Ors.) refusing to treat respondent No. 1 as the highest bidder by permitting it to rectify its financial bid after the tendering process was complete.

4. After observing that there was no provision in the tender document permitting amendment of the financial bid after the technical process was over, the learned Single Judge dismissed the writ petition. Aggrieved by such dismissal, respondent No. 1 preferred an intra-court appeal which was registered as MAT No. 523 of 2024.

5. According to the Division Bench, the error in quoting the figure by respondent No. 1 was inadvertent; instead of quoting the price for the entire contract, respondent No. 1 had promptly sought for correction of the error immediately after reopening of the financial bid.

6. The Division Bench further observed that respondent No. 1 had acted in good faith. However, the Division Bench was of the view that an opportunity should be granted by the tendering authority to the other bidders as well to match the price of respondent No. 1 and thereafter to take a final decision with regard to the award of contract.

7. It is this judgment and order which is under impugment in the present proceeding. The tender was floated for "Construction of ROB at Sector-V, New Town on RUF collection from commercial vehicles (non-passengers) at designated locations on few roads in the State of West Bengal."

8. The tender evaluation was carried out by a five-member screening committee comprising senior officials of the Public Works Department. Upon careful consideration of the facts and circumstances, this Court is of the view that the Division Bench erred in directing the State to provide an opportunity to other bidders to match the corrected price quoted by respondent No. 1.

9. The tender conditions clearly stipulated that no amendments or corrections would be permitted after the submission of financial bids. This principle is fundamental to maintaining the integrity of the tendering process.

10. Accordingly, this appeal is allowed and the order passed by the Division Bench is set aside.`,
    },
    "19425": {
      title: "Union of India Vs. ABC Pvt. Ltd.",
      caseNumber: "[Civil Appeal No. 11419 of 2025]",
      judges: "Dr. Dhananjaya Y. Chandrachud, CJI",
      date: "11/09/2025",
      content: `1. The present appeal challenges the judgment dated 15.03.2024 passed by the High Court of Delhi in Writ Petition No. 1234 of 2023.

2. The dispute arose from the cancellation of a government contract awarded to the respondent company for the supply of medical equipment to various government hospitals.

3. The appellant Union of India contends that the contract was rightfully cancelled due to the respondent's failure to meet the delivery deadlines and quality specifications as stipulated in the agreement.

4. The respondent, on the other hand, argued before the High Court that the delay was caused by circumstances beyond their control, including the global supply chain disruptions during the COVID-19 pandemic.

5. The High Court, while acknowledging the exceptional circumstances, held that the Union of India should have granted reasonable extensions considering the force majeure situations.

6. However, upon careful examination of the contract terms and the conduct of parties, this Court finds that the respondent failed to invoke the force majeure clause within the stipulated time frame.

7. Moreover, the quality issues raised by the medical authorities were genuine concerns affecting patient safety and could not be overlooked.

8. In view of the above, the appeal is allowed and the order of the High Court is set aside.`,
    },
    "19426": {
      title: "State of Maharashtra Vs. Rajesh Kumar Singh",
      caseNumber: "[Criminal Appeal No. 2156 of 2025]",
      judges: "Sanjiv Khanna, J. & Dipankar Datta, J.",
      date: "10/09/2025",
      content: `1. This criminal appeal arises out of the judgment dated 20.04.2024 passed by the High Court of Bombay in Criminal Appeal No. 456 of 2023.

2. The respondent was convicted under Section 302 of the Indian Penal Code for the murder of his neighbor and was sentenced to life imprisonment by the Trial Court.

3. The High Court, in appeal, acquitted the respondent primarily on the ground that the prosecution failed to establish the motive for the crime and that the evidence was circumstantial in nature.

4. The appellant State contends that the High Court erred in its appreciation of evidence and that the chain of circumstances was complete and pointed towards the guilt of the accused.

5. The prosecution case was based on the testimony of eyewitnesses, recovery of the murder weapon, and the conduct of the accused immediately after the incident.

6. Upon examining the evidence on record, this Court finds that the eyewitness accounts were consistent and corroborated by other evidence on record.

7. The recovery of the blood-stained weapon from the possession of the accused, coupled with the forensic evidence, creates a strong case against the respondent.

8. The High Court's reasoning regarding the absence of motive is not sustainable as motive, though relevant, is not an essential ingredient to prove guilt in a case based on direct evidence.

9. Accordingly, the appeal is allowed, the order of acquittal is set aside, and the conviction and sentence imposed by the Trial Court is restored.`,
    },
    "19427": {
      title: "Bharti Airtel Ltd. Vs. Telecom Regulatory Authority of India",
      caseNumber: "[Civil Appeal No. 11420 of 2025]",
      judges: "B.R. Gavai, J. & Sandeep Mehta, J.",
      date: "09/09/2025",
      content: `1. This appeal is filed against the order dated 28.02.2024 passed by the Telecom Regulatory Authority of India (TRAI) imposing a penalty of Rs. 50 crores on the appellant for alleged violation of quality of service parameters.

2. The appellant challenges the said order on multiple grounds including procedural impropriety, lack of sufficient evidence, and disproportionate penalty.

3. TRAI had conducted an audit of the appellant's network performance and found deficiencies in call drop rates and data speed in certain circles.

4. The appellant contends that the performance issues were temporary and caused by unprecedented network congestion during the pandemic period.

5. Upon examination of the evidence and hearing both parties, this Court finds that while there were indeed performance issues, the penalty imposed appears disproportionate.

6. The Court directs TRAI to reconsider the penalty amount taking into account the exceptional circumstances that prevailed during the relevant period.

7. Accordingly, the matter is remanded back to TRAI for fresh consideration of the penalty amount.`,
    },
  };

  const judgement = judgementData[params.id];

  if (!judgement) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto p-6">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Judgement Not Found</h1>
            <Link
              href="/law-library/judgements"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              ← Back to Judgements
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
                href="/law-library/judgements"
                className="hover:underline text-white/90"
              >
                Supreme Court Judgements
              </Link>
              <span className="text-white/90">&gt;</span>
              <span className="text-white">Announcement</span>
            </div>
          </div>
        </div>

        {/* Content Layout */}
        <div className="flex gap-6">
          {/* Left Sidebar - Year Navigation */}
          <div className="w-64 flex-shrink-0 space-y-2">
            <div className="bg-green-600 text-white rounded">
              <div className="bg-green-700 p-2 text-center font-bold text-sm rounded-t">
                📅 2020 - 2025
              </div>
              <div className="p-2 space-y-1">
                {["2025", "2024", "2023", "2022", "2021", "2020"].map(
                  (year) => (
                    <Link
                      key={year}
                      href={`/law-library/judgements/${year}`}
                      className="block text-xs hover:bg-green-500 p-1 rounded"
                    >
                      {year}
                    </Link>
                  )
                )}
              </div>
            </div>

            <div className="bg-green-600 text-white rounded">
              <div className="bg-green-700 p-2 text-center font-bold text-sm rounded-t">
                📅 2010 - 2019
              </div>
            </div>

            <div className="bg-green-600 text-white rounded">
              <div className="bg-green-700 p-2 text-center font-bold text-sm rounded-t">
                📅 2000 - 2009
              </div>
            </div>

            <div className="bg-green-600 text-white rounded">
              <div className="bg-green-700 p-2 text-center font-bold text-sm rounded-t">
                📅 1990 - 1999
              </div>
            </div>

            <div className="bg-green-600 text-white rounded">
              <div className="bg-green-700 p-2 text-center font-bold text-sm rounded-t">
                📅 1980 - 1989
              </div>
            </div>

            <div className="bg-green-600 text-white rounded">
              <div className="bg-green-700 p-2 text-center font-bold text-sm rounded-t">
                📅 1970 - 1979
              </div>
            </div>

            <div className="bg-green-600 text-white rounded">
              <div className="bg-green-700 p-2 text-center font-bold text-sm rounded-t">
                📅 1960 - 1969
              </div>
            </div>

            <div className="bg-green-600 text-white rounded">
              <div className="bg-green-700 p-2 text-center font-bold text-sm rounded-t">
                📅 1950 - 1959
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 bg-white p-6 rounded shadow-sm">
            <h1 className="text-xl font-bold mb-4">{judgement.title}</h1>
            <div className="text-sm text-gray-600 mb-4">
              {judgement.caseNumber}
            </div>
            <div className="text-sm text-gray-600 mb-4">
              <strong>Judge:</strong> {judgement.judges}
            </div>
            <div className="text-sm text-gray-600 mb-6">
              <strong>Date:</strong> {judgement.date}
            </div>

            <div className="prose max-w-none">
              {judgement.content
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
                href="/law-library/judgements"
                className="text-blue-600 hover:text-blue-800 underline inline-flex items-center gap-1"
              >
                ← Back to Judgements List
              </Link>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="w-64 flex-shrink-0 space-y-4">
            {/* Law Dictionary */}
            <div className="bg-blue-600 text-white p-3 rounded text-center">
              <h3 className="font-bold text-sm mb-1">LAW Dictionary</h3>
              <div className="w-12 h-8 bg-white mx-auto rounded mb-2"></div>
            </div>

            {/* Law College */}
            <div className="bg-blue-500 text-white p-3 rounded text-center">
              <h3 className="font-bold text-sm mb-1">LAW College</h3>
              <div className="w-12 h-8 bg-white mx-auto rounded mb-2"></div>
            </div>

            {/* Areas of Law */}
            <div className="bg-yellow-600 text-white p-3 rounded text-center">
              <h3 className="font-bold text-sm mb-1">AREAS of Law</h3>
              <div className="w-12 h-8 bg-white mx-auto rounded mb-2"></div>
            </div>

            {/* Bare Acts */}
            <div className="bg-gray-600 text-white p-3 rounded text-center">
              <h3 className="font-bold text-sm mb-1">BARE Acts</h3>
              <div className="w-12 h-8 bg-white mx-auto rounded mb-2"></div>
            </div>

            {/* Related Judgements */}
            <div className="bg-red-600 text-white p-3 rounded">
              <h3 className="font-bold text-sm mb-2">Related Judgements</h3>
              <div className="space-y-2 text-xs">
                <Link
                  href="/law-library/judgements/announcement/19424"
                  className="block hover:underline"
                >
                  Contract Law Cases
                </Link>
                <Link
                  href="/law-library/judgements/announcement/19425"
                  className="block hover:underline"
                >
                  Government Contracts
                </Link>
                <Link
                  href="/law-library/judgements/announcement/19426"
                  className="block hover:underline"
                >
                  Criminal Appeals
                </Link>
                <Link
                  href="/law-library/judgements/announcement/19427"
                  className="block hover:underline"
                >
                  Telecom Regulations
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
