import { Volume2, VolumeOff } from "lucide-react";

type Props = {
  muted: boolean;
  toggleMute: () => void;
};

export default function SoundToggle({ muted, toggleMute }: Props) {
  return (
    <button
      onClick={toggleMute}
      className="  text-xl opacity-70 hover:opacity-100"
    >
      {muted ? <VolumeOff/> : <Volume2/>}
    </button>
  );
}
