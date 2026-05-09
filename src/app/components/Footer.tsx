import { Instagram, Facebook, MapPin, Phone, Mail } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { useTransition } from "../context/TransitionContext";

export function Footer() {
  const { t, lang } = useLanguage();
  const f = t.footer;
  const { go } = useTransition();

  return (
    <footer
      style={{
        backgroundColor: "#1e1d1b",
        color: "rgba(236,234,224,0.45)",
        padding: "4rem 0 1.5rem",
      }}
    >
      <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 2.5rem" }}>
        {/* Top grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr",
            gap: "3rem",
            paddingBottom: "3rem",
            borderBottom: "1px solid rgba(236,234,224,0.07)",
          }}
          className="grid-footer"
        >
          {/* Brand */}
          <div>
            <div style={{ marginBottom: "1.5rem" }}>
              <img
                src="/logo-white.png"
                alt="Villa Romantica"
                style={{ height: "110px", width: "auto", objectFit: "contain", display: "block" }}
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  const h2 = document.createElement("h2");
                  h2.textContent = "Villa Romantica";
                  h2.style.cssText = "font-family:'Cinzel',serif;font-size:1.4rem;font-weight:400;color:#eceae0;letter-spacing:0.18em;text-transform:uppercase;margin:0 0 1rem;";
                  e.currentTarget.parentElement?.appendChild(h2);
                }}
              />
            </div>
            {/* Slogan */}
            <p
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "clamp(0.9rem, 1.6vw, 1.2rem)",
                fontWeight: 400,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "rgba(236,234,224,0.7)",
                lineHeight: 1.2,
                marginBottom: "1rem",
              }}
            >
              {t.quote.text}
            </p>

            {/* Tagline */}
            <p
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "0.62rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                lineHeight: 2,
                marginBottom: "2.5rem",
                color: "rgba(236,234,224,0.28)",
                whiteSpace: "pre-line",
                maxWidth: "280px",
              }}
            >
              {f.tagline}
            </p>
            <div style={{ display: "flex", gap: "1.25rem", alignItems: "center" }}>
              {[
                { href: "https://www.instagram.com/villaromantica_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", Icon: Instagram },
                { href: "https://www.facebook.com/villaromantica.gr", Icon: Facebook },
              ].map(({ href, Icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "rgba(236,234,224,0.3)", transition: "color 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#eceae0")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(236,234,224,0.3)")}
                >
                  <Icon size={16} strokeWidth={1.5} />
                </a>
              ))}
              {/* Google */}
              <a
                href="https://share.google/uuTqazWigWPdl1B9i"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "rgba(236,234,224,0.3)", transition: "color 0.2s", display: "flex", alignItems: "center" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#eceae0")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(236,234,224,0.3)")}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10" />
                  <path d="M12 12h8.5" />
                  <path d="M16.5 8.5A5 5 0 1 0 17 12" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "0.55rem",
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "rgba(236,234,224,0.25)",
                marginBottom: "2rem",
              }}
            >
              {f.exploreLabel}
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {f.links.map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  onClick={(e) => { e.preventDefault(); go(href); }}
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: "0.7rem",
                    color: "rgba(236,234,224,0.4)",
                    textDecoration: "none",
                    transition: "color 0.2s",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#eceae0")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(236,234,224,0.4)")}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "0.55rem",
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "rgba(236,234,224,0.25)",
                marginBottom: "2rem",
              }}
            >
              {f.contactLabel}
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                { href: "tel:+302510441902", Icon: Phone, text: "+30 2510 441902 / 441201" },
                { href: "mailto:info@villaromantica.gr", Icon: Mail, text: "info@villaromantica.gr" },
              ].map(({ href, Icon, text }) => (
                <a
                  key={href}
                  href={href}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.65rem",
                    fontFamily: "'Cinzel', serif",
                    fontSize: "0.7rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "rgba(236,234,224,0.4)",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#eceae0")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(236,234,224,0.4)")}
                >
                  <Icon size={13} strokeWidth={1.5} />
                  {text}
                </a>
              ))}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.65rem",
                  fontFamily: "'Cinzel', serif",
                  fontSize: "0.7rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "rgba(236,234,224,0.4)",
                  lineHeight: 1.8,
                }}
              >
                <MapPin size={13} strokeWidth={1.5} style={{ marginTop: "2px", flexShrink: 0 }} />
                <span>
                  {lang === "el"
                    ? <>Μελίνας Μερκούρη 193<br />Παλιό, Καβάλα, Ελλάδα</>
                    : <>Melinas Merkouri 193<br />Palio, Kavala, Greece</>}
                </span>
              </div>
              <a
                href="https://www.facebook.com/villaromantica.gr"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.65rem",
                  fontFamily: "'Cinzel', serif",
                  fontSize: "0.7rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "rgba(236,234,224,0.4)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                  marginTop: "0.25rem",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#eceae0")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(236,234,224,0.4)")}
              >
                <Facebook size={13} strokeWidth={1.5} />
                {f.facebookLabel}
              </a>
            </div>
          </div>
        </div>

        {/* Featured On · Powered By · Legal */}
        <div
          style={{
            paddingTop: "1.75rem",
            paddingBottom: "1.75rem",
            borderTop: "1px solid rgba(236,234,224,0.07)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1.5rem",
          }}
        >
          {/* Featured On */}
          <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
            <span style={{ fontFamily: "'Cinzel', serif", fontSize: "0.5rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(236,234,224,0.22)", whiteSpace: "nowrap" }}>
              Featured On
            </span>
            <a href="https://www.athensvoice.gr/life/taxidia/859703/kavala-villa-romantica/" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center" }}>
              <img
                src="/athens voice logo.png"
                alt="Athens Voice"
                style={{ height: "28px", width: "auto", objectFit: "contain", opacity: 0.35, filter: "brightness(0) invert(1)", transition: "opacity 0.3s ease", cursor: "pointer" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLImageElement).style.opacity = "0.7"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLImageElement).style.opacity = "0.35"; }}
              />
            </a>
          </div>

          {/* Powered By — centre */}
          <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
            <span style={{ fontFamily: "'Cinzel', serif", fontSize: "0.5rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(236,234,224,0.22)", whiteSpace: "nowrap" }}>
              Powered By
            </span>
            <a href="https://www.mushroomdesign.gr/" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center" }}>
              <img
                src="/MUSHROOM_WHITE web.png"
                alt="Mushroom Design"
                style={{ height: "28px", width: "auto", objectFit: "contain", opacity: 0.35, transition: "opacity 0.3s ease", cursor: "pointer" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLImageElement).style.opacity = "0.7"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLImageElement).style.opacity = "0.35"; }}
              />
            </a>
          </div>

          {/* Legal links — right */}
          <div style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}>
            {[
              { label: "Privacy Policy", href: "/privacy" },
              { label: "Terms & Conditions", href: "/terms" },
            ].map(({ label, href }, i) => (
              <span key={href} style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}>
                {i > 0 && <span style={{ color: "rgba(236,234,224,0.12)", fontSize: "0.6rem" }}>·</span>}
                <a
                  href={href}
                  onClick={(e) => { e.preventDefault(); go(href); }}
                  style={{ fontFamily: "'Cinzel', serif", fontSize: "0.5rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(236,234,224,0.22)", textDecoration: "none", transition: "color 0.2s ease", whiteSpace: "nowrap", cursor: "pointer" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(236,234,224,0.55)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(236,234,224,0.22)"; }}
                >
                  {label}
                </a>
              </span>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            paddingTop: "1.25rem",
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p style={{ fontFamily: "'Cinzel', serif", fontSize: "0.6rem", letterSpacing: "0.15em", color: "rgba(236,234,224,0.18)", textTransform: "uppercase" }}>
            {f.copyright}
          </p>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", fontWeight: 300, color: "rgba(236,234,224,0.18)" }}>
            {f.credit}
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .grid-footer {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </footer>
  );
}
