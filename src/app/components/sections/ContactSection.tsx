import { useState } from "react";
import { motion } from "motion/react";
import { Phone, Mail, MapPin, CheckCircle, Facebook } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

const C = "#444340";
const MUTED = "rgba(68,67,64,0.55)";
const BORDER = "rgba(68,67,64,0.12)";

export function ContactSection() {
  const { t, lang } = useLanguage();
  const c = t.contact;
  const f = c.form;
  const s = c.success;

  const [form, setForm] = useState({
    name: "", email: "", checkin: "", checkout: "", guests: "2", message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    fontFamily: "'Inter', sans-serif",
    fontSize: "0.88rem",
    fontWeight: 300,
    color: C,
    backgroundColor: "transparent",
    border: "none",
    borderBottom: `1px solid ${BORDER}`,
    padding: "0.85rem 0",
    outline: "none",
    transition: "border-color 0.3s ease",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontFamily: "'Cinzel', serif",
    fontSize: "0.55rem",
    letterSpacing: "0.25em",
    textTransform: "uppercase",
    color: "rgba(68,67,64,0.4)",
    marginBottom: "0.4rem",
  };

  return (
    <section id="contact" style={{ backgroundColor: "#eceae0", padding: "10rem 0" }}>
      <div style={{ maxWidth: "100%", margin: "0 auto", padding: "0 2.5rem" }}>

        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          style={{ display: "flex", alignItems: "center", gap: "1.5rem", marginBottom: "6rem" }}
        >
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
            {c.label}
          </span>
          <div style={{ flex: 1, height: "1px", backgroundColor: BORDER }} />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: "7rem", alignItems: "start" }}>
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "clamp(2.2rem, 4.5vw, 3.6rem)",
                fontWeight: 400,
                color: C,
                lineHeight: 1.15,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                marginBottom: "2rem",
              }}
            >
              {c.heading[0]}<br />{c.heading[1]}
            </h2>

            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.9rem",
                lineHeight: 2,
                color: MUTED,
                marginBottom: "3.5rem",
                maxWidth: "420px",
                fontWeight: 300,
              }}
            >
              {c.desc}
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
              {[
                { href: "tel:+302510441902", Icon: Phone, label: c.callLabel, text: "+30 2510 441902 / 441201" },
                { href: "mailto:info@villaromantica.gr", Icon: Mail, label: c.emailLabel, text: "info@villaromantica.gr" },
              ].map(({ href, Icon, label, text }) => (
                <a
                  key={href}
                  href={href}
                  style={{ display: "flex", alignItems: "flex-start", gap: "1.25rem", textDecoration: "none" }}
                >
                  <div
                    style={{
                      width: "38px",
                      height: "38px",
                      backgroundColor: C,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={14} color="#eceae0" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p style={labelStyle}>{label}</p>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.88rem", color: C, fontWeight: 300 }}>
                      {text}
                    </p>
                  </div>
                </a>
              ))}

              <div style={{ display: "flex", alignItems: "flex-start", gap: "1.25rem" }}>
                <div
                  style={{
                    width: "38px",
                    height: "38px",
                    backgroundColor: C,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <MapPin size={14} color="#eceae0" strokeWidth={1.5} />
                </div>
                <div>
                  <p style={labelStyle}>{c.addressLabel}</p>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.88rem", color: C, lineHeight: 1.65, fontWeight: 300 }}>
                    {lang === "el"
                      ? <><br />Μελίνας Μερκούρη 193<br />Παλιό, Καβάλα, Ελλάδα</>
                      : <><br />Melinas Merkouri 193<br />Palio, Kavala, Greece</>}
                  </p>
                </div>
              </div>

              <a
                href="https://www.facebook.com/villaromantica.gr"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "flex-start", gap: "1.25rem", textDecoration: "none" }}
              >
                <div
                  style={{
                    width: "38px",
                    height: "38px",
                    backgroundColor: C,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    transition: "background-color 0.3s ease",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "#1877F2"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = C; }}
                >
                  <Facebook size={14} color="#eceae0" strokeWidth={1.5} />
                </div>
                <div>
                  <p style={labelStyle}>{c.facebookLabel}</p>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.88rem", color: C, fontWeight: 300 }}>
                    facebook.com/villaromantica.gr
                  </p>
                </div>
              </a>
            </div>

            {/* Pull quote */}
            <div
              style={{
                marginTop: "4rem",
                padding: "2rem 2rem 2rem 1.75rem",
                borderLeft: `2px solid ${BORDER}`,
              }}
            >
              <p
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: "0.82rem",
                  color: C,
                  lineHeight: 2,
                  letterSpacing: "0.06em",
                }}
              >
                {c.quote}
              </p>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.15 }}
            style={{ backgroundColor: "#ffffff", padding: "3.5rem" }}
          >
            {submitted ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: "420px",
                  textAlign: "center",
                  gap: "1.5rem",
                }}
              >
                <CheckCircle size={44} style={{ color: C, opacity: 0.5 }} strokeWidth={1} />
                <h3
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: "1.8rem",
                    fontWeight: 400,
                    color: C,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  {s.heading}
                </h3>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.88rem",
                    lineHeight: 1.85,
                    color: MUTED,
                    maxWidth: "340px",
                    fontWeight: 300,
                  }}
                >
                  {s.message}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: "1.4rem",
                    fontWeight: 400,
                    color: C,
                    marginBottom: "3rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  {f.heading}
                </h3>

                <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                  {[
                    { name: "name", type: "text", label: f.nameLabel, placeholder: f.namePlaceholder, required: true },
                    { name: "email", type: "email", label: f.emailLabel, placeholder: f.emailPlaceholder, required: true },
                  ].map((field) => (
                    <div key={field.name}>
                      <label style={labelStyle}>{field.label}</label>
                      <input
                        type={field.type}
                        name={field.name}
                        value={form[field.name as keyof typeof form]}
                        onChange={handleChange}
                        required={field.required}
                        placeholder={field.placeholder}
                        style={inputStyle}
                        onFocus={(e) => (e.currentTarget.style.borderBottomColor = C)}
                        onBlur={(e) => (e.currentTarget.style.borderBottomColor = BORDER)}
                      />
                    </div>
                  ))}

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
                    {[
                      { name: "checkin", label: f.checkin },
                      { name: "checkout", label: f.checkout },
                    ].map((field) => (
                      <div key={field.name}>
                        <label style={labelStyle}>{field.label}</label>
                        <input
                          type="date"
                          name={field.name}
                          value={form[field.name as keyof typeof form]}
                          onChange={handleChange}
                          style={inputStyle}
                          onFocus={(e) => (e.currentTarget.style.borderBottomColor = C)}
                          onBlur={(e) => (e.currentTarget.style.borderBottomColor = BORDER)}
                        />
                      </div>
                    ))}
                  </div>

                  <div>
                    <label style={labelStyle}>{f.guestsLabel}</label>
                    <select
                      name="guests"
                      value={form.guests}
                      onChange={handleChange}
                      style={{ ...inputStyle, cursor: "pointer", appearance: "none" }}
                    >
                      {["1", "2", "3", "4", "5", "6+"].map((g) => (
                        <option key={g} value={g}>
                          {g} {g === "1" ? f.guest1 : f.guestsN}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label style={labelStyle}>{f.messageLabel}</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder={f.messagePlaceholder}
                      style={{ ...inputStyle, resize: "none", lineHeight: 1.75 }}
                      onFocus={(e) => (e.currentTarget.style.borderBottomColor = C)}
                      onBlur={(e) => (e.currentTarget.style.borderBottomColor = BORDER)}
                    />
                  </div>

                  <button
                    type="submit"
                    style={{
                      width: "100%",
                      fontFamily: "'Cinzel', serif",
                      fontSize: "0.58rem",
                      letterSpacing: "0.22em",
                      textTransform: "uppercase",
                      color: "#eceae0",
                      backgroundColor: C,
                      border: "none",
                      cursor: "pointer",
                      padding: "1.2rem 2rem",
                      transition: "opacity 0.3s ease",
                      marginTop: "0.5rem",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.75")}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                  >
                    {f.submit}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
