import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Merch from "./pages/merch";
import Listen from "./pages/listen";
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
