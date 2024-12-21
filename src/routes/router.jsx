import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Home";
import AllArtifacts from "../pages/AllArtifacts";
import AddArtifacts from "../pages/AddArtifacts";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        //   errorElement: <div>error</div>,
        children: [
            {
                path: "",
                element: <Home></Home>
            },
            {
                path: "/all-artifacts",
                element: <AllArtifacts></AllArtifacts>
            },
            {
                path: "/add-artifacts",
                element: <AddArtifacts></AddArtifacts>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "sign-up",
                element: <SignUp></SignUp>
            }
        ]
    },
]);

export default router;