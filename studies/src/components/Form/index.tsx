import React from 'react'
import { v4 as uuidv4 } from 'uuid'

import { ITask } from '../../types/tasks'
import Button from '../Button'

import style from './Form.module.scss'

class Form extends React.Component<{
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>
}> {
  state = {
    task: '',
    time: '00:00'
  }

  addTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    this.props.setTasks(oldTasks => [
      ...oldTasks,
      { ...this.state, selected: false, completed: false, id: uuidv4() }
    ])
    this.setState({ task: '', time: '00:00' })
  }

  render() {
    return (
      <form className={style.novaTarefa} onSubmit={this.addTask.bind(this)}>
        <div className={style.inputContainer}>
          <label htmlFor='task'>Adicione um novo estudo</label>
          <input
            type='text'
            name='task'
            id='task'
            value={this.state.task}
            onChange={event =>
              this.setState({ ...this.state, task: event.target.value })
            }
            placeholder='O que você quer estudar?'
            required
          />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor='time'>Tempo</label>
          <input
            type='time'
            step='1'
            name='time'
            value={this.state.time}
            onChange={event =>
              this.setState({ ...this.state, time: event.target.value })
            }
            id='time'
            min='00:00:00'
            max='01:30:00'
            required
          />
        </div>
        <Button type='submit'>Adicionar</Button>
      </form>
    )
  }
}

export default Form
