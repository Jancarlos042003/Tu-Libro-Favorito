import { useSwiper } from 'swiper/react';

const SwiperButtonNext = ({ children }) => {
    const swiper = useSwiper();
    return (
        <button onClick={() => swiper.slideNext()} className="absolute right-1 top-1/2 z-10 -translate-y-1/2 bg-transparent">
            {children}
        </button>
    );
};

export default SwiperButtonNext