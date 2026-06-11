import { RouterProvider } from "react-router";
import { router } from "./routes";
import { LanguageProvider } from "./context/LanguageContext";
import { SplashScreen } from "./components/SplashScreen";

export default function App() {
  return (
    <LanguageProvider>
      <SplashScreen />
      <RouterProvider router={router} />
    </LanguageProvider>
  );
}
