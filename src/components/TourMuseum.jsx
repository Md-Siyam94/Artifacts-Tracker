import MuseumMain from '../assets/museumMain.jpg'
import MuseumPhoto from '../assets/museumPhoto1.webp'

const TourMuseum = () => {
    return (
        <div className="md:flex my-20">
            <div className="flex-1 p-16">
                <img src={MuseumMain} alt="Museum photo" />
                <div className='flex gap-4 my-6 items-center'>
                    <p className='border-2 border-yellow-500 h-36 mx-auto  '></p>
                    <div>
                        <h2 className='text-4xl font-thin '>Visit Museum </h2>
                        <p className='text-2xl my-3 font-extralight'>Discover artifacts that reveal how our ancestors lived, worked, and created.</p>
                    </div>
                </div>
                <button className='btn px-8 bg-yellow-400 hover:bg-yellow-500'>Book For Visit</button>

            </div>
            <div className="flex-1 pt-28 p-16 ">
                <p className='border-2 border-yellow-500 my-6 w-36 mx-auto  '></p>
                <h3 className='text-4xl font-thin text-center'>Museum Artifacts</h3>
                <p className='text-2xl my-3 mb-8 font-extralight'>Museums serve as guardians of history, preserving artifacts that offer glimpses into the lives, cultures, and innovations of ancient civilizations.</p>
                <img src={MuseumPhoto} alt="Museum artifacts" />
            </div>
        </div>
    );
};

export default TourMuseum;