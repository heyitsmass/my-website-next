import { SimpleConfig } from "@/hooks/useSimpleConfig";
import me, {
  FILTER,
  SkillConfig,
  SkillGroup,
  SortDirection,
  TSkillItems,
} from "@/me";
import { Box } from "@mui/material";
import { PropsWithChildren, createContext } from "react";
import DrawerContext from "./context";
import useDrawerState from "./hooks/useDrawerState";
import useSearchbarState from "./hooks/useSearchbarState";

export default function DrawerProvider<T extends SkillGroup>({
  children,
  config,
  items,
  searchHeight = 60,
  width = 240,
}: PropsWithChildren<{
  config: SimpleConfig<T>;
  items: TSkillItems;
  searchHeight?: number;
  width?: number;
}>) {
  const search = useSearchbarState({ height: searchHeight });
  const drawer = useDrawerState({ width });

  const keys = Object.keys(items) as (keyof SkillConfig)[];

  return (
    <DrawerContext.Provider
      value={{
        search,
        drawer,
        config,
        items,
        keys,
      }}
    >
      <Box
        id="drawer-root"
        sx={{
          height: "100%",
          zIndex: (theme) => theme.zIndex.drawer - 1,
          position: "relative",
        }}
      >
        {children}
      </Box>
    </DrawerContext.Provider>
  );
}

type _DrawerState = {
  width: number;
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

type _DrawerAppBar = {
  height: number;
  value: string;
  set: () => void;
  get: <T>() => T;
};

type ToPrimitive<T> = T extends string
  ? string
  : T extends number
  ? number
  : T extends boolean
  ? boolean
  : T extends object
  ? _ObtainSchemaField<T>
  : never;

type IgnoredFields = "icon" | "description";

type _ObtainSchemaField<
  T extends {
    [x: string]: any;
  },
  E extends string = IgnoredFields
> = keyof {
  [x in keyof Omit<T, E>]: ToPrimitive<T[x]>;
};

type TObject = {
  [x: string]: any;
};

type _ObtainSchemaFromObject<
  T extends TObject,
  K extends keyof T = keyof T,
  E extends string = IgnoredFields
> = {
  -readonly [P in keyof T]: T[P][number] extends {
    name: string;
  }
    ? {
        [K in _ObtainSchemaField<T[P][number], E>]: T[P][number][K];
      }
    : P;
}[K];

type _Schema<
  TDataType extends TObject,
  TIgnoredFields extends string = IgnoredFields,
  AtKey extends keyof TDataType = TDataType extends string
    ? never
    : keyof TDataType
> = _ObtainSchemaFromObject<
  TDataType,
  AtKey,
  TIgnoredFields
> extends string
  ? never
  : keyof _ObtainSchemaFromObject<TDataType, AtKey, TIgnoredFields>;

type _DrawerConfig<
  TDataType extends TObject,
  TIgnoredFields extends string = IgnoredFields,
  Key extends keyof TDataType = keyof TDataType,
  TSchema extends _Schema<TDataType, TIgnoredFields, Key> = _Schema<
    TDataType,
    TIgnoredFields,
    Key
  >
> = {
  group: Key;
  sortBy?: TSchema extends never ? never : TSchema | "None";
  order?: TSchema extends never ? never : SortDirection;
} & {
  [P in TSchema]: Capitalize<`${TDataType[Key][number][P]}` | "All">;
};

type DrawerConfig<
  TDataType extends TObject,
  Key extends keyof TDataType = keyof TDataType,
  TIgnoredFields extends string = IgnoredFields
> = _DrawerConfig<TDataType, TIgnoredFields, Key>;

type TSkillGroups = keyof typeof me.skills;

type TSkillConfig<T extends TSkillGroups = TSkillGroups> = DrawerConfig<
  typeof me.skills,
  T
>;

type GenericSkillConfig = TSkillConfig;

export const BASE_SKILL_SEARCH_CONFIG: TSkillConfig<"frameworks"> = {
  group: "frameworks",
  name: FILTER.BY.all,
  sortBy: FILTER.BY.none,
  order: "None",
  proficiency: "All",
  startYear: "All",
};

export const BASE_ABOUT_SEARCH_CONFIG: DrawerConfig<typeof me.about> = {
  group: "interests",
};

const _DrawerContext = createContext({});

const DrawerWrapper = () => {
  return <></>;
};
