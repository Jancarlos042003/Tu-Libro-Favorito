import BannerCarousel from '../components/carousel/BannerCarousel';
import SectionBooks from '../components/recommendations/SectionBooks';
import useFetch from '../hooks/useFetch';
import Loader from '../components/atoms/Loader';
import { useEffect, useState } from 'react';
import { API_URL } from '../../env';

const Home = () => {
    const {data: categorias, error: errorCategoria, loading: loadingCategoria} = useFetch("api/categoria")
    const [categoriaLibros, setCategoriaLibros] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchLibrosPorCategoria = async () => {
            if (categorias && categorias.length > 0) {
                try {
                    // Se utilizo Promise.all para obtener libros de todas las categorías simultáneamente
                    const librosPorCategoria = await Promise.all(
                        categorias.map(async (categoria) => {
                            const response = await fetch(`${API_URL}/api/libro/categoria/${categoria.id}`);
                            const libros = await response.json();
                            return { 
                                categoriaId: categoria.id, 
                                libros: libros.slice(0, 12) 
                            };
                        })
                    );

                    // Convertir el array en un objeto
                    const librosPorCategoriaObj = librosPorCategoria.reduce((acc, item) => {
                        acc[item.categoriaId] = item.libros;
                        return acc;
                    }, {});

                    setCategoriaLibros(librosPorCategoriaObj);
                } catch (error) {
                    console.error('Error fetching books for categories:', error);
                } finally {
                    setIsLoading(false);
                }
            } else if (!loadingCategoria) {
                // Si no hay categorías y no hay carga, establezca la carga como false
                setIsLoading(false);
            }
        };

        if (!loadingCategoria) {
            fetchLibrosPorCategoria();
        }
    }, [categorias, loadingCategoria]);
    
    if (isLoading) return <Loader />;
    if (errorCategoria) return <h1 className="text-black">ERROR EN LA PETICIÓN.</h1>

    return (
        <div className="min-h-screen flex flex-col">
            <main className="flex-grow">
                <BannerCarousel />
                {categorias.map(c => { 
                    const libros = categoriaLibros[c.id] || [];
                    return(
                        <div key={c.id} className='container mx-auto'>
                            <SectionBooks titulo={c.nombre} idCategoria={c.id} libros={libros} />
                        </div>
                    )
                })}
            </main>
        </div>
    );
};

export default Home;