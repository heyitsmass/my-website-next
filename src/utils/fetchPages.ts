"use server";

import { existsSync, readdirSync } from "fs";

export default async function locatePages() {
  return readdirSync("./src/app", {
    withFileTypes: true,
  })
    .filter(
      (dirent) =>
        dirent.isDirectory() &&
        existsSync("./src/app/" + dirent.name + "/page.tsx")
    )
    .map((dirent) => dirent.name);
}
