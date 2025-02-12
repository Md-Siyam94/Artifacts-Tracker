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
import Error from "../pages/Error";
import ArtifactsEditPage from "../pages/ArtifactsEditPage";
import AboutUs from "../pages/AboutUs";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "",
                element: <Home></Home>
            },
            {
                path: "/all-artifacts",
                element: <AllArtifacts></AllArtifacts>,
                // loader: ()=> fetch('https://historical-artifacts-server-nine.vercel.app/artifacts')

            },
            {
                path: "/about-us",
                element: <AboutUs></AboutUs>,
                // loader: ()=> fetch('https://historical-artifacts-server-nine.vercel.app/artifacts')

            },
            {
                path: "/details/:id",
                element: <PrivetRoute><ArtifactDetails></ArtifactDetails></PrivetRoute>,
                // loader: ({params})=> fetch(`https://historical-artifacts-server-nine.vercel.app/artifacts/${params.id}`)
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
                path: "/edit-artifact/:id",
                element: <PrivetRoute><ArtifactsEditPage></ArtifactsEditPage></PrivetRoute>,
                loader: ({ params }) => fetch(`https://historical-artifacts-server-nine.vercel.app/artifacts/${params.id}`)

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