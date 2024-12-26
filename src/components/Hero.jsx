import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import SliderImg1 from '../assets/skyscrapers-building-new-york-city.jpg'
import SliderImg2 from '../assets/artifacts.jpg'
import SliderImg3 from '../assets/peala.jpg'



import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



const Hero = () => {
    return (
        <div>
            <Swiper
                style={
                    { height: "550px", width: "100%", }
                }
               
                
                slidesPerView={1}
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
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
                    <div >
                        <img className='w-full object-cover relative ' src={SliderImg1} alt="" />
                        {/* <div className='w-full bg-cover' style={{backgroundImage: `url(${SliderImg1})`}}> */}

                        {/* </div> */}
                        <div className="flex flex-col items-center justify-center h-[300px]  bg-gray-100 rounded-lg p-5 shadow-md ">
                            <h2 className="text-2xl font-bold text-gray-800 mb-3 ">Ancient Vase</h2>
                            <p className="text-gray-600">A rare vase from the Roman Empire.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='object-cover w-full' src={SliderImg2} alt="" />
                    <h3 className='absolute text-3xl '></h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full object-cover ' src={SliderImg3} alt="" />
                    <h3 className='absolute text-3xl '></h3>
                </SwiperSlide>


            </Swiper>
        </div>
    );
};

export default Hero;