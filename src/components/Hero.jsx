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
                style={{ height: "550px", width: "100%",   }}
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
                    <img className='w-full object-cover ' src={SliderImg1} alt="" />
                    <h3 className='absolute text-3xl '>hello</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='object-cover w-full' src={SliderImg2} alt="" />
                    <h3 className='absolute text-3xl '>hello</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full object-cover ' src={SliderImg3} alt="" />
                    <h3 className='absolute text-3xl '>hello</h3>
                </SwiperSlide>
                

            </Swiper>
        </div>
    );
};

export default Hero;