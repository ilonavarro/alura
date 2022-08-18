import style from './Clock.module.scss'

interface Props {
  time: number | undefined
}

const Clock = ({ time = 0 }: Props) => {
  const minuts = Math.floor(time / 60)
  const seconds = time % 60

  const [minutDozens, minutUnits] = String(minuts).padStart(2, '0')
  const [secondDozens, secondUnits] = String(seconds).padStart(2, '0')
  return (
    <>
      <span className={style.clockNumber}>{minutDozens}</span>
      <span className={style.clockNumber}>{minutUnits}</span>
      <span className={style.clockDivision}>:</span>
      <span className={style.clockNumber}>{secondDozens}</span>
      <span className={style.clockNumber}>{secondUnits}</span>
    </>
  )
}

export default Clock
