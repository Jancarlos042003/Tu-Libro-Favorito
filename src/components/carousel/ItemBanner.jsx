const ItemBanner = ({book}) => {
    return(
        <div>
            <img
                src={book.image}
                alt={book.title}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="text-white text-center p-4 sm:p-6 md:p-8 lg:p-10 max-w-lg">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 md:mb-4">
                        {book.title}
                    </h2>
                    <p className="text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3">
                        por {book.author}
                    </p>
                    <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 hidden sm:block">
                        {book.description}
                    </p>
                    <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full transition duration-300">
                        Comprar ahora
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ItemBanner