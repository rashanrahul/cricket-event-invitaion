
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy } from "lucide-react";
import "./Loader.css";

function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="loader-screen"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="loader-content"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ scale: 0.8 }}
          >
            <motion.div
              className="loader-trophy"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Trophy size={65} />
            </motion.div>

            <h2>CRICKET <span>2026</span></h2>

            <p>PREPARE FOR THE BATTLE</p>

            <div className="loader-track">
              <motion.div
                className="loader-progress"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.6 }}
              />
            </div>

            <span className="loader-caption">LOADING STADIUM...</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Loader;
