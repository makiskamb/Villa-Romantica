import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import { useTransition } from "../context/TransitionContext";

const C = "#444340";
const MUTED = "rgba(68,67,64,0.55)";
const BORDER = "rgba(68,67,64,0.1)";

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    style={{ paddingTop: "3rem", borderTop: `1px solid ${BORDER}` }}
  >
    <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: "0.85rem", fontWeight: 400, color: C, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "1.5rem" }}>
      {title}
    </h3>
    {children}
  </motion.div>
);

const P = ({ children }: { children: React.ReactNode }) => (
  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.88rem", lineHeight: 2, color: MUTED, fontWeight: 300, marginBottom: "1rem" }}>
    {children}
  </p>
);

export function Privacy() {
  const { lang } = useLanguage();
  const { go } = useTransition();
  const gr = lang === "el";

  return (
    <main style={{ backgroundColor: "#ffffff", minHeight: "100vh" }}>

      {/* Header */}
      <div style={{ backgroundColor: C, paddingTop: "calc(86px + 5rem)", paddingBottom: "5rem" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 2.5rem" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
            <p style={{ fontFamily: "'Cinzel', serif", fontSize: "0.55rem", letterSpacing: "0.38em", textTransform: "uppercase", color: "rgba(236,234,224,0.4)", marginBottom: "1.25rem" }}>
              {gr ? "Νομικά" : "Legal"}
            </p>
            <h1 style={{ fontFamily: "'Cinzel', serif", fontSize: "clamp(2rem, 5vw, 4rem)", fontWeight: 400, color: "#eceae0", letterSpacing: "0.06em", textTransform: "uppercase", lineHeight: 1.1, margin: 0 }}>
              {gr ? "Πολιτική Απορρήτου" : "Privacy Policy"}
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "6rem 2.5rem 8rem" }}>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", lineHeight: 2, color: "rgba(68,67,64,0.4)", fontWeight: 300, marginBottom: "4rem", borderBottom: `1px solid ${BORDER}`, paddingBottom: "3rem" }}
        >
          {gr
            ? `Τελευταία ενημέρωση: Ιανουάριος ${new Date().getFullYear()}`
            : `Last updated: January ${new Date().getFullYear()}`}
        </motion.p>

        <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>

          {gr ? (
            <>
              <Section title="1. Εισαγωγή">
                <P>Η Villa Romantica («εμείς», «μας») δεσμεύεται να προστατεύει τα προσωπικά σας δεδομένα. Η παρούσα Πολιτική Απορρήτου εξηγεί πώς συλλέγουμε, χρησιμοποιούμε και προστατεύουμε τις πληροφορίες σας όταν χρησιμοποιείτε τον ιστότοπό μας ή κάνετε κράτηση μαζί μας.</P>
              </Section>
              <Section title="2. Δεδομένα που Συλλέγουμε">
                <P>Ενδέχεται να συλλέξουμε τα ακόλουθα δεδομένα προσωπικού χαρακτήρα:</P>
                <P>· Στοιχεία ταυτότητας (όνομα, επώνυμο)</P>
                <P>· Στοιχεία επικοινωνίας (διεύθυνση email, αριθμός τηλεφώνου)</P>
                <P>· Δεδομένα κράτησης (ημερομηνίες άφιξης/αναχώρησης, αριθμός επισκεπτών, ειδικά αιτήματα)</P>
                <P>· Δεδομένα χρήσης (διεύθυνση IP, τύπος προγράμματος περιήγησης, σελίδες που επισκεφθήκατε)</P>
              </Section>
              <Section title="3. Πώς Χρησιμοποιούμε τα Δεδομένα σας">
                <P>Χρησιμοποιούμε τα δεδομένα σας για να:</P>
                <P>· Επεξεργαστούμε και διαχειριστούμε τις κρατήσεις σας</P>
                <P>· Επικοινωνούμε μαζί σας σχετικά με τη διαμονή σας</P>
                <P>· Βελτιώνουμε τις υπηρεσίες και τον ιστότοπό μας</P>
                <P>· Συμμορφωνόμαστε με νομικές υποχρεώσεις</P>
              </Section>
              <Section title="4. Βάση Επεξεργασίας">
                <P>Επεξεργαζόμαστε τα δεδομένα σας με βάση: (α) την εκτέλεση σύμβασης κράτησης, (β) τη συγκατάθεσή σας, (γ) τα έννομα συμφέροντά μας και (δ) τη συμμόρφωση με νομικές υποχρεώσεις.</P>
              </Section>
              <Section title="5. Κοινοποίηση Δεδομένων">
                <P>Δεν πωλούμε ούτε ενοικιάζουμε τα προσωπικά σας δεδομένα σε τρίτους. Ενδέχεται να μοιραστούμε πληροφορίες με αξιόπιστους παρόχους υπηρεσιών που μας βοηθούν να λειτουργούμε τον ιστότοπο και να παρέχουμε τις υπηρεσίες μας, αποκλειστικά για τους σκοπούς που περιγράφονται στην παρούσα πολιτική.</P>
              </Section>
              <Section title="6. Διατήρηση Δεδομένων">
                <P>Διατηρούμε τα προσωπικά σας δεδομένα για όσο χρόνο είναι απαραίτητο για τους σκοπούς που ορίζονται στην παρούσα πολιτική — συνήθως για 3 χρόνια μετά την τελευταία επικοινωνία σας μαζί μας, ή όπως απαιτείται από τη νομοθεσία.</P>
              </Section>
              <Section title="7. Τα Δικαιώματά σας">
                <P>Σύμφωνα με τον ΓΚΠΔ, έχετε δικαίωμα πρόσβασης, διόρθωσης, διαγραφής, περιορισμού επεξεργασίας, φορητότητας δεδομένων και εναντίωσης. Για να ασκήσετε οποιοδήποτε από αυτά τα δικαιώματα, επικοινωνήστε μαζί μας στη διεύθυνση: info@villaromantica.gr</P>
              </Section>
              <Section title="8. Cookies">
                <P>Ο ιστότοπός μας χρησιμοποιεί cookies για να βελτιώσει την εμπειρία σας στην περιήγηση. Μπορείτε να ελέγξετε τη χρήση cookies μέσα από τις ρυθμίσεις του προγράμματος περιήγησής σας. Η απενεργοποίηση των cookies ενδέχεται να επηρεάσει ορισμένες λειτουργίες του ιστότοπου.</P>
              </Section>
              <Section title="9. Ασφάλεια">
                <P>Εφαρμόζουμε κατάλληλα τεχνικά και οργανωτικά μέτρα για την προστασία των δεδομένων σας από μη εξουσιοδοτημένη πρόσβαση, αλλοίωση, αποκάλυψη ή καταστροφή.</P>
              </Section>
              <Section title="10. Επικοινωνία">
                <P>Για ερωτήματα σχετικά με την παρούσα Πολιτική Απορρήτου, επικοινωνήστε μαζί μας:</P>
                <P>Villa Romantica · Μελίνας Μερκούρη 193, Παλιό, Καβάλα, Ελλάδα</P>
                <P>Email: info@villaromantica.gr · Τηλ: +30 2510 441902 / 441201</P>
              </Section>
            </>
          ) : (
            <>
              <Section title="1. Introduction">
                <P>Villa Romantica ("we", "us") is committed to protecting your personal data. This Privacy Policy explains how we collect, use, and protect your information when you use our website or make a booking with us.</P>
              </Section>
              <Section title="2. Data We Collect">
                <P>We may collect the following personal data:</P>
                <P>· Identity information (first name, last name)</P>
                <P>· Contact details (email address, phone number)</P>
                <P>· Booking data (check-in/check-out dates, number of guests, special requests)</P>
                <P>· Usage data (IP address, browser type, pages visited)</P>
              </Section>
              <Section title="3. How We Use Your Data">
                <P>We use your data to:</P>
                <P>· Process and manage your reservations</P>
                <P>· Communicate with you about your stay</P>
                <P>· Improve our services and website</P>
                <P>· Comply with legal obligations</P>
              </Section>
              <Section title="4. Legal Basis for Processing">
                <P>We process your data on the basis of: (a) performance of a booking contract, (b) your consent, (c) our legitimate interests, and (d) compliance with legal obligations.</P>
              </Section>
              <Section title="5. Data Sharing">
                <P>We do not sell or rent your personal data to third parties. We may share information with trusted service providers who assist us in operating the website and delivering our services, strictly for the purposes described in this policy.</P>
              </Section>
              <Section title="6. Data Retention">
                <P>We retain your personal data for as long as necessary for the purposes set out in this policy — typically 3 years after your last communication with us, or as required by law.</P>
              </Section>
              <Section title="7. Your Rights">
                <P>Under GDPR, you have the right to access, rectify, erase, restrict processing, data portability, and object. To exercise any of these rights, please contact us at: info@villaromantica.gr</P>
              </Section>
              <Section title="8. Cookies">
                <P>Our website uses cookies to improve your browsing experience. You can control cookie use through your browser settings. Disabling cookies may affect certain website features.</P>
              </Section>
              <Section title="9. Security">
                <P>We implement appropriate technical and organisational measures to protect your data from unauthorised access, alteration, disclosure, or destruction.</P>
              </Section>
              <Section title="10. Contact">
                <P>For questions regarding this Privacy Policy, please contact us:</P>
                <P>Villa Romantica · Melinas Merkouri 193, Palio, Kavala, Greece</P>
                <P>Email: info@villaromantica.gr · Tel: +30 2510 441902 / 441201</P>
              </Section>
            </>
          )}
        </div>

        <div style={{ marginTop: "5rem", paddingTop: "3rem", borderTop: `1px solid ${BORDER}` }}>
          <button
            onClick={() => go("/terms")}
            style={{ fontFamily: "'Cinzel', serif", fontSize: "0.55rem", letterSpacing: "0.2em", textTransform: "uppercase", color: MUTED, background: "none", border: `1px solid ${BORDER}`, cursor: "pointer", padding: "0.8rem 2rem", transition: "border-color 0.3s ease" }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = C; e.currentTarget.style.color = C; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = BORDER; e.currentTarget.style.color = MUTED as string; }}
          >
            {gr ? "Όροι & Προϋποθέσεις →" : "Terms & Conditions →"}
          </button>
        </div>
      </div>
    </main>
  );
}
