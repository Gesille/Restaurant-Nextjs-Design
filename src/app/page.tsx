
import ChefsSection from "@/components/FeaturesSection";
import CtaBand from "@/components/CtaBand";
import HeroSlider from "@/components/HeroSlider";
import IngredientsSection from "@/components/IngredientsSection";
import MenuSection from "@/components/MenuSection";
import Reveal from "@/components/Reveal";
import Testimonials from "@/components/Testimonials";
import WelcomeSection from "@/components/WelcomeSection";
import { posts } from "@/data/site";
import FeaturesSection from "@/components/FeaturesSection";
import Link from "next/dist/client/link";
import ComboSection from "@/components/ComboSection";

export default function HomePage() {
  return (
    <>
      <HeroSlider />

      <WelcomeSection />

 <section className="ftco-section ftco-intro" style={{ backgroundImage: "url(/images/bg_3.jpg)" }}>
  <div className="overlay" />
  <div className="container">
    <div className="row">
      <Reveal className="col-md-12 text-center" y={30}>
        <span>Ashtar Mishoo &amp; All Mart</span>
        <h2>Takeaway Meals &amp; Everyday Shopping</h2>
        <p className="mb-4">
          Grab freshly prepared food from our kitchen, then pick up your groceries
          and daily essentials at All Mart, all in one stop.
        </p>

        <a href="tel:+12681234567" className="btn btn-primary px-4 py-3 mr-2">
          Call to Order
        </a>
        <a
          href="https://wa.me/12681234567?text=Hi!%20I'd%20like%20to%20place%20an%20order."
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline-light px-4 py-3 mr-2"
        >
          WhatsApp
        </a>
          <a
          href="https://www.allmartplace.com/en/store/Mishoos-Fast-Food/991091"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline-light px-4 py-3 mr-2"
        >
          Visit All Mart
        </a>
        
      </Reveal>
    </div>
  </div>
</section>
      <ComboSection />

      <section className="ftco-section testimony-section" style={{ backgroundImage: "url(/images/bg_5.jpg)" }}>
        <div className="overlay" />
        <div className="container">
          <div className="row justify-content-center mb-3 pb-2">
            <Reveal className="col-md-7 text-center heading-section heading-section-white" y={30}>
              <span className="subheading">Testimony</span>
              <h2 className="mb-4">Happy Customer</h2>
            </Reveal>
          </div>
          <Reveal className="row justify-content-center">
            <div className="col-md-7">
              <Testimonials />
            </div>
          </Reveal>
        </div>
      </section>

     <FeaturesSection />

      <IngredientsSection />

     

      <CtaBand />
    </>
  );
}
