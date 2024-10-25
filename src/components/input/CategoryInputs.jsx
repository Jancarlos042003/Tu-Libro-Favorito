import Close from "../buttons/Close";
import AddButton from "../buttons/AddButton";

const CategoryInputs = ({ title, items, setItems, disabled, availableOptions = [] }) => {
    const addItem = () => {
        setItems([...items, '']);
    };

    const removeItem = (index) => {
        const newItems = items.filter((_, i) => i !== index);
        setItems(newItems);
    };

    const updateItem = (index, value) => {
        const newItems = [...items];
        newItems[index] = value;
        setItems(newItems);
    };

    return (
        <div className="space-y-2">
            <label className="text-base font-medium text-gray-700">
                {title}
                {items.map((item, index) => (
                    <div key={index} className="flex space-x-2 mb-2">
                        <select
                            value={item}
                            onChange={(e) => updateItem(index, e.target.value)}
                            disabled={disabled}
                            className="text-black w-full px-3 py-3 border border-gray-300 rounded-md focus:ring-0 focus:ring-black focus:border-black outline-none transition-colors disabled:bg-gray-100"
                        >
                            <option value="">Seleccione una opción</option>
                            {availableOptions.map((option) => (
                                <option key={option.id} value={option.id}>
                                    <span className="text-black">{option.nombre}</span>
                                </option>
                            ))}
                        </select>

                        {!disabled && items.length > 1 && (
                            <Close onClick={() => removeItem(index)} />
                        )}
                    </div>
                ))}
            </label>
            {!disabled && (
                <AddButton onClick={addItem} palabra={"Categoría"} />
            )}
        </div>
    );
};



export default CategoryInputs