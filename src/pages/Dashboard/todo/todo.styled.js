import { Stack, styled } from "@mui/material";

export const TodoContainer = styled(Stack)(({ theme }) => ({
  paddingTop: "15%",
  alignItems: "center",
  flexGrow: 1,

  "& h1": {
    fontSize: "5rem",
    fontWeight: 800,
    color: theme.disable,
  },
}));
