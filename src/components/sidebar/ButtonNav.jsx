const ButtonNav = ({ Icon, isActive = false, hover }) => {
    return (
        <div className="relative group">
            <button 
                className={`p-3 rounded-lg transition-colors ${isActive 
                        ? 'text-blue-500' 
                        : 'text-gray-400 hover:bg-gray-800'
                    }`}
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
