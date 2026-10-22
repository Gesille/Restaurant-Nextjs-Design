import Link from "next/link";
import ParallaxBackground from "./ParallaxBackground";
import Reveal from "./Reveal";

type Crumb = { label: string; href?: string };

type PageHeroProps = {
  title: string;
  crumbs: Crumb[];
  image?: string;
};

/** The inner-page banner (title + breadcrumbs) used on every page except the home page. */
export default function PageHero({ title, crumbs, image = "/images/bg_5.jpg" }: PageHeroProps) {
  return (
    <section
      className="hero-wrap hero-wrap-2"
      style={{ isolation: "isolate", overflow: "hidden" }}
    >
      <ParallaxBackground image={image} />
      <div className="overlay" />
      <div className="container">
        <div className="row no-gutters slider-text align-items-end justify-content-center">
          <Reveal className="col-md-9 text-center mb-5" y={30}>
            <h1 className="mb-2 bread">{title}</h1>
            <p className="breadcrumbs">
              {crumbs.map((crumb) => (
                <span className={crumb.href ? "mr-2" : undefined} key={crumb.label}>
                  {crumb.href ? (
                    <Link href={crumb.href}>
                      {crumb.label} <i className="fa fa-chevron-right" />
                    </Link>
                  ) : (
                    <>
                      {crumb.label} <i className="fa fa-chevron-right" />
                    </>
                  )}
                </span>
              ))}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
