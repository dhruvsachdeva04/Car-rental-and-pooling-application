import "./style/App.css";
import Addpage from "./pages/Addpage.jsx";
import { Routes, Route } from "react-router-dom";
import Showbooks from "./Components/Showbooks.jsx";
import Deletepage from "./pages/Deletepage.jsx";
import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";
import Firstpage from "./pages/Firstpage.jsx";
import Home from "./pages/Home.jsx";
import Addpagetwo from "./pages/Addpagetwo.jsx";
import Middle from "./pages/Middle.jsx";
import Deletepoolpage from "./pages/Deletepoolpage.jsx";
import View from "./Components/View.jsx";
import Feedback from "./pages/Feedback.jsx";
import Searchpage from "./pages/Searchpage.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Firstpage />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/add" element={<Addpage />} />
        <Route path="/Addpagetwo" element={<Addpagetwo />} />
        <Route path="/view" element={<View />} />
        <Route path="/see" element={<Showbooks />} />
        <Route path="/Middle" element={<Middle />} />
        <Route path="/Feedback" element={<Feedback />} />
        <Route path="/delete" element={<Deletepage />} />
        <Route path="/deletepool" element={<Deletepoolpage />} />
        <Route path="/search" element={<Searchpage />} />
      </Routes>
    </>
  );
}
export default App;
