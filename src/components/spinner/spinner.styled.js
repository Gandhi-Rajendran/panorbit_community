import { styled } from "@mui/material";
import { PulseLoader } from "react-spinners";
import { theme } from "../../utils/theme";

export const Loader = styled(PulseLoader)({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
});
Loader.defaultProps = {
  color: theme.loader,
  size: 10,
  margin: 3,
  speed: 0.5,
};
