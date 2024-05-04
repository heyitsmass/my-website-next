"use client";
import { Container, Typography } from "@mui/material";

import meta from "@/metadata";
import { usePathname } from "next/navigation";

const styles = {
  wrapper: "h-1/8 sticky bottom-0 w-full border border-solid",
  text: "italic font-[100] text-center shadow-lg text-zinc-200 opacity-70",
};

const Footer = () => {
  const pathname = usePathname();

  const inHome = pathname === "/";

  return (
    <Container
      component="footer"
      fixed
      disableGutters
      sx={{
        m: 0,
        position: "fixed",
        bottom: 0,

        border: "solid 1px white",
        height: "4rem",
        width: "100%",
      }}
    >
      {inHome && (
        <Typography
          id="description"
          component="p"
          sx={{
            color: "text.disabled",
          }}
        >
          {meta.description}
        </Typography>
      )}
    </Container>
  );
};

export default Footer;
