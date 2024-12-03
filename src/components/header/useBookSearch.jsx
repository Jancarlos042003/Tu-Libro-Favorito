import axios from 'axios';
import { API_URL } from '../../../env';
import { useQuery } from '@tanstack/react-query';

const useBookSearch = (termino) => {
    return useQuery({
        queryKey: ['searchBooks', termino], // Clave de la consulta
        queryFn: async () => {
            if (!termino) return [];
            const { data } = await axios.get(`${API_URL}/api/libro/buscar`, {
                params: { termino },
            });
            return data;
            },
        enabled: !!termino.trim(), // Solo buscar si el término no está vacío
        staleTime: 5000, // Considerar datos frescos por 5 segundos
        cacheTime: 30000, // Mantener datos inactivos en caché por 30 segundos
    });
};

export default useBookSearch