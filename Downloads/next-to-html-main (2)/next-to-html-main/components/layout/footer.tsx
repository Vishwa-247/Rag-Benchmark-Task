import Link from "next/link";
import { Facebook, Linkedin, Twitter } from "lucide-react";

const linkClasses =
  "text-white/90 hover:text-white transition-colors duration-200 text-sm";

export default function Footer() {
  return (
    <footer className="bg-[#00377b] text-white border-t-4 border-[#001944]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-6">
          <div>
            <h3 className="text-base font-bold text-white border-b-2 border-[#001944] pb-2 mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className={linkClasses}>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/media-coverage" className={linkClasses}>
                  Media Coverage
                </Link>
              </li>
              <li>
                <Link href="/contact" className={linkClasses}>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/user-agreement" className={linkClasses}>
                  User Agreement
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className={linkClasses}>
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-bold text-white border-b-2 border-[#001944] pb-2 mb-4">
              Client Area
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/register" className={linkClasses}>
                  Register
                </Link>
              </li>
              <li>
                <Link href="/login" className={linkClasses}>
                  Login
                </Link>
              </li>
              <li>
                <Link href="/client-area#faqs" className={linkClasses}>
                  FAQ's
                </Link>
              </li>
              <li>
                <Link href="/client-area#how-it-works" className={linkClasses}>
                  How It Works
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-bold text-white border-b-2 border-[#001944] pb-2 mb-4">
              Advocate Area
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/advocate/register" className={linkClasses}>
                  Register
                </Link>
              </li>
              <li>
                <Link href="/login?userType=advocate" className={linkClasses}>
                  Login
                </Link>
              </li>
              <li>
                <Link href="/advocate-area#faqs" className={linkClasses}>
                  FAQ's
                </Link>
              </li>
              <li>
                <Link href="/advocate-area#how-it-works" className={linkClasses}>
                  How It Works
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-bold text-white border-b-2 border-[#001944] pb-2 mb-4">
              Law School
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/law-colleges" className={linkClasses}>
                  Search Colleges
                </Link>
              </li>
              <li>
                <Link href="/sawal-jawab" className={linkClasses}>
                  Search a Sawaal
                </Link>
              </li>
              <li>
                <Link href="/sawal-jawab?mode=ask" className={linkClasses}>
                  Ask a Sawaal
                </Link>
              </li>
            </ul>

            <h3 className="text-base font-bold text-white border-b-2 border-[#001944] pb-2 mt-6 mb-4">
              Blogs
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/advocate/dashboard?section=blogs" className={linkClasses}>
                  Post a Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-bold text-white border-b-2 border-[#001944] pb-2 mb-4">
              Law Library
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/law-library/legal-tips" className={linkClasses}>
                  Legal Tips
                </Link>
              </li>
              <li>
                <Link href="/law-library/agreements" className={linkClasses}>
                  Agreements
                </Link>
              </li>
              <li>
                <Link href="/law-library/areas-of-law" className={linkClasses}>
                  Area of Law
                </Link>
              </li>
              <li>
                <Link href="/law-library/bare-acts" className={linkClasses}>
                  Indian Bare Acts
                </Link>
              </li>
              <li>
                <Link href="/law-library/rules" className={linkClasses}>
                  Rules
                </Link>
              </li>
              <li>
                <Link href="/law-library/judgements" className={linkClasses}>
                  Judgments
                </Link>
              </li>
              <li>
                <Link href="/law-library/forms" className={linkClasses}>
                  Legal Forms
                </Link>
              </li>
              <li>
                <Link href="/law-library/glossary" className={linkClasses}>
                  Glossary
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-bold text-white border-b-2 border-[#001944] pb-2 mb-4">
              Advertise
            </h3>
            <ul className="space-y-2 mb-6">
              <li>
                <Link href="/contact?context=advertise" className={linkClasses}>
                  Get in Touch
                </Link>
              </li>
            </ul>

            <h3 className="text-base font-bold text-white border-b-2 border-[#001944] pb-2 mb-4">
              Social
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.facebook.com/advocatekhoj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/90 hover:text-white transition-colors duration-200 text-sm"
                  aria-label="Visit AdvocateKhoj on Facebook"
                >
                  <Facebook className="h-4 w-4" />
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/scjudgments"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/90 hover:text-white transition-colors duration-200 text-sm"
                  aria-label="Visit AdvocateKhoj on X"
                >
                  <Twitter className="h-4 w-4" />
                  X (Twitter)
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/advocatekho"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/90 hover:text-white transition-colors duration-200 text-sm"
                  aria-label="Visit AdvocateKhoj on LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#001944] mt-10 pt-6">
          <div className="text-center text-xs text-white/80 leading-relaxed">
            <p className="mb-2">
              Information provided on advocatekhoj.com is solely available at your
              request for informational purposes only and should not be interpreted as
              soliciting or advertisement.
            </p>
            <p>&copy; {new Date().getFullYear()} AdvocateKhoj. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
