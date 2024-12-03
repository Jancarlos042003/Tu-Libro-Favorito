import { AlertCircle, Search } from "lucide-react";

const NoResultsFound = ({ query }) => {
    return (
    <div className="flex flex-col items-center justify-center p-8 bg-gray-50 rounded-lg shadow-md max-w-md mx-auto">
        <AlertCircle className="text-yellow-500 w-16 h-16 mb-4" />
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            No se encontraron libros para "{query}"
        </h2>
        <div className="w-full">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">¿Qué debo hacer?</h3>
            <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                    <Search className="w-5 h-5 mr-2 text-blue-500" />
                    Comprueba los términos ingresados
                </li>
                <li className="flex items-center">
                    <Search className="w-5 h-5 mr-2 text-blue-500" />
                    Intenta utilizar una sola palabra
                </li>
                <li className="flex items-center">
                    <Search className="w-5 h-5 mr-2 text-blue-500" />
                    Utiliza términos genéricos en la búsqueda
                </li>
                <li className="flex items-center">
                    <Search className="w-5 h-5 mr-2 text-blue-500" />
                    Intenta buscar sinónimos del término deseado
                </li>
            </ul>
        </div>
    </div>
    );
};

export default NoResultsFound;