const { create } = require("zustand");


const useStore = create((set) => ({
    userInfo: {},
    setUserInfo: (newUserInfo) => set({ userInfo: newUserInfo })
}))

export default useStore