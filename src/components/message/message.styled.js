import { Stack, styled, TextField } from "@mui/material";

export const MessageContainer = styled(Stack)(({ theme }) => ({
  position: "absolute",
  zIndex: 100,
  right: "16rem",
  bottom: "-1.5rem",
  width: "16.5rem",
  borderBottom: "none",
  borderRadius: "1rem 1rem 0 0",
  overflow: "hidden",
  backgroundColor: theme.whitePrimary,
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
  "& svg": {
    "&:hover": {
      cursor: "pointer",
    },
  },
}));
MessageHeader.defaultProps = {
  direction: "row",
  spacing: 1,
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

export const MessageSection = styled(Stack)(({ isminimize, theme }) => ({
  borderLeft: `0.15rem solid ${theme.main}`,
  borderRight: `0.15rem solid ${theme.main}`,

  display: isminimize ? "flex" : "none",
  height: "100%",
  "& .MuiBox-root": {},
}));

export const Messages = styled(Stack)(({ theme }) => ({
  overflowY: "scroll",
  height: "12rem",
  fontWeight: 600,
  paddingLeft: "0.5rem",
  paddingRight: "0.2rem",
  textAlign: "right",
  "& p": {
    fontSize: "0.7rem",
    padding: "0.3rem",
    borderRadius: "0.3rem",
    backgroundColor: theme.message,
  },
}));
Messages.defaultProps = {
  direction: "column",
  spacing: 0.6,
  alignItems: "end",
};

export const Input = styled(TextField)(({ theme }) => ({
  "& input": {
    fontSize: "0.8rem",
    padding: "0.5rem",
  },
  "& svg": {
    fontSize: "1rem",
    color: theme.main,
  },
}));
Input.defaultProps = {
  size: "small",
};
