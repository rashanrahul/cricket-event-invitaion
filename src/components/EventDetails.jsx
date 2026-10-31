
import { motion } from "framer-motion";
import {
  CalendarDays,
  Clock,
  MapPin,
  Building2,
  ExternalLink,
} from "lucide-react";

import "./EventDetails.css";

const eventInfo = [
  {
    icon: CalendarDays,
    label: "EVENT DATE",
    value: "10 November 2026",
    description: "Tuesday",
  },
  {
    icon: Clock,
    label: "STARTING TIME",
    value: "08:00 AM",
    description: "Be there on time",
  },
  {
    icon: MapPin,
    label: "EVENT VENUE",
    value: "Sabaragamuwa Provincial Sports Complex",
    description: "Ratnapura, Sri Lanka",
  },
  {
    icon: Building2,
    label: "ORGANIZED BY",
    value: "Sri Lanka Institute of Tourism & Hotel Management",
    description: "Rathnapura Hotel School",
  },
];

function EventDetails() {
  const mapUrl =
    "https://www.google.com/maps/search/?api=1&query=Sabaragamuwa+Provincial+Sports+Complex+Ratnapura";

  return (
    <section className="event-details-section" id="details">
      <div className="event-details-container">

        <motion.div
          className="event-details-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span>ALL YOU NEED TO KNOW</span>
          <h2>EVENT <strong>DETAILS</strong></h2>
          <p>
            Mark your calendar and get ready for an unforgettable
            day of cricket, competition and entertainment.
          </p>
        </motion.div>

        <div className="event-info-grid">
          {eventInfo.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                className="event-info-card"
                key={item.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
                whileHover={{ y: -8 }}
              >
                <div className="event-info-icon">
                  <Icon size={28} />
                </div>

                <span className="event-info-label">
                  {item.label}
                </span>

                <h3>{item.value}</h3>

                <p>{item.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="event-location"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="location-content">
            <span>FIND THE VENUE</span>
            <h3>MEET US AT THE STADIUM</h3>
            <p>
              Join us at Sabaragamuwa Provincial Sports Complex
              for an exciting day of cricket.
            </p>

            <a
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="map-button"
            >
              <MapPin size={18} />
              VIEW ON GOOGLE MAPS
              <ExternalLink size={15} />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default EventDetails;
