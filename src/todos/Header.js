import React, { useState }  from 'react'
import { useRootStore } from "../store"

function Header() {

  const { todoStore } = useRootStore()
  const [title, setTitle] = useState('')
  const { addTodo } = todoStore
  return <header>
    <h1>todos</h1>
    <input
      placeholder="what needs to be done?"
      autoFocus
      value={title}
      onChange={e => setTitle(e.target.value)}
      onKeyUp={e => {
        if(e.key !== 'Enter') return
        addTodo(title)
        setTitle('')
      }}
    />
  </header>
}

export default Header