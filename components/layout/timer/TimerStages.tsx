import { Stage } from "./constants";

type Props = {
  stage: Stage;
  onChange: (stage: Stage) => void;
};

export default function TimerStages({ stage, onChange }: Props) {
  const stages: Stage[] = ["pomodoro", "shortBreak", "longBreak"];

  return (
    <div className="flex gap-6 text-sm font-medium">
      {stages.map((item) => (
        <button
          key={item}
          onClick={() => onChange(item)}
          className={`capitalize transition-colors ${
            stage === item
              ? "text-primary"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {item.replace("Break", " Break")}
        </button>
      ))}
    </div>
  );
}
