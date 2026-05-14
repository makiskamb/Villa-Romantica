import { useEffect, useRef } from "react";

/**
 * Single-image parallax — attach ref to the <img>.
 * The container must have overflow:hidden.
 * The image should be height ~120% and top:-10% so there are no gaps.
 */
export function useParallax<T extends HTMLElement = HTMLImageElement>(speed = 0.12) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onScroll = () => {
      const rect     = el.getBoundingClientRect();
      const windowH  = window.innerHeight;
      const progress = (windowH / 2 - (rect.top + rect.height / 2)) / windowH;
      el.style.transform = `translateY(${progress * speed * 200}px)`;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [speed]);

  return ref;
}

/**
 * Multi-image parallax — attach containerRef to a wrapper div.
 * Any <img data-parallax data-speed="0.12"> inside will animate.
 */
export function useParallaxContainer() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const imgs = Array.from(container.querySelectorAll<HTMLElement>("[data-parallax]"));

    const onScroll = () => {
      const windowH = window.innerHeight;
      imgs.forEach((el) => {
        const rect     = el.getBoundingClientRect();
        const progress = (windowH / 2 - (rect.top + rect.height / 2)) / windowH;
        const speed    = parseFloat(el.dataset.speed ?? "0.12");
        el.style.transform = `translateY(${progress * speed * 200}px)`;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return ref;
}
