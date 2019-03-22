"use strict"

let express = require('express')
let app = express()
let api = express.Router()
let MonsterController = require('../controllers/monsters.controller.js')

api.get('/search/:number', MonsterController.search)

module.exports = api