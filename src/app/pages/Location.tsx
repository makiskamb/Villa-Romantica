import { motion } from "motion/react";
import { LocationSection } from "../components/sections/LocationSection";
import { useLanguage } from "../context/LanguageContext";
import { useParallax } from "../hooks/useParallax";

const HERO_IMG = "/photos/Villa Romantica Drone  (10).jpg";

export function Location() {
  const { t } = useLanguage();
  const l = t.location;
  const heroImg = useParallax(0.18);

  return (
    <main>

      {/* ── Hero ── */}
      <section style={{ position: "relative", height: "65vh", minHeight: "420px", overflow: "hidden" }}>
        <img
          ref={heroImg}
          src={HERO_IMG}
          alt="Villa Romantica aerial"
          style={{
            position: "absolute", inset: 0,
            width: "100%", height: "130%", top: "-15%",
            objectFit: "cover", objectPosition: "center 50%",
            willChange: "transform",
          }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(170deg, rgba(68,67,64,0.2) 0%, rgba(68,67,64,0.55) 100%)" }} />
        <div style={{ position: "relative", height: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "0 2.5rem clamp(3rem, 6vw, 5rem)" }}>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <p style={{ fontFamily: "'Cinzel', serif", fontSize: "0.55rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "rgba(236,234,224,0.55)", marginBottom: "1rem" }}>
              Villa Romantica · {l.label}
            </p>
            <h1 style={{ fontFamily: "'Cinzel', serif", fontSize: "clamp(2.5rem, 6vw, 5rem)", fontWeight: 400, color: "#ffffff", lineHeight: 1.1, letterSpacing: "0.1em", textTransform: "uppercase" }}>
              {l.sectionHeading[0]}<br />{l.sectionHeading[1]}
            </h1>
          </motion.div>
        </div>
      </section>

      <LocationSection />
    </main>
  );
}
