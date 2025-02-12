import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import SliderImg1 from '../assets/skyscrapers-building-new-york-city.jpg'
import SliderImg2 from '../assets/artifacts.jpg'
import SliderImg3 from '../assets/peala.jpg'



import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';



const Hero = () => {
    return (
        <div >
            <Swiper
                style={
                    { width: "full", }
                }


                slidesPerView={1}
                spaceBetween={30}

                centeredSlides={true}
                autoplay={{
                    delay: 4500,
                    disableOnInteraction: false,
                    
                }}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div
                        className="hero min-h-screen"
                        style={{
                            backgroundImage: `url(${SliderImg1})`,
                        }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-neutral-content text-center">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">One World Trade Center</h1>
                                <p className="mb-5">
                                Observatory located on floors 100-102 of One World Trade Center, with exhibits & restaurants.
                                </p>
                                <Link to="https://www.oneworldobservatory.com"><button className="btn btn-success">Learn more</button></Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="hero min-h-screen"
                        style={{
                            backgroundImage: `url(${SliderImg2})`,
                        }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-neutral-content text-center">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">Beadwork necklace</h1>
                                <p className="mb-5">
                                Ornate handmade beadwork necklace complements traditional African garment.
                                </p>
                                <Link to="https://www.freepik.com/free-ai-image/ornate-handmade-beadwork-necklace-complements-traditional-african-garment-generated-by-ai_41151113.htm"><button className="btn btn-success">Learn more</button></Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="hero min-h-screen"
                        style={{
                            backgroundImage: `url(${SliderImg3})`,
                        }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-neutral-content text-center">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">Ancient pottery vessels</h1>
                                <p className="mb-5">
                                View of ancient pottery vessels and earthenware
                                </p>
                                <Link to="https://www.freepik.com/free-ai-image/view-ancient-pottery-vessels-earthenware_201646040.htm"><button className="btn btn-success">Learn more</button></Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>


            </Swiper>
        </div>
    );
};

export default Hero;