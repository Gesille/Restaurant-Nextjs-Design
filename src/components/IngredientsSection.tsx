import Link from "next/link";
import { lorem } from "@/data/site";
import Reveal from "./Reveal";

type IngredientsSectionProps = {
  /** Home/about sit flush against the neighbouring sections; reservation uses regular padding. */
  flush?: boolean;
};

/** "Perfect Ingredients" block with two photos. */
export default function IngredientsSection({ flush = true }: IngredientsSectionProps) {
  return (
    <section className={`ftco-section${flush ? " ftco-no-pt ftco-no-pb" : ""}`}>
      <div className="container">
        <div className="row d-flex">
          <div className="col-md-6 d-flex">
            <Reveal className="img img-2 w-100 mr-md-2" style={{ backgroundImage: "url(/images/about/bg_6.jpg)" }} x={-40} y={0}>
              {null}
            </Reveal>
            <Reveal
              className="img img-2 w-100 ml-md-2"
              style={{ backgroundImage: "url(/images/about/bg_4.png)" }}
              x={-40}
              y={0}
              delay={0.15}
            >
              {null}
            </Reveal>
          </div>
          <Reveal className="col-md-6 makereservation p-4 p-md-5" x={40} y={0}>
            <div className="heading-section mb-5">
              <span className="subheading">This is our secrets</span>
              <h2 className="mb-4">Perfect Ingredients</h2>
              <p>{lorem.ingredients}</p>
              <p>
                <Link href="/about" className="btn btn-primary">
                  Learn more
                </Link>
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
