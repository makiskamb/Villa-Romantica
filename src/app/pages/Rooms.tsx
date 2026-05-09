import { motion } from "motion/react";
import { AccommodationSection } from "../components/sections/AccommodationSection";
import { useLanguage } from "../context/LanguageContext";

const HERO_IMG = "/photos/hero/hero-2.jpg";

export function Rooms() {
  const { t } = useLanguage();
  const r = t.rooms;

  return (
    <main>
      {/* Full aerial hero image — dexamenes style */}
      <section style={{ position: "relative", height: "65vh", minHeight: "420px", overflow: "hidden" }}>
        <img
          src={HERO_IMG}
          alt="Villa Romantica aerial"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(170deg, rgba(68,67,64,0.2) 0%, rgba(68,67,64,0.55) 100%)" }} />
        <div style={{ position: "relative", height: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "0 2.5rem clamp(3rem, 6vw, 5rem)", maxWidth: "1440px", margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <p style={{ fontFamily: "'Cinzel', serif", fontSize: "0.55rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "rgba(236,234,224,0.55)", marginBottom: "1rem" }}>
              Villa Romantica · {r.label}
            </p>
            <h1 style={{ fontFamily: "'Cinzel', serif", fontSize: "clamp(2.5rem, 6vw, 5rem)", fontWeight: 400, color: "#ffffff", lineHeight: 1.1, letterSpacing: "0.1em", textTransform: "uppercase" }}>
              {r.heading}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Intro text below hero */}
      <div style={{ backgroundColor: "#ffffff", borderBottom: "1px solid rgba(68,67,64,0.1)" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "3.5rem 2.5rem" }}>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.88rem", lineHeight: 2, color: "rgba(68,67,64,0.6)", fontWeight: 300, maxWidth: "680px" }}>
            Six suites named for the gods of Olympus, each opening to the Aegean. Every room is a balance of simplicity and warmth — whitewashed walls, handpicked linens, and a terrace or balcony that makes the sea feel entirely yours.
          </p>
        </div>
      </div>

      <AccommodationSection />
    </main>
  );
}
