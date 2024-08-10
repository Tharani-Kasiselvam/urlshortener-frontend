import { instance } from "./instance";

const loginServices = {
    login: async (email, password) => {
        return await instance.post('/login', {
            email,
            password
        })
    }
}

export default loginServices