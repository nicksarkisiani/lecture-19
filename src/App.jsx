import { Outlet, useNavigate } from "react-router"
import Cookies from "js-cookie";

function App() {

  const navigate = useNavigate();


  const bla = {
    name: "123"
  }



  // console.log(localStorage)

  // localStorage.setItem("secureKey", JSON.stringify(bla))

  // console.log(JSON.parse(localStorage.getItem("secureKey")))

  // document.cookie = "";

  Cookies.set("name", "page")

  console.log(Cookies.get("name"))

  Cookies.set("random", "page123123")

  console.log(Cookies.get("name"), Cookies.get("random"))

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
