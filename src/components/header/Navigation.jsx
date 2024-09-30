import React from 'react';
import { useState } from 'react';

function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const categories = ['FICCION', 'NO FICCION', 'INFANTIL Y JUVENIL', 'BIENESTAR Y SALUD', 'AVENTURA', 'NEGOCIOS Y ECONOMIA', 'EDUCACION'];

    return (
        <nav className="bg-gray-200 p-2 shadow-lg w-full">
            <button className="py-2 bg-black lg:hidden w-full focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
                <div className="flex items-center justify-center">
                    <span className="mr-2">Categorías</span>
                    <span className="icon-[memory--menu-down]"></span>
                </div>
            </button>
            <ul className={`${isOpen ? 'block' : 'hidden'} pt-2 lg:pt-0 lg:flex lg:justify-center lg:space-x-5 flex-nowrap text-center`}>
                {categories.map((category, index) => (
                <li key={index} className='p-2 lg:p-1 hover:bg-slate-300 rounded-lg'>
                    <a href="#" className="text-gray-700 hover:text-indigo-600 font-medium">{category}</a>
                </li>
                ))}
            </ul>
        </nav>
    );
}

export default Navigation;