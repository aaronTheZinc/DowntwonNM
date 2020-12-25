import axiosWorker from 'axios'

    class axios {
    constructor() {
        this.axios = axiosWorker
    }
        get = async(path, param) =>{
            const response = await this.axios.get(`${path}?${param}`).then(
                 (result) => {
                    const {data} = result
                 return data
             });
                return response
            }

        post = async(path, data) => {
           const response =  this.axios.post(path,data).then(
                (result) => {
                    return result
                }
            );
             return response
        }
    }
export default new axios()