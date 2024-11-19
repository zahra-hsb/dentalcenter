const Input = ({ type, placeholder, disabled, maxLength, name, id, onKeyDown, style, value, onChange, required, register, minLength }) => {
    return (
        <>
            <input
                name={name}
                id={id}
                required={required}
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                minLength={minLength}
                maxLength={maxLength}
                onKeyDown={onKeyDown}
                disabled={disabled}
                {...register(id, { required })}
                className={`bg-transparent py-2 px-3 outline-none border-b-2 text-gray-600 w-full border-b-green ${style}`} />
        </>
    )
}

export default Input