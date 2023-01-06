import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/login";
import Home from "./pages/home";
import { GlobalStyles, ThemeProvider } from "@mui/material";
import { theme } from "./utils/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles
        styles={(theme) => ({
          "*": {
            "&::-webkit-scrollbar": {
              width: "0.35rem", // for vertical scroll
              height: "0.35rem", // for horizontal scroll
              backgroundColor: "transparent",
              WebkitAppearance: "none",
            },

            "&::-webkit-scrollbar-thumb": {
              borderRadius: 8,
              backgroundColor: theme.scrollbarThumb,
              // height: "10px",
            },

            "&::-webkit-scrollbar-track-piece:start": {
              backgroundColor: "transparent",
              marginTop: "1.25rem",
            },

            "&::-webkit-scrollbar-track-piece:end": {
              backgroundColor: "transparent",
              marginBottom: "1.2rem",
            },
          },
        })}
      />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<LandingPage />} />
          <Route path="/:{userId}" element={<Home />} />
          {/* <Route path="*" element={<Home />} /> */}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
