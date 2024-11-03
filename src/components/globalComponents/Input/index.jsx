const Input = ({ type, placeholder, name, onKeyDown, style, value, onChange, required }) => {
    return (
        <>
            <input name={name} required={required} type={type} placeholder={placeholder} onChange={onChange} value={value} onKeyDown={onKeyDown} className={`bg-transparent py-2 px-3 outline-none border-b-2 w-full border-b-green ${style}`} />
        </>
    )
}

export default Input