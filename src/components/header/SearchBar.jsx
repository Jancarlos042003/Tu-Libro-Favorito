import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = () => {
    return (
        <div className="flex items-center">
            <div className="hidden md:flex items-center bg-white rounded-full">
                <input
                    type="text"
                    placeholder="Buscar..."
                    className="bg-transparent text-black px-4 py-2 rounded-l-full focus:outline-none"
                />
                <button className="bg-white p-2 rounded-r-full">
                    <Search className="text-black" size={20} strokeWidth={2.5} />
                </button>
            </div>
        </div>
    );
};

export default SearchBar;