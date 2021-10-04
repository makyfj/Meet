import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#72b96d",
    },
    secondary: {
      main: "#e6e411",
    },
    text: {
      primary: "#72b96d",
      secondary: "#000",
    },
  },
  typography: {
    fontFamily: "Droid Sans",
  },
});

export default theme;
