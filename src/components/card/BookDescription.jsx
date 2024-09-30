const BookDescription = ({ description, isVisible }) => (
    <div
        className={`absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 transition-opacity duration-300 ${
            isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        aria-hidden={!isVisible}
    >
        <p className="text-white text-xs sm:text-sm overflow-y-auto max-h-full">
            <span className="font-bold">Descripción: </span>
            {description}
        </p>
    </div>
);

export default BookDescription