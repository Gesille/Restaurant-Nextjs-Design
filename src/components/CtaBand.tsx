import Link from "next/link";
import Reveal from "./Reveal";

/** Red call-to-action band. */
export default function CtaBand() {
  return (
    <section className="ftco-section ftco-no-pt ftco-no-pb ftco-intro bg-primary">
      <div className="container py-5">
        <div className="row py-2">
          <Reveal className="col-md-12 text-center" y={30}>
            <h2>Simple Ingredients. Serious Flavor.</h2>
            <Link href="/menu" className="btn btn-white btn-outline-white">
              Browse the Menu
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}