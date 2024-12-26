

const Exhibits = () => {


    return (
        <div className="py-28 bg-gray-800 ">
            <h1 className="text-5xl text-center font-serif text-white">More Than 1370 Exhibits!</h1>
            <p className="my-3 w-[80%] text-center mx-auto text-white opacity-70">Explore a vast collection of over 1,370 fascinating exhibits that bring history to life! From ancient artifacts and rare manuscripts to intricate sculptures and historical tools, our collection showcases the rich cultural heritage of civilizations across the ages.</p>
            <div className="flex gap-10 justify-center my-10">
                <button className="py-4 px-7 border-2 border-white border-opacity-60 text-white font-semibold">
                    Become A Member
                </button>
                <button  className="py-4 px-7 border-2 border-white border-opacity-60 text-white font-semibold">
                    Buy Online Ticket
                </button>
            </div>
        </div>
    );
};

export default Exhibits;