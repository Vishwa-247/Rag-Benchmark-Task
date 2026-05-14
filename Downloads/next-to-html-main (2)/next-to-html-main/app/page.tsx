import PageLayout from "@/components/layout/page-layout";
import HeroSection from "@/components/home/hero-section";
import FeaturesSection from "@/components/home/features-section";
import AdBanner from "@/components/home/ad-banner";
import NewsTicker from "@/components/home/news-ticker";
import AdvertiserSection from "@/components/home/advertiser-section";
import FeaturedBlogSection from "@/components/home/featured-blog-section";

export default function HomePage() {
  return (
    <PageLayout>
      <HeroSection />

      {/* Middle Advertisement Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <AdBanner size="medium" position="middle" />
      </div>

      <FeaturesSection />

      {/* News Ticker */}
      <NewsTicker />

      {/* Featured Blog Section */}
      <FeaturedBlogSection />

      {/* Advertiser Section */}
      <AdvertiserSection />

      {/* Bottom Advertisement Banner */}
      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <AdBanner size="large" position="bottom" />
      </div> */}
    </PageLayout>
  );
}
