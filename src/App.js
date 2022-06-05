import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import SignUpPage from "./components/auth/SignUpPage";
import SignInPage from "./components/auth/SignInPage";
import Preloader from "./components/Preloader";
import Sections from "./components/Categories/Sections";
import Popup from "./components/Categories/Popup";
function App() {
  return (
    <Router>
      <div className="App ">
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/signinpage" element={<SignInPage />} />
          <Route path="/signuppage" element={<SignUpPage />} />
          <Route path="/preloader" element={<Preloader />} />
          <Route path="/sections" element={<Sections />} />
          <Route path="/popup" element={<Popup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
