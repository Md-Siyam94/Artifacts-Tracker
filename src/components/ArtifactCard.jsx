import { BiLike, BiSolidLike } from "react-icons/bi";
import { Link } from "react-router-dom";
import Aos from "aos";
import 'aos/dist/aos.css';
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContex } from "../provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";


const ArtifactCard = ({ artifact,  }) => {

    // console.log(artifact)
    const { user } = useContext(AuthContex)
    const { artifactImage, artifactName, historicalContext, likeCount, _id } = artifact || {}
    const [liked, setLiked] = useState(false)

    useEffect(() => {
        Aos.init({
            duration: 700, // Animation duration in milliseconds
            offset: 200, // Offset (in pixels) from the top before triggering the animation
            easing: 'ease-in-out', // Easing style
        });
    }, [])

    const handleLike = (likedId) => {
        const email = user?.email;
        const likeId = { likedId, email, artifactImage,artifactName, historicalContext, likeCount }
        setLiked(true)

        // console.log(id);
      
            axios.post("https://historical-artifacts-server-nine.vercel.app/liked-artifacts", likeId)
                .then((res) => {
                    // console.log(res.data);
                    // if (res.data.insertedId) {
                    //    const updated = artifacts.filter(artifact=> _id === artifact?._id)
                    //    setArtifacts(updated)

                    // }
                })
      
    }
    return (
        <div data-aos="fade-up" className="rounded-lg bg-base-100 mb-10 shadow-xl grid">
            <figure>
                <img
                    className="h-52 w-full rounded-lg "
                    src={artifactImage}
                    alt="Artifact image" />
            </figure>
            <div className=" px-4 py-6 ">
                <h2 className="card-title">
                    {artifactName}

                </h2>
                <p className="my-1">{historicalContext}</p>
                <div className="card-actions justify-between items-center mt-4 ">
                    <div className="flex gap-2 items-center ">
                        <button onClick={() => handleLike(_id)} className="">
                            {
                                liked ? <BiSolidLike className="text-2xl" /> : <BiLike className="text-2xl" />
                            }
                        </button>
                        <p> {likeCount}</p>
                    </div>
                    <Link to={`/details/${_id}`} className="btn px-5 ">See Details</Link>
                </div>
            </div>
        </div>
    );
};

export default ArtifactCard;