"use client";

import { useEffect, useState } from "react";
import { ChevronRight, Calendar, Scale } from "lucide-react";
import Link from "next/link";

interface NewsItem {
  id: string;
  title: string;
  date: string;
  type: "judgment" | "event";
}

export default function NewsTicker() {
  const [news, setNews] = useState<NewsItem[]>([]);

  // Sample data - in production, this would come from an API
  useEffect(() => {
    const sampleNews: NewsItem[] = [
      {
        id: "1",
        title:
          "Supreme Court upholds digital privacy rights in landmark judgment",
        date: "2025-09-12",
        type: "judgment",
      },
      {
        id: "2",
        title:
          "National Law Conference on AI & Legal Ethics - Mumbai, Sept 25-26",
        date: "2025-09-25",
        type: "event",
      },
      {
        id: "3",
        title: "SC clarifies jurisdiction in cross-border commercial disputes",
        date: "2025-09-11",
        type: "judgment",
      },
      {
        id: "4",
        title: "Workshop on Corporate Law Reforms - Delhi, Oct 5-7",
        date: "2025-10-05",
        type: "event",
      },
      {
        id: "5",
        title:
          "Constitutional bench ruling on environmental law implementation",
        date: "2025-09-10",
        type: "judgment",
      },
    ];
    setNews(sampleNews);
  }, []);

  const judgments = news.filter((item) => item.type === "judgment");
  const events = news.filter((item) => item.type === "event");

  return (
    <section className="bg-gradient-to-r from-muted/30 via-background to-muted/30 border-y border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Latest Supreme Court Judgments */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-primary/10 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                <Scale className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                Latest Supreme Court Judgments
              </h3>
            </div>
            <div className="space-y-3">
              {judgments.slice(0, 3).map((judgment) => (
                <Link
                  key={judgment.id}
                  href="#"
                  className="flex items-start group hover:bg-primary/5 p-3 rounded-lg transition-all duration-200 border border-transparent hover:border-primary/20"
                >
                  <ChevronRight className="w-4 h-4 text-muted-foreground mt-1 mr-3 group-hover:text-primary transition-colors flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-sm text-foreground group-hover:text-primary transition-colors line-clamp-2 font-medium">
                      {judgment.title}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {new Date(judgment.date).toLocaleDateString("en-IN")}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
            <Link
              href="/law-library"
              className="inline-flex items-center text-sm text-primary hover:text-primary/80 mt-4 font-medium group"
            >
              View all judgments
              <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Forthcoming Events */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-secondary/10 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center mr-3">
                <Calendar className="w-5 h-5 text-secondary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                Forthcoming Events
              </h3>
            </div>
            <div className="space-y-3">
              {events.slice(0, 3).map((event) => (
                <Link
                  key={event.id}
                  href="#"
                  className="flex items-start group hover:bg-secondary/5 p-3 rounded-lg transition-all duration-200 border border-transparent hover:border-secondary/20"
                >
                  <ChevronRight className="w-4 h-4 text-muted-foreground mt-1 mr-3 group-hover:text-secondary transition-colors flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-sm text-foreground group-hover:text-secondary transition-colors line-clamp-2 font-medium">
                      {event.title}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {new Date(event.date).toLocaleDateString("en-IN")}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
            <Link
              href="/sawal-jawab"
              className="inline-flex items-center text-sm text-secondary hover:text-secondary/80 mt-4 font-medium group"
            >
              View all events
              <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
