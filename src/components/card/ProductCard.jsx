import BookImage from "./BookImage"
import PriceDisplay from "./PriceDisplay";
import AddToCartButton from "./AddToCartButton";

const ProductCard = ({ book }) => {

    return (
        <div 
            className="w-full bg-gray-100 rounded-lg overflow-hidden cursor-pointer relative transition-transform duration-300 ease-in-out"
        >
            <BookImage 
                image={book.image}
                title={book.title}
                discount={book.discount}
                description={book.description}
            />
    
            <div className="w-full h-36 p-3 flex flex-col justify-between">
                <h3 className="text-black text-sm font-bold mb-1 uppercase line-clamp-2">{book.title}</h3>
                <div>
                    <p className="text-gray-700 uppercase text-xs font-bold truncate">{book.author}</p>
                    <div className="flex justify-between items-center mt-2 sm:mt-4">
                    <PriceDisplay 
                        price={book.price}
                        discount={book.discount}
                        fontSize={"base"}
                    />
                    <AddToCartButton />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;