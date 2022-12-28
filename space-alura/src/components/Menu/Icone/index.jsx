export default function Icone({ icone, styles }) {
  return (
    <li className={styles.menu__item}>
      <img src={icone.path} alt={icone.alt} />
      <a href='/'>{icone.link}</a>
    </li>
  )
}
