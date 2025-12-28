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

type Props = {
  muted: boolean;
  toggleMute: () => void;
};

export default function Settings({ muted, toggleMute }: Props) {
  return (
    <div>
      <Dialog>
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
        </DialogContent>
      </Dialog>
    </div>
  );
}
