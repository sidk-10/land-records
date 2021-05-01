import Home from "./components/Home";
import Land from "./components/Land";
import Login from "./components/Login";

export const routes = [
    {
        component: Login,
        path: "/",
    },
    {
        component: Login,
        path: "/login",
    },
    {
        component: Home,
        path: "/home",
    },
    {
        component: Land,
        path: "/land/:landId",
    },
];
