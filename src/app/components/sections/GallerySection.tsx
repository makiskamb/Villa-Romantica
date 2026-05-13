import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useLanguage } from "../../context/LanguageContext";

type Category = "All" | "Rooms" | "Beach" | "Garden" | "Views";

const allImages = [
  { src: "/photos/gallery/gallery-1.jpg",  alt: "Villa Romantica",       category: "Views"  as Category },
  { src: "/photos/gallery/gallery-2.jpg",  alt: "Villa exterior",        category: "Views"  as Category },
  { src: "/photos/gallery/gallery-3.jpg",  alt: "Room detail",           category: "Rooms"  as Category },
  { src: "/photos/gallery/gallery-4.jpg",  alt: "Suite interior",        category: "Rooms"  as Category },
  { src: "/photos/gallery/gallery-5.jpg",  alt: "Sea view",              category: "Beach"  as Category },
  { src: "/photos/gallery/gallery-6.jpg",  alt: "Garden & terrace",      category: "Garden" as Category },
  { src: "/photos/gallery/gallery-7.jpg",  alt: "Aegean coastline",      category: "Beach"  as Category },
  { src: "/photos/gallery/gallery-8.jpg",  alt: "Room interior",         category: "Rooms"  as Category },
  { src: "/photos/gallery/gallery-9.jpg",  alt: "Garden path",           category: "Garden" as Category },
  { src: "/photos/gallery/gallery-10.jpg", alt: "Panoramic sea view",    category: "Views"  as Category },
  { src: "/photos/gallery/gallery-11.jpg", alt: "Private terrace",       category: "Garden" as Category },
  { src: "/photos/gallery/gallery-12.jpg", alt: "Beach access",          category: "Beach"  as Category },
  { src: "/photos/gallery/gallery-13.jpg", alt: "Suite detail",          category: "Rooms"  as Category },
];

const catKeys: Category[] = ["All", "Rooms", "Beach", "Garden", "Views"];
const C = "#444340";
const BORDER = "rgba(68,67,64,0.12)";

export function GallerySection() {
  const [active, setActive] = useState<Category>("All");
  const { t } = useLanguage();
  const g = t.gallery;

  const filtered = active === "All" ? allImages : allImages.filter((img) => img.category === active);

  return (
    <section id="gallery" style={{ backgroundColor: "#eceae0", padding: "10rem 0" }}>
      <div style={{ maxWidth: "100%", margin: "0 auto", padding: "0 2.5rem" }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          style={{ marginBottom: "4rem" }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", marginBottom: "2.5rem" }}>
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
              {g.label}
            </span>
            <div style={{ flex: 1, height: "1px", backgroundColor: BORDER }} />
          </div>
          <h2
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "clamp(2.2rem, 4.5vw, 3.6rem)",
              fontWeight: 400,
              color: C,
              lineHeight: 1.15,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
            }}
          >
            {g.heading}
          </h2>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{
            display: "flex",
            gap: "0",
            marginBottom: "3.5rem",
            borderBottom: `1px solid ${BORDER}`,
            flexWrap: "wrap",
          }}
        >
          {catKeys.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "0.58rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: active === cat ? C : "rgba(68,67,64,0.4)",
                background: "none",
                border: "none",
                borderBottom: active === cat ? `1px solid ${C}` : "1px solid transparent",
                cursor: "pointer",
                padding: "0.85rem 1.5rem",
                transition: "all 0.25s ease",
                marginBottom: "-1px",
              }}
            >
              {g.cats[cat]}
            </button>
          ))}
        </motion.div>

        {/* Masonry */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45 }}
          >
            <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 640: 2, 1024: 3 }}>
              <Masonry gutter="0.75rem">
                {filtered.map((img, i) => (
                  <div
                    key={`${active}-${i}`}
                    style={{ overflow: "hidden", cursor: "pointer" }}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      style={{
                        width: "100%",
                        display: "block",
                        transition: "transform 0.7s ease",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.04)")}
                      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                    />
                  </div>
                ))}
              </Masonry>
            </ResponsiveMasonry>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
