import { getUsers } from "@/actions/getUsers"
import axios from "axios"

const users = async () => {

    const users = await axios.get('/api/getAdmins')

    return (
        <>
            <div>
                {users.data.length > 0 ?
                    users.data?.map((item, index) => (
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