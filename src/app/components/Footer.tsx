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
        backgroundColor: "#eceae0",
        color: "#3d3d3d",
        padding: "4rem 0 1.5rem",
      }}
    >
      <div style={{ maxWidth: "100%", margin: "0 auto", padding: "0 2.5rem" }}>
        {/* Top grid: Brand | Featured On | Explore | Contact */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 0.9fr 1fr 1fr",
            gap: "3rem",
            paddingBottom: "3rem",
            borderBottom: "1px solid rgba(61,61,61,0.15)",
          }}
          className="grid-footer"
        >
          {/* Brand */}
          <div>
            <div style={{ marginBottom: "1.5rem" }}>
              <img
                src="/VILLAROMANTICALOGO2026.png"
                alt="Villa Romantica"
                style={{ height: "110px", width: "auto", objectFit: "contain", display: "block" }}
              />
            </div>
            {/* Slogan */}
            <p
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "clamp(1.4rem, 2.8vw, 2.2rem)",
                fontWeight: 400,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#3d3d3d",
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
                color: "#3d3d3d",
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
                  style={{ color: "#3d3d3d", transition: "color 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#3d3d3d")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#3d3d3d")}
                >
                  <Icon size={16} strokeWidth={1.5} />
                </a>
              ))}
              {/* Google */}
              <a
                href="https://share.google/uuTqazWigWPdl1B9i"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#3d3d3d", transition: "color 0.2s", display: "flex", alignItems: "center" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#3d3d3d")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#3d3d3d")}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10" />
                  <path d="M12 12h8.5" />
                  <path d="M16.5 8.5A5 5 0 1 0 17 12" />
                </svg>
              </a>
            </div>
          </div>

          {/* Featured On — own column */}
          <div>
            <h4
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "0.55rem",
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "#3d3d3d",
                marginBottom: "2rem",
              }}
            >
              Featured On
            </h4>
            <a
              href="https://www.athensvoice.gr/life/taxidia/859703/kavala-villa-romantica/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", marginBottom: "2rem" }}
            >
              <img
                src="/greecerace-almazois-epikoinonias-athensvoice-logo.png"
                alt="Athens Voice"
                style={{
                  height: "50px",
                  width: "auto",
                  objectFit: "contain",
                  opacity: 0.85,
                  transition: "opacity 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLImageElement).style.opacity = "1"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLImageElement).style.opacity = "0.7"; }}
              />
            </a>

            {/* Booking.com badge */}
            <h4
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "0.55rem",
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "#3d3d3d",
                marginBottom: "1rem",
              }}
            >
              Recognized Excellence
            </h4>
            <a
              href="https://www.booking.com/Share-RZvlUf"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-flex" }}
            >
              <img
                src="/booking 9.6.png"
                alt="Booking.com 9.6"
                style={{
                  height: "72px",
                  width: "auto",
                  objectFit: "contain",
                  transition: "opacity 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLImageElement).style.opacity = "1"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLImageElement).style.opacity = "0.8"; }}
              />
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h4
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "0.55rem",
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "#3d3d3d",
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
                    color: "#3d3d3d",
                    textDecoration: "none",
                    transition: "color 0.2s",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#3d3d3d")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#3d3d3d")}
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
                color: "#3d3d3d",
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
                    color: "#3d3d3d",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#3d3d3d")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#3d3d3d")}
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
                  color: "#3d3d3d",
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
                href="https://www.instagram.com/villaromantica_"
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
                  color: "#3d3d3d",
                  textDecoration: "none",
                  transition: "color 0.2s",
                  marginTop: "0.25rem",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#3d3d3d")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#3d3d3d")}
              >
                <Instagram size={13} strokeWidth={1.5} />
                Instagram
              </a>
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
                  color: "#3d3d3d",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#3d3d3d")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#3d3d3d")}
              >
                <Facebook size={13} strokeWidth={1.5} />
                {f.facebookLabel}
              </a>
            </div>
          </div>
        </div>

        {/* Powered By · Legal */}
        <div
          style={{
            paddingTop: "1.75rem",
            paddingBottom: "1.75rem",
            borderTop: "1px solid rgba(61,61,61,0.15)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1.5rem",
          }}
        >
          {/* Powered By */}
          <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
            <span style={{ fontFamily: "'Cinzel', serif", fontSize: "0.5rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#3d3d3d", whiteSpace: "nowrap" }}>
              Powered By
            </span>
            <a href="https://www.mushroomdesign.gr/" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center" }}>
              <img
                src="/MUSHROOM_WHITE web.png"
                alt="Mushroom Design"
                style={{ height: "28px", width: "auto", objectFit: "contain", opacity: 0.5, filter: "brightness(0) saturate(0) opacity(0.7)", transition: "opacity 0.3s ease", cursor: "pointer" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLImageElement).style.opacity = "0.85"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLImageElement).style.opacity = "0.5"; }}
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
                {i > 0 && <span style={{ color: "rgba(61,61,61,0.2)", fontSize: "0.6rem" }}>·</span>}
                <a
                  href={href}
                  onClick={(e) => { e.preventDefault(); go(href); }}
                  style={{ fontFamily: "'Cinzel', serif", fontSize: "0.5rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#3d3d3d", textDecoration: "none", transition: "color 0.2s ease", whiteSpace: "nowrap", cursor: "pointer" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#444340"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#444340"; }}
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
          <p style={{ fontFamily: "'Cinzel', serif", fontSize: "0.6rem", letterSpacing: "0.15em", color: "rgba(61,61,61,0.6)", textTransform: "uppercase" }}>
            {f.copyright}
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .grid-footer {
            grid-template-columns: 1fr 1fr !important;
            gap: 3rem !important;
          }
        }
        @media (max-width: 560px) {
          .grid-footer {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
