import { motion } from "motion/react";
import { ExperienceSection } from "../components/sections/ExperienceSection";
import { useLanguage } from "../context/LanguageContext";
import { useTransition } from "../context/TransitionContext";

const C = "#444340";
const MUTED = "rgba(68,67,64,0.55)";
const BORDER = "rgba(68,67,64,0.1)";

const HERO_IMG        = "/photos/experience/experience-1.jpg";
const BREAKFAST_IMG_1 = "/photos/experience/experience-4.jpg";
const BREAKFAST_IMG_2 = "/photos/gallery/gallery-9.jpg";
const BAR_HERO_IMG    = "/photos/experience/experience-6.jpg";
const BAR_IMG_2       = "/photos/experience/experience-7.jpg";
const LOCAL_IMG_1     = "/photos/gallery/gallery-5.jpg";
const LOCAL_IMG_2     = "/photos/experience/experience-3.jpg";
const STRIP_IMGS      = [
  "/photos/gallery/gallery-12.jpg",
  "/photos/experience/experience-5.jpg",
  "/photos/gallery/gallery-7.jpg",
  "/photos/gallery/gallery-11.jpg",
];

export function Experience() {
  const { t, lang } = useLanguage();
  const e = t.experience;
  const d = t.dining;
  const { go } = useTransition();

  return (
    <main>

      {/* ── Experience Hero ── */}
      <section style={{ position: "relative", height: "65vh", minHeight: "420px", overflow: "hidden" }}>
        <img
          src={HERO_IMG}
          alt="Villa Romantica experience"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(170deg, rgba(68,67,64,0.2) 0%, rgba(68,67,64,0.55) 100%)" }} />
        <div style={{ position: "relative", height: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "0 2.5rem clamp(3rem, 6vw, 5rem)", maxWidth: "100%", margin: "0 auto" }}>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <p style={{ fontFamily: "'Cinzel', serif", fontSize: "0.55rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "rgba(236,234,224,0.55)", marginBottom: "1rem" }}>
              Villa Romantica · {e.label}
            </p>
            <h1 style={{ fontFamily: "'Cinzel', serif", fontSize: "clamp(2.5rem, 6vw, 5rem)", fontWeight: 400, color: "#ffffff", lineHeight: 1.1, letterSpacing: "0.1em", textTransform: "uppercase" }}>
              {e.heading[0]}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Intro strip */}
      <div style={{ backgroundColor: "#ffffff", borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: "100%", margin: "0 auto", padding: "3.5rem 2.5rem" }}>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.88rem", lineHeight: 2, color: "rgba(68,67,64,0.6)", fontWeight: 300, maxWidth: "680px" }}>
            {lang === "el"
              ? "Κάθε λεπτομέρεια στη Villa Romantica είναι βαθμονομημένη για ευκολία — από το πρωινό τραπέζι στην άκρη του νερού έως τη βραδινή σιωπή του Αιγαίου. Εδώ, η εμπειρία δεν είναι πρόγραμμα. Είναι ένα συναίσθημα."
              : "Every detail at Villa Romantica is calibrated for ease — from the morning table set at the water's edge to the evening silence of the Aegean. Here, experience is not a programme. It is a feeling."}
          </p>
        </div>
      </div>

      {/* ── Experience Sections + Amenities ── */}
      <ExperienceSection />

      {/* ── Food & Drinks — Intro ── */}
      <section style={{ backgroundColor: "#ffffff", padding: "7rem 0" }}>
        <div style={{ maxWidth: "100%", margin: "0 auto", padding: "0 2.5rem" }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            style={{ maxWidth: "680px" }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "1.25rem", marginBottom: "3rem" }}>
              <span style={{ fontFamily: "'Cinzel', serif", fontSize: "0.55rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "rgba(68,67,64,0.4)", whiteSpace: "nowrap" }}>
                {d.introLabel}
              </span>
              <div style={{ flex: 1, height: "1px", backgroundColor: BORDER }} />
            </div>
            <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: "clamp(2rem, 4vw, 3.4rem)", fontWeight: 400, color: C, lineHeight: 1.15, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "2rem" }}>
              {d.introHeading[0]}<br />{d.introHeading[1]}
            </h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", lineHeight: 2.1, color: MUTED, fontWeight: 300 }}>
              {d.introP}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Photo Strip ── */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }} className="photo-strip">
        {STRIP_IMGS.map((src, i) => (
          <div key={i} style={{ overflow: "hidden" }}>
            <img
              src={src}
              alt=""
              style={{ width: "100%", height: "260px", objectFit: "cover", display: "block", transition: "transform 0.8s ease" }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.05)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
            />
          </div>
        ))}
      </div>

      {/* ── Breakfast ── */}
      <section style={{ backgroundColor: "#eceae0", padding: "9rem 0" }}>
        <div style={{ maxWidth: "100%", margin: "0 auto", padding: "0 2.5rem" }}>
          <div className="dining-grid" style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: "6rem", alignItems: "start" }}>

            {/* Images */}
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem" }}>
              <div style={{ overflow: "hidden", gridColumn: "1 / -1" }}>
                <img src={BREAKFAST_IMG_1} alt="Breakfast" style={{ width: "100%", height: "380px", objectFit: "cover", display: "block", transition: "transform 0.9s ease" }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.03)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }} />
              </div>
              <div style={{ overflow: "hidden", gridColumn: "1 / 2" }}>
                <img src={BREAKFAST_IMG_2} alt="Local produce" style={{ width: "100%", height: "220px", objectFit: "cover", display: "block", transition: "transform 0.9s ease" }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.04)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }} />
              </div>
              <div style={{ backgroundColor: C, padding: "2rem", display: "flex", flexDirection: "column", justifyContent: "center", minHeight: "220px" }}>
                {d.breakfastItems.map((item, i) => (
                  <p key={i} style={{ fontFamily: "'Cinzel', serif", fontSize: "0.55rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(236,234,224,0.6)", lineHeight: 2.2, margin: 0 }}>
                    {item}
                  </p>
                ))}
              </div>
            </motion.div>

            {/* Text */}
            <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.12 }}>
              <div style={{ display: "flex", alignItems: "center", gap: "1.25rem", marginBottom: "3rem" }}>
                <span style={{ fontFamily: "'Cinzel', serif", fontSize: "0.55rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "rgba(68,67,64,0.4)", whiteSpace: "nowrap" }}>
                  {d.breakfastLabel}
                </span>
                <div style={{ flex: 1, height: "1px", backgroundColor: BORDER }} />
              </div>
              <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: "clamp(1.8rem, 3vw, 2.8rem)", fontWeight: 400, color: C, lineHeight: 1.2, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "2rem" }}>
                {d.breakfastHeading[0]}<br />{d.breakfastHeading[1]}
              </h2>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", lineHeight: 2.1, color: MUTED, fontWeight: 300, marginBottom: "1.5rem" }}>
                {d.breakfastP1}
              </p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", lineHeight: 2.1, color: MUTED, fontWeight: 300 }}>
                {d.breakfastP2}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Bar Quote Banner ── */}
      <section style={{ position: "relative", height: "clamp(300px, 42vw, 560px)", overflow: "hidden" }}>
        <img src={BAR_HERO_IMG} alt="Beach bar" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%" }} />
        <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(30,29,27,0.56)" }} />
        <div style={{ position: "relative", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "2rem" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}>
            <div style={{ width: "1px", height: "50px", backgroundColor: "rgba(236,234,224,0.25)", margin: "0 auto 2.5rem" }} />
            <p style={{ fontFamily: "'Cinzel', serif", fontSize: "clamp(1.1rem, 3vw, 2.4rem)", fontWeight: 400, color: "#ffffff", letterSpacing: "0.1em", textTransform: "uppercase", maxWidth: "700px", lineHeight: 1.5 }}>
              {lang === "el"
                ? "«Ένα καλό ποτό πριν το ηλιοβασίλεμα δεν είναι πολυτέλεια — είναι υποχρέωση.»"
                : '"A good drink before sunset is not a luxury — it is an obligation."'}
            </p>
            <div style={{ width: "40px", height: "1px", backgroundColor: "rgba(236,234,224,0.35)", margin: "2.5rem auto 0" }} />
          </motion.div>
        </div>
      </section>

      {/* ── Bar & Drinks ── */}
      <section style={{ backgroundColor: "#1e1d1b", padding: "9rem 0" }}>
        <div style={{ maxWidth: "100%", margin: "0 auto", padding: "0 2.5rem" }}>
          <div className="dining-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: "6rem", alignItems: "start" }}>

            {/* Text + menu */}
            <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}>
              <div style={{ display: "flex", alignItems: "center", gap: "1.25rem", marginBottom: "3rem" }}>
                <span style={{ fontFamily: "'Cinzel', serif", fontSize: "0.55rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "rgba(236,234,224,0.25)", whiteSpace: "nowrap" }}>
                  {d.barLabel}
                </span>
                <div style={{ flex: 1, height: "1px", backgroundColor: "rgba(236,234,224,0.08)" }} />
              </div>
              <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: "clamp(1.8rem, 3vw, 2.8rem)", fontWeight: 400, color: "#eceae0", lineHeight: 1.2, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "2rem" }}>
                {d.barHeading[0]}<br />{d.barHeading[1]}
              </h2>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", lineHeight: 2.1, color: "rgba(236,234,224,0.5)", fontWeight: 300, marginBottom: "1.5rem" }}>
                {d.barP1}
              </p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", lineHeight: 2.1, color: "rgba(236,234,224,0.5)", fontWeight: 300, marginBottom: "3.5rem" }}>
                {d.barP2}
              </p>
              <div style={{ display: "flex", flexDirection: "column" }}>
                {d.barItems.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: i * 0.1 }}
                    style={{ padding: "1.5rem 0", borderTop: "1px solid rgba(236,234,224,0.07)", display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "2rem" }}
                  >
                    <div>
                      <p style={{ fontFamily: "'Cinzel', serif", fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#eceae0", marginBottom: "0.4rem" }}>
                        {item.name}
                      </p>
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.78rem", color: "rgba(236,234,224,0.38)", fontWeight: 300, lineHeight: 1.7 }}>
                        {item.desc}
                      </p>
                    </div>
                    <div style={{ width: "1px", height: "32px", backgroundColor: "rgba(236,234,224,0.1)", flexShrink: 0, marginTop: "4px" }} />
                  </motion.div>
                ))}
                <div style={{ paddingTop: "1.5rem", borderTop: "1px solid rgba(236,234,224,0.07)" }} />
              </div>
            </motion.div>

            {/* Image */}
            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.1 }}>
              <div style={{ overflow: "hidden" }}>
                <img src={BAR_IMG_2} alt="Bar drinks" style={{ width: "100%", height: "460px", objectFit: "cover", display: "block", transition: "transform 0.9s ease" }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.03)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Local Dining ── */}
      <section style={{ backgroundColor: "#ffffff", padding: "9rem 0" }}>
        <div style={{ maxWidth: "100%", margin: "0 auto", padding: "0 2.5rem" }}>
          <div className="dining-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "center" }}>

            {/* Images */}
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}
              style={{ display: "grid", gap: "0.5rem" }}>
              <div style={{ overflow: "hidden" }}>
                <img src={LOCAL_IMG_1} alt="Village dining" style={{ width: "100%", height: "340px", objectFit: "cover", display: "block", transition: "transform 0.9s ease" }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.04)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }} />
              </div>
              <div style={{ overflow: "hidden" }}>
                <img src={LOCAL_IMG_2} alt="Palio village" style={{ width: "100%", height: "240px", objectFit: "cover", display: "block", transition: "transform 0.9s ease" }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.04)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }} />
              </div>
            </motion.div>

            {/* Text */}
            <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.12 }}>
              <div style={{ display: "flex", alignItems: "center", gap: "1.25rem", marginBottom: "3rem" }}>
                <span style={{ fontFamily: "'Cinzel', serif", fontSize: "0.55rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "rgba(68,67,64,0.4)", whiteSpace: "nowrap" }}>
                  {d.localLabel}
                </span>
                <div style={{ flex: 1, height: "1px", backgroundColor: BORDER }} />
              </div>
              <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: "clamp(1.8rem, 3vw, 2.8rem)", fontWeight: 400, color: C, lineHeight: 1.2, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "2rem" }}>
                {d.localHeading[0]}<br />{d.localHeading[1]}
              </h2>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", lineHeight: 2.1, color: MUTED, fontWeight: 300, marginBottom: "1.5rem" }}>
                {d.localP1}
              </p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", lineHeight: 2.1, color: MUTED, fontWeight: 300 }}>
                {d.localP2}
              </p>
              <div style={{ marginTop: "3rem", padding: "2rem", backgroundColor: "#eceae0", borderLeft: `3px solid ${C}` }}>
                <p style={{ fontFamily: "'Cinzel', serif", fontSize: "0.55rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(68,67,64,0.45)", marginBottom: "0.75rem" }}>
                  {lang === "el" ? "Η Σύσταση μας" : "Our Recommendation"}
                </p>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", lineHeight: 1.9, color: MUTED, fontWeight: 300, margin: 0 }}>
                  {lang === "el"
                    ? "Ρωτήστε μας για τις ταβέρνες του Παλιού — ξέρουμε πού κάθεται η αλιευτική παράδοση και πού σερβίρεται η καλύτερη φρέσκια ψαρόσουπα."
                    : "Ask us about the tavernas of Palio — we know where the fishing tradition sits and where the best fresh fish soup is served."}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ backgroundColor: C, padding: "7rem 0" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          style={{ textAlign: "center", padding: "0 2.5rem" }}
        >
          <div style={{ width: "1px", height: "50px", backgroundColor: "rgba(236,234,224,0.15)", margin: "0 auto 3rem" }} />
          <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 400, color: "#eceae0", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "2.5rem" }}>
            {d.ctaHeading}
          </h2>
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
            {d.ctaButton}
          </button>
          <div style={{ width: "1px", height: "50px", backgroundColor: "rgba(236,234,224,0.15)", margin: "3rem auto 0" }} />
        </motion.div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .dining-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .photo-strip { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .photo-strip { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}
