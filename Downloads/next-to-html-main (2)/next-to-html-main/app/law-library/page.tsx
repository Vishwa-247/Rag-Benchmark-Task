"use client";

import Link from "next/link";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import {
  BookOpen,
  FileText,
  Scale,
  Gavel,
  ScrollText,
  Hash,
  FileCheck,
  BookMarked,
} from "lucide-react";

export default function LawLibrary() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto p-6">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Law Library</h1>
          <p className="text-xl text-muted-foreground mb-6">
            Your comprehensive resource for legal knowledge and documentation
          </p>
        </div>

        {/* Law Library Sections */}
        <div className="space-y-8">
          {/* Legal Tips */}
          <div className="flex items-start gap-6 p-6 bg-white rounded-lg shadow-sm border">
            <div className="w-24 h-24 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <BookOpen className="w-8 h-8 text-yellow-600" />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-primary mb-2">
                Legal Tips
              </h2>
              <p className="text-gray-600 mb-4">
                Do you have questions about hiring an advocate or do you need
                some tips on what to say when you do meet an advocate? We
                provide some pointers on everything from hiring an advocate to
                negotiating the best deal! This information here helps you to
                prepare in the process of finding the best possible advocate for
                your legal problems.
              </p>
              <Link
                href="/law-library/legal-tips"
                className="text-primary hover:text-primary/80 font-medium"
              >
                Read Legal Tips →
              </Link>
            </div>
          </div>

          {/* Agreements */}
          <div className="flex items-start gap-6 p-6 bg-white rounded-lg shadow-sm border">
            <div className="w-24 h-24 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <FileText className="w-8 h-8 text-blue-600" />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-primary mb-2">
                Agreements
              </h2>
              <p className="text-gray-600 mb-4">
                Agreement is a contract, and is based on the outcome of a
                process of an offer by one party, accepted by the other under
                the provisions of Indian Contract Act. We offer convenient and
                small business owners an easy and convenient way to create a
                last will, sale of property deeds, partnership deed and many
                more!
              </p>
              <Link
                href="/law-library/agreements"
                className="text-primary hover:text-primary/80 font-medium"
              >
                View Agreements →
              </Link>
            </div>
          </div>

          {/* Forms */}
          <div className="flex items-start gap-6 p-6 bg-white rounded-lg shadow-sm border">
            <div className="w-24 h-24 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <ScrollText className="w-8 h-8 text-green-600" />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-primary mb-2">Forms</h2>
              <p className="text-gray-600 mb-4">
                Save time and money on common legal forms! We offer a mammoth
                collection of over 5000 forms for download. This consists of
                various central and state forms issued by the government of
                India. The list, however, is not exhaustive and we are committed
                to adding more forms. Keep visiting this section for new
                updates!
              </p>
              <Link
                href="/law-library/forms"
                className="text-primary hover:text-primary/80 font-medium"
              >
                Download Forms →
              </Link>
            </div>
          </div>

          {/* Areas of Law */}
          <div className="flex items-start gap-6 p-6 bg-white rounded-lg shadow-sm border">
            <div className="w-24 h-24 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Scale className="w-8 h-8 text-purple-600" />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-primary mb-2">
                Areas of Law
              </h2>
              <p className="text-gray-600 mb-4">
                Need quick, up-to-date information on a specific legal area? Our
                easy-to-navigate law library has information on 110 legal
                categories, each filled with general guidance expressed in clear
                terms so that you are able to understand the law better.
              </p>
              <Link
                href="/law-library/areas-of-law"
                className="text-primary hover:text-primary/80 font-medium"
              >
                Explore Areas →
              </Link>
            </div>
          </div>

          {/* Supreme Court Judgements */}
          <div className="flex items-start gap-6 p-6 bg-white rounded-lg shadow-sm border">
            <div className="w-24 h-24 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Gavel className="w-8 h-8 text-red-600" />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-primary mb-2">
                Supreme Court Judgements
              </h2>
              <p className="text-gray-600 mb-4">
                We provide free access to the judgments of the Supreme Court of
                India which contains the full text of the judgments with case
                numbers, parties name, judges' names and headnotes. The data is
                based on the Supreme Court of India's database as published by
                the Court's Justice Information System. Keep visiting this
                section for new updates!
              </p>
              <Link
                href="/law-library/judgements"
                className="text-primary hover:text-primary/80 font-medium"
              >
                Browse Judgements →
              </Link>
            </div>
          </div>

          {/* Bare Acts */}
          <div className="flex items-start gap-6 p-6 bg-white rounded-lg shadow-sm border">
            <div className="w-24 h-24 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <BookMarked className="w-8 h-8 text-indigo-600" />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-primary mb-2">Bare Acts</h2>
              <p className="text-gray-600 mb-4">
                An online collection of bare acts passed by the Indian
                Parliament ever since 1834 is listed here with free access to
                the full text. This compilation consists of over 1000 acts which
                are listed in alphabetical order and contains all the amendments
                made to these acts.
              </p>
              <Link
                href="/law-library/bare-acts"
                className="text-primary hover:text-primary/80 font-medium"
              >
                Read Bare Acts →
              </Link>
            </div>
          </div>

          {/* Rules */}
          <div className="flex items-start gap-6 p-6 bg-white rounded-lg shadow-sm border">
            <div className="w-24 h-24 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <FileCheck className="w-8 h-8 text-orange-600" />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-primary mb-2">Rules</h2>
              <p className="text-gray-600 mb-4">
                An online digest of the major rules framed under the acts is
                listed here with free access to the full text. This compilation
                consists of over 170 rules which are listed in the alphabetical
                order and are frequently updated.
              </p>
              <Link
                href="/law-library/rules"
                className="text-primary hover:text-primary/80 font-medium"
              >
                View Rules →
              </Link>
            </div>
          </div>

          {/* Law Commissions of India Reports */}
          <div className="flex items-start gap-6 p-6 bg-white rounded-lg shadow-sm border">
            <div className="w-24 h-24 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <ScrollText className="w-8 h-8 text-teal-600" />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-primary mb-2">
                Law Commissions of India Reports
              </h2>
              <p className="text-gray-600 mb-4">
                The Law Commission of India is a non-statutory body constituted
                by the Government of India from time to time. The various Law
                Commissions have been able to make important contributions
                towards the progressive development and codification of Law of
                the country. The Law Commission has so far submitted 277
                reports.
              </p>
              <Link
                href="/law-library/law-commission-reports"
                className="text-primary hover:text-primary/80 font-medium"
              >
                Read Reports →
              </Link>
            </div>
          </div>

          {/* Glossary */}
          <div className="flex items-start gap-6 p-6 bg-white rounded-lg shadow-sm border">
            <div className="w-24 h-24 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Hash className="w-8 h-8 text-pink-600" />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-primary mb-2">Glossary</h2>
              <p className="text-gray-600 mb-4">
                Look up a word or term in our law glossary to find a brief
                description related to law or legal matters. This free access to
                our database of words, terms, names, and acronyms are frequently
                updated and presently there are over 2300 entries in it.
              </p>
              <Link
                href="/law-library/glossary"
                className="text-primary hover:text-primary/80 font-medium"
              >
                Browse Glossary →
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
