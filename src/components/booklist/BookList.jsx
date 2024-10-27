import React from 'react';
import AdminCard from '../card/AdminCard';

const BookList = ({books}) => {
    return (
        <div className='h-screen overflow-y-auto scrollbar-hide p-2'>
            <div className="container mx-auto">
                {books.length === 0 ? <p className="text-black">No existen productos.</p> :
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-2 sm:gap-4">
                        {books.map((book) => (
                            <AdminCard key={book.id} book={book} />
                        ))}
                    </div>
                }
            </div>
        </div>
    );
}   

export default BookList;