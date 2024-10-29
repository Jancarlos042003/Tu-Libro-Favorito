const Categories = ({categorias}) => {
    return(
        <div className="flex gap-1 my-3">
            {categorias.map((categoria) => (
                <div key={categoria.id} className="bg-black rounded-2xl px-3 py-1 flex">
                    <span className="text-white text-sm font-medium">{categoria.nombre}</span>
                </div>
            ))}
        </div>
    )
}

export default Categories