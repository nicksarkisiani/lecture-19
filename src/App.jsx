import { Outlet, useNavigate } from "react-router"

function App() {

  const navigate = useNavigate();

  return (
    <>
      <header>
       <button onClick={() => navigate("/")}>Home</button>
       <button onClick={() => navigate("/contact")}>Contact</button>

      </header>

      <Outlet />

      <footer>footer</footer>
    </>
  )
}

export default App
