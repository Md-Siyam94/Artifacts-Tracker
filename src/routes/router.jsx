import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Home";
import AllArtifacts from "../pages/AllArtifacts";
import AddArtifacts from "../pages/AddArtifacts";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import MyArtifacts from "../pages/MyArtifacts";
import LinkedArtifacts from "../pages/LikedArtifacts";
import PrivetRoute from "../provider/PrivetRoute";
import ArtifactDetails from "../pages/ArtifactDetails";

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
                element: <AllArtifacts></AllArtifacts>,
                loader: ()=> fetch('http://localhost:5000/artifacts')

            },
            {
                path: "/details/:id",
                element: <ArtifactDetails></ArtifactDetails>,
                loader: ({params})=> fetch(`http://localhost:5000/artifacts/details/${params.id}`)
            },
            {
                path: "/add-artifacts",
                element: <PrivetRoute><AddArtifacts></AddArtifacts></PrivetRoute>
            },
            {
                path: "/my-artifacts",
                element: <PrivetRoute><MyArtifacts></MyArtifacts></PrivetRoute>
            },
            {
                path: "/linked-artifacts",
                element: <PrivetRoute><LinkedArtifacts></LinkedArtifacts></PrivetRoute>
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