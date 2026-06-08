import { motion } from "motion/react";
import { ExperienceSection } from "../components/sections/ExperienceSection";
import { useLanguage } from "../context/LanguageContext";
import { useTransition } from "../context/TransitionContext";
import { useParallax } from "../hooks/useParallax";

const C      = "#444340";
const MUTED  = "rgba(68,67,64,0.55)";
const BORDER = "rgba(68,67,64,0.1)";

const HERO_IMG        = "/photos/experience/experience-1.jpg";
const BREAKFAST_IMG_1 = "/photos/experience/experience-4.jpg";
const BREAKFAST_IMG_2 = "/photos/gallery/gallery-9.jpg";
const BAR_IMG         = "/photos/experience/experience-7.jpg";
const QUOTE_IMG       = "/photos/experience/experience-6.jpg";
const BEACH_IMG       = "/photos/gallery/gallery-12.jpg";
const LOCAL_IMG_1     = "/photos/gallery/gallery-5.jpg";
const LOCAL_IMG_2     = "/photos/experience/experience-3.jpg";

export function Experience() {
  const { t, lang } = useLanguage();
  const e = t.experience;
  const d = t.dining;
  const { go } = useTransition();

  const heroImg    = useParallax(0.18);
  const breakfast1 = useParallax(0.10);
  const breakfast2 = useParallax(0.14);
  const barImg     = useParallax(0.12);
  const quoteImg   = useParallax(0.16);
  const beachImg   = useParallax(0.14);
  const localImg1  = useParallax(0.11);
  const localImg2  = useParallax(0.13);

  return (
    <main>

      {/* ── Hero ── */}
      <section style={{ position: "relative", height: "65vh", minHeight: "420px", overflow: "hidden" }}>
        <img
          ref={heroImg}
          src={HERO_IMG}
          alt="Villa Romantica experience"
          style={{
            position: "absolute", inset: 0,
            width: "100%", height: "130%", top: "-15%",
            objectFit: "cover", objectPosition: "center 40%",
            willChange: "transform",
          }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(170deg, rgba(68,67,64,0.2) 0%, rgba(68,67,64,0.55) 100%)" }} />
        <div style={{ position: "relative", height: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "0 2.5rem clamp(3rem, 6vw, 5rem)" }}>
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

      {/* ── Text + 01 02 03... + 3 Photos + Amenities ── */}
      <ExperienceSection />

      {/* ── Food & Breakfast ── */}
      <section style={{ backgroundColor: "#eceae0", padding: "9rem 0" }}>
        <div style={{ maxWidth: "100%", margin: "0 auto", padding: "0 2.5rem" }}>

          {/* Section intro */}
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}
            style={{ marginBottom: "6rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1.25rem", marginBottom: "3rem" }}>
              <span style={{ fontFamily: "'Cinzel', serif", fontSize: "0.55rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "rgba(68,67,64,0.4)", whiteSpace: "nowrap" }}>
                {d.introLabel}
              </span>
              <div style={{ flex: 1, height: "1px", backgroundColor: BORDER }} />
            </div>
            <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: "clamp(2rem, 4vw, 3.4rem)", fontWeight: 400, color: C, lineHeight: 1.15, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "1.5rem" }}>
              {d.introHeading[0]} {d.introHeading[1]}
            </h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", lineHeight: 2.1, color: MUTED, fontWeight: 300, maxWidth: "600px" }}>
              {d.introP}
            </p>
          </motion.div>

          {/* Breakfast grid */}
          <div className="dining-grid" style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: "6rem", alignItems: "start" }}>

            {/* Images */}
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem" }}>
              <div style={{ overflow: "hidden", gridColumn: "1 / -1" }}>
                <img ref={breakfast1} src={BREAKFAST_IMG_1} alt="Breakfast"
                  style={{ width: "100%", height: "456px", objectFit: "cover", display: "block", willChange: "transform" }} />
              </div>
              <div style={{ overflow: "hidden" }}>
                <img ref={breakfast2} src={BREAKFAST_IMG_2} alt="Local produce"
                  style={{ width: "100%", height: "264px", objectFit: "cover", display: "block", willChange: "transform" }} />
              </div>
              <div style={{ backgroundColor: C, padding: "2rem", display: "flex", flexDirection: "column", justifyContent: "center", minHeight: "264px" }}>
                {d.breakfastItems.map((item: string, i: number) => (
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
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", lineHeight: 2.1, color: MUTED, fontWeight: 300, marginBottom: "1.5rem" }}>{d.breakfastP1}</p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", lineHeight: 2.1, color: MUTED, fontWeight: 300 }}>{d.breakfastP2}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Drinks & Cocktails ── */}
      <section style={{ backgroundColor: "#1e1d1b", padding: "9rem 0" }}>
        <div style={{ maxWidth: "100%", margin: "0 auto", padding: "0 2.5rem" }}>
          <div className="dining-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: "6rem", alignItems: "start" }}>

            {/* Text */}
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
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", lineHeight: 2.1, color: "rgba(236,234,224,0.5)", fontWeight: 300, marginBottom: "1.5rem" }}>{d.barP1}</p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", lineHeight: 2.1, color: "rgba(236,234,224,0.5)", fontWeight: 300, marginBottom: "3.5rem" }}>{d.barP2}</p>
              <div style={{ display: "flex", flexDirection: "column" }}>
                {d.barItems.map((item: { name: string; desc: string }, i: number) => (
                  <motion.div key={item.name} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: i * 0.1 }}
                    style={{ padding: "1.5rem 0", borderTop: "1px solid rgba(236,234,224,0.07)", display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "2rem" }}>
                    <div>
                      <p style={{ fontFamily: "'Cinzel', serif", fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#eceae0", marginBottom: "0.4rem" }}>{item.name}</p>
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.78rem", color: "rgba(236,234,224,0.38)", fontWeight: 300, lineHeight: 1.7 }}>{item.desc}</p>
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
                <img ref={barImg} src={BAR_IMG} alt="Bar & Cocktails"
                  style={{ width: "100%", height: "552px", objectFit: "cover", display: "block", willChange: "transform" }} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Quote Banner ── */}
      <section style={{ position: "relative", height: "clamp(280px, 40vw, 520px)", overflow: "hidden" }}>
        <img
          ref={quoteImg}
          src={QUOTE_IMG}
          alt="Beach bar sunset"
          style={{
            position: "absolute", inset: 0,
            width: "100%", height: "130%", top: "-15%",
            objectFit: "cover", objectPosition: "center 40%",
            willChange: "transform",
          }}
        />
        <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(30,29,27,0.52)" }} />
        <div style={{ position: "relative", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "2rem" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}>
            <div style={{ width: "1px", height: "40px", backgroundColor: "rgba(236,234,224,0.25)", margin: "0 auto 2rem" }} />
            <p style={{ fontFamily: "'Cinzel', serif", fontSize: "clamp(1rem, 2.8vw, 2.2rem)", fontWeight: 400, color: "#ffffff", letterSpacing: "0.1em", textTransform: "uppercase", maxWidth: "680px", lineHeight: 1.6 }}>
              {lang === "el"
                ? "«Ένα καλό ποτό πριν το ηλιοβασίλεμα δεν είναι πολυτέλεια — είναι υποχρέωση.»"
                : '"A good drink before sunset is not a luxury — it is an obligation."'}
            </p>
            <div style={{ width: "36px", height: "1px", backgroundColor: "rgba(236,234,224,0.35)", margin: "2rem auto 0" }} />
          </motion.div>
        </div>
      </section>

      {/* ── Beach ── */}
      <section style={{ backgroundColor: "#ffffff", padding: "9rem 0" }}>
        <div style={{ maxWidth: "100%", margin: "0 auto", padding: "0 2.5rem" }}>
          <div className="dining-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "center" }}>

            {/* Image */}
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}
              style={{ overflow: "hidden" }}>
              <img ref={beachImg} src={BEACH_IMG} alt="Private beach"
                style={{ width: "100%", height: "560px", objectFit: "cover", display: "block", willChange: "transform" }} />
            </motion.div>

            {/* Text */}
            <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.12 }}>
              <div style={{ display: "flex", alignItems: "center", gap: "1.25rem", marginBottom: "3rem" }}>
                <span style={{ fontFamily: "'Cinzel', serif", fontSize: "0.55rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "rgba(68,67,64,0.4)", whiteSpace: "nowrap" }}>
                  {lang === "el" ? "Η Παραλία" : "The Beach"}
                </span>
                <div style={{ flex: 1, height: "1px", backgroundColor: BORDER }} />
              </div>
              <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: "clamp(1.8rem, 3vw, 2.8rem)", fontWeight: 400, color: C, lineHeight: 1.2, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "2rem" }}>
                {lang === "el" ? <>Ιδιωτική Παραλία,<br />Στα Πόδια Σας</> : <>Private Beach,<br />At Your Feet</>}
              </h2>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", lineHeight: 2.1, color: MUTED, fontWeight: 300, marginBottom: "1.5rem" }}>
                {lang === "el"
                  ? "Η παραλία της Villa Romantica είναι ιδιωτική — αυτό σημαίνει ότι ο χώρος είναι δικός σας. Ξαπλώστρες, σκίαστρα και η θάλασσα ακριβώς μπροστά σας, χωρίς ανησυχίες."
                  : "The beach at Villa Romantica is private — which means the space is yours. Sun loungers, shade, and the sea directly in front of you, without the crowd. The water here is clear, calm, and cold in the way that Aegean water always is."}
              </p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", lineHeight: 2.1, color: MUTED, fontWeight: 300 }}>
                {lang === "el"
                  ? "Το νερό εδώ είναι διαυγές, ήρεμο και δροσερό με τον τρόπο που είναι πάντα το Αιγαίο. Μπορείτε να κολυμπάτε το πρωί πριν φτάσει κανείς άλλος, ή να μείνετε μέχρι το σούρουπο."
                  : "You can swim in the morning before anyone else arrives, or stay until dusk. The beach bar is steps away when you need it. The sea is always there when you do not."}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Beyond ── */}
      <section style={{ backgroundColor: "#eceae0", padding: "9rem 0" }}>
        <div style={{ maxWidth: "100%", margin: "0 auto", padding: "0 2.5rem" }}>
          <div className="dining-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "center" }}>

            {/* Text */}
            <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}>
              <div style={{ display: "flex", alignItems: "center", gap: "1.25rem", marginBottom: "3rem" }}>
                <span style={{ fontFamily: "'Cinzel', serif", fontSize: "0.55rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "rgba(68,67,64,0.4)", whiteSpace: "nowrap" }}>
                  {d.localLabel}
                </span>
                <div style={{ flex: 1, height: "1px", backgroundColor: BORDER }} />
              </div>
              <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: "clamp(1.8rem, 3vw, 2.8rem)", fontWeight: 400, color: C, lineHeight: 1.2, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "2rem" }}>
                {d.localHeading[0]}<br />{d.localHeading[1]}
              </h2>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", lineHeight: 2.1, color: MUTED, fontWeight: 300, marginBottom: "1.5rem" }}>{d.localP1}</p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", lineHeight: 2.1, color: MUTED, fontWeight: 300, marginBottom: "2.5rem" }}>{d.localP2}</p>
              <div style={{ padding: "2rem", backgroundColor: "#ffffff", borderLeft: `2px solid ${BORDER}` }}>
                <p style={{ fontFamily: "'Cinzel', serif", fontSize: "0.5rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(68,67,64,0.4)", marginBottom: "0.75rem" }}>
                  {lang === "el" ? "Η Σύσταση μας" : "Our Recommendation"}
                </p>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", lineHeight: 1.9, color: MUTED, fontWeight: 300, margin: 0 }}>
                  {lang === "el"
                    ? "Ρωτήστε μας για τις ταβέρνες του Παλιού — ξέρουμε πού κάθεται η αλιευτική παράδοση και πού σερβίρεται η καλύτερη φρέσκια ψαρόσουπα."
                    : "Ask us about the tavernas of Palio — we know where the fishing tradition sits and where the best fresh fish soup is served."}
                </p>
              </div>
            </motion.div>

            {/* Images */}
            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.12 }}
              style={{ display: "grid", gap: "0.5rem" }}>
              <div style={{ overflow: "hidden" }}>
                <img ref={localImg1} src={LOCAL_IMG_1} alt="Village dining"
                  style={{ width: "100%", height: "380px", objectFit: "cover", display: "block", willChange: "transform" }} />
              </div>
              <div style={{ overflow: "hidden" }}>
                <img ref={localImg2} src={LOCAL_IMG_2} alt="Palio village"
                  style={{ width: "100%", height: "260px", objectFit: "cover", display: "block", willChange: "transform" }} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── "Makes you think of love" CTA ── */}
      <section style={{ backgroundColor: "#eceae0", padding: "6rem 0", borderTop: "1px solid rgba(68,67,64,0.1)" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }}
          style={{ textAlign: "center", padding: "0 2.5rem" }}>
          <div style={{ width: "1px", height: "40px", backgroundColor: "rgba(68,67,64,0.15)", margin: "0 auto 2.5rem" }} />
          <p style={{ fontFamily: "'Cinzel', serif", fontSize: "0.5rem", letterSpacing: "0.38em", textTransform: "uppercase", color: "rgba(68,67,64,0.4)", marginBottom: "1.5rem" }}>
            Villa Romantica
          </p>
          <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: "clamp(1.8rem, 4vw, 3.2rem)", fontWeight: 400, color: C, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "1rem" }}>
            {lang === "el" ? "Σε Κάνει να Σκεφτείς την Αγάπη" : "Makes you think of love"}
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.88rem", lineHeight: 2, color: MUTED, fontWeight: 300, marginBottom: "3rem", maxWidth: "480px", margin: "0 auto 3rem" }}>
            {lang === "el"
              ? "Ένας τόπος για να επιβραδύνεις, να αναπνεύσεις και να ζήσεις το καλοκαίρι όπως πρέπει να νιώθεται."
              : "A place to slow down, breathe, and experience summer the way it should feel."}
          </p>
          <button onClick={() => go("/contact")}
            style={{ fontFamily: "'Cinzel', serif", fontSize: "0.58rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#eceae0", backgroundColor: C, border: "none", cursor: "pointer", padding: "1rem 3rem", transition: "opacity 0.3s ease" }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.8"; }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}>
            {lang === "el" ? "Κάντε Κράτηση" : "Reserve Your Stay"}
          </button>
          <div style={{ width: "1px", height: "40px", backgroundColor: "rgba(68,67,64,0.15)", margin: "2.5rem auto 0" }} />
        </motion.div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .dining-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </main>
  );
}
