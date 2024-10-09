import React, { useState } from 'react'
import { Search, ShoppingCart, Menu, X, UserRound, MapPinHouse } from 'lucide-react'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'
import Logo from './Logo'

const NavigationBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <nav className="bg-black text-white">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between py-4">
                    <Logo />
                    <div className="hidden md:flex items-center space-x-6">
                        <SearchBar />
                        <Link>
                            <MapPinHouse size={25} className="mr-1 font-bold" strokeWidth={2.5} />
                        </Link>
                        <Link>
                            <ShoppingCart size={25} className="mr-1" strokeWidth={2.5} />
                        </Link>
                        <Link to="/login">
                            <UserRound size={25} className="mr-2" strokeWidth={2.5} />
                        </Link>
                    </div>
                    <button
                        className="md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>
        {isMenuOpen && (
            <div className="md:hidden">
                <div className="px-4 py-2">
                    <div className="flex items-center bg-white rounded-full mb-4">
                    <input
                        type="text"
                        placeholder="Buscar..."
                        className="bg-transparent text-black px-4 py-2 rounded-l-full focus:outline-none w-full"
                    />
                    <button className="bg-white p-2 rounded-r-full">
                        <Search className="text-black" size={20} />
                    </button>
                    </div>
                    <Link className="py-2 px-4 flex items-center justify-between hover:bg-neutral-900 rounded-lg">
                        <span>Tiendas</span>
                        <MapPinHouse size={20} className="mr-2" strokeWidth={2.5} />
                    </Link>
                    <a href="#" className="py-2 px-4 flex items-center justify-between">
                        <span>Carrito</span>
                        <ShoppingCart size={20} className="mr-2" strokeWidth={2.5} />
                    </a>
                    <Link className="py-2 px-4 flex items-center justify-between hover:bg-neutral-900 rounded-lg" to="/login">
                        <span>Perfil</span>
                        <UserRound size={20} className="mr-2" strokeWidth={2.5} />
                    </Link>
                </div>
            </div>
        )}
        </nav>
    )
}

export default NavigationBar