const Close = ({onClose}) => {
    return(
        <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500"
        >
            <X className="h-5 w-5" />
        </button>
    )
}

export default Close