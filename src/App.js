import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Todos from "./pages/Todos";
import Users from "./pages/Users";
import history from "./history";

function App() {
  return (
    <BrowserRouter history={history}>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/todos" exact element={<Todos />} />
        <Route path="/users" exact element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
