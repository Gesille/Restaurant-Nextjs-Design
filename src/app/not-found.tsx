import Link from "next/link";
import PageHero from "@/components/PageHero";

export default function NotFound() {
  return (
    <>
      <PageHero title="Page not found" crumbs={[{ label: "Home", href: "/" }, { label: "404" }]} />
      <section className="ftco-section">
        <div className="container text-center">
          <h2 className="mb-4">This page isn&apos;t on the menu.</h2>
          <p className="mb-4">The page you are looking for may have moved or no longer exists.</p>
          <Link href="/" className="btn btn-primary py-3 px-5">
            Back to home
          </Link>
        </div>
      </section>
    </>
  );
}
