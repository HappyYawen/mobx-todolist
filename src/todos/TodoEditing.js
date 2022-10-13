import { observer } from "mobx-react-lite"

function TodoEditing({ todo }) {
  const { title, modifyTodoIsEditing } = todo
  return (
    <label onDoubleClick={modifyTodoIsEditing}>{title}</label>
  )
}

export default observer(TodoEditing)