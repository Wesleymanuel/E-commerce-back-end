import express from 'express'
import { router } from './routes/routes.js'
import cors from 'cors';


const port =  3000
const host = process.env.HOST || '0.0.0.0'

const app = express()
app.use(express.json())
app.use(cors())

app.use('/users', router)

app.listen(port , host , () => {
    console.log(port)
})