import { BiLike } from "react-icons/bi";
import { Link } from "react-router-dom";



const ArtifactCard = ({ artifact }) => {
    // console.log(artifact)
    const {artifactImage, artifactName, historicalContext, likeCount, _id } = artifact || {}
    return (
        < div className="rounded-lg bg-base-100 mb-10 shadow-xl">
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
                <div className="card-actions justify-between items-center mt-4">
                    <div className="flex gap-2 items-center">
                        <p className=""><BiLike className="text-2xl" />
                        </p>
                        <p> {likeCount}</p>
                    </div>
                    <Link to={`/details/${_id}`} className="btn px-5 ">See Details</Link>
                </div>
            </div>
        </div>
    );
};

export default ArtifactCard;