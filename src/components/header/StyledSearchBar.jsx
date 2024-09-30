import React from 'react';
import { Search } from 'lucide-react';

const StyledSearchBar = () => {
    return (
        <div className="relative flex items-center w-full max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-black" />
            </div>
            <input
                type="text"
                placeholder="Buscar..."
                className="w-full pl-10 pr-4 py-2 rounded-full border-2 focus:outline-none focus:border-gray-400 bg-white text-gray-900 placeholder-gray-500"
            />
        </div>
    );
};

export default StyledSearchBar;