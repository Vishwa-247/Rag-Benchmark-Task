import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Link from "next/link";

interface FormDetailPageProps {
  params: {
    id: string;
    formId: string;
  };
}

export default function FormDetailPage({ params }: FormDetailPageProps) {
  // Sample form content
  const formData: {
    [key: string]: {
      [key: string]: { title: string; description: string; content: string };
    };
  } = {
    "1": {
      "1": {
        title: "Animal Registration Form",
        description: "Registration form for livestock and animal husbandry",
        content: `FORM FOR REGISTRATION OF ANIMALS

Department of Animal Husbandry, Dairying & Fisheries
Government of India

Application for Registration of Animals under the Animal Registration Act

1. Name of the Owner: _________________________________
2. Address: _________________________________________
3. Contact Number: __________________________________
4. Email: __________________________________________

ANIMAL DETAILS:
5. Type of Animal: __________________________________
6. Breed: __________________________________________
7. Age: ___________________________________________
8. Gender: ________________________________________
9. Color/Markings: _________________________________
10. Purpose (Dairy/Breeding/Meat/Other): _______________

HEALTH INFORMATION:
11. Vaccination Status: ______________________________
12. Health Certificate Number: _______________________
13. Veterinarian Details: ____________________________

DECLARATION:
I hereby declare that the information provided above is true and correct to the best of my knowledge. I understand that providing false information may result in rejection of the application and legal consequences.

Date: ___________
Place: __________

Signature of Owner: _________________

FOR OFFICE USE ONLY:
Registration Number: _______________
Date of Registration: ______________
Officer's Signature: _______________`,
      },
    },
  };

  const form = formData[params.id]?.[params.formId];

  if (!form) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto p-6">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Form Not Found</h1>
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
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-4 rounded-lg mb-6">
            <h1 className="text-2xl font-bold text-white">Law Library</h1>
          </div>
        </div>

        {/* Navigation */}
        <div className="mb-6">
          <Link
            href="/law-library/forms"
            className="text-blue-600 hover:text-blue-800 underline inline-flex items-center gap-1"
          >
            ← Back to Forms
          </Link>
        </div>

        {/* Content */}
        <div className="bg-white p-6 rounded shadow-sm">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-2xl font-bold">{form.title}</h1>
              <p className="text-gray-600 mt-2">{form.description}</p>
            </div>
            <div className="flex gap-2">
              <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700">
                Download PDF
              </button>
              <button className="bg-green-600 text-white px-4 py-2 rounded text-sm hover:bg-green-700">
                Fill Online
              </button>
            </div>
          </div>

          <div className="border border-gray-300 rounded p-6 bg-gray-50">
            <h3 className="font-semibold mb-4">Form Preview:</h3>
            <pre className="whitespace-pre-wrap font-mono text-sm text-gray-700 leading-relaxed">
              {form.content}
            </pre>
          </div>

          {/* Download Section */}
          <div className="mt-8 pt-4 border-t bg-gray-50 p-4 rounded">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-lg">
                  Download or Fill This Form
                </h3>
                <p className="text-gray-600 text-sm">
                  Get the complete form in PDF format or fill it online
                </p>
              </div>
              <div className="flex gap-2">
                <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 font-medium">
                  Download PDF
                </button>
                <button className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 font-medium">
                  Fill Online Form
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
