import { useEffect } from "react";

export function useReloadWarn(isRunning: boolean) {
  
  //timer çalışırken sayfa yenilenirse uyarı göster
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (!isRunning) return;

      e.preventDefault();
      e.returnValue = ""; // tarayıcı uyarıyı gösterir
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () =>
      window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [isRunning]);
}
