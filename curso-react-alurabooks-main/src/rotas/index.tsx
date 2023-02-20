import { Route, Routes } from 'react-router-dom'
import AreaLogada from '../componentes/AreaLogada'
import Home from '../paginas/Home'
import PaginaBase from '../paginas/PaginaBase'

const Rotas = () => {
  return (
    <Routes>
      <Route path='/' element={<PaginaBase />}>
        <Route path='/' element={<Home />} />
        <Route path='/minha-conta' element={<AreaLogada />}>
          {/* <Route path='pedidos' element={<Pedidos />}> */}
        </Route>
      </Route>
    </Routes>
  )
}

export default Rotas
