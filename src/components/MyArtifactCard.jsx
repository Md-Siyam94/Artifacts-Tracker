import { useContext } from "react";
import { AuthContex } from "../provider/AuthProvider";
import { FaEdit } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import axios from "axios";
import Swal from "sweetalert2";


const MyArtifactCard = ({ myArtifact, myArtifacts,setMyArtifacts }) => {
  const { user } = useContext(AuthContex)
  const navigate = useNavigate()
  const { artifactName, artifactImage, artifactType, historicalContext, createdAt, discoveredAt, discoveredBy, presentLocation, adderName, adderEmail, likeCount, _id } = myArtifact || {}


  const handleDeleteArtifact = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {

        axios.delete(`https://historical-artifacts-server-nine.vercel.app/artifacts/${_id}`)
          .then((result) => {
            if (result.data.deleteCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Artifact has been deleted.",
                icon: "success"
              });
            }
            const remaing = myArtifacts.filter(myArtifact=> _id !== myArtifact?._id)
            setMyArtifacts(remaing)
            navigate('/all-artifacts')
          })
      }
    });



  }
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>
              Artifacts details
            </th>

            <th>Adder details</th>
            <th>Edit</th>
            <th>Delete artifact</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            {/* <th>
          {index }
        </th> */}
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask rounded-lg h-16 w-28">
                    <img
                      src={artifactImage} alt="Artifact Image" />
                  </div>
                </div>
                <div>
                  <div className="font-bold">{artifactName}<div className="badge ml-1 bg-yellow-500">{artifactType}</div></div>
                  <div className="text-sm opacity-50 flex items-center gap-1"><FaLocationDot /> {presentLocation}</div>
                </div>
              </div>
            </td>
            <td>
              {user?.displayName}
              <br />
              <span className="badge badge-ghost badge-sm">{user?.email}</span>
            </td>
            <td className="flex items-center gap-1 mt-3"><Link to={`/edit-artifact/${_id}`}><FaEdit className="text-xl" /> Edit </Link></td>
            <th>
              <button onClick={() => handleDeleteArtifact(_id)} className="btn btn-ghost btn-xs px-5 bg-red-500 hover:bg-red-600 text-white">Delete</button>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
    // <div className="flex items-center border gap-5  my-2">
    //     <div>
    //         <img
    //             className="h-28  "
    //             src={artifactImage} alt="Artifact Image" />
    //     </div>
    //     <div >
    //         <h2 className="card-title">
    //             {artifactName}
    //             <div className="badge bg-yellow-500">{artifactType}</div>
    //         </h2>
    //         <p className="my-3">{historicalContext}</p>
    //     </div>
    //     <div> 
    //         <p className="text-center mb-3 font-semibold ">Adder details</p>
    //         <div className="flex gap-2 items-center">

    //             <img className="h-10 w-10 rounded-full" src={user?.photoURL} alt="" />
    //             <div>
    //                 <h2 className="font-semibold opacity-60">{user?.displayName}</h2>
    //                 <p className="font-semibold opacity-60">{user?.email}</p>
    //             </div>
    //         </div>
    //     </div>
    // </div>
  );
};

export default MyArtifactCard;