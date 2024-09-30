import { Send } from 'lucide-react'

const SendButton = () => {
    return(
        <button className='bg-black text-white px-4 py-2 font-bold rounded-lg hover:bg-red-600 transition-colors duration-300 focus:outline-none text-sm flex justify-center w-full'>
            <Send size={18} className='mr-2' />
            <span>Publicar Reseña</span>
        </button>
    )
}

export default SendButton