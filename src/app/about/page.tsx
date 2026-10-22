import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import IngredientsSection from "@/components/IngredientsSection";
import PageHero from "@/components/PageHero";
import StatsSection from "@/components/StatsSection";
import StorySection from "@/components/StorySection";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <PageHero title="About" crumbs={[{ label: "Home", href: "/" }, { label: "OUR STORY" }]} />
      <IngredientsSection />
      <StorySection />
      <StatsSection />
      <CtaBand />
    </>
  );
}