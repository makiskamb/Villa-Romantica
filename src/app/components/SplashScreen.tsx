import { useState, useEffect } from "react";

type Phase = "gif" | "logo" | "tagline" | "hold" | "leaving" | "done";

export function SplashScreen() {
  const [phase, setPhase] = useState<Phase>("gif");

  useEffect(() => {
    if (sessionStorage.getItem("splashShown")) {
      setPhase("done");
      return;
    }
    sessionStorage.setItem("splashShown", "1");

    document.body.style.overflow = "hidden";

    const timers = [
      setTimeout(() => setPhase("logo"),    900),    // GIF plays for 0.9s, then cross-fade
      setTimeout(() => setPhase("tagline"), 1100),   // Tagline fades in
      setTimeout(() => setPhase("hold"),    1800),   // Hold
      setTimeout(() => setPhase("leaving"), 2400),   // Start fade out
      setTimeout(() => {
        setPhase("done");
        document.body.style.overflow = "";
      }, 3500),
    ];

    return () => {
      timers.forEach(clearTimeout);
      document.body.style.overflow = "";
    };
  }, []);

  if (phase === "done") return null;

  const showGif    = phase === "gif" || phase === "logo";
  const gifVisible = phase === "gif";
  const logoVisible = phase === "logo" || phase === "tagline" || phase === "hold" || phase === "leaving";
  const tagVisible  = phase === "tagline" || phase === "hold" || phase === "leaving";
  const leaving     = phase === "leaving";

  // GIF and logo share identical aspect ratio (800×522 / 2765×1812 ≈ 1.533:1)
  // so they align perfectly in the same container
  const containerW = "clamp(240px, 34vw, 420px)";

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        backgroundColor: "#eceae0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        opacity: leaving ? 0 : 1,
        transition: leaving ? "opacity 1.3s cubic-bezier(0.4, 0, 0.2, 1)" : "none",
        pointerEvents: leaving ? "none" : "auto",
      }}
    >
      {/* Logo area — exact same aspect ratio so GIF and logo align on cross-fade */}
      <div
        style={{
          position: "relative",
          width: containerW,
          aspectRatio: "800 / 522",
        }}
      >
        {/* Animated loader GIF — tinted to logo pink */}
        {showGif && (
          <img
            src="/loader.gif"
            alt=""
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "contain",
              opacity: gifVisible ? 1 : 0,
              transition: "opacity 0.6s ease",
              transform: "translateY(-17%)",
              filter:
                "brightness(0) saturate(100%) invert(73%) sepia(19%) saturate(400%) hue-rotate(315deg) brightness(104%)",
            }}
          />
        )}

        {/* Complete logo — fades in as GIF fades out, same dimensions = pixel-perfect alignment */}
        <img
          src="/VILLAROMANTICALOGO2026.png"
          alt="Villa Romantica"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "contain",
            opacity: logoVisible ? 1 : 0,
            transition: "opacity 0.6s ease",
            transform: "translateX(-2px) translateY(1px)",
          }}
        />
      </div>

      {/* Tagline */}
      <p
        style={{
          fontFamily: "'Cinzel', serif",
          fontSize: "clamp(0.85rem, 1.9vw, 1.2rem)",
          fontWeight: 400,
          letterSpacing: "0.48em",
          textTransform: "uppercase",
          color: "#444340",
          marginTop: "9rem",
          marginBottom: 0,
          opacity: tagVisible ? 1 : 0,
          transition: "opacity 1s ease",
        }}
      >
        This Must Be The Place
      </p>
    </div>
  );
}
