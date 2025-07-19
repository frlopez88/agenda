import express from 'express'
const app = express()
const port = 80
import { person } from './routes/personRoute.js'
import {phone} from './routes/phoneRoute.js'
import cors from 'cors'

app.use( express.json() ) // this enable JSON communication 
app.use(cors())


app.use('/api/' , person)
app.use('/api/' , phone)

app.listen(port, ()=>{

    console.log(`listening in port ${port}`)

})