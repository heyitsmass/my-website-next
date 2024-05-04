import { useContext } from "react";
import DrawerContext from "../context";

/**
 * Don't use this hook, use {@linkcode useDrawer} instead.
 * @returns Drawer Context
 */
const useDrawerContext = () => {
  const context = useContext(DrawerContext);
  if (!context)
    throw new Error(
      "useDrawerContext must be used within a DrawerContext.Provider"
    );
  return context;
};

export default useDrawerContext;
