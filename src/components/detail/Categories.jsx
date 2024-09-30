const Categories = ({categories}) => {
    return(
        <div className="flex gap-1 my-3">
            {categories.map((categorie) => (
                <div key={categorie.id} className="bg-black rounded-2xl px-3 py-1 flex">
                    <span className="text-white text-sm font-medium">{categorie.name}</span>
                </div>
            ))}
        </div>
    )
}

export default Categories