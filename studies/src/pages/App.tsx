import React, { useState } from 'react'
import Chronometer from '../components/Chronometer'
import Form from '../components/Form'
import List from '../components/List'
import { ITask } from '../types/tasks'

import style from './App.module.scss'

function App() {
  const [tasks, setTasks] = useState<ITask[]>([])
  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks} />
      <List tasks={tasks} />
      <Chronometer />
    </div>
  )
}

export default App
