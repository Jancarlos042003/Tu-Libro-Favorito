import React from 'react';
import { Library, BookCopy, TriangleAlert } from 'lucide-react';
import ButtonNav from './ButtonNav';
import { Link } from 'react-router-dom';
import UserSection from './UserSection';

const Sidebar = () => {


    const user = {
        nombre: 'Alex García',
        email: 'alex@ejemplo.com',
        iniciales: 'AG'
    };

    const handleLogout = () => {
        // Implementar lógica de cierre de sesión aquí
        console.log('Cerrando sesión...');
    };

    return (
        <nav className="fixed left-0 top-0 h-screen w-16 bg-gray-900 flex flex-col items-center py-4 space-y-8">
            <div className="flex flex-col items-center space-y-4">
                <Link>
                    <ButtonNav Icon={Library} hover={"Libros"} />
                </Link>

                <Link>
                    <ButtonNav Icon={BookCopy} hover={"Inventario"} />
                </Link>
                
                <Link>
                    <ButtonNav Icon={TriangleAlert} hover={"Alertas"} />
                </Link>
            </div>

            <div className="flex-grow" />

            <UserSection 
                usuario={user}
                onLogout={handleLogout}
            />
        </nav>
    );
};

export default Sidebar;