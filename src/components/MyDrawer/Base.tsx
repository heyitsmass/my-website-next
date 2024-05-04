import { Toolbar } from "@mui/material";
import React from "react";
import { DropdownList } from "../Dropdown";
import ResetButton from "./ResetButton";
import { TDrawerContext } from "./context";

const drawer = ({
  drawer: { width },
  search,
  config,
  items,
  keys,
}: TDrawerContext) => {
  return (
    <>
      <Toolbar />
      <DropdownList
        pxWidth={width}
        items={items}
        keys={keys}
        conf={config}
      />
      <ResetButton
        handleClick={() => {
          config.reset();
          search.clear();
        }}
      />
    </>
  );
};

const BaseDrawer = React.memo(
  drawer,
  (prev, next) => prev.drawer.width === next.drawer.width
);

export default BaseDrawer;
