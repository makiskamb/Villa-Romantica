import { Outlet, useLocation } from "react-router";
import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { FloatingContact } from "./FloatingContact";
import { PageLoader } from "./PageLoader";
import { TransitionProvider } from "../context/TransitionContext";

function useLenis() {
  const lenisRef = useRef<Lenis | null>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      rafRef.current = requestAnimationFrame(raf);
    }

    rafRef.current = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafRef.current);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return lenisRef;
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

export function Layout() {
  useLenis();

  return (
    // TransitionProvider needs useNavigate → must live inside the router tree
    <TransitionProvider>
      <div style={{ fontFamily: "'Inter', sans-serif", backgroundColor: "#eceae0" }}>
        <ScrollToTop />
        {/* Loader sits above everything, driven by TransitionContext */}
        <PageLoader />
        <Navbar />
        <Outlet />
        <Footer />
        <FloatingContact />
      </div>
    </TransitionProvider>
  );
}
