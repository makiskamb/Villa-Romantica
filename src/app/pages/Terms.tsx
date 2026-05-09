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

export function Terms() {
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
              {gr ? "Όροι & Προϋποθέσεις" : "Terms & Conditions"}
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
              <Section title="1. Αποδοχή Όρων">
                <P>Χρησιμοποιώντας τον ιστότοπο της Villa Romantica ή πραγματοποιώντας κράτηση, αποδέχεστε ανεπιφύλακτα τους παρόντες Όρους & Προϋποθέσεις. Εάν διαφωνείτε με οποιονδήποτε από τους παρόντες όρους, παρακαλούμε να μην χρησιμοποιείτε τον ιστότοπο ή τις υπηρεσίες μας.</P>
              </Section>
              <Section title="2. Κρατήσεις & Πληρωμές">
                <P>Όλες οι κρατήσεις υπόκεινται σε διαθεσιμότητα και επιβεβαιώνονται μόνο κατόπιν γραπτής απάντησής μας. Η κράτηση θεωρείται οριστική μόνο μετά την καταβολή της προκαταβολής που ορίζεται στην επιβεβαίωση.</P>
                <P>Τα τιμολόγια εκδίδονται σε ευρώ (€). Αποδεχόμαστε τραπεζικό έμβασμα και μετρητά. Οι τιμές περιλαμβάνουν τον ισχύοντα ΦΠΑ.</P>
              </Section>
              <Section title="3. Πολιτική Ακύρωσης">
                <P>· Ακύρωση έως 30 ημέρες πριν την άφιξη: πλήρης επιστροφή της προκαταβολής.</P>
                <P>· Ακύρωση 15–29 ημέρες πριν την άφιξη: επιστροφή 50% της προκαταβολής.</P>
                <P>· Ακύρωση εντός 14 ημερών πριν την άφιξη ή μη εμφάνιση: η προκαταβολή δεν επιστρέφεται.</P>
                <P>Σε περίπτωση έκτακτων ανάγκης, η Villa Romantica εξετάζει κάθε περίπτωση ξεχωριστά και επιδιώκει τη βέλτιστη λύση.</P>
              </Section>
              <Section title="4. Check-in & Check-out">
                <P>Check-in: από τις 14:00 έως τις 22:00. Παρακαλούμε ενημερώστε μας εκ των προτέρων για αφίξεις εκτός αυτών των ωρών.</P>
                <P>Check-out: έως τις 11:00. Όψιμη αναχώρηση μπορεί να διατεθεί κατόπιν αιτήματος και εφόσον υπάρχει διαθεσιμότητα, με επιπλέον χρέωση.</P>
              </Section>
              <Section title="5. Κανόνες Παραμονής">
                <P>Το κάπνισμα επιτρέπεται αποκλειστικά σε υπαίθριους χώρους. Δεν επιτρέπονται κατοικίδια εντός των σουιτών χωρίς προηγούμενη έγκριση. Η διοργάνωση εκδηλώσεων ή πάρτι στους χώρους απαιτεί ρητή γραπτή συγκατάθεση της διοίκησης. Η ησυχία τηρείται από τις 23:00 έως τις 08:00.</P>
              </Section>
              <Section title="6. Ευθύνη">
                <P>Η Villa Romantica δεν φέρει ευθύνη για απώλεια ή ζημία προσωπικών αντικειμένων των επισκεπτών. Συνιστούμε την ασφάλιση ταξιδιού για κάλυψη ακύρωσης, ιατρικών εξόδων και προσωπικών αντικειμένων. Σε περίπτωση ζημιάς στην ιδιοκτησία μας από επισκέπτη, θα απαιτηθεί αντίστοιχη αποζημίωση.</P>
              </Section>
              <Section title="7. Ιδιωτικό Απόρρητο">
                <P>Η επεξεργασία των προσωπικών σας δεδομένων διέπεται από την Πολιτική Απορρήτου μας, η οποία αποτελεί αναπόσπαστο τμήμα των παρόντων Όρων.</P>
              </Section>
              <Section title="8. Τροποποιήσεις">
                <P>Η Villa Romantica διατηρεί το δικαίωμα να τροποποιεί τους παρόντες Όρους ανά πάσα στιγμή. Οι τροποποιήσεις τίθενται σε ισχύ άμεσα με τη δημοσίευσή τους στον ιστότοπο. Η συνέχιση χρήσης του ιστότοπου μετά τυχόν αλλαγές συνιστά αποδοχή των νέων όρων.</P>
              </Section>
              <Section title="9. Εφαρμοστέο Δίκαιο">
                <P>Οι παρόντες Όροι διέπονται από το ελληνικό δίκαιο. Για οποιαδήποτε διαφορά προκύψει, αρμόδια είναι τα δικαστήρια της Καβάλας.</P>
              </Section>
              <Section title="10. Επικοινωνία">
                <P>Villa Romantica · Μελίνας Μερκούρη 193, Παλιό, Καβάλα, Ελλάδα</P>
                <P>Email: info@villaromantica.gr · Τηλ: +30 2510 441902 / 441201</P>
              </Section>
            </>
          ) : (
            <>
              <Section title="1. Acceptance of Terms">
                <P>By using the Villa Romantica website or making a booking, you unconditionally accept these Terms & Conditions. If you disagree with any of these terms, please do not use our website or services.</P>
              </Section>
              <Section title="2. Reservations & Payments">
                <P>All reservations are subject to availability and are confirmed only upon our written response. A booking is considered final only after the deposit specified in the confirmation has been received.</P>
                <P>Invoices are issued in Euros (€). We accept bank transfer and cash. Prices include applicable VAT.</P>
              </Section>
              <Section title="3. Cancellation Policy">
                <P>· Cancellation up to 30 days before arrival: full refund of the deposit.</P>
                <P>· Cancellation 15–29 days before arrival: 50% refund of the deposit.</P>
                <P>· Cancellation within 14 days of arrival or no-show: deposit is non-refundable.</P>
                <P>In cases of genuine emergency, Villa Romantica reviews each situation individually and seeks the best possible resolution.</P>
              </Section>
              <Section title="4. Check-in & Check-out">
                <P>Check-in: from 14:00 to 22:00. Please notify us in advance for arrivals outside these hours.</P>
                <P>Check-out: by 11:00. Late check-out may be available upon request and subject to availability, at an additional charge.</P>
              </Section>
              <Section title="5. House Rules">
                <P>Smoking is permitted in outdoor areas only. Pets are not permitted inside the suites without prior approval. Organising events or parties on the premises requires explicit written consent from management. Quiet hours are observed from 23:00 to 08:00.</P>
              </Section>
              <Section title="6. Liability">
                <P>Villa Romantica accepts no liability for loss or damage to guests' personal belongings. We recommend travel insurance to cover cancellation, medical expenses, and personal effects. In the event of damage to our property caused by a guest, appropriate compensation will be required.</P>
              </Section>
              <Section title="7. Privacy">
                <P>The processing of your personal data is governed by our Privacy Policy, which forms an integral part of these Terms.</P>
              </Section>
              <Section title="8. Modifications">
                <P>Villa Romantica reserves the right to modify these Terms at any time. Changes take effect immediately upon publication on the website. Continued use of the website following any changes constitutes acceptance of the revised terms.</P>
              </Section>
              <Section title="9. Governing Law">
                <P>These Terms are governed by Greek law. Any dispute arising shall be subject to the jurisdiction of the courts of Kavala.</P>
              </Section>
              <Section title="10. Contact">
                <P>Villa Romantica · Melinas Merkouri 193, Palio, Kavala, Greece</P>
                <P>Email: info@villaromantica.gr · Tel: +30 2510 441902 / 441201</P>
              </Section>
            </>
          )}
        </div>

        <div style={{ marginTop: "5rem", paddingTop: "3rem", borderTop: `1px solid ${BORDER}` }}>
          <button
            onClick={() => go("/privacy")}
            style={{ fontFamily: "'Cinzel', serif", fontSize: "0.55rem", letterSpacing: "0.2em", textTransform: "uppercase", color: MUTED, background: "none", border: `1px solid ${BORDER}`, cursor: "pointer", padding: "0.8rem 2rem", transition: "border-color 0.3s ease" }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = C; e.currentTarget.style.color = C; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = BORDER; e.currentTarget.style.color = MUTED as string; }}
          >
            {gr ? "← Πολιτική Απορρήτου" : "← Privacy Policy"}
          </button>
        </div>
      </div>
    </main>
  );
}
