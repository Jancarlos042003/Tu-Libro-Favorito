const TextArea = ({titulo, nombre,  value="", onChange, placeholder, rows, disabled}) => {
    return(
        <label className="text-sm font-medium text-gray-700" htmlFor="vistaPrevia">
            <span className="text-base">{titulo}</span>
            <textarea 
                placeholder={placeholder}
                rows={rows}
                name={nombre}
                value={value}
                onChange={onChange}
                className="text-base w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-0 focus:ring-black focus:border-black outline-none transition-colors resize-y disabled:bg-gray-100"
                disabled={disabled}
                required
            />
        </label>
    )
}

export default TextArea