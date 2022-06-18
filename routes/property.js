const express = require("express")
const router = express.Router()
const properties  = [
    {
        id: 1,
        title: "Near Raja Bazar",
        price: 300,
        currency: 'EUR'
    },
    {
        id: 3,
        title: "Sadar rwp",
        price: 500,
        currency: 'PKR'
    },

]

router.get('/:pid', (req, res, next) => {
    const propertyList = properties.filter(property => {
        return property.id == parseInt(req.params.pid)
    })
    if (propertyList.length > 0 ) {
        return res.json({property: propertyList})
    }
    const error = new Error("The property id does not exist")
    error.code = 404
    throw error
})

module.exports = router