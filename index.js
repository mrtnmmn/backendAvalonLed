import express from 'express'
import mongoose from 'mongoose'
import morgan from 'morgan'
import cors from 'cors'
import dotenv from 'dotenv'
import {router as routerLed} from './routers/ledStatus.js'

dotenv.config()
var app = express()
app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use(cors())
app.use(morgan('dev'))

app.use('/ledStatus', routerLed)

const run = async () => {
    await mongoose.connect(process.env.URL_BASEDATOS, { useNewUrlParser: true, useUnifiedTopology: true })
    await app.listen(process.env.PUERTO_SERVIDOR)
    console.log("Servidor y base de datos arrancados")
}

run().catch(err => console.log('Fallo al arrancar:' + err))