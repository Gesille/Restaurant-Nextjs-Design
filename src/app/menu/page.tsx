import type { Metadata } from "next";
import MenuSection from "@/components/MenuSection";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = { title: "Menu" };

export default function MenuPage() {
  return (
    <>
      <PageHero title="Menu" crumbs={[{ label: "Home", href: "/" }, { label: "Menu" }]} />
      <MenuSection />
    </>
  );
}
