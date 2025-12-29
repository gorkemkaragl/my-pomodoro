"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { Stage } from "@/components/timer/constants";

// süre ayarları
type Durations = {
  pomodoro: number; //dakika cinsinden
  shortBreak: number;
  longBreak: number;
};

export const DEFAULT_DURATIONS = {
  pomodoro: 25,
  shortBreak: 5,
  longBreak: 15,
};

// context tipi
type TimerContextType = {
  stage: Stage;
  secondsLeft: number;
  isRunning: boolean;
  durations: Durations;
  start: () => void;
  pause: () => void;
  reset: () => void;
  changeStage: (s: Stage) => void;
  setDurations: React.Dispatch<React.SetStateAction<Durations>>;
};

const TimerContext = createContext<TimerContextType | null>(null);

const alarm =
  typeof window !== "undefined" ? new Audio("/sounds/alarm.mp3") : null;

export function TimerProvider({ children }: { children: React.ReactNode }) {
  //  kullanıcı siteyi açtığında default süreleri localStorage’tan yükle
  const [durations, setDurations] = useState<Durations>(() => {
    if (typeof window === "undefined") return DEFAULT_DURATIONS;
    const saved = localStorage.getItem("durations");
    return saved ? JSON.parse(saved) : DEFAULT_DURATIONS;
  });

  const [stage, setStage] = useState<Stage>("pomodoro");
  const [secondsLeft, setSecondsLeft] = useState(durations.pomodoro * 60);
  const [isRunning, setIsRunning] = useState(false);

  // geri sayım
  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          setIsRunning(false);
          alarm?.play();
          switchStage();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, stage]);

  // stage değişince süreyi güncelle
  useEffect(() => {
    setSecondsLeft(durations[stage] * 60);
  }, [stage, durations]);

  // localStorage
  useEffect(() => {
    localStorage.setItem("durations", JSON.stringify(durations));
  }, [durations]);

  useEffect(() => {
    localStorage.setItem("pomodoro-stage", stage);
  }, [stage]);

  // title güncelle
  useEffect(() => {
    const m = Math.floor(secondsLeft / 60);
    const s = secondsLeft % 60;
    document.title = `${m}:${s.toString().padStart(2, "0")} - Pomodoro`;
  }, [secondsLeft]);

  //otomatik aşama geçişi
  const switchStage = () => {
    const next: Stage =
      stage === "pomodoro"
        ? "shortBreak"
        : stage === "shortBreak"
        ? "longBreak"
        : "pomodoro";

    setStage(next);
  };

  // manuel aşama değişimi
  const changeStage = (s: Stage) => {
    setStage(s);
    setIsRunning(false);
  };

  return (
    <TimerContext.Provider
      value={{
        stage,
        secondsLeft,
        isRunning,
        durations,
        setDurations,
        start: () => setIsRunning(true),
        pause: () => setIsRunning(false),
        reset: () => {
          setIsRunning(false);
          setSecondsLeft(durations[stage] * 60);
        },
        changeStage,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
}

// context hook
export function useTimer() {
  const ctx = useContext(TimerContext);
  if (!ctx) {
    throw new Error("useTimer must be used inside TimerProvider");
  }
  return ctx;
}
