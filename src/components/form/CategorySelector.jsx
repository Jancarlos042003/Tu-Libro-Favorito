const CategorySelector = ({ isEditing, formData, setFormData, categories }) => {
    // Modo lectura: mostrar solo las categorías seleccionadas
    if (!isEditing) {
        return (
        <div className="space-y-2">
            <label className="text-base font-medium text-black block">
            Categorías
            </label>
            <div className="flex flex-wrap gap-2">
            {formData.categorias.map((categoria) => (
                <span
                key={categoria}
                className="bg-black px-3 py-1 rounded-full text-sm"
                >
                {categoria}
                </span>
            ))}
            {formData.categorias.length === 0 && (
                <span className="text-gray-500 text-sm">
                No hay categorías seleccionadas
                </span>
            )}
            </div>
        </div>
        );
    }

    // Modo edición: mostrar el selector múltiple
    return (
        <div className="space-y-2">
        <label className="text-base font-medium text-black block">
            Categorías
            <select
            multiple
            value={categories.filter(cat => formData.categorias.includes(cat.name)).map(cat => cat.id)}
            onChange={(e) => {
                const selectedIds = Array.from(e.target.selectedOptions, option => parseInt(option.value));
                const selectedCategories = categories.filter(cat => selectedIds.includes(cat.id)).map(cat => cat.name);
                setFormData({ ...formData, categorias: selectedCategories });
            }}
            className="text-black w-full px-3 py-3 border border-gray-300 rounded-md focus:ring-0 focus:ring-black focus:border-black outline-none transition-colors"
            >
            {categories.map((option) => (
                <option key={option.id} value={option.id}>
                {option.name}
                </option>
            ))}
            </select>
            <span className="text-sm text-gray-500 mt-1 block">
                Mantén presionado Ctrl (Cmd en Mac) para seleccionar múltiples opciones
            </span>
        </label>
        </div>
    );
};

export default CategorySelector;