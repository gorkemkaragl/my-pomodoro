"use client";

import { useTimer } from "@/hooks/useTimer";
import TimerDisplay from "./TimerDisplay";
import TimerControls from "./TimerControls";
import TimerStages from "./TimerStages";
import SoundToggle from "./SoundToggle";
import { useAmbience } from "@/hooks/useAmbience";
import Settings from "./Settings";

export default function Timer() {
  const timer = useTimer();
  const ambience = useAmbience(timer.isRunning);

  return (
    <div className="flex flex-col items-center gap-6">
      <Settings muted={ambience.muted} toggleMute={ambience.toggleMute}></Settings>

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
