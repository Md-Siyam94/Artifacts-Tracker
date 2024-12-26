import { useLoaderData } from "react-router-dom";
import ArtifactCard from "../components/ArtifactCard";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import axios from "axios";


const AllArtifacts = () => {
    const [artifacts, setArtifacts] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        axios.get(`https://historical-artifacts-server-nine.vercel.app/artifacts?search=${search}`)
            .then(res => {
               setArtifacts(res.data)
            })
    }, [search,artifacts])


    return (
        <div>
            <Helmet>
                <title>All artifacts | ArtifactsTracker</title>
            </Helmet>
            <div className="my-10 flex gap-20 items-center">
                <h1 className="text-3xl font-semibold ml-6 ">All Artifacts</h1>
                <label className="input input-bordered w-96 flex items-center gap-2">
                    <input type="text" name="search" className="grow" onChange={e => setSearch(e.target.value)} placeholder="Search" />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            fillRule="evenodd"
                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                            clipRule="evenodd" />
                    </svg>
                </label>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3  lg:grid-cols-3 gap-5 my-16 px-16">
                {
                    artifacts.map(artifact => <ArtifactCard key={artifact?._id} artifacts={artifacts} setArtifacts={setArtifacts} artifact={artifact}></ArtifactCard>)
                }
            </div>
        </div>
    );
};

export default AllArtifacts;