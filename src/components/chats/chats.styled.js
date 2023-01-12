import { Stack, styled, Typography } from "@mui/material";

export const ChatContainer = styled(Stack)(({ theme }) => ({
  position: "absolute",
  zIndex: 100,
  right: 0,
  bottom: "-1.5rem",
  minWidth: "14.5rem",
  // border: `0.15rem solid ${theme.main}`,
  backgroundColor: theme.whitePrimary,
  borderBottom: "none",
  borderRadius: "1rem 1rem 0 0",
  overflow: "hidden",
}));

export const ChatHeader = styled(Stack)(({ theme }) => ({
  width: "100%",
  padding: "0.6rem",
  backgroundColor: theme.main,
  fontSize: "0.8rem",
  color: theme.whitePrimary,
  fontWeight: 400,
  justifyContent: "space-between",
  "& span": {
    diplay: "flex",
    margin: "auto",
  },
}));
ChatHeader.defaultProps = {
  direction: "row",
};

export const IconWrapper = styled(Stack)({
  "&:hover": {
    cursor: "pointer",
  },
});
export const IconSection = styled(Stack)({
  alignItems: "center",
  "& span": {
    marginRight: "0.5rem",
  },
});
IconSection.defaultProps = {
  direction: "row",
};

export const ChatSection = styled(Stack)(({ open, theme }) => ({
  padding: "0 0.25rem",
  fontSize: "0.8rem",
  fontWeight: 600,
  display: open ? "block" : "none",
  borderLeft: `0.1rem solid ${theme.main}`,
  borderRight: `0.1rem solid ${theme.main}`,

  "& .MuiBox-root": {
    height: "18.5rem",
    paddingRight: "0.4rem",
    overflowY: "scroll",
  },
}));

export const ChatItem = styled(Stack)(({ theme }) => ({
  alignItems: "center",
  "& .MuiAvatar-root": {
    width: "2rem",
    height: "2rem",
    marginRight: "0.5rem",
  },
  "& li": {
    padding: "0.3rem 0",
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
