"use client";

import { Box } from "@mui/material";
import { Application } from "@splinetool/runtime";
import React, { Suspense, useRef, useTransition } from "react";

const Spline = React.lazy(() => import("@splinetool/react-spline"));
export default function Home() {
  const spline = useRef<Application | null>();

  const [e, startTransition] = useTransition();

  const isDev =
    typeof window !== "undefined" &&
    window.location.hostname === "localhost";

  return (
    <Box
      component="a"
      className="h-full"
      onDoubleClick={(e) =>
        isDev && (window.location.pathname = "/skills")
      }
    >
      <Suspense fallback={null}>
        <Spline
          scene={
            "https://prod.spline.design/XIX-j7jHWkT-QRqR/scene.splinecode"
          }
          onLoad={(app) =>
            startTransition(() => {
              spline.current = app;
            })
          }
        />
      </Suspense>
    </Box>
  );
}
