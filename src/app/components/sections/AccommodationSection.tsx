import { motion } from "motion/react";
import { useLanguage } from "../../context/LanguageContext";
import { useTransition } from "../../context/TransitionContext";

const C = "#444340";
const MUTED = "rgba(68,67,64,0.5)";
const BORDER = "rgba(68,67,64,0.1)";
const BG_CREAM = "#eceae0";

// Room images in order: Zeus, Athena, Artemis, Poseidon, Hera, Aphrodite
const roomImages = [
  "/photos/rooms/zeus/zeus-1.jpg",
  "/photos/rooms/athina/athina-1.jpg",
  "/photos/rooms/artemis/artemis-1.jpg",
  "/photos/rooms/posidon/posidon-1.jpg",
  "/photos/rooms/ira/ira-1.jpg",
  "/photos/rooms/aphrodite/aphrodite-1.jpg",
];

// Slugs for navigation (always English, regardless of language)
const roomSlugs = ["zeus", "athena", "artemis", "poseidon", "hera", "aphrodite"];

// Specs per room: [view/feature, feature2, beds, capacity]
const roomSpecs = [
  ["Sea View", "Private Balcony", "2 Double Beds", "Up to 4 Guests"],
  ["Sea & Garden View", "Private Balcony", "Double Bed + Kitchenette", "Up to 3 Guests"],
  ["Private Balcony", "Kitchenette", "2 Double Beds", "Up to 5 Guests"],
  ["Sea & Garden View", "Private Balcony", "Kitchenette", "Up to 5 Guests"],
  ["Private Balcony", "Double Bed", "—", "Up to 2 Guests"],
  ["Double Bed", "Essential Amenities", "—", "Up to 3 Guests"],
];

const overviewImages = [
  "/photos/rooms/zeus/zeus-2.jpg",
  "/photos/rooms/athina/athina-2.jpg",
  "/photos/rooms/posidon/posidon-2.jpg",
];

export function AccommodationSection() {
  const { t } = useLanguage();
  const r = t.rooms;
  const { go } = useTransition();

  return (
    <section id="rooms" style={{ backgroundColor: BG_CREAM, padding: "10rem 0" }}>
      <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 2.5rem" }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          style={{ marginBottom: "5rem" }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", marginBottom: "2.5rem" }}>
            <span style={{ fontFamily: "'Cinzel', serif", fontSize: "0.55rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "rgba(68,67,64,0.4)", whiteSpace: "nowrap" }}>
              {r.label}
            </span>
            <div style={{ flex: 1, height: "1px", backgroundColor: BORDER }} />
          </div>
          <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 400, color: C, lineHeight: 1.15, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "1.5rem" }}>
            {r.heading}
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.88rem", lineHeight: 2, color: MUTED, fontWeight: 300, maxWidth: "680px" }}>
            {r.intro}
          </p>
        </motion.div>

        {/* Overview image grid */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1 }}
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0.5rem", marginBottom: "7rem" }}
          className="overview-grid"
        >
          {overviewImages.map((src, i) => (
            <div key={i} style={{ position: "relative", overflow: "hidden" }}>
              <img
                src={src}
                alt={r.list[i]?.name}
                style={{ width: "100%", height: "260px", objectFit: "cover", display: "block", transition: "transform 0.8s ease" }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.04)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
              />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "1.25rem 1.25rem 1rem", background: "linear-gradient(to top, rgba(68,67,64,0.7) 0%, transparent 100%)" }}>
                <p style={{ fontFamily: "'Cinzel', serif", fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#eceae0", fontWeight: 400 }}>
                  {r.list[i]?.name}
                </p>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.65rem", color: "rgba(236,234,224,0.65)", fontWeight: 300, marginTop: "0.2rem" }}>
                  {r.list[i]?.tag}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Individual room listings */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {r.list.map((room, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: i * 0.06 }}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "0",
                borderTop: `1px solid ${BORDER}`,
                paddingTop: "4rem",
                paddingBottom: "4rem",
              }}
              className="room-listing-row"
            >
              {/* Left: details */}
              <div style={{ paddingRight: "5rem", display: "flex", flexDirection: "column", justifyContent: "center" }} className="room-listing-text">
                {/* Tag */}
                {room.tag && (
                  <span style={{ fontFamily: "'Cinzel', serif", fontSize: "0.5rem", letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(68,67,64,0.4)", marginBottom: "1.25rem", display: "block" }}>
                    {room.tag}
                  </span>
                )}

                {/* Name */}
                <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: "clamp(1.4rem, 2.5vw, 2rem)", fontWeight: 400, color: C, letterSpacing: "0.08em", textTransform: "uppercase", lineHeight: 1.2, marginBottom: "1.5rem" }}>
                  {room.name}
                </h3>

                {/* Specs row */}
                <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap", marginBottom: "1.75rem", paddingBottom: "1.75rem", borderBottom: `1px solid ${BORDER}` }}>
                  {roomSpecs[i].filter(s => s && s !== "—").map((spec, si) => (
                    <div key={si}>
                      <p style={{ fontFamily: "'Cinzel', serif", fontSize: "0.5rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(68,67,64,0.4)", marginBottom: "0.3rem" }}>
                        {si === 0 ? "View / Feature" : si === 1 ? "Feature" : si === 2 ? "Beds" : "Capacity"}
                      </p>
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.82rem", color: C, fontWeight: 300 }}>
                        {spec}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Description */}
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.88rem", lineHeight: 1.9, color: MUTED, fontWeight: 300, marginBottom: "2.5rem" }}>
                  {room.description}
                </p>

                {/* Buttons */}
                <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                  <button
                    onClick={() => go("/contact")}
                    style={{
                      fontFamily: "'Cinzel', serif",
                      fontSize: "0.55rem",
                      letterSpacing: "0.22em",
                      textTransform: "uppercase",
                      color: "#eceae0",
                      backgroundColor: C,
                      border: `1px solid ${C}`,
                      cursor: "pointer",
                      padding: "0.8rem 2rem",
                      transition: "opacity 0.3s ease",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.75"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}
                  >
                    {r.reserve}
                  </button>
                  <button
                    onClick={() => go(`/rooms/${roomSlugs[i]}`)}
                    style={{
                      fontFamily: "'Cinzel', serif",
                      fontSize: "0.55rem",
                      letterSpacing: "0.22em",
                      textTransform: "uppercase",
                      color: C,
                      backgroundColor: "transparent",
                      border: `1px solid ${BORDER}`,
                      cursor: "pointer",
                      padding: "0.8rem 2rem",
                      transition: "border-color 0.3s ease",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = C; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = BORDER; }}
                  >
                    View Suite
                  </button>
                </div>
              </div>

              {/* Right: image */}
              <div style={{ overflow: "hidden" }} className="room-listing-img">
                <img
                  src={roomImages[i]}
                  alt={room.name}
                  style={{ width: "100%", height: "480px", objectFit: "cover", display: "block", transition: "transform 0.9s ease" }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.03)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            borderTop: `1px solid ${BORDER}`,
            paddingTop: "2.5rem",
            marginTop: "2rem",
            textAlign: "center",
          }}
        >
          <p style={{ fontFamily: "'Cinzel', serif", fontSize: "0.6rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(68,67,64,0.45)", lineHeight: 1.8 }}>
            {r.footerNote}
          </p>
        </motion.div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .overview-grid { grid-template-columns: 1fr !important; }
          .room-listing-row { grid-template-columns: 1fr !important; }
          .room-listing-text { padding-right: 0 !important; margin-bottom: 2rem; }
          .room-listing-img img { height: 280px !important; }
        }
      `}</style>
    </section>
  );
}
