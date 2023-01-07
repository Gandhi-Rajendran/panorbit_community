import { Avatar, Box, Grid, Stack, styled } from "@mui/material";

export const ProfileContainer = styled(Stack)(({ theme }) => ({
  flexGrow: 1,
  gap: "1rem",
  fontSize: "clamp(1.1rem,1vw,1.8rem)",
  // backgroundColor: "darkblue",
  color: theme.primary,
  wordBreak: "break-word",
  fontWeight: "700",
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

export const Details = styled(Stack)(({ theme }) => ({
  width: "35%",
}));

export const BioWrapper = styled(Stack)({
  textAlign: "center",
  justifyContent: "space-evenly",
  flexGrow: 2.5,

  "& img": {
    width: "55%",
    borderRadius: "50%",
  },
});

export const CompanyWrapper = styled(Stack)({
  textAlign: "center",
  flexGrow: 1,
  justifyContent: "space-evenly",
});

export const AddressWrapper = styled(Stack)({
  backgroundColor: "coral",
  flexGrow: 1,
  gap: 5,
  padding: "2rem",
  "& .MuiGrid-root": {
    // marginLeft: "2rem",
    minWidth: "15%",
  },
});

export const Section = styled(Box)({
  backgroundColor: "gray",
  padding: "0 2rem",
});
export const Map = styled(Avatar)({
  height: "20%",
  width: "100%",
});

export const Location = styled(Grid)(({ theme }) => ({
  color: "red",
  direction: "row",
  justifyContent: "end",
}));
Location.defaultProps = {
  spacing: 2,
};
