
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./TeamCard.css";

function TeamCard({ team, index }) {
  const [revealed, setRevealed] = useState(false);

  return (
    <motion.article
      className="team-card"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      whileHover={{ y: -10 }}
      style={{ "--team-color": team.color }}
    >
      <div className="team-image-wrapper">
        <img
          src={team.image}
          alt={team.name}
          className="team-image"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />

        <div className="team-number">
          TEAM {String(team.id).padStart(2, "0")}
        </div>

        <div className="team-image-overlay" />
      </div>

      <div className="team-card-content">
        <h3>{team.name}</h3>

        <p className="team-label">TEAM CAPTAIN</p>

        <AnimatePresence mode="wait">
          {revealed ? (
            <motion.div
              key="captain"
              className="captain-name"
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
            >
              {team.captain}
            </motion.div>
          ) : (
            <motion.div
              key="hidden"
              className="captain-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              ????????
            </motion.div>
          )}
        </AnimatePresence>

        <button
          className="reveal-button"
          onClick={() => setRevealed(!revealed)}
        >
          {revealed ? "HIDE CAPTAIN" : "REVEAL CAPTAIN"}
        </button>
      </div>
    </motion.article>
  );
}

export default TeamCard;
