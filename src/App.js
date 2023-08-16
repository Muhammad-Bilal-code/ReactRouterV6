import logo from "./logo.svg";
import "./App.css";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Redirect from "./pages/Redirect";
import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import UserList from "./components/UserList";
import UserDetail from "./components/UserDetail";
import Filter from "./pages/Filter";
import LandingPage from "./pages/LandingPage";
import Company from "./pages/Company";
import Other from "./pages/Other";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/filter" element={<Filter />} />
        <Route path="/redirect2" element={<Redirect />} />
        <Route path="/redirect" element={<Navigate to="/redirect2" />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/users/:name" element={<UserDetail />} />
        <Route path="/contact/" element={<Contact />}>
          <Route path="company" element={<Company />} />
          <Route path="other" element={<Other />} />
        </Route>
        <Route path="/*" element={<h2>404 Page Not Found</h2>}></Route>
      </Routes>
    </div>
  );
}

export default App;
