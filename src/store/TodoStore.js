import { action, makeObservable, observable } from "mobx"
import Todo from './Todo.js'

export default class TodoStore {
  constructor() {
    this.todos = []
    makeObservable(this, {
      todos: observable,
      addTodo: action.bound
    })
  }
  addTodo(title) {
    console.log("🚀 ~ file: TodoStore.js ~ line 13 ~ TodoStore ~ title", title)
    this.todos.push(new Todo({
      title,
      id: this.createId()
    }))
    console.log(this.todos)
  }
  createId() {
    if(!this.todos.length) return 1
    return this.todos.reduce((id, todo) => {
      return id > todo.id ? id : todo.id
    }, 0) + 1
  }
}