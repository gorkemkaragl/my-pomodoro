import { Settings, Timer } from "lucide-react";
import React from "react";

const Header = () => {
  return (
    <nav className="flex justify-between items-center py-8">
      <div className=" flex gap-2">
        <Timer></Timer>

        <h1>My Pomodoro</h1>
      </div>
      <Settings className="cursor-pointer"></Settings>
    </nav>
  );
};

export default Header;
