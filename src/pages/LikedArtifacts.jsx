import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { AuthContex } from "../provider/AuthProvider";
import axios from "axios";
import ArtifactCard from "../components/ArtifactCard";


const LikedArtifacts = () => {
    const { user } = useContext(AuthContex);
    const [artifacts, setArtifacts] = useState([]);

    useEffect(() => {
        axios.get(`https://historical-artifacts-server-nine.vercel.app/liked/${user?.email}`, {withCredentials: true})
            .then(res => {
                setArtifacts(res.data)
            })
    }, [])

    console.log(artifacts);
    return (
        <div>
            <Helmet>
                <title>Linked artifacts | ArtifactsTracker</title>
            </Helmet>
            <h2 className="pl-10 py-10 font-semibold text-3xl"> Liked Artifacts</h2>
            <div>
                {
                    artifacts.length > 0 ? <div className="grid grid-cols-1 md:grid-cols-3  lg:grid-cols-3 gap-5 my-16 lg:px-16">
                        {
                            artifacts.map(artifact => <ArtifactCard key={artifact.idx} artifact={artifact}></ArtifactCard>)
                        }
                    </div> : <div> <h2 className="text-2xl font-semibold text-center mb-36 mt-20">You have didn't liked any Artifact!</h2></div>
            }
        </div>
        </div >
    );
};

export default LikedArtifacts;