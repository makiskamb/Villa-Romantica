import { useState, useEffect } from "react";
import { Phone, Mail, X, MessageCircle, Instagram, Facebook, ChevronUp, ChevronRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export function FloatingContact() {
  const [open, setOpen]           = useState(false);
  const [socialOpen, setSocialOpen] = useState(false);
  const [atBottom, setAtBottom]   = useState(false);
  const { lang } = useLanguage();

  useEffect(() => {
    const check = () => {
      const scrolled = window.scrollY + window.innerHeight;
      const total    = document.documentElement.scrollHeight;
      setAtBottom(scrolled >= total - 160);
    };
    check();
    window.addEventListener("scroll", check, { passive: true });
    return () => window.removeEventListener("scroll", check);
  }, []);

  const handleMain = () => {
    if (atBottom) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setOpen(false);
      setSocialOpen(false);
    } else {
      if (open) setSocialOpen(false);
      setOpen((v) => !v);
    }
  };

  const contactItems = [
    { href: "tel:+302510441902",             Icon: Phone, label: lang === "el" ? "Τηλέφωνο" : "Call" },
    { href: "mailto:info@villaromantica.gr", Icon: Mail,  label: "Email" },
  ];

  const socialItems = [
    {
      href: "https://www.instagram.com/villaromantica_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      Icon: Instagram,
      label: "Instagram",
      accent: "rgba(225,48,108,0.8)",
    },
    {
      href: "https://www.facebook.com/villaromantica.gr",
      Icon: Facebook,
      label: "Facebook",
      accent: "rgba(24,119,242,0.8)",
    },
  ];

  /* ── shared pill base ── */
  const pillBase: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "0.7rem",
    padding: "0.48rem 0.85rem 0.48rem 0.72rem",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    cursor: "pointer",
    textDecoration: "none",
    whiteSpace: "nowrap",
    borderRadius: "100px",
    border: "1px solid rgba(236,234,224,0.08)",
  };

  const pillLabel: React.CSSProperties = {
    fontFamily: "'Cinzel', serif",
    fontSize: "0.5rem",
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    color: "rgba(236,234,224,0.7)",
  };

  const iconDot = (accent?: string): React.CSSProperties => ({
    width: "24px",
    height: "24px",
    borderRadius: "50%",
    backgroundColor: accent ?? "rgba(236,234,224,0.07)",
    border: "1px solid rgba(236,234,224,0.1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  });

  return (
    <>
      <style>{`
        @keyframes vr-nudge {
          0%   { transform: scale(1); }
          50%  { transform: scale(1.12); }
          100% { transform: scale(1); }
        }
      `}</style>

      {/*
        The whole widget lives in one fixed container.
        The panel is always in the DOM — we animate with opacity + transform + pointer-events
        so there are zero jarring mount/unmount flashes.
      */}
      <div style={{ position: "fixed", bottom: "1.75rem", right: "1.75rem", zIndex: 300 }}>

        {/* ── Panel (absolutely above button, never unmounts) ── */}
        <div
          style={{
            position: "absolute",
            bottom: "calc(100% + 0.65rem)",
            right: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: "0.45rem",
            /* Whole-panel fade + rise */
            opacity:       open ? 1 : 0,
            transform:     open ? "translateY(0)" : "translateY(10px)",
            pointerEvents: open ? "auto" : "none",
            transition:    "opacity 0.38s cubic-bezier(0.16,1,0.3,1), transform 0.38s cubic-bezier(0.16,1,0.3,1)",
          }}
        >

          {/* Contact pills — stagger in on open */}
          {contactItems.map(({ href, Icon, label }, i) => (
            <a
              key={href}
              href={href}
              style={{
                ...pillBase,
                backgroundColor: "rgba(36,35,33,0.88)",
                opacity:   open ? 1 : 0,
                transform: open ? "translateY(0)" : "translateY(8px)",
                transition: [
                  `opacity 0.32s ease ${open ? i * 60 : 0}ms`,
                  `transform 0.32s cubic-bezier(0.16,1,0.3,1) ${open ? i * 60 : 0}ms`,
                  "background 0.22s ease",
                ].join(", "),
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(68,67,64,0.96)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(36,35,33,0.88)"; }}
            >
              <span style={pillLabel}>{label}</span>
              <div style={iconDot()}>
                <Icon size={11} color="rgba(236,234,224,0.65)" strokeWidth={1.5} />
              </div>
            </a>
          ))}

          {/* Social cluster */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "0.38rem" }}>

            {/* Sub-items — maxHeight collapse for smooth open/close */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                gap: "0.38rem",
                overflow: "hidden",
                maxHeight: socialOpen ? "140px" : "0px",
                /* slightly springy collapse */
                transition: socialOpen
                  ? "max-height 0.4s cubic-bezier(0.16,1,0.3,1)"
                  : "max-height 0.3s cubic-bezier(0.4,0,1,1)",
              }}
            >
              {socialItems.map(({ href, Icon, label, accent }, i) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    ...pillBase,
                    backgroundColor: "rgba(28,27,25,0.92)",
                    /* fade each item in with stagger */
                    opacity:   socialOpen ? 1 : 0,
                    transform: socialOpen ? "translateY(0)" : "translateY(6px)",
                    transition: [
                      `opacity 0.28s ease ${socialOpen ? i * 65 : 0}ms`,
                      `transform 0.28s cubic-bezier(0.16,1,0.3,1) ${socialOpen ? i * 65 : 0}ms`,
                      "background 0.22s ease",
                    ].join(", "),
                    /* keep a tiny margin so items don't feel clipped */
                    marginBottom: i < socialItems.length - 1 ? "0" : "0.38rem",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = accent;
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(236,234,224,0.2)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(28,27,25,0.92)";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(236,234,224,0.08)";
                  }}
                >
                  <span style={pillLabel}>{label}</span>
                  <div style={iconDot(accent)}>
                    <Icon size={11} color="rgba(236,234,224,0.8)" strokeWidth={1.5} />
                  </div>
                </a>
              ))}
            </div>

            {/* Social trigger pill */}
            <button
              onClick={() => setSocialOpen((v) => !v)}
              style={{
                ...pillBase,
                backgroundColor: socialOpen ? "rgba(68,67,64,0.96)" : "rgba(36,35,33,0.88)",
                border: `1px solid ${socialOpen ? "rgba(236,234,224,0.18)" : "rgba(236,234,224,0.08)"}`,
                opacity:   open ? 1 : 0,
                transform: open ? "translateY(0)" : "translateY(8px)",
                transition: [
                  `opacity 0.32s ease ${open ? contactItems.length * 60 : 0}ms`,
                  `transform 0.32s cubic-bezier(0.16,1,0.3,1) ${open ? contactItems.length * 60 : 0}ms`,
                  "background 0.22s ease",
                  "border-color 0.22s ease",
                ].join(", "),
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(68,67,64,0.96)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = socialOpen ? "rgba(68,67,64,0.96)" : "rgba(36,35,33,0.88)"; }}
            >
              <span style={pillLabel}>Social Media</span>
              <div
                style={{
                  ...iconDot(),
                  transition: "transform 0.35s cubic-bezier(0.16,1,0.3,1)",
                  transform: socialOpen ? "rotate(90deg)" : "rotate(0deg)",
                }}
              >
                <ChevronRight size={11} color="rgba(236,234,224,0.65)" strokeWidth={1.5} />
              </div>
            </button>

          </div>
        </div>

        {/* ── Main circular button ── */}
        <button
          onClick={handleMain}
          aria-label={atBottom ? "Back to top" : open ? "Close" : "Contact"}
          style={{
            width: "44px",
            height: "44px",
            borderRadius: "50%",
            backgroundColor: "rgba(44,43,41,0.84)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            border: "1px solid rgba(236,234,224,0.1)",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 2px 20px rgba(0,0,0,0.22)",
            position: "relative",
            transition: "background 0.3s ease, transform 0.3s ease, border-color 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(68,67,64,1)";
            e.currentTarget.style.transform = "scale(1.08)";
            e.currentTarget.style.borderColor = "rgba(236,234,224,0.22)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(44,43,41,0.84)";
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.borderColor = "rgba(236,234,224,0.1)";
          }}
        >
          {/*
            All three icons live here simultaneously.
            They cross-fade via opacity + subtle scale/rotation — no unmount flash.
          */}

          {/* MessageCircle — shown when idle */}
          <span style={{
            position: "absolute", display: "flex", alignItems: "center", justifyContent: "center",
            opacity:    !open && !atBottom ? 1 : 0,
            transform:  !open && !atBottom ? "scale(1) rotate(0deg)" : "scale(0.55) rotate(-20deg)",
            transition: "opacity 0.28s ease, transform 0.32s cubic-bezier(0.34,1.56,0.64,1)",
          }}>
            <MessageCircle size={14} color="rgba(236,234,224,0.72)" strokeWidth={1.5} />
          </span>

          {/* X — shown when panel is open */}
          <span style={{
            position: "absolute", display: "flex", alignItems: "center", justifyContent: "center",
            opacity:    open && !atBottom ? 1 : 0,
            transform:  open && !atBottom ? "scale(1) rotate(0deg)" : "scale(0.55) rotate(45deg)",
            transition: "opacity 0.28s ease, transform 0.32s cubic-bezier(0.34,1.56,0.64,1)",
          }}>
            <X size={14} color="rgba(236,234,224,0.72)" strokeWidth={1.5} />
          </span>

          {/* ChevronUp — shown at bottom of page */}
          <span style={{
            position: "absolute", display: "flex", alignItems: "center", justifyContent: "center",
            opacity:    atBottom ? 1 : 0,
            transform:  atBottom ? "scale(1) translateY(0)" : "scale(0.55) translateY(5px)",
            transition: "opacity 0.28s ease, transform 0.32s cubic-bezier(0.34,1.56,0.64,1)",
          }}>
            <ChevronUp size={15} color="rgba(236,234,224,0.72)" strokeWidth={1.5} />
          </span>

        </button>
      </div>
    </>
  );
}
