import {createRoot} from 'react-dom/client'
import "./assets/styles/reset.css"
import "./assets/styles/fonts.css"
import {RouterProvider} from "react-router-dom";
import {routes} from "./routes";
import './locale/i18n.ts';
import {Provider} from "react-redux";
import {store} from "./store";

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <RouterProvider router={routes}></RouterProvider>
    </Provider>
)
