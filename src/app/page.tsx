import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { PageEnter } from "@/components/layout/PageEnter";
import { Hero } from "@/components/sections/Hero";
import { Manifesto } from "@/components/sections/Manifesto";
import { SignatureStory } from "@/components/sections/SignatureStory";
import { StatsStrip } from "@/components/sections/StatsStrip";
import { MasterChefMoment } from "@/components/sections/MasterChefMoment";
import { Gallery } from "@/components/sections/Gallery";
import { FeaturedRecipe } from "@/components/sections/FeaturedRecipe";
import { FeaturedVideos } from "@/components/sections/FeaturedVideos";
import { PressWall } from "@/components/sections/PressWall";
import { BookHero } from "@/components/sections/BookHero";
import { EventsStrip } from "@/components/sections/EventsStrip";
import { PullQuote } from "@/components/sections/PullQuote";
import { Newsletter } from "@/components/sections/Newsletter";

export default function HomePage() {
  return (
    <>
      <PageEnter />
      <Navigation />
      <main className="relative">
        <Hero />
        <Manifesto />
        <SignatureStory />
        <StatsStrip />
        <MasterChefMoment />
        <Gallery />
        <FeaturedRecipe />
        <FeaturedVideos />
        <PressWall />
        <BookHero />
        <EventsStrip />
        <PullQuote />
        <Newsletter />
        <Footer />
      </main>
    </>
  );
}
