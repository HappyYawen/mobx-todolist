import { observer } from "mobx-react-lite"
import { useRootStore } from "../store"

function UnCompletedTodoCount() {
  const { todoStore } = useRootStore()
  const { unCompletedTodoCount } = todoStore
  return (
    <span className="todo-count">
      <strong>{ unCompletedTodoCount }</strong> item left
    </span>
  )
}

export default observer(UnCompletedTodoCount)