import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import { API } from "./API";

function App() {
  const [paintings, setPaintings] = useState([]);
  const [user, setUser] = useState({ id: 1, username: "Jazz" });

  async function fetchPaintings() {
    try {
      const res = await fetch(`${API}`);
      const data = await res.json();
      setPaintings(data.records);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchPaintings();
  }, []);

  return (
    <>
      <Navbar user={user} setUser={setUser} />
      <Outlet context={{ paintings, user, setUser }} />
    </>
  );
}

export default App;
