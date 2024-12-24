import { useLoaderData } from "react-router-dom";
import ArtifactCard from "../components/ArtifactCard";
import { Helmet } from "react-helmet";


const AllArtifacts = () => {
    const artifacts = useLoaderData()
    return (
        <div>
            <Helmet>
                <title>All artifacts | ArtifactsTracker</title>
            </Helmet>
            <div className="my-10 flex gap-20 items-center">
                <h1 className="text-3xl font-semibold ml-6 ">All Artifacts</h1>
                {/* <p className="w-[80%] mx-auto my-2 text-center">Your gateway to exploring history through preserved treasures from ancient times to modern eras. This section showcases a diverse range of artifacts, each holding unique stories of human culture, creativity, and innovation.</p> */}
                <label className="input input-bordered w-96 flex items-center gap-2">
                    <input type="text" className="grow" placeholder="Search" />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            fillRule="evenodd"
                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                            clipRule="evenodd" />
                    </svg>
                </label>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3  lg:grid-cols-3 gap-5 my-16 lg:px-16">
                {
                    artifacts.map(artifact => <ArtifactCard key={artifact.idx} artifact={artifact}></ArtifactCard>)
                }
            </div>
        </div>
    );
};

export default AllArtifacts;