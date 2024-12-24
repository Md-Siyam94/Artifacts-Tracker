import { useContext, useState } from "react";
import { AuthContex } from "../provider/AuthProvider";
import axios from "axios";
import MyArtifactCard from "../components/MyArtifactCard";
import NoDataFound from '../../public/No data found.json'
import { Helmet } from "react-helmet";


const MyArtifacts = () => {
const {user} = useContext(AuthContex)
    const [myArtifacts, setMyArtifacts] = useState([])
    useState(()=>{
        axios.get(`http://localhost:5000/artifacts?email=${user?.email}`)
        .then(res=>{
            setMyArtifacts(res.data)
        })
    },[]);
    console.log(myArtifacts);
    return (
        <div className="py-10 ">
            <Helmet>
                <title>My artifacts | ArtifactsTracker</title>
            </Helmet>
           <h2 className="font-thin  text-4xl"> My Artifacts</h2>
           <div className="my-10">
           {
            myArtifacts.length > 0 ?  
                myArtifacts.map(myArtifact=>  <MyArtifactCard key={myArtifact?._id}  myArtifact={myArtifact}></MyArtifactCard>)
             : <div><h2 className="text-2xl font-semibold text-center py-36">You have didn't add any Artifact!</h2></div>
           }
           </div>
        </div>
    );
};

export default MyArtifacts;