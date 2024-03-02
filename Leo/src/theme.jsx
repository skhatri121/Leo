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
      4: "#CC8409",
      5: "#649C5B",
      6: "#F9E1E1",
      7: "#3338B1",
      8: "#33B14E",
      9: "#B13377",
      10: "#A5A6F6",
      11: "#FFEAEA",
      12: "",
    },
  },
});

export default theme;
