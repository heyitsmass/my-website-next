"use client";

import { SimpleConfig } from "@/hooks/useSimpleConfig";
import { SkillConfig, SkillGroup, TSkillItems } from "@/me";
import { humanReadable } from "@/utils/lang";
import { List, ListProps } from "@mui/material";
import { useEffect, useMemo, useRef } from "react";
import { Dropdown, TDropdownProps } from ".";

const DropdownList = ({
  pxWidth,
  ...props
}: {
  pxWidth: number;
  items: TSkillItems;
  keys: (keyof SkillConfig)[];
  conf: SimpleConfig<SkillGroup>;
} & ListProps) => {
  const keys = useRef(props.keys);
  const values = useMemo(() => props.items, [props.items]);
  const config = useMemo(() => props.conf, [props.conf]);

  useEffect(() => {
    if (keys.current !== props.keys) keys.current = props.keys;
  }, [props.keys]);

  return (
    <List
      {...props}
      className="flex min-w-max flex-col gap-8 justify-center items-center my-4"
      sx={{
        width: `${pxWidth - 1}px`,
      }}
    >
      {keys.current.map((key) => {
        return (
          <Dropdown
            {...({
              label: humanReadable(key),
              items: values[key],
              value: config.get(key),
              handleChange: (value) => config.put(key, value),
            } as TDropdownProps<SkillGroup>)}
            key={key}
          />
        );
      })}
    </List>
  );
};

export default DropdownList;
