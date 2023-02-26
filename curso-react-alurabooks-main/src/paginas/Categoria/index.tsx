import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import TituloPrincipal from '../../componentes/TituloPrincipal'
import http from '../../http'
import { ICategoria } from '../../interfaces/ICategoria'

const Categoria = () => {
  const [categoria, setCategoria] = useState<ICategoria>()

  const params = useParams()

  useEffect(() => {
    http
      .get<ICategoria[]>('categorias', {
        params: {
          slug: params.slug
        }
      })
      .then(resposta => setCategoria(resposta.data[0]))
  }, [params.slug])

  return (
    <section>
      <TituloPrincipal texto={categoria?.nome ?? ''} />
    </section>
  )
}

export default Categoria
