"use client";

import SkillDrawer from "@/components/SkillDrawer";
import { Box } from "@mui/material";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Skills() {
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
