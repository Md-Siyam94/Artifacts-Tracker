import { useContext } from "react";
import { AuthContex } from "../provider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";


const AddArtifacts = () => {

    const { user } = useContext(AuthContex)

    const handleAddArtifact = (e) => {
        e.preventDefault();

        const form = e.target
        const artifactName = form.artifactName.value
        const artifactImage = form.artifactImage.value
        const artifactType = form.artifactType.value
        const historicalContext = form.historicalContext.value
        const createdAt = form.createdAt.value
        const discoveredAt = form.discoveredAt.value
        const discoveredBy = form.discoveredBy.value
        const presentLocation = form.presentLocation.value
        const adderName = form.adderName.value
        const adderEmail = form.adderEmail.value
        const likeCount = 0

        const artifact = { artifactName, artifactImage, artifactType, historicalContext, createdAt, discoveredAt, discoveredBy, presentLocation, adderName, adderEmail, likeCount };

        console.log(artifact);
        axios.post("https://historical-artifacts-server-nine.vercel.app/artifacts", artifact )
        .then(res=> {
            console.log('artifact save on database',res.data);
           if(res.data?.insertedId){
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your Artifact has been saved",
                showConfirmButton: false,
                timer: 1500
            
              });
           }
           form.reset();
           
        })
        
        
    }
    return (
        <div className="my-16">
            <Helmet>
                <title>Add artifacts | ArtifactsTracker</title>
            </Helmet>
            <h1 className="text-5xl font-semibold  text-center">Add your Artifact</h1>
            <p className="w-[70%] mx-auto text-center my-4">Do you own an artifact with historical significance? Share its story with the world! Our platform allows you to add artifacts to our growing collection, helping preserve and showcase pieces of history for future generations.</p>
            <div className="card bg-base-100 px-5 w-full mx-auto max-w-[65%] shrink-0  shadow-2xl">
                <form onSubmit={handleAddArtifact} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold"> Artifact name <span className="text-red-600">*</span></span>
                        </label>
                        <input type="text" name="artifactName" placeholder="Artifact name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold"> Artifact image <span className="text-red-600">*</span></span>
                        </label>
                        <input type="url" name="artifactImage" placeholder="Artifact photo URL" className="input input-bordered" required />
                    </div>
                    <div>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text font-semibold"> Artifact Type <span className="text-red-600">*</span></span>

                            </div>
                            <select name="artifactType" className="select select-bordered w-full max-w-xs">
                                <option disabled selected>Choose Artifact Type</option>
                                <option defaultValue={"Tools"}>Tools</option>
                                <option defaultValue={"Weapons"}>Weapons</option>
                                <option defaultValue={" Documents"}> Documents</option>
                                <option defaultValue={"Writings"}>Writings</option>
                                <option defaultValue={"Coins"}>Coins</option>
                                <option defaultValue={"Architectural Elements"}>Architectural Elements </option>
                                <option defaultValue={" Sacred "}> Sacred</option>
                                <option defaultValue={"Jewelry"}>Jewelry</option>
                                <option defaultValue={"Pottery "}>Pottery </option>
                            </select>
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold"> Historical Context <span className="text-red-600">*</span></span>
                        </label>
                        <input type="text" name="historicalContext" placeholder="Type historical context " className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold"> Created At <span className="text-red-600">*</span></span>
                        </label>
                        <input type="text" name="createdAt" placeholder="e.g., '100 BC'" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold"> Discovered At <span className="text-red-600">*</span></span>
                        </label>
                        <input type="number" name="discoveredAt" placeholder="e.g., '1799'" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold"> Discovered By <span className="text-red-600">*</span></span>
                        </label>
                        <input type="text" name="discoveredBy" placeholder="Who was discovered the Artifact?" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold"> Present Location <span className="text-red-600">*</span></span>
                        </label>
                        <input type="text" name="presentLocation" placeholder="Write the location of this Artifact" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold"> Artifact adder name <span className="text-red-600">*</span></span>
                        </label>
                        <input type="text" name="adderName" readOnly defaultValue={user?.displayName} className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold"> Artifact adder email <span className="text-red-600">*</span></span>
                        </label>
                        <input type="text" name="adderEmail" readOnly defaultValue={user?.email} className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn   bg-teal-500 hover:bg-teal-600 text-white">Add Artifact</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddArtifacts;