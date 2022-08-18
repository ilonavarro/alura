import Item from './Item'
import style from './List.module.scss'
import { ITask } from '../../types/tasks'

interface Props {
  tasks: ITask[]
  selectTask: (selectedTask: ITask) => void
}

const List = ({ tasks, selectTask }: Props) => {
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tasks.map(item => (
          <Item selectTask={selectTask} key={item.id} {...item} />
        ))}
      </ul>
    </aside>
  )
}

export default List
