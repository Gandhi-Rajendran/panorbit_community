import { Grid, styled, Typography } from "@mui/material";

export const HeaderContainer = styled(Grid)({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const Title = styled(Typography)(({ theme }) => ({
  fontSize: "1.25rem",
  fontWeight: "bold",
  textTransform: "capitalize",
  color: theme.primary,
}));

export const UserInfo = styled(Grid)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  fontSize: "1rem",
  fontWeight: 600,
  color: theme.userInfo,
  marginRight: "1rem",
  "&:hover": {
    cursor: "pointer",
  },
  "& .MuiAvatar-root": {
    width: "2.2rem",
    height: "2.2rem",
    marginRight: "0.5rem",
  },
}));
