import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import { API } from "./API";

function App() {
  const [paintings, setPaintings] = useState([]);

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
      <Navbar />
      <Outlet context={{ paintings }} />
    </>
  );
}

export default App;
