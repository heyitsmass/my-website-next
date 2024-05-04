"use client";

import SkillDrawer from "@/components/SkillDrawer";
import theme from "@/theme";
import { Box } from "@mui/material";
import Link from "next/link";
import { PropsWithChildren, useEffect, useState } from "react";

type TSkillProps = {};

export default function Skills({
  children,
}: PropsWithChildren<TSkillProps>) {
  const [render, setRender] = useState(0);

  useEffect(() => {
    setRender((prev) => prev + 1);
  }, []);

  useEffect(() => {
    console.log("Render count:", render);
  }, [render]);

  return (
    <Box
      className="rounded-md border border-solid border-zinc-800"
      sx={{
        m: 4,
        height: "100%",
        position: "relative",
      }}
    >
      <Link href="/skills" />
      <SkillDrawer />
    </Box>
  );
}
