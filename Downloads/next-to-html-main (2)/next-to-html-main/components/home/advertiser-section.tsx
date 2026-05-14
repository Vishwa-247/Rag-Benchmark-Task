"use client";

import { Facebook, Twitter, Linkedin, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function AdvertiserSection() {
  const advertisers = [
    {
      id: 1,
      name: "Legal Services India",
      logo: "/logos/advertiser-1.png",
      website: "https://legalservicesindia.com",
    },
    {
      id: 2,
      name: "Law Firm Directory",
      logo: "/logos/advertiser-2.png",
      website: "https://lawfirmdirectory.com",
    },
    {
      id: 3,
      name: "Indian Legal Resources",
      logo: "/logos/advertiser-3.png",
      website: "https://indianlegalresources.com",
    },
    {
      id: 4,
      name: "Legal Tech Solutions",
      logo: "/logos/advertiser-4.png",
      website: "https://legaltechsolutions.com",
    },
  ];

  const socialStats = [
    {
      platform: "Facebook",
      handle: "@advocatekhoj",
      followers: "25,432",
      icon: Facebook,
      url: "https://www.facebook.com/advocatekhoj",
      color: "text-blue-600",
    },
    {
      platform: "X (Twitter)",
      handle: "@scjudgments",
      followers: "18,756",
      icon: Twitter,
      url: "https://twitter.com/scjudgments",
      color: "text-gray-900",
    },
    {
      platform: "LinkedIn",
      handle: "@advocatekho",
      followers: "12,890",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/advocatekho",
      color: "text-blue-700",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Advertisers Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Trusted Partners
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We collaborate with leading legal organizations and service
            providers to bring you the best resources and opportunities.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {advertisers.map((advertiser) => (
            <Card
              key={advertiser.id}
              className="hover:shadow-lg transition-shadow duration-300 border-gray-200"
            >
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <img
                    src={advertiser.logo || "/placeholder-logo.png"}
                    alt={advertiser.name}
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <h3 className="font-semibold text-sm text-gray-900 mb-2">
                  {advertiser.name}
                </h3>
                <a
                  href={advertiser.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-primary hover:underline"
                >
                  Visit Website
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Want to advertise with us or become a partner?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors duration-200"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
}
