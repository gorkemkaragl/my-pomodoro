import { useEffect, useRef, useState } from "react";

export function useAmbience(isRunning: boolean) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    audioRef.current = new Audio("/sounds/bb-sound.mp3");
    audioRef.current.loop = true;
    audioRef.current.volume = 0.04;

    return () => {
      audioRef.current?.pause();
      audioRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (!audioRef.current) return;

    if (isRunning && !muted) {
      audioRef.current.play().catch(() => {});
      console.log("çalışıyor")

    } else {
      console.log("çalışmıy")
      audioRef.current.pause();
    }
  }, [isRunning, muted]);

  return {
    muted,
    toggleMute: () => setMuted((prev) => !prev),
    stop: () => audioRef.current?.pause(),
  };
}
