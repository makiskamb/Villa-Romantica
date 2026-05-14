import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { useLanguage } from "../../context/LanguageContext";

const IMGS = [
  "/photos/gallery/gallery-1.jpg",
  "/photos/gallery/gallery-2.jpg",
  "/photos/gallery/gallery-3.jpg",
];

const C      = "#444340";
const MUTED  = "rgba(68,67,64,0.55)";
const BORDER = "rgba(68,67,64,0.1)";

/** Attach scroll-driven parallax to an img element inside an overflow:hidden wrapper */
function useParallax(speed = 0.12) {
  const ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onScroll = () => {
      const rect     = el.getBoundingClientRect();
      const windowH  = window.innerHeight;
      const progress = (windowH / 2 - (rect.top + rect.height / 2)) / windowH;
      el.style.transform = `translateY(${progress * speed * 200}px)`;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [speed]);

  return ref;
}

export function AboutSection() {
  const { t } = useLanguage();
  const a = t.about;

  const img0 = useParallax(0.10);
  const img1 = useParallax(0.15);
  const img2 = useParallax(0.08);

  const keywords = ["Locally", "Simply", "Slowly"];

  return (
    <section id="about" style={{ backgroundColor: "#ffffff", padding: "10rem 0" }}>
      <div style={{ maxWidth: "100%", margin: "0 auto", padding: "0 2.5rem" }}>

        {/* Editorial two-column */}
        <div className="about-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "start" }}>

          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "1.25rem", marginBottom: "3.5rem" }}>
              <span style={{ fontFamily: "'Cinzel', serif", fontSize: "0.55rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "rgba(68,67,64,0.4)", whiteSpace: "nowrap" }}>
                {a.label}
              </span>
              <div style={{ flex: 1, height: "1px", backgroundColor: BORDER }} />
            </div>

            <div style={{ marginBottom: "3rem" }}>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", fontWeight: 300, letterSpacing: "0.2em", textTransform: "uppercase", color: MUTED, marginBottom: "0.5rem" }}>
                We Live
              </p>
              {keywords.map((word) => (
                <p key={word} style={{ fontFamily: "'Cinzel', serif", fontSize: "clamp(1.4rem, 2.5vw, 2rem)", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: C, lineHeight: 1.3 }}>
                  We Live <span style={{ color: C }}>{word}</span>
                </p>
              ))}
            </div>

            <h2
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "clamp(1.6rem, 3vw, 2.6rem)",
                fontWeight: 400,
                color: C,
                lineHeight: 1.25,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                marginBottom: "2rem",
              }}
            >
              {a.heading[0]}<br />{a.heading[1]}
            </h2>

            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.88rem", lineHeight: 2, color: MUTED, marginBottom: "1.25rem", fontWeight: 300 }}>
              {a.p1}
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.88rem", lineHeight: 2, color: MUTED, marginBottom: "2.5rem", fontWeight: 300 }}>
              {a.p2}
            </p>

            <p style={{ fontFamily: "'Cinzel', serif", fontSize: "0.75rem", lineHeight: 2, color: "rgba(68,67,64,0.4)", letterSpacing: "0.08em" }}>
              {a.quote}
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", borderTop: `1px solid ${BORDER}`, marginTop: "3.5rem", paddingTop: "2.5rem" }} className="stats-inner">
              {a.stats.map((stat, i) => (
                <div key={stat.label} style={{ textAlign: "center", borderLeft: i > 0 ? `1px solid ${BORDER}` : "none", padding: "0 0.5rem" }}>
                  <p style={{ fontFamily: "'Cinzel', serif", fontSize: "1.8rem", fontWeight: 400, color: C, lineHeight: 1, marginBottom: "0.5rem", letterSpacing: "0.04em" }}>{stat.value}</p>
                  <p style={{ fontFamily: "'Cinzel', serif", fontSize: "0.5rem", letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(68,67,64,0.4)" }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — image mosaic with parallax */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.15 }}
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "auto auto", gap: "0.5rem" }}
          >
            <div style={{ overflow: "hidden" }}>
              <img
                ref={img0}
                src={IMGS[0]}
                alt="Villa morning light"
                style={{ width: "100%", height: "280px", objectFit: "cover", display: "block", willChange: "transform" }}
              />
            </div>
            <div style={{ overflow: "hidden" }}>
              <img
                ref={img1}
                src={IMGS[1]}
                alt="Private pool"
                style={{ width: "100%", height: "280px", objectFit: "cover", display: "block", willChange: "transform" }}
              />
            </div>
            <div style={{ gridColumn: "1 / -1", overflow: "hidden" }}>
              <img
                ref={img2}
                src={IMGS[2]}
                alt="Garden terrace"
                style={{ width: "100%", height: "340px", objectFit: "cover", display: "block", willChange: "transform" }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 3.5rem !important; }
          .stats-inner { grid-template-columns: repeat(2, 1fr) !important; }
          .stats-inner > div:nth-child(odd) { border-left: none !important; }
          .stats-inner > div:nth-child(n+3) { border-top: 1px solid rgba(68,67,64,0.1); padding-top: 1.5rem; margin-top: 1rem; }
        }
      `}</style>
    </section>
  );
}
