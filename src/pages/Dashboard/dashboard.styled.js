import { styled } from "@mui/material";
import { Box } from "@mui/system";

export const DashboardContainer = styled(Box)(({ theme }) => ({
  width: "100vw",
  height: "100vh",
  padding: "2rem",
  display: "flex",
  gap: "2rem",
}));
