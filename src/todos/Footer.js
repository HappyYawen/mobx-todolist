import { observer } from "mobx-react-lite";
import { useRootStore } from "../store";
import UnCompletedTodoCount from "./UnCompletedTodoCount";

function Footer() {
  const { todoStore } = useRootStore()
  const { filterCondition, changeFilterCondition, clearCompletedTodos } = todoStore
  return (
    <footer className="footer">
      <UnCompletedTodoCount/>
      <ul className="filters">
        {
          ['All','Active', 'Completed'].map(item => (
            <li key={item}>
              <button 
                className={ filterCondition === item ? 'selected' : ''}
                onClick={() => changeFilterCondition(item)}
              >{item}</button>
            </li>
          ))
        }
      </ul>
      <button className="clear-completed" onClick={clearCompletedTodos}>Clear completed</button>
    </footer>
  )
}
export default observer(Footer)