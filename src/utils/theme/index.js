import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {},
  typography: {
    button: {
      textTransform: "none",
    },
  },

  // ****************** Background Color ******************

  //--- Login
  loginModalHeader: "#F6F6F6",
  loginModalMain: "#FFFFFF",
  loginModalListHover: "#F6F6F6",

  //--- Navbar
  navGradientStart: "#3F55C8",
  navGradientEnd: "#583FC8",
  navArrow: "#ffffff",
  navBg: "#474DC8",

  //--- signout
  buttonBg: "#D55151",

  //--- Hover
  hover: "#F5F5F5",

  // ****************** Text Color ******************
  //--- Login
  loginModalText: "#5b5b5b",

  //--- Navbar
  navActive: "#FFFFFF",
  navInActive: "#A5A5E4",

  //--- common
  primary: "#545454",
  secondary: "#9A9A9A",
  userInfo: "#4A4A4A",

  disable: "#EEEEEE",
  button: "#ffffff",

  // ****************** Loader Color ******************
  loader: "#4D49C8",

  // ****************** Scrollbar Color ******************
  scrollbarThumb: "#D8D8D8",
});
