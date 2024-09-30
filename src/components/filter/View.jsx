import { ChevronUp, ChevronDown } from "lucide-react";

const View = ({isExpanded, setIsExpanded}) => {
    const handleClick = () => {
        setIsExpanded(!isExpanded)
    }

    return(
        <button>
            <div onClick={handleClick} className="flex items-center space-x-1 text-black py-1">
                {isExpanded ? < ChevronUp size={19} /> : <ChevronDown size={19} />}
                <span className="hover:underline">Ver {isExpanded ? "menos" : "más" }</span>
            </div>
        </button>
    )
}

export default View;