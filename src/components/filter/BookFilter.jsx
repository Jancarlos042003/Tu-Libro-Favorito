import React, { useState } from "react";
import ExpandableFilter from "./ExpandableFilter";
import { Filter, X } from "lucide-react";

const BookFilter = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleFilters = () => setIsOpen(!isOpen);

    const [filters, setFilters] = useState({
        authors: [],
        publishers: [],
        subcategories: []
    });

    const filterData = {
        authors: [
        "Gabriel García Márquez", "Isabel Allende", "Jorge Luis Borges", 
        "Mario Vargas Llosa", "Julio Cortázar", "Pablo Neruda", 
        "Octavio Paz", "Carlos Fuentes"
        ],
        publishers: [
        "Penguin Random House", "HarperCollins", "Simon & Schuster", 
        "Macmillan Publishers", "Hachette Book Group", "Planeta",
        "Penguin Random House", "HarperCollins", "Simon & Schuster", 
        "Macmillan Publishers", "Hachette Book Group", "Planeta"
        ],
        subcategories: [
        "Novela", "Poesía", "Ensayo", "Cuento", "Biografía", 
        "Ciencia Ficción", "Fantasía", "Historia", "Filosofía",
        "Economía", "Matemáticas"
        ]
    };

    const handleFilterChange = (filterType, selectedOptions) => {
        setFilters(prevFilters => ({
        ...prevFilters,
        [filterType.toLowerCase()]: selectedOptions
        }));
    };

    return ( 
        <>
            {isOpen && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden"
                    onClick={toggleFilters}
                />
            )}
            
            <button 
                onClick={toggleFilters}
                className="lg:hidden fixed bottom-4 right-4 bg-black text-white p-3 rounded-full shadow-lg z-40"
            >
                <Filter size={24} />
            </button>

            <div className={`
                fixed lg:relative top-0 right-0 h-screen w-80 lg:w-[390px] z-50 lg:z-0
                bg-white text-black shadow-md p-4 
                overflow-y-auto scrollbar-hide
                transition-transform duration-300 ease-in-out
                ${isOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'}
            `}>
                <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1">
                        <Filter size={20}/>
                        <h2 className="text-2xl font-bold">Filtros</h2>
                    </div>
                    <button onClick={toggleFilters} className="lg:hidden">
                        <X size={19} />
                    </button>
                </div>
                
                <aside className="flex flex-col gap-3 overflow-y-auto scrollbar-hide">
                    {Object.entries(filterData).map(([filterType, options]) => (
                        <ExpandableFilter
                            key={filterType}
                            title={filterType.charAt(0).toUpperCase() + filterType.slice(1)}
                            options={options}
                            onFilterChange={handleFilterChange}
                        />
                    ))}
                </aside>
            </div>
        </>
    );
};

export default BookFilter;