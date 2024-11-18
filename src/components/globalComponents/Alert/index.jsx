const Alert = ({ message }) => {
    return (
        <>
            {message &&
                <>
                    <div className={`px-5 py-2 fixed bottom-10 z-50 rounded bg-${message.color} shadow-sm text-black`}>
                        {message.message}
                    </div>
                </>
            }
        </>
    )
}

export default Alert