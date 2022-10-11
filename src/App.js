import Counter from "./components/Counter";
import TodoApp from "./todos/TodoApp"
import { RootStoreProvider } from './store'


function App() {
  return (
    <RootStoreProvider>
      <div className="App">
        <Counter/>
        <TodoApp/>
      </div>
    </RootStoreProvider>
  );
}

export default App;
