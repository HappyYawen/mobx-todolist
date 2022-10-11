import { makeObservable, observable } from "mobx"

export default class Todo {
  constructor(todo) {
    this.titile = todo.title
    this.id = todo.id
    this.isCompleted = todo.isCompleted || false
    this.isEditing = false

    makeObservable(this, {
      title: observable,
      isCompleted: observable,
      isEditing: observable
    })
  }
}