import { useSwiper } from 'swiper/react';
import { useState } from 'react';

const CustomPagination = ({ totalSlides }) => {
    const swiper = useSwiper();
    const [activeIndex, setActiveIndex] = useState(0);

    swiper.on('slideChange', () => setActiveIndex(swiper.realIndex));

    return (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
            <div className="flex space-x-2">
                {[...Array(totalSlides)].map((_, index) => (
                    <button
                        key={index}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            index === activeIndex ? 'bg-white scale-125' : 'bg-gray-400'
                        }`}
                        onClick={() => swiper.slideTo(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default CustomPagination