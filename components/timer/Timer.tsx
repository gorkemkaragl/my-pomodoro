"use client";

import { useTimer } from "@/contexts/TimerContext";
import TimerDisplay from "./TimerDisplay";
import TimerControls from "./TimerControls";
import TimerStages from "./TimerStages";
import { useAmbience } from "@/hooks/useAmbience";
import Settings from "../common/Settings";
import StageChangeWarn from "../common/StageChangeWarn";
import { useStageChangeWarn } from "@/hooks/warning/useStageChangeWarn";
import { useReloadWarn } from "@/hooks/warning/useReloadWarn";
import { Stage } from "./constants";
import FooterQuotes from "../common/FooterQuotes";

export default function Timer() {
  const timer = useTimer();
  const ambience = useAmbience(timer.isRunning);
  useReloadWarn(timer.isRunning);
  const stageChangeWarn = useStageChangeWarn();

  //manuel aşama değiştirme ve uyarı (client olduğu için burada yapılıyor)
  const handleChangeStage = async (stage: Stage) => {
    if (timer.isRunning) {
      const ok = await stageChangeWarn.confirm();
      if (!ok) return;
    }

    timer.changeStage(stage);
  };

  return (
    <div className="flex flex-col items-center gap-6">
      <Settings
        muted={ambience.muted}
        toggleMute={ambience.toggleMute}
      ></Settings>

      <TimerStages stage={timer.stage} onChange={handleChangeStage} />

      <TimerDisplay secondsLeft={timer.secondsLeft} />

      <TimerControls
        isRunning={timer.isRunning}
        onStart={timer.start}
        onPause={timer.pause}
        onReset={timer.reset}
      />

      <StageChangeWarn
        open={stageChangeWarn.open}
        onConfirm={stageChangeWarn.handleConfirm}
        onCancel={stageChangeWarn.handleCancel}
      />

      <FooterQuotes stage={timer.stage}></FooterQuotes>
    </div>
  );
}
