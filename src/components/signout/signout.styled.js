import { Button, Popover, Stack, styled } from "@mui/material";

export const SignoutContainer = styled(Popover)({
  "& .MuiPaper-root": {
    marginTop: "1rem",
    width: "18rem",
    textAlign: "center",
    padding: "1.5rem",
    borderRadius: "1.5rem",
  },

  "& hr": {
    margin: "0 1rem",
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
    fontSize: "1.2rem",
  },
  "& p:last-of-type": {
    color: theme.secondary,
    fontSize: "0.9rem",
  },
}));

export const UserGroupProfile = styled(Stack)({
  maxHeight: "6.5rem",
  overflowY: "scroll",

  // SCROLLBAR
  "&::-webkit-scrollbar-track-piece:start": {
    marginTop: "0.8rem",
  },

  "&::-webkit-scrollbar-track-piece:end": {
    marginTop: "0.5rem",
  },
});

export const List = styled(Stack)(({ theme }) => ({
  "& div": {
    color: theme.primary,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "0.9rem",
    margin: "0.2rem 0",
    "& .MuiAvatar-root": {
      marginRight: "0.5rem",
    },
  },
  "& :hover": {
    cursor: "pointer",
    backgroundColor: theme.hover,
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
