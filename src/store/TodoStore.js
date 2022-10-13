import { action, computed, flow, makeObservable, observable } from "mobx"
import Todo from './Todo.js'
import axios from 'axios'

export default class TodoStore {
  constructor() {
    this.todos = []
    this.filterCondition = 'All'
    makeObservable(this, {
      todos: observable,
      addTodo: action.bound,
      removeTodo: action.bound,
      loadTodos: flow, // 副作用
      unCompletedTodoCount: computed, // 派生状态
      filterCondition: observable,
      changeFilterCondition: action.bound,
      filterTodos: computed,
      clearCompletedTodos: action.bound,
    })
    this.loadTodos()
  }
  addTodo(title) {
    this.todos.push(new Todo({
      title,
      id: this.createId()
    }))
  }
  *loadTodos() {
    console.log("sss")
    let response = yield axios.get('http://localhost:3001/todos')
    response.data.forEach(todo => {
      this.todos.push(new Todo(todo))
    })
  }
  createId() {
    if(!this.todos.length) return 1
    return this.todos.reduce((id, todo) => {
      return id > todo.id ? id : todo.id
    }, 0) + 1
  }
  removeTodo(id) {
    this.todos = this.todos.filter((todo) => id !== todo.id)
  }
  get unCompletedTodoCount() {
    return this.todos.filter(todo => !todo.isCompleted).length
  }
  changeFilterCondition(condition) {
    this.filterCondition = condition
  }
  get filterTodos() {
    switch(this.filterCondition) {
      case 'Active':
        return this.todos.filter(todo => !todo.isCompleted)
      case 'Completed':
        return this.todos.filter(todo => todo.isCompleted)
      default:
        return this.todos
    }
  }
  clearCompletedTodos() {
    this.todos = this.todos.filter(todo => !todo.isCompleted)
  }
}