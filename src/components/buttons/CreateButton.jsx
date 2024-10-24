const CreateButton = ({ Icon, palabra, onClick }) => {
    return(
        <button 
        onClick={onClick}
        className="flex bg-black w-auto rounded-lg justify-center items-center gap-1 py-2 px-3 hover:bg-neutral-800 mt-1">
            <Icon size={20} />
            <span className="md:flex hidden">Nuevo {palabra}</span>
        </button>
    )
}

export default CreateButton