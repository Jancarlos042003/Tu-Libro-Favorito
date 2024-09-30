import React, { useState, useRef, useEffect } from 'react';
import { Search } from 'lucide-react';

const ExpandableSearchBar = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const inputRef = useRef(null);

    useEffect(() => {
        if (isExpanded && inputRef.current) {
        inputRef.current.focus();
        }
    }, [isExpanded]);

    const handleToggle = () => {
        setIsExpanded(!isExpanded);
        if (!isExpanded) {
        setSearchTerm('');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Searching for:', searchTerm);
        // Aquí puedes implementar la lógica de búsqueda
    };

    return (
        <div className="relative">
        <form onSubmit={handleSubmit} className="flex items-center">
            <button
            type="button"
            onClick={handleToggle}
            className={`bg-indigo-600 text-white p-2 rounded-l ${
                isExpanded ? 'rounded-r-none' : 'rounded-r'
            } transition-all duration-300 ease-in-out focus:outline-none`}
            >
                <Search size={20} />
            </button>
            <input
            ref={inputRef}
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar..."
            className={`bg-white text-gray-900 px-4 py-2 rounded-r transition-all duration-300 ease-in-out ${
                isExpanded ? 'w-64 opacity-100' : 'w-0 opacity-0'
            } focus:outline-none`}
            />
        </form>
        </div>
    );
};

export default ExpandableSearchBar;