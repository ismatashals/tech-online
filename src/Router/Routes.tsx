import { Route, Routes as AppRoutes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import RouterElement from "./RouterElement";

interface route {
    path: string
    component: JSX.Element | JSX.Element[] | string | string[]
    layout: "main" | "default" | "no-layout"
}


const r: route[] = [
    {path: "/", component: <HomePage />, layout: "main"}
]

const Routes = () => {
    return (
        <AppRoutes>
            {r.map(route => (
                <Route
                    element={<RouterElement component={route.component} layout={route.layout} />}
                    path={route.path}
                    key={route.path}
                />
            ))}
        </AppRoutes>
    );
}
 
export default Routes;