"use client";

import { useEffect, useState } from "react";
import { QUOTES } from "./quotes";
import { Stage } from "../timer/constants";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  stage: Stage;
};

export default function FooterQuotes({ stage }: Props) {
  const [quote, setQuote] = useState<string | null>(null);

  useEffect(() => {
    const list = QUOTES[stage];
    const randomQuote = list[Math.floor(Math.random() * list.length)];
    setQuote(randomQuote);
  }, [stage]);

  return (
    <AnimatePresence mode="wait">
      {quote && (
        <motion.footer
          key={quote}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="fixed bottom-4 text-sm italic text-primary select-none"
        >
          “{quote}”
        </motion.footer>
      )}
    </AnimatePresence>
  );
}
