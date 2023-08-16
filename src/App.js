import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
// import Navbar from "./components/Navbar";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import UserList from "./components/UserList";
import UserDetail from "./components/UserDetail";
import Filter from "./pages/Filter";

function App() {
  return (
    <div className="App">
      {/* <Home />
      <About /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<h2>Welcome to Website</h2>} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/filter" element={<Filter />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/users/:name" element={<UserDetail />} />
        <Route path="/*" element={<h2>404 Page Not Found</h2>}></Route>
      </Routes>
    </div>
  );
}

export default App;
