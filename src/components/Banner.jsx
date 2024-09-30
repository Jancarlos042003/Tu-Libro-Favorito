import React from 'react';

function Banner() {
    return (
        <div className="bg-gradient-to-r from-cyan-500 to-green-500 text-white p-4 sm:p-8 rounded-lg my-4 sm:my-6">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-4">TUS LIBROS FAVORITOS</h2>
            <p className="text-3xl sm:text-4xl font-extrabold mb-2 sm:mb-4">¡CON EL MEJOR DESCUENTO!</p>
            <p className="mb-4">Hasta el 26 de agosto</p>
            <button className="bg-white text-indigo-600 px-4 sm:px-6 py-2 rounded-full font-bold hover:bg-indigo-100 text-sm sm:text-base hover:border-indigo-500">COMPRA AQUÍ</button>
        </div>
    );
}

export default Banner;