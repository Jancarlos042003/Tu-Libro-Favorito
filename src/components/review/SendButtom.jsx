import { Send } from 'lucide-react'

const SendButton = ({text, disabled=false}) => {
    return(
        <button 
        disabled={disabled}
        className={`bg-black text-white px-4 py-3 font-bold rounded-lg ${disabled ? "hover:bg-neutral-600 cursor-not-allowed" : "hover:bg-neutral-800" } transition-colors duration-300 focus:outline-none text-sm flex justify-center w-full`}
        type='submit'
        >
            <Send size={18} className='mr-2' />
            <span>{text}</span>
        </button>
    )
}

export default SendButton