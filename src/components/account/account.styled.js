import { Box, Paper, styled, Typography } from "@mui/material";
import { PulseLoader } from "react-spinners";
import { theme } from "../../utils/theme";

export const AccountContainer = styled(Paper)(({ theme }) => ({
  margin: "auto",
  width: "40%",
  maxWidth: "35rem",
  borderRadius: "2rem",
  overflow: "hidden",
  color: theme.loginModalText,
}));

export const Header = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  padding: "2.5rem",
  fontWeight: 600,
  backgroundColor: theme.loginModalHeader,
}));

export const Main = styled(Box)(({ theme }) => ({
  position: "relative",
  overflowY: "scroll",
  height: "25rem",
  padding: "0 2.5rem",
  marginBottom: "1.5rem",
  marginRight: "0.4rem",
  fontSize: "1.1rem",
  fontWeight: 450,
  backgroundColor: theme.loginModalMain,

  "& .MuiAvatar-root": {
    width: "2.3rem",
    height: "2.3rem",
    marginRight: "0.6rem",
  },

  "& .MuiListItem-root": {
    padding: "0.5rem 0",
    "&:hover": {
      backgroundColor: theme.loginModalListHover,
      cursor: "pointer",
    },
  },

  "::-webkit-slider-thumb": {
    width: "5rem",
    backgroundColor: "red",
  },
}));

export const Loader = styled(PulseLoader)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
}));
Loader.defaultProps = {
  color: theme.loader,
  size: 10,
  margin: 3,
  speed: 0.5,
};
