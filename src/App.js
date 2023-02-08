import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import Social from "./components/pages/Social";
import Perfil from "./components/pages/Perfil";
import Amigos from "./components/pages/Amigos";
import VerPerfil from "./components/pages/VerPerfil";

import "./styles/bootstrap.min.css";
import "./styles/main.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/social/:userId" element={<Social />} />
        <Route path="/amigos/:userId" element={<Amigos />} />
        <Route path="/perfil/:userId" element={<Perfil />} />
        <Route path="/verperfil/:userId" element={<VerPerfil />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
