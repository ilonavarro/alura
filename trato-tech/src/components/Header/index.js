import { memo } from 'react'
import styles from './Header.module.scss'
import TituloComImagem from './TituloComImagem'
import TituloSemImagem from './TituloSemImagem'

function Header({ titulo, descricao, className = '', imagem, children }) {
  return (
    <header className={styles.header}>
      {titulo && !imagem && (
        <TituloSemImagem titulo={titulo} descricao={descricao}>
          {children}
        </TituloSemImagem>
      )}
      {titulo && imagem && (
        <TituloComImagem
          titulo={titulo}
          descricao={descricao}
          imagem={imagem}
          className={className}
        >
          {children}
        </TituloComImagem>
      )}
    </header>
  )
}

export default memo(Header)
