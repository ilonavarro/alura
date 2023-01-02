import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Menu from './components/Menu'
import PaginaPadrao from './components/PaginaPadrao'
import Rodape from './components/Rodape'
import ScrollToTop from './components/ScrollToTop'
import Inicio from './paginas/Inicio'
import NaoEncontrada from './paginas/NaoEncontrada'
import Post from './paginas/Post'
import SobreMim from './paginas/SobreMim'

function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Menu />
      <Routes>
        <Route path='/' element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          <Route path='sobremim' element={<SobreMim />} />
        </Route>
        <Route path='posts/:tituloSeo/*' element={<Post />} />
        <Route path='*' element={<NaoEncontrada />} />
      </Routes>
      <Rodape />
    </BrowserRouter>
  )
}

export default AppRoutes
