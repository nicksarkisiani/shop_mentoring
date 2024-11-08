import Sliders from "../../features/Sliders/Sliders.tsx";
import {SwiperSlide} from "swiper/react";

const MainPage = () => {
    return (
        <div>
            <Sliders slidesCount={1}>
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
            </Sliders>

            <div style={{
                marginTop: "200px"
            }}>

            </div>

            <Sliders slidesCount={4}>
                <SwiperSlide>Slide 10</SwiperSlide>
                <SwiperSlide>Slide 20</SwiperSlide>
                <SwiperSlide>Slide 30</SwiperSlide>
                <SwiperSlide>Slide 40</SwiperSlide>
            </Sliders>
        </div>
    );
};

export default MainPage;