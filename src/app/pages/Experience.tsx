import { motion } from "motion/react";
import { ExperienceSection } from "../components/sections/ExperienceSection";
import { useLanguage } from "../context/LanguageContext";
import { useTransition } from "../context/TransitionContext";
import { useParallax } from "../hooks/useParallax";

const C      = "#444340";
const MUTED  = "rgba(68,67,64,0.55)";
const BORDER = "rgba(68,67,64,0.1)";

const HERO_IMG        = "/photos/experience/experience-hero-2.jpg";
const BREAKFAST_IMG_1 = "/photos/experience/food-1.jpg";
const BREAKFAST_IMG_2 = "/photos/experience/food-2.jpg";
const DRINKS_IMG_1    = "/photos/experience/drinks-1.jpg";
const DRINKS_IMG_2    = "/photos/experience/drinks-2.jpg";
const QUOTE_IMG       = "/photos/experience/cta-banner.jpg";
const BEACH_IMG       = "/photos/experience/beach-new.jpg";
const EVENTS_IMG      = "/photos/experience/events-new.jpg";

const GALLERY_IMGS = [
  "/photos/experience/gallery-1.jpg",
  "/photos/experience/gallery-2.jpg",
  "/photos/experience/gallery-3.jpg",
  "/photos/experience/gallery-4.jpg",
  "/photos/experience/gallery-5.jpg",
  "/photos/experience/gallery-6.jpg",
  "/photos/experience/gallery-7.jpg",
  "/photos/experience/gallery-8.jpg",
  "/photos/experience/gallery-9.jpg",
  "/photos/experience/gallery-10.jpg",
];

export function Experience() {
  const { t, lang } = useLanguage();
  const e = t.experience;
  const d = t.dining;
  const { go } = useTransition();

  const heroImg    = useParallax(0.18);
  const breakfast1 = useParallax(0.10);
  const breakfast2 = useParallax(0.14);
  const barImg1    = useParallax(0.12);
  const barImg2    = useParallax(0.10);
  const quoteImg   = useParallax(0.16);
  const beachImg   = useParallax(0.14);
  const eventsImg  = useParallax(0.12);

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
      <section style={{ backgroundColor: "#eceae0", padding: "7rem 0" }}>
        <div style={{ maxWidth: "100%", margin: "0 auto", padding: "0 2.5rem" }}>

          {/* Breakfast grid */}
          <div className="dining-grid" style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: "6rem", alignItems: "start" }}>

            {/* Images */}
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem" }}>
              <div style={{ overflow: "hidden", gridColumn: "1 / -1" }}>
                <img ref={breakfast1} src={BREAKFAST_IMG_1} alt="Breakfast"
                  style={{ width: "100%", height: "456px", objectFit: "cover", display: "block", willChange: "transform" }} />
              </div>
              <div style={{ overflow: "hidden", gridColumn: "1 / -1" }}>
                <img ref={breakfast2} src={BREAKFAST_IMG_2} alt="Local produce"
                  style={{ width: "100%", height: "264px", objectFit: "cover", display: "block", willChange: "transform" }} />
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
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", lineHeight: 2.1, color: MUTED, fontWeight: 300, marginBottom: "1.5rem" }}>{d.introP}</p>
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
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", lineHeight: 2.1, color: "rgba(236,234,224,0.5)", fontWeight: 300, marginBottom: "1.5rem" }}>{d.barP2}</p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", lineHeight: 2.1, color: "rgba(236,234,224,0.5)", fontWeight: 300 }}>{d.barP3}</p>
            </motion.div>

            {/* Images */}
            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.1 }}
              style={{ display: "grid", gap: "0.5rem" }}>
              <div style={{ overflow: "hidden" }}>
                <img ref={barImg1} src={DRINKS_IMG_1} alt="Bar & Cocktails"
                  style={{ width: "100%", height: "380px", objectFit: "cover", display: "block", willChange: "transform" }} />
              </div>
              <div style={{ overflow: "hidden" }}>
                <img ref={barImg2} src={DRINKS_IMG_2} alt="Cocktails"
                  style={{ width: "100%", height: "260px", objectFit: "cover", display: "block", willChange: "transform" }} />
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
                ? "«Ξύπνα. Κατέβα. Βούτα.»"
                : '"Wake up. Walk down. Dive in."'}
            </p>
            <div style={{ width: "36px", height: "1px", backgroundColor: "rgba(236,234,224,0.35)", margin: "2rem auto 0" }} />
          </motion.div>
        </div>
      </section>

      {/* ── Beach ── */}
      <section style={{ backgroundColor: "#eceae0", padding: "9rem 0" }}>
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
                  {lang === "el" ? "Η Εμπειρία της Παραλίας" : "The Beach Experience"}
                </span>
                <div style={{ flex: 1, height: "1px", backgroundColor: BORDER }} />
              </div>
              <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: "clamp(1.8rem, 3vw, 2.8rem)", fontWeight: 400, color: C, lineHeight: 1.2, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "2rem" }}>
                {lang === "el" ? <>Η Θάλασσα<br />Στα Πόδια σου</> : <>The Sea at<br />Your Doorstep</>}
              </h2>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", lineHeight: 2.1, color: MUTED, fontWeight: 300, marginBottom: "1.5rem" }}>
                {lang === "el"
                  ? "Μερικές από τις καλύτερες καλοκαιρινές στιγμές είναι συχνά οι πιο απλές. Ένα ήσυχο πρωινό κολύμπι, ένα βιβλίο κάτω από τον ήλιο, ο ήχος των κυμάτων και πουθενά αλλού να χρειάζεται να είσαι."
                  : "Some of the best summer moments are often the simplest. A quiet morning swim, a book under the sun, the sound of the waves and nowhere else you need to be."}
              </p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", lineHeight: 2.1, color: MUTED, fontWeight: 300, marginBottom: "1.5rem" }}>
                {lang === "el"
                  ? "Αποκλειστικά για τους επισκέπτες μας, η ιδιωτική παραλία της Villa Romantica προσφέρει μια αίσθηση άνεσης και ιδιωτικότητας που γίνεται όλο και πιο σπάνια. Περιτριγυρισμένη από κρυστάλλινα νερά και αδιάκοπες θέες στη θάλασσα, δημιουργεί το τέλειο σκηνικό για να επιβραδύνεις και να επανασυνδεθείς με την ουσία του καλοκαιριού."
                  : "Reserved exclusively for our guests, the private beach of Villa Romantica offers a sense of ease and privacy that is becoming increasingly rare. Surrounded by crystal-clear waters and uninterrupted sea views, it creates the perfect setting to slow down and reconnect with the essence of summer."}
              </p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", lineHeight: 2.1, color: MUTED, fontWeight: 300, marginBottom: "2rem" }}>
                {lang === "el"
                  ? "Για όσους επιθυμούν να εξερευνήσουν πέρα από την ακτή, κανό είναι διαθέσιμα καθ' όλη τη διάρκεια της ημέρας, προσφέροντας έναν μοναδικό τρόπο να βιώσεις την ακτογραμμή και την ομορφιά της θάλασσας από διαφορετική οπτική γωνία."
                  : "For those who wish to explore beyond the shore, canoes are available throughout the day, offering a unique way to experience the coastline and the beauty of the sea from a different perspective."}
              </p>
              <p style={{ fontFamily: "'Cinzel', serif", fontSize: "0.75rem", lineHeight: 2, color: "rgba(68,67,64,0.4)", letterSpacing: "0.08em" }}>
                {lang === "el"
                  ? "«Μια εμπειρία διαμορφωμένη από ελευθερία, ηρεμία και την απλή πολυτέλεια να έχεις τη θάλασσα σχεδόν εξ ολοκλήρου για τον εαυτό σου.»"
                  : '"An experience shaped by freedom, tranquility and the simple luxury of having the sea almost entirely to yourself."'}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Special Events ── */}
      <section style={{ backgroundColor: "#1e1d1b", padding: "9rem 0" }}>
        <div style={{ maxWidth: "100%", margin: "0 auto", padding: "0 2.5rem" }}>
          <div className="dining-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: "6rem", alignItems: "center" }}>

            {/* Text */}
            <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}>
              <div style={{ display: "flex", alignItems: "center", gap: "1.25rem", marginBottom: "3rem" }}>
                <span style={{ fontFamily: "'Cinzel', serif", fontSize: "0.55rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "rgba(236,234,224,0.25)", whiteSpace: "nowrap" }}>
                  {lang === "el" ? "Ειδικές Εκδηλώσεις" : "Special Events"}
                </span>
                <div style={{ flex: 1, height: "1px", backgroundColor: "rgba(236,234,224,0.08)" }} />
              </div>
              <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: "clamp(1.8rem, 3vw, 2.8rem)", fontWeight: 400, color: "#eceae0", lineHeight: 1.2, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "2rem" }}>
                {lang === "el" ? <>Καλοκαιρινές Νύχτες,<br />Αναμορφωμένες</> : <>Summer Nights,<br />Reimagined</>}
              </h2>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", lineHeight: 2.1, color: "rgba(236,234,224,0.5)", fontWeight: 300, marginBottom: "1.5rem" }}>
                {lang === "el"
                  ? "Καθ' όλη τη διάρκεια της σεζόν, η Villa Romantica φιλοξενεί μια επιλογή από προσεκτικά επιμελημένες εκδηλώσεις που ενσωματώνονται φυσικά στην ατμόσφαιρα του χώρου. Ζωντανή μουσική, θεματικές συγκεντρώσεις και ειδικά καλοκαιρινά βραδινά πάρτι φέρνουν κοντά ανθρώπους από διαφορετικά μέρη και βιώματα."
                  : "Throughout the season, Villa Romantica hosts a selection of carefully curated events that blend naturally with the atmosphere of the space. Live music, themed gatherings and special summer evening parties bring together people from different places and walks of life, united by a shared appreciation for beautiful surroundings, good company and memorable experiences."}
              </p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", lineHeight: 2.1, color: "rgba(236,234,224,0.5)", fontWeight: 300, marginBottom: "1.5rem" }}>
                {lang === "el"
                  ? "Πάντα σεβόμενες την αισθητική και το πνεύμα της βίλας, αυτές οι στιγμές προσθέτουν μια διαφορετική διάσταση στην εμπειρία — δημιουργώντας βράδια γεμάτα ενέργεια, σύνδεση και το αναλλοίωτο αίσθημα του καλοκαιριού δίπλα στη θάλασσα."
                  : "Always respectful of the villa's aesthetic and spirit, these moments add a different dimension to the experience — creating evenings filled with energy, connection and the unmistakable feeling of summer by the sea."}
              </p>
              <p style={{ fontFamily: "'Cinzel', serif", fontSize: "0.75rem", lineHeight: 2, color: "rgba(236,234,224,0.25)", letterSpacing: "0.08em" }}>
                {lang === "el"
                  ? "«Για όσους αναζητούν κάτι λίγο διαφορετικό — αυτά είναι τα βράδια που αξίζει να μείνεις.»"
                  : '"For those looking for something a little different, these are the nights worth staying for."'}
              </p>
            </motion.div>

            {/* Image */}
            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.1 }}>
              <div style={{ overflow: "hidden" }}>
                <img ref={eventsImg} src={EVENTS_IMG} alt="Special Events"
                  style={{ width: "100%", height: "560px", objectFit: "cover", display: "block", willChange: "transform" }} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Photo Gallery ── */}
      <section style={{ backgroundColor: "#eceae0", padding: "7rem 0" }}>
        <div style={{ maxWidth: "100%", margin: "0 auto", padding: "0 2.5rem" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.9 }}
            style={{ display: "flex", alignItems: "center", gap: "1.5rem", marginBottom: "4rem" }}
          >
            <span style={{ fontFamily: "'Cinzel', serif", fontSize: "0.58rem", letterSpacing: "0.32em", textTransform: "uppercase", color: "rgba(68,67,64,0.4)", whiteSpace: "nowrap" }}>
              {lang === "el" ? "Η Ζωή στη Βίλα" : "Life at the Villa"}
            </span>
            <div style={{ flex: 1, height: "1px", backgroundColor: BORDER }} />
          </motion.div>

          {/* 10-photo freeform grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: "0.5rem" }}>
            {/* Row 1: large left (span 7) + tall right (span 5) */}
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
              style={{ gridColumn: "1 / 8", overflow: "hidden" }}>
              <img src={GALLERY_IMGS[0]} alt="" style={{ width: "100%", height: "400px", objectFit: "cover", display: "block" }} />
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.05 }}
              style={{ gridColumn: "8 / 13", overflow: "hidden" }}>
              <img src={GALLERY_IMGS[1]} alt="" style={{ width: "100%", height: "400px", objectFit: "cover", display: "block" }} />
            </motion.div>

            {/* Row 2: 3 equal columns */}
            {[2, 3, 4].map((i, idx) => (
              <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: idx * 0.06 }}
                style={{ gridColumn: `${1 + idx * 4} / ${5 + idx * 4}`, overflow: "hidden" }}>
                <img src={GALLERY_IMGS[i]} alt="" style={{ width: "100%", height: "300px", objectFit: "cover", display: "block" }} />
              </motion.div>
            ))}

            {/* Row 3: small (span 5) + large (span 7) */}
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
              style={{ gridColumn: "1 / 6", overflow: "hidden" }}>
              <img src={GALLERY_IMGS[5]} alt="" style={{ width: "100%", height: "340px", objectFit: "cover", display: "block" }} />
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.05 }}
              style={{ gridColumn: "6 / 13", overflow: "hidden" }}>
              <img src={GALLERY_IMGS[6]} alt="" style={{ width: "100%", height: "340px", objectFit: "cover", display: "block" }} />
            </motion.div>

            {/* Row 4: 3 equal columns */}
            {[7, 8, 9].map((i, idx) => (
              <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: idx * 0.06 }}
                style={{ gridColumn: `${1 + idx * 4} / ${5 + idx * 4}`, overflow: "hidden" }}>
                <img src={GALLERY_IMGS[i]} alt="" style={{ width: "100%", height: "280px", objectFit: "cover", display: "block" }} />
              </motion.div>
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .gallery-grid > div { grid-column: 1 / -1 !important; }
          }
        `}</style>
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
