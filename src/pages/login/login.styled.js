import { Stack, styled } from "@mui/material";

export const LoginContainer = styled(Stack)({
  width: "100vw",
  height: "100vh",

  "& svg": {
    position: "absolute",
    zIndex: "-1",
    // top: "10%",
    width: "100vw",
  },
});
// export const Div = styled("div")({
//   width: "80%",
//   height: "50rem",
//   background: "darkblue",
//   position: "absolute",
//   borderRadius: "40% 20% 80% 60%",
//   zIndex: -1,
//   top: "-60%",
//   right: "-20%",
// });
// export const Div1 = styled("div")({
//   width: "50%",
//   height: "50%",
//   background: "darkcyan",
//   position: "absolute",
//   borderRadius: "0% 0% 300% 110%",
//   zIndex: -1,
//   top: "0",
//   left: "0%",
// });
