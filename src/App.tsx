import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import Merch from "./pages/merch";
import Listen from "./pages/listen";
import { Box, ButtonBase, Typography } from "@mui/material";
import Header from "./components/header";
import NavLayout from "./layouts/nav_layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/merch" element={<Merch />} />
            <Route path="/listen" element={<Listen />} />
          </Routes>
        </NavLayout>
      </BrowserRouter>
    </>
  );
}

export default App;
