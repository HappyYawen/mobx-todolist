
import { observer } from 'mobx-react-lite'
import { useRootStore } from '../store'

function Counter () {
  const { counterStore } = useRootStore()
  const { count, increment, decrement } = counterStore
  return <>
    <button onClick={() => increment()}>increment</button>
    <h3>{count}</h3>
    <button onClick={() => decrement()}>decrement</button>
  </>
}
export default observer(Counter)