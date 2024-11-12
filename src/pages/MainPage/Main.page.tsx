import Sliders from "../../features/Sliders/Sliders.tsx";
import {SwiperSlide} from "swiper/react";
import {useEffect, useState} from "react";
import $api from "../../axios";
import {IPhoto} from "../../types";

const MainPage = () => {

    const [photos, setPhotos] = useState<IPhoto[]>([]);

    const getPhotos = async () => {
        const photosArr = await $api.get('/photos');
        setPhotos(photosArr.data)
    }

    useEffect(() => {
        getPhotos()
    }, []);

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

            <div>
                {photos.map(photo => (
                    <div key={photo.id}>
                        <img src={photo.urls.regular}/>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default MainPage;