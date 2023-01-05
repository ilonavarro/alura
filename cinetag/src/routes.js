import Cabecalho from 'components/Cabecalho'
import Container from 'components/Container'
import Footer from 'components/Footer'
import FavoritosProvider from 'contextos/Favoritos'
import Favoritos from 'pages/Favoritos'
import Inicio from 'pages/Inicio'
import Player from 'pages/Player'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function AppRoutes() {
  return (
    <BrowserRouter>
      <Cabecalho />
      <Container>
        <FavoritosProvider>
          <Routes>
            <Route path='/' element={<Inicio />}></Route>
            <Route path='/favoritos' element={<Favoritos />}></Route>
            <Route path='/:id' element={<Player />}></Route>
          </Routes>
        </FavoritosProvider>
      </Container>
      <Footer />
    </BrowserRouter>
  )
}

export default AppRoutes

// "eslintConfig": {
//   "extends": [
//     "react-app",
//     "react-app/jest"
//   ]
// },
