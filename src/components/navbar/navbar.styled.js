import { Stack, styled, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const NavbarContainer = styled(Stack)(({ theme }) => ({
  minWidth: "18rem",
  borderRadius: "1.8rem",
  justifyContent: "center",

  background: `linear-gradient(${theme.navGradientStart},${theme.navGradientEnd})`,
}));

export const Nav = styled(Link)(({ theme, select }) => ({
  color: select ? `${theme.navActive}` : `${theme.navInActive}`,
  fontSize: "1.2rem",
  fontWeight: 500,
  padding: "1rem 3rem",
  borderRadius: "0 -1rem -1rem 0",
  position: "relative",
  // backgroundColor: "blue",
  "&:hover": {
    backgroundColor: "blue",
  },
  // overflow: "hidden",
  // "&::before": {
  //   content: `""`,
  //   height: "100%",
  //   borderRadius: "50% 0 0 50%",
  //   width: "3rem",
  //   position: "absolute",
  //   top: 0,
  //   right: 0,
  //   backgroundColor: "darkcyan",

  //   "&::before": {
  //     backgroundColor: "white",
  //     content: `""`,
  //     height: "2rem",
  //     width: "2rem",
  //     position: "absolute",
  //     bottom: "-2rem",
  //     right: 0,
  // borderTopRightRadius: "1rem",
  // },
  // borderBottomRightRadius: "1rem",
  // },
  // "&::after": {
  //   content: `""`,
  //   height: "2rem",
  //   width: "2rem",
  //   position: "absolute",
  //   bottom: "-2rem",
  //   right: 0,
  //   backgroundColor: "darkcyan",
  //   borderTopRightRadius: "1rem",
  //   overflow: "hidden",
  // },
  // },

  // "& svg": {
  // position: "absolute",
  // zIndex: 10,
  // padding: "1rem",

  // top: "50%",
  // right: 0,
  // height: "100%",
  // width: "3rem",
  // height: "3rem",
  // color: "red",
  // backgroundColor: "lime",
  // },

  // borderBottom: "0.1rem solid red",
}));

export const IconBox = styled(Typography)(({ theme }) => ({
  // backgroundColor: "red",
  // display: "inline-block",
  position: "absolute",
  top: 0,
  margin: "auto",
  right: 0,
  width: "2rem",
  height: "60%",
  borderRadius: "50% 0 0 50%",
  "& svg": {
    display: "block",
    margin: "auto",
    color: "black",
    // justifyContent: "center",
    // alignItems: "center",
    // alignItems:"center"
  },
}));
