import express from "express";
import bodyParser from "body-parser";
import usersRoutes from "./routes/users";
import authRoutes from "./routes/auth";
import propertyRoutes from "./routes/property";
import { HttpError } from "./models/http-errors";
import cors from 'cors';

import "./utils/db_connection";
import "reflect-metadata"

const app = express()
app.use(express.json());

app.use(cors())

app.use('/api/auth', authRoutes)
app.use('/api/users', usersRoutes)

//middleware to handle CORS

// middleware to handle unsupported routes
app.use((req, res, next) => {
    const error = new HttpError("Couldn't find the given route", 404)
    next(error)

})
app.use((error, req, res, next) => {
    console.log(error)
    res.status(error.code || 500)
    return res.json({
        message: error.message || "An Unknown error has occurred"
    })
})

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`Server is listening at port ${port}`)
})
export default app

