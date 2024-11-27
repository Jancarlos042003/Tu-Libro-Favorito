import BannerCarousel from '../components/carousel/BannerCarousel';
import SectionBooks from '../components/recommendations/SectionBooks';
import useFetch from '../hooks/useFetch';
import FilterCategory from '../components/filter/FilterCategory';
import Loader from '../components/atoms/Loader';

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
                {categorias.map(c => { 
                    // Limite de 10 libros por categoria
                    const limitedLibros = FilterCategory(libros, c.nombre).slice(0, 12);

                    return(
                        <div key={c.id} className='container mx-auto'>
                            <SectionBooks titulo={c.nombre} idCategoria={c.id} libros={limitedLibros} />
                        </div>
                    )
                })}
            </main>
        </div>
    );
};

export default Home;