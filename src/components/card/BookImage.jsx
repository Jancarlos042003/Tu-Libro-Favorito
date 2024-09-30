import { useState, useCallback } from "react";
import BookDescription from "./BookDescription"
import DiscountBadge from "./DiscountBadge";

const BookImage = ({ image, title, discount, description }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = useCallback(() => setIsHovered(true), []);
    const handleMouseLeave = useCallback(() => setIsHovered(false), []);

    return (
        <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <img 
                src={image} 
                alt={title} 
                className="w-full h-72 md:h-80 object-cover"
                loading="lazy"
            />
            {discount > 0 && <DiscountBadge discount={discount} />}
            <BookDescription description={description} isVisible={isHovered} />
        </div>
    );
};

export default BookImage