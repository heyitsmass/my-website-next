import { Damion, Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
  preload: true,
});

const damion = Damion({
  subsets: ["latin"],
  weight: ["400"],
  preload: true,
});

export { roboto, damion };
