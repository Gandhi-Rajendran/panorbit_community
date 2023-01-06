import {
  Button,
  Divider,
  Popover,
  Stack,
  styled,
  Typography,
} from "@mui/material";

export const SignoutContainer = styled(Popover)(({ theme }) => ({
  "& .MuiPaper-root": {
    marginTop: "1rem",
    width: "15rem",
    textAlign: "center",
    padding: "1.5rem",
    borderRadius: "1.5rem",
  },
}));
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
    width: "4.5rem",
    height: "4.5rem",
    margin: "0.2rem auto",
  },
  "& p": {
    color: theme.primary,
    padding: "0.1rem 0",
  },
  "& p:last-of-type": {
    color: theme.secondary,
    fontSize: "0.9rem",
  },
}));

export const BreakLine = styled(Divider)({
  width: "100%",
  borderBottomWidth: "0.1rem",
});

export const List = styled(Typography)(({ theme }) => ({
  color: theme.primary,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "0.8rem",
  padding: "0.5rem 0",
  "& .MuiAvatar-root": {
    width: "2rem",
    height: "2rem",
    marginRight: "0.5rem",
  },
}));

export const SignoutButton = styled(Button)(({ theme }) => ({
  borderRadius: "1.5rem",
  backgroundColor: theme.buttonBg,
  color: theme.button,
  marginTop: "0.3rem",
  "&:hover": {
    backgroundColor: theme.buttonBg,
    transform: "scale(0.95)",
  },
}));
SignoutButton.defaultProps = {
  variant: "contained",
  size: "small",
};
