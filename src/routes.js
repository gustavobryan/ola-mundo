import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./componentes/Menu";
import PaginaPadrao from "./componentes/PaginaPadrao";
import ScrollToTop from "./componentes/ScrollToTop";
import Inicio from "./paginas/Inicio";
import Post from "./paginas/Post";
import SobreMim from "./paginas/SobreMim";
import Rodape from "componentes/Rodape";


function AppRoutes() {
  return (
    <BrowserRouter>
    <ScrollToTop/>
      <Menu />

      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          <Route path="sobremim" element={<SobreMim />} />
        </Route>

        <Route path="posts/:id/*" element={<Post />} />
        <Route path="*" element={<div>Página não encontrada</div>} />
      </Routes>

      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
