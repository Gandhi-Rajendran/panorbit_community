import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/login";
import { GlobalStyles, ThemeProvider } from "@mui/material";
import { theme } from "./utils/theme";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles
        styles={(theme) => ({
          "*": {
            "&::-webkit-scrollbar": {
              width: "0.3rem", // for vertical scroll
              height: "0.3rem", // for horizontal scroll
              backgroundColor: "transparent",
              WebkitAppearance: "none",
              marginRight: "-8px",
            },

            "&::-webkit-scrollbar-thumb": {
              borderRadius: 8,
              backgroundColor: theme.scrollbarThumb,
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
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<LandingPage />} />
          <Route path="/dashboard/:userId/" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
