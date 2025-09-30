import { createBrowserRouter } from "react-router";
import App from "../App";
import MainPage from "../pages/main/MainPage";



const router = createBrowserRouter([
    {

        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <MainPage />,

            }, {
                path: "/contact",
                element: <div>HEllo contact</div>
            }

        ]


    },
])


export default router;