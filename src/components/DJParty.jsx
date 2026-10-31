
import { motion } from "framer-motion";
import {
  Music2,
  Headphones,
  Sparkles,
  PartyPopper,
} from "lucide-react";

import "./DJParty.css";

function DJParty() {
  const soundBars = Array.from({ length: 35 });

  return (
    <section className="dj-party-section" id="party">

      <div className="dj-glow dj-glow-one" />
      <div className="dj-glow dj-glow-two" />

      <div className="dj-party-container">

        <motion.div
          className="dj-party-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="dj-top-label">
            <Sparkles size={17} />
            <span>THE CELEBRATION DOESN'T END</span>
            <Sparkles size={17} />
          </div>

          <motion.div
            className="dj-icon-wrapper"
            animate={{
              rotate: [-5, 5, -5],
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Headphones size={65} strokeWidth={1.5} />
          </motion.div>

          <p className="dj-subtitle">
            AFTER THE FINAL OVER
          </p>

          <h2>
            THE <span>DJ</span>
            <br />
            PARTY
          </h2>

          <p className="dj-description">
            From cricket battles to dance floor celebrations!
            Celebrate the victories, enjoy the music and
            make unforgettable memories with us.
          </p>

          <div className="dj-party-details">
            <div>
              <Music2 size={20} />
              <span>LIVE MUSIC & DJ</span>
            </div>

            <div>
              <PartyPopper size={20} />
              <span>AFTER MATCH CELEBRATION</span>
            </div>
          </div>

          <div className="dj-status">
            <span className="dj-status-dot" />
            THE PARTY STARTS AFTER THE MATCH
          </div>
        </motion.div>

        <motion.div
          className="dj-visual"
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="dj-circle dj-circle-one" />
          <div className="dj-circle dj-circle-two" />
          <div className="dj-circle dj-circle-three" />

          <div className="dj-equalizer">
            {soundBars.map((_, index) => (
              <motion.div
                key={index}
                className="sound-bar"
                animate={{
                  height: [
                    `${15 + Math.random() * 35}px`,
                    `${30 + Math.random() * 100}px`,
                    `${15 + Math.random() * 35}px`,
                  ],
                }}
                transition={{
                  duration: 0.5 + Math.random() * 0.8,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut",
                  delay: index * 0.025,
                }}
              />
            ))}
          </div>

          <div className="dj-center-icon">
            <Music2 size={65} />
          </div>
        </motion.div>

      </div>

      <div className="dj-bottom-message">
        <span>PLAY HARD</span>
        <span className="dj-separator">✦</span>
        <span>CELEBRATE HARDER</span>
      </div>

    </section>
  );
}

export default DJParty;
