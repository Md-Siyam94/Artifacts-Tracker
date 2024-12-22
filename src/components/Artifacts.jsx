import { useEffect, useState } from "react";
import ArtifactCard from "./ArtifactCard";


const Artifacts = () => {
    const [artifacts, setArtifacts] = useState([])


    useEffect(()=>{
        fetch("http://localhost:5000/artifacts")
        .then(res => res.json())
        .then(data=> {
            setArtifacts(data)
        })
    },[])
    // console.log(artifacts);
    return (
        <div>
            <h2 className="text-5xl mt-28 text-center font-semibold">Featured Artifacts</h2>
            <p className="my-3 text-center w-[60%] mx-auto"> Where history comes alive! Explore rare and significant artifacts that have shaped civilizations, cultures, and traditions throughout time.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 my-16 lg:grid-cols-3 gap-6 px-20">
                {
                    artifacts.slice(0,6).map(artifact => <ArtifactCard key={artifact.index} artifact={artifact}></ArtifactCard>)
                }
            </div>
        </div>
    );
};

export default Artifacts;