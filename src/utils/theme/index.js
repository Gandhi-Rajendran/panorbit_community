import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {},
  typography: {
    button: {
      textTransform: "none",
    },
  },

  // ****************** BACKGROUND ******************

  //--- LOGIN
  loginModalHeader: "#F6F6F6",

  //--- NAVABR
  navGradientStart: "#3F55C8",
  navGradientEnd: "#583FC8",
  navArrow: "#ffffff",
  navBg: "#474DC8",

  //--- SIGNOUT
  buttonBg: "#D55151",

  //--- CHATS
  main: "#2C65C8",
  offline: "#D4D4D4",
  online: "#1DA653",
  message: "#F1F1F1",

  //--- HOVER
  hover: "#F5F5F5",

  // COMMMON
  whitePrimary: "#FFFFFF",

  // ****************** TEXT ******************
  //--- LOGIN
  loginModalText: "#5b5b5b",

  //--- NAVBAR
  navActive: "#FFFFFF",
  navInActive: "#A5A5E4",

  //--- COMMON
  primary: "#545454",
  secondary: "#9A9A9A",
  userInfo: "#4A4A4A",
  disable: "#EEEEEE",
  button: "#ffffff",

  // ****************** LOADER ******************
  loader: "#4D49C8",

  // ****************** SCROLLBAR ******************
  scrollbarThumb: "#D4D4D4",
});
