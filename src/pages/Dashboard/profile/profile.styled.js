import { Divider, Stack, styled } from "@mui/material";

export const ProfileContainer = styled(Stack)({
  flexGrow: 1,
  gap: "1rem",
  // backgroundColor: "darkgray",
});

export const Details = styled(Stack)(({ theme }) => ({
  backgroundColor: "red",
  width: "45%",
  flexDirection: "column",
  alignItems: "center",
}));

export const Bio = styled(Stack)(({ theme }) => ({
  backgroundColor: "red",
  width: "45%",
}));

export const Company = styled(Stack)(({ theme }) => ({
  backgroundColor: "red",
  width: "45%",
}));

export const Address = styled(Stack)(({ theme }) => ({
  backgroundColor: "blue",
  width: "55%",
}));

export const Seperator = styled(Divider)({
  // borderRightWidth: "0.1rem",
});
