import Counter from "@/components/Counter";
import ParallaxBackground from "@/components/ParallaxBackground";
import Reveal from "@/components/Reveal";
import { counters } from "@/data/site";

/** Ring-style stats: each figure sits inside a thin circle with a red accent arc.
 *  Self-contained (Bootstrap + inline + scoped <style>). */
export default function StatsSection() {
  return (
    <section
      className="mishoo-stats"
      style={{ position: "relative", isolation: "isolate", overflow: "hidden", padding: "80px 0" }}
    >
      <style>{`
        .mishoo-stats .stats-row {
          display: grid;
          grid-template-columns: repeat(${counters.length}, 1fr);
          gap: 24px;
          justify-items: center;
        }
        .mishoo-stats .stat { text-align: center; }
        .mishoo-stats .ring {
          position: relative;
          width: 140px;
          height: 140px;
          margin: 0 auto 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: rgba(255,255,255,.08);
          box-shadow: inset 0 0 0 1.5px rgba(255,255,255,.35);
          transition: background .3s;
        }
        .mishoo-stats .stat:hover .ring { background: rgba(255,255,255,.16); }
        .mishoo-stats .ring svg { position: absolute; inset: 0; transition: transform 1.2s cubic-bezier(.2,.7,.2,1); }
        .mishoo-stats .stat:hover .ring svg { transform: rotate(120deg); }
        .mishoo-stats .stat-num, .mishoo-stats .stat-num * {
          position: relative;
          display: block;
          font-size: 32px;
          font-weight: 800;
          line-height: 1;
          letter-spacing: -.02em;
          color: #fff;
        }
        .mishoo-stats .stat-label {
          display: block;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: .16em;
          text-transform: uppercase;
          color: rgba(255,255,255,.82);
        }
        @media (max-width: 767px) {
          .mishoo-stats { padding: 56px 0 !important; }
          .mishoo-stats .stats-row { grid-template-columns: repeat(2, 1fr); row-gap: 34px; }
          .mishoo-stats .ring { width: 116px; height: 116px; }
          .mishoo-stats .stat-num, .mishoo-stats .stat-num * { font-size: 26px; }
        }
        @media (prefers-reduced-motion: reduce) { .mishoo-stats .ring svg { transition: none; } }
      `}</style>

      <ParallaxBackground image="/images/bg_4.jpg" />
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, zIndex: 0, background: "rgba(26,18,14,.58)" }} />

      <div className="container position-relative" style={{ zIndex: 1 }}>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="stats-row">
              {counters.map((counter, i) => (
                <Reveal key={counter.label} y={20} delay={i * 0.1}>
                  <div className="stat">
                    <div className="ring">
                      <svg viewBox="0 0 140 140" aria-hidden="true">
                        <circle
                          cx="70" cy="70" r="68.5" fill="none"
                          stroke="#e52b34" strokeWidth="3" strokeLinecap="round"
                          strokeDasharray="110 330" transform="rotate(-90 70 70)"
                        />
                      </svg>
                      <div className="stat-num"><Counter value={counter.value} /></div>
                    </div>
                    <span className="stat-label">{counter.label}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}