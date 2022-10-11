import { action, makeObservable, observable } from "mobx"

export default class CounterStore {
  constructor() {
    this.count = 0
    makeObservable(this, {
      count: observable,
      // 强制绑定this,使action函数内部的this始终指向当前类的实例对象
      increment: action.bound,
      decrement: action.bound
    })
  }
  increment() {
    this.count+=1
  }
  decrement() {
    this.count-=1
  }
}