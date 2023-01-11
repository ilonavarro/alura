import Header from 'components/Header'
import styles from './Categoria.module.scss'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Item from 'components/Item'

export default function Categoria() {
  const { nomeCategoria } = useParams()
  const { categoria, itens } = useSelector(state => ({
    categoria: state.categorias.find(categoria => categoria.id === nomeCategoria),
    itens: state.itens.filter(item => item.categoria === nomeCategoria)
  }))
  return (
    <div>
      <Header
        titulo={categoria.nome}
        descricao={categoria.descricao}
        imagem={categoria.header}
      />
      <div className={styles.itens}>
        {itens?.map(item => (
          <Item key={item.id} {...item} />
        ))}
      </div>
    </div>
  )
}
