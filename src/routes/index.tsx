import {createBrowserRouter} from "react-router-dom";
import App from "../App.tsx";
import MainPage from "../pages/MainPage/Main.page.tsx";


export const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <MainPage />
            }
        ]
    }
])