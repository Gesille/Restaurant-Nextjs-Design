import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Experience",
  description: "What to expect when you visit Ashtar Mishoo.",
};

const moments = [
  {
    icon: "flaticon-ice-cream",
    title: "After the movies",
    text: "We are close to Caribbean Cinemas, which makes a hot meal an easy part of the plan.",
  },
  {
    icon: "flaticon-pizza",
    title: "Family table",
    text: "Pizza, meals, burgers and wraps give everyone something to get excited about.",
  },
  {
    icon: "flaticon-burger",
    title: "A quick favourite",
    text: "For the days when you know exactly what you want, our classics are ready to welcome you back.",
  },
];

export default function ExperiencePage() {
  return (
    <>
      <PageHero
        title="Experience"
        crumbs={[{ label: "Home", href: "/" }, { label: "Experience" }]}
        image="/images/bg_3.jpg"
      />

      {/* ---------- Lead: red panel + text (same layout as the Welcome section) ---------- */}
      <section className="ftco-section ftco-wrap-about">
        <div className="container">
          <div className="row no-gutters" style={{ boxShadow: "0 30px 70px rgba(0,0,0,.12)" }}>
            <div className="col-sm-4 p-4 p-md-5 d-flex flex-column align-items-center justify-content-center text-center bg-primary">
              <div
                role="img"
                aria-label="All American pizza"
                style={{
                  width: 190,
                  height: 190,
                  borderRadius: "50%",
                  backgroundImage: "url(/images/menu/pizza-all-american.jpg)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  border: "6px solid rgba(255,255,255,.35)",
                  boxShadow: "0 20px 40px rgba(0,0,0,.3)",
                }}
              />
              <p className="mt-4 mb-0" style={{ color: "rgba(255,255,255,.9)", letterSpacing: ".14em", textTransform: "uppercase", fontSize: 12, fontWeight: 700 }}>
                Near Caribbean Cinemas
              </p>
            </div>

            <Reveal className="col-sm-8 wrap-about" y={0}>
              <div className="heading-section mt-5 mb-4">
                <div className="pl-lg-3 ml-md-5">
                  <span className="subheading">The Mishoo feeling</span>
                  <h2 className="mb-4">No special occasion required.</h2>
                </div>
              </div>

              <div className="pl-lg-3 ml-md-5 pb-5">
                <p>
                  Some places ask you to plan ahead. Mishoo is for the plans that happen naturally — when
                  someone says “let&apos;s grab something” and the answer is immediately yes.
                </p>
                <p>
                  Come for a full meal, share a pizza, catch up over burgers or make a late stop for
                  something crispy. The menu is broad because people arrive with different cravings.
                </p>
                <Link href="/contact" className="btn btn-primary mt-3 px-4 py-3">
                  See where we are
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- Moments: dashed template cards ---------- */}
      <section className="ftco-section bg-light experience-moments">
        <style>{`
          .experience-moments .moment { position: relative; height: 100%; padding: 44px 28px 34px; text-align: center; background: #fff; border: 1.5px dashed #e6e6e6; transition: border-color .4s ease, transform .4s ease, box-shadow .4s ease; }
          .experience-moments .moment:hover { border-color: #e52b34; transform: translateY(-6px); box-shadow: 0 20px 40px -22px rgba(0,0,0,.35); }
          .experience-moments .moment-icon { display: inline-flex; align-items: center; justify-content: center; width: 76px; height: 76px; margin-bottom: 20px; border-radius: 50%; background: #e52b34; color: #fff; font-size: 34px; box-shadow: 0 12px 24px -8px rgba(229,43,52,.6); }
          .experience-moments .moment h3 { font-size: 22px; font-weight: 700; color: #000; }
          .experience-moments .moment p { margin: 0; }
          @media (prefers-reduced-motion: reduce) { .experience-moments .moment { transition: none; } .experience-moments .moment:hover { transform: none; } }
        `}</style>
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-md-7 text-center heading-section">
              <span className="subheading">Make a moment of it</span>
              <h2 className="mb-2">A place for every kind of hungry.</h2>
            </div>
          </div>
          <div className="row">
            {moments.map((moment, index) => (
              <Reveal className="col-md-4 mb-4" key={moment.title} y={24} delay={index * 0.08}>
                <article className="moment">
                  <span className={`moment-icon ${moment.icon}`} aria-hidden="true" />
                  <h3>{moment.title}</h3>
                  <p>{moment.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Menu callout: photo band (same as the template intro) ---------- */}
      <section
        className="ftco-intro ftco-section"
        style={{ backgroundImage: "url(/images/bg_5.jpg)" }}
      >
        <div className="overlay" />
        <div className="container position-relative">
          <div className="row align-items-center">
            <div className="col-md-8">
              <span>Your next favourite</span>
              <h2 className="mt-2">Start with the menu.</h2>
              <p style={{ color: "rgba(255,255,255,.85)" }}>
                Browse all of our pizzas, shawarma, chicken, meals and burgers — with a photo for every dish.
              </p>
            </div>
            <div className="col-md-4 text-md-right">
              <Link href="/menu" className="btn btn-white btn-outline-white px-4 py-3">
                Open the menu
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}