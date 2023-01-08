import { Box, List, Paper, Stack, styled, Typography } from "@mui/material";
import { PulseLoader } from "react-spinners";
import { theme } from "../../utils/theme";

export const AccountContainer = styled(Paper)(({ theme }) => ({
  margin: "auto",
  height: "28rem",
  width: "34%",
  maxWidth: "35rem",
  borderRadius: "2rem",
  overflow: "hidden",
  color: theme.loginModalText,
}));

export const Header = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  padding: "2rem",
  fontWeight: 600,
  backgroundColor: theme.loginModalHeader,
}));

export const Main = styled(List)(({ theme }) => ({
  overflowY: "scroll",
  height: "20rem",
  marginRight: "0.35rem",
  fontSize: "1.rem",
  fontWeight: 450,
  backgroundColor: theme.loginModalMain,
  position: "relative",

  "& .MuiAvatar-root": {
    width: "2.5rem",
    height: "2.5rem",
    marginRight: "0.6rem",
  },

  "& div": {
    "&:hover": {
      backgroundColor: theme.hover,
      cursor: "pointer",
    },
  },

  "& .MuiListItem-root": {
    padding: "0.4rem 1.5rem",
  },

  "& hr": {
    margin: "0 1.5rem",
  },
}));
