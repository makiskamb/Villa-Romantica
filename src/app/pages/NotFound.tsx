import { Link } from "react-router";
import { useLanguage } from "../context/LanguageContext";

export function NotFound() {
  const { lang } = useLanguage();

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ffffff",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "0.62rem",
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          color: "#9ca3af",
          marginBottom: "1.5rem",
        }}
      >
        404
      </p>
      <h1
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(2.5rem, 6vw, 5rem)",
          fontWeight: 300,
          color: "#0a0a0a",
          lineHeight: 1.1,
          marginBottom: "2rem",
        }}
      >
        {lang === "el" ? "Η σελίδα δεν βρέθηκε" : "Page Not Found"}
      </h1>
      <Link
        to="/"
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "0.62rem",
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: "#ffffff",
          backgroundColor: "#0a0a0a",
          textDecoration: "none",
          padding: "1rem 2.5rem",
          transition: "opacity 0.3s ease",
          display: "inline-block",
        }}
      >
        {lang === "el" ? "Αρχική" : "Back Home"}
      </Link>
    </main>
  );
}
