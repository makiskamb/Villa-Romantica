import { motion } from "motion/react";
import { MapPin, Clock, Navigation } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

const C = "#444340";
const MUTED = "rgba(68,67,64,0.55)";
const BORDER = "rgba(68,67,64,0.1)";
const iconMap = [MapPin, Clock, Navigation];

export function LocationSection() {
  const { t } = useLanguage();
  const l = t.location;

  return (
    <section id="location" style={{ backgroundColor: "#ffffff", padding: "10rem 0" }}>
      <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 2.5rem" }}>

        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          style={{ display: "flex", alignItems: "center", gap: "1.5rem", marginBottom: "6rem" }}
        >
          <span
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "0.58rem",
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              color: "rgba(68,67,64,0.4)",
              whiteSpace: "nowrap",
            }}
          >
            {l.label}
          </span>
          <div style={{ flex: 1, height: "1px", backgroundColor: BORDER }} />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: "6rem", alignItems: "start" }}>
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "clamp(2.2rem, 4.5vw, 3.6rem)",
                fontWeight: 400,
                color: C,
                lineHeight: 1.15,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                marginBottom: "2rem",
              }}
            >
              {l.heading[0]}<br />{l.heading[1]}
            </h2>

            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.9rem",
                lineHeight: 2,
                color: MUTED,
                marginBottom: "3.5rem",
                maxWidth: "480px",
                fontWeight: 300,
              }}
            >
              {l.desc}
            </p>

            {/* Details */}
            <div style={{ display: "flex", flexDirection: "column", gap: "2rem", marginBottom: "3.5rem" }}>
              {l.details.map((d, i) => {
                const Icon = iconMap[i] || MapPin;
                return (
                  <div key={d.label} style={{ display: "flex", gap: "1.25rem", alignItems: "flex-start" }}>
                    <Icon size={15} style={{ color: C, opacity: 0.45, marginTop: "3px", flexShrink: 0 }} strokeWidth={1.5} />
                    <div>
                      <p
                        style={{
                          fontFamily: "'Cinzel', serif",
                          fontSize: "0.55rem",
                          letterSpacing: "0.25em",
                          textTransform: "uppercase",
                          color: "rgba(68,67,64,0.4)",
                          marginBottom: "0.3rem",
                        }}
                      >
                        {d.label}
                      </p>
                      <p
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "0.88rem",
                          color: C,
                          whiteSpace: "pre-line",
                          lineHeight: 1.65,
                          fontWeight: 300,
                        }}
                      >
                        {d.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Highlights */}
            <div
              style={{
                borderTop: `1px solid ${BORDER}`,
                paddingTop: "3rem",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "2rem",
              }}
            >
              {l.highlights.map((h) => (
                <div key={h.label}>
                  <p
                    style={{
                      fontFamily: "'Cinzel', serif",
                      fontSize: "0.75rem",
                      fontWeight: 500,
                      color: C,
                      marginBottom: "0.4rem",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                    }}
                  >
                    {h.label}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.75rem",
                      color: MUTED,
                      lineHeight: 1.65,
                      fontWeight: 300,
                    }}
                  >
                    {h.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.15 }}
            style={{ position: "sticky", top: "100px" }}
          >
            <div style={{ overflow: "hidden", border: `1px solid ${BORDER}` }}>
              <iframe
                title="Villa Romantica Location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=24.3149%2C40.8849%2C24.3949%2C40.9349&layer=mapnik&marker=40.9099%2C24.3549"
                width="100%"
                height="480"
                style={{ border: 0, display: "block", filter: "grayscale(60%) contrast(0.85) sepia(10%)" }}
                loading="lazy"
              />
            </div>
            <div
              style={{
                padding: "1.25rem 1.5rem",
                backgroundColor: "#f5f3eb",
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                borderLeft: `1px solid ${BORDER}`,
                borderRight: `1px solid ${BORDER}`,
                borderBottom: `1px solid ${BORDER}`,
              }}
            >
              <MapPin size={13} style={{ color: C, opacity: 0.45 }} strokeWidth={1.5} />
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.75rem",
                  color: MUTED,
                  letterSpacing: "0.02em",
                  fontWeight: 300,
                }}
              >
                {l.mapCaption}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
