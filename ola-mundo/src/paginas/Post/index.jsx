import './Post.css'
import styles from './Post.module.css'
import ReactMarkdown from 'react-markdown'
import { Route, Routes, useParams } from 'react-router-dom'
import PostModelo from '~/components/PostModelo'
import posts from '~/json/posts.json'
import NaoEncontrada from '~/paginas/NaoEncontrada'
import PaginaPadrao from '~/components/PaginaPadrao'
import PostCard from '~/components/PostCard'

export default function Post() {
  const parametros = useParams()
  const post = posts.find(post => post.tituloSeo === parametros.tituloSeo)
  if (!post) {
    return <NaoEncontrada />
  }

  const postsRecomendados = posts
    .filter(post => post.tituloSeo !== parametros.tituloSeo)
    .sort((a, b) => b.id - a.id)
    .slice(0, 4)
  return (
    <Routes>
      <Route path='*' element={<PaginaPadrao />}>
        <Route
          index
          element={
            <PostModelo
              fotoCapa={`/assets/posts/${post.id}/capa.png`}
              titulo={post.titulo}
            >
              <div className='post-markdown-container'>
                <ReactMarkdown>{post.texto}</ReactMarkdown>
              </div>
              <h2 className={styles.tituloOutrosPosts}>
                Outros posts que você pode gostar:
              </h2>
              <ul className={styles.postsRecomendados}>
                {postsRecomendados.map(post => (
                  <li key={post.id}>
                    <PostCard post={post} />
                  </li>
                ))}
              </ul>
            </PostModelo>
          }
        />
      </Route>
    </Routes>
  )
}
