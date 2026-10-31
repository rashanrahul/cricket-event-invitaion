
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Countdown.css";

const EVENT_DATE = new Date("2026-11-10T08:00:00+05:30").getTime();

function getTimeLeft() {
  const difference = EVENT_DATE - Date.now();

  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      finished: true,
    };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
    finished: false,
  };
}

function Countdown() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: "DAYS", value: timeLeft.days },
    { label: "HOURS", value: timeLeft.hours },
    { label: "MINUTES", value: timeLeft.minutes },
    { label: "SECONDS", value: timeLeft.seconds },
  ];

  return (
    <section className="countdown-section" id="countdown">
      <div className="countdown-container">

        <motion.div
          className="countdown-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span>THE BIG DAY IS COMING</span>
          <h2>COUNTDOWN TO <strong>GLORY</strong></h2>
          <p>Get ready for the ultimate cricket showdown!</p>
        </motion.div>

        {timeLeft.finished ? (
          <div className="event-started">
            <h3>THE GAME DAY IS HERE!</h3>
            <p>Let the battle begin!</p>
          </div>
        ) : (
          <div className="countdown-grid">
            {timeUnits.map((unit, index) => (
              <motion.div
                className="countdown-box"
                key={unit.label}
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
              >
                <div className="countdown-number">
                  {String(unit.value).padStart(2, "0")}
                </div>
                <div className="countdown-label">
                  {unit.label}
                </div>
              </motion.div>
            ))}
          </div>
        )}

        <div className="countdown-event-info">
          <span>10 NOVEMBER 2026</span>
          <span className="countdown-dot">•</span>
          <span>08:00 AM</span>
        </div>

      </div>
    </section>
  );
}

export default Countdown;
