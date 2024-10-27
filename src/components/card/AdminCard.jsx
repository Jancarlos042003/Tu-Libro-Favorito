import BookImage from "./BookImage"
import DetailsButton from "../buttons/DetailsButton";
import { Link } from "react-router-dom";

const AdminCard = ({ book }) => {
    return (
        <div 
            className="w-full bg-gray-100 rounded-lg overflow-hidden cursor-pointer relative transition-all duration-300 ease-in-out hover:shadow-lg"
        >
            <BookImage 
                image={book.imgPortada}
                title={book.titulo}
                discount={book.descuento}
                description={book.descripcion}
            />
    
            <div className="w-full h-32 p-3 flex flex-col justify-between">
                <h3 className="text-black text-sm font-bold mb-1 uppercase line-clamp-2">{book.titulo}</h3>
                <div>
                    <p className="text-gray-700 uppercase text-xs font-bold truncate">Autor: {book.autor}</p>
                    <Link to={`/admin/detalles/${book.id}`}>
                        <DetailsButton />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AdminCard;   