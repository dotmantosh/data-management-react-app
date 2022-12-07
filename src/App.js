import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Add from "./pages/Add";
import Edit from "./pages/Edit";
function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" exact element={<Index />}></Route>
          <Route path="/add" exact element={<Add />}></Route>
          <Route path="/edit/:id" exact element={<Edit />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
