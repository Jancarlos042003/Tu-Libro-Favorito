import { Link } from "react-router-dom"
import BookCarousel from "../carousel/BookCarousel"

const SectionBooks = ( {titulo, libros, idCategoria} ) => {
    return(
        <div className="w-auto h-auto my-20 px-2 xl:px-0">
            <div className="flex justify-between mb-5">
                <h1 className="text-black font-bold mb-2 text-2xl uppercase">{titulo}</h1>
                <Link to={`/categoria/${idCategoria}`}>
                    <button className="text-black text-sm uppercase font-bold px-5 py-2 rounded-lg bg-neutral-200 hover:bg-neutral-300">
                        Ver más
                    </button>
                </Link>
            </div>
            <BookCarousel books={libros} />
        </div>
    )
}

export default SectionBooks