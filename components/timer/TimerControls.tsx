import React from 'react'
import { Button } from '../ui/button';


type Props = {
  isRunning: boolean;
  onStart: () => void;
  onPause: () => void;
  onReset: () => void;
};


export default function TimerControls({ onStart, onPause, onReset }: Props) {
  return (
    <div className="flex gap-4">
      <Button onClick={onStart}>Start</Button>
      <Button variant="secondary" onClick={onPause}>
        Pause
      </Button>
      <Button variant="secondary" onClick={onReset}>
        Reset
      </Button>
    </div>
  )
}
