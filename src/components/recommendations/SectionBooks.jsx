import BookCarousel from "../carousel/BookCarousel"

const SectionBooks = ( {titulo, libros} ) => {
    return(
        <div className="w-auto h-auto mt-5">
            <h1 className="text-black font-bold mb-2 text-xl">{titulo}</h1>
            <BookCarousel books={libros} />
        </div>
    )
}

export default SectionBooks