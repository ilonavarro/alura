// import home from '../../assets/icones/home-ativo.png'
// import maisCurtidas from '../../assets/icones/mais-curtidas-inativo.png'
// import maisVistas from '../../assets/icones/mais-vistas-inativo.png'
// import novas from '../../assets/icones/novas-inativo.png'
// import surpreendaMe from '../../assets/icones/surpreenda-me-inativo.png'
import styles from './Menu.module.scss'
import icones from './icones.json'
import Icone from './Icone'

export default function Menu() {
  return (
    <nav className={styles.menu}>
      <ul className={styles.menu__lista}>
        {icones.map(icone => (
          <Icone key={icone.id} icone={icone} styles={styles} />
        ))}
      </ul>
    </nav>
  )
}

/*

<li className={styles.menu__item}>
          <img src={home} alt='' />
          <a href='/'>Início</a>
        </li>
        <li className={styles.menu__item}>
          <img src={maisCurtidas} alt='' />
          <a href='/'>Mais Curtidas</a>
        </li>
        <li className={styles.menu__item}>
          <img src={maisVistas} alt='' />
          <a href='/'>Mais Vistas</a>
        </li>
        <li className={styles.menu__item}>
          <img src={novas} alt='' />
          <a href='/'>Novas</a>
        </li>
        <li className={styles.menu__item}>
          <img src={surpreendaMe} alt='' />
          <a href='/'>Surpreenda-me</a>
        </li>

*/
