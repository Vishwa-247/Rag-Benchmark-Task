import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <h1 className="text-4xl font-bold text-primary mb-8">
            Privacy Policy
          </h1>

          <div className="bg-white rounded-lg shadow-md p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-primary mb-4">
                We Secure Your Personal Information
              </h2>
              <p className="text-gray-700 leading-relaxed">
                AdvocatKhoj considers all information submitted to this site as
                "sensitive & confidential". Hence, we take immense measure to
                secure all information submitted and viewed on our site. All
                login and authenticated areas on our site use SSL High Grade
                Encryption for the transfer of your data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Using Internal Messaging System (IMS)
              </h2>
              <p className="text-gray-700 leading-relaxed">
                AdvocatKhoj provides you with an Internal Messaging System that
                works just like your regular email. The IMS has an inbox, sent
                items and deleted folder. AdvocateKhoj highly recommends that
                you use IMS to communicate with potential advocates. By using
                IMS you are not disclosing your personal email address thereby
                keeping yourself ANNONYMOUS until YOU DECIDE to disclose your
                contact information to the advocate.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mb-4">
                We Will Not Sell Your Personal Information
              </h2>
              <p className="text-gray-700 leading-relaxed">
                AdvocatKhoj will not sell or distribute your personal
                information to any company or any individual.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
