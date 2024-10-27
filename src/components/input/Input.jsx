const Input = ({titulo, nombre ,tipo, defaultValue="",placeholder="", disabled }) => {
    return(
        <label className="text-sm font-medium text-black">
            <span className="text-base">{titulo}</span>
            <input
            type={tipo}
            placeholder={placeholder}
            defaultValue={defaultValue}
            name={nombre}
            className="text-base w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-0 focus:ring-black focus:border-black disabled:bg-gray-100"
            required
            disabled={disabled}
            />
        </label>
    )
}

export default Input