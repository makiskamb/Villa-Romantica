import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import { useTransition } from "../context/TransitionContext";
import { useParallax } from "../hooks/useParallax";

const C       = "#444340";
const MUTED   = "rgba(68,67,64,0.55)";
const BORDER  = "rgba(68,67,64,0.1)";
const BG_CREAM = "#eceae0";

const HERO_IMG   = "/photos/hero/hero-2.jpg";
const STORY_IMGS = [
  "/photos/gallery/gallery-4.jpg",
  "/photos/gallery/gallery-6.jpg",
];
const PLACE_IMG = "/photos/experience/experience-1.jpg";

export function About() {
  const { t } = useLanguage();
  const a = t.aboutPage;
  const { go } = useTransition();

  const heroImg   = useParallax(0.18);
  const storyImg0 = useParallax(0.12);
  const storyImg1 = useParallax(0.16);
  const placeImg  = useParallax(0.12);

  return (
    <main>

      {/* ── Hero ── */}
      <section style={{ position: "relative", height: "70vh", minHeight: "480px", overflow: "hidden" }}>
        <img
          ref={heroImg}
          src={HERO_IMG}
          alt="Villa Romantica"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "130%",
            top: "-15%",
            objectFit: "cover",
            objectPosition: "center 55%",
            willChange: "transform",
          }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(170deg, rgba(68,67,64,0.2) 0%, rgba(68,67,64,0.6) 100%)" }} />
        <div style={{ position: "relative", height: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "0 2.5rem clamp(3.5rem, 7vw, 6rem)", maxWidth: "100%", margin: "0 auto" }}>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <p style={{ fontFamily: "'Cinzel', serif", fontSize: "0.55rem", letterSpacing: "0.38em", textTransform: "uppercase", color: "rgba(236,234,224,0.55)", marginBottom: "1.25rem" }}>
              {a.heroLabel}
            </p>
            <h1 style={{ fontFamily: "'Cinzel', serif", fontSize: "clamp(2.4rem, 6vw, 5.5rem)", fontWeight: 400, color: "#ffffff", lineHeight: 1.1, letterSpacing: "0.06em", textTransform: "uppercase", margin: 0 }}>
              {a.heroHeading[0]}<br />{a.heroHeading[1]}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* ── Our Story ── */}
      <section style={{ backgroundColor: "#ffffff", padding: "8rem 0" }}>
        <div style={{ maxWidth: "100%", margin: "0 auto", padding: "0 2.5rem" }}>
          <div className="about-story-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "center" }}>

            {/* Text */}
            <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}>
              <div style={{ display: "flex", alignItems: "center", gap: "1.25rem", marginBottom: "3rem" }}>
                <span style={{ fontFamily: "'Cinzel', serif", fontSize: "0.55rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "rgba(68,67,64,0.4)", whiteSpace: "nowrap" }}>
                  {a.storyLabel}
                </span>
                <div style={{ flex: 1, height: "1px", backgroundColor: BORDER }} />
              </div>
              <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: "clamp(1.6rem, 3vw, 2.6rem)", fontWeight: 400, color: C, lineHeight: 1.25, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "2.25rem" }}>
                {a.storyHeading[0]}<br />{a.storyHeading[1]}
              </h2>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.88rem", lineHeight: 2, color: MUTED, fontWeight: 300, marginBottom: "1.25rem" }}>{a.storyP1}</p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.88rem", lineHeight: 2, color: MUTED, fontWeight: 300, marginBottom: "2.5rem" }}>{a.storyP2}</p>
              <p style={{ fontFamily: "'Cinzel', serif", fontSize: "0.8rem", lineHeight: 2, color: "rgba(68,67,64,0.38)", letterSpacing: "0.06em", fontStyle: "italic" }}>
                {a.storyQuote}
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", borderTop: `1px solid ${BORDER}`, marginTop: "3.5rem", paddingTop: "2.5rem" }} className="about-stats">
                {[{ value: "30+", label: "Years" }, { value: "6", label: "Suites" }, { value: "Palio", label: "Kavala" }, { value: "0m", label: "To the Sea" }].map((stat, i) => (
                  <div key={stat.label} style={{ textAlign: "center", borderLeft: i > 0 ? `1px solid ${BORDER}` : "none", padding: "0 0.5rem" }}>
                    <p style={{ fontFamily: "'Cinzel', serif", fontSize: "1.8rem", fontWeight: 400, color: C, lineHeight: 1, marginBottom: "0.5rem", letterSpacing: "0.04em" }}>{stat.value}</p>
                    <p style={{ fontFamily: "'Cinzel', serif", fontSize: "0.5rem", letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(68,67,64,0.4)" }}>{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Images */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.15 }}
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem" }}>
              <div style={{ overflow: "hidden" }}>
                <img ref={storyImg0} src={STORY_IMGS[0]} alt="Villa Romantica"
                  style={{ width: "100%", height: "408px", objectFit: "cover", display: "block", willChange: "transform" }} />
              </div>
              <div style={{ overflow: "hidden", marginTop: "2.5rem" }}>
                <img ref={storyImg1} src={STORY_IMGS[1]} alt="Aegean sea"
                  style={{ width: "100%", height: "408px", objectFit: "cover", display: "block", willChange: "transform" }} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Our Philosophy ── */}
      <section style={{ backgroundColor: BG_CREAM, padding: "8rem 0" }}>
        <div style={{ maxWidth: "100%", margin: "0 auto", padding: "0 2.5rem" }}>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }} style={{ marginBottom: "5rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", marginBottom: "2.5rem" }}>
              <span style={{ fontFamily: "'Cinzel', serif", fontSize: "0.55rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "rgba(68,67,64,0.4)", whiteSpace: "nowrap" }}>
                {a.valuesLabel}
              </span>
              <div style={{ flex: 1, height: "1px", backgroundColor: BORDER }} />
            </div>
            <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 400, color: C, lineHeight: 1.15, letterSpacing: "0.06em", textTransform: "uppercase" }}>
              {a.valuesHeading}
            </h2>
          </motion.div>
          <div className="values-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0" }}>
            {a.values.map((v, i) => (
              <motion.div key={v.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, delay: i * 0.12 }}
                style={{ padding: "3rem 3rem 3rem 0", borderLeft: i > 0 ? `1px solid ${BORDER}` : "none", paddingLeft: i > 0 ? "3rem" : "0" }}>
                <p style={{ fontFamily: "'Cinzel', serif", fontSize: "0.5rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(68,67,64,0.35)", marginBottom: "1.25rem" }}>0{i + 1}</p>
                <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: "clamp(1.1rem, 2vw, 1.6rem)", fontWeight: 400, color: C, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "1.25rem" }}>{v.title}</h3>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.88rem", lineHeight: 2, color: MUTED, fontWeight: 300 }}>{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── The Place ── */}
      <section style={{ backgroundColor: "#ffffff", padding: "8rem 0" }}>
        <div style={{ maxWidth: "100%", margin: "0 auto", padding: "0 2.5rem" }}>
          <div className="about-place-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "center" }}>

            {/* Image */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}
              style={{ overflow: "hidden" }}>
              <img ref={placeImg} src={PLACE_IMG} alt="Palio, Kavala"
                style={{ width: "100%", height: "624px", objectFit: "cover", display: "block", willChange: "transform" }} />
            </motion.div>

            {/* Text */}
            <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.15 }}>
              <div style={{ display: "flex", alignItems: "center", gap: "1.25rem", marginBottom: "3rem" }}>
                <span style={{ fontFamily: "'Cinzel', serif", fontSize: "0.55rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "rgba(68,67,64,0.4)", whiteSpace: "nowrap" }}>
                  {a.placeLabel}
                </span>
                <div style={{ flex: 1, height: "1px", backgroundColor: BORDER }} />
              </div>
              <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: "clamp(1.6rem, 3vw, 2.6rem)", fontWeight: 400, color: C, lineHeight: 1.25, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "2.25rem" }}>
                {a.placeHeading[0]}<br />{a.placeHeading[1]}
              </h2>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.88rem", lineHeight: 2, color: MUTED, fontWeight: 300, marginBottom: "1.25rem" }}>{a.placeP1}</p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.88rem", lineHeight: 2, color: MUTED, fontWeight: 300 }}>{a.placeP2}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section style={{ backgroundColor: "#444340", padding: "7rem 0" }}>
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }}
          style={{ textAlign: "center", padding: "0 2.5rem" }}>
          <div style={{ width: "1px", height: "50px", backgroundColor: "rgba(236,234,224,0.2)", margin: "0 auto 3rem" }} />
          <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)", fontWeight: 400, color: "#eceae0", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "2.5rem" }}>
            {a.ctaHeading}
          </h2>
          <button onClick={() => go("/contact")}
            style={{ fontFamily: "'Cinzel', serif", fontSize: "0.58rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#444340", backgroundColor: "#eceae0", border: "none", cursor: "pointer", padding: "1rem 3rem", transition: "opacity 0.3s ease" }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.8"; }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}>
            {a.ctaButton}
          </button>
          <div style={{ width: "1px", height: "50px", backgroundColor: "rgba(236,234,224,0.2)", margin: "3rem auto 0" }} />
        </motion.div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .about-story-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .about-place-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .values-grid { grid-template-columns: 1fr !important; }
          .values-grid > div { border-left: none !important; padding-left: 0 !important; border-top: 1px solid rgba(68,67,64,0.1); padding-top: 2.5rem !important; }
          .values-grid > div:first-child { border-top: none; padding-top: 0 !important; }
          .about-stats { grid-template-columns: repeat(2, 1fr) !important; }
          .about-stats > div:nth-child(odd) { border-left: none !important; }
          .about-stats > div:nth-child(n+3) { border-top: 1px solid rgba(68,67,64,0.1); padding-top: 1.5rem; margin-top: 1rem; }
        }
      `}</style>
    </main>
  );
}
