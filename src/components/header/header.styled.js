import { Grid, styled, Typography } from "@mui/material";

export const HeaderContainer = styled(Grid)(({ theme }) => ({
  width: "100%",
  height: "10%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));

export const Title = styled(Typography)(({ theme }) => ({
  fontSize: "1.6rem",
  fontWeight: "bold",
  textTransform: "capitalize",
  color: theme.primary,
}));
export const UserInfo = styled(Grid)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  fontSize: "1.2rem",
  fontWeight: 500,
  color: theme.secondary,

  "&:hover": {
    cursor: "pointer",
  },

  "& .MuiAvatar-root": {
    width: "2.5rem",
    height: "2.5rem",
    marginRight: "0.5rem",
  },
}));
