import { useEffect, useState } from 'react'

import Button from '../Button'
import Clock from './Clock'

import style from './Chronometer.module.scss'
import { ITask } from '../../types/tasks'
import timeToSeconds from '../../common/utils/time'

interface Props {
  selected: ITask | undefined
  finishTask: () => void
}

const Chronometer = ({ selected, finishTask }: Props) => {
  const [time, setTime] = useState<number>()

  useEffect(() => {
    if (selected?.time) {
      setTime(timeToSeconds(selected.time))
    }
  }, [selected])

  const regressive = (counter: number = 0) => {
    setTimeout(() => {
      if (counter > 0) {
        setTime(counter - 1)
        return regressive(counter - 1)
      }
      finishTask()
    }, 1000)
  }
  return (
    <div className={style.chronometer}>
      <p className={style.title}>Escolha um card e inicie o cronômetro</p>
      <div className={style.clockWrapper}>
        <Clock time={time} />
      </div>
      <Button onClick={() => regressive(time)}>Começar!</Button>
    </div>
  )
}

export default Chronometer
