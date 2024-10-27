import { Send } from 'lucide-react'

const SendButton = ({text}) => {
    return(
        <button 
        className='bg-black text-white px-4 py-3 font-bold rounded-lg hover:bg-neutral-800 transition-colors duration-300 focus:outline-none text-sm flex justify-center w-full'
        type='submit'
        >
            <Send size={18} className='mr-2' />
            <span>{text}</span>
        </button>
    )
}

export default SendButton