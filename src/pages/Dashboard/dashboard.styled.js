import { Divider, Grid, Stack, styled } from "@mui/material";

export const DashboardContainer = styled(Grid)({
  width: "100vw",
  height: "100vh",
  padding: "2rem",
  gap: "2rem",
  position: "relative",
});

export const Wrapper = styled(Stack)({
  display: "flex",
  gap: "1rem",
  flexGrow: 1,
});

export const Seperator = styled(Divider)({
  // width: "100%",
  // borderBottomWidth: "0.1rem",
});
