import { useLoaderData } from "react-router-dom";
import ArtifactCard from "../components/ArtifactCard";


const AllArtifacts = () => {
    const artifacts = useLoaderData()
    return (
        <div>
            <div className="my-10">
            <h1 className="text-5xl font-semibold text-center ">All Artifacts</h1>
            <p className="w-[80%] mx-auto my-2 text-center">Your gateway to exploring history through preserved treasures from ancient times to modern eras. This section showcases a diverse range of artifacts, each holding unique stories of human culture, creativity, and innovation.</p>
            </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 lg:px-16">
            {
                artifacts.map(artifact=> <ArtifactCard key={artifact.idx} artifact={artifact}></ArtifactCard>)
            }
        </div>
        </div>
    );
};

export default AllArtifacts;