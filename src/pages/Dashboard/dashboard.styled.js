import { Divider, Grid, Stack, styled } from "@mui/material";

export const DashboardContainer = styled(Stack)({
  width: "100vw",
  height: "100vh",
  padding: "1.5rem",
  gap: "2rem",
  position: "relative",
  flexDirection: "row",
});

export const Wrapper = styled(Stack)({
  gap: "1rem",
  flexGrow: 1,
});

export const Seperator = styled(Divider)({
  // width: "100%",
  // borderBottomWidth: "0.1rem",
});
