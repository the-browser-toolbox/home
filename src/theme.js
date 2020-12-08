import { createMuiTheme } from "@material-ui/core/";

const theme = createMuiTheme({
  typography: {
    fontFamily: "Segoe UI",
    h2: {
      fontSize: "43px"
    },
    h3: {
      fontSize: "24px",
      fontFamily: "Segoe UI"
    },
    h4: {
      fontSize: "22px",
      fontFamily: "Segoe UI",
      fontWeight: "700"
    },
    body1: {
      fontSize: "18px",
      fontFamily: "Segoe UI",
      fontWeight: "600"
    },
    body2: {
      fontFamily: "Raleway",
      fontWeight: "500",
      fontSize: "19px"
    }
  }
});

export default theme;
