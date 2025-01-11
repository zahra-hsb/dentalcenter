import { getUsers } from "@/actions/getUsers"

const users = () => {
    const users = getUsers()
    return (
        <>
            <div>
                {users.length > 0 ?
                    users?.map((item, index) => (
                        <div key={index}> 
                            {item.name}
                        </div>
                    ))
                    :
                    <div>
                        موردی برای نمایش وجود ندارد...
                    </div>
                }
            </div>
        </>
    )
}

export default users