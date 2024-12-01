import React, { useMemo } from 'react';

const PriceDisplay = ({ price, discount, fontSize = 'base' }) => {
    const discountedPrice = useMemo(() => {
        return discount
        ? (price * (1 - discount / 100)).toFixed(2)
        : price.toFixed(2);
    }, [price, discount]);

    const fontSizeClasses = {
        xs: 'text-xs',
        sm: 'text-sm',
        base: 'text-base',
        lg: 'text-lg',
        xl: 'text-xl',
        '2xl': 'text-2xl',
    };

    const fontSizeClass = fontSizeClasses[fontSize] || 'text-base';
    const smallerFontSizeClass = fontSizeClasses[
        ['xs', 'sm', 'base', 'lg', 'xl', '2xl'][
        Math.max(0, ['xs', 'sm', 'base', 'lg', 'xl', '2xl'].indexOf(fontSize) - 1)
        ]
    ] || 'text-sm';

    return (
        <div className={`${fontSizeClass} flex flex-col`}>
            {discount > 0 && (
                <span className={`line-through text-gray-500 mr-2 ${smallerFontSizeClass}`}>
                ${price.toFixed(2)}
                </span>
            )}
            <span className={`font-bold ${discount > 0 ? 'text-red-600' : 'text-gray-800'}`}>
                ${discountedPrice}
            </span>
        </div>
    );
};

export default React.memo(PriceDisplay);