import { motion } from "motion/react";
import { useLanguage } from "../../context/LanguageContext";

const BANNER_IMG = "/photos/hero/hero-2.jpg";

export function QuoteBanner() {
  const { t } = useLanguage();

  return (
    <section style={{ position: "relative", height: "clamp(360px, 52vw, 640px)", overflow: "hidden" }}>
      <img
        src={BANNER_IMG}
        alt="Aegean sea"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center 55%",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(170deg, rgba(68,67,64,0.35) 0%, rgba(68,67,64,0.58) 100%)",
        }}
      />
      <div
        style={{
          position: "relative",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "2rem",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1 }}
        >
          {/* Top rule */}
          <div style={{ width: "1px", height: "54px", backgroundColor: "rgba(236,234,224,0.25)", margin: "0 auto 2.8rem" }} />

          {/* Main slogan */}
          <h2
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "clamp(1.8rem, 5vw, 4.2rem)",
              fontWeight: 400,
              color: "#ffffff",
              lineHeight: 1.1,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              margin: "0 0 1.6rem",
            }}
          >
            {t.quote.text}
          </h2>

          {/* Subtitle — softer, smaller */}
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(0.72rem, 1.2vw, 0.9rem)",
              fontWeight: 300,
              color: "rgba(236,234,224,0.48)",
              letterSpacing: "0.04em",
              lineHeight: 1.7,
              maxWidth: "520px",
              margin: "0 auto",
            }}
          >
            {t.hero.subtitle}
          </p>

          {/* Bottom rule */}
          <div style={{ width: "40px", height: "1px", backgroundColor: "rgba(236,234,224,0.3)", margin: "2.8rem auto 0" }} />
        </motion.div>
      </div>
    </section>
  );
}
