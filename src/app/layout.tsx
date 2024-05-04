import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./globals.css";

import {
  AppBar,
  Box,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";

import Links from "@/components/Links";
import { damion, roboto } from "@/fonts";
import metadata from "@/metadata";
import theme from "@/theme";
import MassIcon from "@/components/MassIcon";
import locatePages from "@/utils/fetchPages";

const styles = {
  root: "rounded-b-md",
  body: "h-full border border-solid absolute left-0 right-0",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pages = await locatePages();

  return (
    <html lang="en" id="__next">
      <body className={roboto.className}>
        <AppRouterCacheProvider
          options={{
            enableCssLayer: true,
          }}
        >
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container
              maxWidth="xl"
              disableGutters
              className={styles.root}
              sx={{
                height: "100vh",
                maxHeight: "100%",
              }}
            >
              <Box
                component="main"
                className="hover:cursor-pointer h-full"
                sx={{
                  position: "relative",
                }}
              >
                {children}
              </Box>
            </Container>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}

export { metadata };
