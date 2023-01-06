import { Button, Popover, Stack, styled, Typography } from "@mui/material";

export const SignoutContainer = styled(Popover)({
  "& .MuiPaper-root": {
    marginTop: "1rem",
    width: "16rem",
    textAlign: "center",
    padding: "1.5rem",
    borderRadius: "1.5rem",
  },
});
SignoutContainer.defaultProps = {
  anchorOrigin: {
    vertical: "bottom",
    horizontal: "right",
  },
  transformOrigin: {
    vertical: "top",
    horizontal: "right",
  },
};

export const UserProfile = styled(Stack)(({ theme }) => ({
  padding: "0.5rem 0",
  "& .MuiAvatar-root": {
    display: "block",
    width: "5rem",
    height: "5rem",
    margin: "0.2rem auto",
  },
  "& p": {
    color: theme.primary,
    padding: "0.1rem 0",
    fontSize: "1.2rem",
  },
  "& p:last-of-type": {
    color: theme.secondary,
    fontSize: "1.1rem",
  },
}));

export const List = styled(Typography)(({ theme }) => ({
  color: theme.primary,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "1rem",
  padding: "0.5rem 0",
  "& .MuiAvatar-root": {
    width: "2.5rem",
    height: "2.5rem",
    marginRight: "0.5rem",
  },
}));

export const SignoutButton = styled(Button)(({ theme }) => ({
  borderRadius: "1.5rem",
  backgroundColor: theme.buttonBg,
  color: theme.button,
  marginTop: "0.5rem",
  "&:hover": {
    backgroundColor: theme.buttonBg,
    transform: "scale(0.95)",
  },
}));
SignoutButton.defaultProps = {
  variant: "contained",
  size: "medium",
};
