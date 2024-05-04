import { TDrawerContext } from "../context";
import useDrawerContext from "./useDrawerContext";

function useDrawer(): TDrawerContext;
function useDrawer<T extends keyof TDrawerContext>(
  key: T
): TDrawerContext[T];
function useDrawer(key?: keyof TDrawerContext) {
  const ctx = useDrawerContext();
  return key ? ctx[key] : ctx;
}

export default useDrawer;
