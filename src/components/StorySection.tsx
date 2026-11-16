import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

const RED = "#b81d2a";
const INK = "#1a1614";
const PAPER = "#ece3d6";

const chips = ["Pizza", "Shawarma", "Burgers", "Grilled chicken"];

/** "More than a meal" — fancy version. One file, no external CSS:
 *  Bootstrap classes + inline styles + a tiny scoped <style> for animations/hover. */
export default function StorySection() {
  return (
    <section className="mishoo-story" style={{ position: "relative", overflow: "hidden", background: PAPER, padding: "130px 0" }}>
      <style>{`
        .mishoo-story .spin { animation: mStorySpin 18s linear infinite; }
        .mishoo-story .float { animation: mStoryFloat 5s ease-in-out infinite; }
        .mishoo-story .photo img { transition: transform 1.2s cubic-bezier(.2,.7,.2,1); }
        .mishoo-story .photo:hover img { transform: scale(1.06); }
        .mishoo-story .chip { transition: background .25s, color .25s, transform .25s; }
        .mishoo-story .chip:hover { background: ${RED}; color: #fff; transform: translateY(-2px); }
        .mishoo-story .story-btn { display:inline-flex; align-items:center; gap:14px; transition: gap .3s; }
        .mishoo-story .story-btn:hover { gap: 22px; }
        @keyframes mStorySpin { to { transform: rotate(360deg); } }
        @keyframes mStoryFloat { 50% { transform: translateY(-10px) rotate(-4deg); } }
        @media (max-width: 991px) { .mishoo-story .photo-wrap { height: 460px !important; } .mishoo-story .inset { display: none !important; } }
        @media (prefers-reduced-motion: reduce) { .mishoo-story .spin, .mishoo-story .float { animation: none; } }
      `}</style>

      {/* Giant outlined watermark */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute", top: 30, left: "50%", transform: "translateX(-50%)",
          fontSize: "clamp(120px, 24vw, 340px)", fontWeight: 900, letterSpacing: "-0.06em", lineHeight: 1,
          color: "transparent", WebkitTextStroke: "2px rgba(184,29,42,.14)", whiteSpace: "nowrap",
          pointerEvents: "none", userSelect: "none",
        }}
      >
        MISHOO
      </div>

      <div className="container position-relative">
        <div className="row align-items-center">
          {/* ---------- Image cluster ---------- */}
          <Reveal className="col-lg-6 mb-5 mb-lg-0" x={-30} y={0}>
            <div className="photo-wrap" style={{ position: "relative", height: 600, marginRight: 30, marginBottom: 30 }}>
              {/* offset red frame */}
              <div style={{ position: "absolute", inset: 0, transform: "translate(26px, 26px)", border: `2px solid ${RED}` }} />

              {/* main photo */}
              <div className="photo" style={{ position: "absolute", inset: 0, overflow: "hidden", boxShadow: "0 40px 80px rgba(40,20,10,.32)" }}>
                <Image
                  src="/images/bg_3.webp"
                  alt="Freshly prepared food at Ashtar Mishoo"
                  fill
                  sizes="(max-width: 991px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 55%, rgba(0,0,0,.45))" }} />
              </div>

              {/* round inset photo */}
              <div
                className="inset"
                style={{
                  position: "absolute", left: -44, top: 70, width: 170, height: 170, borderRadius: "50%",
                  overflow: "hidden", border: `8px solid ${PAPER}`, boxShadow: "0 20px 40px rgba(0,0,0,.3)",
                }}
              >
                <Image src="/images/menu/pizza-pepperoni.jpg" alt="Pepperoni pizza" fill sizes="170px" style={{ objectFit: "cover" }} />
              </div>

              {/* spinning text badge */}
              <div style={{ position: "absolute", right: -34, top: -34, width: 124, height: 124 }}>
                <div style={{ position: "absolute", inset: 0, borderRadius: "50%", background: RED, boxShadow: "0 14px 30px rgba(184,29,42,.45)" }} />
                <svg className="spin" viewBox="0 0 120 120" width="124" height="124" style={{ position: "absolute", inset: 0 }}>
                  <defs>
                    <path id="mStoryCircle" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" />
                  </defs>
                  <text fill="#fff" fontSize="11.5" fontWeight="700" letterSpacing="3.2">
                    <textPath href="#mStoryCircle">FRESH • LOCAL • BOLD • TASTY •</textPath>
                  </text>
                </svg>
                <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 30 }}>🍕</div>
              </div>

              {/* tilted stamp */}
              <div
                className="float"
                style={{
                  position: "absolute", right: -10, bottom: 8, padding: "18px 28px", textAlign: "center",
                  color: "#fff", background: RED, transform: "rotate(-4deg)", boxShadow: "0 16px 34px rgba(0,0,0,.38)",
                }}
              >
                <span style={{ display: "block", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase" }}>Antigua</span>
                <strong style={{ display: "block", fontSize: 26, fontWeight: 800, letterSpacing: "-0.02em" }}>Since 2025</strong>
              </div>
            </div>
          </Reveal>

          {/* ---------- Text ---------- */}
          <Reveal className="col-lg-5 ml-auto" x={30} y={0} delay={0.1}>
            <div className="heading-section mb-4">
              <span className="subheading">More than a meal</span>
              <h2 className="mb-2">A food spot with its own rhythm.</h2>
            </div>

            <p style={{ color: "#3a332e", lineHeight: 1.85, fontSize: 17 }}>
              There is no dress code and no complicated occasion required. Mishoo is made for the easy plans:
              a quick bite, a family dinner, a late-night craving, or a table full of friends.
            </p>

            <div className="d-flex flex-wrap" style={{ gap: 10, margin: "26px 0 34px" }}>
              {chips.map((c) => (
                <span
                  key={c}
                  className="chip"
                  style={{ padding: "7px 16px", fontSize: 13, fontWeight: 700, color: INK, border: `1.5px solid ${INK}`, borderRadius: 999, cursor: "default" }}
                >
                  {c}
                </span>
              ))}
            </div>

          
          </Reveal>
        </div>
      </div>
    </section>
  );
}