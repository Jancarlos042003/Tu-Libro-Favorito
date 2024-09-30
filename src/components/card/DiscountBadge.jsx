const DiscountBadge = ({ discount }) => (
    <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-xs sm:text-sm">
        -{discount}%
    </div>
);

export default DiscountBadge