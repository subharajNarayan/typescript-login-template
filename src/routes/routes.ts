import { lazy } from 'react';
const Login = lazy(() => import("../core/public/login/login"))

const Dashboard = lazy(() => import("../core/protected/Dashboard/dashboard"))
const Signup = lazy(() => import("../core/public/signup/signup"))
const Home = lazy(() => import("../core/public/Home/Home"))
const ProtectedHome = lazy(() => import("../core/protected/Home/index"))
const About = lazy(() => import("../core/public/About/About"))
const Form = lazy(() => import("../core/protected/pages/form/Form"))
// const List = lazy(() => import("../core/protected/pages/list/List"))
const ModalFormList = lazy(() => import("../core/protected/pages/list/index"))
const Pagination = lazy(() => import("../core/protected/pages/pagination/Pagination"))
const Checkbox = lazy(() => import("../core/protected/pages/checkbox/Checkbox"))
const Carousel = lazy(() => import('../core/protected/pages/carousel/Carousel'))

const appRoutes: CustomRoute[] = [
    {
        path: "/login",
        component: Login,
        type: "login"
    },
    {
        path: "/auth/no",
        component: ProtectedHome,
        type: "authorized",
        // children: [
        //     {
        //         path: "/auth/about",
        //         component: About,
        //         type: "authorized",
        //     },
        //     {
        //         path: "/auth/form",
        //         component: Form,
        //         type: "authorized",
        //     },
        //     {
        //         path: "/auth/list",
        //         component: List,
        //         type: "authorized",
        //     },
        //     {
        //         path: "/auth/pagination",
        //         component: Pagination,
        //         type: "authorized",
        //     },
        // ]
    },
    {
        path: "/auth/home",
        component: Home,
        type: "authorized",
    },
    {
        path: "/auth/about",
        component: About,
        type: "authorized",
    },
    {
        path: "/auth/form",
        component: Form,
        type: "authorized",
    },
    {
        path: "/auth/list",
        component: ModalFormList,
        type: "authorized",
    },
    {
        path: "/auth/pagination",
        component: Pagination,
        type: "authorized",
    },
    {
        path: "/auth/checkbox",
        component: Checkbox,
        type: "authorized",
    },
    {
        path: "/auth/carousel",
        component: Carousel,
        type: "authorized",
    },
    {
        path: "/signup",
        component: Signup,
        type: "signup"
    }
]

export default appRoutes
