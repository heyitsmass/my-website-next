import useSimpleConfig, {
  ConfigItemMap,
  SimpleConfig,
} from "@/hooks/useSimpleConfig";
import useSkillItems from "@/hooks/useSkillItems";
import me, { SkillGroup } from "@/me";
import { Paper } from "@mui/material";
import { PropsWithChildren } from "react";
import DrawerAppBar from "./MyDrawer/AppBar";
import DrawerFilter from "./MyDrawer/Filter";
import DrawerProvider from "./MyDrawer/Provider";
import useDrawer from "./MyDrawer/hooks/useDrawer";


const MyDrawer = <T extends SkillGroup>({
  title,
  config,
  items,
  children,
}: PropsWithChildren<{
  title: string;
  config: SimpleConfig;
  items: ConfigItemMap<T>;
}>) => {
  return (
    <DrawerProvider config={config} items={items}>
      <DrawerAppBar title={title} />
      <DrawerFilter />
      {children}
    </DrawerProvider>
  );
};

const createWindow = <T extends SkillGroup>({
  ...config
}: SimpleConfig<T>) => {
  const sg = config.get("skillGroup");

  const skills = me.skills[sg];

  console.log(skills);
};

const DrawerContent = ({ children }: PropsWithChildren<{}>) => {
  const ctx = useDrawer();

  const { config } = ctx;

  const badges = createWindow(config);

  return (
    <Paper
      elevation={1}
      sx={{
        transform: {
          xs: "translateX(0)",
          sm: `translateX(${ctx.drawer.width}px)`,
        },
        width: {
          xs: "100%",
          sm: `calc(100% - ${ctx.drawer.width}px)`,
        },
        height: `calc(100% - ${ctx.search.height + 4}px)`,
        borderBottomRightRadius: 6,
      }}
    >
      {children}
    </Paper>
  );
};

const SkillDrawer = () => {
  const config = useSimpleConfig();
  const items = useSkillItems(config.raw);

  return (
    <MyDrawer title="Skills" config={config} items={items}>
      <DrawerContent>{/* ... */}</DrawerContent>
    </MyDrawer>
  );
};

export default SkillDrawer;
