
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { motion } from "framer-motion";
import "./Hero.css";

function CricketBall() {
  const ballRef = useRef();

  useFrame((state) => {
    if (ballRef.current) {
      ballRef.current.rotation.y = state.clock.elapsedTime * 0.8;
      ballRef.current.rotation.x = Math.sin(
        state.clock.elapsedTime * 0.5
      ) * 0.2;
    }
  });

  return (
    <Float
      speed={2}
      rotationIntensity={0.5}
      floatIntensity={0.8}
    >
      <group ref={ballRef}>
        {/* Red leather cricket ball */}
        <mesh>
          <sphereGeometry args={[0.72, 64, 64]} />
          <meshStandardMaterial
            color="#a90818"
            roughness={0.38}
            metalness={0.05}
          />
        </mesh>

        {/* Cricket ball seam */}
        <mesh rotation={[0.8, 0, 0.4]}>
          <torusGeometry args={[0.70, 0.018, 12, 100]} />
          <meshStandardMaterial color="#fff0d0" />
        </mesh>

        <mesh rotation={[-0.8, 0, 0.4]}>
          <torusGeometry args={[0.70, 0.018, 12, 100]} />
          <meshStandardMaterial color="#fff0d0" />
        </mesh>
      </group>
    </Float>
  );
}

function Hero() {
  const enterWebsite = () => {
    document.getElementById("teams")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="hero-section" id="home">

      <div className="stadium-glow"></div>
      <div className="stadium-field"></div>

      <div className="hero-content">

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          SRI LANKA INSTITUTE OF TOURISM
          & HOTEL MANAGEMENT
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          THE ULTIMATE
          <span> CRICKET BATTLE </span>
        </motion.h1>

        <motion.div
          className="cricket-ball-container"
          initial={{ opacity: 0, scale: 0.2 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          <Canvas camera={{ position: [0, 0, 3.5], fov: 45 }}>
            <ambientLight intensity={1.5} />

            <directionalLight
              position={[3, 4, 5]}
              intensity={3}
            />

            <pointLight
              position={[-3, 2, 2]}
              intensity={2}
              color="#ff3344"
            />

            <CricketBall />
          </Canvas>
        </motion.div>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          ONE DAY. NINE TEAMS. ONE CHAMPION.
        </motion.p>

        <motion.div
          className="hero-event-date"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
        >
          10 NOVEMBER 2026 | 08:00 AM
        </motion.div>

        <motion.button
          className="enter-button"
          onClick={enterWebsite}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
        >
          ENTER THE STADIUM
          <span> → </span>
        </motion.button>

      </div>

      <div className="hero-bottom">
        SCROLL TO EXPLORE
        <span> ↓ </span>
      </div>

    </section>
  );
}

export default Hero;
