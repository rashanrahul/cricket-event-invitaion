
import { motion } from "framer-motion";
import { teams } from "../data/teams";
import TeamCard from "./TeamCard";
import "./TeamSection.css";

function TeamSection() {
  return (
    <section className="teams-section" id="teams">
      <div className="teams-container">

        <motion.div
          className="teams-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span>THE COMPETITORS</span>
          <h2>MEET THE <strong>TEAMS</strong></h2>
          <p>
            Nine teams. One battlefield. One ultimate champion.
            Discover the teams competing for glory.
          </p>
        </motion.div>

        <div className="teams-grid">
          {teams.map((team, index) => (
            <TeamCard
              key={team.id}
              team={team}
              index={index}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default TeamSection;
