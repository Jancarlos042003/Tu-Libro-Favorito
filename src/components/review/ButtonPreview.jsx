import { BookOpen } from  'lucide-react'

const ButtonPreview = ({click}) =>{
    return(
        <button
            onClick={click} 
            className='px-3 py-2 font-bold flex items-center text-black border border-gray-300 rounded-md hover:bg-black hover:text-white transition duration-300 ease-in-out'
        >
            <BookOpen size={18} className='mr-2' />
            <span className='text-sm'>Vista previa del libro</span>
        </button>
    )
}

export default ButtonPreview    