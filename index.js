import express from 'express'
const app = express()
import dotenv from 'dotenv'
dotenv.config()
import { person } from './routes/personRoute.js'
import { phone } from './routes/phoneRoute.js'
import cors from 'cors'
import fs from 'fs'
const port = 3000

const node_env = process.env.NODE_ENV

app.use(express.json()) // this enable JSON communication 
app.use(cors())
app.use('/api/', person)
app.use('/api/', phone)

if (node_env === 'production') {

    const privateKey = fs.readFileSync('/etc/letsencrypt/live/test-ssl.novotechn.com/privkey.pem', 'utf8');
    const certificate = fs.readFileSync('/etc/letsencrypt/live/test-ssl.novotechn.com/fullchain.pem', 'utf8');

    const credentials = { key: privateKey, cert: certificate };

    // Crear servidor HTTPS en puerto 443
    https.createServer(credentials, app).listen(443, () => {
        console.log('Servidor HTTPS escuchando en el puerto 443');
    });


} else {

    app.listen(port, () => {
        console.log(`listening in port ${port}`)

    })

}

