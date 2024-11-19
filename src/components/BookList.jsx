import React from 'react';
import ProductCard from './card/ProductCard';

function BookList({ libros }) {
    return (
        <div className='w-full mx-auto p-2'>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 sm:gap-4 animate-fade-in">
                {libros.map((libro) => (
                    <ProductCard 
                        key={libro.id} 
                        book={libro} 
                    />
                ))}
            </div>
        </div>
    );
}

export default BookList;