"use client";

import { ListItemButton, ListProps } from "@mui/material";
import { List, ListItem } from "@mui/material-next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLayoutEffect, useRef } from "react";

export default function Links({
  pages,
  ...props
}: ListProps & {
  pages: string[];
}) {
  const p = useRef(pages);
  const pathname = usePathname().slice(1);

  useLayoutEffect(() => {
    p.current = pages;
  }, [pages]);

  return (
    <List
      {...props}
      component={"nav"}
      sx={{
        display: "flex",
        gap: 6,
      }}
    >
      {p.current.map((page) => (
        <ListItemButton
          className="capitalize"
          component={Link}
          key={page}
          href={`/${page}`}
          prefetch
          disabled={page === pathname}
          sx={{
            transition: "color 0.2s",
          }}
        >
          {page}
        </ListItemButton>
      ))}
    </List>
  );
}
