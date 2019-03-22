"use strict"

let app = require('./app.js')
let port = process.env.PORT || 4004
let logger = require('morgan')

let monsters = require('./routes/monsters.route.js')

app.listen(port, () => {
    console.log("Servidor en el puerto " + port)
})

app.use(logger('dev'))
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method')
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
    res.header('Allow', "GET, POST, OPTIONS, PUT, DELETE")
    next()
})

app.use('/api/v1/monsters/', monsters)