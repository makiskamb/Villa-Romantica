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

const N = testimonials.length;
const display = [...testimonials, ...testimonials, ...testimonials];

export function TestimonialsSection() {
  const { t } = useLanguage();
  const ts = t.testimonials;

  const trackRef   = useRef<HTMLDivElement>(null);
  const setW       = useRef(0);   // measured at runtime — correct on every screen size
  const dragRef    = useRef({ active: false, startX: 0, scrollLeft: 0 });
  const smoothRef  = useRef(false);
  const pausedRef  = useRef(false);
  const rafRef     = useRef<number>(0);
  const [dragging, setDragging] = useState(false);

  /* ── Measure actual set width after layout, then seed scroll position ── */
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const init = () => {
      // scrollWidth covers all 3 copies → one copy = scrollWidth / 3
      setW.current = Math.round(el.scrollWidth / 3);
      el.scrollLeft = setW.current;
      dragRef.current.scrollLeft = setW.current;
    };
    requestAnimationFrame(init);
  }, []);

  /* ── Infinite loop: keep scrollLeft in the middle copy ── */
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const loop = () => {
      if (smoothRef.current) return;
      const sw = setW.current;
      if (sw === 0) return;
      if (el.scrollLeft < sw) {
        el.scrollLeft += sw;
        dragRef.current.scrollLeft += sw;
      } else if (el.scrollLeft >= sw * 2) {
        el.scrollLeft -= sw;
        dragRef.current.scrollLeft -= sw;
      }
    };
    el.addEventListener("scroll", loop, { passive: true });
    return () => el.removeEventListener("scroll", loop);
  }, []);

  /* ── Auto-scroll via RAF ── */
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const tick = () => {
      if (!pausedRef.current && !smoothRef.current) {
        el.scrollLeft += 0.6;
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  /* ── Touch events via native listeners (passive:false allows preventDefault) ── */
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const onTouchStart = (e: TouchEvent) => {
      pausedRef.current = true;
      dragRef.current = { active: true, startX: e.touches[0].pageX, scrollLeft: el.scrollLeft };
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!dragRef.current.active) return;
      e.preventDefault(); // works because passive: false — stops browser native scroll fighting ours
      const walk = (e.touches[0].pageX - dragRef.current.startX) * 1.4;
      el.scrollLeft = dragRef.current.scrollLeft - walk;
    };

    const onTouchEnd = () => {
      dragRef.current.active = false;
      setTimeout(() => { pausedRef.current = false; }, 800);
    };

    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchmove",  onTouchMove,  { passive: false });
    el.addEventListener("touchend",   onTouchEnd,   { passive: true });

    return () => {
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchmove",  onTouchMove);
      el.removeEventListener("touchend",   onTouchEnd);
    };
  }, []);

  /* ── Arrow navigation ── */
  const scrollArrow = (dir: "left" | "right") => {
    const el = trackRef.current;
    if (!el) return;
    const sw = setW.current;
    if (sw === 0) return;
    const cardW = sw / N;
    const rel   = el.scrollLeft - sw;
    const cur   = Math.round(rel / cardW);
    const nxt   = ((cur + (dir === "right" ? 1 : -1)) % N + N) % N;
    const target = sw + nxt * cardW;
    smoothRef.current = true;
    el.scrollTo({ left: target, behavior: "smooth" });
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
  const onMouseUp = () => { setDragging(false); dragRef.current.active = false; };
  const onMouseLeaveTrack = () => { dragRef.current.active = false; setDragging(false); };

  const arrowStyle: React.CSSProperties = {
    width: "40px", height: "40px", borderRadius: "50%",
    border: "1px solid rgba(68,67,64,0.2)", backgroundColor: "transparent",
    cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
    flexShrink: 0, transition: "background 0.25s ease, border-color 0.25s ease",
  };

  return (
    <section className="testimonials-section" style={{ backgroundColor: "#eceae0", padding: "10rem 0", overflow: "hidden" }}>
      <div style={{ maxWidth: "100%", margin: "0 auto", padding: "0 2.5rem" }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.9 }}
          className="testimonials-header" style={{ marginBottom: "6rem" }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", marginBottom: "2.5rem" }}>
            <span style={{ fontFamily: "'Cinzel', serif", fontSize: "0.58rem", letterSpacing: "0.32em", textTransform: "uppercase", color: "rgba(68,67,64,0.4)", whiteSpace: "nowrap" }}>
              {ts.label}
            </span>
            <div style={{ flex: 1, height: "1px", backgroundColor: "rgba(68,67,64,0.12)" }} />
          </div>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "2rem" }}>
            <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: "clamp(2.2rem, 4.5vw, 3.6rem)", fontWeight: 400, color: "#444340", lineHeight: 1.15, letterSpacing: "0.06em", textTransform: "uppercase", maxWidth: "600px", margin: 0 }}>
              {ts.heading[0]}<br />{ts.heading[1]}
            </h2>
            <div style={{ display: "flex", gap: "0.65rem", flexShrink: 0, paddingBottom: "0.25rem" }}>
              <button onClick={() => scrollArrow("left")} style={arrowStyle} aria-label="Previous review"
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "rgba(68,67,64,0.08)"; e.currentTarget.style.borderColor = "rgba(68,67,64,0.35)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.borderColor = "rgba(68,67,64,0.2)"; }}>
                <ChevronLeft size={15} color="rgba(68,67,64,0.6)" strokeWidth={1.5} />
              </button>
              <button onClick={() => scrollArrow("right")} style={arrowStyle} aria-label="Next review"
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "rgba(68,67,64,0.08)"; e.currentTarget.style.borderColor = "rgba(68,67,64,0.35)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.borderColor = "rgba(68,67,64,0.2)"; }}>
                <ChevronRight size={15} color="rgba(68,67,64,0.6)" strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Track */}
        <div
          ref={trackRef}
          className="testimonials-track"
          onMouseLeave={onMouseLeaveTrack}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          style={{
            display: "flex", gap: "1.5rem", overflowX: "auto",
            paddingBottom: "2rem", scrollbarWidth: "none", msOverflowStyle: "none",
            cursor: dragging ? "grabbing" : "grab",
            userSelect: "none", WebkitUserSelect: "none",
          }}
        >
          {display.map((item, i) => (
            <div key={i} style={{ flexShrink: 0, width: "clamp(280px, 32vw, 380px)", backgroundColor: "#ffffff", border: "1px solid rgba(68,67,64,0.1)", padding: "2.5rem", pointerEvents: dragging ? "none" : "auto" }}>
              <div style={{ display: "flex", gap: "3px", marginBottom: "1.75rem" }}>
                {Array.from({ length: 5 }).map((_, si) => (
                  <Star key={si} size={11} fill="rgba(68,67,64,0.5)" stroke="none" />
                ))}
              </div>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.88rem", fontWeight: 300, lineHeight: 1.9, color: "rgba(68,67,64,0.65)", marginBottom: "2rem" }}>
                "{item.text}"
              </p>
              <div style={{ borderTop: "1px solid rgba(68,67,64,0.1)", paddingTop: "1.25rem" }}>
                <p style={{ fontFamily: "'Cinzel', serif", fontSize: "0.72rem", color: "#444340", marginBottom: "0.3rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>{item.name}</p>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.68rem", fontWeight: 300, letterSpacing: "0.06em", color: "rgba(68,67,64,0.4)" }}>{item.origin}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom quote */}
        <motion.p
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.9, delay: 0.3 }}
          style={{ fontFamily: "'Cinzel', serif", fontSize: "clamp(1.1rem, 2.5vw, 1.8rem)", fontWeight: 400, color: "rgba(68,67,64,0.12)", textAlign: "center", marginTop: "6rem", letterSpacing: "0.12em", textTransform: "uppercase" }}
        >
          {ts.quote}
        </motion.p>
      </div>

      <style>{`
        div::-webkit-scrollbar { display: none; }
        @media (max-width: 768px) {
          .testimonials-track > div { width: 85vw !important; }
          .testimonials-section { padding: 5rem 0 !important; }
          .testimonials-header { margin-bottom: 3rem !important; }
        }
      `}</style>
    </section>
  );
}
