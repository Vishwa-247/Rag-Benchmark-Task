import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";

export default function FeaturedBlogSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
              <BookOpen className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Featured Legal Blog
            </h2>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-primary/10 max-w-4xl mx-auto">
            <Link
              href="#"
              className="block hover:bg-primary/5 p-4 rounded-lg transition-all duration-200 border border-transparent hover:border-primary/20"
            >
              <h3 className="text-lg font-semibold text-foreground hover:text-primary transition-colors mb-2">
                What is Supreme Court of India Collegium and How it Works? (News
                Today)
              </h3>
              <p className="text-sm text-muted-foreground">
                Learn about the collegium system, its functioning, and recent
                developments in judicial appointments.
              </p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
