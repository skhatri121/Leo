import { extendTheme } from "@chakra-ui/react";
const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  colors: {
    primary: {
      1: "#327E2D",
      2: "#ffffff",
      3: "#1D69B3",
    },
  },
});

export default theme;
