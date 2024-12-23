

const MyArtifactCard = ({ myArtifact }) => {
    const { artifactName, artifactImage, artifactType, historicalContext, createdAt, discoveredAt, discoveredBy, presentLocation, adderName, adderEmail, likeCount } = myArtifact || {}
    return (
        <div className="flex  border my-2">
            <div>
                <img
                className="h-28  "
                src={artifactImage} alt="Artifact Image" />
            </div>
            <div>
                <h2 className="card-title">
                    {artifactName}
                    <div className="badge bg-yellow-500">{artifactType}</div>
                </h2>
                <p>{historicalContext}</p>
            </div>
        </div>
    );
};

export default MyArtifactCard;