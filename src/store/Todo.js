import { action, makeObservable, observable } from "mobx"

export default class Todo {
  constructor(todo) {
    this.title = todo.title
    this.id = todo.id
    this.isCompleted = todo.isCompleted || false
    this.isEditing = false

    makeObservable(this, {
      title: observable,
      isCompleted: observable,
      isEditing: observable,
      modifyTodoIsCompleted: action.bound,
      modifyTodoIsEditing: action.bound,
      modifyTodoTitle: action.bound,
    })
  }
  modifyTodoIsCompleted() {
    this.isCompleted = !this.isCompleted
  }

  modifyTodoIsEditing() {
    this.isEditing = !this.isEditing
  }
  modifyTodoTitle(title) {
    this.title = title
    this.modifyTodoIsEditing()
  }
}