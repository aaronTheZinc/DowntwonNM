import Downtown from './downtown.js'
import express from 'express'
import downtown from './downtown.js';

const app = express();

app.get('/login', async(req, res)=> {
    const {email, pw} = req.query
    console.log(email,pw)
  const resp = await Downtown.login(email, pw)

   res.send( resp)
})

app.listen(3000,() => {
    console.log('running module')
})

// moduels.exports.downtwon = Downtown