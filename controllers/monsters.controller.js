"use strict"

let request = require('request')

function search(req, res) {
    let number = req.params.number

    let option = {
        method: 'GET',
        url: 'http://dnd5eapi.co/api/monsters/' + number
    }

    request(option, (error, response, body) => {
        if (error) {
            res.status(500).send({ message: 'Internal Server Error' })
        } else {
            res.status(200).send(body)
        }
    })
}

module.exports = {
    search
}