import BannerCarousel from '../components/carousel/BannerCarousel';
import SectionBooks from '../components/recommendations/SectionBooks';

const Home = () => {
    const books = [
        { id: 1, title: "Invitación al viaje y otros cuentos inéditos", description: "Una colección de cuentos que refleja el estilo innovador y la prosa poética de Cortázar. Estos relatos exploran temas de identidad, el tiempo y lo fantástico, invitando al lector a un viaje a lo desconocido.", discount: 15, author: "Julio Ramón Ribeyro", price: 59.00, image: "https://th.bing.com/th/id/R.d06a59c476471cadfb6977a9ff0c442e?rik=FY4fBr9YhPBORA&pid=ImgRaw&r=0" },
        { id: 2, title: "La palabra del mudo", description: "Un conjunto de relatos que abordan la soledad, la incomunicación y la búsqueda de significado en la vida. Ribeyro utiliza una prosa directa y sincera, retratando personajes que enfrentan su realidad de manera cruda y honesta.", author: "Julio Ramón Ribeyro", price: 65.00, image: "https://th.bing.com/th/id/R.b914bed567ef08c11a012c3f40dc8820?rik=gPlclO%2b%2bwpfvng&pid=ImgRaw&r=0" },
        { id: 3, title: "Don Quijote de La Mancha", description: "Considerada la primera novela moderna, sigue las aventuras de un hidalgo que, obsesionado con las historias de caballería, decide convertirse en caballero andante. Acompañado por su fiel escudero Sancho Panza, exploran temas de locura, realidad y la lucha por los ideales.", author: "Julio Ramón Ribeyro", price: 59.00, image: "https://th.bing.com/th/id/OIP.p2Qht0iMCaSgQb3wbzHukAHaKN?w=203&h=281&c=7&r=0&o=5&pid=1.7" },
        { id: 4, title: "La Ciudad y los Perros", description: "Una novela que relata la vida de un grupo de cadetes en una escuela militar en Perú. A través de una narrativa no lineal, aborda temas de violencia, amistad y la lucha contra el sistema, reflexionando sobre la masculinidad y la corrupción en la sociedad.", author: "Julio Ramón Ribeyro", price: 70.00, image: "https://th.bing.com/th/id/R.d06a59c476471cadfb6977a9ff0c442e?rik=FY4fBr9YhPBORA&pid=ImgRaw&r=0" },
        { id: 5, title: "El Alquimista", description: "Una saga familiar que entrelaza lo mágico y lo real, narrando la vida de varias generaciones de la familia Trueba en Chile, abordando temas de amor, política y la lucha por la justicia social.", author: "Julio Ramón Ribeyro", price: 89.00, image: "https://th.bing.com/th/id/R.b914bed567ef08c11a012c3f40dc8820?rik=gPlclO%2b%2bwpfvng&pid=ImgRaw&r=0" },
        { id: 6, title: "Moby Dick", description: "La historia del obsesivo Capitán Ahab y su búsqueda para vengarse de la ballena blanca Moby Dick, explorando temas de la naturaleza humana, la obsesión y la lucha contra el destino.", author: "Julio Ramón Ribeyro", price: 67.00, image: "https://th.bing.com/th/id/R.d06a59c476471cadfb6977a9ff0c442e?rik=FY4fBr9YhPBORA&pid=ImgRaw&r=0" },
        { id: 7, title: "Los Miserables", description: "Una novela épica que sigue la vida de Jean Valjean, un exconvicto en su búsqueda de redención en el contexto de la Francia del siglo XIX, abordando la injusticia social y el amor.", author: "Julio Ramón Ribeyro", price: 74.00, image: "https://th.bing.com/th/id/R.b914bed567ef08c11a012c3f40dc8820?rik=gPlclO%2b%2bwpfvng&pid=ImgRaw&r=0" },
        { id: 8, title: "El nombre de la rosa", description: "Una novela de misterio ambientada en un monasterio medieval, donde un fraile franciscano investiga una serie de asesinatos, explorando temas de fe, conocimiento y la lucha entre la razón y la fe.", author: "Julio Ramón Ribeyro", price: 52.00, image: "https://th.bing.com/th/id/R.d06a59c476471cadfb6977a9ff0c442e?rik=FY4fBr9YhPBORA&pid=ImgRaw&r=0" },
        { id: 9, title: "La casa de los espíritus", description: "Una saga familiar que entrelaza lo mágico y lo real, narrando la vida de varias generaciones de la familia Trueba en Chile, abordando temas de amor, política y la lucha por la justicia social.", author: "Julio Ramón Ribeyro", price: 65.00, image: "https://th.bing.com/th/id/R.d06a59c476471cadfb6977a9ff0c442e?rik=FY4fBr9YhPBORA&pid=ImgRaw&r=0" },
        // ... Añadir más libros
    ];
    

    return (
        <div className="min-h-screen flex flex-col">
            <main className="flex-grow">
                <BannerCarousel />
                <div className='container mx-auto'>
                    <SectionBooks text={"LOS MÁS VENDIDOS"} books={books} />
                </div>
            </main>
        </div>
    );
};

export default Home;