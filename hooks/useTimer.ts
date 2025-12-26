import { useEffect, useState } from "react";
import { STAGES, Stage } from "@/components/layout/timer/constants";

const alarm =
  typeof window !== "undefined" ? new Audio("/alarm.mp3") : null;

export function useTimer() {
  const [stage, setStage] = useState<Stage>("pomodoro");
  const [secondsLeft, setSecondsLeft] = useState(STAGES.pomodoro);
  const [isRunning, setIsRunning] = useState(false);

  // timer geriye sayma
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

  // LocalStorage yükleme/kaydetme
  useEffect(() => {
    const saved = localStorage.getItem("pomodoro-stage") as Stage | null;
    if (saved) {
      setStage(saved);
      setSecondsLeft(STAGES[saved]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("pomodoro-stage", stage);
  }, [stage]);

  // title timera göre güncelleme
  useEffect(() => {
    const minutes = Math.floor(secondsLeft / 60);
    const seconds = secondsLeft % 60;
    document.title = `${minutes}:${seconds
      .toString()
      .padStart(2, "0")} - ${stage}`;
  }, [secondsLeft, stage]);

  // aşamaları değiştirme
  const switchStage = () => {
    const next: Stage =
      stage === "pomodoro"
        ? "shortBreak"
        : stage === "shortBreak"
        ? "longBreak"
        : "pomodoro";

    setStage(next);
    setSecondsLeft(STAGES[next]);
  };

  // aşamaları manuel değiştirme
  const changeStage = (s: Stage) => {
    setStage(s);
    setSecondsLeft(STAGES[s]);
    setIsRunning(false);
  };

  return {
    stage,
    secondsLeft,
    isRunning,
    start: () => setIsRunning(true),
    pause: () => setIsRunning(false),
    reset: () => {
      setIsRunning(false);
      setSecondsLeft(STAGES[stage]);
    },changeStage,
  };
}
