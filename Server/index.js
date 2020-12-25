
import axios from './axios.js'
import {cookie} from '../Cookie/cookie.js'
class server {
    constructor() {

    }

    login = async(email , pw) => {
        try {
            console.log(email, pw)
            console.log('made it this far')
            const grab = await axios.get('http://localhost:5000/login',`email=${email}&pw=${pw}`);
             if(grab.err) {
                 return grab.err
             }
         
            console.log(grab)
            const {userId} = grab
            console.log('-->', userId)
                
            // cookie.newCookie('userId', userId);
            //Sets uid cookie
            return userId

         

             
        } catch(e) {
            console.log(e);
             return e
        }
         
    }

    logout = (event) => {
        try {
            cookie.newCookie('uid',null);
                event()
        }
        catch(e) {
            return 'An Error Occured '
        }
    }

    upload
}
export const Server = new server()