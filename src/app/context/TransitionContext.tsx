import {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { useNavigate } from "react-router";

/** How long (ms) the loader takes to become fully opaque before we navigate. */
const FADE_IN_MS = 520;
/** Brief hold after navigation so the new page can paint before we reveal it. */
const HOLD_MS = 160;

type TransitionCtx = {
  covering: boolean;
  go: (to: string) => void;
};

const Ctx = createContext<TransitionCtx>({ covering: false, go: () => {} });

export function TransitionProvider({ children }: { children: ReactNode }) {
  const [covering, setCovering] = useState(false);
  const navigate = useNavigate();
  const t1 = useRef<ReturnType<typeof setTimeout>>();
  const t2 = useRef<ReturnType<typeof setTimeout>>();

  const go = useCallback(
    (to: string) => {
      clearTimeout(t1.current);
      clearTimeout(t2.current);

      // 1 — Loader fades IN immediately
      setCovering(true);

      // 2 — Once loader is opaque, navigate (new page renders behind it)
      t1.current = setTimeout(() => {
        navigate(to);

        // 3 — Give the new page a moment to paint, then fade OUT
        t2.current = setTimeout(() => setCovering(false), HOLD_MS);
      }, FADE_IN_MS);
    },
    [navigate],
  );

  return <Ctx.Provider value={{ covering, go }}>{children}</Ctx.Provider>;
}

export const useTransition = () => useContext(Ctx);
