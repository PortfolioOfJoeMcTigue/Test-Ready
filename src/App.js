import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TestList } from "./pages/TestList";
// import { CreateAccount } from "./pages/CreateAccount";
// import { SignIn } from "./pages/SignIn";
import { Home } from "./pages/Home";
import { Navbar } from "./Navbar";
import { SuggestATest } from "./pages/SuggestATest";
import { HallOfFame } from "./pages/HallOfFame";

//import './App.css';

function App() {

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/TestList" element={<TestList />} />
          {/* <Route path="/SignIn" element={<SignIn />} />
          <Route path="/CreateAccount" element={<CreateAccount />} /> */}
          <Route path="/SuggestATest" element={<SuggestATest />} />
          <Route path="/HallOfFame" element={<HallOfFame />} />
          <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
