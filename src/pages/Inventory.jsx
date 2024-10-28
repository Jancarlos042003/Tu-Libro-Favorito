import { useState } from "react";
import BooksInventory from "../components/form/BooksInventory"
import CreateInventary from "../components/form/CreateInventory"

const Inventory = () => {
    const [libros, setLibros] = useState([
    { id: 1, nombre: 'Don Quijote', autor: 'Miguel de Cervantes', stock: 10 },
    { id: 2, nombre: '1984', autor: 'George Orwell', stock: 20 },
    ]);

    const agregarLibro = (nuevoLibro) => {
    const nuevoId = Math.max(...libros.map(l => l.id), 0) + 1;
    setLibros([...libros, { id: nuevoId, ...nuevoLibro }]);
    };

    const actualizarStock = (id, nuevoStock) => {
    setLibros(libros.map(libro => 
        libro.id === id ? { ...libro, stock: nuevoStock } : libro
    ));
    };

    return (
    <div>
        <CreateInventary onAgregarLibro={agregarLibro} />
        <BooksInventory
        libros={libros} 
        onActualizarStock={actualizarStock}
        />
    </div>
    );
}

export default Inventory