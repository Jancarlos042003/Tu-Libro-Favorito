import React from 'react';
import { X } from 'lucide-react'; 

const SelectCategory = ({
    label,
    options,
    selectedItems,
    onItemChange,
    onItemRemove,
    disabled = false,
}) => {
    return (
        <div className="space-y-2 md:col-span-2">
            <label className="text-base font-medium text-gray-700">
                {label}
                <select
                    className="text-black w-full px-3 py-3 border border-gray-300 rounded-md focus:ring-0 focus:ring-black focus:border-black outline-none transition-colors appearance-none bg-white"
                    onChange={(e) => onItemChange(e.target.value)}
                    disabled={disabled}
                >
                    <option value="">Seleccione {label.toLowerCase()}</option>
                    {options.map((option) => (
                        <option
                            key={option.id}
                            value={option.id}
                            disabled={selectedItems.some(item => item.id === option.id)}
                        >
                            {option.name}
                        </option>
                    ))}
                </select>
            </label>
            <div className="flex flex-wrap gap-2 mt-2">
                {selectedItems.map((item) => (
                    <div
                        key={item.id}
                        className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-full"
                    >
                        <span>{item.name}</span>
                        <button
                            type="button"
                            onClick={() => onItemRemove(item.id)}
                            className="text-gray-500 hover:text-gray-700"
                        >
                            <X size={14} />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SelectCategory;
