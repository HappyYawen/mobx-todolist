import React from 'react'
import { observer } from 'mobx-react-lite'
import { useRootStore } from "../store"
import Todo from './Todo'

function Main() {
  const { todoStore } = useRootStore()
  const { filterTodos } = todoStore
  return (
    <section className='main'>
      <ul className="todo-list">
        {
          filterTodos.map(todo => <Todo key={todo.id} todo={todo}/>)
        }
      </ul>
    </section>
  )
}
export default observer(Main)