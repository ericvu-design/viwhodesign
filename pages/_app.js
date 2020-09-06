import "../assets/styles/oriental.css";
import { AnimatePresence } from "framer-motion";

function App({ Component, pageProps }) {
  return (
    <AnimatePresence>
      <Component {...pageProps} />
    </AnimatePresence>
  );
}

export default App;
