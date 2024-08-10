import { instance } from './instance';

//define the URL services
const urlServices = {

    createShortUrl : async (origUrl) => {
        return await instance.post('/short',{origUrl})
    }

    // accessShortUrl : async(urlId) => {
    //     return await instance.get(`/${urlId}`)
    // }
}

export default urlServices;