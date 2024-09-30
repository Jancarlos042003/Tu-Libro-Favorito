import React from 'react';
import ProductCard from './card/ProductCard';

function BookList() {
    const books = [
        { id: 1, title: "Invitación al viaje y otros cuentos inéditos", description: "Una colección de cuentos que refleja el estilo innovador y la prosa poética de Cortázar. Estos relatos exploran temas de identidad, el tiempo y lo fantástico, invitando al lector a un viaje a lo desconocido.", discount: 15, author: "Julio Ramón Ribeyro", price: 59.00, image: "https://th.bing.com/th/id/R.d06a59c476471cadfb6977a9ff0c442e?rik=FY4fBr9YhPBORA&pid=ImgRaw&r=0" },
        { id: 2, title: "La palabra del mudo", description: "Un conjunto de relatos que abordan la soledad, la incomunicación y la búsqueda de significado en la vida. Ribeyro utiliza una prosa directa y sincera, retratando personajes que enfrentan su realidad de manera cruda y honesta.", author: "Julio Ramón Ribeyro", price: 65.00, image: "https://th.bing.com/th/id/OIP.YIo7rg3ECcpZpIRVrYaXHQHaMp?rs=1&pid=ImgDetMain" },
        { id: 3, title: "Don Quijote de La Mancha", description: "Considerada la primera novela moderna, sigue las aventuras de un hidalgo que, obsesionado con las historias de caballería, decide convertirse en caballero andante. Acompañado por su fiel escudero Sancho Panza, exploran temas de locura, realidad y la lucha por los ideales.", author: "Miguel de Cervantes", price: 59.00, image: "https://th.bing.com/th/id/OIP.p2Qht0iMCaSgQb3wbzHukAHaKN?w=203&h=281&c=7&r=0&o=5&pid=1.7" },
        { id: 4, title: "La Ciudad y los Perros", description: "Una novela que relata la vida de un grupo de cadetes en una escuela militar en Perú. A través de una narrativa no lineal, aborda temas de violencia, amistad y la lucha contra el sistema, reflexionando sobre la masculinidad y la corrupción en la sociedad.", author: "Mario Vargas LLosa", price: 80.00, image: "https://th.bing.com/th/id/R.00a3be4f6318b43db27ba13bd5a68fac?rik=WQ5jCbucUeBGcw&pid=ImgRaw&r=0" },
        { id: 5, title: "El Alquimista", description: "Una saga familiar que entrelaza lo mágico y lo real, narrando la vida de varias generaciones de la familia Trueba en Chile, abordando temas de amor, política y la lucha por la justicia social.", author: "Paulo Coelho", price: 70.00, image: "https://th.bing.com/th/id/OIP.sL5SnA4DPVj2aAJ0TRa05wHaLH?rs=1&pid=ImgDetMain" },
        { id: 6, title: "Moby Dick", description: "La historia del obsesivo Capitán Ahab y su búsqueda para vengarse de la ballena blanca Moby Dick, explorando temas de la naturaleza humana, la obsesión y la lucha contra el destino.", author: "Herman Melville", price: 89.00, image: "https://th.bing.com/th/id/R.19271e32a5263019693fd465f354773b?rik=Tzcvow6gTjUpQg&riu=http%3a%2f%2ffc02.deviantart.net%2ffs71%2ff%2f2013%2f298%2f5%2fe%2fmoby_dick_book_cover_by_mario0357-d6rt002.jpg&ehk=ZNqoikEb%2fJLDT9q4944mzn%2bjg3zZgFed8%2fUZHqFKmD0%3d&risl=&pid=ImgRaw&r=0" },
        { id: 7, title: "Los Miserables", description: "Una novela épica que sigue la vida de Jean Valjean, un exconvicto en su búsqueda de redención en el contexto de la Francia del siglo XIX, abordando la injusticia social y el amor.", author: "Victor Hugo", price: 75.00, image: "https://th.bing.com/th/id/R.c63ca9afb5bd742e8ee4a7ea3619fb05?rik=tpOELHF7AcFMOw&pid=ImgRaw&r=0" },
        { id: 8, title: "El nombre de la rosa", description: "Una novela de misterio ambientada en un monasterio medieval, donde un fraile franciscano investiga una serie de asesinatos, explorando temas de fe, conocimiento y la lucha entre la razón y la fe.", author: "Umberto Eco", price: 59.00, image: "https://th.bing.com/th/id/R.29ed1395aaa28a4675bef19f029b77bd?rik=k7ZWQ0YRwiybYA&riu=http%3a%2f%2fwww.enclavedecine.com%2fwp-content%2fuploads%2f2013%2f04%2fEl-nombre-de-la-rosa.jpg&ehk=reoJoPI9Wa1hCLbgCMQTfOBuwoQ%2f1IvjNHBY4B6F%2fDc%3d&risl=&pid=ImgRaw&r=0" },
        { id: 9, title: "La casa de los espíritus", description: "Una saga familiar que entrelaza lo mágico y lo real, narrando la vida de varias generaciones de la familia Trueba en Chile, abordando temas de amor, política y la lucha por la justicia social.", author: "Isabel Allende", price:66.00, image: "https://th.bing.com/th/id/OIP.MWoyqgnplLLQchtGsFP3-gHaLH?rs=1&pid=ImgDetMain" },
        { id: 10, title: "Hábitos atómicos", description: "Clear presenta un enfoque práctico para formar buenos hábitos y eliminar los malos, enfatizando la importancia de la identidad en el cambio de comportamiento.", author: "James Clear", price:89.00, image: "https://th.bing.com/th/id/OIP.lLkCR-Vqy_avi0bn_wXJLgHaLU?rs=1&pid=ImgDetMain" },
        // ... Añadir más libros
    ];

    return (
        <div className='h-screen overflow-y-auto scrollbar-hide p-2'>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 sm:gap-4">
                {books.map((book) => (
                <ProductCard key={book.id} book={book} />
                ))}
            </div>
        </div>
    );
}

export default BookList;