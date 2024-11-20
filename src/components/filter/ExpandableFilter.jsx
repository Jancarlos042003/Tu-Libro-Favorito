import { useState } from "react"
import CheckboxFilter from "./CheckboxFilter"
import View from "./View"

const ExpandableFilter = ({
    title, 
    options=[], 
    initiallyVisible = 5,
    onFilterChange
}) => {
    const[isExpanded, setIsExpanded] = useState(false)
    const[selectedOptions, setSelectedOptions] = useState([])

    const handleOptionChange = (option) => {
        const newSelectedOptions = selectedOptions.includes(option)
        ? selectedOptions.filter((item) => item !== option)
        : [...selectedOptions, option];
        
        setSelectedOptions(newSelectedOptions);
        onFilterChange(title, newSelectedOptions);
    }

    const visibleOptions = isExpanded ? options : options.slice(0, initiallyVisible)

    return(
        <div className="border rounded-md p-4 flex flex-col">
            <h3 className="font-bold mb-2">{title}</h3>
            {visibleOptions.map(option => (
                <CheckboxFilter 
                    key={option}
                    value={option}
                    isChecked={selectedOptions.includes(option)}
                    onChange={() => handleOptionChange(option)}
                />
            ))}
            {options.length > initiallyVisible && (
                <View isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
            )}
        </div>
    )
}

export default ExpandableFilter 