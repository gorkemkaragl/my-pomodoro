"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";
import { QUOTES } from "./quotes";
import { Stage } from "../timer/constants";

type Props = {
  stage: Stage;
};

export default function FooterQuotes({ stage }: Props) {
  const quote = useMemo(() => {
    const list = QUOTES[stage];
    return list[Math.floor(Math.random() * list.length)];
  }, [stage]);

  return (
    <footer className="fixed bottom-4 text-sm italic transition-all duration-500 text-primary select-none">
      “{quote}”
    </footer>
  );
}
