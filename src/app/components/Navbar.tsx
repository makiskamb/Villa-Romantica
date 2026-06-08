import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { Instagram, Facebook, Phone, Mail } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { useTransition } from "../context/TransitionContext";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();
  const location = useLocation();
  const { go } = useTransition();

  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const nav = (to: string) => {
    setMenuOpen(false);
    if (location.pathname !== to) go(to);
  };

  const transparent = isHome && !scrolled;

  const navLinks = [
    { label: t.nav.home,       href: "/" },
    { label: t.nav.about,      href: "/about" },
    { label: t.nav.rooms,      href: "/rooms" },
    { label: t.nav.experience, href: "/experience" },
    { label: t.nav.location,   href: "/location" },
    { label: t.nav.contact,    href: "/contact" },
  ];

  const headerBg       = transparent ? "transparent" : "rgba(236,234,224,0.96)";
  const headerBorder   = transparent ? "1px solid transparent" : "1px solid rgba(68,67,64,0.1)";
  const textColor      = transparent ? "#ffffff" : "#444340";
  const textColorMuted = transparent ? "rgba(255,255,255,0.65)" : "rgba(68,67,64,0.55)";

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 100,
          transition: "background 0.6s ease, border-color 0.6s ease",
          backgroundColor: headerBg,
          borderBottom: headerBorder,
          backdropFilter: transparent ? "none" : "blur(14px)",
        }}
      >
        <div
          style={{
            paddingLeft: "2rem",
            paddingRight: "2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "86px",
          }}
        >
          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            style={{
              background: "none", border: "none", cursor: "pointer",
              padding: "6px 0", display: "flex", flexDirection: "column",
              gap: "5px", transition: "opacity 0.3s ease",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.6"; }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}
          >
            <span style={{ display: "block", width: "22px", height: "1px", backgroundColor: textColor, transition: "background 0.6s ease" }} />
            <span style={{ display: "block", width: "14px", height: "1px", backgroundColor: textColor, transition: "background 0.6s ease" }} />
          </button>

          {/* Logo — centered */}
          <a
            href="/"
            onClick={(e) => { e.preventDefault(); nav("/"); }}
            style={{
              position: "absolute", left: "50%", top: "50%",
              transform: "translateX(-50%) translateY(-50%)",
              textDecoration: "none", display: "flex", alignItems: "center",
              transition: "opacity 0.4s ease", cursor: "pointer",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.8"; }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}
          >
            <img
              src={isHome && !scrolled ? "/logo-white.png" : "/VILLAROMANTICALOGO2026.png"}
              alt="Villa Romantica"
              style={{
                height: "62px",
                width: "auto",
                objectFit: "contain",
                transition: "opacity 0.5s ease",
              }}
            />
          </a>

          {/* Right side */}
          <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
            {/* Language toggle — hidden on mobile */}
            <div className="lang-toggle" style={{ display: "flex", alignItems: "center" }}>
              <button
                onClick={() => setLang("en")}
                style={{ fontFamily: "'Cinzel', serif", fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase", color: lang === "en" ? textColor : textColorMuted, background: "none", border: "none", cursor: "pointer", padding: "0.25rem 0.5rem 0.25rem 0", transition: "color 0.3s ease" }}
              >EN</button>
              <span style={{ color: textColorMuted, fontSize: "0.55rem", transition: "color 0.6s ease" }}>|</span>
              <button
                onClick={() => setLang("el")}
                style={{ fontFamily: "'Cinzel', serif", fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase", color: lang === "el" ? textColor : textColorMuted, background: "none", border: "none", cursor: "pointer", padding: "0.25rem 0 0.25rem 0.5rem", transition: "color 0.3s ease" }}
              >ΕΛ</button>
            </div>

            {/* Book Now */}
            <button
              onClick={() => nav("/contact")}
              style={{
                fontFamily: "'Cinzel', serif", fontSize: "0.58rem", letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: transparent ? "#444340" : "#eceae0",
                backgroundColor: transparent ? "rgba(236,234,224,0.92)" : "#444340",
                border: "none", cursor: "pointer", padding: "0.65rem 1.5rem", transition: "all 0.4s ease",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.8"; }}
              onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}
            >
              {t.nav.book}
            </button>
          </div>
        </div>
      </nav>

      {/* Backdrop */}
      <div
        onClick={() => setMenuOpen(false)}
        style={{
          position: "fixed", inset: 0, zIndex: 200,
          backgroundColor: "rgba(68,67,64,0.45)",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
          transition: "opacity 0.5s ease",
          backdropFilter: menuOpen ? "blur(2px)" : "none",
        }}
      />

      {/* Off-canvas panel */}
      <div
        style={{
          position: "fixed", top: 0, left: 0, bottom: 0, zIndex: 201,
          width: "clamp(280px, 32vw, 400px)",
          backgroundColor: "#eceae0",
          transform: menuOpen ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 0.6s cubic-bezier(0.76, 0, 0.24, 1)",
          display: "flex", flexDirection: "column",
          padding: "2.5rem", overflowY: "auto",
        }}
      >
        {/* Panel header */}
        <div
          style={{
            display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "4rem",
            opacity: menuOpen ? 1 : 0,
            transform: menuOpen ? "translateX(0)" : "translateX(-16px)",
            transition: menuOpen
              ? "opacity 0.5s ease 180ms, transform 0.5s ease 180ms"
              : "opacity 0.15s ease, transform 0.15s ease",
          }}
        >
          <a href="/" onClick={(e) => { e.preventDefault(); nav("/"); }} style={{ textDecoration: "none", cursor: "pointer" }}>
            <img
              src="/logo-white.png"
              alt="Villa Romantica"
              style={{ height: "88px", width: "auto", objectFit: "contain", filter: "invert(0.76) opacity(0.7)" }}
            />
          </a>
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            style={{
              background: "none", border: "none", cursor: "pointer",
              color: "rgba(68,67,64,0.5)", fontSize: "1.4rem",
              fontWeight: 300, lineHeight: 1, padding: "0.25rem", transition: "color 0.3s ease",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "#444340"; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(68,67,64,0.5)"; }}
          >
            ×
          </button>
        </div>

        {/* Nav links */}
        <nav style={{ flex: 1 }}>
          {navLinks.map((link, i) => {
            const active = location.pathname === link.href;
            const delay = menuOpen ? 260 + i * 65 : 0;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); nav(link.href); }}
                style={{
                  display: "block",
                  fontFamily: "'Cinzel', serif",
                  fontSize: "clamp(0.95rem, 2vw, 1.25rem)",
                  fontWeight: 400,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: active ? "#444340" : "rgba(68,67,64,0.35)",
                  textDecoration: "none",
                  padding: "1rem 0",
                  borderBottom: "1px solid rgba(68,67,64,0.08)",
                  cursor: "pointer",
                  opacity: menuOpen ? 1 : 0,
                  transform: menuOpen ? "translateX(0)" : "translateX(-14px)",
                  transition: menuOpen
                    ? `opacity 0.5s ease ${delay}ms, transform 0.5s ease ${delay}ms, color 0.3s ease`
                    : "opacity 0.15s ease, transform 0.15s ease, color 0.3s ease",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "#444340"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = active ? "#444340" : "rgba(68,67,64,0.35)"; }}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Bottom */}
        {(() => {
          const delay = menuOpen ? 260 + navLinks.length * 65 + 40 : 0;
          return (
            <div
              style={{
                paddingTop: "3rem", borderTop: "1px solid rgba(68,67,64,0.1)",
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? "translateX(0)" : "translateX(-14px)",
                transition: menuOpen
                  ? `opacity 0.5s ease ${delay}ms, transform 0.5s ease ${delay}ms`
                  : "opacity 0.15s ease, transform 0.15s ease",
              }}
            >
              {/* Icons */}
              <div style={{ display: "flex", gap: "2.75rem", marginBottom: "1.5rem", alignItems: "center" }}>
                {[
                  { href: "tel:+302510441902", Icon: Phone },
                  { href: "mailto:info@villaromantica.gr", Icon: Mail },
                  { href: "https://www.facebook.com/villaromantica.gr", Icon: Facebook },
                  { href: "https://www.instagram.com/villaromantica_", Icon: Instagram },
                ].map(({ href, Icon }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "rgba(68,67,64,0.4)",
                      transition: "color 0.3s ease",
                      textDecoration: "none",
                      display: "flex", alignItems: "center",
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#444340"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(68,67,64,0.4)"; }}
                  >
                    <Icon size={15} strokeWidth={1.5} />
                  </a>
                ))}
              </div>

              {/* Language */}
              <div style={{ display: "flex", gap: "1.5rem", marginBottom: "2rem" }}>
                <button onClick={() => setLang("en")} style={{ fontFamily: "'Cinzel', serif", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: lang === "en" ? "#444340" : "rgba(68,67,64,0.35)", background: "none", border: "none", cursor: "pointer", padding: 0, transition: "color 0.3s ease" }}>English</button>
                <span style={{ color: "rgba(68,67,64,0.2)", alignSelf: "center" }}>·</span>
                <button onClick={() => setLang("el")} style={{ fontFamily: "'Cinzel', serif", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: lang === "el" ? "#444340" : "rgba(68,67,64,0.35)", background: "none", border: "none", cursor: "pointer", padding: 0, transition: "color 0.3s ease" }}>Ελληνικά</button>
              </div>

              <button
                onClick={() => nav("/contact")}
                style={{
                  display: "inline-block", fontFamily: "'Cinzel', serif", fontSize: "0.6rem",
                  letterSpacing: "0.2em", textTransform: "uppercase",
                  color: "#eceae0", backgroundColor: "#444340",
                  border: "none", cursor: "pointer",
                  padding: "0.9rem 2rem", transition: "opacity 0.3s ease",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.85"; }}
                onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}
              >
                {t.nav.book}
              </button>
            </div>
          );
        })()}
      </div>

      <style>{`
        @media (max-width: 640px) {
          .lang-toggle { display: none !important; }
        }
      `}</style>
    </>
  );
}
