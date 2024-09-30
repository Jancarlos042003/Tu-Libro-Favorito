import React, { useCallback } from 'react';
import { Star } from 'lucide-react';

const StarRating = ({ 
    rating, 
    setRating, 
    userRating, 
    setUserRating, 
    totalStars,
    size,
    activeColor,
    inactiveColor
}) => {
    const handleClick = useCallback((index) => {
        setRating(index);
        setUserRating(index);
    }, [setRating, setUserRating]);

    const handleMouseEnter = useCallback((index) => {
        setUserRating(index);
    }, [setUserRating]);

    const handleMouseLeave = useCallback(() => {
        setUserRating(rating);
    }, [setUserRating, rating]);

    return (
        <div className="flex" role="group" aria-label={`Rate this item ${rating} out of ${totalStars} stars`}>
            {[...Array(totalStars)].map((_, index) => {
                const starValue = index + 1;
                return (
                    <button
                        type="button"
                        key={starValue}
                        className={`bg-transparent border-none outline-none cursor-pointer ${
                            starValue <= (userRating || rating) ? activeColor : inactiveColor
                        }`}
                        onClick={() => handleClick(starValue)}
                        onMouseEnter={() => handleMouseEnter(starValue)}
                        onMouseLeave={handleMouseLeave}
                        aria-label={`Rate ${starValue} star${starValue !== 1 ? 's' : ''}`}
                        aria-pressed={starValue <= rating}
                    >
                        <Star 
                            className={size}
                            fill={starValue <= (userRating || rating) ? "currentColor" : "none"} 
                        />
                    </button>
                );
            })}
        </div>
    );
};

export default React.memo(StarRating);