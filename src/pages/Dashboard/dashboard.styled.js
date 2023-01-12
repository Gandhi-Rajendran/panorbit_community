import { Stack, styled } from "@mui/material";

export const DashboardContainer = styled(Stack)({
  width: "100vw",
  height: "100vh",
  padding: "1.5rem 2.5rem",
  gap: "2rem",
  position: "relative",
  flexDirection: "row",
  "& ::-webkit-scrollbar": {
    width: "0.3rem", // for vertical scroll
  },
});

export const Wrapper = styled(Stack)({
  gap: "1rem",
  flexGrow: 1,
  "> hr": {
    marginRight: "1rem",
  },
});
