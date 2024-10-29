import { Loader } from 'lucide-react';
import BannerCarousel from '../components/carousel/BannerCarousel';
import SectionBooks from '../components/recommendations/SectionBooks';
import useFetch from '../hooks/useFetch';
import FilterCategory from '../components/filter/FilterCategory';

const Home = () => {
    const {data: libros, error: errorLibro, loading: loadingLibro} = useFetch("api/libro")
    const {data: categorias, error: errorCategoria, loading: loadingCategoria} = useFetch("api/categoria")
    
    if(loadingCategoria) return <Loader />
    if(errorCategoria) return <h1 className="text-black">ERROR EN LA PETICIÓN.</h1>

    if(loadingLibro) return <Loader />
    if(errorLibro) return <h1 className="text-black">ERROR EN LA PETICIÓN.</h1>

    return (
        <div className="min-h-screen flex flex-col">
            <main className="flex-grow">
                <BannerCarousel />
                {categorias.map(c => (
                    <div key={c.id} className='container mx-auto'>
                        <SectionBooks titulo={c.nombre} libros={FilterCategory(libros, c.nombre)} />
                    </div>
                ))}
            </main>
        </div>
    );
};

export default Home;