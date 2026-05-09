import { motion, AnimatePresence } from "motion/react";
import { useTransition } from "../context/TransitionContext";

export function PageLoader() {
  const { covering } = useTransition();

  return (
    <AnimatePresence>
      {covering && (
        <motion.div
          key="page-loader"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55, ease: [0.45, 0, 0.15, 1] }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            backgroundColor: "#444340",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <motion.img
            src="/loader.gif"
            alt=""
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.45, delay: 0.06, ease: [0.33, 1, 0.68, 1] }}
            style={{
              width: "clamp(160px, 22vw, 280px)",
              height: "auto",
              objectFit: "contain",
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
