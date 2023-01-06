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
  // navGradientStart: "#3C57C8",
  // navGradientEnd: "#5840C8",

  //--- signout
  buttonBg: "#D55151",

  // ****************** Text Color ******************
  //--- Login
  loginModalText: "#5b5b5b",

  //--- Navbar
  navActive: "#FFFFFF",
  navInActive: "#A5A5E4",

  //--- signout
  signoutPrimary: "#4A4A4A",
  signoutSecondary: "#9A9A9A",
  button: "#ffffff",

  // ****************** Loader Color ******************
  loader: "#4D49C8",

  // ****************** Scrollbar Color ******************
  scrollbarThumb: "#D8D8D8",
});
