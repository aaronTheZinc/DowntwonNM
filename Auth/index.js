import { Server } from '../Server/index.js'
export const auth = {
 
    async authenticate(id, pw) {
          return Server.login(id,pw)
    }
}