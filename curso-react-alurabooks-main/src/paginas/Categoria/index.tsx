import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../../componentes/Loader'
import TituloPrincipal from '../../componentes/TituloPrincipal'
import http from '../../http'
import { ICategoria } from '../../interfaces/ICategoria'

const Categoria = () => {
  const [categoria, setCategoria] = useState<ICategoria>()
  const [estaCarregando, setEstaCarregando] = useState(true)

  const params = useParams()

  useEffect(() => {
    setEstaCarregando(true)
    http
      .get<ICategoria[]>('categorias', {
        params: {
          slug: params.slug
        }
      })
      .then(resposta => {
        setCategoria(resposta.data[0])
        setEstaCarregando(false)
      })
      .catch(erro => {
        alert(`Ocorreu um erro: ${erro}`)
        setEstaCarregando(false)
      })
  }, [params.slug])

  if (estaCarregando) {
    return <Loader />
  }

  return (
    <section>
      <TituloPrincipal texto={categoria?.nome ?? ''} />
    </section>
  )
}

export default Categoria
