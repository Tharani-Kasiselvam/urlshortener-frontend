import { instance } from './instance';


// define the register services
const registerServices = {
    // register a new user
    register: async (firstname,lastname, email, password) => {
        // make a POST request to the register endpoint
        return await instance.post('/register', {
            firstname,
            lastname,
            email,
            password
        });
    }
}

// export the user services
export default registerServices;