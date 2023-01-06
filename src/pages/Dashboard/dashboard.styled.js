import { Grid, styled } from "@mui/material";
import { Box } from "@mui/system";

export const DashboardContainer = styled(Grid)({
  width: "100vw",
  height: "100vh",
  padding: "2rem",
  gap: "2rem",
});

export const Wrapper = styled(Box)({
  display: "flex",
  flexGrow: 1,
});
