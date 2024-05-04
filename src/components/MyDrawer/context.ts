import { SimpleConfig } from "@/hooks/useSimpleConfig";
import {
  BASE_SKILL_SEARCH_CONFIG,
  SkillConfig,
  SkillGroup,
  TSkillItems,
} from "@/me";
import { createContext } from "react";

export type SearchbarState = {
  value: string;
  height: number;
  set: (value: string) => void;
  clear: () => void;
};

export type DrawerState = {
  isOpen: boolean;
  width: number;
  open: () => void;
  close: () => void;
  toggle: () => void;
};

const staticContext = {
  config: {
    raw: BASE_SKILL_SEARCH_CONFIG,
    get: () => {},
    put: () => {},
    reset: () => {},
  } as SimpleConfig<SkillGroup>,
  items: {} as TSkillItems,
  search: {
    value: "",
    height: 0,
    set: () => {},
    clear: () => {},
  } as SearchbarState,
  drawer: {
    isOpen: false,
    width: 240 as number,
    open: () => {},
    close: () => {},
    toggle: () => {},
  } as DrawerState,
  keys: [] as (keyof SkillConfig)[],
} as const;

export type TDrawerContext = typeof staticContext;

const DrawerContext = createContext<TDrawerContext>({
  ...staticContext,
});

export default DrawerContext;
