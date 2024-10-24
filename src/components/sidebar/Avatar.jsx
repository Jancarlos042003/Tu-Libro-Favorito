const Avatar = ({iniciales, onClick}) => {
    return (
        <div className="relative group">
            <button 
            className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-purple-500 ring-offset-2 ring-offset-gray-900 transition-all duration-300 hover:ring-purple-400" 
            onClick={onClick}>
                <div className="w-full h-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                    <span className="text-white font-medium text-sm">{iniciales}</span>
                </div>
            </button>
            <div className="absolute top-1/2 left-full ml-2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                    Mi Perfil
                </div>
            </div>
        </div>
    )
}   

export default Avatar