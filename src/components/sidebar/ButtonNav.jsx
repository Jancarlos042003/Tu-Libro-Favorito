const ButtonNav = ({ Icon, isActive = false, hover }) => {
    return (
        <div className="relative group">
            <button 
                className={`p-3 rounded-full hover:bg-neutral-800 transition-colors`}
            >
                <Icon size={20} />
            </button>
            <div className="absolute top-1/2 left-full ml-2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                    {hover}
                </div>
            </div>
        </div>
    );
};

export default ButtonNav;
