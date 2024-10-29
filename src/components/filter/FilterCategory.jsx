// Función para filtrar libros por nombre de categoría
const FilterCategory =(libros, categoriaBuscada) => {
    return libros.filter(libro =>
        libro.categorias.some(categoria => categoria.nombre === categoriaBuscada)
    );
}

export default FilterCategory