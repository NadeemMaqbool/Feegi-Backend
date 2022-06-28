const express  = require("express");
const bodyParser = require("body-parser");
const usersRoutes = require('./routes/users')
const propertyRoutes = require('./routes/property');
const HttpErrors = require("./models/http-errors");

const app = express()
app.use(bodyParser.json())

app.use('/api/users', usersRoutes)
//app.use('/api/property', propertyRoutes)

// middleware to handle unsupported routes
app.use((req, res, next) => {
    const error = new HttpErrors("Couldn't find the given route", 404)
    next(error)

})
app.use((error, req, res, next) => {
    res.status(error.code || 500)
    return res.json({
        message: error.message || "An Unknown error has occurred"
    })
})

const port = process.env.PORT || 5000
const server = app.listen(port, () => {
    console.log(`Server is listening at port ${port}`)
})

