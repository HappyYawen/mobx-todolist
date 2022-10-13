import { useEffect, useRef } from "react"

function Editing({ todo }) {
  const { isEditing, modifyTodoTitle, title } = todo
  const ref = useRef(null)
  useEffect(() => {
    if (isEditing) {
      ref.current.focus = true
    }
  }, [isEditing])
  return (
    <input 
    ref={ref}
    onBlur={() => modifyTodoTitle(ref.current.value)}
    className="edit"
    defaultValue={title}
  />
  )
}
export default Editing