import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {

    const [termino, setTermino] = useState("");
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (termino.trim()) {
            navigate(`/buscar?q=${encodeURIComponent(termino)}`);
        }
    };

    return (
        <div className="flex items-center">
            <div className=" w-full bg-white rounded-full">
                <form className=' flex items-center justify-between' onSubmit={handleSearch}>
                    <input
                        type="text"
                        placeholder="Buscar..."
                        value={termino}
                        onChange={(e) => setTermino(e.target.value)}
                        className="bg-transparent text-black px-4 py-2 rounded-l-full focus:outline-none"
                    />
                    <button className="bg-white p-2 rounded-r-full">
                        <Search className="text-black" size={20} strokeWidth={2.5} />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SearchBar;