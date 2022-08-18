import React, { useState } from 'react'
import Chronometer from '../components/Chronometer'
import Form from '../components/Form'
import List from '../components/List'
import { ITask } from '../types/tasks'

import style from './App.module.scss'

function App() {
  const [tasks, setTasks] = useState<ITask[]>([])
  const [selected, setSelected] = useState<ITask>()

  const selectTask = (selectedTask: ITask) => {
    setSelected(selectedTask)
    setTasks(prevTasks =>
      prevTasks.map(task => ({
        ...task,
        selected: task.id === selectedTask.id ? true : false
      }))
    )
  }

  const finishTask = () => {
    if (selected) {
      setSelected(undefined)
      setTasks(prevTasks =>
        prevTasks.map(task => {
          if (task.id === selected.id) {
            return { ...task, selected: false, completed: true }
          }
          return task
        })
      )
    }
  }

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks} />
      <List tasks={tasks} selectTask={selectTask} />
      <Chronometer selected={selected} finishTask={finishTask} />
    </div>
  )
}

export default App
