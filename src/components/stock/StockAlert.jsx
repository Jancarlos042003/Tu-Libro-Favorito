import React from 'react';
import { CircleAlert } from 'lucide-react';

const StockAlert = ({ libro, stock }) => {
    return (
        <div className="w-full border border-red-500 rounded-lg p-4 my-3 flex justify-between">
            <div className="flex items-center">
                
                <div>
                    <img 
                        src={libro.imgPortada} 
                        alt={libro.titulo} 
                        className='h-20 rounded-md'    
                    />
                </div>
                <div className="flex flex-col text-base ml-3 text-red-500">
                    <span className='text-lg mb-1'>{libro.titulo}</span>
                    <span className='text-base'>ISBN: {libro.isbn}</span>
                    <span className='text-base'>Stock actual: {stock}</span>
                </div>
            </div>
            <div className='flex items-center'>
                <CircleAlert className="h-7 w-7 text-red-500" />
            </div>
        </div>
    );
};

export default StockAlert;