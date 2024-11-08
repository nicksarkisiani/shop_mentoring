import {Swiper} from "swiper/react";
import React, {FC} from "react";
import {Navigation, Pagination} from "swiper/modules";
import "./sliders.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface ISliders {
    slidesCount: number
    children: React.ReactNode
    isPagination?: boolean
}

const Sliders: FC<ISliders> = ({slidesCount, children, isPagination = false}) => {
    const modules = [Navigation]
    isPagination && modules.push(Pagination)

    return (
        <Swiper
            modules={modules}
            slidesPerView={slidesCount}
            navigation
            pagination={isPagination}
        >
            {children}
        </Swiper>
    );
};

export default Sliders;