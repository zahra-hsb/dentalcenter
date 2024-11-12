const Alert = ({ message }) => {
    return (
        <>
            {message &&
                <>
                    <div className={`px-5 py-2 text-white absolute bottom-10 rounded bg-${message.color}`}>
                        {message.message}
                    </div>
                </>
            }
        </>
    )
}

export default Alert