import {
  AppBar,
  AppBarProps,
  Box,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import Searchbar from "../Searchbar";
import { Menu } from "@mui/icons-material";
import useDrawer from "./hooks/useDrawer";

export default function DrawerAppBar({ title, ...props }: AppBarProps) {
  const drawer = useDrawer("drawer");
  const search = useDrawer("search");

  return (
    <AppBar
      {...props}
      sx={{
        position: "sticky",
        borderTopRightRadius: 6,
        borderTopLeftRadius: 6,
        display: {
          zIndex: (theme) => theme.zIndex.drawer + 1,
        },
        minHeight: 60,
      }}
    >
      <Toolbar className="flex gap-4">
        <IconButton
          onClick={drawer.open}
          sx={{
            display: {
              sm: "none",
            },
          }}
        >
          <Menu />
        </IconButton>
        <Box className="flex justify-between items-center w-full gap-8">
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              minWidth: "max-content",
            }}
          >
            {title}
          </Typography>
          <Searchbar value={search.value} handleChange={search.set} />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
