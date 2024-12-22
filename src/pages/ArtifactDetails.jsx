import { useLoaderData } from "react-router-dom";


const ArtifactDetails = () => {
    const artifact = useLoaderData();
    const { artifactName, artifactImage, artifactType, historicalContext, createdAt, discoveredAt, discoveredBy, presentLocation, adderName, adderEmail, likeCount } = artifact || {}

    return (
        <div>
            artifact details page coming...
        </div>
    );
};

export default ArtifactDetails;