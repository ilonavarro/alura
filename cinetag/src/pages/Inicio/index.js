import Banner from 'components/Banner'
import Card from 'components/Card'
import Titulo from 'components/Titulo'
import styles from './Inicio.module.css'
import videos from 'json/db.json'

function Inicio() {
  return (
    <>
      <Banner imagem='home' />
      <Titulo>
        <h1>Um lugar para guardar seus vídeos e filmes!</h1>
      </Titulo>
      <section className={styles.container}>
        {videos.map(video => (
          <Card {...video} key={video.id} />
        ))}
      </section>
    </>
  )
}

export default Inicio
