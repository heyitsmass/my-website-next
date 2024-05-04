import { Box, Drawer, DrawerProps } from "@mui/material";
import BaseDrawer from "./Base";
import useDrawer from "./hooks/useDrawer";

export default function DrawerFilter({ ...props }: DrawerProps) {
  const ctx = useDrawer();

  const { drawer } = ctx;

  return (
    <>
      <Drawer
        {...props}
        variant="permanent"
        sx={{
          display: {
            xs: "none",
            sm: "block",
          },
          boxSizing: "border-box",
          "& .MuiDrawer-paper": {
            zIndex: (theme) => theme.zIndex.appBar - 1,
            maxWidth: `${drawer.width}px`,
            position: "absolute",
            borderBottomLeftRadius: 6,
            borderTopLeftRadius: 6,
          },
          overflow: "auto",
        }}
      >
        <BaseDrawer {...ctx} />
      </Drawer>
      <Drawer
        {...props}
        variant="temporary"
        open={drawer.isOpen}
        onClose={drawer.close}
        sx={{
          display: {
            sm: "none",
          },
        }}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <BaseDrawer {...ctx} />
      </Drawer>
    </>
  );
}
