import { Box, Grid, Stack, styled } from "@mui/material";

export const ProfileContainer = styled(Stack)(({ theme }) => ({
  flexGrow: 1,
  gap: "1rem",
  fontSize: "clamp(1.1rem,1vw,1.6rem)",
  color: theme.primary,
  wordBreak: "break-word",
  fontWeight: "700",
  "& > hr": {
    margin: "2rem 0",
  },
  position: "relative",
}));

export const Item = styled(Stack)({
  flexDirection: "row",
  gap: "0.5rem",
  textAlign: "left",
});

export const Title = styled(Grid)(({ theme }) => ({
  fontWeight: "550",
  minWidth: "40%",
  color: theme.secondary,
  textAlign: "right",
}));

export const Details = styled(Stack)({
  width: "40%",
  "& hr": {
    margin: "0 5rem",
  },
});

export const BioContainer = styled(Stack)({
  textAlign: "center",
  justifyContent: "space-evenly",
  flexGrow: 2.5,

  "& img": {
    width: "54%",
    borderRadius: "50%",
  },
});

export const CompanyContainer = styled(Stack)(({ theme }) => ({
  textAlign: "center",
  flexGrow: 1,
  justifyContent: "space-evenly",
  "& p": {
    color: theme.secondary,
    fontWeight: "550",
  },
}));

export const AddressContainer = styled(Stack)(({ theme }) => ({
  flexGrow: 1,
  padding: "1rem",
  "& p": {
    color: theme.secondary,
    fontWeight: "550",
  },
  "& .MuiGrid-root": {
    minWidth: "15%",
  },
}));
AddressContainer.defaultProps = {
  spacing: 1,
};

export const Section = styled(Stack)({
  paddingLeft: "3rem",
});
Section.defaultProps = {
  spacing: 1,
};

export const MapContainer = styled(Box)({
  width: "100%",
  borderRadius: "2rem",
  height: "20rem",
  backgroundColor: "#EDEDEE",
  overflow: "hidden",
});

export const Location = styled(Stack)(({ theme }) => ({
  direction: "row",
  justifyContent: "end",

  "& div": {
    color: theme.secondary,
    paddingRight: "0.5rem",
  },
}));
Location.defaultProps = {
  direction: "row",
  spacing: 4,
};
