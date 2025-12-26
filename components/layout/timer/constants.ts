export type Stage = "pomodoro" | "shortBreak" | "longBreak";

export const STAGES: Record<Stage, number> = {
  pomodoro: 25 * 60,
  shortBreak: 5 * 60,
  longBreak: 15 * 60,
};
