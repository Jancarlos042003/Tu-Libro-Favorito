import ProductCard from "../card/ProductCard"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SwiperButtonNext from '../button-nav/SwiperButtonNext';
import SwiperButtonPrev from '../button-nav/SwiperButtonPrev';

const BookCarousel = ({books}) => {
    return(
        <div className="w-full mx-auto">
            <Swiper
                modules={[Navigation]}
                spaceBetween = {10}
                slidesPerView = {2}
                breakpoints = {{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 20
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 20
                    },
                    1280: {
                        slidesPerView: 5,
                        spaceBetween: 20
                    },
                    1536: {
                        slidesPerView: 6,
                        spaceBetween: 20
                    },
                }}
            >
                {books.map((book) => (
                    <SwiperSlide key={book.id}>
                        <ProductCard book={book} />
                    </SwiperSlide>
                ))}

                <SwiperButtonPrev>
                    <ChevronLeft className="w-9 h-9 text-white"/>
                </SwiperButtonPrev>
                <SwiperButtonNext>
                    <ChevronRight className="w-9 h-9 text-white" />
                </SwiperButtonNext>
            </Swiper>
        </div>
    )
}

export default BookCarousel