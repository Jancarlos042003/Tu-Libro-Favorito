import React, { useState } from 'react';
import { Menu, ShoppingCart, User, Store } from 'lucide-react';
import StyledSearchBar from './StyledSearchBar';

const NavigationBar = ({ title = "Tu Libro Favorito", menuItems = ['Tiendas', 'Carrito', 'Perfil'] }) => {
    const [showMenu, setShowMenu] = useState(false);

    const getIcon = (item) => {
        switch (item.toLowerCase()) {
        case 'tiendas': return <Store size={20} />;
        case 'carrito': return <ShoppingCart size={20} />;
        case 'perfil': return <User size={20} />;
        default: return null;
        }
    };

    const MenuItem = ({ item }) => (
        <a
        href="#"
        className="hover:text-gray-300 hover:font-bold transition-colors duration-200 flex items-center justify-between w-full md:w-auto py-2 px-3"
        onClick={() => setShowMenu(false)}
        >
            <span className="mr-2 md:mr-1 block sm:hidden lg:block">{item}</span>
            {getIcon(item)}
        </a>
    );

    return (
        <nav className="bg-black text-white px-4 sticky top-0 z-50 shadow-md">
            <div className="container mx-auto flex flex-wrap justify-between items-center py-2">
                <div className="flex items-center py-4">
                    <span className="font-bold text-xl md:text-2xl cursor-pointer">{title}</span>
                </div>

                <button
                className="md:hidden flex items-center focus:outline-none py-2 px-3 bg-black"
                onClick={() => setShowMenu(!showMenu)}
                >
                    <Menu size={24} />
                </button>

                <div className={`${showMenu ? 'flex' : 'hidden'} md:flex flex-col md:flex-row items-start md:items-center w-full md:w-auto`}>
                    <div className="w-full md:w-auto mb-4 md:mb-0 md:mr-4 order-1 md:order-none">
                        <StyledSearchBar />
                    </div>
                    <div className="flex flex-col md:flex-row w-full md:w-auto">
                        {menuItems.map((item, index) => (
                            <MenuItem key={index} item={item} />
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavigationBar;