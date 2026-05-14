import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { useLanguage } from "../../context/LanguageContext";

const BANNER_IMG = "/photos/hero/hero-2.jpg";

export function QuoteBanner() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const imgRef     = useRef<HTMLImageElement>(null);

  /* ── Parallax: image drifts at ~40% of scroll speed ── */
  useEffect(() => {
    const onScroll = () => {
      const section = sectionRef.current;
      const img     = imgRef.current;
      if (!section || !img) return;

      const rect     = section.getBoundingClientRect();
      const windowH  = window.innerHeight;

      // progress: -1 (below viewport) → 0 (centered) → 1 (above viewport)
      const progress = (windowH / 2 - (rect.top + rect.height / 2)) / windowH;
      img.style.transform = `translateY(${progress * 120}px)`;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{ position: "relative", height: "80vh", overflow: "hidden" }}
    >
      {/* Full-width parallax image */}
      <img
        ref={imgRef}
        src={BANNER_IMG}
        alt="Aegean sea"
        style={{
          position: "absolute",
          top: "-15%",
          left: 0,
          width: "100%",
          height: "130%",
          objectFit: "cover",
          objectPosition: "center 55%",
          willChange: "transform",
        }}
      />

      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(170deg, rgba(68,67,64,0.35) 0%, rgba(68,67,64,0.58) 100%)",
        }}
      />

      {/* Content */}
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
          <div style={{ width: "1px", height: "54px", backgroundColor: "rgba(236,234,224,0.25)", margin: "0 auto 2.8rem" }} />

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

          <div style={{ width: "40px", height: "1px", backgroundColor: "rgba(236,234,224,0.3)", margin: "2.8rem auto 0" }} />
        </motion.div>
      </div>
    </section>
  );
}
