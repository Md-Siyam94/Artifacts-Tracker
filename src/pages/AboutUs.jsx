

const AboutUs = () => {
    return (
        <div className="pt-20 max-w-7xl mx-auto h-screen ">
            <h1 className="text-4xl font-semibold  mt-5">About us</h1>
            <p className="opacity-70 my-4">Welcome to Historical Artifacts Tracker, your gateway to uncovering and preserving the rich tapestry of human history. We are dedicated to helping historians, archaeologists, museums, and enthusiasts track, document, and preserve historical artifacts from across the globe. <br /><br />

                Our platform offers an intuitive and data-driven solution to catalog and maintain detailed records of artifacts, ensuring that these precious remnants of history are never lost or forgotten. By combining advanced technology with a deep respect for cultural heritage, we aim to connect the past with the present.</p>
            <h2 className="text-4xl font-semibold my-4 mb-6">FAQs</h2>
            <div className="collapse bg-base-200">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">Our Mission</div>
                <div className="collapse-content">
                    <p>To empower historical preservation by providing a comprehensive tracking platform that enhances research, documentation, and the responsible stewardship of artifacts.</p>
                </div>
            </div>
            <div className="collapse bg-base-200 my-4">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">Why Choose Us?</div>
                <div className="collapse-content">
                    <p><span className="font-semibold">Efficient Artifact Management:</span> Seamlessly catalog artifacts with detailed metadata, images, and historical significance. <br />
<span className="font-semibold">Secure Database:</span> Ensure that valuable information is safely stored and easily accessible for research and preservation. <br />
<span className="font-semibold">Collaborative Platform:</span> Connect with experts and enthusiasts for knowledge sharing and preservation strategies.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;