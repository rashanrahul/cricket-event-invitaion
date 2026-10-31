
import {
  ArrowUp,
  Trophy,
  Globe,
  Mail,
  MapPin
} from "lucide-react";

import "./Footer.css";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-main">

          <div className="footer-brand">
            <div className="footer-logo">
              <Trophy size={30} />
            </div>

            <h3>CRICKET CHAMPIONSHIP 2026</h3>

            <p>
              Nine teams. One battlefield. One ultimate champion.
              Join us for an unforgettable day of cricket and celebration.
            </p>
          </div>

          <div className="footer-links">
            <h4>QUICK LINKS</h4>

            <a href="#home">Home</a>
            <a href="#teams">Meet the Teams</a>
            <a href="#countdown">Countdown</a>
            <a href="#details">Event Details</a>
            <a href="#party">DJ Party</a>
          </div>

          <div className="footer-contact">
            <h4>EVENT INFORMATION</h4>

            <p>
              <MapPin size={17} />
              Sabaragamuwa Provincial Sports Complex
            </p>

            <p>10 November 2026</p>
            <p>Starting at 08:00 AM</p>
            <p>Rathnapura Hotel School</p>
          </div>

        </div>

        <div className="footer-bottom">

          <p>
            © 2026 Cricket Championship.
            All Rights Reserved.
          </p>

          <button
            className="back-to-top"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            BACK TO TOP <ArrowUp size={16} />
          </button>

        </div>

      </div>
    </footer>
  );
}

export default Footer;
