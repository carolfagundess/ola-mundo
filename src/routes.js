import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./paginas/Inicio";
import Menu from "./componentes/Menu";
import SobreMim from "./paginas/SobreMim";
import Rodape from "componentes/Rodape";
import PaginaPadrao from "componentes/PaginaPadrao";
import Post from "paginas/Post";
import NaoEncontrada from "paginas/NaoEncontrada";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />

      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route path="/" element={<Inicio />} />
          <Route path="/sobremim" element={<SobreMim />} />
          <Route path="posts/:id" element={<Post />} />
        </Route>

        <Route path="*" element={<NaoEncontrada />} />
      </Routes>
      <Rodape></Rodape>
    </BrowserRouter>
  );
}

export default AppRoutes;
