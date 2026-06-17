import { useRef, useEffect, useState } from "react";
import { motion } from "motion/react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

const testimonials = [
  { id: 1,  name: "Hannah",       origin: "United Kingdom", flag: "/flags/gb.png",  source: "Booking.com", text: "Such a lovely peaceful place - a great spot to base yourself visiting this area - beautiful terrace, private beach, friendly staff who made us feel welcome and a tasty breakfast." },
  { id: 2,  name: "Alexandru",    origin: "Romania",        flag: "/flags/ro.png",  source: "Booking.com", text: "This kind of place is so rare and truly special, from the stunning location, to the wonderful family that put their heart and work into making it one of the most memorable locations you'll ever stumble upon in your travels." },
  { id: 3,  name: "Simona",       origin: "Serbia",         flag: "/flags/rs.png",  source: "Booking.com", text: "Beautiful place, like a fairy tale. Wonderful smell of the sea and pine trees. Everything looks unreal. I recommend it to everyone, especially those who love the rich marine world and exploring. The food was excellent, the beach and sea fantastic, and the hosts extremely caring and attentive. A true family atmosphere. I would gladly return." },
  { id: 4,  name: "Svitlana",     origin: "Ukraine",        flag: "/flags/ua.png",  source: "Booking.com", text: "This was the best vacation! Everything is thoughtfully designed, beautiful and stylish. Wonderful staff, a private beach, sunbeds, varied breakfast and spacious rooms. Bravo to the hostesses!" },
  { id: 5,  name: "Adam",         origin: "United States",  flag: "/flags/us.png",  source: "Booking.com", text: "Amazing service, amazing staff, and an amazing place. Would love to go back not just for the beauty being on the beach but also due to the amazing hospitality and service!" },
  { id: 6,  name: "Svetla",       origin: "Bulgaria",       flag: "/flags/bg.png",  source: "Booking.com", text: "We loved everything - from the location, to the cleanliness and the picturesque views. The breakfast was super delicious and different every morning, the staff was very kind and willing to help us get settled in easily. It was right on the edge of a cliff with private beach, which made the villa even more pleasant. I'll definitely return there and highly recommend it!" },
  { id: 7,  name: "Vit Otahal",   origin: "Czech Republic", flag: "/flags/cz.png",  source: "Google",      text: "Excellent location, beautiful small secluded almost private beach with full beach service. Friendly owners, comfortable rooms, calm surroundings. A beautifully landscaped garden on a cliff above the sea with many romantic spots to sit and relax. Beach bar staff is kind, professional and very helpful." },
  { id: 8,  name: "ML 7",         origin: "Greece",         flag: "/flags/gr.png",  source: "Google",      text: "A perfect stay – pure relaxation at Villa Romantica! Everything about this place was simply perfect. The hotel is family-run with genuine warmth and hospitality. The rooms are beautiful, the views stunning, and the whole atmosphere incredibly peaceful. The private beach area is a dream. We loved the chill background music, the attention to detail, and the personal touch in everything. Villa Romantica is a true hidden gem – we'll definitely come back!" },
  { id: 9,  name: "Peter_Thanos", origin: "Greece",         flag: "/flags/gr.png",  source: "Google",      text: "A paradise on earth, an atmosphere of colors and emotions that fulfill every fantasy. The warm, human and welcoming environment provides everything needed for both mental and physical rejuvenation." },
  { id: 10, name: "Iro Bale",     origin: "Greece",         flag: "/flags/gr.png",  source: "Google",      text: "After my visit to Villa Romantica, I can say I am incredibly satisfied. The location is magical. The service is excellent and the staff always willing to help. The food was delicious and well-prepared. The rooms are spotless and beautifully decorated. I highly recommend it to anyone looking for a beautiful place to relax by the sea." },
  { id: 11, name: "Γεωργία Σ.",   origin: "Greece",         flag: "/flags/gr.png",  source: "Google",      text: "Built in a very beautiful location with views of endless blue. I was enchanted by the garden. The owners are very hospitable and helpful. It is worth visiting even just to enjoy a drink there." },
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
            <div key={i} style={{ flexShrink: 0, width: "clamp(280px, 32vw, 380px)", backgroundColor: "#e4e2d8", border: "1px solid rgba(68,67,64,0.1)", padding: "1.75rem", pointerEvents: dragging ? "none" : "auto", display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", gap: "3px", marginBottom: "1.25rem" }}>
                {Array.from({ length: 5 }).map((_, si) => (
                  <Star key={si} size={11} fill="rgba(68,67,64,0.5)" stroke="none" />
                ))}
              </div>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.88rem", fontWeight: 300, lineHeight: 1.9, color: "rgba(68,67,64,0.65)", marginBottom: "1.25rem", flex: 1 }}>
                "{item.text}"
              </p>
              <div style={{ borderTop: "1px solid rgba(68,67,64,0.1)", paddingTop: "1rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div>
                  <p style={{ fontFamily: "'Cinzel', serif", fontSize: "0.72rem", color: "#444340", marginBottom: "0.3rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>{item.name}</p>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.68rem", fontWeight: 300, letterSpacing: "0.06em", color: "rgba(68,67,64,0.4)" }}>{item.origin} · {item.source}</p>
                </div>
                <img src={item.flag} alt={item.origin} style={{ width: "22px", height: "16px", objectFit: "cover", borderRadius: "2px", flexShrink: 0 }} />
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
