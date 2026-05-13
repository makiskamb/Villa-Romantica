import { useState, useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router";
import { useLanguage } from "../context/LanguageContext";
import { useTransition } from "../context/TransitionContext";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollbarW, setScrollbarW] = useState(0);
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

  useLayoutEffect(() => {
    if (menuOpen) {
      const sw = window.innerWidth - document.documentElement.clientWidth;
      setScrollbarW(sw);
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${sw}px`;
    } else {
      setScrollbarW(0);
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [menuOpen]);

  /** Navigate with transition — skip if already on the target page */
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

  const headerBg        = transparent ? "transparent" : "rgba(236,234,224,0.96)";
  const headerBorder    = transparent ? "1px solid transparent" : "1px solid rgba(68,67,64,0.1)";
  const textColor       = transparent ? "#ffffff" : "#444340";
  const textColorMuted  = transparent ? "rgba(255,255,255,0.65)" : "rgba(68,67,64,0.55)";

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
            maxWidth: "100%",
            margin: "0",
            paddingLeft: "2rem",
            paddingRight: `calc(2rem + ${scrollbarW}px)`,
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

          {/* Logo — center, uses transition nav */}
          <a
            href="/"
            onClick={(e) => { e.preventDefault(); nav("/"); }}
            style={{
              position: "absolute", left: "50%", top: "50%", transform: `translateX(calc(-50% - ${scrollbarW / 2}px)) translateY(-50%)`,
              textDecoration: "none", display: "flex", alignItems: "center",
              transition: "opacity 0.4s ease", cursor: "pointer",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.8"; }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}
          >
            <img
              src="/logo-white.png"
              alt="Villa Romantica"
              style={{
                height: "62px",
                width: "auto",
                objectFit: "contain",
                transition: "filter 0.6s ease, opacity 0.5s ease",
                filter: transparent
                  ? "none"
                  : "invert(1) brightness(0.267)",
              }}
              onError={(e) => {
                const parent = e.currentTarget.parentElement;
                if (parent) {
                  e.currentTarget.style.display = "none";
                  const fallback = document.createElement("span");
                  fallback.textContent = "Villa Romantica";
                  fallback.style.cssText = `font-family:'Cinzel',serif;font-size:1rem;font-weight:500;letter-spacing:0.2em;color:${transparent ? "#ffffff" : "#444340"};text-transform:uppercase;white-space:nowrap;`;
                  parent.appendChild(fallback);
                }
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
          width: "clamp(320px, 40vw, 480px)",
          backgroundColor: "#444340",
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
              style={{ height: "88px", width: "auto", objectFit: "contain" }}
              onError={(e) => {
                e.currentTarget.style.display = "none";
                const span = document.createElement("span");
                span.textContent = "Villa Romantica";
                span.style.cssText = "font-family:'Cinzel',serif;font-size:0.8rem;letter-spacing:0.2em;color:#eceae0;text-transform:uppercase;";
                e.currentTarget.parentElement?.appendChild(span);
              }}
            />
          </a>
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            style={{
              background: "none", border: "none", cursor: "pointer",
              color: "rgba(236,234,224,0.7)", fontSize: "1.4rem",
              fontWeight: 300, lineHeight: 1, padding: "0.25rem", transition: "color 0.3s ease",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "#eceae0"; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(236,234,224,0.7)"; }}
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
                  color: active ? "#eceae0" : "rgba(236,234,224,0.4)",
                  textDecoration: "none",
                  padding: "1rem 0",
                  borderBottom: "1px solid rgba(236,234,224,0.07)",
                  cursor: "pointer",
                  opacity: menuOpen ? 1 : 0,
                  transform: menuOpen ? "translateX(0)" : "translateX(-14px)",
                  transition: menuOpen
                    ? `opacity 0.5s ease ${delay}ms, transform 0.5s ease ${delay}ms, color 0.3s ease`
                    : "opacity 0.15s ease, transform 0.15s ease, color 0.3s ease",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "#eceae0"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = active ? "#eceae0" : "rgba(236,234,224,0.4)"; }}
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
                paddingTop: "3rem", borderTop: "1px solid rgba(236,234,224,0.1)",
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? "translateX(0)" : "translateX(-14px)",
                transition: menuOpen
                  ? `opacity 0.5s ease ${delay}ms, transform 0.5s ease ${delay}ms`
                  : "opacity 0.15s ease, transform 0.15s ease",
              }}
            >
              <div style={{ display: "flex", gap: "1.5rem", marginBottom: "2rem" }}>
                <button onClick={() => setLang("en")} style={{ fontFamily: "'Cinzel', serif", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: lang === "en" ? "#eceae0" : "rgba(236,234,224,0.35)", background: "none", border: "none", cursor: "pointer", padding: 0, transition: "color 0.3s ease" }}>English</button>
                <span style={{ color: "rgba(236,234,224,0.2)", alignSelf: "center" }}>·</span>
                <button onClick={() => setLang("el")} style={{ fontFamily: "'Cinzel', serif", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: lang === "el" ? "#eceae0" : "rgba(236,234,224,0.35)", background: "none", border: "none", cursor: "pointer", padding: 0, transition: "color 0.3s ease" }}>Ελληνικά</button>
              </div>
              <button
                onClick={() => nav("/contact")}
                style={{
                  display: "inline-block", fontFamily: "'Cinzel', serif", fontSize: "0.6rem",
                  letterSpacing: "0.2em", textTransform: "uppercase",
                  color: "#444340", backgroundColor: "#eceae0",
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
