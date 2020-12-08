import { createMuiTheme } from "@material-ui/core/";
import {lightBlue} from '@material-ui/core/colors';
const theme = createMuiTheme({
  
    palette: {
      primary: {
        // Purple and green play nicely together.
        main: lightBlue[500],
      },
    },
  
  typography: {
    fontFamily: "Segoe UI",
    h2: {
      fontSize: "43px"
    },
    h3: {
      fontSize: "24px",
      fontFamily: "Segoe UI",
      fontWeight: "10"
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
