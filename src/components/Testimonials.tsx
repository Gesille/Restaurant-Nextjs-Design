"use client";

import OwlCarousel from "./OwlCarousel";
import { testimonials } from "@/data/site";

export default function Testimonials() {
  return (
    <OwlCarousel
      className="carousel-testimony ftco-owl"
      mode="slide"
      margin={30}
      dots
      items={testimonials}
      renderItem={(t) => (
        <div className="item">
          <div className="testimony-wrap text-center">
            <div className="text p-3">
              <p className="mb-4">{t.quote}</p>
              <div className="user-img mb-4" style={{ backgroundImage: `url(/images/${t.image})` }}>
                <span className="quote d-flex align-items-center justify-content-center">
                  <i className="fa fa-quote-left" />
                </span>
              </div>
              <p className="name">{t.name}</p>
              <span className="position">{t.position}</span>
            </div>
          </div>
        </div>
      )}
    />
  );
}
