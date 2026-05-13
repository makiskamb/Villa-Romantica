import { useRef, useEffect, useState } from "react";
import { motion } from "motion/react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

const testimonials = [
  { id: 1, name: "Maria K.",   origin: "Athens, Greece",      text: "Waking up to the sound of the Aegean every morning was something I will never forget. Villa Romantica is pure magic — intimate, beautiful, and deeply peaceful." },
  { id: 2, name: "Stefan M.", origin: "Cologne, Germany",     text: "The most breathtaking sea view I have ever experienced from a hotel room. The hospitality was impeccable and the breakfast made with local ingredients was exceptional." },
  { id: 3, name: "Sophie L.", origin: "Paris, France",        text: "Un vrai bijou caché sur la côte égéenne. The private beach, the garden bar at sunset, the atmosphere — everything was parfait. We are already planning our return." },
  { id: 4, name: "Nikos P.",  origin: "Thessaloniki, Greece", text: "Just an hour from the city but worlds apart. Villa Romantica feels like your own private island. We come back every summer — it has become our family ritual." },
  { id: 5, name: "James R.",  origin: "London, UK",           text: "Villa Romantica exceeded every expectation. The sea views were spectacular, the team was genuinely caring, and the whole experience felt effortlessly luxurious." },
];

const N      = testimonials.length;   // 5
const CARD_W = 404;                   // 380px card + 24px gap
const SET_W  = N * CARD_W;            // 2020px — one full copy width

// Three identical copies → seamless loop in both directions
const display = [...testimonials, ...testimonials, ...testimonials];

export function TestimonialsSection() {
  const { t } = useLanguage();
  const ts = t.testimonials;

  const trackRef  = useRef<HTMLDivElement>(null);
  // All mutable drag state lives in a ref so it's always current inside native listeners
  const dragRef   = useRef({ active: false, startX: 0, scrollLeft: SET_W });
  const smoothRef = useRef(false); // prevents loop logic during arrow smooth-scroll
  const [dragging, setDragging] = useState(false);

  /* ── Infinite loop: keep scrollLeft inside the middle copy ── */
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    // Start in the middle copy so both directions have buffer
    el.scrollLeft = SET_W;

    const loop = () => {
      if (smoothRef.current) return;
      if (el.scrollLeft < SET_W) {
        // Drifted into the first copy → jump to equivalent position in middle copy
        el.scrollLeft += SET_W;
        dragRef.current.scrollLeft += SET_W; // keep drag anchor in sync
      } else if (el.scrollLeft >= SET_W * 2) {
        // Drifted into the third copy → jump back to middle copy
        el.scrollLeft -= SET_W;
        dragRef.current.scrollLeft -= SET_W;
      }
    };

    el.addEventListener("scroll", loop, { passive: true });
    return () => el.removeEventListener("scroll", loop);
  }, []);

  /* ── Arrow navigation (always targets middle copy, smooth) ── */
  const scrollArrow = (dir: "left" | "right") => {
    const el = trackRef.current;
    if (!el) return;

    // Derive current card index from scroll position
    const rel     = el.scrollLeft - SET_W;
    const cur     = Math.round(rel / CARD_W);
    const nxt     = ((cur + (dir === "right" ? 1 : -1)) % N + N) % N;
    const target  = SET_W + nxt * CARD_W;

    smoothRef.current = true;
    el.scrollTo({ left: target, behavior: "smooth" });
    // Give smooth scroll time to finish before re-enabling loop
    setTimeout(() => { smoothRef.current = false; }, 700);
  };

  /* ── Mouse drag ── */
  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = trackRef.current;
    if (!el) return;
    setDragging(true);
    dragRef.current = { active: true, startX: e.pageX, scrollLeft: el.scrollLeft };
  };

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!dragRef.current.active || !trackRef.current) return;
    e.preventDefault();
    const walk = (e.pageX - dragRef.current.startX) * 1.4;
    trackRef.current.scrollLeft = dragRef.current.scrollLeft - walk;
  };

  const onMouseUp = () => {
    setDragging(false);
    dragRef.current.active = false;
  };

  /* ── Arrow button style ── */
  const arrowStyle: React.CSSProperties = {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    border: "1px solid rgba(236,234,224,0.15)",
    backgroundColor: "rgba(236,234,224,0.1)",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    transition: "background 0.25s ease, border-color 0.25s ease",
  };

  return (
    <section style={{ backgroundColor: "#444340", padding: "10rem 0", overflow: "hidden" }}>
      <div style={{ maxWidth: "100%", margin: "0 auto", padding: "0 2.5rem" }}>

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          style={{ marginBottom: "6rem" }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", marginBottom: "2.5rem" }}>
            <span style={{ fontFamily: "'Cinzel', serif", fontSize: "0.58rem", letterSpacing: "0.32em", textTransform: "uppercase", color: "rgba(236,234,224,0.35)", whiteSpace: "nowrap" }}>
              {ts.label}
            </span>
            <div style={{ flex: 1, height: "1px", backgroundColor: "rgba(236,234,224,0.1)" }} />
          </div>

          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "2rem" }}>
            <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: "clamp(2.2rem, 4.5vw, 3.6rem)", fontWeight: 400, color: "#eceae0", lineHeight: 1.15, letterSpacing: "0.06em", textTransform: "uppercase", maxWidth: "600px", margin: 0 }}>
              {ts.heading[0]}<br />{ts.heading[1]}
            </h2>

            <div style={{ display: "flex", gap: "0.65rem", flexShrink: 0, paddingBottom: "0.25rem" }}>
              <button
                onClick={() => scrollArrow("left")}
                style={arrowStyle}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "rgba(236,234,224,0.18)"; e.currentTarget.style.borderColor = "rgba(236,234,224,0.3)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "rgba(236,234,224,0.1)";  e.currentTarget.style.borderColor = "rgba(236,234,224,0.15)"; }}
                aria-label="Previous review"
              >
                <ChevronLeft size={15} color="rgba(236,234,224,0.7)" strokeWidth={1.5} />
              </button>
              <button
                onClick={() => scrollArrow("right")}
                style={arrowStyle}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "rgba(236,234,224,0.18)"; e.currentTarget.style.borderColor = "rgba(236,234,224,0.3)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "rgba(236,234,224,0.1)";  e.currentTarget.style.borderColor = "rgba(236,234,224,0.15)"; }}
                aria-label="Next review"
              >
                <ChevronRight size={15} color="rgba(236,234,224,0.7)" strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </motion.div>

        {/* ── Infinite drag-scroll track ── */}
        <div
          ref={trackRef}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
          style={{
            display: "flex",
            gap: "1.5rem",
            overflowX: "auto",
            paddingBottom: "2rem",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            cursor: dragging ? "grabbing" : "grab",
            userSelect: "none",
            WebkitUserSelect: "none",
          }}
        >
          {display.map((item, i) => (
            <div
              key={i}
              style={{
                flexShrink: 0,
                width: "clamp(280px, 32vw, 380px)",
                backgroundColor: "rgba(236,234,224,0.06)",
                border: "1px solid rgba(236,234,224,0.09)",
                padding: "2.5rem",
                pointerEvents: dragging ? "none" : "auto",
              }}
            >
              <div style={{ display: "flex", gap: "3px", marginBottom: "1.75rem" }}>
                {Array.from({ length: 5 }).map((_, si) => (
                  <Star key={si} size={11} fill="rgba(236,234,224,0.6)" stroke="none" />
                ))}
              </div>

              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.88rem", fontWeight: 300, lineHeight: 1.9, color: "rgba(236,234,224,0.7)", marginBottom: "2rem" }}>
                "{item.text}"
              </p>

              <div style={{ borderTop: "1px solid rgba(236,234,224,0.09)", paddingTop: "1.25rem" }}>
                <p style={{ fontFamily: "'Cinzel', serif", fontSize: "0.72rem", color: "rgba(236,234,224,0.85)", marginBottom: "0.3rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  {item.name}
                </p>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.68rem", fontWeight: 300, letterSpacing: "0.06em", color: "rgba(236,234,224,0.35)" }}>
                  {item.origin}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Bottom quote ── */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.3 }}
          style={{ fontFamily: "'Cinzel', serif", fontSize: "clamp(1.1rem, 2.5vw, 1.8rem)", fontWeight: 400, color: "rgba(236,234,224,0.14)", textAlign: "center", marginTop: "6rem", letterSpacing: "0.12em", textTransform: "uppercase" }}
        >
          {ts.quote}
        </motion.p>
      </div>

      <style>{`div::-webkit-scrollbar { display: none; }`}</style>
    </section>
  );
}
