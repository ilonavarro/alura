import { Link } from 'react-router-dom'
import BotaoPrincipal from '../BotaoPrincipal'
import styles from './PostCard.module.css'

export default function PostCard({ post }) {
  return (
    <Link to={`/posts/${post.tituloSeo}`}>
      <div className={styles.post}>
        <img
          className={styles.capa}
          src={`/assets/posts/${post.id}/capa.png`}
          alt={`Imagem de capa do post ${post.titulo}`}
        />
        <h2 className={styles.titulo}>{post.titulo}</h2>
        <BotaoPrincipal>Ler Mais...</BotaoPrincipal>
      </div>
    </Link>
  )
}
