import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/login";
import { GlobalStyles, ThemeProvider } from "@mui/material";
import { theme } from "./utils/theme";
import Dashboard from "./pages/Dashboard";
// import Profile from "./pages/profile";
// import Gallery from "./pages/gallery";
// import Posts from "./pages/posts";
// import Todo from "./pages/todo";

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
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<LandingPage />} />
          <Route path="/dashboard/:userId/" element={<Dashboard />} />
          {/* <Route path="/user/:userId/profile" element={<Profile />} />
            <Route path="/user/:userId/gallery" element={<Gallery />} />
            <Route path="/user/:userId/posts" element={<Posts />} />
            <Route path="/user/:userId/todo" element={<Todo />} />
          </Route> */}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
