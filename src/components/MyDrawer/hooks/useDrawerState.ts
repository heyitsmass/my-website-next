import { useState } from "react";
import { TDrawerContext } from "../context";

/**
 * Dont use this hook directly, use {@linkcode useDrawer} instead
 * @returns Drawer State Handlers
 */
const useDrawerState = ({ width = 240 }: { width?: number }) => {
  const [pre_open, setOpen] = useState(false);

  return {
    isOpen: pre_open,
    width: width,
    open: () => setOpen(true),
    close: () => setOpen(false),
    toggle: () => setOpen((prev) => !prev),
  } as TDrawerContext["drawer"];
};

export default useDrawerState;
