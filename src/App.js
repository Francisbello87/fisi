import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Details from "./components/Details";
import HomePage from "./components/HomePage";
function App() {
  return (
    <Router>
      <div className="App ">
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
