import { useParams } from "react-router";
import { motion } from "motion/react";
import {
  Sun, Eye, Wind, Wifi, Coffee, Waves, Sparkles,
  Droplets, Leaf, Star, Anchor, Wine, ArrowLeft,
  Maximize2, Users,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { useTransition } from "../context/TransitionContext";
import { getRoomBySlug, rooms } from "../data/rooms";

const C = "#444340";
const MUTED = "rgba(68,67,64,0.55)";
const BORDER = "rgba(68,67,64,0.1)";

const iconMap: Record<string, React.ElementType> = {
  sun: Sun, eye: Eye, wind: Wind, wifi: Wifi, coffee: Coffee,
  waves: Waves, sparkles: Sparkles, droplets: Droplets,
  leaf: Leaf, star: Star, anchor: Anchor, wine: Wine,
};

const specIcons: Record<string, React.ElementType> = {
  area: Maximize2, view: Eye, beds: Star, guests: Users, feature: Sun,
};

export function RoomDetail() {
  const { slug } = useParams<{ slug: string }>();
  const { lang } = useLanguage();
  const { go } = useTransition();
  const room = getRoomBySlug(slug ?? "");

  if (!room) {
    return (
      <main style={{ minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ textAlign: "center" }}>
          <p style={{ fontFamily: "'Cinzel', serif", color: C, fontSize: "1.2rem", letterSpacing: "0.1em" }}>
            Suite not found.
          </p>
          <button onClick={() => go("/rooms")} style={{ marginTop: "1.5rem", fontFamily: "'Cinzel', serif", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", background: "none", border: `1px solid ${BORDER}`, cursor: "pointer", padding: "0.8rem 2rem", color: C }}>
            Back to Rooms
          </button>
        </div>
      </main>
    );
  }

  const gr = lang === "el";
  const name = gr ? room.nameGr : room.name;
  const tag = gr ? room.tagGr : room.tag;
  const description = gr ? room.longDescriptionGr : room.longDescription;
  const quote = gr ? room.quoteGr : room.quote;

  const heroPhoto = room.photos[0];
  const secondPhoto = room.photos[1];
  const thirdPhoto = room.photos[2];
  const galleryPhotos = room.photos.slice(3);

  const otherRooms = rooms.filter((r) => r.slug !== room.slug).slice(0, 3);

  const specs = [
    { label: lang === "el" ? "Μέγεθος" : "Size", value: room.area, icon: "area" },
    { label: lang === "el" ? "Θέα" : "View", value: gr ? room.viewGr : room.view, icon: "view" },
    { label: lang === "el" ? "Κρεβάτι" : "Beds", value: gr ? room.bedsGr : room.beds, icon: "beds" },
    { label: lang === "el" ? "Επισκέπτες" : "Guests", value: room.guests, icon: "guests" },
    { label: lang === "el" ? "Χαρακτηριστικό" : "Feature", value: gr ? room.featureGr : room.feature, icon: "feature" },
  ];

  return (
    <main>

      {/* ── Hero ── */}
      <section style={{ position: "relative", height: "100vh", minHeight: "600px", overflow: "hidden" }}>
        <img
          src={heroPhoto}
          alt={name}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(30,29,27,0.85) 0%, rgba(30,29,27,0.2) 50%, rgba(30,29,27,0.3) 100%)" }} />

        {/* Back button */}
        <button
          onClick={() => go("/rooms")}
          style={{
            position: "absolute", top: "calc(86px + 2rem)", left: "2.5rem",
            display: "flex", alignItems: "center", gap: "0.6rem",
            fontFamily: "'Cinzel', serif", fontSize: "0.55rem", letterSpacing: "0.22em",
            textTransform: "uppercase", color: "rgba(236,234,224,0.7)",
            background: "none", border: "none", cursor: "pointer", transition: "color 0.3s ease",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.color = "#eceae0"; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(236,234,224,0.7)"; }}
        >
          <ArrowLeft size={13} strokeWidth={1.5} />
          {lang === "el" ? "Όλες οι Σουίτες" : "All Suites"}
        </button>

        {/* Room name */}
        <div
          style={{
            position: "absolute", bottom: 0, left: 0, right: 0,
            padding: "0 2.5rem clamp(3rem, 6vw, 5rem)",
            maxWidth: "100%", margin: "0 auto",
          }}
        >
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <p style={{ fontFamily: "'Cinzel', serif", fontSize: "0.55rem", letterSpacing: "0.38em", textTransform: "uppercase", color: "rgba(236,234,224,0.5)", marginBottom: "1rem" }}>
              {tag}
            </p>
            <h1 style={{ fontFamily: "'Cinzel', serif", fontSize: "clamp(3rem, 8vw, 7rem)", fontWeight: 400, color: "#ffffff", lineHeight: 1, letterSpacing: "0.06em", textTransform: "uppercase", margin: 0 }}>
              {name}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* ── Specs Strip ── */}
      <section style={{ backgroundColor: C, padding: "0" }}>
        <div style={{ maxWidth: "100%", margin: "0 auto", padding: "0 2.5rem" }}>
          <div
            className="specs-strip"
            style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)" }}
          >
            {specs.map((spec, i) => {
              const Icon = specIcons[spec.icon];
              return (
                <div
                  key={spec.label}
                  style={{
                    padding: "2rem 1.5rem",
                    borderLeft: i > 0 ? "1px solid rgba(236,234,224,0.08)" : "none",
                    display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "0.5rem",
                  }}
                >
                  <Icon size={13} strokeWidth={1.5} color="rgba(236,234,224,0.3)" />
                  <p style={{ fontFamily: "'Cinzel', serif", fontSize: "0.45rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(236,234,224,0.3)", margin: 0 }}>
                    {spec.label}
                  </p>
                  <p style={{ fontFamily: "'Cinzel', serif", fontSize: "0.72rem", letterSpacing: "0.08em", color: "#eceae0", margin: 0 }}>
                    {spec.value}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Description ── */}
      <section style={{ backgroundColor: "#ffffff", padding: "8rem 0" }}>
        <div style={{ maxWidth: "100%", margin: "0 auto", padding: "0 2.5rem" }}>
          <div className="room-desc-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "6rem", alignItems: "start" }}>

            {/* Left: text */}
            <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}>
              <div style={{ display: "flex", alignItems: "center", gap: "1.25rem", marginBottom: "3rem" }}>
                <span style={{ fontFamily: "'Cinzel', serif", fontSize: "0.55rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "rgba(68,67,64,0.4)", whiteSpace: "nowrap" }}>
                  {lang === "el" ? "Η Σουίτα" : "The Suite"}
                </span>
                <div style={{ flex: 1, height: "1px", backgroundColor: BORDER }} />
              </div>

              <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: "clamp(1.6rem, 2.5vw, 2.4rem)", fontWeight: 400, color: C, lineHeight: 1.2, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "2rem" }}>
                {name}
              </h2>

              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", lineHeight: 2.1, color: MUTED, fontWeight: 300, marginBottom: "2.5rem" }}>
                {description}
              </p>

              <p style={{ fontFamily: "'Cinzel', serif", fontSize: "0.8rem", lineHeight: 1.8, color: "rgba(68,67,64,0.38)", letterSpacing: "0.05em", fontStyle: "italic", borderLeft: `2px solid ${BORDER}`, paddingLeft: "1.25rem" }}>
                {quote}
              </p>

              <div style={{ marginTop: "3.5rem", display: "flex", gap: "1rem" }}>
                <button
                  onClick={() => go("/contact")}
                  style={{
                    fontFamily: "'Cinzel', serif", fontSize: "0.55rem", letterSpacing: "0.22em",
                    textTransform: "uppercase", color: "#eceae0", backgroundColor: C,
                    border: `1px solid ${C}`, cursor: "pointer", padding: "0.9rem 2.25rem", transition: "opacity 0.3s ease",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.75"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}
                >
                  {lang === "el" ? "Κάντε Κράτηση" : "Reserve This Suite"}
                </button>
                <button
                  onClick={() => go("/contact")}
                  style={{
                    fontFamily: "'Cinzel', serif", fontSize: "0.55rem", letterSpacing: "0.22em",
                    textTransform: "uppercase", color: C, backgroundColor: "transparent",
                    border: `1px solid ${BORDER}`, cursor: "pointer", padding: "0.9rem 2.25rem", transition: "border-color 0.3s ease",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = C; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = BORDER; }}
                >
                  {lang === "el" ? "Επικοινωνήστε μαζί μας" : "Enquire"}
                </button>
              </div>
            </motion.div>

            {/* Right: photos stacked */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.12 }}
              style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <div style={{ overflow: "hidden" }}>
                <img src={secondPhoto} alt={name} style={{ width: "100%", height: "440px", objectFit: "cover", display: "block", transition: "transform 0.9s ease" }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.03)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }} />
              </div>
              {thirdPhoto && (
                <div style={{ overflow: "hidden" }}>
                  <img src={thirdPhoto} alt={name} style={{ width: "100%", height: "280px", objectFit: "cover", display: "block", transition: "transform 0.9s ease" }}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.03)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }} />
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Photo Gallery ── */}
      {galleryPhotos.length > 0 && (
        <section style={{ backgroundColor: "#eceae0", padding: "8rem 0" }}>
          <div style={{ maxWidth: "100%", margin: "0 auto", padding: "0 2.5rem" }}>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }}
              style={{ marginBottom: "4rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
                <span style={{ fontFamily: "'Cinzel', serif", fontSize: "0.55rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "rgba(68,67,64,0.4)", whiteSpace: "nowrap" }}>
                  {lang === "el" ? "Φωτογραφίες" : "Gallery"}
                </span>
                <div style={{ flex: 1, height: "1px", backgroundColor: BORDER }} />
              </div>
            </motion.div>

            {/* Masonry-style gallery with varied row patterns */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {/* Chunk photos into rows with alternating patterns */}
              {chunkGallery(galleryPhotos).map((row, ri) => (
                <motion.div
                  key={ri}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: ri * 0.06 }}
                  style={{ display: "grid", gap: "0.5rem", gridTemplateColumns: row.cols }}
                >
                  {row.photos.map((src, pi) => (
                    <div key={pi} style={{ overflow: "hidden" }}>
                      <img
                        src={src}
                        alt={`${name} ${pi + 1}`}
                        style={{
                          width: "100%",
                          height: `${row.height}px`,
                          objectFit: "cover",
                          display: "block",
                          transition: "transform 0.8s ease",
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.04)"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
                      />
                    </div>
                  ))}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Amenities ── */}
      <section style={{ backgroundColor: "#ffffff", padding: "8rem 0" }}>
        <div style={{ maxWidth: "100%", margin: "0 auto", padding: "0 2.5rem" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }}
            style={{ marginBottom: "4rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
              <span style={{ fontFamily: "'Cinzel', serif", fontSize: "0.55rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "rgba(68,67,64,0.4)", whiteSpace: "nowrap" }}>
                {lang === "el" ? "Παροχές" : "Amenities"}
              </span>
              <div style={{ flex: 1, height: "1px", backgroundColor: BORDER }} />
            </div>
          </motion.div>

          <div className="amenities-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "0" }}>
            {room.amenities.map((amenity, i) => {
              const Icon = iconMap[amenity.icon] ?? Star;
              const label = gr ? amenity.labelGr : amenity.label;
              return (
                <motion.div
                  key={amenity.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.06 }}
                  style={{
                    padding: "2rem",
                    borderTop: `1px solid ${BORDER}`,
                    borderLeft: i % 4 > 0 ? `1px solid ${BORDER}` : "none",
                    display: "flex", alignItems: "flex-start", gap: "1rem",
                  }}
                >
                  <Icon size={15} strokeWidth={1.5} color="rgba(68,67,64,0.4)" style={{ flexShrink: 0, marginTop: "2px" }} />
                  <p style={{ fontFamily: "'Cinzel', serif", fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", color: C }}>
                    {label}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Book CTA ── */}
      <section style={{ backgroundColor: C, padding: "7rem 0" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          style={{ textAlign: "center", padding: "0 2.5rem" }}
        >
          <div style={{ width: "1px", height: "50px", backgroundColor: "rgba(236,234,224,0.15)", margin: "0 auto 3rem" }} />
          <p style={{ fontFamily: "'Cinzel', serif", fontSize: "0.55rem", letterSpacing: "0.38em", textTransform: "uppercase", color: "rgba(236,234,224,0.4)", marginBottom: "1.5rem" }}>
            {tag}
          </p>
          <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: "clamp(1.8rem, 4vw, 3.2rem)", fontWeight: 400, color: "#eceae0", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "2.5rem" }}>
            {lang === "el" ? `Κλείστε τη Σουίτα ${name}` : `Reserve ${name}`}
          </h2>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <button
              onClick={() => go("/contact")}
              style={{
                fontFamily: "'Cinzel', serif", fontSize: "0.58rem", letterSpacing: "0.22em",
                textTransform: "uppercase", color: "#444340", backgroundColor: "#eceae0",
                border: "none", cursor: "pointer", padding: "1rem 3rem", transition: "opacity 0.3s ease",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.8"; }}
              onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}
            >
              {lang === "el" ? "Κράτηση Τώρα" : "Book Now"}
            </button>
            <button
              onClick={() => go("/rooms")}
              style={{
                fontFamily: "'Cinzel', serif", fontSize: "0.58rem", letterSpacing: "0.22em",
                textTransform: "uppercase", color: "rgba(236,234,224,0.6)",
                backgroundColor: "transparent", border: "1px solid rgba(236,234,224,0.2)",
                cursor: "pointer", padding: "1rem 3rem", transition: "border-color 0.3s ease",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(236,234,224,0.6)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(236,234,224,0.2)"; }}
            >
              {lang === "el" ? "Όλες οι Σουίτες" : "All Suites"}
            </button>
          </div>
          <div style={{ width: "1px", height: "50px", backgroundColor: "rgba(236,234,224,0.15)", margin: "3rem auto 0" }} />
        </motion.div>
      </section>

      {/* ── Other Suites ── */}
      <section style={{ backgroundColor: "#eceae0", padding: "8rem 0" }}>
        <div style={{ maxWidth: "100%", margin: "0 auto", padding: "0 2.5rem" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }}
            style={{ marginBottom: "4rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
              <span style={{ fontFamily: "'Cinzel', serif", fontSize: "0.55rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "rgba(68,67,64,0.4)", whiteSpace: "nowrap" }}>
                {lang === "el" ? "Άλλες Σουίτες" : "Other Suites"}
              </span>
              <div style={{ flex: 1, height: "1px", backgroundColor: BORDER }} />
            </div>
          </motion.div>

          <div className="other-suites-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0.5rem" }}>
            {otherRooms.map((r, i) => (
              <motion.div
                key={r.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                style={{ cursor: "pointer" }}
                onClick={() => go(`/rooms/${r.slug}`)}
              >
                <div style={{ overflow: "hidden", marginBottom: "1.25rem" }}>
                  <img
                    src={r.photos[0]}
                    alt={gr ? r.nameGr : r.name}
                    style={{ width: "100%", height: "320px", objectFit: "cover", display: "block", transition: "transform 0.8s ease" }}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.04)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
                  />
                </div>
                <p style={{ fontFamily: "'Cinzel', serif", fontSize: "0.5rem", letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(68,67,64,0.4)", marginBottom: "0.5rem" }}>
                  {gr ? r.tagGr : r.tag}
                </p>
                <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: "1.1rem", fontWeight: 400, color: C, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
                  {gr ? r.nameGr : r.name}
                </h3>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.82rem", lineHeight: 1.8, color: MUTED, fontWeight: 300, marginBottom: "1.25rem" }}>
                  {gr ? r.descriptionGr : r.description}
                </p>
                <button
                  onClick={(e) => { e.stopPropagation(); go(`/rooms/${r.slug}`); }}
                  style={{
                    fontFamily: "'Cinzel', serif", fontSize: "0.5rem", letterSpacing: "0.2em",
                    textTransform: "uppercase", color: C, background: "none",
                    border: `1px solid ${BORDER}`, cursor: "pointer", padding: "0.7rem 1.5rem",
                    transition: "border-color 0.3s ease",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = C; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = BORDER; }}
                >
                  {lang === "el" ? "Δείτε τη Σουίτα" : "View Suite"}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 1024px) {
          .specs-strip { grid-template-columns: repeat(3, 1fr) !important; }
          .amenities-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 768px) {
          .room-desc-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .specs-strip { grid-template-columns: repeat(2, 1fr) !important; }
          .other-suites-grid { grid-template-columns: 1fr !important; }
          .amenities-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .specs-strip { grid-template-columns: 1fr 1fr !important; }
          .amenities-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </main>
  );
}

/** Split gallery photos into rows with alternating visual patterns */
function chunkGallery(photos: string[]): { photos: string[]; cols: string; height: number }[] {
  const patterns = [
    { count: 2, cols: "3fr 2fr", height: 440 },
    { count: 3, cols: "1fr 1fr 1fr", height: 320 },
    { count: 2, cols: "2fr 3fr", height: 440 },
    { count: 1, cols: "1fr", height: 520 },
    { count: 3, cols: "1fr 1fr 1fr", height: 300 },
  ];

  const rows: { photos: string[]; cols: string; height: number }[] = [];
  let i = 0;
  let patternIdx = 0;

  while (i < photos.length) {
    const pattern = patterns[patternIdx % patterns.length];
    const slice = photos.slice(i, i + pattern.count);
    if (slice.length === 0) break;

    // If last row doesn't fill the pattern, fall back to equal columns
    const cols = slice.length === pattern.count
      ? pattern.cols
      : `repeat(${slice.length}, 1fr)`;

    rows.push({ photos: slice, cols, height: pattern.height });
    i += slice.length;
    patternIdx++;
  }

  return rows;
}
