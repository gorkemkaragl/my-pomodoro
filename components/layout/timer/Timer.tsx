"use client";

import { useTimer } from "@/hooks/useTimer";
import TimerDisplay from "./TimerDisplay";
import TimerControls from "./TimerControls";
import TimerStages from "./TimerStages";
import TimerHeader from "./TimerHeader";



export default function Timer() {
  const timer = useTimer();

  return (
    <div className="flex flex-col items-center gap-6">
      <TimerStages
        stage={timer.stage}
        onChange={(stage) => {
          timer.changeStage(stage);
        }}
      />

      <TimerDisplay secondsLeft={timer.secondsLeft} />

      <TimerControls
        isRunning={timer.isRunning}
        onStart={timer.start}
        onPause={timer.pause}
        onReset={timer.reset}
      />
    </div>
  );
}
