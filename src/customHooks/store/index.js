const { create } = require("zustand");
import { persist } from "zustand/middleware"

const useStore = create()(
    persist((set) => ({
        userInfo: {},
        userId: "",
        setUserId: (userId) => set({ userId: userId }),
        setUserInfo: (newUserInfo) => set({ userInfo: newUserInfo })
    })
        ,
        {
            name: "user-storage"
        }
    )
)

export default useStore