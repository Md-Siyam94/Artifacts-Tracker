import { Helmet } from "react-helmet";
import { BiLike } from "react-icons/bi";
import { Link, useLoaderData } from "react-router-dom";


const ArtifactDetails = () => {
    const artifact = useLoaderData();
    const { artifactName, artifactImage, artifactType, historicalContext, createdAt, discoveredAt, discoveredBy, presentLocation, adderName, adderEmail, likeCount } = artifact || {}

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
                            <p className=""><BiLike className="text-2xl" />
                            </p>
                            <p> {likeCount}</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArtifactDetails;