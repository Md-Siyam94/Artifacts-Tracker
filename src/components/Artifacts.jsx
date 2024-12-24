import { useEffect, useState } from "react";
import ArtifactCard from "./ArtifactCard";
import { Link } from "react-router-dom";


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
            <h2 className="text-5xl mt-28 text-center font-semibold">Featured Artifacts Collection</h2>
            <p className="my-3 text-center w-[60%] mx-auto"> Where history comes alive! Explore rare and significant artifacts that have shaped civilizations, cultures, and traditions throughout time.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 mt-16 mb-8 lg:grid-cols-3 gap-6 px-20">
                {
                    artifacts.slice(0,6).map(artifact => <ArtifactCard key={artifact.index} artifact={artifact}></ArtifactCard>)
                }
            </div>
            <div className="w-full flex justify-center">
               <Link to={"/all-artifacts"}> <button className="py-3 rounded-lg border  px-10 font-semibold bg-yellow-400 hover:bg-yellow-500">See all</button></Link>
            </div>
        </div>
    );
};

export default Artifacts;