import { Stack, styled, Typography } from "@mui/material";

export const MessageContainer = styled(Stack)(({ theme }) => ({
  position: "absolute",
  zIndex: 100,
  right: "16rem",
  bottom: 0,
  minWidth: "17.5rem",
  border: `0.1rem solid ${theme.main}`,
  borderBottom: "none",
  borderRadius: "1rem 1rem 0 0",
  overflow: "hidden",
}));

export const MessageHeader = styled(Stack)(({ theme }) => ({
  width: "100%",
  padding: "0.5rem",
  backgroundColor: theme.main,
  fontSize: "0.8rem",
  color: theme.whitePrimary,
  fontWeight: 400,
  justifyContent: "space-between",
  "& span": {
    diplay: "flex",
    margin: "auto",
  },
  ". MuiStack-root": {
    backgroundColor: "red",
    "&:hover": {
      cursor: "pointer",
    },
  },
}));
MessageHeader.defaultProps = {
  direction: "row",
  spacing: 3,
};

export const HeaderSection = styled(Stack)({
  alignItems: "center",
  "& .MuiAvatar-root": {
    width: "2rem",
    height: "2rem",
    marginRight: "0.5rem",
  },
});
HeaderSection.defaultProps = {
  direction: "row",
};

export const MessageSection = styled(Stack)(({ theme, isminimize }) => ({
  height: "12rem",
  padding: "0 0.25rem 0 0.4rem",
  fontSize: "0.8rem",
  fontWeight: 600,
  overflowY: "scroll",
  display: isminimize ? "block" : "none",
  backgroundColor: theme.whitePrimary,
}));

export const ChatItem = styled(Stack)(({ theme }) => ({
  alignItems: "center",

  "& .MuiAvatar-root": {
    width: "2rem",
    height: "2rem",
    marginRight: "0.5rem",
  },
  "& li": {
    padding: "0.25rem 0",
    paddingBottom: 0,
  },
  "&:hover": {
    cursor: "pointer",
    backgroundColor: theme.hover,
  },
}));
ChatItem.defaultProps = {
  direction: "row",
};

export const StatusIcon = styled(Typography)(({ theme, activeuser }) => ({
  borderRadius: "50%",
  width: "0.4rem",
  height: "0.4rem",
  backgroundColor: activeuser ? `${theme.online}` : `${theme.offline}`,
}));
