"use client";
import { damion } from "@/fonts";
import {
  AppBar,
  Avatar,
  Box,
  Toolbar,
  Typography,
} from "@mui/material";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import Links from "./Links";
import MassIcon from "./MassIcon";

const styles = {
  header:
    "max-w-screen-xl h-[6.25rem] flex justify-center absolute top-0 bg-none shadow-none",
  toolbar: "flex w-max items-center mr-12",
  pageWrapper: "flex gap-6 justify-end",
  button: "text-white",
  text: "ml-8",
};

const Header = ({ pages }: { pages: string[] }) => {
  const handlePageClick = (page: string) => {
    window.location.href = `/${page}`;
  };

  const pathname = usePathname();
  const currentPage = useMemo(() => {
    const page = pathname.split("/").pop();
    return page || "home";
  }, [pathname]);

  const avatar =
    "https://media.licdn.com/dms/image/D5603AQEK_AZuHNpU3g/profile-displayphoto-shrink_800_800/0/1694234838836?e=1712188800&v=beta&t=SfibagjBdCElKiCk7b8rmKv0OwyjrJz_PDsPIaxjM-A";

  return (
    <AppBar className={styles.header}>
      <Toolbar>
        <Box className={styles.toolbar}>
          <MassIcon />
          <Typography
            component="p"
            className={styles.text}
            style={damion.style}
            sx={{
              fontSize: "2rem",
              color: "white",
              letterSpacing: "0.1rem",
            }}
          >
            Mass
          </Typography>
        </Box>
        <Links pages={pages} />
        {currentPage !== "home" && <Avatar src={avatar} alt="BC" />}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
