import { Library, BookCopy, TriangleAlert } from 'lucide-react';
import ButtonNav from './ButtonNav';
import { Link, useNavigate } from 'react-router-dom';
import UserSection from './UserSection';
import { deleteToken } from '../../helpers/auth';

const Sidebar = () => {
    const nav = useNavigate()

    const handleLogout = () => {
        deleteToken()
        nav("/login")
    };

    return (
        <nav className="fixed left-0 top-0 h-screen w-12 sm:w-16 bg-black flex flex-col items-center py-4 space-y-8 z-50">
            <div className="flex flex-col items-center space-y-4">
                <Link>
                    <ButtonNav Icon={Library} hover={"Libros"} />
                </Link>

                <Link to={"/admin/inventario"}>
                    <ButtonNav Icon={BookCopy} hover={"Inventario"} />
                </Link>
                
                <Link to={"/admin/alertas"}>
                    <ButtonNav Icon={TriangleAlert} hover={"Alertas"} />
                </Link>
            </div>

            <div className="flex-grow" />

            <UserSection 
                onLogout={handleLogout}
            />
        </nav>
    );
};

export default Sidebar;