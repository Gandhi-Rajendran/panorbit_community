import { Stack, styled } from "@mui/material";

export const PageNotFoundContainer = styled(Stack)(({ theme }) => ({
  width: "100%",
  height: "100vh",
  alignItems: "center",
  justifyContent: "center",

  "& svg": {
    fontSize: "20rem",
  },

  "& a": {
    color: theme.notFound,
  },
}));
