import { useContext } from "react";
import { AuthContex } from "../provider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";


const AddArtifacts = () => {

    const { user } = useContext(AuthContex)

    const handleAddArtifact = (e) => {
        e.preventDefault();

        const form = new FormData(e.target);
        const artifactName = form.get('artifactName');
        const artifactImage = form.get('artifactImage');
        const artifactType = form.get('artifactType');
        const historicalContext = form.get('historicalContext');
        const createdAt = form.get('createdAt');
        const discoveredAt = form.get('discoveredAt');
        const discoveredBy = form.get('discoveredBy');
        const presentLocation = form.get('presentLocation');
        const adderName = form.get('adderName');
        const adderEmail = form.get('adderEmail');
        const likeCount = 0

        const artifact = { artifactName, artifactImage, artifactType, historicalContext, createdAt, discoveredAt, discoveredBy, presentLocation, adderName, adderEmail, likeCount };

        // console.log(artifact);
        axios.post("http://localhost:5000/artifacts", artifact )
        .then(res=> {
            console.log('artifact save on database',res.data);
           if(res?.data?.insertedId){
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your Artifact has been saved",
                showConfirmButton: false,
                timer: 1500
            
              });
           }
           
           
        })
        
        
    }
    return (
        <div className="my-16">
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
                                <option value={"Tools"}>Tools</option>
                                <option value={"Weapons"}>Weapons</option>
                                <option value={" Documents"}> Documents</option>
                                <option value={"Writings"}>Writings</option>
                                <option value={"Coins"}>Coins</option>
                                <option value={"Architectural Elements"}>Architectural Elements </option>
                                <option value={" Sacred "}> Sacred</option>
                                <option value={"Jewelry"}>Jewelry</option>
                                <option value={"Pottery "}>Pottery </option>
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
                        <button className="btn btn-primary">Add Artifact</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddArtifacts;