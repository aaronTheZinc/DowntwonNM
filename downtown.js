
import {auth} from './Auth/index.js'

class downtown {
    constructor(user, id) {
        this.uid = null
    }
    login = async(email, pw) =>{
        console.log(email,pw)
        return  await auth.authenticate(email, pw);
     
    }
}
export default new downtown()