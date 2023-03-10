import { Stack, styled } from "@mui/material";

export const GalleryContainer = styled(Stack)(({ theme }) => ({
  position: "absolute",
  top: "40%",
  left: "40%",
  alignItems: "center",
  flexGrow: 1,

  "& h1": {
    fontSize: "5rem",
    fontWeight: 800,
    color: theme.disable,
  },
}));
