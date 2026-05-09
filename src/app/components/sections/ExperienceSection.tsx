import { motion } from "motion/react";
import {
  Waves, Coffee, Wifi, Car, Wind, Umbrella, Sun, UtensilsCrossed,
} from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

const EXPERIENCE_IMG = "/photos/experience/experience-1.jpg";

const GRID_IMGS = [
  "/photos/experience/experience-3.jpg",
  "/photos/experience/experience-5.jpg",
  "/photos/experience/experience-7.jpg",
];

const C = "#444340";
const MUTED = "rgba(68,67,64,0.5)";
const BORDER = "rgba(68,67,64,0.1)";
const iconList = [Waves, Coffee, UtensilsCrossed, Wifi, Car, Wind, Umbrella, Sun];

export function ExperienceSection() {
  const { t } = useLanguage();
  const e = t.experience;

  return (
    <section id="experience" style={{ backgroundColor: "#ffffff" }}>

      {/* Full-width hero image */}
      <div style={{ position: "relative", overflow: "hidden" }}>
        <img
          src={EXPERIENCE_IMG}
          alt="Villa Romantica experience"
          style={{ width: "100%", height: "clamp(340px, 52vw, 680px)", objectFit: "cover", display: "block" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(68,67,64,0.6) 0%, transparent 55%)" }} />
      </div>

      {/* Intro + 5 Experience Sections */}
      <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "8rem 2.5rem 6rem" }}>

        {/* Label + heading + intro */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          style={{ marginBottom: "6rem" }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", marginBottom: "3rem" }}>
            <span style={{ fontFamily: "'Cinzel', serif", fontSize: "0.55rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "rgba(68,67,64,0.4)", whiteSpace: "nowrap" }}>
              {e.label}
            </span>
            <div style={{ flex: 1, height: "1px", backgroundColor: BORDER }} />
          </div>

          <div className="exp-intro-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "end" }}>
            <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: "clamp(2rem, 4vw, 3.4rem)", fontWeight: 400, color: C, lineHeight: 1.15, letterSpacing: "0.06em", textTransform: "uppercase", margin: 0 }}>
              {e.heading[0]}<br />{e.heading[1]}
            </h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.92rem", lineHeight: 2, color: MUTED, fontWeight: 300, margin: 0 }}>
              {e.intro}
            </p>
          </div>
        </motion.div>

        {/* 5 Experience Sections */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {e.sections.map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.07 }}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 2fr",
                gap: "4rem",
                paddingTop: "3rem",
                paddingBottom: "3rem",
                borderTop: `1px solid ${BORDER}`,
                alignItems: "start",
              }}
              className="exp-section-row"
            >
              {/* Left: number + title */}
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <span style={{ fontFamily: "'Cinzel', serif", fontSize: "0.5rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(68,67,64,0.28)" }}>
                  0{i + 1}
                </span>
                <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: "clamp(0.9rem, 1.6vw, 1.2rem)", fontWeight: 400, color: C, letterSpacing: "0.1em", textTransform: "uppercase", lineHeight: 1.3, margin: 0 }}>
                  {section.title}
                </h3>
              </div>

              {/* Right: description */}
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", lineHeight: 2, color: MUTED, fontWeight: 300, margin: 0 }}>
                {section.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Amenities strip — dark background */}
      <div style={{ backgroundColor: C }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "6rem 2.5rem" }}>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            style={{ display: "flex", alignItems: "center", gap: "1.5rem", marginBottom: "4rem" }}
          >
            <span style={{ fontFamily: "'Cinzel', serif", fontSize: "0.55rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "rgba(236,234,224,0.3)", whiteSpace: "nowrap" }}>
              {e.amenitiesLabel}
            </span>
            <div style={{ flex: 1, height: "1px", backgroundColor: "rgba(236,234,224,0.1)" }} />
          </motion.div>

          <div className="amenities-grid-home" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "0" }}>
            {e.amenities.map((item, i) => {
              const Icon = iconList[i] || Waves;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.05 }}
                  style={{
                    padding: "2rem 2rem 2rem 0",
                    borderLeft: i % 4 > 0 ? "1px solid rgba(236,234,224,0.08)" : "none",
                    paddingLeft: i % 4 > 0 ? "2rem" : "0",
                  }}
                >
                  <Icon size={15} style={{ color: "rgba(236,234,224,0.3)", marginBottom: "1rem", display: "block" }} strokeWidth={1.5} />
                  <p style={{ fontFamily: "'Cinzel', serif", fontSize: "0.65rem", fontWeight: 400, color: "#eceae0", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.4rem" }}>
                    {item.label}
                  </p>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", color: "rgba(236,234,224,0.4)", lineHeight: 1.6, fontWeight: 300 }}>
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Image mosaic row */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0" }} className="exp-mosaic">
        {GRID_IMGS.map((src, i) => (
          <div key={i} style={{ overflow: "hidden" }}>
            <img
              src={src}
              alt="Villa Romantica experience"
              style={{ width: "100%", height: "340px", objectFit: "cover", display: "block", transition: "transform 0.9s ease" }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.04)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
            />
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .exp-intro-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .exp-section-row { grid-template-columns: 1fr !important; gap: 1rem !important; }
          .amenities-grid-home { grid-template-columns: repeat(2, 1fr) !important; }
          .amenities-grid-home > div:nth-child(odd) { border-left: none !important; padding-left: 0 !important; }
          .exp-mosaic { grid-template-columns: 1fr !important; }
          .exp-mosaic img { height: 240px !important; }
        }
      `}</style>
    </section>
  );
}
