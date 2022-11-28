import "./App.css";

import TodoListContainer from "./containers/TodoListContainer";
import TodoFormContainer from "./containers/TodoFormContainer";
import UserListContainer from "./containers/UserListContainer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodoListContainer />
        <TodoFormContainer />
        <UserListContainer />
      </header>
    </div>
  );
}

export default App;
