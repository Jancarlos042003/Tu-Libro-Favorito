import BookCarousel from "../carousel/BookCarousel"

const SectionBooks = ( {titulo, libros} ) => {
    return(
        <div className="w-auto h-auto my-12 px-2 md:px-0">
            <h1 className="text-black font-bold mb-2 text-xl">{titulo}</h1>
            <BookCarousel books={libros} />
        </div>
    )
}

export default SectionBooks