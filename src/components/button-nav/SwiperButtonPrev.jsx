import { useSwiper } from 'swiper/react';

const SwiperButtonPrev = ({ children }) => {
    const swiper = useSwiper();
    return (
        <button 
        onClick={() => swiper.slidePrev()} 
        className="absolute left-1 top-1/2 z-10 -translate-y-1/2 bg-transparent"
        title='Anterior'
        >
            {children}
        </button>
    );
};

export default SwiperButtonPrev