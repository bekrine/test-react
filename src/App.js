import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./components/pages/Login";
import Home from "./components/pages/Home";
import Posts from "./components/pages/Posts";
import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const u = localStorage.getItem("user");
    u && JSON.parse(u) ? setUser(true) : setUser(false);
  }, []);
  //login and stor fields
  const login = (data) => {
    localStorage.setItem("user", JSON.stringify(data));
    setUser(true);
  };
  //logout user
  const logout = () => {
    localStorage.clear();
    setUser(false);
  };

  return (
    <Router>
      <Navbar user={user} logout={logout} />
      <Routes>
        <Route path="/" element={<Home />} />
        {user && <Route path="/posts" element={<Posts />} />}
        {!user && <Route path="/login" element={<Login login={login} />} />}
        <Route
          path="*"
          element={<Navigate to={user ? "/posts" : "/login"} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
