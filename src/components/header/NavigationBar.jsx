import { useContext, useEffect, useState } from 'react'
import { Menu, X, UserRound, MapPinHouse, LogOut } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import SearchBar from './SearchBar'
import Logo from './Logo'
import { token } from '../../helpers/auth'
import Cart from '../cart/Cart'
import CartIcon from '../cart/CartIcon'
import UserButton from './UserButton'
import { UserContext } from '../../context/UserContext'


const NavigationBar = () => {

    const { logout } = useContext(UserContext)

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const nav = useNavigate()

    useEffect(() => {
        setIsAuthenticated(token() !== null);
    }, []);

    const handleLogout = () => {
        logout()
        setIsAuthenticated(false);
        setIsUserMenuOpen(false);
        nav("/")
    };

    // VENTANA DE CARRITO DE COMPRAS
    const [isCartOpen, setIsCartOpen] = useState(false);

    const openCart = () => {
        setIsCartOpen(true);
    };

    const closeCart = () => {
        setIsCartOpen(false);
    };

    return (
        <div>
            <nav className="bg-black text-white">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between py-4">
                        <Logo />
                        <div className="hidden md:flex items-center space-x-6">
                            <SearchBar />
                            <Link>
                                <MapPinHouse size={25} className="mr-1 font-bold" strokeWidth={2.5} />
                            </Link>
                            <button onClick={openCart}>
                                <CartIcon size={24} />
                            </button>
                            <UserButton 
                                isAuthenticated={isAuthenticated}
                                isUserMenuOpen={isUserMenuOpen}
                                setIsUserMenuOpen={() => setIsUserMenuOpen(!isUserMenuOpen)}
                                handleLogout={handleLogout}
                            />
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
                            <SearchBar />
                            <Link className="py-2 px-4 flex items-center justify-between hover:bg-neutral-900 rounded-lg">
                                <span>Tiendas</span>
                                <MapPinHouse size={20} className="mr-2" strokeWidth={2.5} />
                            </Link>
                            <button 
                            className="w-full py-2 px-4 flex items-center justify-between hover:bg-neutral-900 rounded-lg"
                            onClick={openCart}
                            >
                                <span>Carrito</span>
                                <CartIcon size={20} />
                            </button>

                            {isAuthenticated ? (
                                <button 
                                    onClick={handleLogout}
                                    className="w-full py-2 px-4 flex items-center justify-between hover:bg-neutral-900 rounded-lg"
                                >
                                    <span>Cerrar sesión</span>
                                    <LogOut size={20} className="mr-2" strokeWidth={2.5} />
                                </button>
                            ) : (
                                <Link 
                                    className="py-2 px-4 flex items-center justify-between hover:bg-neutral-900 rounded-lg" 
                                    to="/login"
                                >
                                    <span>Perfil</span>
                                    <UserRound size={20} className="mr-2" strokeWidth={2.5} />
                                </Link>
                            )}
                        </div>
                    </div>
                )}
            </nav>
            {isCartOpen && <Cart onClose={closeCart} />}
        </div>
    );
};

export default NavigationBar;