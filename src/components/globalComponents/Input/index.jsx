const Input = ({ type, placeholder, name, id, onKeyDown, style, value, onChange, required, register, minLength }) => {
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
                onKeyDown={onKeyDown}
                {...register(id, { required })}
                className={`bg-transparent py-2 px-3 outline-none border-b-2 w-full border-b-green ${style}`} />
        </>
    )
}

export default Input