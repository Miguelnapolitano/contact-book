import express, { Application } from 'express'
import 'express-async-errors'
import { handdleErrors } from './errors'
import { clientRouters } from './routers/client.routers'
import { contactRouters } from './routers/contacts.routers'

const app: Application = express()
app.use(express.json())

app.use("/client", clientRouters)
app.use("/contact", contactRouters)

app.use(handdleErrors)

export default app