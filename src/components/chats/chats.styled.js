import { Stack, styled } from "@mui/material";

export const ChatContainer = styled(Stack)(({ theme }) => ({
  position: "absolute",
  zIndex: 100,
  right: 0,
  bottom: 0,
  minWidth: "14rem",
  border: `0.1rem solid ${theme.main}`,
  borderBottom: "none",
  borderRadius: "1rem 1rem 0 0",
  overflow: "hidden",
}));

export const ChatHeader = styled(Stack)(({ theme }) => ({
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
  "&:hover": {
    cursor: "pointer",
  },
}));
ChatHeader.defaultProps = {
  direction: "row",
};

export const IconSection = styled(Stack)({
  alignItems: "center",
  "& span": {
    marginRight: "0.5rem",
  },
});
IconSection.defaultProps = {
  direction: "row",
};

export const ChatSection = styled(Stack)(({ theme, open }) => ({
  height: "18rem",
  padding: "0 0.25rem 0 0.4rem",
  fontSize: "0.8rem",
  fontWeight: 600,
  overflowY: "scroll",
  display: open ? "block" : "none",
  backgroundColor: theme.whitePrimary,
}));

export const ChatItem = styled(Stack)(({ theme, activeuser }) => ({
  alignItems: "center",

  "& .MuiAvatar-root": {
    width: "2rem",
    height: "2rem",
    marginRight: "0.5rem",
  },

  "& li": {
    padding: "0.25rem 0",
    paddingBottom: 0,
    // backgroundColor: activeuser ? `${theme.online}` : `${theme.offline}`,
  },

  "& p": {
    borderRadius: "50%",
    width: "0.4rem",
    height: "0.4rem",
    backgroundColor: activeuser ? `${theme.online}` : `${theme.offline}`,
  },

  "&:hover": {
    cursor: "pointer",
    backgroundColor: theme.hover,
  },
}));
ChatItem.defaultProps = {
  direction: "row",
};
