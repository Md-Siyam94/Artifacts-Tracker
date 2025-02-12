import recent from '../assets/recent.jpeg'

const RecentArtifacts = () => {
    return (
        <div className=' lg:flex items-center py-28'>
            <div className='flex-1 text-center lg:text-start'>
                <h1 className='lg:text-7xl text-4xl font-semibold text-success'>Recent Artifacts</h1>
                <p className='opacity-70 my-4'>Discover some of the latest artifacts unearthed from historical sites, each offering a fascinating glimpse into ancient civilizations and cultures.</p>
            </div>
            <div className='flex-1'>
                <img className='w-full p-1 border-2 border-success rounded-lg shadow-md shadow-success' src={recent} alt="" />
            </div>
        </div>
    );
};

export default RecentArtifacts;