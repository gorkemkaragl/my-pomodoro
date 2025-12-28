import { useState } from "react";

export function useStageChangeWarn() {
  const [open, setOpen] = useState(false);
  const [resolver, setResolver] = useState<((value: boolean) => void) | null>(
    null
  );

  const confirm = () =>
    new Promise<boolean>((resolve) => {
      setResolver(() => resolve);
      setOpen(true);
    });

  const handleConfirm = () => {
    resolver?.(true);
    setOpen(false);
  };

  const handleCancel = () => {
    resolver?.(false);
    setOpen(false);
  };

  return {
    open,
    confirm,
    handleConfirm,
    handleCancel,
  };
}
