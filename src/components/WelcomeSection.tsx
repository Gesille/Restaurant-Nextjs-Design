import { lorem } from "@/data/site";
import Reveal from "./Reveal";
import VisitCard from "./VisitCard.tsx";


/** Red "Visit Us" card beside the "Welcome to Taste.it" text (home page). */
export default function WelcomeSection() {
  return (
    <section className="ftco-section ftco-wrap-about ftco-no-pb ftco-no-pt">
      <div className="container">
        <div className="row no-gutters">
          <div className="col-sm-4 p-4 p-md-5 d-flex align-items-center justify-content-center bg-primary">
            <VisitCard />
          </div>
         <Reveal
  className="col-sm-8 wrap-about py-7"
  y={0}
>
  <div className="row align-items-center">
    {/* Text column */}
    <div className="col-md-7">
      <div className="heading-section mt-5 mb-4">
        <div className="pl-lg-3 ml-md-5">
          <span className="subheading">About</span>
          <h2 className="mb-4">Welcome to ASHTAR MISHOO</h2>
        </div>
      </div>

      <div className="pl-lg-3 ml-md-5">
        <p>{lorem.about}</p>
      </div>
    </div>

    {/* Pizza image column */}
    <div className="col-md-5 d-flex align-items-center justify-content-center">
  <img
    src="/images/Home/3d-pizza.png"
    alt="Freshly prepared pizza"
    className="welcome-pizza"
  />
</div>
  </div>
</Reveal>
        </div>
      </div>
    </section>
  );
}