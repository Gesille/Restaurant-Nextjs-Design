import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Gallery",
  description: "A look at the food, energy and everyday moments at Ashtar Mishoo.",
};

const gallery = [
  ["/images/menu/burger-mishoo.jpg", "The Mishoo Burger", "Signature"],
  ["/images/menu/pizza-pepperoni.jpg", "Pizza night", "From the oven"],
  ["/images/menu/shawarma-chicken.jpg", "Chicken shawarma", "Wrapped fresh"],
  ["/images/bg_3.jpg", "The kitchen", "Made with care"],
  ["/images/menu/meal-mix.jpg", "The mixed meal", "Generous plates"],
  ["/images/menu/chicken-fried-chicken-fries.jpg", "Chicken & fries", "A classic"],
  ["/images/menu/pizza-vegetarian.jpg", "Vegetarian pizza", "Fresh toppings"],
  ["/images/bg_5.jpg", "The Mishoo mood", "Come as you are"],
];

export default function GalleryPage() {
  return (
    <>
      <PageHero
        title="Gallery"
        crumbs={[{ label: "Home", href: "/" }, { label: "Gallery" }]}
        image="/images/bg_2.jpg"
      />

      {/* ---------- Intro: template heading ---------- */}
      <section className="ftco-section" style={{ paddingBottom: "3em" }}>
        <div className="container">
          <div className="row justify-content-center">
            <Reveal className="col-md-8 text-center heading-section" y={20}>
              <span className="subheading">A taste of the place</span>
              <h2 className="mb-3">Food worth looking forward to.</h2>
              <p className="mb-4">
                From the first sizzle to the last bite, Mishoo is made of generous food and easy moments.
              </p>
              
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- Photo grid ---------- */}
      <section className="ftco-section gallery-section" style={{ paddingTop: 0 }}>
        <style>{`
          .gallery-section .gallery-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-auto-rows: 240px;
            grid-auto-flow: dense;
            gap: 14px;
          }
          .gallery-section .gallery-tile { position: relative; overflow: hidden; background: #1a1a1a; }
          .gallery-section .gallery-tile:nth-child(1),
          .gallery-section .gallery-tile:nth-child(6) { grid-row: span 2; }
          .gallery-section .gallery-tile:nth-child(4),
          .gallery-section .gallery-tile:nth-child(8) { grid-column: span 2; }

          .gallery-section .gallery-tile-image {
            position: absolute; inset: 0;
            background-size: cover; background-position: center;
            transition: transform 1s cubic-bezier(.2,.7,.2,1);
          }
          .gallery-section .gallery-tile:hover .gallery-tile-image { transform: scale(1.08); }

          .gallery-section .gallery-tile::after {
            content: ""; position: absolute; inset: 0;
            background: linear-gradient(180deg, transparent 45%, rgba(0,0,0,.78));
            opacity: .85; transition: opacity .4s ease;
          }
          .gallery-section .gallery-tile:hover::after { opacity: 1; }

          .gallery-section .gallery-tile-copy {
            position: absolute; left: 0; right: 0; bottom: 0; z-index: 2;
            padding: 20px 22px; transform: translateY(6px); transition: transform .4s ease;
          }
          .gallery-section .gallery-tile:hover .gallery-tile-copy { transform: none; }
          .gallery-section .gallery-tile-copy span {
            display: inline-block; margin-bottom: 8px; padding: 2px 10px;
            font-size: 11px; font-weight: 700; letter-spacing: .14em; text-transform: uppercase;
            color: #fff; background: #e52b34;
          }
          .gallery-section .gallery-tile-copy h3 { margin: 0; font-size: 22px; font-weight: 700; color: #fff; line-height: 1.2; }

          @media (max-width: 991px) {
            .gallery-section .gallery-grid { grid-template-columns: repeat(2, 1fr); grid-auto-rows: 210px; }
          }
          @media (max-width: 575px) {
            .gallery-section .gallery-grid { grid-template-columns: 1fr; grid-auto-rows: 240px; }
            .gallery-section .gallery-tile:nth-child(n) { grid-row: auto; grid-column: auto; }
          }
          @media (prefers-reduced-motion: reduce) {
            .gallery-section .gallery-tile-image, .gallery-section .gallery-tile-copy { transition: none; }
          }
        `}</style>
        <div className="container">
          <div className="gallery-grid">
            {gallery.map(([image, title, label], index) => (
              <Reveal className="gallery-tile" key={image} y={24} delay={(index % 3) * 0.06}>
                <div
                  className="gallery-tile-image"
                  role="img"
                  aria-label={title}
                  style={{ backgroundImage: `url(${image})` }}
                />
                <div className="gallery-tile-copy">
                  <span>{label}</span>
                  <h3>{title}</h3>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}