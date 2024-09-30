import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import ItemBanner from './ItemBanner';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SwiperButtonNext from '../button-nav/SwiperButtonNext';
import SwiperButtonPrev from '../button-nav/SwiperButtonPrev';
import CustomPagination from '../button-nav/CustomPagination';

const libros = [
    {
        id: 1,
        title: "El gran Gatsby",
        author: "F. Scott Fitzgerald",
        description: "Una historia de amor y decadencia en la era del jazz",
        image: "https://i.pinimg.com/originals/26/3f/7d/263f7de8b91b8934ee98c0bf8599478a.jpg"
    },
    {
        id: 2,
        title: "Cien años de soledad",
        author: "Gabriel García Márquez",
        description: "La saga de la familia Buendía a través de generaciones",
        image: "https://i.pinimg.com/564x/3a/8d/89/3a8d89aa928029b891d981d20abda05f.jpg"
    },
    {
        id: 3,
        title: "1984",
        author: "George Orwell",
        description: "Una visión distópica de un futuro totalitario",
        image: "https://www.allcitycanvas.com/wp-content/uploads/2020/12/el-comic-de-1984-fido-nesti-h.png"
    },
];

const BannerCarousel2 = () =>{
    return(
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={0}
            slidesPerView = {1}
            autoplay = {{ delay: 4000, disableOnInteraction: false }}
            className="overflow-hidden w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] bg-gray-900"
        >
            {libros.map((libro) => (
                <SwiperSlide key={libro.id}>
                    <ItemBanner book={libro} />
                </SwiperSlide>
            ))}
            
            <SwiperButtonPrev>
                <ChevronLeft className="w-9 h-9 text-white"/>
            </SwiperButtonPrev>
            <SwiperButtonNext>
                <ChevronRight className="w-9 h-9 text-white" />
            </SwiperButtonNext>
            <CustomPagination totalSlides={libros.length} />
        </Swiper>
    )
}

export default BannerCarousel2