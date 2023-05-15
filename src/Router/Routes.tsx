import { Route, Routes as AppRoutes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import RouterElement from "./RouterElement";

interface route {
    path: string
    component: JSX.Element | JSX.Element[] | string | string[]
    layout: "main" | "default" | "no-layout"
    container: boolean
}


const r: route[] = [
    {path: "/", component: <HomePage />, layout: "main", container: true}
]

const Routes = () => {
    return (
        <AppRoutes>
            {r.map(route => (
                <Route
                    element={<RouterElement component={route.component} layout={route.layout} container={route.container} />}
                    path={route.path}
                    key={route.path}
                />
            ))}
        </AppRoutes>
    );
}
 
export default Routes;