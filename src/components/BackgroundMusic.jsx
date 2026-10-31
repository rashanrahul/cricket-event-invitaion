
import { useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import "./BackgroundMusic.css";

function BackgroundMusic() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [error, setError] = useState("");

  const toggleMusic = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      return;
    }

    try {
      setError("");
      await audio.play();
    } catch (err) {
      console.error("Audio error:", err);
      setError("Music play කරන්න බැහැ. Audio file එක check කරන්න.");
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/audio/stadium-music.mp3"
        loop
        preload="auto"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onError={() => {
          setError("Audio file එක load වුණේ නැහැ.");
          console.error("Audio file loading failed");
        }}
      />

      <button className="music-control" onClick={toggleMusic}>
        {isPlaying ? <Volume2 size={22} /> : <VolumeX size={22} />}
        <span>{isPlaying ? "MUSIC ON" : "MUSIC OFF"}</span>
      </button>

      {error && <p className="music-error">{error}</p>}
    </>
  );
}

export default BackgroundMusic;
