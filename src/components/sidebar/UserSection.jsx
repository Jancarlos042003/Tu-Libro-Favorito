import { useState } from 'react';
import { User, LogOut } from 'lucide-react';

const UserMenu = ({ onLogout }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleLogout = () => {
        if (typeof onLogout === 'function') {
            onLogout();
        }
        setIsOpen(false);
    };

    return (
        <div className="relative">
            {isOpen && (
                <>
                <div
                    className="fixed inset-0 z-10"
                    onClick={() => setIsOpen(false)}
                />

                <div className="absolute left-full top-0 ml-2 z-20">
                    <div className="bg-white w-auto dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
                        <button
                            onClick={handleLogout}
                            className="w-full flex items-center gap-2 p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                        >
                            <LogOut size={18} />
                            <span>Salir</span>
                        </button>
                    </div>
                </div>
                </>
            )}

            <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
                <User className="w-6 h-6 text-gray-600 dark:text-gray-300" />
            </button>
        </div>
    );
};

export default UserMenu;
