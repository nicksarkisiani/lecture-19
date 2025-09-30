import { createBrowserRouter } from "react-router";
import App from "../App";
import MainPage from "../pages/main/MainPage";



const router = createBrowserRouter([
    {

        path: "/",
        Component: App,
        errorElement: <div>error</div>,
        children: [
            {
                path: "/",
                element: <MainPage />,
                // children: [

                //     {
                //         path: "/apple",
                //         children: [
                //             {
                //                 path: "/iphone-6"
                //             },
                //             {
                //                 path: "/iphone-8"
                //             }
                //         ]
                //     },
                //     {
                //         path: "/samsung",
                //     },

                // ]

            }, {
                path: "/contact",
                element: <div>HEllo contact</div>
            }

        ]


    },
])


export default router;