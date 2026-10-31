
import "./App.css";
import BackgroundMusic from "./components/BackgroundMusic";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TeamSection from "./components/TeamSection";
import Countdown from "./components/Countdown";
import EventDetails from "./components/EventDetails";
import DJParty from "./components/DJParty";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import ScrollProgress from "./components/ScrollProgress";

function App() {
  return (
    <>
      <Loader />
      <ScrollProgress />
      <Navbar />
      <BackgroundMusic />
      <main>
        <Hero />
        <TeamSection />
        <Countdown />
        <EventDetails />
        <DJParty />
      </main>

      <Footer />
    </>
  );
}

export default App;
