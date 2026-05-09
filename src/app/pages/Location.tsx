import { motion } from "motion/react";
import { LocationSection } from "../components/sections/LocationSection";
import { useLanguage } from "../context/LanguageContext";

export function Location() {
  const { t } = useLanguage();
  const l = t.location;

  return (
    <main>
      <section
        style={{
          paddingTop: "160px",
          paddingBottom: "5rem",
          backgroundColor: "#ffffff",
          borderBottom: "1px solid rgba(68,67,64,0.1)",
        }}
      >
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 2.5rem" }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <p style={{ fontFamily: "'Cinzel', serif", fontSize: "0.55rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "rgba(68,67,64,0.4)", marginBottom: "1.5rem" }}>
              Villa Romantica · {l.label}
            </p>
            <h1 style={{ fontFamily: "'Cinzel', serif", fontSize: "clamp(2.5rem, 6vw, 5rem)", fontWeight: 400, color: "#444340", lineHeight: 1.1, letterSpacing: "0.1em", textTransform: "uppercase" }}>
              {l.heading[0]},<br />{l.heading[1]}
            </h1>
          </motion.div>
        </div>
      </section>

      <LocationSection />
    </main>
  );
}
