import { Divider, Icon, ListItem, Stack, styled } from "@mui/material";
import { Link } from "react-router-dom";

export const NavbarContainer = styled(Stack)(({ theme }) => ({
  minWidth: "16rem",
  borderRadius: "1.8rem",
  justifyContent: "center",
  background: `linear-gradient(${theme.navGradientStart},${theme.navGradientEnd})`,
}));

export const Item = styled(ListItem)({
  padding: 0,
});

export const Nav = styled(Link)(({ theme, select }) => ({
  color: select ? `${theme.navActive}` : `${theme.navInActive}`,
  fontSize: "1.1rem",
  fontWeight: 500,
  padding: "1rem 0",
  margin: "0 2.5rem",
  width: "100%",
  display: "flex",
  alignItems: "center",
}));

export const IconWrapper = styled(Icon)(({ theme }) => ({
  backgroundColor: theme.navArrow,
  width: "1.75rem",
  height: "2rem",
  color: theme.secondary,
  borderRadius: "100%  0 0 100% ",
  display: "flex",
  alignItems: "center",

  "&::before": {
    content: `""`,
    position: "absolute",
    right: 0,
    top: "-0.45rem",
    width: "1.2rem",
    height: "1.2rem",
    borderBottomRightRadius: "12px",
    boxShadow: `5px 6px 0 ${theme.navArrow}`,
    backgroundColor: theme.navBg,
  },
  "&::after": {
    content: `""`,
    position: "absolute",
    right: 0,
    bottom: "-0.45rem",
    width: "1.2rem",
    height: "1.2rem",
    borderTopRightRadius: "12px",
    boxShadow: `5px -6px 0 ${theme.navArrow}`,
    backgroundColor: theme.navBg,
  },
}));

export const Divide = styled(Divider)(({ theme }) => ({
  borderBottomWidth: "0.1rem",
  borderColor: theme.navInActive,
  margin: "0 2.5rem",
}));
