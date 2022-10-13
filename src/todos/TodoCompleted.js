import { observer } from "mobx-react-lite"

function TodoCompleted({ todo }) {
  const { isCompleted, modifyTodoIsCompleted } = todo
  return (
    <input type="checkbox" className="toggle" checked={isCompleted} onChange={modifyTodoIsCompleted}/>
  )
}
export default observer(TodoCompleted)