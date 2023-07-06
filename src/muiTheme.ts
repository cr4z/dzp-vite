import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      light: "#F00",
      main: "#F00",
      dark: "#F00",
    },
    background: {
      default: "#2F2E2F",
    },
    mode: "dark",
    grey: {
      400: "#969696",
      500: "#808080",
      600: "#747474",
      700: "#404040",
    },
    text: { primary: "#FFF" },
  },
  typography: {
    allVariants: {
      color: "white",
    },
    h1: {
      fontFamily: "Evil",
      fontSize: "96px",
      color: "red",
    },
    h2: {
      fontFamily: "Evil",
      fontSize: "64px",
      color: "red",
    },
    h3: {
      fontFamily: "Evil",
      fontSize: "48px",
      fontWeight: 200,
      letterSpacing: 1.5,
      color: "red",
    },
    h4: {
      fontFamily: "Evil",
      fontSize: "36px",
      fontWeight: 200,
      color: "red",
    },
    h5: {
      fontFamily: "Roboto",
      fontSize: "24px",
      fontWeight: 200,
      color: "white",
    },
    h6: {
      fontFamily: "Roboto",
      fontSize: "18px",
      color: "white",
    },
    body1: {
      fontFamily: "Roboto",
      fontSize: "14px",
      fontWeight: "200",
      letterSpacing: "0.2px",
    },
    body2: {
      fontFamily: "Roboto",
      fontSize: "12px",
      fontWeight: "500",
    },
    button: {
      fontFamily: "Roboto",
      fontSize: "14px",
      fontWeight: "500",
      textTransform: "capitalize",
      letterSpacing: "0.08px",
    },
    subtitle1: {
      fontFamily: "Roboto",
      fontSize: "14px",
    },
  },
});
