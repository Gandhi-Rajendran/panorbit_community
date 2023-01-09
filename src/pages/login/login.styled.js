import { Stack, styled } from "@mui/material";
import wave from "./gradient-strip.png";

export const LoginContainer = styled(Stack)({
  width: "100vw",
  height: "100vh",
  background: `url(${wave})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
});
