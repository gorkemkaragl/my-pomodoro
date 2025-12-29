"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { SettingsIcon } from "lucide-react";

import SoundToggle from "./SoundToggle";
import { useTimer } from "@/contexts/TimerContext";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { clamp } from "framer-motion";
import { useEffect, useState } from "react";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import { DEFAULT_DURATIONS } from "@/contexts/TimerContext";

type Props = {
  muted: boolean;
  toggleMute: () => void;
};

export default function Settings({ muted, toggleMute }: Props) {
  const { durations, setDurations, isRunning } = useTimer();

  const [local, setLocal] = useState(durations);
  const [open, setOpen] = useState(false);

  // settings açılınca güncel değerleri al
  useEffect(() => {
    setLocal(durations);
  }, [durations]);

  const handleSave = () => {
    setDurations(local);

    toast.message("Kaydedildi", {
      description: "Timer ayarların güncellendi"
    });

    setOpen(false); // Dialog kapanır
  };

  const handleReset = () => {
    setLocal(DEFAULT_DURATIONS); // Input alanları reset
    setDurations(DEFAULT_DURATIONS); // Global state + localStorage güncellenir
    toast.message("Varsayılan değerlere sıfırlandı"); 
    setOpen(false); // Dialog kapanır
  };
  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button size="icon" variant="ghost" className="fixed top-4 right-4">
            <SettingsIcon className="h-5 w-5" />
          </Button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle className="fixed top-4 left-4">Settings</DialogTitle>
          </DialogHeader>

          <div className="flex items-center justify-center gap-4 pt-12">
            <h3>Sound Settings:</h3>
            <SoundToggle muted={muted} toggleMute={toggleMute}></SoundToggle>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSave();
            }}
            className="space-y-4 "
          >
            <div className="flex justify-between">
              <Label>Pomodoro:</Label>
              <Input
                disabled={isRunning}
                className="w-20"
                type="number"
                value={local.pomodoro}
                onChange={(e) =>
                  setLocal((l) => ({
                    ...l,
                    pomodoro: Number(e.target.value),
                  }))
                }
              />
            </div>
            <div className="flex justify-between">
              <Label>Short Break:</Label>

              <Input
                disabled={isRunning}
                className="w-20"
                type="number"
                value={local.shortBreak}
                onChange={(e) =>
                  setLocal((l) => ({
                    ...l,
                    shortBreak: Number(e.target.value),
                  }))
                }
              />
            </div>

            <div className="flex justify-between">
              <Label>Long Break:</Label>

              <Input
                disabled={isRunning}
                className="w-20"
                type="number"
                value={local.longBreak}
                onChange={(e) =>
                  setLocal((l) => ({
                    ...l,
                    longBreak: Number(e.target.value),
                  }))
                }
              />
            </div>

            <div className="flex justify-between space-x-2">
              <Button
                disabled={isRunning}
                type="button"
                variant="secondary"
                onClick={handleReset}
              >
                Reset
              </Button>
              <Button disabled={isRunning} type="submit">
                Kaydet
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
