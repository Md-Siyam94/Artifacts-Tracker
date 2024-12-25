import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { BiLike, BiSolidLike } from "react-icons/bi";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { AuthContex } from "../provider/AuthProvider";


const ArtifactDetails = () => {
    const { user } = useContext(AuthContex)
    const [artifact, setArtifact] = useState();
    const [liked, setLiked] = useState(false);
    const { artifactName, artifactImage, artifactType, historicalContext, createdAt, discoveredAt, discoveredBy, presentLocation, adderName, adderEmail, likeCount, _id } = artifact || {}

    const params = useParams();
    // console.log(params.id);

     useEffect(()=> {
        axios.get(`http://localhost:5000/artifacts/${params.id}`)
            .then(res => {
                setArtifact(res.data)
            })
    },[artifact])

    const handleLike = (likedId) => {
        const email = user?.email;
        const likeId = { likedId, email, artifactImage, artifactName, historicalContext, likeCount }
        setLiked(true)

        // console.log(id);

        axios.post("http://localhost:5000/liked-artifacts", likeId)
            .then((res) => {
                // console.log(res.data);
                // if (res.data.insertedId) {
                //    const updated = artifacts.filter(artifact=> _id === artifact?._id)
                //    setArtifacts(updated)

                // }
            })

    }
    return (
        <div className="pb-20 pt-16">
            <Helmet>
                <title>Artifacts details | ArtifactsTracker</title>
            </Helmet>
            <h1 className="text-center font-semibold text-5xl ">Artifact details </h1>
            <p className="text-center w-[80%] mx-auto mt-3">Explore the rich history and fascinating details of this artifact. Each piece has a unique journey that offers insights into ancient civilizations, cultural practices, and technological advancements.</p>
            <div className="w-[88%] mx-auto flex items-center gap-4 rounded-lg bg-base-100 mb-10 shadow-xl p-10">
                <figure>
                    <img
                        className="h-72 w-full rounded-lg "
                        src={artifactImage}
                        alt="Artifact image" />
                </figure>
                <div className=" px-4 py-6 ">
                    <h2 className="card-title">
                        {artifactName}
                        <div className="badge bg-yellow-400 ">{artifactType}</div>
                    </h2>
                    <p className="my-2"><span className="font-semibold">Historical contex :</span> {historicalContext}</p>
                    <p className="my-1"><span className="font-semibold">Created at :</span> {createdAt}</p>
                    <p className="my-2"><span className="font-semibold">Discoverd at :</span> {discoveredAt}</p>
                    <p className="my-1"><span className="font-semibold">Discoverd by :</span> {discoveredBy}</p>
                    <p className="my-2"><span className="font-semibold">Present location :</span> {presentLocation}</p>
                    <p className="my-1"><span className="font-semibold">Adder name :</span> {adderName}</p>
                    <p className="my-2"><span className="font-semibold">Adder email :</span> {adderEmail}</p>

                    <div className="card-actions mt-4">
                        <div className="flex gap-2 items-center">
                            <button onClick={() => handleLike(_id)} className="">
                                {
                                    liked ? <BiSolidLike className="text-2xl" /> : <BiLike className="text-2xl" />
                                }
                            </button>

                            <p> {likeCount}</p>
                        </div>

                    </div>
                </div>
            </div>
        </div >
    );
};

export default ArtifactDetails;