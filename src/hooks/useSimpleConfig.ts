import {
  BASE_SKILL_SEARCH_CONFIG,
  FILTER,
  SkillConfig,
  SkillGroup,
  TSkillItems,
} from "@/me";
import { useMemo, useReducer } from "react";

type Config<T extends string> = T extends SkillGroup
  ? SkillConfig<T>
  : {
      [key in T]: any;
    };

export type ConfigItemMap<T extends string> = T extends SkillGroup
  ? TSkillItems
  : never;

export type SimpleConfig<T extends SkillGroup | string = SkillGroup> = {
  raw: Config<T>;
  get: <K extends keyof Config<T>>(key: K) => Config<T>[K];
  put: <K extends keyof Config<T>>(key: K, value: Config<T>[K]) => void;
  reset: () => void;
};
type Actions<T extends SkillGroup, Key extends keyof SkillConfig<T>> =
  | Partial<{
      [K in Key]: SkillConfig<T>[K];
    }>
  | SkillConfig<T>;

type StateMap<T extends string = string> = T extends SkillGroup
  ? SkillConfig<T>
  : never;

const Reducer = <T extends SkillGroup>(
  state: StateMap<T>,
  action: Actions<T, keyof SkillConfig<T>>
): Config<T> => {
  switch (Object.keys(action)[0]) {
    case "skillGroup":
      return {
        ...state,
        filterBy: {
          mode: "inclusive",
          value: FILTER.BY.ALL,
        },
        ...action,
      };
    default:
      return {
        ...state,
        ...action,
      };
  }
};

export default function useSimpleConfig<T extends SkillGroup>(
  baseConfig?: Partial<Config<T>> | undefined
): SimpleConfig<T> {
  const [raw, dispatch] = useReducer(Reducer, {
    ...(baseConfig ?? BASE_SKILL_SEARCH_CONFIG),
  } as Config<T>);

  return {
    raw,
    get: <K extends keyof Config<SkillGroup>>(key: K) =>
      key === "filterBy" ? raw.filterBy.value : raw[key],
    put: <K extends keyof Config<SkillGroup>>(
      key: K,
      value: Config<T>[K]
    ) => {
      return dispatch(
        key === "filterBy"
          ? {
              filterBy: {
                mode: raw.filterBy.mode,
                value: value as Config<T>["filterBy"]["value"],
              },
            }
          : { [key]: value }
      );
    },
    reset: () => dispatch(BASE_SKILL_SEARCH_CONFIG),
  } as SimpleConfig<T>;
}
