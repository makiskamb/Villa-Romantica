import { useLanguage } from "../../context/LanguageContext";
import { useTransition } from "../../context/TransitionContext";

const HERO_VIDEO = "https://cdn.builder.io/o/assets%2F7d5202236cd845e8b5ebf8eed31e0b5e%2F3f9a9943c3384b57a9cf0918be1d4003%2Fcompressed?apiKey=7d5202236cd845e8b5ebf8eed31e0b5e&token=3f9a9943c3384b57a9cf0918be1d4003&alt=media&optimized=true";
const HERO_POSTER = "/photos/hero/hero-1.jpg";

export function HeroSection() {
  const { t } = useLanguage();
  const h = t.hero;
  const { go } = useTransition();

  return (
    <section
      id="home"
      style={{ position: "relative", height: "100vh", minHeight: "600px", overflow: "hidden" }}
    >
      {/* Video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster={HERO_POSTER}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
        }}
      >
        <source src={HERO_VIDEO} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(170deg, rgba(68,67,64,0.08) 0%, rgba(68,67,64,0.38) 55%, rgba(68,67,64,0.62) 100%)",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "0 2.5rem clamp(4rem, 8vw, 7rem)",
          maxWidth: "100%",
          margin: "0 auto",
        }}
      >
        {/* Heading + subtitle — ultra discreet */}
        <div style={{ marginBottom: "2.2rem", maxWidth: "520px" }}>
          <p
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "clamp(0.65rem, 1.1vw, 0.85rem)",
              fontWeight: 400,
              fontStyle: "italic",
              color: "rgba(236,234,224,0.38)",
              letterSpacing: "0.06em",
              marginBottom: "0.6rem",
              lineHeight: 1.4,
            }}
          >
            {h.heading}
          </p>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(0.65rem, 0.9vw, 0.76rem)",
              fontWeight: 300,
              color: "rgba(236,234,224,0.22)",
              lineHeight: 1.8,
              letterSpacing: "0.01em",
            }}
          >
            {h.subtitle}
          </p>
        </div>

        {/* Buttons — minimal ghost */}
        <div style={{ display: "flex", gap: "0.85rem", flexWrap: "wrap" }}>
          <button
            onClick={() => go("/contact")}
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "0.48rem",
              letterSpacing: "0.26em",
              textTransform: "uppercase",
              color: "rgba(236,234,224,0.42)",
              backgroundColor: "transparent",
              border: "1px solid rgba(236,234,224,0.18)",
              cursor: "pointer",
              padding: "0.75rem 2rem",
              transition: "color 0.4s ease, border-color 0.4s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "rgba(236,234,224,0.78)";
              e.currentTarget.style.borderColor = "rgba(236,234,224,0.45)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "rgba(236,234,224,0.42)";
              e.currentTarget.style.borderColor = "rgba(236,234,224,0.18)";
            }}
          >
            {h.book}
          </button>

          <button
            onClick={() => go("/rooms")}
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "0.48rem",
              letterSpacing: "0.26em",
              textTransform: "uppercase",
              color: "rgba(236,234,224,0.28)",
              backgroundColor: "transparent",
              border: "none",
              cursor: "pointer",
              padding: "0.75rem 0.5rem",
              transition: "color 0.4s ease",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "rgba(236,234,224,0.65)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(236,234,224,0.28)"; }}
          >
            {h.explore}
          </button>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            position: "absolute",
            bottom: "clamp(4.5rem, 8vw, 7rem)",
            right: "2.5rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.75rem",
          }}
        >
          <span
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "0.45rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "rgba(236,234,224,0.25)",
              writingMode: "vertical-rl",
              textOrientation: "mixed",
            }}
          >
            Scroll
          </span>
          <div
            style={{
              width: "1px",
              height: "46px",
              backgroundColor: "rgba(236,234,224,0.2)",
              animation: "scrollLine 2s ease-in-out infinite",
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes scrollLine {
          0%   { opacity: 0.2; transform: scaleY(1) translateY(0); }
          50%  { opacity: 0.55; transform: scaleY(0.5) translateY(0); }
          100% { opacity: 0.2; transform: scaleY(1) translateY(0); }
        }
      `}</style>
    </section>
  );
}
