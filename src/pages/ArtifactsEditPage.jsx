import { useContext, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContex } from "../provider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";


const ArtifactsEditPage = () => {
    const {user} = useContext(AuthContex)
    const artifact = useLoaderData()
    const navigate = useNavigate()
    
    const  { artifactName, artifactImage, artifactType, historicalContext, createdAt, discoveredAt, discoveredBy, presentLocation, adderName, adderEmail, likeCount, _id } = artifact || {}
    

    const handleEditArtifact=(e)=>{
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

      const updatedData = {artifactName, artifactImage, artifactType, historicalContext, createdAt, discoveredAt, discoveredBy, presentLocation, adderName, adderEmail};

      axios.put(`https://historical-artifacts-server-nine.vercel.app/artifacts/${_id}`, updatedData)
      .then(res=> {
       if(res.data.modifiedCount > 0){
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your artifact data has been updated",
            showConfirmButton: false,
            timer: 1500
          });
       }
       navigate(`/details/${_id}`)
      })
    }
    return (
        <div className="pt-28">
            <Helmet>
                <title>Add artifacts | ArtifactsTracker</title>
            </Helmet>
            <h1 className="text-3xl  font-semibold ml-10 mb-2">Edit your Artifact</h1>
            <hr className="mb-6 w-[30%] ml-10 "/>
            
            <div className="card bg-base-100 px-5 w-full mx-auto max-w-[65%] shrink-0  shadow-2xl">
                <form onSubmit={handleEditArtifact} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold"> Artifact name <span className="text-red-600">*</span></span>
                        </label>
                        <input type="text" name="artifactName" defaultValue={artifactName} placeholder="Artifact name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold"> Artifact image <span className="text-red-600">*</span></span>
                        </label>
                        <input type="url" name="artifactImage" defaultValue={artifactImage} placeholder="Artifact photo URL" className="input input-bordered" required />
                    </div>
                    <div>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text font-semibold"> Artifact Type <span className="text-red-600">*</span></span>

                            </div>
                            <select name="artifactType" defaultValue={artifactType} className="select select-bordered w-full max-w-xs">
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
                        <input type="text" name="historicalContext" defaultValue={historicalContext} placeholder="Type historical context " className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold"> Created At <span className="text-red-600">*</span></span>
                        </label>
                        <input type="text" name="createdAt" defaultValue={createdAt} placeholder="e.g., '100 BC'" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold"> Discovered At <span className="text-red-600">*</span></span>
                        </label>
                        <input type="number" name="discoveredAt" defaultValue={discoveredAt} placeholder="e.g., '1799'" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold"> Discovered By <span className="text-red-600">*</span></span>
                        </label>
                        <input type="text" name="discoveredBy"  defaultValue={discoveredBy} placeholder="Who was discovered the Artifact?" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold"> Present Location <span className="text-red-600">*</span></span>
                        </label>
                        <input type="text" name="presentLocation"  defaultValue={presentLocation} placeholder="Write the location of this Artifact" className="input input-bordered" required />
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
                        <button className="btn bg-teal-500 hover:bg-teal-600 text-white">Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ArtifactsEditPage;