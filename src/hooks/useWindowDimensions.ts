import { useState, useEffect } from "preact/compat";

type WindowDimensions = {
  height: number | null;
  width: number | null;
};

export default function useWindowDimensions() {
  const hasWindow = typeof window !== "undefined";

  function getWindowDimensions(): WindowDimensions {
    const width = hasWindow ? window.innerWidth : null;
    const height = hasWindow ? window.innerHeight : null;
    return {
      width,
      height,
    };
  }

  const [windowDimensions, setWindowDimensions] = useState<WindowDimensions>(
    getWindowDimensions(),
  );

  useEffect(() => {
    if (hasWindow) {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [hasWindow]);

  return windowDimensions;
}
